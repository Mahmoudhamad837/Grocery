import { Component, OnInit } from '@angular/core';
import { Languages } from './languages.model';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  languages: Languages[];
  items: MenuItem[];
  selectedLang: string = 'arabic';
  className: string = '';
  constructor() { }

  ngOnInit(): void {
    this.languages = [
      {label:'english'},
      {label:'arabic'},
    ];

    this.items = [
      {
          label: 'Update',
          icon: 'pi pi-refresh'
      },
      {
          label: 'Delete',
          icon: 'pi pi-times'
      },
      {
          label: 'Angular Website',
          icon: 'pi pi-external-link',
          url: 'http://angular.io'
      },
      {
          label: 'Router',
          icon: 'pi pi-upload',
          routerLink: '/fileupload'
      }
    ];
  }

  onClassChange(){
    this.className = 'show';
  }

}
