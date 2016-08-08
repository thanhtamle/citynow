//
//  GetAttendanceManagerApiRequest.swift
//  Demo
//
//  Created by Tam Huynh on 7/13/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class GetPermissionRequestApiRequest: ApiRequest{
    
    private var permissionModel: PermissionModel!
    
    override init() {
        super.init()
    }
    
    override func getRequestUrl() -> String {
        return "/getAllRequestPermission"
    }
    
    override func getContentType() -> String {
        return "application/json"
    }
    
    override func getRequestType() -> String {
        return "GET"
    }
    
    func setPermissionModel(permissionModel: PermissionModel) {
        self.permissionModel = permissionModel
    }
    
    func getAllRequestPermission(completion: (success: Bool, data: AnyObject?, message: String?) -> ()) {
        
        request(clientURLRequest(nil)) { (success, object) -> () in
            dispatch_async(dispatch_get_main_queue(), { () -> Void in
                if success {
                    var results: [PermissionModel] = []
                    
                    if let items = object as? NSArray {
                        for itemDict in items as! [NSDictionary] {
                            let item: PermissionModel = PermissionModel(
                                id: (itemDict.valueForKey("id")?.integerValue)!,
                                employeeID:(itemDict.valueForKey("employeeID") as? String)!,
                                isPermission : (itemDict.objectForKey("isPermission") as? Bool)!
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