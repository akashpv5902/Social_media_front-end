import React from 'react'
import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LabelIcon from '@mui/icons-material/Label';

export default function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
            <img className='shareProfilePicture' src="https://purneauniversity.org/wp-content/uploads/2022/12/JC-.png" alt="" />
            <input
            placeholder='Whats in your mind Mary'
            className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMediaIcon htmlColor='tomato' className='shareIcon'/>
                    <span className="shareOptionText">
                      Photo or Video
                    </span>
                </div>
                <div className="shareOption">
                    <LabelIcon htmlColor='blue' className='shareIcon'/>
                    <span className="shareOptionText">
                      Tag
                    </span>
                </div>
                <div className="shareOption">
                    <LocationOnIcon htmlColor='green' className='shareIcon'/>
                    <span className="shareOptionText">
                      Location
                    </span>
                </div>
                <div className="shareOption">
                    <EmojiEmotionsIcon htmlColor='gold' className='shareIcon'/>
                    <span className="shareOptionText">
                      Feelings
                    </span>
                </div>
            </div>
            <button className="shareButton">
                Share
            </button>
        </div>
      </div>
    </div>
  )
}
