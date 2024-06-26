import { useEffect, useState } from "react"
import apiClient from '../services/api-client';
import { CanceledError } from "axios";

interface Game {

    name: string
    file_size: string
    platforms: string
    download_links: string
  
  }

const fetchGames= (query: string, platform_options: string[], search_type: string) => {

    const [games, setGames]= useState<Game[]>([]);
    const [_error, setError]= useState("");
    const [loading, setLoading] = useState(false)
    const routes= {"Indexed Search": "indexedsearch", "Linear Search": "linearsearch"};

    
    useEffect(() => {

        if (query) {

            setLoading(true);

            let options: string[] | string= [];

            if (platform_options.length === 1) {

                options= platform_options[0];

            }

            else {

                options= platform_options.join(',');

            }

            apiClient.get(`/${routes[search_type as keyof typeof routes]}`, {params: {name: query, platform: options}})
            .then((response) => setGames(response.data))
            .catch((error) => {

                if (error instanceof CanceledError) return;
                setError("Something went wrong, please try again later.");

            })
            .finally(() => setLoading(false));

        }

    }, [query, platform_options, search_type]);

    return {games, loading};

}

export default fetchGames;