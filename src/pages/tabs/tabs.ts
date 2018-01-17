import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
	selector: 'page-tabs',
	templateUrl: 'tabs.html',
})
export class TabsPage {

	tab1Root: any = 'HomePage';
	tab2Root: any = 'LivestreamPage';
	tab3Root: any = 'EventsPage';
	tab4Root: any = 'TimesPage';
	tab5Root: any = 'AboutPage';

	myIndex: number;

	constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
		this.myIndex = navParams.data.tabIndex || 0;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad TabsPage');
	}

	giving() {
		this.iab.create('http://gracepointcoppell.org/give','_system');
	}

}
