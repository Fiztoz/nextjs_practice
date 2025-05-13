import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const login = () => {
    const {data: session} = useSession()

    if(session) {
        return (
             <div>
                <p>Welcome, {session.user.email}</p>
                <button onClick={() => signOut()}>Sign Out</button>
                <br/>
                <Link className="p-2 bg-blue-500 rounded-full" href={'/account'}>Account</Link>
            </div>
        )
    } else {
        return (
            <div>
                <p>You are not signed in.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => signIn()}>Sign in</button>
            </div>
        )
    }
}

export default login