import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from 'lucide-react';

export const LocationSection = () => {
  return (
    <section id="location" className="py-16 bg-[#0e0a07] border-t border-[#2B2620] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
        {/* Left Side - Contact List */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-normal text-[#FDFBF7] mb-3 tracking-wide">
            Visit Our Cafe
          </h2>
          <div className="w-16 h-[2px] bg-[#D4A373] mb-8" />
          
          <p className="text-[#A39F98] text-lg font-light mb-10 max-w-md leading-relaxed">
            Experience the perfect blend of artisanal coffee and a serene atmosphere right in the heart of the city.
          </p>

          <div className="flex flex-col gap-6 mb-10">
            {/* Phone Row */}
            <a href="tel:+919749976541" className="flex items-center gap-5 group cursor-pointer w-fit">
              <div className="w-12 h-12 rounded-full bg-[#2a2016] flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-[#0C0804] transition-colors shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-[#FDFBF7] font-playfair text-lg tracking-wide">Phone</h4>
                <p className="text-[#A39F98] text-sm font-light mt-0.5">+91 9749976541</p>
              </div>
            </a>

            {/* Email Row */}
            <a href="mailto:adityagorai213@gmail.com" className="flex items-center gap-5 group cursor-pointer w-fit">
              <div className="w-12 h-12 rounded-full bg-[#2a2016] flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-[#0C0804] transition-colors shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-[#FDFBF7] font-playfair text-lg tracking-wide">Email</h4>
                <p className="text-[#A39F98] text-sm font-light mt-0.5">adityagorai213@gmail.com</p>
              </div>
            </a>

            {/* WhatsApp Row */}
             <a href="https://wa.me/919749976541" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group cursor-pointer w-fit">
              <div className="w-12 h-12 rounded-full bg-[#2a2016] flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-[#0C0804] transition-colors shrink-0">
                <MessageCircle size={20} />
              </div>
              <div>
                <h4 className="text-[#FDFBF7] font-playfair text-lg tracking-wide">WhatsApp</h4>
                <p className="text-[#A39F98] text-sm font-light mt-0.5">+91 9749976541</p>
              </div>
            </a>

            {/* Facebook Row */}
            <a href="https://www.facebook.com/105770974629476/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group cursor-pointer w-fit">
              <div className="w-12 h-12 rounded-full bg-[#2a2016] flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-[#0C0804] transition-colors shrink-0">
                <Facebook size={20} />
              </div>
              <div>
                <h4 className="text-[#FDFBF7] font-playfair text-lg tracking-wide">Facebook</h4>
                <p className="text-[#A39F98] text-sm font-light mt-0.5">Follow our updates</p>
              </div>
            </a>

            {/* Instagram Row */}
            <a href="https://instagram.com/the_bakeology" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group cursor-pointer w-fit">
              <div className="w-12 h-12 rounded-full bg-[#2a2016] flex items-center justify-center text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-[#0C0804] transition-colors shrink-0">
                <Instagram size={20} />
              </div>
              <div>
                <h4 className="text-[#FDFBF7] font-playfair text-lg tracking-wide">Instagram</h4>
                <p className="text-[#A39F98] text-sm font-light mt-0.5">@the_bakeology</p>
              </div>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://maps.app.goo.gl/oPYdp13CTiScPDD46"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#D4A373] text-[#0C0804] font-semibold tracking-wide rounded-full hover:bg-[#FDFBF7] transition-all duration-300 flex items-center justify-center gap-2 text-sm"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
            <a
              href="tel:+919749976541"
              className="px-8 py-3.5 bg-transparent border border-[#2B2620] text-[#FDFBF7] font-semibold tracking-wide rounded-full hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              Call The Café
            </a>
          </div>
        </motion.div>

        {/* Right Side - Google Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[450px] rounded-2xl overflow-hidden border border-[#2B2620] shadow-2xl"
        >
          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 z-10">
            <p className="text-[#FDFBF7] font-bold text-sm font-inter">The Bakeology</p>
            <p className="text-[#A39F98] text-xs font-inter mt-0.5">41, Bhangapachil, Pathak Bari, Asansol</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.540443219082!2d86.94970471543167!3d23.68285558462272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f0056950cd9%3A0x8e83b8b6a378d384!2sThe%20Bakeology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          />
        </motion.div>

      </div>
    </section>
  );
};