//
//  PermissionManagerViewController.swift
//  Demo
//
//  Created by Tam Huynh on 7/14/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class PermissionManagerViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    

    @IBOutlet weak var permissionManagerTableView: UITableView!
    var permissionManagerellReuseIdentifier: NSString = "PermissionManagerCellReuseIdentifier"
    var permissionRequestList: [PermissionModel] = []


    override func viewDidLoad() {
        super.viewDidLoad()

        //init navigation bar
        navigationController!.navigationBar.barTintColor = UIColor(hexString: MAIN_COLOR)
        navigationController!.navigationBar.tintColor = UIColor.whiteColor()
        navigationController!.navigationBar.titleTextAttributes = [NSForegroundColorAttributeName: UIColor.whiteColor()]
        
        title = "request_permission_manager".localized()
        view.backgroundColor = UIColor(hexString: MAIN_COLOR_LIGHT)

        //init bar button
        let btnDone = UIBarButtonItem(title: "exit".localized(), style:.Plain, target: self, action: #selector(done_Clicked(_:)))
        navigationItem.rightBarButtonItem = btnDone
        
        // Initialize note TableView
        permissionManagerTableView.delegate = self
        permissionManagerTableView.dataSource = self
        permissionManagerTableView.separatorColor = UIColor.whiteColor()
        permissionManagerTableView.tableFooterView = UIView(frame: CGRectZero)
        
        permissionManagerTableView.registerNib(UINib(nibName: "PermissionManagerCell", bundle: nil), forCellReuseIdentifier: permissionManagerellReuseIdentifier as String)
        
        //load data
        let getPermissionRequestApiRequest: GetPermissionRequestApiRequest = GetPermissionRequestApiRequest()
        getPermissionRequestApiRequest.getAllRequestPermission() { (success, data, message) in
            if success == true {
                self.permissionRequestList = data as! [PermissionModel]
                self.permissionManagerTableView.reloadData()
            }
            else {
                Utils.showMessage(message, controller: self)
            }
        }
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
        return permissionRequestList.count
    }
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        
        let cell: PermissionManagerCell! = tableView.dequeueReusableCellWithIdentifier(permissionManagerellReuseIdentifier as String) as? PermissionManagerCell
        cell.layoutMargins = UIEdgeInsetsZero
        cell.preservesSuperviewLayoutMargins = false
        cell.separatorInset = UIEdgeInsetsZero
        cell.backgroundColor = UIColor.blueColor()
        cell.selectionStyle = .None;
        
        let permissionModel: PermissionModel = permissionRequestList[indexPath.row]
        cell.setData(permissionModel)
        cell.grantPermissionBtn.tag = indexPath.row
        cell.controller = self
        return cell
    }
    
    func tableView(tableView: UITableView, didSelectRowAtIndexPath indexPath: NSIndexPath) {

    }

}
