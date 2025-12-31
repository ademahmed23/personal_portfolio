import React from "react";
import Image from "next/image";
import lelisa from "../../public/images/profile.jpg";

function ImageCircle() {
  return (
    <div className="lg:w-1/2 w-full flex justify-center items-center py-10 sm:px-4 lg:px-4 order-1 lg:order-2">
      <div className="relative aspect-square w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm rounded-full overflow-hidden shadow-xl border-2 border-white">
        <Image
          src={lelisa}
          alt="Adem Ahmed Bekar Profile"
          fill
          sizes="(max-width: 640px) 20rem, (max-width: 768px) 24rem, (max-width: 1024px) 28rem, 32rem"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}

export default ImageCircle;
