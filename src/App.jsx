import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import AuthService from './appwrite/auth'
import { login,logout } from './store/authSlice'
import { Footer } from './components'

function App() {
  const [loading,setLoading] =useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
    AuthService.getCurrentUser()
    .then((userData)=>{
     if(userData){
      dispatch(login({userData}))
     }
     else{
      dispatch(logout())
     }
    })
    .finally(()=>setLoading(false))
  },[])
 

  return !loading? (
 <div className='min-h-screen flex flex-wrap content-between bg-gray-500'>
  <div className='w-full block'>
    <Header/>
    <Footer/>
  </div>
 </div>
  ) :null
}

export default App
