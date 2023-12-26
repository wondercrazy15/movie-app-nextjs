'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const logoutAction = () => {
    cookies().delete('auth')
    cookies().delete('accessToken')
    redirect("/login")
}
