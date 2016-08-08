//
//  ImageHeaderCell.swift
//  SlideMenuControllerSwift
//
//  Created by Tam Le on 7/2/16.
//  Copyright © 2015 Yuji Hato. All rights reserved.
//

import UIKit

class ImageHeaderView : UIView {
    
    @IBOutlet weak var profileImage : UIImageView!
    @IBOutlet weak var backgroundImage : UIImageView!
    @IBOutlet weak var profileNameLabel: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        self.backgroundColor = UIColor(hexString: "E0E0E0")
        self.profileImage.layer.cornerRadius = self.profileImage.frame.size.height / 2
        self.profileImage.clipsToBounds = true
        self.profileImage.layer.borderWidth = 1
        self.profileImage.layer.borderColor = UIColor.whiteColor().CGColor
        self.profileImage.image = UIImage(named: "User")
        
        let image = UIImage(named: "Header");
        self.backgroundImage.image = image
    }
    
    func showAccount() {
        profileImage.hidden = false
        profileNameLabel.hidden = false
    }
    
    func hideAccount() {
        profileNameLabel.hidden = true
        profileImage.hidden = true
    }
}