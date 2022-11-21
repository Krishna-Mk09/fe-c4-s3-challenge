import { Component } from '@angular/core';
import { Note } from './model/note';
import { NoteService } from './services/note.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keep-note';

  constructor(private noteServiceObj:NoteService) { }

  Notes:Note[]=[];
  
  appCompDataTransfer(appCompKey:any){

    if(appCompKey==null){
      this.noteServiceObj.getNotes().subscribe({
        next:data => { this.Notes=data },
        error() {alert ("error occured while loading the blogs")},          //this method is optional
      })
    }else{
      this.noteServiceObj.getNotes().subscribe({
        next:data => { this.Notes=data.filter((note)=>
          {
            return note.title?.startsWith(appCompKey.toLowerCase());
          }) },
        error() {alert ("error occured while loading the blogs")},          //this method is optional
      })
    }
  }

  flag=false;
  
  open(){
    if(this.flag){
      this.flag=false;
    }else{
      this.flag=true;
    }
  }
}
