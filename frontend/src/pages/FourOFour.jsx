
import React from 'react';
import GradientLink from './../components/common/GradientLink';

import fourOFourLogo from './../assets/images/four-o-four.svg'

const FourOFour = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-5">
      <div>
        <img src={fourOFourLogo} alt="four-o-four"/>
      </div>
      <h2 className="text-3xl mt-2 text-center">Page Not Found</h2>
      <div>You may have mistyped the address or the page may have moved.</div>
      <div className="mt-4">
        <GradientLink text="Go Back Home" to="/" />
      </div>
    </div>
  );
};

export default FourOFour;