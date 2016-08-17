//
//  LoginSuccessResponseModel.swift
//  Demo
//
//  Created by Tam Huynh on 7/11/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class LoginSuccessResponseModel: NSObject, NSCoding {
    var id: Int!
    var employeeID: String!
    var employeePassword: String!
    var employeeName: String!
    var employeeEmail: String!
    var admin: Bool!
    var permission: Bool!
    var deleteFlag: Bool!
    
    init(id: Int, employeeID: String, employeePassword: String, employeeName: String, employeeEmail: String, admin: Bool, permission: Bool, deleteFlag: Bool) {
        self.id = id
        self.employeeID = employeeID
        self.employeePassword = employeePassword
        self.employeeName = employeeName
        self.employeeEmail = employeeEmail
        self.admin = admin
        self.permission = permission
        self.deleteFlag = deleteFlag
    }
    
    required convenience init(coder aDecoder: NSCoder) {
        let id = aDecoder.decodeIntegerForKey("id")
        let employeeID = aDecoder.decodeObjectForKey("employeeID") as! String
        let employeePassword = aDecoder.decodeObjectForKey("employeePassword") as! String
        let employeeName = aDecoder.decodeObjectForKey("employeeName") as! String
        let employeeEmail = aDecoder.decodeObjectForKey("employeeEmail") as! String
        let admin = aDecoder.decodeObjectForKey("admin") as! Bool
        let permission = aDecoder.decodeObjectForKey("permission") as! Bool
        let deleteFlag = aDecoder.decodeObjectForKey("deleteFlag") as! Bool
        
        self.init(id: id, employeeID: employeeID, employeePassword: employeePassword,employeeName: employeeName, employeeEmail: employeeEmail, admin: admin, permission: permission, deleteFlag: deleteFlag)
    }
    
    func encodeWithCoder(aCoder: NSCoder) {
        aCoder.encodeInteger(id, forKey: "id")
        aCoder.encodeObject(employeeID, forKey: "employeeID")
        aCoder.encodeObject(employeePassword, forKey: "employeePassword")
        aCoder.encodeObject(employeeName, forKey: "employeeName")
        aCoder.encodeObject(employeeEmail, forKey: "employeeEmail")
        aCoder.encodeObject(admin, forKey: "admin")
        aCoder.encodeObject(permission, forKey: "permission")
        aCoder.encodeBool(deleteFlag, forKey: "deleteFlag")
    }
}
