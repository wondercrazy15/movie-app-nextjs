import Axios from "@/utils/axios";
import getAccessToken from "@/utils/getAccessToken";

const getMovieAction = async () => {
    const token = await getAccessToken()
    return Axios.get("movies/list?page=1", {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export default getMovieAction;