import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="absolute left-[40vw] flex flex-col item-center justify-center h-screen">
      {loading ? (
        <PropagateLoader className="relative left-[10vw]" color="#4bb71b" />
      ) : (
        <>
          <div className="success-animation">
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-semibold mb-4">Order Successful!</h2>
          <p>Your order has bees sucessfully place</p>
        </>
      )}
    </div>
  );
};

export default Success;
