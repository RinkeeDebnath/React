import React from "react";
import { useParams } from "react-router-dom";

function MyParams() {
  const { userId } = useParams();
  return (
    <div className="flex justify-center p-4 bg-red-600 text-white text-xl font-semibold">
      User: {userId}
    </div>
  );
}

export default MyParams;
