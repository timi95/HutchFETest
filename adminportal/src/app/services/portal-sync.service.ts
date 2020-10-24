import { Injectable } from '@angular/core';
import { PortalSync } from '../interfaces/responses/PortalSync';
import { MockPortalSync } from '../mockdata/PortalSync';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalSyncService {
  portalSyncSubject: Subject<PortalSync> = new Subject<PortalSync>();

  constructor() { }

  getPortalSync(appVersion: string, dataVersion: string, adminToken: string): Observable<PortalSync> {
    return of(MockPortalSync);
  }

  updatePortalSync(mutant:PortalSync){
    this.portalSyncSubject.next(mutant);
  }
}
