'use client'

import { FormEvent } from "react";

export default function Login() {


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="johndoe@example.com" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="*************" />
            </div>
            <input />
        </form>
    </div>

}