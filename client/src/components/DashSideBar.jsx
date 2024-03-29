import React from 'react'
import {Sidebar} from "flowbite-react"
import {HiArrowRight, HiUser} from "react-icons/hi"
import { useEffect , useState, useRef } from 'react'
import {Link, useLocation} from "react-router-dom"
import { signoutSucess } from '../redux/user/userSlice'
import { useDispatch } from 'react-redux'


function DashSideBar() {
    const location = useLocation();
    const [tab , setTab] = useState(" ")
  
    useEffect(()=>{
     const urlParams = new URLSearchParams(location.search);
     const tabFromUrl = urlParams.get("tab")
     if(tabFromUrl){
      setTab(tabFromUrl)
     }
    },[location.search])

    const handleSignout= async()=>{
      try {
        const res = await fetch(`/api/user/signout`,{
          method:"POST",
        })
        const data = await res.json()
        if(!res.ok){
          console.log(data.message);
        }else{
          dispatch(signoutSucess())
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
            <Link to= "/dashboard?tab=profile">
            <Sidebar.Item active = {tab === "profile"} icon = {HiUser} label= {"user"} labelColor={"dark"}as = "div">
                Profile
            </Sidebar.Item>
            </Link>
            <Sidebar.Item icon={HiArrowRight} className="cursor-pointer" onClick={handleSignout}>
                Sign Out
            </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSideBar
