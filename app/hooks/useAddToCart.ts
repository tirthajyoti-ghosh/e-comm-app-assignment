import { useMemo } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Product, Cart } from 'app/types/data';

export default function useAddToCart() {
    const queryClient = useQueryClient();

    const data = useMemo(() => queryClient.getQueryData<{ products: Product[] }>(['products']), [queryClient]);

    const addToCart = (productId: string) => {
        const cart = queryClient.getQueryData<Cart>(['cart']) || {};

        const item = cart[Number(productId)];

        if (item) {
            queryClient.setQueryData<Cart>(['cart'], {
                ...cart,
                [productId]: {
                    ...item,
                    quantity: item.quantity + 1,
                },
            });
        } else {
            queryClient.setQueryData<Cart>(['cart'], {
                ...cart,
                [productId]: {
                    id: productId,
                    quantity: 1,
                    product: data?.products.find(product => product.id === Number(productId))!,
                },
            });
        }
    };

    return addToCart;
}
