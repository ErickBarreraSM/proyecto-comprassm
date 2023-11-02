// product.model.ts


  
  export interface ProductData {
    product_data: {
      relevance: number;
      product_sku: string;
      subcategory_sku: string[];
      images: {
        img_desktop: string;
        img_list: string;
        img_mobile: string;
      };
      contents: {
        name_es: string;
        name_en: string | null;
        excerpt_es: string;
        excerpt_en: string | null;
        description_es: string;
        description_en: string | null;
      };
      parameters: {
        available: boolean;
        purchasable: boolean;
        featured: boolean;
        txt_btn: string;
        txt_banner: string;
        max_quantity: string;
        quantity: string;
        hora_inicio: string;
        hora_fin: string;
        purchasable_delivery: boolean;
        purchasable_pickup: boolean;
        stock_status: string;
        precio_aloha: boolean;
        free_shipping: boolean;
        diasblock: (string | null)[];
        contries: string[];
        date_ini: string;
        date_end: string;
      };
      prices: {
        price: string;
        tax: number;
        country: string;
      }[];
      presentations_validation: string;
      presentations: Presentation[];
    };
  }
  
  export interface Presentation {
    name: string;
    sku: string;
    is_default: boolean;
    country: string;
    obligatorio: string;
    qty_mod: string;
    layout: string;
    presentation: {
      name: string;
      price: string;
      img: string;
      sku: string;
      Is_Default3: string;
      CantidadDefault: string;
      price_aloha: string;
      Hidden_extra: string;
      extras: Extra[];
    }[];
  }
  
  export interface Extra {
    sku: string;
    name: string;
    cantidad_mod: string;
    layout: string | null;
    extra: {
      sku: string;
      name: string;
      price: string;
      default: string;
      price_aloha: string;
    }[];
  }
  