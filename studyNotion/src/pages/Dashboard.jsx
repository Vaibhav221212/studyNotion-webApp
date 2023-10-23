import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../components/core/Dashboard/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const {loading:profileLoading}=useSelector((state)=>state.profile);
    const{loading:authLoading}=useSelector((state)=>state.auth)


    if(profileLoading || authLoading)
    {
        return (
            <div className='grid min-h-[calc(100vh-3.5rem)] place-items-center'>
                <div className='spinner'>
                  Spinner  
                </div>
            </div>
        )
    }
  return (
    <div className='relative  flex max-h-[calc(100vh-3.5rem)] w-[100%]'>
        <Sidebar/>
        <div className='h-[calc(100vh-3.5ren)] flex-1 overflow-auto'>
            <div className='mx-auto w11/12 max-w-[1000px] py-10'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard