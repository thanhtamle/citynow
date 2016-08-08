//
//  PermissionManagerCell.swift
//  Demo
//
//  Created by Tam Huynh on 7/14/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class PermissionManagerCell: UITableViewCell {

    @IBOutlet weak var employeeImageView: UIImageView!
    
    @IBOutlet weak var employeeIDLabel: UILabel!
    
    @IBOutlet weak var grantPermissionBtn: UIButton!
    
    var permissionModel: PermissionModel!
    var controller: UIViewController!
    
    
    override func awakeFromNib() {
        super.awakeFromNib()
        
        self.employeeImageView.layer.cornerRadius = self.employeeImageView.frame.size.height / 2
        self.employeeImageView.clipsToBounds = true
        self.employeeImageView.layer.borderWidth = 1
        self.employeeImageView.layer.borderColor = UIColor.whiteColor().CGColor
        self.employeeImageView.image = UIImage(named: "User")
    }
    
    override func setSelected(selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }
    
    func setData(permissionModel: PermissionModel) {
        
        employeeIDLabel.text = "employee_id".localized() + ": " + permissionModel.employeeID

        if permissionModel.isPermission == true {
            grantPermissionBtn.setTitle("granted_permission".localized(), forState: .Normal)
        }
        else {
            grantPermissionBtn.setTitle("grant_permission".localized(), forState: .Normal)
        }
        
        self.permissionModel = permissionModel
        
    }

    @IBAction func GrantPermissionDidClick(sender: AnyObject) {

        let updateRequestPermissionApiRequest: UpdateRequestPermissionApiRequest = UpdateRequestPermissionApiRequest()
        
        if permissionModel.isPermission == true {
            Utils.showMessage("granted_permission".localized(), controller: self.controller)
        }
        else {
            updateRequestPermissionApiRequest.setPermissionModel(permissionModel)
            updateRequestPermissionApiRequest.updateRequestPermission() { (success, data, message) in
                if success == true {
                    Utils.showMessage("granted_permission".localized(), controller: self.controller)
                    self.grantPermissionBtn.setTitle("granted_permission".localized(), forState: .Normal)
                }
                else {
                    Utils.showMessage(message, controller: self.controller)
                }
            }
        }
    }
    
}
