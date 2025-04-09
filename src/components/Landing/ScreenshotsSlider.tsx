"use client";

import { FolderOpen, Headset, StarFour } from "@phosphor-icons/react";
import { motion as m } from "framer-motion";
import Image from "next/image";

// Temporary images from Unsplash (replace with client screenshots later)
const row1Images = [
  "/screenshots/1.png",
  "/screenshots/2.png",
  "/screenshots/3.png",
  "/screenshots/4.png",
  "/screenshots/5.png",
  "/screenshots/6.png",
  "/screenshots/7.png",
  "/screenshots/8.png",
];

const row2Images = [
  "/screenshots/1.png",
  "/screenshots/2.png",
  "/screenshots/3.png",
  "/screenshots/4.png",
  "/screenshots/5.png",
  "/screenshots/6.png",
  "/screenshots/7.png",
  "/screenshots/8.png",
];

const ImageRow = ({
  images,
  direction = "left",
  speed = 80,
}: {
  images: string[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  // Triple the images to ensure no gaps
  const tripledImages = [...images, ...images, ...images];

  return (
    <div className="relative flex overflow-hidden py-4">
      <m.div
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex gap-4 shrink-0"
      >
        {tripledImages.map((src, i) => (
          <div
            key={i}
            className="relative w-[895px] h-[440px] rounded-2xl overflow-hidden border border-[#4285F4]/30 backdrop-blur-sm bg-white/[0.02] flex-shrink-0 group shadow-[0_0_25px_-5px_rgba(66,133,244,0.4)] hover:shadow-[0_0_35px_-5px_rgba(66,133,244,0.6)] transition-all duration-300"
          >
            <Image
              src={src}
              alt={`Screenshot ${i + 1}`}
              fill
              className="object-cover"
              sizes="895px"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        ))}
      </m.div>
    </div>
  );
};

export const ScreenshotsSlider = () => {
  return (
    <section
      id="case-studies"
      className="relative w-full overflow-hidden py-20 sm:py-28"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 border border-[#4285F4]/20 rounded-full backdrop-blur-sm bg-[#4285F4]/5">
            <span className="text-[#4285F4] text-sm font-medium">
              Success Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Our Regular GMC{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] to-[#1a73e8]">
              Fixations & Approvals
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See the volume of the Google Merchant Accounts we approve regularly
            with the help of our expert in-house team
          </p>
        </m.div>

        {/* Slider Rows */}
        <div className="-mx-[100px] space-y-8">
          <ImageRow images={row1Images} direction="left" speed={80} />
          <ImageRow images={row2Images} direction="right" speed={80} />
        </div>

        {/* Bottom Details */}
        <div className="mt-16 sm:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#4285F4]/10 flex items-center justify-center mx-auto mb-4">
                <StarFour size={32} className="text-[#4285F4]" />
              </div>
              <h3 className="text-white text-lg font-medium mb-2">
                Quality Service
              </h3>
              <p className="text-gray-400 text-sm">
                Our clients always get quality service from us which <br /> makes us
                their all-time favourite.
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#4285F4]/10 flex items-center justify-center mx-auto mb-4">
                <Headset size={32} className="text-[#4285F4]" />
              </div>
              <h3 className="text-white text-lg font-medium mb-2">
                Team Support
              </h3>
              <p className="text-gray-400 text-sm">
                Get our team support whenever needed. The team is <br /> always ready
                to make it easier for you.
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#4285F4]/10 flex items-center justify-center mx-auto mb-4">
                <FolderOpen size={32} className="text-[#4285F4]" />
              </div>
              <h3 className="text-white text-lg font-medium mb-2">
                Premade Inventory
              </h3>
              <p className="text-gray-400 text-sm">
                You can buy your preferred GMC from our expanding <br /> GMC inventory,
                all created by our in-house team.
              </p>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
};
