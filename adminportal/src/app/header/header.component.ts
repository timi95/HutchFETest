import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title-comp',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Hutch FE Test - Admin Portal';

  constructor() { }

  ngOnInit(): void {
  }

}
