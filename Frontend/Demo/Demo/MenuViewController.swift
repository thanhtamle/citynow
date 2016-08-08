//
//  MenuViewController.swift
//  Demo
//
//  Created by Tam Le on 7/2/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class MenuViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    //control
    @IBOutlet weak var menuTableView: UITableView!
    
    //variables
    var imageHeaderView: ImageHeaderView!
    var MenuCellReuseIdentifier: NSString = "MenuCellReuseIdentifier"
    var currentMenuCell: MenuCell!
    
    //controllers list
    var mainViewController: UIViewController!
    var settingsViewController: UIViewController!
    var aboutViewController: UIViewController!
    var currentViewController: UIViewController!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        Localize.resetCurrentLanguageToDefault()
        // Initialize note TableView
        menuTableView.delegate = self
        menuTableView.dataSource = self
        
        let imageView: UIImageView = UIImageView(image: UIImage(named: "Sky"))
        imageView.changeSulfur()
        menuTableView.backgroundView = imageView
        
        menuTableView.separatorStyle = UITableViewCellSeparatorStyle.None
        menuTableView.tableFooterView = UIView(frame: CGRectZero)
        
        menuTableView.registerNib(UINib(nibName: "MenuCell", bundle: nil), forCellReuseIdentifier: MenuCellReuseIdentifier as String)
        
        self.imageHeaderView = ImageHeaderView.loadNib()
        self.view.addSubview(self.imageHeaderView)
        
        
        let storyboard = UIStoryboard(name: "Main", bundle: nil)
        
        let settingsViewController = storyboard.instantiateViewControllerWithIdentifier("SettingsViewController") as! SettingsViewController
        self.settingsViewController = UINavigationController(rootViewController: settingsViewController)
    
        let aboutViewController = storyboard.instantiateViewControllerWithIdentifier("AboutViewController") as! AboutViewController
        self.aboutViewController = UINavigationController(rootViewController: aboutViewController)
        
        currentViewController = mainViewController
    }
    
    override func viewDidAppear(animated: Bool) {
        super.viewDidAppear(animated)
        
        NSNotificationCenter.defaultCenter().addObserver(self, selector: #selector(self.setText), name: LCLLanguageChangeNotification, object: nil)
        
        if let loginSuccessResopneModel: LoginSuccessResponseModel = SettingsManager.shared.getUserAccount() {
            imageHeaderView.showAccount()
            imageHeaderView.profileNameLabel.text = loginSuccessResopneModel.employeeName
        }
        else {
            imageHeaderView.hideAccount()
        }
    }
    
    func setText(){
        MenuManager.shared.createDatas()
        menuTableView.reloadData()
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        self.imageHeaderView.frame = CGRect(x: 0, y: 0, width: self.view.frame.width, height: 160)
        self.view.layoutIfNeeded()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        
    }
    

    // MARK: - Menu TableView
    
    func tableView(tableView: UITableView, heightForRowAtIndexPath indexPath: NSIndexPath) -> CGFloat {
        return 50
    }
    
    func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return MenuManager.shared.menus.count
    }
    
    func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        
        let cell: MenuCell! = tableView.dequeueReusableCellWithIdentifier(MenuCellReuseIdentifier as String) as? MenuCell
        cell.layoutMargins = UIEdgeInsetsZero
        cell.preservesSuperviewLayoutMargins = false
        cell.separatorInset = UIEdgeInsetsZero
        cell.backgroundColor = UIColor.clearColor()
        cell.selectionStyle = .None;
        
        let menuItem: MenuItem = MenuManager.shared.menus[indexPath.row] as! MenuItem
        cell.setData(menuItem)
        
        return cell
    }
    
    func tableView(tableView: UITableView, didSelectRowAtIndexPath indexPath: NSIndexPath) {
        let cell: MenuCell! = tableView.cellForRowAtIndexPath(indexPath) as? MenuCell
        let menuItem: MenuItem = MenuManager.shared.menus[indexPath.row] as! MenuItem
        if menuItem.highlight == true {
            cell.backgroundColor = UIColor(white: 1, alpha: 0.3)
        }
        self.changeViewController(menuItem)
    }
    
    func tableView(tableView: UITableView, didDeselectRowAtIndexPath indexPath: NSIndexPath) {
        let cell: MenuCell! = tableView.cellForRowAtIndexPath(indexPath) as? MenuCell
        cell.backgroundColor = UIColor.clearColor()
    }

    func changeViewController(menuItem: MenuItem) {
        switch menuItem.withIdentifier {
        case 1:
            self.slideMenuController()?.changeMainViewController(self.mainViewController, close: true)
            currentViewController = mainViewController
        case 2:
            self.slideMenuController()?.changeMainViewController(self.settingsViewController, close: true)
            currentViewController = settingsViewController
        case 3:
            self.slideMenuController()?.closeLeft()
            Utils.chooseLanguage(currentViewController)
        case 4:
            self.slideMenuController()?.changeMainViewController(self.aboutViewController, close: true)
            currentViewController = aboutViewController
        default:
            break
        }
    }
}
