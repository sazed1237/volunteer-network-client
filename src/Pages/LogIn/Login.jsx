import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogIn from "../SocialLogIn/SocialLogIn";
import { Link } from "react-router-dom";

const Login = () => {

const {singIn } = useContext(AuthContext)


    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        singIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => console.log(error))
        
        
    }


    return (
        <div className=" bg-base-200">
            <div className="w-1/2 m-auto py-8 ">

                <div className="shadow-2xl rounded-xl bg-base-100">
                    <h1 className="text-3xl text-center pt-4 font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div>
                            <p className="text-center">New to Volunteer Network? <Link to={'/singup'} className="text-blue-700 font-bold">Sing Up</Link></p>
                        </div>
                    </form>
                    <SocialLogIn></SocialLogIn>
                </div>
            </div>
        </div>
    );
};

export default Login;