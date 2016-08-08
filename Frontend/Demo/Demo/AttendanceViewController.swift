//
//  AttendanceViewController.swift
//  Demo
//
//  Created by Tam Huynh on 7/13/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class AttendanceViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    @IBOutlet weak var managerIDLabel: UILabel!
    @IBOutlet weak var managerNameLabel: UILabel!
    
    @IBOutlet weak var attendanceManagerTableView: UITableView!
    
    var attendanceCellReuseIdentifier: NSString = "AttendanceCellReuseIdentifier"
    var attendances: [AttendanceModel] = []
    
    override func viewDidLoad() {
        super.viewDidLoad()

        //init navigation bar
        navigationController!.navigationBar.barTintColor = UIColor(hexString: MAIN_COLOR)
        navigationController!.navigationBar.tintColor = UIColor.whiteColor()
        navigationController!.navigationBar.titleTextAttributes = [NSForegroundColorAttributeName: UIColor.whiteColor()]
        
        title = "attendance_manager".localized()
        
        //init bar button
        let btnDone = UIBarButtonItem(title: "exit".localized(), style:.Plain, target: self, action: #selector(done_Clicked(_:)))
        navigationItem.rightBarButtonItem = btnDone
        
        // Initialize note TableView
        attendanceManagerTableView.delegate = self
        attendanceManagerTableView.dataSource = self
        attendanceManagerTableView.separatorColor = UIColor.whiteColor()
        attendanceManagerTableView.tableFooterView = UIView(frame: CGRectZero)
        
        attendanceManagerTableView.registerNib(UINib(nibName: "AttendanceCell", bundle: nil), forCellReuseIdentifier: attendanceCellReuseIdentifier as String)
        
        
        let loginSuccessResopneModel: LoginSuccessResponseModel = SettingsManager.shared.getUserAccount()!

        managerIDLabel.text = "manager_id".localized() + ": " + loginSuccessResopneModel.employeeID
        managerNameLabel.text = "name".localized() + ": " + loginSuccessResopneModel.employeeName
        managerIDLabel.textColor = UIColor(hexString: MAIN_COLOR)
        managerNameLabel.textColor = UIColor(hexString: MAIN_COLOR)

        let getAttendanceManagerApiRequest: GetAttendanceManagerApiRequest = GetAttendanceManagerApiRequest()
        getAttendanceManagerApiRequest.getAttendancesByManager() { (success, data, message) in
            if success == true {
                self.attendances = data as! [AttendanceModel]
                self.attendanceManagerTableView.reloadData()
            }
            else {
                Utils.showMessage(message, controller: self)
            }
        }
    }
    
    override func viewWillAppear(animated: Bool) {
        super.viewWillAppear(animated)
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    func done_Clicked(sender: UIBarButtonItem) {
        dismissViewControllerAnimated(true, completion: nil)
    }
    
    
    // MARK: - Attendance Manager TableView
    
    func tableView(tableView: UITableView, heightForRowAtIndexPath indexPath: NSIndexPath) -> CGFloat {
        return 110
    }
    
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return attendances.count
    }
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        
        let cell: AttendanceCell! = tableView.dequeueReusableCellWithIdentifier(attendanceCellReuseIdentifier as String) as? AttendanceCell
        cell.layoutMargins = UIEdgeInsetsZero
        cell.preservesSuperviewLayoutMargins = false
        cell.separatorInset = UIEdgeInsetsZero
        cell.backgroundColor = UIColor.clearColor()
        cell.selectionStyle = .None;
        
        let attendanceModel: AttendanceModel = attendances[indexPath.row] 
        cell.setData(attendanceModel)
        
        return cell
    }
    
    func tableView(tableView: UITableView, didSelectRowAtIndexPath indexPath: NSIndexPath) {
  
    }
}
