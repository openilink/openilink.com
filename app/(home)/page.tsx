import { HeroSection } from '@/components/home/hero-section';
import { IntroSection } from '@/components/home/intro-section';
import { FeaturesSection } from '@/components/home/features-section';
import { MarketplaceSection } from '@/components/home/marketplace-section';
import { GlobeSection } from '@/components/home/globe-section';
import { SDKSection } from '@/components/home/sdk-section';
import { CTASection } from '@/components/home/cta-section';

export default function HomePage() {
  return (
    <div className="min-h-screen max-w-[100vw] overflow-x-hidden bg-[#050505]">
      <HeroSection />
      <IntroSection />
      <FeaturesSection />
      <MarketplaceSection />
      <GlobeSection />
      <SDKSection />
      <CTASection />
    </div>
  );
}
