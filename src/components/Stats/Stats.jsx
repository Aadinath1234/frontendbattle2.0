import React from "react";

function Stats() {
  const levels = [0, 10, 40, 70, 100];

  return (
    <section className="bg-base-200 py-10 px-4 sm:px-6 lg:px-12" id="stats">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* Carbon Footprint */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Managed Portfolio Carbon Footprint
            </h2>
            <div className="flex flex-col gap-2 items-center">
              {levels.map((value, index) => (
                <progress
                  key={`carbon-${index}`}
                  className="progress progress-error w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                  value={value}
                  max="100"
                />
              ))}
            </div>
          </div>

          {/* Energy Intensity */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Managed Portfolio Energy Intensity
            </h2>
            <div className="flex flex-col gap-2 items-center">
              {levels.map((value, index) => (
                <progress
                  key={`intensity-${index}`}
                  className="progress progress-success w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                  value={value}
                  max="100"
                />
              ))}
            </div>
          </div>

          {/* Energy Emission */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Managed Portfolio Energy Emission
            </h2>
            <div className="flex flex-col gap-2 items-center">
              {levels.map((value, index) => (
                <progress
                  key={`emission-${index}`}
                  className="progress progress-neutral w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                  value={value}
                  max="100"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
