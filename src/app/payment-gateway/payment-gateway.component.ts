// payment-gateway.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.css']
})
export class PaymentGatewayComponent {
  @Output() paymentConfirmed = new EventEmitter();
  modalOpen = false;

  closeModal() {
    this.modalOpen = false;
  }

  confirmPayment() {
    // Lógica para confirmar el pago
    this.paymentConfirmed.emit();
    this.closeModal(); // Cierra el modal después de confirmar el pago (puedes ajustar esto según tus necesidades)
  }

  openModal() {
    this.modalOpen = true;
  }
}