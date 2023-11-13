import { useEffect, useState } from "react"
import apiClient from '../services/api-client';
import { CanceledError } from "axios";

interface Game {

    name: string
    file_size: string
    date_uploaded: string | null
    platforms: string
    download_links: string
    thumbnail: string | null
  
  }

const fetchGames= (query: string) => {

    const [games, setGames]= useState<Game[]>([]);
    const [_error, setError]= useState("");
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        if (query) {

            setLoading(true);

            apiClient.get('/search', {params: {name: query}})
            .then((response) => setGames(response.data))
            .catch((error) => {

                if (error instanceof CanceledError) return;
                setError(error.message);

            })
            .finally(() => setLoading(false));

        }

    }, [query]);

    return {games, loading};

}

export default fetchGames;