'use client'
// onClick, fetch, useState: 'use client'

import './LoginBtn.css';
import {signIn, signOut, useSession} from 'next-auth/react';

export default function LoginBtn({login}) {
    console.log(login);
    return (
        <>
            {
                login ? (
                    <>
                        <button onClick={()=>{signIn()}}>로그아웃</button>
                        <sapn>{login.user.name}</sapn>
                    </>
                ) : (
                    <button onClick={()=>{signOut()}}>로그인</button>
                )
            }
        </>
    )
}