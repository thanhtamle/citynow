//
//  LoginModel.swift
//  Demo
//
//  Created by Tam Huynh on 7/10/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class LoginModel {
    var employeeID: String!
    var employeePassword: String!
    
    init(employeeID: String, employeePassword: String) {
        self.employeeID = employeeID
        self.employeePassword = employeePassword
    }
}
