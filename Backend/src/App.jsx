import React from 'react';
import "./App.css"
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Authentication/Login';
import Sinup from './Components/Authentication/Sinup';
import Navbar from './Components/Shared/Navbar';
import Footer from './Components/Shared/Footer';
import InputResult from './Components/Results/InputResult';
import Dashboard from './Components/Results/Dashboard';
import UpdateResult from './Components/Results/UpdateResult';
import Profile from './Components/Authentication/Profile/Profile';
import ProtectedRout from './Components/Authentication/ProtectedRoute/ProtectedRout';
import Error from './Components/Shared/Error';
import Test from './Components/Results/Test';
import Results from './Components/Results/Results';
import Home from './Components/Shared/Home';
import UpdateUsers from './Components/Authentication/Users/UpdateUsers';
import ProtectAllUsers from './Components/Authentication/ProtectedRoute/ProtectAllUsers';
import AllUsers from './Components/Authentication/Users/AllUser';
import UpdateProfile from './Components/Authentication/Profile/UpdateProfile';

const App = () => {

  const user = localStorage.getItem('User');

  return (
    <div className='mx-4 md:mx-8 lg:mx-16'>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/*' element={<ProtectedRout />}>

          <Route path='data' element={<InputResult />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='update/:id' element={<UpdateResult />} />
          <Route path='view/:id' element={<Results />} />
          <Route path='profile' element={<Profile />} />          
          <Route path='profile/:id' element={<UpdateProfile />} />
          <Route path='test' element={<Test />} />
          
        </Route>

        <Route path='/*' element={<ProtectAllUsers />} >
          <Route path='users' element={<AllUsers />} />
          <Route path='users/:id' element={<UpdateUsers />} />
        </Route>

        <Route path='/*' element={<Error />} />
        {
          !user && (
            <>
              <Route path='/login' element={<Login />} />
              <Route path='/sinup' element={<Sinup />} />
            </>
          )
        }

      </Routes>
      <Footer />
    </div>
  );
};

export default App;