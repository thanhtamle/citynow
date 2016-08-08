//
//  SettingsManager.swift
//  Demo
//
//  Created by Tam Huynh on 7/9/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class SettingsManager: NSObject {

    private let defaults = NSUserDefaults.standardUserDefaults()
    
    private let isTypeCamera = "isTypeCamera"
    private let userAccount = "userAccount"
    private let currentLanguage = "currentLanguage"
    
    static let shared = SettingsManager()
    
    override init() {
        super.init()
        
    }
    
    func saveTypeCamera(value: Bool) {
        defaults.setBool(value, forKey: isTypeCamera)
    }
    
    func getTypeCamera() -> Bool{
       return defaults.boolForKey(isTypeCamera)
    }
    
    func saveUserAccount(value: LoginSuccessResponseModel?) {
        if value != nil {
            let encodedData = NSKeyedArchiver.archivedDataWithRootObject(value!)
            defaults.setObject(encodedData, forKey: userAccount)
        }
        else {
            defaults.removeObjectForKey(userAccount)
        }
        defaults.synchronize()
    }
    
    func getUserAccount() -> LoginSuccessResponseModel? {
        if let decoded = defaults.objectForKey(userAccount) as? NSData {
            let decodedTeams = NSKeyedUnarchiver.unarchiveObjectWithData(decoded) as! LoginSuccessResponseModel
            return decodedTeams
        }
        
        return nil
    }
    
    func saveCurrentLanguage(value: String) {
        defaults.setObject(value, forKey: currentLanguage)
    }
    
    func getCurrentLanguage() -> String? {
        return defaults.objectForKey(currentLanguage) as? String
    }
}
