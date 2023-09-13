"use client";
import "@/styles/home.module.css";
import Logo from "./Logo";
import Button from "./Button";
import Image from "next/image";
import { useState } from "react";
import BottomDrawer from "./Modal";

export default function Home({ title = "" }) {
  const [openConnectModal, setOpenConnectModal] = useState(false);
  return (
    <div className="min-h-screen flex flex-col mx-auto p-4">
      <div className="w-full inline-flex justify-between">
        <Logo />
        <Button text="p r o f i l e" variant="outline" callback={() => {}} />
      </div>
      <div className="m-auto">
        <div className="flex justify-around items-center flex-col gap-8">
          <div className="text-4xl md:text-7xl font-future">
            Phala <span className="font-berkshire font-normal">mainnet</span>
          </div>
          <div className="animate-spin-slow w-[280px] md:w-[400px] rounded-3xl">
            <Image src="/Liquid.svg" alt="nft" width={400} height={400} />
          </div>
          <div className="text-4xl md:text-7xl font-future">Hackathon</div>
          <div>✩ ✩ ✩</div>
          <div>
            <p className="font-zengaku font-normal text-lg max-w-xs text-center mb-5">
              Share, connect and grow. claim your fren nft
            </p>
          </div>
          <div className="inline-flex gap-2">
            <Button text="c l a i m" variant="default" callback={() => {}} />
            <Button variant="default" callback={() => setOpenConnectModal(true)}>
              <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                <path d="M120-540v-300h300v300H120Zm80-80h140v-140H200v140Zm-80 500v-300h300v300H120Zm80-80h140v-140H200v140Zm340-340v-300h300v300H540Zm80-80h140v-140H620v140Zm-80 500v-300h300v300H540Zm80-80h140v-140H620v140ZM340-620Zm0 280Zm280-280Zm0 280Z" />
              </svg>
            </Button>
            <BottomDrawer state={openConnectModal} setState={setOpenConnectModal}>
              <div className="gap-10 font-zengaku text-2xl font-semibold py-8">
                <h3 className="text-4xl font-zengaku pb-3">Markos Peter Happy S.</h3>
                <p className="pb-3">Phala phat functions hack</p>
                <p>Individual</p>
                <p>Software Engineer</p>
              </div>
            </BottomDrawer>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="lg:w-[50vh] lg:h-[50vh] md:w-[60vh] md:h-[60vh] w-[70vh] h-[70vh] flex gradient-blur rounded-[45px] shadow-2xl">
          <div className="text-center text-white m-auto">
            <h1 className="text-7xl mb-4 font-bold shadow-sm">FRENS</h1>
          </div>
        </div> */
}
