import React from 'react'

function Testimonials() {
  return (
    <div>
      <video
        src="/assets/testimonials.mp4"
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

export default Testimonials
