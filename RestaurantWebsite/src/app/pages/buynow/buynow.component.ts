import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/Services/order-details.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent implements OnInit {

  constructor(private param: ActivatedRoute, private service: OrderDetailsService) { }
  getMenuId: any;
  menuData:any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'get menu');
    if(this.getMenuId)
    {
    this.menuData = this.service.foodDetails.filter((value=>{
        return value.id == this.getMenuId
      }))
    }
    }

}
