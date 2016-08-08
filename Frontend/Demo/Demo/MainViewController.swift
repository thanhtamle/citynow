//
//  MainViewController.swift
//  Demo
//
//  Created by Tam Le on 6/25/16.
//  Copyright (c) 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit
import AVFoundation

class MainViewController: UIViewController, AVCaptureMetadataOutputObjectsDelegate, LoginControllerDelegate {
    
    @IBOutlet weak var dateLabel: UILabel!
    @IBOutlet weak var timeLabel: UILabel!
    @IBOutlet weak var cameraView: UIView!
    @IBOutlet weak var videoCamBarBtnItem: UIBarButtonItem!
    @IBOutlet weak var switchCamBarBtnItem: UIBarButtonItem!
    @IBOutlet weak var message: UILabel!
    
    var isCamera: Bool = true
    var isWaitingConfirm = true
    var qrCodeValue: String!
    
    //camera
    var captureSession:AVCaptureSession?
    var videoPreviewLayer:AVCaptureVideoPreviewLayer?
    
    // Added to support different barcodes
    let supportedBarCodes = [AVMetadataObjectTypeQRCode, AVMetadataObjectTypeCode128Code, AVMetadataObjectTypeCode39Code, AVMetadataObjectTypeCode93Code, AVMetadataObjectTypeUPCECode, AVMetadataObjectTypePDF417Code, AVMetadataObjectTypeEAN13Code, AVMetadataObjectTypeAztecCode]

