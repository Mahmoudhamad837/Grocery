import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../user.model';
import { Role } from 'src/app/shared/role.model';
import { NgForm } from '@angular/forms';
import { Status } from 'src/app/shared/status.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: number;
  user: User;
  roles: Role[];
  statuses: Status[];
  selectedStatus: Status;
  selectedRole: Role;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.roles =[
      {id:1, roleName:'Admin'},
      {id:2, roleName:'Seller'},
      {id:3, roleName:'Manager'},
      {id:4, roleName:'Driver'},
      {id:5, roleName:'User'}
    ];

    this.statuses = [
      {id:1, statusName:'Active'},
      {id:2, statusName:'Banned'},
      {id:3, statusName:'Closed'}
    ];

    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        if(this.id > 0){
          this.user = {
            id:1,
            country:'Egypt',
            email:'mahmoudhamad837@gmail.com',
            name:'Mahmoud',
            userName:'Mahmoud',
            password:'123',
            role:this.roles[4],
            phoneNumber:201117883915,
            status:this.statuses[0],
            verified:true
          }
        }else{
          this.user = {
            id:0,
            country:'',
            email:'',
            name:'',
            userName:'',
            password:'',
            role:{},
            phoneNumber:0,
            status:{},
            verified:false
          };
        }
      }
    );
  }

  save(formData: NgForm){
    console.log(formData.value);
  }

  goBack(){
    if(!this.id){
      this.router.navigate(['../'], {relativeTo: this.route});
    }else{
      this.router.navigate(['../../'], {relativeTo: this.route});
    }
  }

}
