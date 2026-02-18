import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const programmeData = {
  nursery: {
    title: "Grade: Nursery",
    img: "assets/nursery1.jpeg",
    desc1:
      "Our Nursery programme lays the foundation for lifelong learning through play-based and experiential activities. Children are gently introduced to language, numbers, music, and movement in a safe and joyful environment.",
    desc2:
      "Emphasis is placed on social interaction, emotional security, and sensory exploration, helping children build confidence, curiosity, and a positive attitude towards school.",
  },
  lkg: {
    title: "Grade: LKG",
    img: "assets/lkg1.jpeg",
    desc1:
      "The LKG programme focuses on structured learning blended with creativity and fun. Children begin developing early literacy and numeracy skills through phonics, storytelling, and hands-on experiences.",
    desc2:
      "Guided learning activities help improve communication skills, concentration, independence, and imagination.",
  },
  ukg: {
    title: "Grade: UKG",
    img: "assets/ukg1.jpeg",
    desc1:
      "UKG prepares children for a smooth transition into primary education by strengthening reading, writing, number concepts, and logical thinking.",
    desc2:
      "Focus is given to confidence-building, discipline, problem-solving skills, and social awareness.",
  },
  primary: {
    title: "Grade: Primary (1–5)",
    img: "assets/primary.jpg",
    desc1:
      "The Primary programme emphasizes concept-based learning, academic excellence, and experiential education across core subjects.",
    desc2:
      "Creativity, values, life skills, and co-curricular activities are integrated to develop independent thinkers and responsible learners.",
  },
};

type ProgramKey = keyof typeof programmeData;

const tabs: { key: ProgramKey; label: string }[] = [
  { key: "nursery", label: "Nursery" },
  { key: "lkg", label: "LKG" },
  { key: "ukg", label: "UKG" },
  { key: "primary", label: "Primary" },
];

const ProgrammeTabs = () => {
  const [activeTab, setActiveTab] = useState<ProgramKey>("nursery");
  const currentProgram = programmeData[activeTab];

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Programmes</h2>
          <p className="section-subtitle mx-auto">
            At SR MAVERICKS, our learning programmes are thoughtfully designed
            to support children from early years through primary education,
            nurturing curiosity, confidence, and a love for learning.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-card text-foreground hover:bg-primary/10 border border-border hover:border-primary/30 hover:-translate-y-0.5"
              }`}
            >
              Grade: {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Image */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-secondary/30 rounded-full blur-xl transition-all duration-500 group-hover:scale-150 group-hover:bg-secondary/40" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/30" />
              <img
                src={currentProgram.img}
                alt={currentProgram.title}
                className="relative rounded-2xl shadow-xl w-full h-[350px] object-cover transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]"
              />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                {currentProgram.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {currentProgram.desc1}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {currentProgram.desc2}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProgrammeTabs;
