import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'booklist-app';

  // initialize an array
  @Input() bookListArray: Array<{title: string, author: string, isbn: string}>

  // define a function to get Event data as objects
  OnAddBooks(bookData: {title: string, author: string, isbn: string}){
    this.bookListArray.push({
      title: bookData.title,
      author: bookData.author,
      isbn: bookData.isbn
    })
  }
}
