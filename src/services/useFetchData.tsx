import { useState, useEffect } from 'react'
import {IBook, IQuestion} from "../types";

export const useFetchData = (url: string) => {
    const [data, setData] = useState<IBook[] | IQuestion[]>();

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setData(result);
            })
            .catch(error => {
                console.log('Request failed', error)
            })
    }, [url])

    if (data) {
        return data;
    }
}
