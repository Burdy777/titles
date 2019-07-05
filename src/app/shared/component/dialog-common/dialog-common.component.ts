import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BookService } from 'src/app/domain/service/books.services';

@Component({
  selector: 'app-dialog-common',
  templateUrl: './dialog-common.component.html',
  styleUrls: ['./dialog-common.component.scss']
})
export class DialogCommonComponent implements OnInit {
form:FormGroup;
  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any, private fb:FormBuilder,
  @Inject('BookService') public bookService:BookService ) { }

  ngOnInit() {
    this.form = this.buildForm(this.data);
    this.form.patchValue(this.data);
  }

  private buildForm(data:any){
    return this.fb.group({
      'originalTitle': this.fb.control(''),
      'startYear': this.fb.control(''),
      'genres': this.fb.control('')
    })
    
  }

  public save(value) {
    const books:any[] = this.bookService.books.value;
    books.forEach((book) => {
      if(book.tconst === this.data.tconst) {
        this.data.originalTitle = value.originalTitle;
        this.data.primaryTitle = value.originalTitle;
        this.data.startYear = value.startYear;
        this.data.genres = value.genres;
      }
    })
    this.bookService.books.next(books)
    this.dialogRef.close(this.data)
  }
}
