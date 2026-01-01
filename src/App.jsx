import React, { useState } from "react";
import {
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Clock,
  Download,
  X,
} from "lucide-react";

const SanaBeautySalon = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services = [
    { id: 1, title: "South Indian HD Looks", photos: 9, price: "₹10,000" },
    { id: 2, title: "International Certified", photos: 4, price: "Contact" },
    { id: 3, title: "Open Hairs Look", photos: 10, price: "₹2,000" },
    {
      id: 4,
      title: "Maharashtrian Kasouta Look HD",
      photos: 8,
      price: "₹12,000",
    },
    { id: 5, title: "Heavy Look with Lense HD", photos: 8, price: "₹10,000" },
    {
      id: 6,
      title: "Maharashtrian/South Indian Look",
      photos: 10,
      price: "₹12,000",
    },
    { id: 7, title: "HD Look", photos: 4, price: "₹7,000" },
    { id: 8, title: "Engagement Look", photos: 5, price: "₹6,000" },
    { id: 9, title: "Heavy Curls", photos: 8, price: "₹2,000" },
    { id: 10, title: "Trending Hairstyles", photos: 9, price: "₹1,000" },
    { id: 11, title: "3D Look", photos: 5, price: "₹6,500" },
    { id: 12, title: "Engagement Look Premium", photos: 5, price: "₹5,000" },
    { id: 13, title: "Airbrush Look", photos: 6, price: "₹12,000" },
    {
      id: 14,
      title: "HD Makeup for Christian Bride",
      photos: 9,
      price: "₹10,000",
    },
  ];

  const openGallery = (service) => {
    setSelectedGallery(service);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedGallery.photos);
    }
  };

  const prevImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + selectedGallery.photos) % selectedGallery.photos
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Hero Section with Background */}
      <div className="relative min-h-screen overflow-hidden">
        {/* Blurred Background Image */}
        {/* <div
          className="absolute inset-0 bg-cover bg-center filter blur-md scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&h=1080&fit=crop&q=80')",
          }}
        /> */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-md scale-110"
          style={{
            backgroundImage: "url('/images/my-photo.jpg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/70 to-pink-900/70" />

        {/* Animated shine effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-yellow-300 to-transparent transform rotate-12 animate-[shine_4s_ease-in-out_infinite]" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white px-4 py-12">
          {/* Logo with your S design
          <div className="mb-6 sm:mb-8 animate-[fadeIn_1s_ease-out]">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 flex items-center justify-center shadow-2xl border-4 border-yellow-200/50 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent animate-pulse" />
              <span
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-900 relative z-10"
                style={{ fontFamily: "serif" }}
              >
                S
              </span>
            </div>
          </div> */}
          {/* Logo with image */}
          <div className="mb-6 sm:mb-8 animate-[fadeIn_1s_ease-out]">
            <div
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full 
    bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500 
    flex items-center justify-center shadow-2xl 
    border-4 border-yellow-200/50 relative overflow-hidden"
            >
              {/* Light shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent animate-pulse" />

              {/* Your Photo */}
              <img
                src="/my-photo.jpg" // 👈 replace with your photo path
                alt="Profile Photo"
                className="w-full h-full object-cover rounded-full relative z-10"
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-3 sm:mb-4 animate-[fadeIn_1.5s_ease-out] bg-gradient-to-r from-yellow-200 via-pink-300 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl px-4">
            Sana Makeovers
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-center mb-4 sm:mb-6 animate-[fadeIn_2s_ease-out] text-pink-200 font-light">
            Salon & Academy
          </p>

          {/* Professional Tagline */}
          <div className="max-w-2xl mx-auto mb-6 sm:mb-8 animate-[fadeIn_2.2s_ease-out]">
            <p className="text-base sm:text-lg md:text-xl text-center text-yellow-200 font-semibold italic px-4">
              "Where Beauty Meets Elegance - Your Journey to Perfection Begins
              Here"
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-2xl border border-yellow-300/30 animate-[fadeIn_2.5s_ease-out] shadow-2xl max-w-lg mx-4">
            <p className="text-sm sm:text-base md:text-lg text-center text-pink-100 leading-relaxed">
              ✨ Thanks for your precious support 😊
              <br />
              🌟 Sana beauty parlour always welcomes you with new offers 🥰
            </p>
          </div>

          <div className="mt-6 sm:mt-8 bg-gradient-to-r from-rose-500/90 to-pink-600/90 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-xl border border-pink-300/50 animate-[fadeIn_3s_ease-out] shadow-2xl mx-4 max-w-lg">
            <p className="text-center font-medium text-white text-sm sm:text-base">
              🙏 Request: Only ladies can contact for all type of services 🌸
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 animate-[fadeIn_3.5s_ease-out] px-4">
            <a
              href="https://wa.me/918123560598"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2 justify-center text-sm sm:text-base"
            >
              <Phone className="w-5 h-5" />
              Book Appointment
            </a>
            <a
              href="#services"
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl text-center text-sm sm:text-base"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-yellow-300/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-300/80 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-3 sm:py-4 sticky top-0 z-40 shadow-2xl border-b border-yellow-500/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-xs sm:text-sm md:text-base">
            <a
              href="https://wa.me/918123560598"
              className="flex items-center gap-1 sm:gap-2 hover:scale-110 hover:text-yellow-400 transition-all"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">81235 60598</span>
            </a>
            <a
              href="mailto:sajidamulla27@gmail.com"
              className="flex items-center gap-1 sm:gap-2 hover:scale-110 hover:text-yellow-400 transition-all"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden md:inline">sajidamulla27@gmail.com</span>
            </a>
            <a
              href="https://www.instagram.com/sanabeautyparlour_/?igsh=eDZ4YzI2cng0ZXBi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 hover:scale-110 hover:text-pink-400 transition-all"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/@sajidamullavlogs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 hover:scale-110 hover:text-red-400 transition-all"
            >
              <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">YouTube</span>
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div
        id="services"
        className="bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4 py-12 sm:py-16"
      >
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Our Exclusive Services
          </h2>
          <p className="text-center text-gray-400 mb-8 sm:mb-12 text-base sm:text-lg px-4">
            ✨ Transform your look with our professional makeup & styling
            services
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => openGallery(service)}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2 border border-gray-700 hover:border-pink-500/50"
              >
                {/* Service image placeholder with gradient */}
                <div className="h-48 sm:h-56 md:h-64 bg-gradient-to-br from-pink-900/40 via-purple-900/40 to-gray-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl sm:text-5xl md:text-6xl mb-2">
                        💄
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-pink-300">
                        {service.photos} Photos
                      </p>
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent transform rotate-12 group-hover:left-full transition-all duration-1000" />
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  <div className="flex justify-between items-center mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                      {service.price}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400">
                      {service.photos} photos
                    </span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 sm:py-3 rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all transform group-hover:scale-105 shadow-lg text-sm sm:text-base font-semibold">
                    View Gallery →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio Download */}
          <div className="mt-12 sm:mt-16 text-center px-4">
            <div className="inline-block bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 p-0.5 sm:p-1 rounded-2xl shadow-2xl">
              <div className="bg-gray-900 rounded-2xl px-6 sm:px-8 py-6 sm:py-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                  Download Our Portfolio
                </h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  Get the complete "Bride Elegance Portfolio" with all our work
                </p>
                <button className="flex items-center gap-2 sm:gap-3 mx-auto bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg text-sm sm:text-base font-semibold">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download Portfolio PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timing & Location */}
      <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Timing */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-6 sm:p-8 transform hover:scale-105 transition-all border border-pink-500/30">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="bg-gradient-to-br from-pink-500 to-purple-500 p-2 sm:p-3 rounded-full">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <p className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span className="font-medium text-pink-300">
                    Friday - Wednesday
                  </span>
                  <span className="text-yellow-400 font-semibold">
                    11:00 AM - 7:00 PM
                  </span>
                </p>
                <p className="text-sm text-gray-400 mt-4 bg-gray-800/50 p-3 rounded-lg">
                  📞 Call us to book your appointment
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-6 sm:p-8 transform hover:scale-105 transition-all border border-purple-500/30">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="bg-gradient-to-br from-pink-500 to-purple-500 p-2 sm:p-3 rounded-full">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Visit Us
                </h3>
              </div>
              <div className="aspect-video bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-lg mb-4 flex items-center justify-center border border-pink-500/30">
                <p className="text-gray-300 text-center px-4 text-sm sm:text-base">
                  📍 Click to view location on Google Maps
                  <br />
                  <span className="text-xs sm:text-sm text-pink-400">
                    (Add your address in the map)
                  </span>
                </p>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white text-center py-2 sm:py-3 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all transform hover:scale-105 text-sm sm:text-base font-semibold"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedGallery && (
        <div className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-2 sm:p-4">
          <button
            onClick={closeGallery}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-pink-400 transition-colors z-10 bg-gray-900/50 rounded-full p-2"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <div className="max-w-4xl w-full px-2">
            <div className="text-center mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 px-4">
                {selectedGallery.title}
              </h3>
              <p className="text-pink-300 text-base sm:text-lg font-semibold">
                Price: {selectedGallery.price}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Image {currentImageIndex + 1} of {selectedGallery.photos}
              </p>
            </div>

            <div className="relative">
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-pink-900/50 via-purple-900/50 to-gray-900 rounded-lg flex items-center justify-center border border-pink-500/30">
                <div className="text-center text-white px-4">
                  <p className="text-4xl sm:text-6xl mb-4">📸</p>
                  <p className="text-lg sm:text-xl font-semibold">
                    Photo {currentImageIndex + 1}
                  </p>
                  <p className="text-xs sm:text-sm mt-2 opacity-75">
                    Sample image placeholder
                  </p>
                </div>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-1 sm:left-4 top-1/2 transform -translate-y-1/2 bg-pink-600/80 hover:bg-pink-600 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all text-lg sm:text-xl font-bold"
              >
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-1 sm:right-4 top-1/2 transform -translate-y-1/2 bg-pink-600/80 hover:bg-pink-600 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all text-lg sm:text-xl font-bold"
              >
                →
              </button>
            </div>

            <div className="mt-4 sm:mt-6 text-center px-2">
              <a
                href="https://wa.me/918123560598"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all transform hover:scale-105 text-sm sm:text-base font-semibold"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Book This Service
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://www.instagram.com/sanabeautyparlour_/?igsh=eDZ4YzI2cng0ZXBi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors transform hover:scale-125"
            >
              <Instagram className="w-8 h-8" />
            </a>
            <a
              href="https://www.youtube.com/@sajidamullavlogs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors transform hover:scale-125"
            >
              <Youtube className="w-8 h-8" />
            </a>
            <a
              href="mailto:sajidamulla27@gmail.com"
              className="hover:text-pink-400 transition-colors transform hover:scale-125"
            >
              <Mail className="w-8 h-8" />
            </a>
            <a
              href="https://wa.me/918123560598"
              className="hover:text-pink-400 transition-colors transform hover:scale-125"
            >
              <Phone className="w-8 h-8" />
            </a>
          </div>
          <p className="text-gray-400">
            © 2026 Sana Makeovers Salon & Academy. All rights reserved.
          </p>
          <p className="text-pink-400 mt-2">
            Empowering beauty, one transformation at a time ✨
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) rotate(12deg);
          }
          100% {
            transform: translateX(300%) rotate(12deg);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SanaBeautySalon;
