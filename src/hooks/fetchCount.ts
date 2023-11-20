import { useEffect, useState } from "react"
import apiClient from '../services/api-client';
import { CanceledError } from "axios";

const fetchCount= (query: string) => {

    const [count, setCount] = useState("");
    const [error, setError]= useState("");

    useEffect(() => {

        if (query == "") {

            apiClient.get('/')
            .then((response) => setCount(response.data))
            .catch((error) => {

                if (error instanceof CanceledError) return;
                setError("Something went wrong, please try again later.");

            })

        }

    }, [query]);

    return {count, error};

}

export default fetchCount;