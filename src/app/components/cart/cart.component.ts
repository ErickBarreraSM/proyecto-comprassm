import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/api/products.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { CartService } from 'src/app/api/cart.service';
import { PaymentService } from 'src/app/api/payment-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  paymentHandler:any = null;
  selectedOptions: any[] = [];

  constructor(private cartService: CartService, private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.invokeStripe();
    // Suscríbete al servicio para recibir actualizaciones del carrito
    this.cartService.selectedOptions$.subscribe(options => {
      this.selectedOptions = options;
    });
  }


  limpiarCarrito(): void {
    // Llama al método del servicio para limpiar el carrito
    this.cartService.clearCart();
  }

  initializePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51OCTzVAq1EczSRYWn7o2sgWzomzREP6NViKn5xuT7ZZGQqub85XM7E6Y1hlMAXmMKqT9keKANBug6EtBbaUi8mZE00XbNhXwcj',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log({stripeToken})
        alert('Stripe token generated!');
      }
    });
  
    paymentHandler.open({
      name: 'Dos de tres',
      description: 'Buying a menu',
      amount: amount * 100
    });
  }

  invokeStripe() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51OCTzVAq1EczSRYWn7o2sgWzomzREP6NViKn5xuT7ZZGQqub85XM7E6Y1hlMAXmMKqT9keKANBug6EtBbaUi8mZE00XbNhXwcj',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }
      window.document.body.appendChild(script);
    }
  }


 
}

