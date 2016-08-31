/**
 * Product
 */
export class Product {
    id: number;
    
    constructor(public name: string,
                public price: number,
                public sku: string
                ) {}
}