import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderModel } from './order-dash.model';

@Component({
  selector: 'app-order-dash',
  templateUrl: './order-dash.component.html',
  styleUrls: ['./order-dash.component.css']
})
export class OrderDashComponent implements OnInit {
  formValue!: FormGroup;
  orderModelObj: OrderModel = new OrderModel();
  orderData!: any;
  showAdd!:boolean;
  showUpdate!:boolean;

  constructor(private formBuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      salesman:[''],
      productcode:[''],
      units:[''],
      effectivedate:['']
    })
    this.getAllOrders()
  }
  postOrderDetails(){
    this.orderModelObj.salesman = this.formValue.value.salesman;
    this.orderModelObj.productcode = this.formValue.value.productcode;
    this.orderModelObj.units = this.formValue.value.units;
    this.orderModelObj.effectivedate = this.formValue.value.effectivedate;

    this.api.postOrder(this.orderModelObj).subscribe(res=>{
      console.log(res);
      alert("Order is submitted successfully!")
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAllOrders();
    },
    err=>{
      alert("Error in raising the Order. Please contact our support")
    })
  }

  getAllOrders(){             //GET API
    this.api.getOrder().subscribe(res=>{
      this.orderData = res;
    })
  }

  deleteOrder(ord:any){
    this.api.deleteOrder(ord.id).subscribe(res=>{
      alert("Order is Deleted Successfully!")
      this.getAllOrders();
    })
  }

  updateOrderDetails(){
    this.orderModelObj.salesman = this.formValue.value.salesman;
    this.orderModelObj.productcode = this.formValue.value.productcode;
    this.orderModelObj.units = this.formValue.value.units;
    this.orderModelObj.effectivedate = this.formValue.value.effectivedate;

    this.api.updateOrder(this.orderModelObj, this.orderModelObj.id).subscribe(res=>{
      alert("Order is updated successfully!");

      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllOrders();
    })
  }

  clickAddOrder(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  onEdit(ord:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.orderModelObj.id = ord.id;
    this.formValue.controls['salesman'].setValue(ord.salesman);
    this.formValue.controls['productcode'].setValue(ord.productcode);
    this.formValue.controls['units'].setValue(ord.units);
    this.formValue.controls['effectivedate'].setValue(ord.effectivedate);
  }

}
