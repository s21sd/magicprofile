import React, { useState } from 'react'
import login from '../img/login.png'
import GoogleButton from 'react-google-button'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import auth from './Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from 'firebase/auth';
const provider = new GoogleAuthProvider();

const Login = ({ onlogin }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();


        try {
            await signInWithEmailAndPassword(auth, email, password);
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    if (!user.emailVerified) {
                        toast.warning('Please verify your email before logging in.');
                    }
                    else {
                        toast.success('Login successful!');
                        onlogin();
                        setTimeout(() => {
                            navigate('/dashboard');
                        }, 2000)
                    }
                }
            })
            return () => unsubscribe();

        } catch (error) {
            toast.error('Somethign went wrong!');
            console.error('Error signing in:', error.message);

        }
    }

    const signInWithGoogle = async (e) => {
        signInWithPopup(auth, provider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);

                if (!credential) {
                    return;
                }
                const token = credential.accessToken;

                const user = result.user;
                toast.success('Login with google successful!');
                onlogin();
                setTimeout(() => {
                    navigate('/dashboard');
                }, 2000)
                // console.log(user);

            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;

                const email = error.customData.email;
                toast.error('Somethign went wrong!');
                const credential = GoogleAuthProvider.credentialFromError(error);

            });
    }

    return (

        <div className='flex justify-center items-center '>
            <ToastContainer />
            <div className="flex justify-center items-center w-[70%] mb-6">

                <div className="bg-white w-[50%] px-4 
              flex items-center justify-center">

                    <div className="w-full h-100">
                        <h1 className="text-sm md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

                        <form className="mt-6" onSubmit={handleSignIn}>
                            <div>
                                <label className="block text-gray-700">Email Address</label>
                                <input type="email" placeholder="Enter Email Address" className="w-full px-4 py-1 rounded-lg bg-gray-200 mt-2 border  focus:bg-white focus:outline-none" required value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700">Password</label>
                                <input type="password" placeholder="Enter Password" minLength={6} className="w-full px-4 py-1 rounded-lg bg-gray-200 mt-2 border 
                      focus:bg-white focus:outline-none" required value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <button type="submit" className="w-full block bg-[#1BF0A2] focus:bg-indigo-400 text-white font-semibold rounded-lg
                    px-4 py-2 mt-3">Log In</button>
                        </form>



                        <button type="button" className="w-full flex justify-center items-center text-gray-900 font-semibold rounded-lg px-4 py-3 ">

                            <GoogleButton
                                onClick={signInWithGoogle}
                            />

                        </button>

                        <p className='flex justify-end cursor-pointer font-bold underline text-blue-700'><Link to="/signup">Signup</Link></p>


                    </div>
                </div>

                <div className='block'>
                    <img src={login} alt='mainimg' />

                </div>

            </div>

        </div>
    )
}

export default Login