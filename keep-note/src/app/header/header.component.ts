import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../model/note';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  
  constructor() { }
  ngOnInit(): void {
  }

}
