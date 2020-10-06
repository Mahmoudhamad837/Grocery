import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { MessageService } from 'primeng/api';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
  providers: [MessageService]
})
export class AllProductsComponent implements OnInit {

  products: Product[]=[
    {code:'1',name:'aaa', category:'asdf',quantity:'123'},
    {code:'2',name:'afa', category:'adfdf',quantity:'123555'}
  ];
  cols: any[];
  selectedProduct: Product;
  constructor(
      private messageService: MessageService,
      private router:Router,
      private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
    ];
  }

  onRowSelect(event) {
    this.router.navigate(['../details'], {relativeTo:this.route});
  }

  onRowUnselect(event) {
      this.messageService.add({severity:'info', summary:'Product Unselected',  detail: event.data.name});
  }

  openNew(){
    this.router.navigate(['../new'],{relativeTo:this.route})
  }
  openEdit(id: number){
    this.router.navigate(['../edit/', id],{relativeTo:this.route})
  }
  deleteProduct(id:number){
    console.log('Deleted Successfully');
  }

}
