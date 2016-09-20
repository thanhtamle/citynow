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
    

    func upload(_ base64: String, completion: @escaping (_ success: Bool, _ data: AnyObject?, _ message: String?) -> ()) {
        
        let uploadImageModel = ["data": base64]

        request(clientURLRequest(uploadImageModel as Dictionary<String, AnyObject>?)) { (success, object) -> () in
            DispatchQueue.main.async(execute: { () -> Void in
                if success {
                    let url = object
                    completion(true, object, nil)
                } else {
                    let message = "error"
                    completion(false, nil, message)
                }
            })
        }
    }
}
