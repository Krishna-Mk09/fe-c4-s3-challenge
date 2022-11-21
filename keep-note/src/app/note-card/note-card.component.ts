import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../model/note';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {

  @Input()
  key?:Note;


  constructor() { }

  ngOnInit(): void {
  }

}
