import React from 'react'
import './profile.css'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img src="https://i.pinimg.com/originals/fb/c2/a9/fbc2a961bfd0e7b5673a7922cb848cdb.jpg" 
            alt="" className="profileCoverImg" />
            <img src="https://purneauniversity.org/wp-content/uploads/2022/12/JC-.png" 
            alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
               <h4 className='profileInfoName'>Mary Jane</h4> 
               <span className="profileInfoDesc">forever is the sweetest con</span>
            </div>
           
        </div>
        <div className="profileRightBottom">
        <Feed/>
    <Rightbar profile/>
        </div>
    </div>
    </div>
     
</>
  )
}
