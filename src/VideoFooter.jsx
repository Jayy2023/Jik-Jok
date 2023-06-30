import React from 'react'
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import './VideoFooter.css';

export default function VideoFooter() {
  return (
    <div className='videoFooter'>
        <div className="videoFooter__text">
            <h3>@DadWhoCodes</h3>
            <p>Russell Westbrook Revenge Game! 🤯</p>
        </div>
        <img className='videoFooter__record' src="https://static.thenounproject.com/png/934821-200.png" alt="" />

    </div>
  )
}
