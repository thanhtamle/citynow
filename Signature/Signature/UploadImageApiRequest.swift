//
//  UploadImageApiRequest.swift
//  Signature
//
//  Created by Thanh-Tam Le on 9/8/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class UploadImageApiRequest: ApiRequest{
    
    override init() {
        super.init()
    }
    
    override func getRequestUrl() -> String {
        return "/upload.php"
    }
    
    override func getContentType() -> String {
        return "application/json"
    }
    
    override func getRequestType() -> String {
        return "POST"
    }
    

    func upload(base64: String, completion: (success: Bool, data: AnyObject?, message: String?) -> ()) {
        
        let uploadImageModel = ["data": base64]

        request(clientURLRequest(uploadImageModel)) { (success, object) -> () in
            dispatch_async(dispatch_get_main_queue(), { () -> Void in
                if success {
                    let url = object
                    completion(success: true, data: object, message: nil)
                } else {
                    let message = "error"
                    completion(success: false, data: nil, message: message)
                }
            })
        }
    }
}
