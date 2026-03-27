"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Building, Phone, ShieldCheck, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="medium"
        sizing="mediumSizeLargeTitles"
        background="grid"
        cardStyle="gradient-mesh"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Why Us",
          id: "why-us",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="E2 Roofing"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="E2 Roofing Jacksonville"
      description="Jacksonville’s most trusted roofing experts delivering premium quality, white-glove service, and unmatched transparency from inspection to final clean-up."
      buttons={[
        {
          text: "Get a Free Roof Inspection",
          href: "#contact",
        },
        {
          text: "Call Now: (904) 555-0123",
          href: "tel:9045550123",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BVaX4CYLMs8H9Nfrlcci9eOFGz/luxury-residential-roofing-exterior-in-j-1774576763229-df15ba3a.png"
      showDimOverlay={true}
    />
  </div>

  <div id="why-us" data-section="why-us">
      <FeatureCardEight
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          title: "White-Glove Experience",
          description: "Clean job sites and constant communication mean your project is stress-free from start to finish.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BVaX4CYLMs8H9Nfrlcci9eOFGz/beautiful-home-exterior-with-a-new-roof--1774576762876-fd8a176e.png",
        },
        {
          id: 2,
          title: "Transparency First",
          description: "No upselling. No confusion. Just honest answers and clear explanations about your roof's condition.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BVaX4CYLMs8H9Nfrlcci9eOFGz/pristine-roof-close-up-showing-quality-s-1774576763078-638a9d09.png",
        },
        {
          id: 3,
          title: "Elite Craftsmanship",
          description: "We pair highly trained installation crews with top-tier materials to ensure your roof lasts for decades.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BVaX4CYLMs8H9Nfrlcci9eOFGz/modern-suburban-house-with-manicured-law-1774576762818-0544d3b0.png",
        },
        {
          id: 4,
          title: "Real Communication",
          description: "You will never be left wondering what is happening. We keep you informed at every single step.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BVaX4CYLMs8H9Nfrlcci9eOFGz/elegant-roof-eaves-and-detailed-metalwor-1774576763021-e50ff09a.png",
        },
      ]}
      title="Not Your Typical Roofing Company"
      description="We are committed to a higher standard of service, clarity, and craftsmanship. Your home deserves nothing less."
      tag="Our Philosophy"
      tagIcon={ShieldCheck}
    />
  </div>

  <div id="services" data-section="services">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "s1",
          name: "Roof Replacement",
          price: "Starting at $8,000",
          variant: "Premium",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BVaX4CYLMs8H9Nfrlcci9eOFGz/beautiful-home-exterior-with-a-new-roof--1774576762876-fd8a176e.png",
        },
        {
          id: "s2",
          name: "Roof Repair",
          price: "Custom Quote",
          variant: "Fast Response",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BVaX4CYLMs8H9Nfrlcci9eOFGz/pristine-roof-close-up-showing-quality-s-1774576763078-638a9d09.png",
        },
        {
          id: "s3",
          name: "Insurance Claims",
          price: "Advocacy",
          variant: "Expert Support",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BVaX4CYLMs8H9Nfrlcci9eOFGz/modern-suburban-house-with-manicured-law-1774576762818-0544d3b0.png",
        },
      ]}
      title="Premium Roofing Services"
      description="Comprehensive roofing solutions designed for longevity, aesthetics, and maximum protection for your home."
      tag="Our Expertise"
      tagIcon={Building}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          role: "Homeowner",
          testimonial: "Second to none service from start to finish. Truly professional.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BVaX4CYLMs8H9Nfrlcci9eOFGz/professional-headshot-of-a-happy-homeown-1774576762844-d8211a47.png",
        },
        {
          id: "2",
          name: "Michael Chen",
          role: "Homeowner",
          testimonial: "Best experience working with any company we’ve ever had.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BVaX4CYLMs8H9Nfrlcci9eOFGz/professional-headshot-of-a-business-woma-1774576763824-d12669f7.png",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          role: "Homeowner",
          testimonial: "Professional, responsive, and extremely knowledgeable crew.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BVaX4CYLMs8H9Nfrlcci9eOFGz/professional-headshot-of-a-happy-male-ho-1774576763037-093cb36c.png",
        },
        {
          id: "4",
          name: "David Kim",
          role: "Homeowner",
          testimonial: "They made our roof replacement stress-free. Highly recommended!",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BVaX4CYLMs8H9Nfrlcci9eOFGz/portrait-of-a-young-family-couple-happy--1774576763609-a59d145b.png",
        },
      ]}
      title="Trusted by Jacksonville Homeowners"
      description="Join 170+ happy clients who have experienced the E2 Roofing difference."
      tag="Client Stories"
      tagIcon={Star}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      title="Get Your Free Roof Inspection"
      description="No pressure. No obligation. Just honest, expert answers to protect your home."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BVaX4CYLMs8H9Nfrlcci9eOFGz/close-up-shot-of-a-professional-roofing--1774576767612-a9127ebb.png"
      mediaAnimation="slide-up"
      inputPlaceholder="Your Phone Number or Email"
      tag="Get Started"
      tagIcon={Phone}
      buttonText="Request Consultation"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Service Areas",
          items: [
            {
              label: "Jacksonville",
              href: "#",
            },
            {
              label: "St. Augustine",
              href: "#",
            },
            {
              label: "Ponte Vedra",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "License & Insurance",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="E2 Roofing"
      copyrightText="© 2025 E2 Roofing Jacksonville. All Rights Reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
