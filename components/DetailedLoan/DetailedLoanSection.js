import React from "react";
import { Phone, Mail, MapPin, Download } from "lucide-react";
import SectionImg from "@/public/assets/detailed-loan-page-section.svg";
import CommonImage from "../common/CommonImage";

export default function DetailedLoanSection() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div className="bg-[#F5F5F5] p-6 space-y-6 ">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4">
                  For additional questions, contact us:
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-description mt-1 flex-shrink-0" />
                    <a
                      href="mailto:info@demo.com"
                      className="text-sm md:text-base text-description"
                    >
                      info@demo.com
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-description mt-1 flex-shrink-0" />
                    <a
                      href="tel:+15551234567"
                      className="text-sm md:text-base text-description"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-description mt-1 flex-shrink-0" />
                    <p className="text-sm md:text-base text-description">
                      1234 Broadway, Texas, NYC
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-blue space-y-4 ">
              <div className="flex flex-col gap-2">
                <p className="w-full text-white font-normal text-sm md:text-base px-4 transition-colors mt-6">
                  DOWNLOAD BROCHURE
                </p>
                <p className="text-xl md:text-2xl font-semibold text-white px-4 mb-16 mt-0">
                  Our logistic list of services pdf
                </p>
                <button className="w-full text-sm bg-[#F3E063] cursor-pointer text-primary font-semibold py-3 px-4">
                  DOWNLOAD APP
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9">
            <div className="space-y-8">
              {/* Header */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
                  FHA Loans
                </h1>
                <p className="text-[#666666] text-base font-normal leading-relaxed">
                  In today's fast-paced world, sending a parcel should be easy,
                  reliable, and worry-free. At Neom, we've streamlined the
                  parcel delivery experience so that whether you're shipping
                  across town or across borders, your items arrive safely and on
                  time—every time.
                </p>
              </div>

              {/* Designed for Convenience */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                  Designed for Convenience
                </h2>
                <p className="text-[#666666] text-base font-normal leading-relaxed mb-6">
                  We know that every parcel matters. That's why our process is
                  built around speed, simplicity, and clarity. From the moment
                  you schedule a shipment with Neom, our system ensures that
                  your parcel is tracked, handled, and delivered with care.
                  Whether you're a business fulfilling orders or an individual
                  sending something personal, we make the process effortless.
                </p>

                <div className="overflow-hidden mb-6">
                  <CommonImage
                    src={SectionImg.src || SectionImg}
                    alt="Shipping containers"
                  />
                </div>
              </div>

              {/* Real-Time Tracking */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Real-Time Tracking, Total Transparency
                </h2>
                <p className="text-[#666666] font-normal text-base leading-relaxed">
                  With Neom, you're never left wondering where your parcel is.
                  Our real-time tracking system keeps you updated at every stage
                  from pickup to final delivery. You'll receive live
                  notifications and detailed status updates, giving you complete
                  peace of mind throughout the journey.
                </p>
              </div>

              {/* Safe Handling */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                  Safe Handling, Secure Delivery
                </h2>
                <p className="text-[#666666] font-normal text-base leading-relaxed mb-6">
                  We treat every parcel with the highest level of care. Our team
                  is trained to handle a wide variety of package types,
                  including fragile, high-value, or time-sensitive shipments.
                  With secure packaging options and strict quality controls,
                  your items are protected at every step of the way.
                </p>

                <button className="bg-primary-blue text-lg md:text-xl text-white font-semibold py-3 px-8 rounded-lg inline-flex items-center gap-2 tracking-tight">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
