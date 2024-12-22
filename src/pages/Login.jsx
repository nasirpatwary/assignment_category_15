import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import SocialSignIn from "../components/SocialSignIn";
import logo from "../assets/login.json"
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
const Login = () => {
    const { signInUser } = useAuth()
    const handleRegister = e => {
        e.preventDefault();
        // const formData = new FormData(e.target);
        // const data = Object.fromEntries(formData.entries());
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email,password)
        .then(result =>{
            const user = result?.user
            console.log(user);
            if (user) return toast.success('Successfully created!');

        })
        .catch(err =>{
            if (err) return toast.error("email and password should match with the registered email and password")
        })
      };
    return (
        <div className="flex justify-center lg:gap-8 flex-col-reverse md:flex-row lg:px-1 px-2">
        <div className="border md:w-96 max-w-md pt-8 lg:px-8 px-6 pb-4 space-y-3 rounded-xl">
            <h1 className="text-2xl font-bold text-center">Login Now!</h1>
            <form onSubmit={handleRegister} className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label>Your Email</label>
                    <input type="email" name="email" placeholder="Enter Your Email" className="w-full border outline-none px-4 py-3 rounded-md" required />
                </div>
                <div className="space-y-1 text-sm">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" className="w-full px-4 border outline-none py-3 rounded-md " required />
                    <div>
                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                    </div>
                </div>
                <button className="w-full border p-2 rounded-lg text-center">Login</button>
            </form>
           <SocialSignIn />
           <p className="text-center mt-4">Don't have an account yet?
                <Link
                 to="/register" className="underline underline-offset-4"> Regster</Link>
            </p>
        </div>
         <div className="">
         <Lottie animationData={logo}></Lottie>
         </div>
        </div>
    );
};

export default Login;