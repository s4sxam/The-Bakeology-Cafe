import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

export const LocationSection = () => {
  return (
    <section id="location" className="py-32 bg-[#15110D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair text-[#FDFBF7] mb-6">Visit Our Cafe</h2>
            <div className="w-16 h-[1px] bg-[#D4A373] mb-10" />
            
            <p className="text-[#A39F98] text-lg font-light mb-10 max-w-md leading-relaxed">
              Experience the perfect blend of traditional café culture and modern indulgence right in Asansol.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4A373]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#D4A373]" />
                </div>
                <div>
                  <h4 className="text-[#FDFBF7] font-medium mb-1">Address</h4>
                  <p className="text-[#A39F98] leading-relaxed">
                    41, Bhangapachil, 75, G.T. Road,<br />
                    Pathak Bari, Asansol, West Bengal 713303
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4A373]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#D4A373]" />
                </div>
                <div>
                  <h4 className="text-[#FDFBF7] font-medium mb-1">Phone / WhatsApp</h4>
                  <a href="tel:+919749976541" className="text-[#A39F98] hover:text-[#D4A373] transition-colors">
                    +91 97499 76541
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4A373]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#D4A373]" />
                </div>
                <div>
                  <h4 className="text-[#FDFBF7] font-medium mb-1">Email</h4>
                  <a href="mailto:adityagorai213@gmail.com" className="text-[#A39F98] hover:text-[#D4A373] transition-colors">
                    adityagorai213@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4A373]/10 flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5 text-[#D4A373]" />
                </div>
                <div>
                  <h4 className="text-[#FDFBF7] font-medium mb-1">Social Media</h4>
                  <div className="flex flex-col gap-1">
                    <a href="https://www.instagram.com/the_bakeology" target="_blank" rel="noopener noreferrer" className="text-[#A39F98] hover:text-[#D4A373] transition-colors">
                      Instagram: @the_bakeology
                    </a>
                    <a href="https://www.facebook.com/105770974629476/" target="_blank" rel="noopener noreferrer" className="text-[#A39F98] hover:text-[#D4A373] transition-colors">
                      Facebook: Follow our updates
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="https://maps.app.goo.gl/oPYdp13CTiScPDD46"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#D4A373] text-black font-medium tracking-wide rounded-full hover:bg-[#CBA052] transition-all duration-300 flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href="tel:+919749976541"
                className="px-8 py-4 bg-transparent border border-[#2B2620] text-white font-medium tracking-wide rounded-full hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call The Café
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden border border-[#2B2620] shadow-2xl"
          >
            <iframe
              src="https://maps.google.com/maps?q=The%20Bakeology,%20Asansol,%20West%20Bengal&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
      </div>
    </section>
  );
};