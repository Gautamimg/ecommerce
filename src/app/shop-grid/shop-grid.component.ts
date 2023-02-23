import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-grid',
  templateUrl: './shop-grid.component.html',
  styleUrls: ['./shop-grid.component.css']
})
export class ShopGridComponent implements OnInit {

  isActive:boolean=true;
  isActive_1:boolean=false;
  layout:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  grid_list(event:any){
    if(event == 'grid'){
      this.isActive = true;
      this.isActive_1 = false;
      this.layout = true;
    }
    else if(event == 'list'){
      this.isActive_1 = true;
      this.isActive = false;
      this.layout = false;;
    }
    
  }

}
