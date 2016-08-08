//
//  LoginApiRequest.swift
//  Demo
//
//  Created by Tam Huynh on 7/10/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class LoginApiRequest: ApiRequest{

    private var loginModel: LoginModel!
    
    override init() {
        super.init()
    }
    
    override func getRequestUrl() -> String {
        return "/login"
    }
    
    override func getContentType() -> String {
        return "application/json"
    }
    
    override func getRequestType() -> String {
        return "POST"
    }
    
    func setLoginModel(loginModel: LoginModel) {
        self.loginModel = loginModel
    }
    
    func login(completion: (success: Bool, data: AnyObject?, message: String?) -> ()) {
    
        let loginObject = ["employeeID": loginModel.employeeID, "employeePassword": loginModel.employeePassword]
        
        request(clientURLRequest(loginObject)) { (success, object) -> () in
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
                    let message = "login_failed_please_enter_your_account_again".localized()
                    completion(success: false, data: nil, message: message)
                }
            })
        }
    }
}
