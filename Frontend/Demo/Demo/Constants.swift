//
//  Constants.swift
//  Demo
//
//  Created by Tam Huynh on 6/30/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import Foundation
import UIKit

let MAIN_COLOR = "0x2196F3"
let MAIN_COLOR_LIGHT = "0x64B5F6"
let MENU_COLOR = "0xCCCCCC"
let MAIN_BACKGROUND_COLOR = "0x4CAF50"



struct ScreenSize
{
    static let SCREEN_WIDTH         = UIScreen.mainScreen().bounds.size.width
    static let SCREEN_HEIGHT        = UIScreen.mainScreen().bounds.size.height
    static let SCREEN_MAX_LENGTH    = max(ScreenSize.SCREEN_WIDTH, ScreenSize.SCREEN_HEIGHT)
    static let SCREEN_MIN_LENGTH    = min(ScreenSize.SCREEN_WIDTH, ScreenSize.SCREEN_HEIGHT)
}

struct DeviceType
{
    static let IS_IPHONE_4_OR_LESS  = UIDevice.currentDevice().userInterfaceIdiom == .Phone && ScreenSize.SCREEN_MAX_LENGTH < 568.0
    static let IS_IPHONE_5          = UIDevice.currentDevice().userInterfaceIdiom == .Phone && ScreenSize.SCREEN_MAX_LENGTH == 568.0
    static let IS_IPHONE_6          = UIDevice.currentDevice().userInterfaceIdiom == .Phone && ScreenSize.SCREEN_MAX_LENGTH == 667.0
    static let IS_IPHONE_6P         = UIDevice.currentDevice().userInterfaceIdiom == .Phone && ScreenSize.SCREEN_MAX_LENGTH == 736.0
    static let IS_IPHONE  = UIDevice.currentDevice().userInterfaceIdiom == .Phone
    static let IS_IPAD    = UIDevice.currentDevice().userInterfaceIdiom == .Pad
}
