//
//  SettingsViewController.swift
//  Demo
//
//  Created by Tam Huynh on 7/6/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class SettingsViewController: UIViewController, LoginControllerDelegate {
    
    var isOpenFromMenu: Bool = true

    @IBOutlet weak var loginBtn: UIButton!
 
    @IBOutlet weak var accountManagerView: UIView!
    @IBOutlet weak var imageProfileView: UIImageView!
    @IBOutlet weak var emailLabel: UILabel!
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var requestPermissionBtn: UIButton!
    @IBOutlet weak var attendanceManagerBtn: UIButton!
    @IBOutlet weak var logoutBtn: UIButton!
    
    @IBOutlet weak var permissionManagerBtn: UIButton!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        //init navigation bar
        navigationController!.navigationBar.barTintColor = UIColor(hexString: MAIN_COLOR)
        navigationController!.navigationBar.tintColor = UIColor.whiteColor()
        navigationController!.navigationBar.titleTextAttributes = [NSForegroundColorAttributeName: UIColor.whiteColor()]
        title = "settings".localized()
        
        loginBtn.backgroundColor = UIColor(hexString: MAIN_COLOR)
        loginBtn.setTitle("login".localized(), forState: .Normal)
        requestPermissionBtn.backgroundColor = UIColor(hexString: MAIN_COLOR)
        requestPermissionBtn.setTitle("request_permission".localized(), forState: .Normal)
        attendanceManagerBtn.backgroundColor = UIColor(hexString: MAIN_COLOR)
        attendanceManagerBtn.setTitle("attendance_manager".localized(), forState: .Normal)
        logoutBtn.backgroundColor = UIColor(hexString: MAIN_COLOR)
        logoutBtn.setTitle("logout".localized(), forState: .Normal)
        permissionManagerBtn.backgroundColor = UIColor(hexString: MAIN_COLOR)
        permissionManagerBtn.setTitle("request_permission_manager".localized(), forState: .Normal)
        
        accountManagerView.hidden = true
        
        imageProfileView.layer.cornerRadius = imageProfileView.frame.size.height / 2
        imageProfileView.clipsToBounds = true
        imageProfileView.layer.borderWidth = 1
        imageProfileView.layer.borderColor = UIColor.whiteColor().CGColor
    }
    
    func setText(){
        title = "settings".localized()
        loginBtn.setTitle("login".localized(), forState: .Normal)
        requestPermissionBtn.setTitle("request_permission".localized(), forState: .Normal)
        attendanceManagerBtn.setTitle("attendance_manager".localized(), forState: .Normal)
        logoutBtn.setTitle("logout".localized(), forState: .Normal)
        permissionManagerBtn.setTitle("request_permission_manager".localized(), forState: .Normal)
        showAccount()
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    override func viewWillAppear(animated: Bool) {
        super.viewWillAppear(animated)
        if isOpenFromMenu {
            self.setNavigationBarItem()
        }
        
        if let loginSuccessResopneModel: LoginSuccessResponseModel = SettingsManager.shared.getUserAccount() {
            emailLabel.text = loginSuccessResopneModel.employeeEmail
            nameLabel.text = loginSuccessResopneModel.employeeName
            showAccount()
        }
        else {
            hideAccount()
        }
        
        NSNotificationCenter.defaultCenter().addObserver(self, selector: #selector(self.setText), name: LCLLanguageChangeNotification, object: nil)
    }
    
    @IBAction func loginDidClick(sender: AnyObject) {
        let mainStoryboard = UIStoryboard(name: "Main", bundle: nil)
        let loginViewController = mainStoryboard.instantiateViewControllerWithIdentifier("LoginViewController") as! LoginViewController
        let nav = UINavigationController(rootViewController: loginViewController)
        navigationController!.presentViewController(nav, animated: true, completion: nil)
        
        loginViewController.delegate = self
    }
    
    @IBAction func requestPermissionDidClick(sender: AnyObject) {
 
        let requestPermissionApiRequest: RequestPermissionApiRequest = RequestPermissionApiRequest()
        let loginSuccessResopneModel: LoginSuccessResponseModel = SettingsManager.shared.getUserAccount()!

        if loginSuccessResopneModel.permission == true {
            Utils.showMessage("granted_permission".localized(), controller: self)
        }
        else {
            let permissionModel: PermissionModel = PermissionModel(id: 1, employeeID: loginSuccessResopneModel.employeeID, isPermission: false, deleteFlag: false)
            
            requestPermissionApiRequest.setPermissionModel(permissionModel)
            requestPermissionApiRequest.requestPermission() { (success, data, message) in
                if success == true {
                    Utils.showMessage("sent_request_permission_please_wait_for_admin_respone".localized(), controller: self)
                }
                else {
                    Utils.showMessage(message, controller: self)
                }
            }
        }
    }
    
    @IBAction func attendanceManagerDidClick(sender: AnyObject) {
        let mainStoryboard = UIStoryboard(name: "Main", bundle: nil)
        let attendanceViewController = mainStoryboard.instantiateViewControllerWithIdentifier("AttendanceViewController") as! AttendanceViewController
        let nav = UINavigationController(rootViewController: attendanceViewController)
        navigationController!.presentViewController(nav, animated: true, completion: nil)
    }
    
    @IBAction func logoutDidClick(sender: AnyObject) {
        hideAccount()
        SettingsManager.shared.saveUserAccount(nil)
    }
    
    func loginSuccess() {
        showAccount()
    }
    
    func hideAccount() {
        accountManagerView.hidden = true
        loginBtn.hidden = false
    }
    
    func showAccount() {
        accountManagerView.hidden = false
        loginBtn.hidden = true
        
        let loginSuccessResopneModel: LoginSuccessResponseModel = SettingsManager.shared.getUserAccount()!
        
        if loginSuccessResopneModel.admin == true {
            requestPermissionBtn.hidden = true
            nameLabel.text = loginSuccessResopneModel.employeeName + " (" + "admin".localized() + ")"
            nameLabel.textColor = UIColor(hexString: MAIN_COLOR)
            permissionManagerBtn.hidden = false
        }
        else {
            permissionManagerBtn.hidden = true
            nameLabel.textColor = UIColor.blackColor()
            requestPermissionBtn.hidden = false
            if loginSuccessResopneModel.permission == true {
                requestPermissionBtn.setTitle("granted_permission".localized(), forState: .Normal)
            }
            else {
                requestPermissionBtn.setTitle("request_permission".localized(), forState: .Normal)
            }
        }
    }
    
    @IBAction func permissionManagerDidClick(sender: AnyObject) {
        let mainStoryboard = UIStoryboard(name: "Main", bundle: nil)
        let permissionManagerViewController = mainStoryboard.instantiateViewControllerWithIdentifier("PermissionManagerViewController") as! PermissionManagerViewController
        let nav = UINavigationController(rootViewController: permissionManagerViewController)
        navigationController!.presentViewController(nav, animated: true, completion: nil)
    }
    
}


