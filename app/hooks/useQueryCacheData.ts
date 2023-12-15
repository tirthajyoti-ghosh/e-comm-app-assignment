import { useState, useEffect } from 'react';
import { QueryKey, QueryObserver, useQueryClient } from '@tanstack/react-query';

export default function useQueryCacheData<T>(queryKey: QueryKey) {
    const queryClient = useQueryClient();
    const [cachedData, setCachedData] = useState<T>(
        queryClient.getQueryCache()?.find({ queryKey: [queryKey] })?.state.data as T,
    );

    useEffect(() => {
        const observer = new QueryObserver<T>(queryClient, {
            queryKey,
        });

        const unsubscribe = observer.subscribe(result => {
            if (result?.data) {
                setCachedData(result?.data);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [queryClient, queryKey]);

    return cachedData;
}
