import Axios from "@/utils/axios";
import getAccessToken from "@/utils/getAccessToken";

const getMovieAction = async (page: number) => {
    const token = await getAccessToken()
    return Axios.get(`movies/list?page=${page}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export default getMovieAction;