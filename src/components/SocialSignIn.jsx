import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SocialSignIn = () => {
    const { signInGoogle, signInGitHub } = useAuth()
    const handleGoogle = () =>{
        signInGoogle()
        .then(() => {
            toast.success("Successfully created!")
        })
        .catch(err => console.log(err.message))
    }
    const handleHithub = () =>{
        signInGitHub()
        .then(() => {
            toast.success("Successfully created!")
        })
        .catch(err => console.log(err.message))
    }
    return (
        <div>
            <div>
                <p className="divider divider-success bg-gradient-to-r from-sky-500 via-[#ffe333] to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">Login with social accounts</p>
            </div>
            <div className="flex justify-center border rounded-md py-2 space-x-6">
                <button onClick={handleGoogle}>
                    <FcGoogle size={25} />
                </button>
                <button onClick={handleHithub}>
                    <FaGithub size={25} />
                </button>
            </div>
        </div>
    );
};

export default SocialSignIn;