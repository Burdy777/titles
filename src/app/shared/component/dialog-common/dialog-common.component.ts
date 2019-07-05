import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { FilmsService } from 'src/app/domain/services/films.services';
import { RxwebValidators, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FilmInterface } from 'src/app/domain/model/title.interface';

@Component({
  selector: 'app-dialog-common',
  templateUrl: './dialog-common.component.html',
  styleUrls: ['./dialog-common.component.scss'],
})
export class DialogCommonComponent implements OnInit {
  formGroup:FormGroup;
  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: FilmInterface, private fb:RxFormBuilder,
  @Inject('FilmsService') public filmsService:FilmsService ) { }

  ngOnInit() {
    this.formGroup = this.buildForm();
    this.formGroup.patchValue(this.data);
  }

  private buildForm(): FormGroup{
    return this.fb.group({
      originalTitle: ['', [RxwebValidators.required(),RxwebValidators.minLength({value:3})]],
      startYear: ['', [RxwebValidators.minLength({value:4}),RxwebValidators.required()]],
      genres: ['',[RxwebValidators.required(),RxwebValidators.minLength({value:3})]]
    })
    
  }

  /**
    * 
    * filter either on the title or the year and title
    */
  public save(value) {
    const films:any[] = this.filmsService.films.value;
    films.forEach((film) => {
      if(film.tconst === this.data.tconst) {
        this.data.originalTitle = value.originalTitle;
        this.data.primaryTitle = value.originalTitle;
        this.data.startYear = value.startYear;
        this.data.genres = value.genres;
      }
    })
    this.filmsService.films.next(films)
    this.dialogRef.close(this.data)
  }
}
