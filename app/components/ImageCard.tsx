import React from "react";
import Image from "next/image";
import lelisa from "../../public/images/profile.jpg";

function ImageCard() {
  return (
    <div className="lg:w-1/2 w-full flex justify-center items-center py-10 sm:px-4 lg:px-4 rder-1 lg:order-2">
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded-xl overflow-hidden shadow-xl border-2 border-white">
        <Image
          src={lelisa}
          alt="Adem Ahmed Bekar Profile"
          width={600} 
          height={600} 
          className="w-full object-cover"
          priority
        />
      </div>
    </div>
  );
}

export default ImageCard;
