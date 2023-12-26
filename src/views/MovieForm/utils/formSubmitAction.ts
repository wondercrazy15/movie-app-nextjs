'use client';
import Axios from "@/utils/axios"
import getAccessToken from "@/utils/getAccessToken"


const formSubmitAction = async (method: string, path: string, formData: FormData) => {
    const token = await getAccessToken()
    return Axios({
        method,
        url: path,
        data: formData,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    // return await Axios(path, formData, {
    //     headers: {
    //         'Authorization': `Bearer ${token}`
    //     }
    // })
}

export default formSubmitAction