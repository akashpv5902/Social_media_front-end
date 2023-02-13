import React from 'react'
import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Person2Icon from '@mui/icons-material/Person2';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
            <span className='logo'>REVELATiON</span>
        </div>
        <div className='topbarCenter'>
            <div className='searchbar'>
               <SearchIcon className='searchIcon'/>
              <input placeholder='search for friends,posts or videos' className="searchInput" />
            </div>
        </div>
        <div className='topbarRight'>
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
            <Person2Icon/>
            <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
            <ChatIcon/>
            <span className="topbarIconBadge">3</span>
            </div>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
            <NotificationsActiveIcon/>
            <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src="https://purneauniversity.org/wp-content/uploads/2022/12/JC-.png" alt="" className="topbarImage" />
        </div>
     
    </div>
  )
}
