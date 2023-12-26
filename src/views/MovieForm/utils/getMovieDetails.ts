import Axios from "@/utils/axios"
import getAccessToken from "@/utils/getAccessToken"

const getMovieDetails = async (id: string) => {
    const token = await getAccessToken()
    return await Axios.get(`movies/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export default getMovieDetails