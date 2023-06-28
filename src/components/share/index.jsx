import React from 'react'
import { FiFacebook } from 'react-icons/fi';
import {BsTwitter} from 'react-icons/bs';
import {BsMessenger} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import {HiOutlineShare} from 'react-icons/hi';
import {AiOutlineMail} from 'react-icons/ai';
import ShareBar from './ShareBar';

export default function Share() {
  return (
    <div className="share" >
        <h2 className='fs-2 mt-3 mb-2'>Share with your friends</h2>
          <ShareBar style={{background:"#4267B2"}}/>


        {/* <div className="icons mt-4" >
          <div>
            <a target='_blank' href="https://www.facebook.com/" style={{background:"#4267B2"}}><FiFacebook style={{marginRight: ' 10px'}}/>Share</a>
            <a target='_blank' href="https://twitter.com/"  style={{background:"#38A2F3"}}><BsTwitter  style={{marginRight: ' 10px'}}/>Tweet</a>
            <a target='_blank' href="https://www.messenger.com/"  style={{background:"#448AFF"}}><BsMessenger style={{marginRight: ' 10px'}}/>Share</a>
          </div>
          <div>
            <a target='_blank' href="https://www.whatsapp.com/"  style={{background:"#25D366"}}><BsWhatsapp style={{marginRight: ' 10px'}}/>Share</a>
            <a target='_blank' href="https://mail.google.com/"  style={{background:"#FF4500"}}><HiOutlineShare style={{marginRight: ' 10px'}}/>Share</a>
            <a target='_blank' href="https://mail.google.com/"  style={{background:"#7D7D7D"}}><AiOutlineMail style={{marginRight: ' 10px'}}/>Email</a>
          </div>
        </div> */}
      </div>
  )
}
