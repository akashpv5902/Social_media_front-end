import React from 'react'
import './online.css'

export default function Online({user}) {
  return (
    <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="https://media.gq-magazine.co.uk/photos/5d139df27fcc8ef76782043b/1:1/w_1280,h_1280,c_limit/Vanessa-Kirby-GQ-15Dec17_Matt-Holyoak_b.jpg"
               alt=""
                className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
  )
}
