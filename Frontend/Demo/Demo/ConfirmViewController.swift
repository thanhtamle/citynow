//
//  ConfirmViewController.swift
//  Demo
//
//  Created by Tam Huynh on 7/7/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class ConfirmViewController: UIViewController {
    @IBOutlet weak var arrivalBtn: UIButton!
    @IBOutlet weak var departureBtn: UIButton!
    
    @IBOutlet weak var employeeInfoView: UIView!
    @IBOutlet weak var employeeIDLabel: UILabel!
    @IBOutlet weak var employeeNameLabel: UILabel!
    @IBOutlet weak var employeeEmailLabel: UILabel!
    
    var qrCodeValue: String!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        //init navigation bar
        navigationController!.navigationBar.barTintColor = UIColor(hexString: MAIN_COLOR)
        navigationController!.navigationBar.tintColor = UIColor.whiteColor()
        navigationController!.navigationBar.titleTextAttributes = [NSForegroundColorAttributeName: UIColor.whiteColor()]
        
        //arrivalBtn.backgroundColor = UIColor(hexString: MAIN_COLOR)
        departureBtn.backgroundColor = UIColor(hexString: MAIN_BACKGROUND_COLOR)
        
        arrivalBtn.setTitle("arrival".localized(), forState: .Normal)
        departureBtn.setTitle("departure".localized(), forState: .Normal)
        
        let getEmployeeApiRequest: GetEmployeeApiRequest = GetEmployeeApiRequest()
        getEmployeeApiRequest.setEmployeeID(qrCodeValue)
        getEmployeeApiRequest.getEmployee() { (success, data, message) in
            if success == true {
                let result: LoginSuccessResponseModel = data as! LoginSuccessResponseModel
                self.employeeIDLabel.text = result.employeeID
                self.employeeNameLabel.text = result.employeeName
                self.employeeEmailLabel.text = result.employeeEmail
                self.testPermissionToAllowCheckAttendance()
            }
            else {
                
                let button: DialogButton = Utils.showMessageBy(message, controller: self)
                button.addTarget(self, action: #selector(self.myAlertAction(_:)), forControlEvents: .TouchUpInside)
            }
        }
        
        //init bar button
        let btnDone = UIBarButtonItem(title: "exit".localized(), style:.Plain, target: self, action: #selector(done_Clicked(_:)))
        navigationItem.rightBarButtonItem = btnDone
        
    }
    
    func done_Clicked(sender: UIBarButtonItem) {
        dismissViewControllerAnimated(true, completion: nil)
    }
    
    @objc func myAlertAction(sender: DialogButton) {
        sender.dialogView.hide(true)
        dismissViewControllerAnimated(true, completion: nil)
    }
    
    @objc func hideInfoEmployee() {
        employeeInfoView.hidden = true
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
     
    }
    
    func testPermissionToAllowCheckAttendance() {
        let loginSuccessResopneModel: LoginSuccessResponseModel = SettingsManager.shared.getUserAccount()!
        if loginSuccessResopneModel.admin == true || loginSuccessResopneModel.permission == true || loginSuccessResopneModel.employeeID == qrCodeValue  {
            
            NSTimer.scheduledTimerWithTimeInterval(2.0, target: self, selector: #selector(self.hideInfoEmployee), userInfo: nil, repeats: false)
        }
        else {

            let button: DialogButton = Utils.showMessageBy("the_device_account_is_not_admin_please_login_another_account_or_request_permission".localized(), controller: self)
            button.addTarget(self, action: #selector(self.myAlertAction(_:)), forControlEvents: .TouchUpInside)
        }
    }
    
    @IBAction func arrivalDidClick(sender: AnyObject) {
        let loginSuccessResopneModel: LoginSuccessResponseModel = SettingsManager.shared.getUserAccount()!
        
        let time: String = NSDateFormatter.localizedStringFromDate(NSDate(), dateStyle: .MediumStyle, timeStyle: .MediumStyle)

        let attendanceModel: AttendanceModel = AttendanceModel(id: 1, employeeID: qrCodeValue, arrivalTime: time, departureTime: "", finish: false, managerEmployeeID: loginSuccessResopneModel.employeeID)
        
        let checkinApiRequest: CheckinApiRequest = CheckinApiRequest()
        checkinApiRequest.setAttendanceModel(attendanceModel)
        checkinApiRequest.checkIn() { (success, data, message) in
            
            let button: DialogButton
            if success == true {
                button = Utils.showMessageBy("check_in_successful".localized(), controller: self)
            }
            else {
                button = Utils.showMessageBy(message, controller: self)
            }
            
            button.addTarget(self, action: #selector(self.myAlertAction(_:)), forControlEvents: .TouchUpInside)
        }
    }
    
    @IBAction func departureDidClick(sender: AnyObject) {

        let loginSuccessResopneModel: LoginSuccessResponseModel = SettingsManager.shared.getUserAccount()!
        
        let time: String = NSDateFormatter.localizedStringFromDate(NSDate(), dateStyle: .MediumStyle, timeStyle: .MediumStyle)
        
        let attendanceModel: AttendanceModel = AttendanceModel(id: 1, employeeID: qrCodeValue, arrivalTime: "", departureTime: time, finish: true, managerEmployeeID: loginSuccessResopneModel.employeeID)
        
        let checkoutApiRequest: CheckoutApiRequest = CheckoutApiRequest()
        checkoutApiRequest.setAttendanceModel(attendanceModel)
        checkoutApiRequest.checkOut() { (success, data, message) in
            let button: DialogButton
            if success == true {
                button = Utils.showMessageBy("check_out_successful".localized(), controller: self)
            }
            else {
                button = Utils.showMessageBy(message, controller: self)
            }
            
            button.addTarget(self, action: #selector(self.myAlertAction(_:)), forControlEvents: .TouchUpInside)
        }
    }
    
    override func prefersStatusBarHidden() -> Bool {
        return false
    }
}
