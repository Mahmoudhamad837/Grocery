import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/shared/role.model';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  cols: any[];
  users :User[];
  selectedUser: User;
  selectedRole: Role;
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
        role:{id:5, roleName:'User'},
        status:{id:1, statusName:'Active'},
        verified:true,
        phoneNumber:201117883915
      },
      {
        id:2,
        userName:'Mohamed',
        name:'Mohamed',
        email:'mah@l.com',
        country:'Egypt',
        password:'123',
        role:{id:5, roleName:'User'},
        status:{id:1, statusName:'Active'},
        verified:true,
        phoneNumber:201117883955
      }
    ];
  }

  openNew(){
    this.router.navigate(['../new'], {relativeTo:this.route});
  }
  openEdit(id: number){
    this.router.navigate(['../edit/', id], {relativeTo:this.route});
  }
  deleteProduct(id: number){
    console.log('Deleted Successfully');
  }
  onRowSelect(event) {
    const ID = event.data.id;
    this.router.navigate(['../verify/', ID], {relativeTo: this.route});
  }
  onRowUnselect(event) {
      
  }

}
