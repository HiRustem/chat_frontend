import { Route, Routes } from 'react-router-dom'

import { StartPage, RegisterPage, LoginPage } from './pages/pages'

const App = () => {
  return (
    <div className='page-container'>
      <Routes>
        <Route path='/' element={ <StartPage /> } />
        <Route path='/user/register' element={ <RegisterPage /> } />
        <Route path='/user/login' element={ <LoginPage /> } />
      </Routes>
    </div>
  );
};

export default App
