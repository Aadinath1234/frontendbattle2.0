import React from 'react'

function CustomerSection() {
  return (
    <div>
        <video
        src="public\assets\customer-section.mp4"
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

export default CustomerSection
