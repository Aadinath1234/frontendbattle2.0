// 


import React from "react";

function Showcase() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full max-w-7xl">
          {/* Card 1 */}
          <div className="card bg-base-100 w-full max-w-xs mx-auto shadow-sm gap-4">
            <figure>
              <img
                src="https://www.teluguone.com/photos/uploadsExt/uploads/Ayesha%20Khan/Ayesha%20Khan%20Gallery/Ayesha%20Khan%20Stills.webp"
                alt="Shoes"
                className="w-96 h-90 object-cover rounded-2xl"
              />
            </figure>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 w-full max-w-xs mx-auto shadow-sm gap-4">
            <figure>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlyBMnx7anZqqTRjbli7ivs1byHIDbhEErFQ&s"
                alt="Shoes"
                className="w-96 h-90 object-cover rounded-2xl"
              />
            </figure>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-100 w-full max-w-xs mx-auto shadow-sm">
            <figure>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9y4hqeMyXSliNGVzatkfZwGmeU6Pna01DWw&s"
                alt="Shoes"
                className="w-96 h-90 object-cover rounded-2xl"
              />
            </figure>
          </div>

          {/* Card 4 */}
          <div className="card bg-base-100 w-full max-w-xs mx-auto shadow-sm">
            <figure>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7BaTAhh-DIkx5HDmW9TWAStSm1KVyF_PsLA&s"
                   alt="Shoes"
                className="w-96 h-90 object-cover rounded-2xl"
              />
            </figure>
          </div>

          {/* Card 5 */}
          <div className="card bg-base-100 w-full max-w-xs mx-auto shadow-sm">
            <figure>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq4KP9J-jgJZFzSKf02SBjFaG18A7WTUG8AQ&s"
                alt="Shoes"
                className="w-96 h-90 object-cover rounded-2xl"
              />
            </figure>
          </div>

          {/* Card 6 */}
          <div className="card bg-base-100 w-full max-w-xs mx-auto shadow-sm">
            <figure>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpn2XKpF4YrrZCO4KTpaXJi60Y_UFIKfFTWQ&s"
                alt="Shoes"
                className="w-96 h-90 object-cover rounded-2xl"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;