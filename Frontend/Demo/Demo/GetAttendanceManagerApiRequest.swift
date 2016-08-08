//
//  GetAttendanceManagerApiRequest.swift
//  Demo
//
//  Created by Tam Huynh on 7/13/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class GetAttendanceManagerApiRequest: ApiRequest{
    
    override init() {
        super.init()
    }
    
    override func getRequestUrl() -> String {
        let loginSuccessResopneModel: LoginSuccessResponseModel = SettingsManager.shared.getUserAccount()!
        return "/getAttendancesByManager/" + loginSuccessResopneModel.employeeID
    }
    
    override func getContentType() -> String {
        return "application/json"
    }
    
    override func getRequestType() -> String {
        return "GET"
    }
    
    func getAttendancesByManager(completion: (success: Bool, data: AnyObject?, message: String?) -> ()) {
        
        request(clientURLRequest(nil)) { (success, object) -> () in
            dispatch_async(dispatch_get_main_queue(), { () -> Void in
                if success {
                    var results: [AttendanceModel] = []
                    
                    if let items = object as? NSArray {
                        for itemDict in items as! [NSDictionary] {
                            let item: AttendanceModel = AttendanceModel(
                                id: (itemDict.valueForKey("id")?.integerValue)!,
                                employeeID:(itemDict.valueForKey("employeeID") as? String)!,
                                arrivalTime:(itemDict.valueForKey("arrivalTime") as? String)!,
                                departureTime:(itemDict.valueForKey("departureTime") as? String)!,
                                finish : (itemDict.objectForKey("finish") as? Bool)!,
                                managerEmployeeID:(itemDict.valueForKey("managerEmployeeID") as? String)!
                            )

                            results.append(item)
                        }
                    }
             
                    completion(success: true, data: results, message: nil)
                } else {
                    let message = "request_error_please_try_again".localized()
                    completion(success: false, data: nil, message: message)
                }
            })
        }
    }
}