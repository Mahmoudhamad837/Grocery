import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product:Product;
  id:number;
  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (p:Params)=>{
        this.id = +p['id'];
        if(this.id > 0){
          this.product = {
            code:'1',
            category:'asdf',
            name:'aaa',
            quantity:'123',
            description:'this is a unique product',
            image:'Here is a path of the image'
          };
        }else{
          this.product = {
            code:'',
            category:'',
            name:'',
            quantity:'',
            description:'',
            image:''
          };
        }
      }
    );
  }

  save(formData: NgForm){
    console.log(formData.value);
  }

  goBack(){
    if(this.id > 0){
      this.router.navigate(['../../'],{relativeTo:this.route});
    }else{
      this.router.navigate(['../'],{relativeTo:this.route});
    }
  }

}
