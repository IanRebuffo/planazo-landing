import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ForBusiness } from "@/components/site/ForBusiness";
import { DownloadCta } from "@/components/site/DownloadCta";
import { Footer } from "@/components/site/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ForBusiness />
        <DownloadCta />
      </main>
      <Footer />
    </>
  );
}
