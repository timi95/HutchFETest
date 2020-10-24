import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs/operators';
import { PortalSync } from '../interfaces/responses/PortalSync';
import { PortalSyncService } from '../services/portal-sync.service';

@Component({
  selector: 'user-iapreceipt',
  templateUrl: './user-iapreceipt.component.html',
  styleUrls: ['./user-iapreceipt.component.css']
})
export class UserIAPReceiptComponent implements OnInit {
  details:PortalSync
  constructor(public portalSync: PortalSyncService) { }

  ngOnInit(): void {
    this.portalSync.getPortalSync('1.0','1','abcdefghijklmnopqrstuvwxyz')
    .pipe(retry(5))
    .subscribe( (resp:PortalSync) => {this.details = resp},
    error =>{console.error('Something is wrong: ', error)} );
  }

}
