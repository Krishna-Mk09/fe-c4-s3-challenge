import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  constructor(private noteServiceObj:NoteService) { }

  @Input()
  Notes: Note[]=[];

  viewNotes(){
    this.noteServiceObj.getNotes().subscribe({
      next:data => { this.Notes=data },
      error() {alert ("error occured while loading the blogs")},          //this method is optional
    })
    
  }

  ngOnInit(): void {
    this.viewNotes();
   
  }

}
