import React from "react";

const Banner = () => {
  return (
    <div className="py30">
      <div className="container2">
        <div className="flex items-center gap-8 w-full">
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            className="flex"
          >
            <path
              d="M1.8125 7.90625L3 6.9375V14C3 14.2708 3.09375 14.5 3.28125 14.6875C3.48958 14.8958 3.72917 15 4 15H7C7.27083 15 7.5 14.8958 7.6875 14.6875C7.89583 14.5 8 14.2708 8 14V10H10V14C10 14.2708 10.0938 14.5 10.2812 14.6875C10.4896 14.8958 10.7292 15 11 15H14C14.2708 15 14.5 14.8958 14.6875 14.6875C14.8958 14.5 15 14.2708 15 14V6.9375L16.1875 7.90625C16.2708 7.96875 16.375 8 16.5 8C16.6667 8 16.8021 7.9375 16.9062 7.8125C17.0938 7.54167 17.0625 7.30208 16.8125 7.09375L9.3125 1.09375C9.10417 0.947917 8.89583 0.947917 8.6875 1.09375L6 3.25V2C6 1.72917 5.89583 1.5 5.6875 1.3125C5.5 1.10417 5.27083 1 5 1C4.72917 1 4.48958 1.10417 4.28125 1.3125C4.09375 1.5 4 1.72917 4 2V4.84375L1.1875 7.09375C0.9375 7.30208 0.90625 7.54167 1.09375 7.8125C1.30208 8.0625 1.54167 8.09375 1.8125 7.90625ZM9 2.125L14 6.125V14H11V9H7V14H4V6.15625L9 2.125Z"
              fill="var(--primary2)"
            ></path>
          </svg>
          <p className="fsize16 sm-fsize14 mtpx2 cursor-pointer textprimary">Home</p>
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            stroke="gray"
            strokeWidth="2"
            fill="none"
            className="flex"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
          <p className="fsize16 sm-fsize14 mtpx2 textprimary">Product</p>
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            stroke="gray"
            strokeWidth="2"
            fill="none"
            className="flex"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
          <p className="fsize16 sm-fsize14 mtpx2 textgray">Microsoft's Surface Hub 2S</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
