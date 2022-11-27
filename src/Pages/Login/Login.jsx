import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init"

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if(user) {
    console.log(user);
  }
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 text-neutral shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login</h2>
          <div className="divider">OR</div>
          <button 
          className="btn btn-outline sm:btn-sm md:btn-md font-normal uppercase"
          onClick={() => signInWithGoogle()}
          >
            Continue with google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
