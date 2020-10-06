import { Component, OnInit } from '@angular/core';
import { User } from '../users/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

  cols: any[];
  users :User[];
  selectedUser: User;
  displayModal: boolean = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'userName', header: 'User Name' },
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      { field: 'status', header: 'Status' },
      { field: 'verified', header: 'Verified' },
      { field: 'role', header: 'Role' },
      { field: 'country', header: 'Country' }
    ];

    this.users =[
      {
        id:1,
        userName:'Mahmoud',
        name:'Mahmoud',
        email:'mahmoud@gmail.com',
        country:'Egypt',
        password:'123',
        role:{id:4, roleName:'Driver'},
        status:{id:1, statusName:'Active'},
        verified:true,
        phoneNumber:201117883915
      },
      {
        id:2,
        userName:'Salah',
        name:'Salah',
        email:'mah@l.com',
        country:'Egypt',
        password:'123',
        role:{id:4, roleName:'Driver'},
        status:{id:1, statusName:'Active'},
        verified:true,
        phoneNumber:201117883955
      }
    ];
  }

  onRowSelect(event){
    this.showModalDialog();
  }
  onRowUnselect(event){

  }

  showModalDialog() {
    this.displayModal = true;
  }

}
