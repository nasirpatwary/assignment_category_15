import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import SocialSignIn from "../components/SocialSignIn";
import logo from "../assets/register.json"
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate()
    const { createUser, updateUserProfile } = useAuth()
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const profile = form.profile.value;
        const email = form.email.value;
        const password = form.password.value;
        const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
        if (password.length < 6) return toast.error("Password must be 6 characters")
        if (!validPassword.test(password)) return toast.error("At least one lowercase At least one uppercase  At least one special character")
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUserProfile(name, profile)
                navigate("/")
                if (user) return toast.success("Successfully created!")
            })
            .catch(err => {
                console.log(err);
                if (err) return toast.error("auth/email-already-in-use Please log in or use a different email.")
            })
    };
    return (
        <div className="flex flex-col-reverse md:flex-row-reverse lg:px-1 px-2">
            <div className="border w-full max-w-md pt-8 lg:px-8 px-6 pb-4 space-y-3 rounded-xl">
                <h1 className="text-2xl font-bold text-center">Register Now!</h1>
                <form onSubmit={handleRegister} className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label>User Name</label>
                        <input type="text" name="name" placeholder="User Name" className="w-full border outline-none px-4 py-3 rounded-md" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label>Your Profile</label>
                        <input type="url" name="profile" placeholder="Enter Your Profile" className="w-full border outline-none px-4 py-3 rounded-md" required />
                    </div>
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
                    <button className="w-full border p-2 rounded-lg text-center">Register</button>
                </form>
                <SocialSignIn />
            <p className="text-center mt-4"> Already have an account?
                <Link to="/login" className="underline underline-offset-4"> Login</Link>
            </p>
            </div>
            <div>
                <Lottie className="lg:w-2/3" animationData={logo}></Lottie>
            </div>
        </div>
    );
};

export default Register;