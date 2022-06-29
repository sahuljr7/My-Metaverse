import React from 'react'
import { useMoralis } from "react-moralis";

function ChangeUsername() {
    const {setUserData, isUserUpdating, useError, user} = useMoralis();

    const setUsername = (user) => {
        const username = prompt(
        `Enter your new Username (current: ${user.getUsername()})`
        );

        if(!username) return;

        setUserData({
            username,
        });
    };


  return (
  <div className="text-sm absolute top-5 right-5">
    <button disable={isUserUpdating}
    onClick={setUsername}
    className="hover:text-pink-700"
    >
        Change your Username
    </button>
  </div>
  )
}

export default ChangeUsername