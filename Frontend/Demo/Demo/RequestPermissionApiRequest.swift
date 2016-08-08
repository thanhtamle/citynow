//
//  GetAttendanceManagerApiRequest.swift
//  Demo
//
//  Created by Tam Huynh on 7/13/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class RequestPermissionApiRequest: ApiRequest{
    
    private var permissionModel: PermissionModel!
    
    override init() {
        super.init()
    }
    
    override func getRequestUrl() -> String {
        return "/requestPermission"
    }
    
    override func getContentType() -> String {
        return "application/json"
    }
    
    override func getRequestType() -> String {
        return "POST"
    }
    
    func setPermissionModel(permissionModel: PermissionModel) {
        self.permissionModel = permissionModel
    }
    
    func requestPermission(completion: (success: Bool, data: AnyObject?, message: String?) -> ()) {
        
        let permissionObject = ["id": permissionModel.id, "employeeID": permissionModel.employeeID, "isPermission": permissionModel.isPermission]
        
        request(clientURLRequest(permissionObject as? Dictionary<String, AnyObject>)) { (success, object) -> () in
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