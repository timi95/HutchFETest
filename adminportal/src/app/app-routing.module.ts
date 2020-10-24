import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayContentComponent } from './display-content/display-content.component';
import { UserAppProfileComponent } from './user-app-profile/user-app-profile.component';
import { UserIAPReceiptComponent } from './user-iapreceipt/user-iapreceipt.component';

const routes: Routes = [
  { path:'', component: DisplayContentComponent },
  { path:'UserAppProfile', component: UserAppProfileComponent },
  { path:'UserIAPReceipt', component: UserIAPReceiptComponent },
  { path:'UserOfferReceipt', component: DisplayContentComponent },
  { path:'SocialAccount', component: DisplayContentComponent },
  { path:'LogEntry', component: DisplayContentComponent },
  { path:'UserAds', component: DisplayContentComponent },
  { path:'DailyGiftState', component: DisplayContentComponent },
  { path:'FTUEProgress', component: DisplayContentComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
