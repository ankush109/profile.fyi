import React from "react";

import { LoginForm } from "./LoginForm";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";

function Page() {
  return (
    <div>
      <Navbar />
      <div className=" h-screen ">
        <div className="grid grid-cols-6 lg:h-[70%] h-[50%] bg-white max-w-7xl mx-auto mt-20 ">
          <div className="bg-blue-500 hidden lg:col-span-2 p-5 lg:flex flex-col justify-between">
            <div>
              <div className="text-white text-2xl font-bold mt-5">LOGIN</div>
              <div className="text-gray-300 text-lg font-bold mt-5">
                Get access to your Orders,
              </div>
              <div className="text-gray-300 text-lg font-bold ">
                Wishlist and Recommendations
              </div>
            </div>
            <Image
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
              width={300}
              height={300}
              alt=""
            />
          </div>
          <div className="lg:col-span-4 col-span-6 lg:p-10 p-4">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
