//
//  LoginViewController.swift
//  Demo
//
//  Created by Tam Huynh on 7/8/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

protocol LoginControllerDelegate {
    func loginSuccess()
}

class LoginViewController: UIViewController {

    @IBOutlet weak var employeeIDLabel: UILabel!
    @IBOutlet weak var employeeIDTF: UITextField!
    
    @IBOutlet weak var passwordLabel: UILabel!
    @IBOutlet weak var passwordTF: UITextField!
    
    @IBOutlet weak var loginBtn: UIButton!
    
    var delegate: LoginControllerDelegate!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        //init navigation bar
        navigationController!.navigationBar.barTintColor = UIColor(hexString: MAIN_COLOR)
        navigationController!.navigationBar.tintColor = UIColor.whiteColor()
        navigationController!.navigationBar.titleTextAttributes = [NSForegroundColorAttributeName: UIColor.whiteColor()]
        
        title = "login".localized()
        
        //init view
        employeeIDLabel.text = "employeeID".localized() + ":"
        passwordLabel.text = "password".localized() + ":"
        loginBtn.setTitle("login".localized(), forState: .Normal)
        loginBtn.backgroundColor = UIColor(hexString: MAIN_COLOR)
        
        //init bar button
        let btnDone = UIBarButtonItem(title: "exit".localized(), style:.Plain, target: self, action: #selector(done_Clicked(_:)))
        navigationItem.rightBarButtonItem = btnDone
        
        let tapGesture = UITapGestureRecognizer(target: self, action: #selector(tap(_:)))
        view.addGestureRecognizer(tapGesture)
    }
    
    func tap(gesture: UITapGestureRecognizer) {
        hideKeyboard()
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }

    func done_Clicked(sender: UIBarButtonItem) {
        dismissViewControllerAnimated(true, completion: nil)
    }
    
    @IBAction func loginDidCick(sender: AnyObject) {
        hideKeyboard()
        let loginApiRequest: LoginApiRequest = LoginApiRequest()
        loginApiRequest.setLoginModel(LoginModel(employeeID: employeeIDTF.text!, employeePassword: passwordTF.text!))
        loginApiRequest.login() { (success, data, message) in
            if success == true {
                let result: LoginSuccessResponseModel = data as! LoginSuccessResponseModel
                self.dismissViewControllerAnimated(true, completion: nil)
                SettingsManager.shared.saveUserAccount(result)
                self.delegate.loginSuccess()
            }
            else {
                Utils.showMessage(message, controller: self)
            }
        }
    }
    
    func hideKeyboard() {
        employeeIDTF.resignFirstResponder()
        passwordTF.resignFirstResponder()
    }
}
