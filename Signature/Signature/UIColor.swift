//
//  UIColor.swift
//  Signature
//
//  Created by Thanh-Tam Le on 8/31/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

extension UIColor {
    
    var coreImageColor: CoreImage.CIColor {
        return CoreImage.CIColor(color: self)  // The resulting Core Image color, or nil
    }
}