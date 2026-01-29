import { Languages, BookOpen, FlaskConical, Users, Palette } from "lucide-react";
import { motion } from "framer-motion";

const curriculumAreas = [
  {
    icon: Languages,
    title: "Language Development",
    description:
      "We build strong communication skills through storytelling, conversations, reading readiness, and early writing activities that help children express ideas with confidence.",
    color: "bg-sky",
  },
  {
    icon: BookOpen,
    title: "Numeracy",
    description:
      "Children develop logical thinking through counting, patterns, sorting, problem-solving, and hands-on math activities that connect numbers to real life.",
    color: "bg-primary",
  },
  {
    icon: FlaskConical,
    title: "Science & Social Awareness",
    description:
      "Curiosity is nurtured as children explore nature, people, surroundings, and everyday experiences, helping them understand the world around them.",
    color: "bg-accent",
  },
  {
    icon: Users,
    title: "Social & Physical Development",
    description:
      "Through movement, teamwork, and guided play, children build physical strength, emotional balance, social skills, and positive self-esteem.",
    color: "bg-forest",
  },
  {
    icon: Palette,
    title: "Creative Arts",
    description:
      "Art, music, dance, and imaginative play allow children to explore creativity, express emotions, and develop original thinking in a joyful way.",
    color: "bg-coral",
  },
];

const CurriculumCards = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Our Curriculum Is Designed Around Five Key Learning Areas
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {curriculumAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div
                className={`w-14 h-14 rounded-xl ${area.color} flex items-center justify-center mb-4`}
              >
                <area.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumCards;
