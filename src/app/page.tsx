"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Upload,
  ThumbsUp,
  Eye,
  UserPlus,
  Star,
  TrendingUp,
  Clock,
  Gamepad,
  Film,
  Music,
  BookOpen,
} from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

const MotionCard = motion(Card);

export default function Home() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.section
        className="text-center mb-16"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h1
          className="text-5xl font-bold mb-4 text-primary"
          variants={itemVariants}
        >
          Discover Your Next Favorite Entertainment
        </motion.h1>
        <motion.p
          className="text-xl mb-8 text-gray-600"
          variants={itemVariants}
        >
          Explore games, movies, music, and books all in one place.
        </motion.p>
        <motion.div
          className="flex justify-center items-center space-x-4"
          variants={containerVariants}
        >
          <Input
            type="search"
            placeholder="Search for anything..."
            className="w-full max-w-md rounded-r-none"
          />
          <Button className="rounded-l-none">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </motion.div>
      </motion.section>

      <motion.section
        className="mb-6"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-primary"
          variants={itemVariants}
        >
          Discover Across Categories
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {[
            { icon: Gamepad, title: "Games", color: "bg-red-500" },
            { icon: Film, title: "Movies", color: "bg-blue-500" },
            { icon: Music, title: "Music", color: "bg-green-500" },
            { icon: BookOpen, title: "Books", color: "bg-yellow-500" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`${item.color} rounded-lg p-6 text-white text-center`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="mx-auto h-12 w-12 mb-4" />
              <motion.h3
                className="text-xl font-semibold"
                variants={itemVariants}
              >
                {item.title}
              </motion.h3>
              <motion.p className="mt-2" variants={itemVariants}>
                Explore {item.title.toLowerCase()}
              </motion.p>
              <motion.div variants={itemVariants}>
                <Button variant="secondary" className="mt-4">
                  Discover
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="mb-16"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-primary"
          variants={itemVariants}
        >
          Trending Now
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {[1, 2, 3, 4].map((item) => (
            <MotionCard
              key={item}
              variants={itemVariants}
              className="overflow-hidden"
            >
              <motion.div variants={itemVariants}>
                <CardHeader className="p-0">
                  <img
                    src={`/placeholder.svg?height=300&width=200&text=Trending+${item}`}
                    alt={`Trending ${item}`}
                    className="w-full h-64 object-cover"
                  />
                </CardHeader>
              </motion.div>
              <motion.div variants={itemVariants}>
                <CardContent className="p-4">
                  <motion.div variants={itemVariants}>
                    <CardTitle className="mb-2">
                      Trending Title {item}
                    </CardTitle>
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-600">4.{item}</span>
                    </div>
                    <span className="text-sm text-gray-600 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                      {item}0k views
                    </span>
                  </motion.div>
                </CardContent>
              </motion.div>
            </MotionCard>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="mb-16"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-primary"
          variants={itemVariants}
        >
          AI-Powered Recommendations
        </motion.h2>
        <MotionCard variants={itemVariants}>
          <motion.div variants={itemVariants}>
            <CardContent className="p-6">
              <motion.p
                className="text-center mb-4 text-lg"
                variants={itemVariants}
              >
                Let our AI assistant help you discover new content based on your
                preferences.
              </motion.p>
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg">
                    <Search className="mr-2 h-5 w-5" /> Start AI Search
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </motion.div>
        </MotionCard>
      </motion.section>

      <motion.section
        className="mb-16"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-primary"
          variants={itemVariants}
        >
          For Content Creators
        </motion.h2>
        <MotionCard variants={itemVariants}>
          <motion.div variants={itemVariants}>
            <CardContent className="p-6">
              <motion.p
                className="text-center mb-4 text-lg"
                variants={itemVariants}
              >
                Are you a company or content creator? Upload your games, movies,
                music, or books to reach a wider audience.
              </motion.p>
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg">
                    <Upload className="mr-2 h-5 w-5" /> Upload Content
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </motion.div>
        </MotionCard>
      </motion.section>

      <motion.section
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-primary"
          variants={itemVariants}
        >
          Interact with Content
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {[
            {
              icon: ThumbsUp,
              title: "Like",
              description:
                "Show appreciation for your favorite content by liking it.",
            },
            {
              icon: UserPlus,
              title: "Follow",
              description:
                "Follow your favorite creators to stay updated with their latest content.",
            },
            {
              icon: Eye,
              title: "View",
              description:
                "Keep track of your viewing history and get personalized recommendations.",
            },
            {
              icon: Clock,
              title: "Watch Later",
              description:
                "Save content to watch later when you have more time.",
            },
          ].map((item, index) => (
            <MotionCard key={index} variants={itemVariants}>
              <motion.div variants={itemVariants}>
                <CardHeader>
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center"
                  >
                    <item.icon className="mr-2 h-5 w-5 text-primary" />{" "}
                    {item.title}
                  </motion.div>
                </CardHeader>
              </motion.div>
              <motion.div variants={itemVariants}>
                <CardContent>
                  <motion.p className="text-gray-600" variants={itemVariants}>
                    {item.description}
                  </motion.p>
                </CardContent>
              </motion.div>
            </MotionCard>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="mt-16"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-primary"
          variants={itemVariants}
        >
          Join Our Community
        </motion.h2>
        <MotionCard variants={itemVariants}>
          <motion.div variants={itemVariants}>
            <CardContent className="p-6">
              <motion.p
                className="text-center mb-4 text-lg"
                variants={itemVariants}
              >
                Stay updated with the latest trends, releases, and exclusive
                offers.
              </motion.p>
              <motion.form
                className="flex flex-col items-center space-y-4"
                variants={itemVariants}
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full max-w-md"
                />
                <Button size="lg" className="w-full max-w-md">
                  Subscribe
                </Button>
              </motion.form>
            </CardContent>
          </motion.div>
        </MotionCard>
      </motion.section>
    </div>
  );
}
