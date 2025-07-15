import React from "react";

const PopupModal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  const renderContent = () => {
    switch (content.type) {
      case "image":
        return (
          <img
            src={content.src}
            alt="popup"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl max-h-[60vh] object-contain mx-auto rounded-2xl"
          />
        );
      case "video":
        return (
          <video
            controls
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl max-h-[60vh] object-contain mx-auto rounded-2xl"
          >
            <source src={content.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      case "text":
        return (
          <p className="text-base sm:text-lg break-words rounded-2xl">
            {content.text}
          </p>
        );
      default:
        return <p>Invalid content</p>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-2">
      <div className="relative bg-white text-black dark:bg-gray-900 dark:text-white p-4 sm:p-6 rounded-2xl shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
        <button
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
          onClick={onClose}
        >
          X
        </button>
        {renderContent()}
      </div>
    </div>
  );
};

export default PopupModal;
