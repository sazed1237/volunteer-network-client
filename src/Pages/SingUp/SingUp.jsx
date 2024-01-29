import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogIn from "../SocialLogIn/SocialLogIn";
import { Link } from "react-router-dom";

const SingUp = () => {

    const { createUser } = useContext(AuthContext)


    const handleSingUp = event => {
        event.preventDefault()

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
        .then(result => {
            const createdUser = result.createUser;
            console.log(createdUser)
        })
        .catch(error => console.log(error))

    }

    const handleGoogleSingIn = () => {
        googleSingIn()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className=" bg-base-200">
            <div className="w-1/2 m-auto py-8 ">

                <div className="shadow-2xl rounded-xl bg-base-100">
                    <h1 className="text-3xl text-center pt-4 font-bold">Sing Up now!</h1>

                    <form onSubmit={handleSingUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
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
                            <input className="btn btn-primary" type="submit" value="Sing up" />
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

export default SingUp;