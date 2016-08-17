//
//  AttendanceModel.swift
//  Demo
//
//  Created by Tam Huynh on 7/13/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class PermissionModel {
    
    var id: Int!
    var employeeID: String!
    var isPermission: Bool!
    var deleteFlag: Bool!
    
    init(id: Int, employeeID: String, isPermission: Bool, deleteFlag: Bool) {
        self.id = id
        self.employeeID = employeeID
        self.isPermission = isPermission
        self.deleteFlag = deleteFlag
    }
    
    required convenience init(coder aDecoder: NSCoder) {
        let id = aDecoder.decodeIntegerForKey("id")
        let employeeID = aDecoder.decodeObjectForKey("employeeID") as! String
        let isPermission = aDecoder.decodeBoolForKey("isPermission")
        let deleteFlag = aDecoder.decodeBoolForKey("deleteFlag")
        self.init(id: id, employeeID: employeeID, isPermission: isPermission, deleteFlag: deleteFlag)
    }
    
    func encodeWithCoder(aCoder: NSCoder) {
        aCoder.encodeInteger(id, forKey: "id")
        aCoder.encodeObject(employeeID, forKey: "employeeID")
        aCoder.encodeBool(isPermission, forKey: "isPermission")
        aCoder.encodeBool(deleteFlag, forKey: "deleteFlag")
    }
}
