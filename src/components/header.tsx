"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, User, Bell, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton, useUser } from "@clerk/nextjs";

export default function Header() {
  const { isLoaded, isSignedIn } = useUser();
  return (
    <motion.header
      className="bg-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, duration: 1 }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/" className="text-2xl font-bold text-primary">
            Explora
          </Link>
        </motion.div>
        <div className="hidden md:flex items-center space-x-4">
          <motion.nav
            className="space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Discover
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Categories
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              My List
            </Link>
          </motion.nav>
          <motion.form
            className="flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Input
              type="search"
              placeholder="Search..."
              className="w-64 rounded-r-none"
            />
            <Button
              type="submit"
              size="icon"
              variant="default"
              className="rounded-l-none"
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </motion.form>
        </div>
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ rotate: 15 }}
            transition={{ duration: 0.2 }}
          >
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {isSignedIn ? (
              <UserButton />
            ) : (
              <Button
                onClick={() => {
                  window.location.href = "/sign-in";
                }}
                variant="ghost"
                size="icon"
              >
                <User className="h-5 w-5" />
                <span className="sr-only">User account</span>
              </Button>
            )}
          </motion.div>
          <motion.div
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
