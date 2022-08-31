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
    <div className="h-4/5 w-5/6 lg:h-3/4 flex justify-center">
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
    </div>
  );
}

export default Form;
