import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {

  categories: Category[];
  selectedCategory: string = 'Vegtables';
  id: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.categories = [
      {id:1, name:'Vegtables', imagePath:'vegtables.jpg'},
      {id:2, name:'Fruits', imagePath:'fruits.jpg'},
      {id:3, name:'Juices', imagePath:'juice.jpg'}
    ];
    
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
      }
    );
  }

  openEdit(id: number){
      this.router.navigate(['../edit/', id], {relativeTo:this.route});
  }

  openNew(){
    this.router.navigate(['../new'],{relativeTo: this.route});
  }

  deleteCategory(id: number){
    console.log('Deleted Successfully');
  }

}
