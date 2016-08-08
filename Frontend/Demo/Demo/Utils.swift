//
//  Utils.swift
//  Demo
//
//  Created by Tam Huynh on 7/13/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class Utils {
    
    private static var currentLanguageList = ["Tiếng việt", "English"]
    
    static func showMessage(message: String!, controller: UIViewController ) {
        var attr: [String: AnyObject] = [String: AnyObject]()
        attr[NSFontAttributeName] = UIFont.init(name: "HelveticaNeue-Light", size: 16)!
        
        let alert: DialogView = DialogView()
        alert.setTitle("message".localized())
        alert.setMessage(message.localized(), attributes: attr)
        
        let button: DialogButton = alert.addButton("ok".localized(), type: .Destruct)
        button.addTarget(self, action: #selector(myAlertAction(_:)), forControlEvents: .TouchUpInside)
        button.backgroundColor = UIColor(hexString: MAIN_COLOR)
        alert.showInController(controller)
    }
    
    @objc static func myAlertAction(sender: DialogButton) {
        sender.dialogView.hide(true)
    }
    
    static func showMessageBy(message: String!, controller: UIViewController) -> DialogButton {
        var attr: [String: AnyObject] = [String: AnyObject]()
        attr[NSFontAttributeName] = UIFont.init(name: "HelveticaNeue-Light", size: 16)!
        
        let alert: DialogView = DialogView()
        alert.setTitle("message".localized())
        alert.setMessage(message.localized(), attributes: attr)
        
        let button: DialogButton = alert.addButton("ok".localized(), type: .Destruct)
        button.backgroundColor = UIColor(hexString: MAIN_COLOR)
        alert.showInController(controller)
        return button
    }
    
    static func chooseLanguage(controller: UIViewController) {
        var attr: [String: AnyObject] = [String: AnyObject]()
        attr[NSFontAttributeName] = UIFont.init(name: "HelveticaNeue-Light", size: 16)!
        
        let alert: DialogView = DialogView()
        alert.setTitle("choose_language".localized())
        
        var button: DialogButton = alert.addButton(currentLanguageList[0], type: .Destruct)
        button.addTarget(self, action: #selector(vietNam(_:)), forControlEvents: .TouchUpInside)
        button.backgroundColor = UIColor(hexString: MAIN_COLOR)
        
        button = alert.addButton(currentLanguageList[1], type: .Destruct)
        button.addTarget(self, action: #selector(english(_:)), forControlEvents: .TouchUpInside)
        button.backgroundColor = UIColor(hexString: MAIN_COLOR)
        
        alert.showInController(controller)
    }
    
    @objc static func vietNam(sender: DialogButton) {
        sender.dialogView.hide(true)
        Localize.setCurrentLanguage("vi")
        SettingsManager.shared.saveCurrentLanguage("vi")
    }
    
    @objc static func english(sender: DialogButton) {
        sender.dialogView.hide(true)
        Localize.setCurrentLanguage("en")
        SettingsManager.shared.saveCurrentLanguage("en")
    }

}
