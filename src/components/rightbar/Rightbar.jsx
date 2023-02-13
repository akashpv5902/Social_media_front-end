import React from 'react'
import'./rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar({profile}) {


  const HomeRightbar = () => {
    return(
      <>
      <div className="birthdayContainer">
          <img src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/gift.png?raw=true" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>John Wick</b> and <b>3 others</b> have birthday today
          </span>
        </div>
        <img src="https://github.com/safak/youtube/blob/react-social-ui/public/assets/ad.png?raw=true" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u =>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }


  const ProfileRightbar = () =>{
    return(
      <>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoKeyValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoKeyValue">Kannur</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship</span>
          <span className="rightbarInfoKeyValue">Single</span>
        </div>
      </div>

      <h4 className='rightbarTitle'>User Friends:</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="https://newsmeter.in/h-upload/2021/11/15/308407-puerto-rico-beautiful-women.webp" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Felicia Hardy</span>
        </div>
        <div className="rightbarFollowing">
          <img src="https://newsmeter.in/h-upload/2021/11/15/308407-puerto-rico-beautiful-women.webp" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Felicia Hardy</span>
        </div>
        <div className="rightbarFollowing">
          <img src="https://newsmeter.in/h-upload/2021/11/15/308407-puerto-rico-beautiful-women.webp" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Felicia Hardy</span>
        </div>
        <div className="rightbarFollowing">
          <img src="https://newsmeter.in/h-upload/2021/11/15/308407-puerto-rico-beautiful-women.webp" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Felicia Hardy</span>
        </div>
        <div className="rightbarFollowing">
          <img src="https://newsmeter.in/h-upload/2021/11/15/308407-puerto-rico-beautiful-women.webp" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Felicia Hardy</span>
        </div>
        <div className="rightbarFollowing">
          <img src="https://newsmeter.in/h-upload/2021/11/15/308407-puerto-rico-beautiful-women.webp" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Felicia Hardy</span>
        </div>
        <div className="rightbarFollowing">
          <img src="https://newsmeter.in/h-upload/2021/11/15/308407-puerto-rico-beautiful-women.webp" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Felicia Hardy</span>
        </div>
        <div className="rightbarFollowing">
          <img src="https://newsmeter.in/h-upload/2021/11/15/308407-puerto-rico-beautiful-women.webp" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Felicia Hardy</span>
        </div>
      </div>
      </>
    )
  }


  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
        
      </div>
    </div>
  )
}