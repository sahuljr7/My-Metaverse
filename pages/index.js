import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  if(!isAuthenticated) return <Login authenticate={authenticate}/>

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="max-w-screen-2xl mx-auto">
            <Header />
            <Messages />
        </div>

        <div>
          <button className='bg-yellow-500 rounded-md px-2 py-1' onClick={logout}>
            Logout
          </button>
        </div>


        </div>
  )
}