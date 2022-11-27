import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const onSubmit = (data) => {
    console.log(data);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 text-neutral shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* for name input */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                {...register("firstName", { required: true })}
              aria-invalid={errors.firstName ? "true" : "false"}
              />
            </div>

            {/* for email input */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required"
                  },
                  pattern: {
                    value:  /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
                    message: "Provide a valid email address"
                  }
                })}
              />
              <label className="label">
              {errors.email?.type === 'required' && <p role="alert" className="label-text-alt text-red-600">{errors.email.message}</p>}
              {errors.email?.type === 'pattern' && <p role="alert" className="label-text-alt text-red-600">{errors.email.message}</p>}
              </label>
            </div>

            {/* for Password input */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required"
                  },
                  minLength: {
                    value:  6,
                    message: "Must be at least 6 characters or longer"
                  }
                })}
              />
              <label className="label">
              {errors.password?.type === 'required' && <p role="alert" className="label-text-alt text-red-600">{errors.password.message}</p>}
              {errors.password?.type === 'minLength' && <p role="alert" className="label-text-alt text-red-600">{errors.password.message}</p>}
              </label>
            </div>
            <input className="btn sm:btn-sm md:btn-md w-full max-w-xs text-white" type="submit" value="Login" />
          </form>
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
