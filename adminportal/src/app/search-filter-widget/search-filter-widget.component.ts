import { Component, OnInit } from '@angular/core';
import { debounceTime,distinctUntilChanged,retry } from 'rxjs/operators';
import { PortalSync } from '../interfaces/responses/PortalSync';
import { PortalSyncService } from '../services/portal-sync.service';

@Component({
  selector: 'search-filter-widget',
  templateUrl: './search-filter-widget.component.html',
  styleUrls: ['./search-filter-widget.component.css']
})
export class SearchFilterWidgetComponent implements OnInit {
  resultsList: any[] = [
    'HutchId',
    'FacebookId', 
    'GoogleId ',
    'AppleId ',
    'DeviceId ',
    'GoogleReceiptId',
    'Social Name '
  ];
  results = null;

  constructor(public portalSync:PortalSyncService) { }

  ngOnInit(): void {
  }
  searchResults(event){
    if (event.target.value !== '') {
      this.portalSync.getPortalSync('','','')
      .pipe(retry(),debounceTime(2500),distinctUntilChanged())
      .subscribe( (resp:PortalSync)=>{ this.results = resp.userProfile;});
    }else{ this.results = null;}
  }
  close(){
    this.results = null;
  }
}
