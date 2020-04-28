import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bookadd',
  templateUrl: './bookadd.component.html',
  styleUrls: ['./bookadd.component.css']
})
export class BookaddComponent implements OnInit {

  // output the bookdata to app component
  @Output() bookEmitter= new EventEmitter<{title: string, author: string, isbn: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  // button click 
  OnStoreBookData(getbookTitle: HTMLInputElement, getbookAuthor: HTMLInputElement, getbookIsbn: HTMLInputElement){
    // emit the data
    this.bookEmitter.emit({title: getbookTitle.value, author: getbookAuthor.value, isbn: getbookIsbn.value})
  }

}
