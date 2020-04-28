import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listbooks',
  templateUrl: './listbooks.component.html',
  styleUrls: ['./listbooks.component.css']
})
export class ListbooksComponent implements OnInit {

  // get the input 
  @Input () getBook: {title: string, author: string, isbn: string};
  constructor() { }

  ngOnInit(): void {
  }

}
