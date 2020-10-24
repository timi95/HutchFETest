import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortalSync } from '../interfaces/responses/PortalSync';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  contentActive:boolean = false;
  navItems: ListItem[] = [
    { name: 'UserAppProfile', navCall: (name)=>{this.navigateTo(name)}},
    { name: 'UserIAPReceipt', navCall:  (name)=>{this.navigateTo(name)}, isList: true, contentActive:false},
    { name: 'UserOfferReceipt', navCall:  (name)=>{this.navigateTo(name)}, isList: true, contentActive:false},
    { name: 'SocialAccount', navCall:  (name)=>{this.navigateTo(name)}, isList: true, contentActive:false},
    { name: 'LogEntry', navCall:  (name)=>{this.navigateTo(name)}, isList: true, contentActive:false},
    { name: 'UserAds', navCall:  (name)=>{this.navigateTo(name)}},
    { name: 'DailyGiftState', navCall:  (name)=>{this.navigateTo(name)}},
    { name: 'FTUEProgress', navCall:  (name)=>{this.navigateTo(name)}, isList: true, contentActive:false},
  ];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  toggleContentActive(target:ListItem){
    target.navCall(target.name);
    console.log(target.navCall);
    target.contentActive = !target.contentActive   
    return target;
  }

  navigateTo(target?){
    return target?
    this.router.navigate([target]):
    this.router.navigate(['']);
  }


}
interface ListItem{
  name:string;
  isList?:boolean;
  contentActive?:boolean;
  navCall: (target?)=> void;
}