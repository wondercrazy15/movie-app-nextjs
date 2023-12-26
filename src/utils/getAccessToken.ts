'use server';
import { cookies } from 'next/headers'

function getAccessToken() {
    const cookieStore = cookies()
    const accessToken = cookieStore.get('accessToken')
    return accessToken?.value || null;
}

export default getAccessToken