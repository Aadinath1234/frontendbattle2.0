import React from "react";

function Parallex() {
  return (
    <div>
      {/* <video
        src="/assets/parallax animation.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      >
        Your browser does not support the video tag.
      </video> */}

      {/* <div className=''>
        <img 
        src="https://hips.hearstapps.com/hmg-prod/images/blonde-ana-de-armas-1611831180.png?crop=0.888888888888889xw:1xh;center,top&resize=1200:*" 
        alt="image2" 
         className='w-full '
        />
      </div> */}
      <div>
        <figure className="diff aspect-16/9" tabIndex={0}>
          <div className="diff-item-1" role="img" tabIndex={0}>
            <img
              alt="daisy"
              src="https://e0.pxfuel.com/wallpapers/439/379/desktop-wallpaper-beautiful-ana-de-armas-deep-water-movie.jpg" 
                />
          </div>
          <div className="diff-item-2" role="img">
            <img
              alt="daisy"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3C0HUOPWQJ-9FdYd6ldpfePUh6DHiX5Ncg&s"
            />
          </div>
          <div className="diff-resizer"></div>
        </figure>
      </div>
    </div>
  );
}

export default Parallex;
