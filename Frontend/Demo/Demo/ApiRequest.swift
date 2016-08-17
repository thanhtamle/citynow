//
//  ApiRequest.swift
//  Demo
//
//  Created by Tam Huynh on 7/10/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class ApiRequest {
    
    private let API_HOST = "http://54.249.94.26:9000"
    private var token: String!
    
    func getLoadingMessage () -> String { return ""}
    func getRequestUrl () -> String { return ""}
    func getContentType () -> String { return ""}
    func getRequestType () -> String { return ""}
    func resultReceiver (response: String) -> AnyObject? { return nil}
    func isOpenProgressBar () -> Bool {return false}
    func setToken(token: String) {}
    
    func getFullRequestLink() -> String {
        return API_HOST + getRequestUrl()
    }
    
    private func dataTask(request: NSMutableURLRequest, completion: (success: Bool, object: AnyObject?) -> ()) {
        request.HTTPMethod = getRequestType()
        
        let session = NSURLSession(configuration: NSURLSessionConfiguration.defaultSessionConfiguration())
        
        session.dataTaskWithRequest(request) { (data, response, error) -> Void in
            if let data = data {
                let json = try? NSJSONSerialization.JSONObjectWithData(data, options: [])
                if let response = response as? NSHTTPURLResponse where 200...299 ~= response.statusCode {
                    completion(success: true, object: json)
                } else {
                    completion(success: false, object: json)
                }
                HUD.hide()
            }
            }.resume()
    }
    
    func request(request: NSMutableURLRequest, completion: (success: Bool, object: AnyObject?) -> ()) {
        dataTask(request, completion: completion)
    }
    
    func clientURLRequest(params: Dictionary<String, AnyObject>? = nil) -> NSMutableURLRequest {
        HUD.show(.Progress)
        let request = NSMutableURLRequest(URL: NSURL(string: getFullRequestLink())!)
        if let params = params {
            
            let data = try! NSJSONSerialization.dataWithJSONObject(params, options: NSJSONWritingOptions(rawValue: 0))
            
            request.addValue(getContentType(),forHTTPHeaderField: "Content-Type")
            request.addValue(getContentType(),forHTTPHeaderField: "Accept")
            request.HTTPBody = data
        }
        
        if let token = token {
            request.addValue("Bearer " + token, forHTTPHeaderField: "Authorization")
        }
        
        return request
    }
}
