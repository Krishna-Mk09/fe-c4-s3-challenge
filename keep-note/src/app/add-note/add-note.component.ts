import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { NoteService } from '../services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  constructor(private noteServiceObj:NoteService, private _snackBar: MatSnackBar) { }

  Note:Note={};

  addNoteFunction(){
    if(this.Note.title==null||this.Note.content==null){
      alert ("please write something to add a note")
    }else{this.noteServiceObj.addNote(this.Note).subscribe({
      next(x) {alert("data added")},
      error() {alert ("error")},          //this method is optional
    })}

    this._snackBar.open('Note added successfully', 'success', {​
      duration: 5000,​
      panelClass: ['mat-toolbar', 'mat-primary']​
     }
    ) 
    
  }

  ngOnInit(): void {
  }

}
