"use client";
import React from "react";
import NavMenu from "@/components/nav-bar/navMenu";
import Banner from "@/components/nav-bar/banner";
import HeroSection from "@/components/hero-section/heroSection";

export default function HomePage() {
  return (
    <>
      <Banner />
      <NavMenu />
      <HeroSection />
    </>
  );
}
