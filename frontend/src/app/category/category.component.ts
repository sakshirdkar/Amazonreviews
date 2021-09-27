import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../_services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories : any;
  constructor(private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response =>{
      this.categories = response;
      console.log(this.categories);
    })
  }

}
