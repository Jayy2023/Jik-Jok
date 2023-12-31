import React from 'react'
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import './VideoFooter.css';

export default function VideoFooter({channel, description}) {
  return (
    <div className='videoFooter'>
        <div className="videoFooter__text">
            <h3>@{channel}</h3>
            <p>{description}</p>
        </div>
        <img className='videoFooter__record' src="https://static.thenounproject.com/png/934821-200.png" alt="" />

    </div>
  )
}
