//
//  GetAttendanceManagerApiRequest.swift
//  Demo
//
//  Created by Tam Huynh on 7/13/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class GetEmployeeApiRequest: ApiRequest{
    
    private var employeeID: String!
    
    override init() {
        super.init()
    }
    
    override func getRequestUrl() -> String {
        return "/getEmployee/" + employeeID
    }
    
    override func getContentType() -> String {
        return "application/json"
    }
    
    override func getRequestType() -> String {
        return "GET"
    }
    
    func setEmployeeID(employeeID: String) {
        self.employeeID = employeeID
    }
    
    func getEmployee(completion: (success: Bool, data: AnyObject?, message: String?) -> ()) {
        
        request(clientURLRequest(nil)) { (success, object) -> () in
            dispatch_async(dispatch_get_main_queue(), { () -> Void in
                if success {
                    let result: LoginSuccessResponseModel = LoginSuccessResponseModel(
                        id: (object!.valueForKey("id")?.integerValue)!,
                        employeeID: (object!.objectForKey("employeeID") as? String)!,
                        employeePassword: (object!.objectForKey("employeePassword") as? String)!,
                        employeeName: (object!.objectForKey("employeeName") as? String)!,
                        employeeEmail: (object!.objectForKey("employeeEmail") as? String)!,
                        admin: (object!.objectForKey("admin") as? Bool)!,
                        permission : (object!.objectForKey("permission") as? Bool)!
                    )
                    completion(success: true, data: result, message: nil)
                } else {
                    let message = "employee_does_not_exist".localized()
                    completion(success: false, data: nil, message: message)
                }
            })
        }
    }
}