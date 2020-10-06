import { Component, OnInit } from '@angular/core';
import { Copoun } from './copoun.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-copouns',
  templateUrl: './copouns.component.html',
  styleUrls: ['./copouns.component.css']
})
export class CopounsComponent implements OnInit {

  cols: any[];
  selectedCopoun: Copoun;
  copouns: Copoun[];
  displayModal: boolean = false;
  date1: Date;
  date2: Date;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'copounName', header: 'Copoun Name' },
      { field: 'startDate', header: 'Start Date' },
      { field: 'endDate', header: 'end Date' },
      { field: 'discount', header: 'Discount' }
    ];

    this.copouns = [
      {id:1, copounName:'Sale', startDate:'12/10/2020', endDate:'15/10/2020', discount:10},
      {id:2, copounName:'pre Sale', startDate:'19/10/2020', endDate:'25/10/2020', discount:12},
      {id:3, copounName:'post Sale', startDate:'21/10/2020', endDate:'15/11/2020', discount:16}
    ];
  }

  AddCopoun(){
    this.showModalDialog();
  }

  deleteProduct(id: number){

  }

  showModalDialog(){
    this.displayModal = true;
  }

  save(formData: NgForm){
    console.log(formData.value);
  }

}
