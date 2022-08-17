import React, { useEffect, useState } from 'react';
import AuthenticationType from './AuthenticationType';
import SignUp from './SignUp';
import Login from '../../Login';

function Form() {
  const [backButtonClicked, setBackButtonClicked] = useState();
  const [signUp, setSignUp] = useState(true);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (backButtonClicked) {
      setSignUp(true);
    }
  }, [backButtonClicked]);
  return (
    <div className="h-2/3 w-2/3 lg:h-3/4 ">

      {/* {signUp ? <SignUp formData={formData} setFormData={setFormData} setSignUp={setSignUp} />
        : (
          <AuthenticationType
            formData={formData}
            setFormData={setFormData}
            backButtonClicked={setBackButtonClicked}
          />
        ) } */}
      <Login />
    </div>
  );
}

export default Form;
