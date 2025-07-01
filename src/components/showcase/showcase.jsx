import React from 'react'

function showcase() {
  return (
    <div>
      <video
        src="/assets/showcase work.mp4"
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

export default showcase
