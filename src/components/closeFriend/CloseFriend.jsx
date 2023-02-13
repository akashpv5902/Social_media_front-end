import React from 'react'
import './closeFriend.css'

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
                <img className='sidebarFriendImage' src="https://newsmeter.in/h-upload/2021/11/15/308407-puerto-rico-beautiful-women.webp" alt="" />
                <span className="sidebarFriendName">{user.username}</span>
            </li>
  )
}
