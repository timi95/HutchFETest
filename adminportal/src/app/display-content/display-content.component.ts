import { Component, OnInit } from '@angular/core';
import { PortalSync } from '../interfaces/responses/PortalSync';
import { PortalSyncService } from '../services/portal-sync.service';
import { Observable, } from 'rxjs';
import { map, retry, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'display-content',
  templateUrl: './display-content.component.html',
  styleUrls: ['./display-content.component.css']
})
export class DisplayContentComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }

}
