import { Component, OnInit, ViewChild } from '@angular/core';
import {Storage} from '@ionic/storage';
import { Platform} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import { NavController } from '@ionic/angular';
import {AngularFireDatabase} from 'angularfire2/database';
import { AlertController } from '@ionic/angular';
import { userInfo } from 'os';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
public code: string;
public writer: string;
public items=[];
public writerInfo=[];
userid: string;
public chosenGu='all';
segment:string;
  constructor( 
    public router: Router,
    public navCtrl: NavController, 
    private alertCtrl:AlertController,
    public plat:Platform,
    public stor:Storage,
    public activatedRoute:ActivatedRoute,
    public db:AngularFireDatabase
  ) {
    this.stor.get('id').then((val)=>{
      this.userid = val;
      console.log('탭2 유저 아이디는', this.userid);
    });
  }
  ngOnInit(){
    this.segment='help';
    this.loadList();

  }

  segmentChanged(event){
    this.segment=event.detail.value;
    this.loadList();
  }
  loadList(){
    if(this.chosenGu=='all'){
      this.db.list('regisTxt/',ref=>ref.orderByChild('category').equalTo(this.segment)).valueChanges().subscribe(
        data=>{
          this.items=data;
        }
      )
    }
    else{
    this.db.list('regisTxt/',ref=>ref.orderByChild('category/').equalTo(this.segment)&&ref.orderByChild('regisGu/').equalTo(this.chosenGu)).valueChanges().subscribe(
      data=>{
       this.items=data;
      });
    }
  }

  goCreatePost() {
    if(this.userid == null) {
      this.alertCtrl.create({
        header: '알림',
        message: '로그인 후 이용해 주세요',
        buttons: [{
          text: '확인',
          role: 'cancel'
        }]
      }).then(alertEl => {
        alertEl.present();
      });
    }
    else{
      this.router.navigate(['create-post']);
    }
  }
  getPost(item: any) {
    this.code = item.code;
    this.writer = item.userid;
    this.router.navigate(['post', this.code, this.writer]);
  }

  wantGu(event){
    this.chosenGu=event.detail.value;
    this.loadList();
  }
}
