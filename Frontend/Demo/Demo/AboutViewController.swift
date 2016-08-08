//
//  AboutViewController.swift
//  Demo
//
//  Created by Tam Huynh on 7/8/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class AboutViewController: UIViewController {

    @IBOutlet weak var aboutTV: UITextView!
    @IBOutlet weak var toolbar: UIToolbar!

    override func viewDidLoad() {
        super.viewDidLoad()
        
        //init navigation bar
        navigationController!.navigationBar.barTintColor = UIColor(hexString: MAIN_COLOR)
        navigationController!.navigationBar.tintColor = UIColor.whiteColor()
        navigationController!.navigationBar.titleTextAttributes = [NSForegroundColorAttributeName: UIColor.whiteColor()]
        title = "about".localized()
        
        //init view
        aboutTV.text = "text_about".localized()
        aboutTV.editable = false
        toolbar.barTintColor = UIColor(hexString: MAIN_COLOR)

        self.automaticallyAdjustsScrollViewInsets = false
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    override func viewWillAppear(animated: Bool) {
        super.viewWillAppear(animated)
        self.setNavigationBarItem()
        
        NSNotificationCenter.defaultCenter().addObserver(self, selector: #selector(self.setText), name: LCLLanguageChangeNotification, object: nil)
    }
    
    func setText(){
        title = "about".localized()
        aboutTV.text = "text_about".localized()
    }
}
