import { useRef } from 'react';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordconfirmationRef = useRef();

  return (
    <div>
      <div>
        <h2>Sign Up</h2>
        <form>
          <div>
            <label htmlFor=''>email</label>
            <input type='email' name='' id='' ref={emailRef} />
          </div>
          <div>
            <label htmlFor=''>password</label>
            <input type='password' name='' id='' ref={passwordRef} />
          </div>
          <div>
            <label htmlFor=''>Password Confirmation</label>
            <input type='password' name='' id='' ref={passwordconfirmationRef} />
          </div>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
      <div>Already have an account? Log In</div>
    </div>
  );
};

export default SignUp;
