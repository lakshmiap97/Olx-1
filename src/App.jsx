import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login'
import Create from './pages/Create'
import View from './pages/Viewpost'
import { useContext, useEffect } from 'react';
import {AuthContext, FirebaseContext} from './store/Context'
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import Post from './store/PostContext'

function ProtectedRoute({children}){
  const {user} = useContext(AuthContext);
  return user ? children : <Navigate to="/login"/>
}


function App() {
  const {setUser} =useContext(AuthContext)

  useEffect(()=>{
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      setUser(user);
    })
    return ()=>unsubscribe();
  },[])
  return (
    <Post>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signup' element={<Signup />}/> 
        <Route path='/login' element={<Login />}/> 
        <Route path='/sell' element={<ProtectedRoute><Create /></ProtectedRoute>}/> 
        <Route path='/view' element={<ProtectedRoute><View /></ProtectedRoute>}/>
      </Routes>
    </Router>
    </Post>
  );
}

export default App;
