import React, { useState } from 'react';
import AuthenticationType from './AuthenticationType';
import SignUp from './SignUp';

function Form() {
  const [auth, setAuth] = useState();
  const [signUp, setSignUp] = useState(true);
  const [formData, setFormData] = useState({});

  const handleSignUp = () => {
    setSignUp(true);
    setAuth(false);
  };
  const handleAuth = () => {
    setSignUp(false);
    setAuth(true);
  };

  return (
    <div className="h-2/3 w-2/3 lg:h-3/4 ">
      {signUp
      && (
      <SignUp
        formData={formData}
        setFormData={setFormData}
        handleAuth={handleAuth}
      />
      ) }

      {auth && (
      <AuthenticationType
        formData={formData}
        setFormData={setFormData}
        backButtonClicked={handleSignUp}
      />
      )}

      {/* {login && (
      <Login
        handleSignUp={handleSignUp}
      />
      )} */}
    </div>
  );
}

export default Form;
