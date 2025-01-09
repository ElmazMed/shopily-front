import React from "react";
import Image from "next/image";
import bannerImg from "@/assets/banner.jpg";

export default function HeroSection() {
  return (
    <>
      <div>
        <Image src={bannerImg} alt="Banner Image" />
      </div>
    </>
  );
}
