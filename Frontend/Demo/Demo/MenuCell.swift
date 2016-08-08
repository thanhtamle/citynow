//
//  MenuCell.swift
//  Demo
//
//  Created by Tam Le on 7/2/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class MenuCell: UITableViewCell {

    @IBOutlet weak var icon: UIImageView!
    @IBOutlet weak var name: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
       
    }
    
    override func setHighlighted(highlighted: Bool, animated: Bool) {
        if highlighted {
            self.backgroundColor = UIColor(white: 1, alpha: 0.3)
        }
        else {
            self.backgroundColor = UIColor.clearColor()
        }
    }
    
    func setData(menuItem: MenuItem) {
        let origImage = UIImage(named: menuItem.image)
        let tintedImage = origImage?.imageWithRenderingMode(UIImageRenderingMode.AlwaysTemplate)
        icon.image = tintedImage
        icon.tintColor = UIColor(hexString: MENU_COLOR)
        
        name.text = menuItem.name
        name.textColor = UIColor(hexString: MENU_COLOR)
    }
}
