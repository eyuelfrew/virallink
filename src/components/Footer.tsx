'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Heart
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'SEO Optimization', href: '/services/seo' },
        { name: 'Social Media Marketing', href: '/services/social-media' },
        { name: 'Content Creation', href: '/services/content' },
        { name: 'Digital Advertising', href: '/services/advertising' },
        { name: 'Analytics & Reporting', href: '/services/analytics' },
      ]
    },
    {
      title: 'Products',
      links: [
        { name: 'Web Development', href: '/products/web-development' },
        { name: 'Custom Designed QR Stands', href: '/products/qr-stands' },
        { name: 'ViraCRM - Customer Management', href: '/products/viracrm' },
        { name: 'Custom Solutions', href: '/products/custom' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Blog', href: '/blog' },
      ]
    },

  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/viralink', name: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/viralink', name: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/viralink', name: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/viralink', name: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3 mb-6 group">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <div className="flex items-center justify-center p-2">
                      <Image 
                        src="/image.webp" 
                        alt="Viralink Logo" 
                        width={96} 
                        height={96} 
                        className="w-24 h-24 object-contain"
                        priority
                      />
                    </div>
                  </motion.div>
                  <div>
                    <span className="text-3xl font-heading font-bold text-white">
                      Viralink
                    </span>
                  </div>
                </Link>
                
                <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                  Connecting Brands To Success
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 mr-3 text-primary-400" />
                    <span>info@virallinkdigital.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-3 text-primary-400" />
                    <span>+251963343720</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-3 text-primary-400" />
                    <span>+251935334875</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-3 text-primary-400" />
                    <span>Mexico, Taos Tower 9th Floor (In front of Genet Hotel)</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {footerSections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-heading font-bold text-white mb-4 text-lg">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <motion.li
                          key={link.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Link
                            href={link.href}
                            className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm flex items-center group"
                          >
                            {link.name}
                            <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>



        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-primary-600 hover:to-accent-600 rounded-xl flex items-center justify-center transition-all duration-300 group shadow-lg"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div className="flex items-center space-x-8 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors duration-200 hover:underline">
                Privacy Policy
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors duration-200 hover:underline">
                Terms of Service
              </Link>
              <span className="text-gray-600">•</span>
              <Link href="/cookies" className="text-gray-400 hover:text-primary-400 transition-colors duration-200 hover:underline">
                Cookie Policy
              </Link>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center pb-8"
          >
            <div className="flex items-center justify-center text-gray-400 text-sm">
              <span>© {currentYear} Viralink. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              <span>for digital excellence.</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;