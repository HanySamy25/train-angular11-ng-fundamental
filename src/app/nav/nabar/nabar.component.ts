import { AuthService } from './../../user/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nabar.component.html',
  styleUrls: ['./nabar.component.css']
})
export class NabarComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

}
