import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogCommonComponent } from 'src/app/shared/component/dialog-common/dialog-common.component';
import { RxwebValidators, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { BookService } from 'src/app/domain/services/books.services';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
formGroup:FormGroup

ELEMENT_DATA: any[] = [];
displayedColumns: string[] = ['originalTitle', 'startYear', 'genres', 'button'];

dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  constructor(@Inject('BookService') public bookService:BookService, private fb:RxFormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.formGroup = this.buildForm();

  }

  private buildForm() {
    return this.formGroup = this.fb.group({
      title: ['', RxwebValidators.required()],
      dateBegin: ['', [RxwebValidators.minLength({value:4}) ] ]
    })
  }


  public find(value){
    this.bookService.find(value).subscribe(books =>{
       for(let book of books) {
         this.ELEMENT_DATA.push(book)
        }
      })
  }

  public applyFilter(filterValue:string) {
    filterValue.toString();
    return this.dataSource.filter = filterValue.trim()
  }

  openDialog(book): void {
    const dialogRef = this.dialog.open(DialogCommonComponent, {
      data: book,
      panelClass: 'container_dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
     // rafraichir
    });
  }

}