    override func viewDidLoad() {
        super.viewDidLoad()
        if let language = SettingsManager.shared.getCurrentLanguage() {
            Localize.setCurrentLanguage(language)
        }

        loginAccount()
        
        //change color Status Bar to Light
        UIApplication.sharedApplication().setStatusBarStyle(UIStatusBarStyle.LightContent, animated: true)
        
        navigationItem.title = "home".localized()

        //init navigation bar
        navigationController!.navigationBar.barTintColor = UIColor(hexString: MAIN_COLOR)
        navigationController!.navigationBar.tintColor = UIColor.whiteColor()
        navigationController!.navigationBar.titleTextAttributes = [NSForegroundColorAttributeName: UIColor.whiteColor()]
   
        
        dateLabel.textColor = UIColor.whiteColor()
        timeLabel.textColor = UIColor.whiteColor()
        message.textColor = UIColor.whiteColor()
        
        view.backgroundColor = UIColor(hexString: MAIN_COLOR)
        
        NSTimer.scheduledTimerWithTimeInterval(1.0, target: self, selector: #selector(self.tick), userInfo: nil, repeats: true)
        
        initCam()
    }
    
    func setText(){
        navigationItem.title = "home".localized()
    }
    
    func loginAccount() -> Bool {
        if SettingsManager.shared.getUserAccount() == nil {
            let mainStoryboard = UIStoryboard(name: "Main", bundle: nil)
            let loginViewController = mainStoryboard.instantiateViewControllerWithIdentifier("LoginViewController") as! LoginViewController
            let nav = UINavigationController(rootViewController: loginViewController)
            navigationController!.presentViewController(nav, animated: true, completion: nil)
            
            loginViewController.delegate = self
            return true
        }
        return false
    }

    @IBAction func menuDidClick(sender: AnyObject) {
        self.slideMenuController()?.openLeft()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    override func viewWillAppear(animated: Bool) {
        super.viewWillAppear(animated)
        NSNotificationCenter.defaultCenter().addObserver(self, selector: #selector(self.setText), name: LCLLanguageChangeNotification, object: nil)
    }
    
    @objc func tick() {
        dateLabel.text = NSDateFormatter.localizedStringFromDate(NSDate(), dateStyle: .FullStyle, timeStyle: .NoStyle)
        timeLabel.text = NSDateFormatter.localizedStringFromDate(NSDate(), dateStyle: .NoStyle, timeStyle: .MediumStyle)
    }

    @IBAction func videoCamDidClick(sender: AnyObject) {
        if isCamera {
            captureSession?.stopRunning()
            videoPreviewLayer?.removeFromSuperlayer()
            videoCamBarBtnItem.image = UIImage(named: "ic_videocam")
            isCamera = false
            switchCamBarBtnItem.enabled = false
        }
        else {
            initCam()
            videoCamBarBtnItem.image = UIImage(named: "ic_videocam_off")
            isCamera = true
            switchCamBarBtnItem.enabled = true
        }
    }
    
    @IBAction func settingsDidClick(sender: AnyObject) {
        let mainStoryboard = UIStoryboard(name: "Main", bundle: nil)
        
        let settingsViewController = mainStoryboard.instantiateViewControllerWithIdentifier("SettingsViewController") as! SettingsViewController
        navigationController!.pushViewController(settingsViewController, animated: true)
        settingsViewController.isOpenFromMenu = false
    }
    
    
    @IBAction func switchCameraDidClick(sender: AnyObject) {
        if SettingsManager.shared.getTypeCamera() == true {
            SettingsManager.shared.saveTypeCamera(false)
        }
        else {
            SettingsManager.shared.saveTypeCamera(true)
        }
        
        captureSession?.stopRunning()
        videoPreviewLayer?.removeFromSuperlayer()
        initCam()
    }
    
    func initCam() {
        let videoDevices = AVCaptureDevice.devicesWithMediaType(AVMediaTypeVideo)
        var captureDevice: AVCaptureDevice!
        
        if SettingsManager.shared.getTypeCamera() == true {
            captureDevice = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo)
        }
        else {
            for device in videoDevices{
                let device = device as! AVCaptureDevice
                if device.position == AVCaptureDevicePosition.Front {
                    captureDevice = device
                    break
                }
            }
        }
        
        do {
            // Get an instance of the AVCaptureDeviceInput class using the previous device object.
            let input = try AVCaptureDeviceInput(device: captureDevice)
            
            // Initialize the captureSession object.
            captureSession = AVCaptureSession()
            // Set the input device on the capture session.
            captureSession?.addInput(input)
            
            // Initialize a AVCaptureMetadataOutput object and set it as the output device to the capture session.
            let captureMetadataOutput = AVCaptureMetadataOutput()
            captureSession?.addOutput(captureMetadataOutput)
            
            // Set delegate and use the default dispatch queue to execute the call back
            captureMetadataOutput.setMetadataObjectsDelegate(self, queue: dispatch_get_main_queue())
            
            // Detect all the supported bar code
            captureMetadataOutput.metadataObjectTypes = supportedBarCodes
            
            // Initialize the video preview layer and add it as a sublayer to the viewPreview view's layer.
            videoPreviewLayer = AVCaptureVideoPreviewLayer(session: captureSession)
            videoPreviewLayer?.videoGravity = AVLayerVideoGravityResizeAspectFill
            videoPreviewLayer?.frame = view.layer.bounds
            view.layer.addSublayer(videoPreviewLayer!)
            
            // Start video capture
            captureSession?.startRunning()
            
            // Move the message label to the top view
            view.bringSubviewToFront(message)
            view.bringSubviewToFront(dateLabel)
            view.bringSubviewToFront(timeLabel)
            
            // Initialize QR Code Frame to highlight the QR code
            if let cameraView = cameraView {
                cameraView.layer.borderColor = UIColor.greenColor().CGColor
                cameraView.layer.borderWidth = 2
                view.addSubview(cameraView)
                view.bringSubviewToFront(cameraView)
            }
            
        } catch {
            print(error)
            return
        }
    }
    
    func captureOutput(captureOutput: AVCaptureOutput!, didOutputMetadataObjects metadataObjects: [AnyObject]!, fromConnection connection: AVCaptureConnection!) {
        
        if metadataObjects == nil || metadataObjects.count == 0 {
            cameraView.frame = CGRectZero
            message.text = "No barcode/QR code is detected"
            return
        }
        
        let metadataObj = metadataObjects[0] as! AVMetadataMachineReadableCodeObject
        if supportedBarCodes.contains(metadataObj.type) {
            let barCodeObject = videoPreviewLayer?.transformedMetadataObjectForMetadataObject(metadataObj)
            cameraView.frame = barCodeObject!.bounds
            
            if metadataObj.stringValue != nil {
                message.text = metadataObj.stringValue
                qrCodeValue = metadataObj.stringValue
                if isWaitingConfirm {
                     NSTimer.scheduledTimerWithTimeInterval(1.0, target: self, selector: #selector(goToConfirmEmployee), userInfo: nil, repeats: false)
                    isWaitingConfirm = false
                }
            }
        }
    }
    
    @objc func goToConfirmEmployee() {
        isWaitingConfirm = true
        if loginAccount() == false {
            captureSession?.stopRunning()
            
            //navigate to ConfirmViewController
            let mainStoryboard = UIStoryboard(name: "Main", bundle: nil)
            let confirmViewController = mainStoryboard.instantiateViewControllerWithIdentifier("ConfirmViewController") as! ConfirmViewController
            let nav = UINavigationController(rootViewController: confirmViewController)
            navigationController!.presentViewController(nav, animated: true, completion: nil)
            confirmViewController.qrCodeValue = qrCodeValue
            captureSession?.startRunning()
        }
    }
    
    func loginSuccess() {
        
    }
}



extension MainViewController : SlideMenuControllerDelegate {
    
    func leftWillOpen() {
    }
    
    func leftDidOpen() {
    }
    
    func leftWillClose() {
    }
    
    func leftDidClose() {
    }
    
    func rightWillOpen() {
    }
    
    func rightDidOpen() {
    }
    
    func rightWillClose() {
    }
    
    func rightDidClose() {
    }
}
