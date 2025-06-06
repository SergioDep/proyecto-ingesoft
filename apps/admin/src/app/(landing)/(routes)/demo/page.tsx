"use client";

import { useEffect } from "react";
import AboutContactSection from "@/app/(landing)/_shared/components/AboutContactSection";
import BenefitsSection from "@/app/(landing)/_shared/components/BenefitsSection";
import Footer from "@/app/(landing)/_shared/components/Footer";
import Header from "@/app/(landing)/_shared/components/Header";
import HeroSection from "@/app/(landing)/_shared/components/HeroSection";
import NewsletterSection from "@/app/(landing)/_shared/components/NewsletterSection";
import PopularRoutesSection from "@/app/(landing)/_shared/components/PopularRoutesSection";
import TestimonialsSection from "@/app/(landing)/_shared/components/TestimonialsSection";
import { useTheme } from "next-themes";

export const runtime = "edge";

export default function Page() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme !== "light") {
      setTheme("light");
    }
  }, [theme, setTheme]);

  return (
    <main className="relative h-full">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <PopularRoutesSection />
      <TestimonialsSection />
      <AboutContactSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
