import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogCommonComponent } from 'src/app/shared/component/dialog-common/dialog-common.component';
import { RxwebValidators, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FilmsService } from 'src/app/domain/services/films.services';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
@ViewChild('matTable',{static:false}) matTable:MatTable<any>
formGroup:FormGroup
displayedColumns: string[] = ['originalTitle', 'startYear', 'genres', 'button'];
dataSource = [];

constructor(@Inject('FilmsService') public filmService:FilmsService, private fb:RxFormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.formGroup = this.buildForm();
  }

  private buildForm():FormGroup {
    return this.formGroup = this.fb.group({
      title: ['', [RxwebValidators.required(), RxwebValidators.minLength({value:3})]],
      dateBegin: ['', RxwebValidators.minLength({value:4})]
    })
  }


/**
 * find title
 *   
 */
  public find(value):void{
    this.filmService.find(value).subscribe(films => { 
      let data = [];
      for(let film of films) {
        data.push(film)
      }
      this.dataSource = data;
      if(this.matTable){ this.matTable.renderRows() }
      })
  }


  public openDialog(film): void {
    const dialogRef = this.dialog.open(DialogCommonComponent, {
      data: film,
      panelClass: 'container_dialog'
    });
  }

}
