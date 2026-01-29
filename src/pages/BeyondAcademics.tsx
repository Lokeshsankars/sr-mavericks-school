import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import {
  Baby,
  Swords,
  Target,
  Bot,
  Music,
  Sparkles,
  Calculator,
  Leaf,
  Trophy,
  Gamepad2,
  Paintbrush,
  Laptop,
} from "lucide-react";

const activities = [
  {
    icon: Baby,
    title: "Day Care & After School Care",
    description: "Safe, nurturing care with guided activities and homework support.",
    color: "bg-primary",
  },
  {
    icon: Swords,
    title: "Karate",
    description: "Build discipline, confidence, self-defense skills, and focus.",
    color: "bg-coral",
  },
  {
    icon: Target,
    title: "Archery",
    description: "Enhances concentration, patience, posture, and mental strength.",
    color: "bg-forest",
  },
  {
    icon: Bot,
    title: "Robotics",
    description: "Hands-on exposure to technology, logic, and problem-solving.",
    color: "bg-secondary",
  },
  {
    icon: Music,
    title: "Bharatanatyam",
    description: "Classical dance training to develop rhythm, grace, and culture.",
    color: "bg-accent",
  },
  {
    icon: Sparkles,
    title: "Western Dance",
    description: "Encourages expression, coordination, and physical fitness.",
    color: "bg-sky",
  },
  {
    icon: Calculator,
    title: "Abacus",
    description: "Boosts mental arithmetic, memory, and speed in calculations.",
    color: "bg-sunshine",
  },
  {
    icon: Leaf,
    title: "Yoga",
    description: "Promotes physical flexibility, mental calmness, and mindfulness.",
    color: "bg-forest",
  },
  {
    icon: Trophy,
    title: "Silambam",
    description: "Traditional martial art improving agility, strength, and reflexes.",
    color: "bg-coral",
  },
  {
    icon: Gamepad2,
    title: "Chess",
    description: "Enhances strategic thinking, patience, and decision-making.",
    color: "bg-secondary",
  },
  {
    icon: Paintbrush,
    title: "Drawing & Art",
    description: "Encourages creativity, imagination, and fine motor skills.",
    color: "bg-accent",
  },
  {
    icon: Laptop,
    title: "Tuition Centre (Online / Offline)",
    description: "Academic support with flexible learning options for every child.",
    color: "bg-primary",
  },
];

const BeyondAcademics = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-accent/20 to-coral/10">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Beyond Academics
            </h1>
            <p className="text-lg text-muted-foreground">
              Where learning goes beyond the classroom
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 bg-card">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Holistic Growth Through Activities
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At SR MAVERICKS, education goes far beyond textbooks. We believe that
                co-curricular and extra-curricular activities play a vital role in
                shaping confident, disciplined, and creative individuals.
              </p>
              <p>
                Our carefully designed programmes help children explore interests,
                build physical strength, develop focus, and express creativity while
                maintaining academic balance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="section-container">
          <h2 className="section-title text-center mb-12">
            Our Beyond Academics Programmes
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
              >
                <div
                  className={`w-12 h-12 ${activity.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <activity.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground text-sm">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BeyondAcademics;
