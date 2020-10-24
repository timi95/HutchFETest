import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisplayContentComponent } from './display-content/display-content.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SearchFilterWidgetComponent } from './search-filter-widget/search-filter-widget.component';
import { UserAppProfileComponent } from './user-app-profile/user-app-profile.component';
import { UserIAPReceiptComponent } from './user-iapreceipt/user-iapreceipt.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayContentComponent,
    SideNavComponent,
    SearchFilterWidgetComponent,
    UserAppProfileComponent,
    UserIAPReceiptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
