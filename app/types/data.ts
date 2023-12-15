export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
};

export type Cart = {
    [key: number]: {
        id: number;
        quantity: number;
        product: Product;
    };
};
