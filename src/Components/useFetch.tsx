import { useState, useEffect, useCallback } from "react";

const useFetch = (url: string, option: any) => {
    const [data, setData] = useState({});

    useCallback(() => {
        fetch(url, option)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [data]);

    return data;
};

export default useFetch;