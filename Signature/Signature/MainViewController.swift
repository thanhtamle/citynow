//
//  MainViewController.swift
//  Signature
//
//  Created by Thanh-Tam Le on 8/30/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class MainViewController: UIViewController, UIPopoverPresentationControllerDelegate, ColorPickerDelegate {

    @IBOutlet weak var mainImageView: UIImageView!
    @IBOutlet weak var tempImageView: UIImageView!
    @IBOutlet weak var shareBtn: UIButton!
    @IBOutlet weak var clearBtn: UIButton!
    @IBOutlet weak var colorBtn: UIButton!
    @IBOutlet weak var sizeBtn: UIButton!
    @IBOutlet weak var sizeDialog: UIView!
    @IBOutlet weak var abstractView: UIView!
    @IBOutlet weak var sliderBrush: UISlider!
    @IBOutlet weak var buttonCloseSizeDialog: UIButton!
    
    var lockDraw = false
    
    var lastPoint = CGPoint.zero
    var red: CGFloat = 0.0
    var green: CGFloat = 0.0
    var blue: CGFloat = 0.0
    var brushWidth: CGFloat = 10
    var opacity: CGFloat = 1.0
    var swiped = false
    
    var color = UIColor.black
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        shareBtn.backgroundColor = UIColor(hexString: MAIN_COLOR)
        clearBtn.backgroundColor = UIColor(hexString: MAIN_COLOR)
        colorBtn.backgroundColor = UIColor(hexString: MAIN_COLOR)
        sizeBtn.backgroundColor = UIColor(hexString: MAIN_COLOR)
        
        abstractView.backgroundColor = UIColor.black
        abstractView.alpha = 0.4
        
        sizeDialog.backgroundColor = UIColor.white
        sizeDialog.layer.shadowColor = UIColor.black.cgColor
        sizeDialog.layer.shadowOpacity = 0.5
        sizeDialog.layer.shadowOffset = CGSize.zero
        sizeDialog.layer.shadowRadius = 5
        sizeDialog.layer.cornerRadius = 5
        
        buttonCloseSizeDialog.backgroundColor = UIColor(hexString: MAIN_COLOR)
        buttonCloseSizeDialog.layer.cornerRadius = 5
        sliderBrush.value = Float(brushWidth)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    override var prefersStatusBarHidden : Bool {
        return true
    }

    @IBAction func clearSignatureClicked(_ sender: AnyObject) {
        clear()
    }
    
    func clear() {
        mainImageView.image = nil
    }

    @IBAction func settingClicked(_ sender: AnyObject) {
        let mainStoryboard = UIStoryboard(name: "Main", bundle: nil)
        let loginViewController = mainStoryboard.instantiateViewController(withIdentifier: "SettingViewController") as! SettingViewController
        let nav = UINavigationController(rootViewController: loginViewController)
        navigationController!.present(nav, animated: true, completion: nil)
    }
    @IBAction func shareSignatureClicked(_ sender: AnyObject) {
        UIGraphicsBeginImageContext(mainImageView.bounds.size)
        
//        let rect = CGRect(x: 0, y: 0, width: mainImageView.frame.size.width, height: mainImageView.frame.size.height)
//        UIColor.white.setFill()
//        UIRectFill(rect)
        mainImageView.image?.draw(in: CGRect(x: 0, y: 0,
            width: mainImageView.frame.size.width, height: mainImageView.frame.size.height))
        
        let image = UIGraphicsGetImageFromCurrentImageContext()
        UIGraphicsEndImageContext()
        
        let imageData: Data = UIImagePNGRepresentation(image!)!
        let strBase64: String = imageData.base64EncodedString(options: .lineLength64Characters)
        
        var postBase64: String = "image/png;base64,"
        postBase64 = postBase64 + strBase64
        
        let uploadImageApiRequest = UploadImageApiRequest()
        uploadImageApiRequest.view = self.view
        uploadImageApiRequest.upload(postBase64) { (success, data, message) in
            if success == true {
                self.clear()
            }
            else {
                
            }
        }
    }
    
    @IBAction func sliderBrushChanged(_ sender: UISlider) {
        brushWidth = CGFloat(sender.value)

    }
    
    @IBAction func sizeClicked(_ sender: AnyObject) {
        abstractView.isHidden = false
        sizeDialog.isHidden = false
        lockDraw = true
    }
    
    @IBAction func closeSizeDialogClicked(_ sender: AnyObject) {
        abstractView.isHidden = true
        sizeDialog.isHidden = true
        lockDraw = false
    }
    
    @IBAction func colorClicked(_ sender: AnyObject) {
        self.showColorPicker()
    }
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        if(lockDraw == true) {
            return
        }
        
        swiped = false
        if let touch = touches.first {
            lastPoint = touch.location(in: self.view)
        }
    }
    
    func drawLineFrom(_ fromPoint: CGPoint, toPoint: CGPoint) {
        // 1
        UIGraphicsBeginImageContext(view.frame.size)
        let context = UIGraphicsGetCurrentContext()
        tempImageView.image?.draw(in: CGRect(x: 0, y: 0, width: view.frame.size.width, height: view.frame.size.height))
        
        // 2
        context?.move(to: CGPoint(x: fromPoint.x, y: fromPoint.y))
        context?.addLine(to: CGPoint(x: toPoint.x, y: toPoint.y))
        
        // 3
        context?.setLineCap(CGLineCap.round)
        context?.setLineWidth(brushWidth)
        context?.setStrokeColor(color.cgColor)
//        CGContextSetRGBStrokeColor(context, red, green, blue, 1.0)
        context?.setBlendMode(CGBlendMode.normal)
        
        // 4
        context?.strokePath()
        
        // 5
        tempImageView.image = UIGraphicsGetImageFromCurrentImageContext()
        tempImageView.alpha = opacity
        UIGraphicsEndImageContext()
        
    }
    
    override func touchesMoved(_ touches: Set<UITouch>, with event: UIEvent?) {
        if(lockDraw == true) {
            return
        }
        
        // 6
        swiped = true
        if let touch = touches.first  {
            let currentPoint = touch.location(in: view)
            drawLineFrom(lastPoint, toPoint: currentPoint)
            
            // 7
            lastPoint = currentPoint
        }
    }
    
    override func touchesEnded(_ touches: Set<UITouch>, with event: UIEvent?) {
        if(lockDraw == true) {
            return
        }
        
        if !swiped {
            // draw a single point
            drawLineFrom(lastPoint, toPoint: lastPoint)
        }
        
        // Merge tempImageView into mainImageView
        UIGraphicsBeginImageContext(mainImageView.frame.size)
        mainImageView.image?.draw(in: CGRect(x: 0, y: 0, width: view.frame.size.width, height: view.frame.size.height), blendMode: CGBlendMode.normal, alpha: 1.0)
        tempImageView.image?.draw(in: CGRect(x: 0, y: 0, width: view.frame.size.width, height: view.frame.size.height), blendMode: CGBlendMode.normal, alpha: opacity)
        mainImageView.image = UIGraphicsGetImageFromCurrentImageContext()
        UIGraphicsEndImageContext()
        
        tempImageView.image = nil
    }
    
    func adaptivePresentationStyle(for controller: UIPresentationController) -> UIModalPresentationStyle {
        
        // show popover box for iPhone and iPad both
        return UIModalPresentationStyle.none
    }

    // called by color picker after color selected.
    func colorPickerDidColorSelected(selectedUIColor: UIColor, selectedHexColor: String) {
        red = selectedUIColor.coreImageColor.red
        green = selectedUIColor.coreImageColor.green
        blue = selectedUIColor.coreImageColor.blue
        color = selectedUIColor
    }

    
    // show color picker from UIButton
    fileprivate func showColorPicker(){
        
        // initialise color picker view controller
        let colorPickerVc = storyboard?.instantiateViewController(withIdentifier: "sbColorPicker") as! ColorPickerViewController
        
        // set modal presentation style
        colorPickerVc.modalPresentationStyle = .popover
        
        // set max. size
        colorPickerVc.preferredContentSize = CGSize(width: 265, height: 400)
        
        // set color picker deleagate to current view controller
        // must write delegate method to handle selected color
        colorPickerVc.colorPickerDelegate = self
        
        // show popover
        if let popoverController = colorPickerVc.popoverPresentationController {
            
            // set source view
            popoverController.sourceView = self.view
            
            // show popover form button
            popoverController.sourceRect = self.colorBtn.frame
            
            // show popover arrow at feasible direction
            popoverController.permittedArrowDirections = UIPopoverArrowDirection.any
            
            // set popover delegate self
            popoverController.delegate = self
        }
        
        //show color popover
        present(colorPickerVc, animated: true, completion: nil)
    }


}
