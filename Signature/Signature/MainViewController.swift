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
    @IBOutlet weak var colorView: UIView!
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
    
    var color = UIColor.blackColor()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        shareBtn.backgroundColor = UIColor(hexString: MAIN_COLOR)
        clearBtn.backgroundColor = UIColor(hexString: MAIN_COLOR)
        colorBtn.backgroundColor = UIColor(hexString: MAIN_COLOR)
        sizeBtn.backgroundColor = UIColor(hexString: MAIN_COLOR)
        
        abstractView.backgroundColor = UIColor.blackColor()
        abstractView.alpha = 0.4
        
        sizeDialog.backgroundColor = UIColor.whiteColor()
        sizeDialog.layer.shadowColor = UIColor.blackColor().CGColor
        sizeDialog.layer.shadowOpacity = 0.5
        sizeDialog.layer.shadowOffset = CGSizeZero
        sizeDialog.layer.shadowRadius = 5
        sizeDialog.layer.cornerRadius = 5
        
        buttonCloseSizeDialog.backgroundColor = UIColor(hexString: MAIN_COLOR)
        buttonCloseSizeDialog.layer.cornerRadius = 5
        sliderBrush.value = Float(brushWidth)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    override func prefersStatusBarHidden() -> Bool {
        return true
    }

    @IBAction func clearSignatureClicked(sender: AnyObject) {
        mainImageView.image = nil
    }

    @IBAction func shareSignatureClicked(sender: AnyObject) {
        UIGraphicsBeginImageContext(mainImageView.bounds.size)
        
        let rect = CGRectMake(0, 0, mainImageView.frame.size.width, mainImageView.frame.size.height)
        UIColor.whiteColor().setFill()
        UIRectFill(rect)
        mainImageView.image?.drawInRect(CGRect(x: 0, y: 0,
            width: mainImageView.frame.size.width, height: mainImageView.frame.size.height))
        
        let image = UIGraphicsGetImageFromCurrentImageContext()
        UIGraphicsEndImageContext()
        
        let imageData: NSData = UIImagePNGRepresentation(image)!
        let strBase64: String = imageData.base64EncodedStringWithOptions(.Encoding64CharacterLineLength)
        
        var postBase64: String = "image/png;base64,"
        postBase64 = postBase64.stringByAppendingString(strBase64)
        
        let uploadImageApiRequest = UploadImageApiRequest()
        uploadImageApiRequest.upload(postBase64) { (success, data, message) in
            if success == true {
                
            }
            else {
                
            }
        }
    }
    
    @IBAction func sliderBrushChanged(sender: UISlider) {
        brushWidth = CGFloat(sender.value)

    }
    
    @IBAction func sizeClicked(sender: AnyObject) {
        abstractView.hidden = false
        sizeDialog.hidden = false
        lockDraw = true
    }
    
    @IBAction func closeSizeDialogClicked(sender: AnyObject) {
        abstractView.hidden = true
        sizeDialog.hidden = true
        lockDraw = false
    }
    
    @IBAction func colorClicked(sender: AnyObject) {
        self.showColorPicker()
    }
    
    override func touchesBegan(touches: Set<UITouch>, withEvent event: UIEvent?) {
        if(lockDraw == true) {
            return
        }
        
        swiped = false
        if let touch = touches.first {
            lastPoint = touch.locationInView(self.view)
        }
    }
    
    func drawLineFrom(fromPoint: CGPoint, toPoint: CGPoint) {
        // 1
        UIGraphicsBeginImageContext(view.frame.size)
        let context = UIGraphicsGetCurrentContext()
        tempImageView.image?.drawInRect(CGRect(x: 0, y: 0, width: view.frame.size.width, height: view.frame.size.height))
        
        // 2
        CGContextMoveToPoint(context, fromPoint.x, fromPoint.y)
        CGContextAddLineToPoint(context, toPoint.x, toPoint.y)
        
        // 3
        CGContextSetLineCap(context, CGLineCap.Round)
        CGContextSetLineWidth(context, brushWidth)
        CGContextSetStrokeColorWithColor(context, color.CGColor)
//        CGContextSetRGBStrokeColor(context, red, green, blue, 1.0)
        CGContextSetBlendMode(context, CGBlendMode.Normal)
        
        // 4
        CGContextStrokePath(context)
        
        // 5
        tempImageView.image = UIGraphicsGetImageFromCurrentImageContext()
        tempImageView.alpha = opacity
        UIGraphicsEndImageContext()
        
    }
    
    override func touchesMoved(touches: Set<UITouch>, withEvent event: UIEvent?) {
        if(lockDraw == true) {
            return
        }
        
        // 6
        swiped = true
        if let touch = touches.first  {
            let currentPoint = touch.locationInView(view)
            drawLineFrom(lastPoint, toPoint: currentPoint)
            
            // 7
            lastPoint = currentPoint
        }
    }
    
    override func touchesEnded(touches: Set<UITouch>, withEvent event: UIEvent?) {
        if(lockDraw == true) {
            return
        }
        
        if !swiped {
            // draw a single point
            drawLineFrom(lastPoint, toPoint: lastPoint)
        }
        
        // Merge tempImageView into mainImageView
        UIGraphicsBeginImageContext(mainImageView.frame.size)
        mainImageView.image?.drawInRect(CGRect(x: 0, y: 0, width: view.frame.size.width, height: view.frame.size.height), blendMode: CGBlendMode.Normal, alpha: 1.0)
        tempImageView.image?.drawInRect(CGRect(x: 0, y: 0, width: view.frame.size.width, height: view.frame.size.height), blendMode: CGBlendMode.Normal, alpha: opacity)
        mainImageView.image = UIGraphicsGetImageFromCurrentImageContext()
        UIGraphicsEndImageContext()
        
        tempImageView.image = nil
    }
    
    func adaptivePresentationStyleForPresentationController(controller: UIPresentationController) -> UIModalPresentationStyle {
        
        // show popover box for iPhone and iPad both
        return UIModalPresentationStyle.None
    }

    // called by color picker after color selected.
    func colorPickerDidColorSelected(selectedUIColor selectedUIColor: UIColor, selectedHexColor: String) {
        red = selectedUIColor.coreImageColor.red
        green = selectedUIColor.coreImageColor.green
        blue = selectedUIColor.coreImageColor.blue
        color = selectedUIColor
    }

    
    // show color picker from UIButton
    private func showColorPicker(){
        
        // initialise color picker view controller
        let colorPickerVc = storyboard?.instantiateViewControllerWithIdentifier("sbColorPicker") as! ColorPickerViewController
        
        // set modal presentation style
        colorPickerVc.modalPresentationStyle = .Popover
        
        // set max. size
        colorPickerVc.preferredContentSize = CGSizeMake(265, 400)
        
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
            popoverController.permittedArrowDirections = UIPopoverArrowDirection.Any
            
            // set popover delegate self
            popoverController.delegate = self
        }
        
        //show color popover
        presentViewController(colorPickerVc, animated: true, completion: nil)
    }


}
