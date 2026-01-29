import { motion } from "framer-motion";
import { BookOpen, Users, Palette, Heart, Activity, Brain } from "lucide-react";

const keyFocusAreas = [
  {
    icon: BookOpen,
    title: "Language Skills",
    description: "Listening, speaking, reading, and writing through stories, rhymes, and conversations",
    color: "bg-primary",
  },
  {
    icon: Brain,
    title: "Numeracy Skills",
    description: "Basic numbers, shapes, patterns, and logical thinking",
    color: "bg-sky",
  },
  {
    icon: Users,
    title: "Environmental Awareness",
    description: "Understanding surroundings, nature, and social values",
    color: "bg-forest",
  },
  {
    icon: Palette,
    title: "Creative Expression",
    description: "Art, craft, music, and movement",
    color: "bg-coral",
  },
  {
    icon: Activity,
    title: "Physical Development",
    description: "Games, exercises, and motor skill activities",
    color: "bg-accent",
  },
  {
    icon: Heart,
    title: "Moral & Social Values",
    description: "Good habits, empathy, sharing, and respect",
    color: "bg-secondary",
  },
];

const benefits = [
  "Strong Foundation: Builds basic literacy, numeracy, and thinking skills",
  "Child-Centric Approach: Focuses on joyful learning and individual growth",
  "Activity-Based Learning: Encourages learning through play, stories, and practical activities",
  "Balanced Development: Gives equal importance to academics, creativity, and physical activity",
  "Reduced Academic Pressure: No exam stress in early classes; focus on understanding and confidence",
  "Smooth Progression: Prepares children gradually for higher classes",
  "National Curriculum: Ensures uniform education and easy school transfers across India",
];

const CurriculumOverview = () => {
  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              CBSE Syllabus for Nursery to Class 5
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              The CBSE curriculum from Nursery to Class 5 aims to promote holistic
              development—covering academic, social, emotional, and physical growth.
              The curriculum emphasizes learning through play, hands-on activities,
              and real-life connections to help children enjoy the learning process.
            </p>
          </div>

          {/* Key Focus Areas */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {keyFocusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-xl p-5 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${area.color} flex items-center justify-center mb-3`}
                >
                  <area.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{area.title}</h3>
                <p className="text-muted-foreground text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Benefits of CBSE Curriculum
            </h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-muted-foreground text-sm"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mt-1.5 shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurriculumOverview;
