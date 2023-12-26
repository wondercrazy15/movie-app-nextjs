import React, { Fragment } from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

function ProtectedRoute({
    children,
}: {
    children: React.ReactNode | React.JSX.Element
}) {
    const cookieStore = cookies()
    const auth = cookieStore.get('auth')
    if (auth == undefined) {
        redirect('/login')
    }
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}

export default ProtectedRoute