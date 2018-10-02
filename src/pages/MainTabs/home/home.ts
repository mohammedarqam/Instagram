import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { MessagingPage } from '../../Modules/messaging/messaging';
import * as firebase from 'firebase';
import moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
  public navCtrl: NavController,
  public toastCtrl : ToastController,
  ) {

  }


  mess(){
    this.navCtrl.push(MessagingPage);
  }

  dbTest(){
    firebase.database().ref("Testing").push(moment().format()).then(()=>{
      this.presentToast("Done");
    });
  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}
