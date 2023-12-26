'use server'
import Axios from '@/utils/axios'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const loginAction = async (formData: FormData) => {
    const rawFormData = {
        email: formData.get('email'),
        password: formData.get('password')
    }
    await Axios.post("users/login", rawFormData).then((res) => {
        cookies().set('auth', JSON.stringify(res.data));
        cookies().set('accessToken', res.data.accessToken);
    }).catch((error) => {
        console.error('login error', error)
    })
    redirect("/");
}