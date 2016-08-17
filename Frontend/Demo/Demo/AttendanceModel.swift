//
//  AttendanceModel.swift
//  Demo
//
//  Created by Tam Huynh on 7/13/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class AttendanceModel {
    
    var id: Int!
    var employeeID: String!
    var arrivalTime: String!
    var departureTime: String!
    var finish: Bool!
    var managerEmployeeID: String!
    var deleteFlag: Bool!
    
    init(id: Int, employeeID: String, arrivalTime: String, departureTime: String, finish: Bool, managerEmployeeID: String, deleteFlag: Bool) {
        self.id = id
        self.employeeID = employeeID
        self.arrivalTime = arrivalTime
        self.departureTime = departureTime
        self.finish = finish
        self.managerEmployeeID = managerEmployeeID
        self.deleteFlag = deleteFlag
    }
    
    required convenience init(coder aDecoder: NSCoder) {
        let id = aDecoder.decodeIntegerForKey("id")
        let employeeID = aDecoder.decodeObjectForKey("employeeID") as! String
        let arrivalTime = aDecoder.decodeObjectForKey("arrivalTime") as! String
        let departureTime = aDecoder.decodeObjectForKey("departureTime") as! String
        let finish = aDecoder.decodeObjectForKey("finish") as! Bool
        let managerEmployeeID = aDecoder.decodeObjectForKey("managerEmployeeID") as! String
        let deleteFlag = aDecoder.decodeObjectForKey("deleteFlag") as! Bool
        self.init(id: id, employeeID: employeeID, arrivalTime: arrivalTime, departureTime: departureTime, finish: finish, managerEmployeeID: managerEmployeeID, deleteFlag: deleteFlag)
    }
    
    func encodeWithCoder(aCoder: NSCoder) {
        aCoder.encodeInteger(id, forKey: "id")
        aCoder.encodeObject(employeeID, forKey: "employeeID")
        aCoder.encodeObject(arrivalTime, forKey: "arrivalTime")
        aCoder.encodeObject(departureTime, forKey: "departureTime")
        aCoder.encodeObject(finish, forKey: "finish")
        aCoder.encodeObject(managerEmployeeID, forKey: "managerEmployeeID")
        aCoder.encodeBool(deleteFlag, forKey: "deleteFlag")
    }
}
