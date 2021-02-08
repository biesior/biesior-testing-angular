import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { CartService } from "../cart.service";

@Component({
  selector: "app-numbers",
  templateUrl: "./numbers.component.html",
  styleUrls: ["./numbers.component.css"]
})
export class NumbersComponent implements OnInit {
  clickMessage = 'ccc';
  checkoutForm = this.formBuilder.group({
    n1: "",
    n2: "",
    n3: "",
    n4: "",
    n5: "",
    n6: ""
  });
  empList = [];

  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit() {}

  onSubmit(): void {
    // Process checkout data here
    // this.items = this.cartService.clearCart();
    // console.warn('Your order has been submitted', this.checkoutForm.value);
    // this.checkoutForm.reset();

    // console.log(this.checkoutForm.value);
    this.empList.push(this.checkoutForm.value);
    // console.log(this.empList);
    let v = this.checkoutForm.value;
    this.clickMessage=v.n1;
    this.checkoutForm.value.n1="";
  }
}
