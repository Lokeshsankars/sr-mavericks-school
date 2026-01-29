import { motion } from "framer-motion";

const CurriculumHero = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-forest/20 to-secondary/10">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            CBSE Syllabus 2025–26
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Curriculum at SR MAVERICKS
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Structured learning with heart, values, and creativity — following
            CBSE guidelines for holistic development
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CurriculumHero;
