import React, { useState, useEffect } from 'react'
import login from '../img/login.png'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import auth from './Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import ParticlesBg from './Particalbg';
import '../Login.css'
const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        // console.log(name, email, password);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await sendEmailVerification(user);

            toast.success(`Verification email sent to ${email}. Please check your email.`);

            toast.success(`Login to your account`);

            setTimeout(() => {
                navigate('/login');
            }, 3000)

        } catch (error) {
            toast.error(error.message);
            console.error('Error signing up:', error.message);
        }
    };

    // useEffect(() => {
    //     onAuthStateChanged(auth, function (user) {
    //         if (user) {
    //             console.log("This is the user ", user);
    //         }
    //         else {
    //             console.log('There is no user logged in user');
    //         }
    //     });
    // }, [])
    return (
        // <div className='flex justify-center items-center '>
        //     <ToastContainer />
        //     <div className="flex justify-center items-center w-[70%] mb-6">
        //         <div className="bg-white w-[50%] px-4 
        //       flex items-center justify-center gap-4">

        //             <div className="w-full h-100">
        //                 <h1 className="text-sm md:text-2xl font-bold leading-tight mt-12">Get Started Now</h1>

        //                 <form>
        //                     <div>
        //                         <label className="block text-gray-700">Name</label>
        //                         <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-1 rounded-lg bg-gray-200 mt-2 border focus:bg-white focus:outline-none" required />
        //                     </div>
        //                     <div className="mt-4">
        //                         <label className="block text-gray-700">Email Address</label>
        //                         <input type="email" placeholder="Enter Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-1 rounded-lg bg-gray-200 mt-2 border  focus:bg-white focus:outline-none" required />
        //                     </div>

        //                     <div className="mt-4">
        //                         <label className="block text-gray-700">Password</label>
        //                         <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} className="w-full px-4 py-1 rounded-lg bg-gray-200 mt-2 border 
        //               focus:bg-white focus:outline-none" required />
        //                     </div>

        //                     <button onClick={handleSignUp} type="submit" className="w-full block bg-[#1BF0A2] focus:bg-indigo-400 text-white font-semibold rounded-lg
        //             px-4 py-2 mt-3">Sign Up</button>
        //                 </form>

        //                 <p className='flex justify-end cursor-pointer font-bold underline text-blue-700'><Link to="/login">Signin</Link></p>

        //             </div>
        //         </div>

        //         <div className='block w-[50%]'>
        //             <img src={login} alt='mainimg' />

        //         </div>

        //     </div>

        // </div>
        <div>
            <ParticlesBg />
            <ToastContainer />
            
            <form className='formo'>
                <h3>Signup Here</h3>

                <label for="username">Username</label>
                <input type="text" placeholder="Enter email address..." id="username" onChange={(e) => setEmail(e.target.value)} value={email} />

                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />

                <button onClick={handleSignUp}>Sign Up</button>

                <div className="social flex justify-end">    
                    <div className="fb"><i className="fab fa-facebook"></i><Link to="/login">Signin</Link></div>
                </div>
            </form>


        </div>

    )
}
export default Signup