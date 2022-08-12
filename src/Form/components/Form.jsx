import React, { useEffect, useState } from 'react';
import AuthenticationType from './AuthenticationType';
import SignUp from './SignUp';

function Form() {
  const [backButtonClicked, setBackButtonClicked] = useState();
  const [signUp, setSignUp] = useState(true);
  useEffect(() => {
    if (backButtonClicked) {
      setSignUp(true);
    }
  }, [backButtonClicked]);

  console.log('form');
  return (
    <div className=" mt-4 h-2/3 w-2/3 lg:h-3/4 ">

      {/* <FormMain /> */}
      {signUp ? <SignUp setSignUp={setSignUp} />
        : <AuthenticationType backButtonClicked={setBackButtonClicked} /> }

    </div>
  );
}

export default Form;
