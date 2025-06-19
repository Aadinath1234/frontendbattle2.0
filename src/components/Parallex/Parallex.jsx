import React from 'react'

function Parallex() {
  return (
    <div>
      <video
        src="public\assets\parallax animation.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Parallex
