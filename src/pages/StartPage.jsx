import React from 'react'

import { Navbar, Hello } from '../components/components'

const StartPage = () => {
  return (
    <div className='page start-page'>
      <Navbar />

      <Hello />
    </div>
  );
};

export default StartPage;
