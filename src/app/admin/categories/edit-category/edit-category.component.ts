import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Category } from '../category.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  category: Category;
  id: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        if(this.id > 0){
          this.category={
            name:'Fruits',
            imagePath:'asset/fruits.jpg'
          }
        }else{
          this.category={
            name:'',
            imagePath:''
          }
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
