import React from "react";

export function useFetchWithLoading<T>(fetchFunction: () => Promise<T>, initialData: T): [T, boolean, () => void] {
    const [data, setData] = React.useState<T>(initialData);
    const [loading, setLoading] = React.useState(true);
    const fetchData = async () => {
        setLoading(true);
        const d = await fetchFunction();
        setData(d);
        setLoading(false);
    };
    React.useEffect(() => {
        fetchData().catch(e => console.log(e));
        return () => setLoading(true);
    }, [])

    return [data, loading, fetchData];
}