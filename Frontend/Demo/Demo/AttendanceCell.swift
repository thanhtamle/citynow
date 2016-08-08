//
//  AttendanceCell.swift
//  Demo
//
//  Created by Tam Huynh on 7/13/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class AttendanceCell: UITableViewCell {

    @IBOutlet weak var employeeImageView: UIImageView!
    
    @IBOutlet weak var employeeIDLabel: UILabel!
    
    @IBOutlet weak var arrivalTimeLabel: UILabel!
    
    @IBOutlet weak var departureTimeLabel: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        
        self.employeeImageView.layer.cornerRadius = self.employeeImageView.frame.size.height / 2
        self.employeeImageView.clipsToBounds = true
        self.employeeImageView.layer.borderWidth = 1
        self.employeeImageView.layer.borderColor = UIColor.whiteColor().CGColor
        self.employeeImageView.image = UIImage(named: "User")
    }

    override func setSelected(selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }
    
    func setData(attendance: AttendanceModel) {
        employeeIDLabel.text = "employee_id".localized() + ": " + attendance.employeeID
        arrivalTimeLabel.text = "arrival_time".localized() + ": " + attendance.arrivalTime
        departureTimeLabel.text = "departure_time".localized() + ": " + attendance.departureTime
    }
}
