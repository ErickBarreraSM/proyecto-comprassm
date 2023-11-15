// payment.service.ts
import { Injectable } from '@angular/core';

import { loadStripe, Stripe } from '@stripe/stripe-js';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private stripePromise: Promise<Stripe | null>;

  constructor() {
    this.stripePromise = loadStripe(environment.stripePublishableKey);
  }

  async initiatePayment(amount: number): Promise<void> {
    const stripe = await this.stripePromise;

    if (stripe) {
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: 'price_12345', quantity: 1 }],
        mode: 'payment',
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`,
      });

      if (error) {
        console.error('Error during checkout:', error);
      }
    } else {
      console.error('Stripe is not loaded.');
    }
  }
}
