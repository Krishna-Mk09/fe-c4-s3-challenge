import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpClientObj:HttpClient) { }

  URL:string="http://localhost:3000/notes";

  getNotes():Observable<Array<Note>>{
    return this.httpClientObj.get<Array<Note>>(this.URL)
  }

  addNote(data:Note){
    return this.httpClientObj.post(this.URL,data)
  }

}
