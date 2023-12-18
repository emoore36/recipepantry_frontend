'use client'
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

export default function Google() {

    const onSuccessHandler = (response: any) => {
        console.log('Google login successful.', response);

        return <div>Success!</div>
    };

    const onErrorHandler = () => {
        console.log('error');
        return <div>Error!</div>
    };

    return (
        <GoogleOAuthProvider clientId="191860349187-bnuakvmj1nip2jh938i3s9ikj28jhifs.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={onSuccessHandler}
                onError={onErrorHandler}
            />
        </GoogleOAuthProvider>);
};