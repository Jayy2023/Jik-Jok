import React, {useRef, useState} from 'react';
import VideoFooter from './VideoFooter';
import './Video.css'

export default function Video() {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play(); 
            setPlaying(true);
        }
       
    };

  return (
    <div className='video'>
       <video 
       className="video__player" 
       src="videos/russ.mp4"
       loop
       onClick={onVideoPress}
       ref={videoRef}
       ></video>
       <VideoFooter/>
        

    </div>
  )
}
