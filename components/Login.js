import Image from "next/image";

function Login({authenticate}) {
    return (
        <div className="bg-black relative">
            Login Component
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
                <Image className="object-cover rounded-full"
                    src="https://wallpaperaccess.com/full/8054249.png" height={200} width={200}/>

                <button className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
                    onClick={() => authenticate()}>
                    Login with Meta Mask
                </button>

            </div>

            <div className="w-full h-screen">
                <Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover"/>
            </div>

        </div>
    )
}

export default Login;