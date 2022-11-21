import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output()
  emmiter:EventEmitter<string> = new EventEmitter<string>();

  searchedText:string="";
  
  searchCompData(){
    this.emmiter.emit(this.searchedText)
    console.log(this.searchedText)
  }

  constructor() { }
  ngOnInit(): void {
  }

}
