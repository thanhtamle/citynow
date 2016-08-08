//
//  UIView.swift
//  SlideMenuControllerSwift
//
//  Created by Tam Le on 7/2/16.
//  Copyright © 2015 Yuji Hato. All rights reserved.
//

import UIKit

extension UIView {
    class func loadNib<T: UIView>(viewType: T.Type) -> T {
        let className = String.className(viewType)
        return NSBundle(forClass: viewType).loadNibNamed(className, owner: nil, options: nil).first as! T
    }
    
    class func loadNib() -> Self {
        return loadNib(self)
    }
}
