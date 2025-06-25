"use client";
import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Layers,
  Shield,
  RefreshCw,
  Quote,
  Smartphone,
  Globe,
} from "lucide-react";

const Nav = () => (
  <nav className="flex items-center justify-between px-6 py-6 lg:px-12">
    <div className="text-2xl font-light text-gray-900">
      Nuvita Designs
    </div>
  </nav>
);

const Hero = ({ onBookConsultation }) => (
  <div className="px-6 lg:px-12 py-12 lg:py-20">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="space-y-8">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl lg:text-7xl font-light text-gray-900 leading-tight"
        >
          Transform Your Service-Based Business
          <br />
          with a High-Converting Website
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-md"
        >
          Stop losing clients to competitors. Our expert team designs,
          optimizes, and hosts your website, so you can focus on what you do
          best—serving your clients.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={onBookConsultation}
          className="flex items-center space-x-3 text-gray-900 hover:text-gray-600 transition-colors group cursor-pointer"
        >
          <span className="text-lg">Book a Free Consultation</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="bg-gray-900 rounded-lg overflow-hidden aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80"
            alt="Developer workspace with multiple monitors"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  </div>
);

const Stats = () => {
  const stats = [
    { value: "100+", label: "Service-Based Businesses Transformed" },
    { value: "50%", label: "Average Increase in Client Inquiries" },
    { value: "24/7", label: "Website Monitoring and Support" },
    { value: "98%", label: "Client Satisfaction Rate" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mt-20 mb-10 lg:mt-32 px-6 lg:px-12">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center lg:text-left"
        >
          <div className="text-4xl lg:text-6xl font-light text-gray-900 mb-2">
            {stat.value}
          </div>
          <div className="text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

const Features = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="bg-black text-white py-20 lg:py-32">
      <div className="px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light mb-4">
            Elevate Your Business Online
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover how our tailored solutions drive growth, enhance user
            experience, and keep your website running smoothly.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-gray-600 p-6 rounded-lg"
          >
            <Layers className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-medium mb-3">Custom Web Design</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Boost conversions with a stunning, brand-aligned website tailored
              to your audience.
            </p>
            <button className="flex items-center space-x-2 text-sm hover:text-gray-300 transition-colors"></button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-gray-600 p-6 rounded-lg"
          >
            <Shield className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-medium mb-3">SEO Optimization</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Rank higher and attract more clients with expert SEO strategies.
            </p>
            <button className="flex items-center space-x-2 text-sm hover:text-gray-300 transition-colors"></button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border border-gray-600 p-6 rounded-lg"
          >
            <Smartphone className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-medium mb-3">Mobile Responsiveness</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Reach clients anywhere with a site that shines on every device.
            </p>
            <button className="flex items-center space-x-2 text-sm hover:text-gray-300 transition-colors"></button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="border border-gray-600 p-6 rounded-lg"
          >
            <h3 className="text-xl font-medium mb-3">Website Maintenance</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Stay secure and up-to-date with hassle-free ongoing support.
            </p>
            <button className="flex items-center space-x-2 text-sm hover:text-gray-300 transition-colors"></button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Mission = ({ onBookConsultation }) => (
  <div className="bg-white py-20 lg:py-32">
    <div className="px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900">
            Our
            <br />
            Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to empower service-based businesses like yours to
            thrive online. We understand the challenges you face—outdated
            websites, confusing technical jargon, and the constant struggle to
            attract new clients. That’s why we offer a comprehensive solution:
            from stunning custom designs to seamless hosting and ongoing
            support, we handle it all. Let us take the burden of web management
            off your shoulders, so you can focus on growing your business.
          </p>
          <button
            onClick={onBookConsultation}
            className="bg-gray-900 text-white px-6 py-3 hover:bg-gray-800 transition-colors cursor-pointer"
          >
            Book a Free Consultation
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square overflow-hidden rounded-lg group">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
              alt="Business meeting with laptop"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-lg group">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Person working outdoors"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => (
  <div className="bg-white py-20 lg:py-32">
    <div className="px-6 lg:px-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
          Comprehensive
          <br />
          Web Design
          <br />
          Services
        </h2>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="aspect-video overflow-hidden rounded-lg group">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
              alt="Web development workspace"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex items-start space-x-4 relative">
            <RefreshCw className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Reliable Hosting for Your Website
              </h3>
              <p className="text-gray-600">
                With our reliable hosting services, your website will be fast,
                secure, and always online. We handle all the technical details,
                so you never miss a lead.
              </p>
            </div>
            <div className="absolute top-0 right-0 -translate-y-1/2 left-120 translate-x-1/2 w-32 h-32 rounded-lg overflow-hidden shadow-lg hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1364&q=80"
                alt="Design materials"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-8">
          <div className="flex items-start space-x-4">
            <RefreshCw className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Custom Web Design Tailored to Your Brand
              </h3>
              <p className="text-gray-600">
                We create bespoke websites that not only look great but are
                optimized to convert visitors into clients. Our designs are
                tailored to your brand and your audience’s needs.
              </p>
            </div>
          </div>
          <div className="aspect-video overflow-hidden rounded-lg group">
            <img
              src="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80"
              alt="Laptop with development interface"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex items-start space-x-4">
            <RefreshCw className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                SEO Optimization for Increased Visibility
              </h3>
              <p className="text-gray-600">
                Our SEO experts ensure your website ranks high on search
                engines, making it easier for potential clients to find you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);


const Testimonials = () => (
  <div className="bg-gray-50 py-20 lg:py-32">
    <div className="px-6 lg:px-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-12">
          See What Our
          <br />
          Clients Are
          <br />
          Saying
        </h2>
      </div>
      <div className="max-w-6xl mx-auto relative px-4 lg:px-16">
        {/* Profile images - hidden on mobile for cleaner look */}
        <div className="hidden lg:block">
          <div className="absolute -top-12 left-0 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
              alt="Client testimonial"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-12 right-0 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Client testimonial"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-1/3 -left-12 w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Client testimonial"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-1/3 -right-12 w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
              alt="Client testimonial"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-12 left-1/4 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=388&q=80"
              alt="Client testimonial"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-20 right-1/3 w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Client testimonial"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-8 left-20 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1361&q=80"
              alt="Featured client testimonial"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Testimonial card - full width on mobile, constrained on desktop */}
        <div className="bg-[#3d485d] rounded-2xl p-6 lg:p-12 relative w-full lg:max-w-2xl lg:mx-auto">
          <Quote className="w-12 h-12 text-white mb-6" />
          <blockquote className="text-white text-lg lg:text-xl leading-relaxed mb-6 text-center">
            "Since partnering with Creative Web Solutions, our client inquiries
            have increased by 40%, and our website now ranks on the first page
            of Google for our key services. The team was professional,
            responsive, and truly understood our business needs. We couldn't be
            happier with the results!" - Jane Doe, ABC Services
          </blockquote>
          <div className="flex justify-end">
            <Quote className="w-12 h-12 text-white rotate-180" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FAQ = () => (
  <div className="bg-white py-20 lg:py-32">
    <div className="px-6 lg:px-12">
      <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-12 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            How much does a new website cost?
          </h3>
          <p className="text-gray-600">
            We offer flexible pricing options to suit your budget and needs.
            During our free consultation, we’ll discuss your requirements and
            provide a tailored quote.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            How long does the design process take?
          </h3>
          <p className="text-gray-600">
            Typically, our design process takes 4-6 weeks, but we can work with
            your timeline to ensure a smooth launch.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            Will my website really increase conversions?
          </h3>
          <p className="text-gray-600">
            Absolutely! Our designs are optimized for conversions, and we have a
            proven track record of helping businesses like yours attract more
            clients.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            Do I need to know anything about web design or hosting?
          </h3>
          <p className="text-gray-600">
            Not at all! We handle everything for you, from design to hosting to
            ongoing maintenance. You can focus on running your business.
          </p>
        </div>
      </div>
    </div>
  </div>
);


const CalendlyWidget = () => {
  const calendlyRef = useRef(null);

  useEffect(() => {
    const scriptId = "calendly-widget-script";

    // Only add the script once
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initInlineWidgets();
        }
      };
      document.body.appendChild(script);
    } else {
      // If already loaded, re-init
      if (window.Calendly) {
        window.Calendly.initInlineWidgets();
      }
    }
  }, []);

  return (
    <div
      ref={calendlyRef}
      className="calendly-inline-widget"
      data-url="https://calendly.com/pereira-luis1/15min"
      style={{
        minWidth: "320px",
        width: "100%",
        height: "800px", // recommended minimum height
        border: "none",
      }}
    />
  );
};

const CTA = React.forwardRef((props, ref) => (
  <div ref={ref} className="bg-gray-900 text-white py-20 lg:py-32">
    <div className="px-6 lg:px-12 text-center">
      <h2 className="text-4xl lg:text-5xl font-light mb-8">
        Ready to Transform Your Online Presence?
      </h2>
      <p className="text-lg mb-12 max-w-2xl mx-auto">
        Book a free, no-obligation consultation today and let’s discuss how we
        can help your business grow.
      </p>
      <div className="max-w-4xl mx-auto">
        <CalendlyWidget />
      </div>
    </div>
  </div>
));


const Copyright = () => (
  <div className="bg-black text-white py-4">
    <div className="px-6 lg:px-12">
      <p className="text-center text-sm text-gray-400">
        Copyright 2025. All rights reserved
      </p>
    </div>
  </div>
);

const App = () => {
  const ctaRef = useRef(null);

  const scrollToCTA = () => {
    ctaRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <Hero onBookConsultation={scrollToCTA} />
      <Stats />
      <Features />
      <Mission onBookConsultation={scrollToCTA} />
      <Services />
      <Testimonials />
      <FAQ />
      <CTA ref={ctaRef} />
      <Copyright />
    </div>
  );
};

export default App;