import React from "react";
import Image from "next/image";
import {
  Grid3,
  Profile,
  Task,
  ClipboardTick,
  LogoutCurve,
} from "iconsax-react";
function Navbar() {
  return (
    <div className="flex flex-col min-h-screen justify-start items-start">
      <div className="bg-gray px-20 h-screen flex flex-col rounded-tr-[90px] rounded-br-[90px]">
        <div className="relative py-10">
          <Image src="/image.png" width={200} height={200} />
        </div>
        <div className="flex items-center justify-start -mt-3 -ml-6">
          <Grid3 size="24" color="#d9e3f0" variant="Outline" />
          <button className="ml-4 text-xl">Dashboard</button>
        </div>
        <div className="flex justify-start -ml-6 mt-8">
          <Profile size="24" color="#d9e3f0" variant="Outline" />
          <button className="ml-4 text-xl">My Profile</button>
        </div>
        <div className="flex justify-start -ml-6 mt-8">
          <Task size="24" color="#d9e3f0" variant="Outline" />
          <button className="ml-4 text-xl">Appointments</button>
        </div>
        <div className="flex justify-start -ml-6 mt-8">
          <ClipboardTick size="24" color="#d9e3f0" variant="Outline" />
          <button className="ml-4 text-xl">Medical Records</button>
        </div>

        <div className="flex justify-start py-80 -ml-6">
          <LogoutCurve size="24" color="#d9e3f0" variant="Outline" />
          <button className="ml-4 text-xl">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
