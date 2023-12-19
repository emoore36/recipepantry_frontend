'use client'
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import dotenv from 'dotenv';
dotenv.config()

export default function Google() {

    const client_id = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '';

    const onSuccessHandler = (response: any) => {
        console.log('Google login successful.', response);
    };

    const onErrorHandler = () => {
        console.log('error');
    };

    return (
        <GoogleOAuthProvider clientId={client_id}>
            <GoogleLogin
                onSuccess={onSuccessHandler}
                onError={onErrorHandler}
            />
        </GoogleOAuthProvider>);
};