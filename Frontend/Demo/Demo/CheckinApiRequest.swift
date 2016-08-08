//
//  LoginApiRequest.swift
//  Demo
//
//  Created by Tam Huynh on 7/10/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class CheckinApiRequest: ApiRequest{
    
    private var attendanceModel: AttendanceModel!
    
    override init() {
        super.init()
    }
    
    override func getRequestUrl() -> String {
        return "/checkIn"
    }
    
    override func getContentType() -> String {
        return "application/json"
    }
    
    override func getRequestType() -> String {
        return "POST"
    }
    
    func setAttendanceModel(attendanceModel: AttendanceModel) {
        self.attendanceModel = attendanceModel
    }
    
    func checkIn(completion: (success: Bool, data: AnyObject?, message: String?) -> ()) {
        let attendanceObject = ["id": attendanceModel.id, "employeeID": attendanceModel.employeeID, "arrivalTime": attendanceModel.arrivalTime, "departureTime": attendanceModel.departureTime, "finish": attendanceModel.finish, "managerEmployeeID": attendanceModel.managerEmployeeID]
        
        request(clientURLRequest(attendanceObject as? Dictionary<String, AnyObject>)) { (success, object) -> () in
            dispatch_async(dispatch_get_main_queue(), { () -> Void in
                if success {
                    completion(success: true, data: nil, message: nil)
                } else {
                    let message = "request_error_please_try_again".localized()
                    completion(success: false, data: nil, message: message)
                }
            })
        }
    }
}
