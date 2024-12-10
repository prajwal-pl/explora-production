'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-white pt-12 pb-6"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4">Explora</h3>
            <p className="text-gray-400">Discover and explore the best in entertainment across games, movies, music, and books.</p>
          </motion.div>
          {['Company', 'Legal', 'Support'].map((section, index) => (
            <motion.div key={section} variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4">{section}</h4>
              <ul className="space-y-2">
                {['Link 1', 'Link 2', 'Link 3'].map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div variants={itemVariants} className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Stay Connected</h4>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="flex-1 max-w-md mx-auto md:mx-0 md:ml-8">
              <h4 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
              <div className="flex">
                <Input type="email" placeholder="Enter your email" className="rounded-r-none" />
                <Button type="submit" className="rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mt-8 text-center text-sm text-gray-400"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} Explora. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  )
}

