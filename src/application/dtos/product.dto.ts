import { IAgeRange } from "../../domain/entity/product";

export interface CreateProductDTO {
    name: string;
    description: string;
    price: number;
    categoryId: string;
    createdBy: string;
    images: string[];
    sizes: string[];
    colors: string[];
    stock: number;
    brand?: string;
    ageRange?: IAgeRange;
}


export interface UpdateProductDTO {
    productId: string,
    product: ProductInfoDTO,
    updatedAt: Date
}
export interface ProductInfoDTO {
    _id: string,
    name: string;
    description: string;
    price: number;
    categoryId: string;
    images: string[];
    sizes: string[];
    colors: string[];
    stock: number;
    brand?: string;
    ageRange?: IAgeRange;
}
export interface PeginationProductDTO {
    limit: number | 10,
    page: number | 1,
}

export interface SearchProductDTO {
    peginationProduct: PeginationProductDTO,
    name: string,
    categoryId: string | null,
    createdId: string | null,
}

export interface GetProductsByUserIdDTO {
    peginationProduct: PeginationProductDTO,
    filter: { createdBy: string }
}
export interface DeleteProductDTO {
    productId: string
}



