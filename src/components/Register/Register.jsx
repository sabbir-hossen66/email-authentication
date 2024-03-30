import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

const Register = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    // console.log('mama');
    const email = e.target.email.value
    const password = e.target.password.value;
    // console.log(password, email);
    setError('')
    setSuccess('')

    if (password.length < 6) {
      setError('atleaset create 6 digit password')
      return
    }
    else if (!/[A-Z]/.test(password)) {
      setError('atleast one letter should be capital')
      return
    }
    // create a user
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const seeResult = result.user
        console.log(seeResult);
        setSuccess('succesfully created !')
      })
      .catch(error => {
        console.log(error);
        setError(error.message)
      })
  }



  return (
    <div>
      <h2>Registration here</h2>
      <div className="flex flex-col mx-auto max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign uP</h1>
          <p className="text-sm dark:text-gray-600">Sign in to access your account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm">Email address</label>
              <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" required />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Password</label>
                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
              </div>
              <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" required />
            </div>
          </div>
          <div className="space-y-2">

            {/* <input className="btn" type="submit" value="submit" /> */}
            <button>Login</button>

            <p className="px-6 text-sm text-center dark:text-gray-600">Dont have an account yet?
              <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-default-600">Sign up</a>.
            </p>
          </div>
        </form>
        {
          error ? <p className="text-red-500">{error}</p> :
            success && <p className="text-2xl text-green-500">{success}</p>
        }

      </div >
    </div >
  );
};

export default Register;