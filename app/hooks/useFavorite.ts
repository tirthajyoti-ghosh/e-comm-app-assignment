import { useQueryClient } from '@tanstack/react-query';
import { Product, Favorite } from 'app/types/data';
import { useMemo } from 'react';

export default function useFavorite(id: number) {
    const queryClient = useQueryClient();
    const data = useMemo(() => queryClient.getQueryData<{ products: Product[] }>(['products']), [queryClient]);

    const addToFavorite = () => {
        queryClient.setQueryData(['favorite'], (existingData: Favorite) => {
            return {
                ...existingData,
                [id]: { ...data?.products.find(product => product.id === id) },
            };
        });
    };

    const removeFromFavorite = () => {
        queryClient.setQueryData(['favorite'], (existingData: Favorite) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { [id]: _, ...rest } = existingData;
            return rest;
        });
    };

    return { addToFavorite, removeFromFavorite };
}
