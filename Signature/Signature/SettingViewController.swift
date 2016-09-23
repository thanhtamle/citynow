//
//  SettingViewController.swift
//  Signature
//
//  Created by Thanh-Tam Le on 9/23/16.
//  Copyright © 2016 Thanh-Tam Le. All rights reserved.
//

import UIKit

class SettingViewController: UIViewController {

    @IBOutlet weak var ipTextView: UITextView!
    override func viewDidLoad() {
        super.viewDidLoad()

        //init navigation bar
//        navigationController!.navigationBar.barTintColor = UIColor(hexString: MAIN_COLOR)
//        navigationController!.navigationBar.tintColor = UIColor.white
//        navigationController!.navigationBar.titleTextAttributes = [NSForegroundColorAttributeName: UIColor.white]
//        navigationController!.navigationBar.barStyle = UIBarStyle.black; navigationController!.navigationBar.shadowImage = UIImage()
//        view.backgroundColor = UIColor.white
//        //init bar button
//        let btnDone = UIBarButtonItem(title: "Cancel", style:.plain, target: self, action: #selector(done_Clicked))
//        navigationItem.rightBarButtonItem = btnDone
        
    }
    
    func done_Clicked(sender: UIBarButtonItem) {
        dismiss(animated: true, completion: nil)
    }

    @IBAction func exitPageClicked(_ sender: AnyObject) {
        dismiss(animated: true, completion: nil)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    

    @IBAction func saveClicked(_ sender: AnyObject) {
        Global.ipMain = "http://" + ipTextView.text + ":9000"
        dismiss(animated: true, completion: nil)
    }
}
