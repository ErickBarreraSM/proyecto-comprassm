export interface ProductOption {
    optionName: string;
    productName?: string; // El operador "?" hace que este campo sea opcional
  }
  
  export class CartItem {
    optionName: string;
    productName?: string;
  
    constructor(optionName: string, productName?: string) {
      this.optionName = optionName;
      this.productName = productName;
    }
  }