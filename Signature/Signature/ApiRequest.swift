//
//  ApiRequest.swift
//  Demo
//
//  Created by Tam Huynh on 7/10/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class ApiRequest {
    
    fileprivate let API_HOST = "https://gifstar.me"
    fileprivate var token: String!
    
    func getLoadingMessage () -> String { return ""}
    func getRequestUrl () -> String { return ""}
    func getContentType () -> String { return ""}
    func getRequestType () -> String { return ""}
    func resultReceiver (_ response: String) -> AnyObject? { return nil}
    func isOpenProgressBar () -> Bool {return false}
    func setToken(_ token: String) {}
    
    func getFullRequestLink() -> String {
        return API_HOST + getRequestUrl()
    }
    
    fileprivate func dataTask(_ request: NSMutableURLRequest, completion: @escaping (_ success: Bool, _ object: AnyObject?) -> ()) {
        request.httpMethod = getRequestType()
        
        let session = URLSession(configuration: URLSessionConfiguration.default)
        
        session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
            if let data = data {
                let json = try? JSONSerialization.jsonObject(with: data, options: [])
                
                if(json == nil) {
                    let a = String(data: data, encoding: String.Encoding.utf8)! as String
                    let tam = a
                    print(tam)
                }
                
                if let response = response as? HTTPURLResponse , 200...299 ~= response.statusCode {
                    completion(true, json as AnyObject?)
                } else {
                    completion(false, json as AnyObject?)
                }
                //HUD.hide()
            }
            }) .resume()
    }
    
    func request(_ request: NSMutableURLRequest, completion: @escaping (_ success: Bool, _ object: AnyObject?) -> ()) {
        dataTask(request, completion: completion)
    }
    
    func clientURLRequest(_ params: Dictionary<String, AnyObject>? = nil) -> NSMutableURLRequest {
        ///HUD.show(.Progress)
        let request = NSMutableURLRequest(url: URL(string: getFullRequestLink())!)
        if let params = params {
            
            let data = try! JSONSerialization.data(withJSONObject: params, options: JSONSerialization.WritingOptions(rawValue: 0))
            
            request.addValue(getContentType(),forHTTPHeaderField: "Content-Type")
            request.addValue(getContentType(),forHTTPHeaderField: "Accept")
            request.httpBody = data
        }
        
        if let token = token {
            request.addValue("Bearer " + token, forHTTPHeaderField: "Authorization")
        }
        
        return request
    }
}
