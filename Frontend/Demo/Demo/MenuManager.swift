//
//  MenuManager.swift
//  Demo
//
//  Created by Tam Huynh on 7/2/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class MenuManager: NSObject {

    static let shared = MenuManager()
    var menus: NSMutableArray = []
    
    override init() {
        super.init()
        createDatas()
    }
    
    
    func createDatas() {
        menus = NSMutableArray()
        var menuItem: MenuItem = MenuItem()
        menuItem.image = "ic_home"
        menuItem.name = "home".localized()
        menuItem.withIdentifier = 1
        menus.addObject(menuItem)
        
        menuItem = MenuItem()
        menuItem.image = "Setting"
        menuItem.name = "settings".localized()
        menuItem.withIdentifier = 2
        menus.addObject(menuItem)
        
        menuItem = MenuItem()
        menuItem.image = "Language"
        menuItem.name = "choose_your_language".localized()
        menuItem.withIdentifier = 3
        menuItem.highlight = false
        menus.addObject(menuItem)
        
        menuItem = MenuItem()
        menuItem.image = "About"
        menuItem.name = "about".localized()
        menuItem.withIdentifier = 4
        menus.addObject(menuItem)
        
        menuItem = MenuItem()
        menuItem.image = "Star"
        menuItem.name = "rate_app".localized()
        menuItem.withIdentifier = 5
        menuItem.highlight = false
        menus.addObject(menuItem)
    }
}
