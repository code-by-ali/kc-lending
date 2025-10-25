import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function OfficeCards() {
  const offices = [
    {
      title: "Head Office",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      address: "123 Main Street, Anytown, USA",
      email: "info@realesteco.com",
      phone: "+1 234 567 890",
    },
    {
      title: "Head Office",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      address: "456 Elm Street, Othertown, USA",
      email: "info@realesteco.com",
      phone: "+1 987 654 321",
    },
    {
      title: "Branch Office",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      address: "789 Oak Street, Anycity, USA",
      email: "info@realesteco.com",
      phone: "+1 555 555 555",
    },
  ];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offices.map((office, index) => (
            <div key={index} className="bg-[#F2F4F7] rounded-2xl p-6">
              {/* Title and Description */}
              <h3 className="text-xl md:text-2xl font-semibold tracking-[-1px] text-primary mb-2">
                {office.title}
              </h3>
              <p className="text-description font-normal text-sm mb-6">
                {office.description}
              </p>

              {/* Contact Details */}
              <div className="space-y-3">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="text-[#344054] text-sm md:text-base font-semibold">
                    {office.address}
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${office.email}`}
                    className="text-[#344054] text-sm md:text-base font-semibold"
                  >
                    {office.email}
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="text-[#344054] text-sm md:text-base font-semibold"
                  >
                    {office.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
