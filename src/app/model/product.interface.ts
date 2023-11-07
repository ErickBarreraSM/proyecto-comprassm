// Generated by https://quicktype.io

export interface GetProducts {
    ok:     boolean;
    status: number;
    body:   Body;
}

export interface Body {
    relevance:                number;
    product_sku:              string;
    subcategory_sku:          string[];
    images:                   Images;
    contents:                 Contents;
    parameters:               Parameters;
    prices:                   Price[];
    presentations_validation: string;
    presentations:            BodyPresentation[];
}

export interface Contents {
    name_es:        string;
    name_en:        null;
    excerpt_es:     string;
    excerpt_en:     null;
    description_es: string;
    description_en: null;
}

export interface Images {
    img_desktop: string;
    img_list:    string;
    img_mobile:  string;
}

export interface Parameters {
    available:            boolean;
    purchasable:          boolean;
    featured:             boolean;
    txt_btn:              string;
    txt_banner:           string;
    max_quantity:         string;
    quantity:             string;
    hora_inicio:          string;
    hora_fin:             string;
    purchasable_delivery: boolean;
    purchasable_pickup:   boolean;
    stock_status:         string;
    precio_aloha:         boolean;
    free_shipping:        boolean;
    diasblock:            null[];
    contries:             string[];
    date_ini:             string;
    date_end:             string;
}

export interface BodyPresentation {
    name:         string;
    sku:          string;
    is_default:   boolean;
    country:      string;
    obligatorio:  string;
    qty_mod:      string;
    layout:       string;
    presentation: PresentationPresentation[];
}

export interface PresentationPresentation {
    name:            string;
    price:           string;
    img:             string;
    sku:             string;
    Is_Default3:     string;
    CantidadDefault: string;
    price_aloha:     string;
    Hidden_extra:    string;
    extras:          PresentationExtra[];
}

export interface PresentationExtra {
    sku:          string;
    name:         string;
    cantidad_mod: string;
    layout:       null;
    extra:        ExtraExtra[];
}

export interface ExtraExtra {
    sku:         string;
    name:        string;
    price:       string;
    default:     string;
    price_aloha: string;
}

export interface Price {
    price:   string;
    tax:     number;
    country: string;
}


