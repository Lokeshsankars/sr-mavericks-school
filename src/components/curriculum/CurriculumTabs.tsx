import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Calculator, Globe, Music, Palette, Heart, Users, Brain, Sparkles } from "lucide-react";

const syllabusData = {
  nursery: {
    title: "Nursery Syllabus 2025–26",
    description: "The Nursery CBSE syllabus focuses on holistic early childhood development through activity-based learning. It lays the foundation for cognitive, social-emotional, and physical growth.",
    subjects: [
      {
        name: "English",
        icon: BookOpen,
        topics: [
          "Introduction to alphabets (A–Z)",
          "Phonics and letter sounds",
          "Simple vocabulary (fruits, animals, colors, body parts)",
          "Listening to rhymes and stories",
          "Scribbling and tracing activities",
        ],
      },
      {
        name: "Mathematics",
        icon: Calculator,
        topics: [
          "Counting 1–20",
          "Number recognition and writing",
          "Basic shapes (circle, square, triangle)",
          "Sorting and matching activities",
          "Concept of big/small, tall/short, more/less",
        ],
      },
      {
        name: "Hindi",
        icon: Globe,
        topics: [
          "Introduction to Hindi vowels (स्वर) and consonants (व्यंजन)",
          "Picture-based word recognition",
          "Reciting Hindi rhymes",
          "Tracing and writing Hindi letters",
        ],
      },
      {
        name: "Environmental Awareness",
        icon: Sparkles,
        topics: [
          "Myself (name, body parts, family)",
          "Animals and birds",
          "Plants and nature",
          "Festivals and celebrations",
          "Good habits and hygiene",
        ],
      },
      {
        name: "Art & Craft",
        icon: Palette,
        topics: [
          "Coloring and drawing",
          "Clay modeling and paper crafts",
          "Simple collage work",
        ],
      },
      {
        name: "Physical Development",
        icon: Heart,
        topics: [
          "Basic motor activities",
          "Play-based exercises",
          "Music and movement",
        ],
      },
    ],
  },
  lkg: {
    title: "LKG Syllabus 2025–26",
    description: "LKG builds on pre-primary learning, introducing structured activities to develop foundational literacy, numeracy, and social skills in a playful environment.",
    subjects: [
      {
        name: "English",
        icon: BookOpen,
        topics: [
          "Alphabet recognition and sounds (phonics)",
          "Three-letter words (CVC words)",
          "Simple sentence reading",
          "Vocabulary expansion (vegetables, transport, occupations)",
          "Writing practice",
        ],
      },
      {
        name: "Mathematics",
        icon: Calculator,
        topics: [
          "Counting 1–50",
          "Number writing and sequencing",
          "Introduction to addition (using objects)",
          "Patterns and shapes (including rectangle, oval)",
          "Comparison concepts (heavy/light, long/short)",
        ],
      },
      {
        name: "Hindi",
        icon: Globe,
        topics: [
          "Recognition and writing of vowels and consonants",
          "Two-letter words (मात्रा introduction)",
          "Hindi rhymes and stories",
          "Picture reading",
        ],
      },
      {
        name: "EVS (Environmental Studies)",
        icon: Sparkles,
        topics: [
          "My family and home",
          "Community helpers",
          "Weather and seasons",
          "Plants and their parts",
          "Safe and unsafe practices",
        ],
      },
      {
        name: "Art & Craft",
        icon: Palette,
        topics: [
          "Coloring within boundaries",
          "Paper folding and pasting",
          "Creative expression through art",
        ],
      },
      {
        name: "Music & Movement",
        icon: Music,
        topics: [
          "Action songs and rhymes",
          "Rhythm and coordination activities",
        ],
      },
    ],
  },
  ukg: {
    title: "UKG Syllabus 2025–26",
    description: "UKG prepares children for a smooth transition to primary school. The syllabus enhances reading, writing, and basic mathematical skills with a focus on independent learning.",
    subjects: [
      {
        name: "English",
        icon: BookOpen,
        topics: [
          "Blending sounds to form words",
          "Reading simple sentences",
          "Introduction to grammar (naming words, action words)",
          "Story comprehension",
          "Dictation and sentence writing",
        ],
      },
      {
        name: "Mathematics",
        icon: Calculator,
        topics: [
          "Counting 1–100",
          "Addition and subtraction (single digit)",
          "Ordinal numbers (1st to 10th)",
          "Time concepts (days, months)",
          "Measurement and money (introduction)",
        ],
      },
      {
        name: "Hindi",
        icon: Globe,
        topics: [
          "Matra-based words (आ, इ, ई, उ, ऊ, ए, ऐ, ओ, औ)",
          "Simple sentence formation",
          "Story reading",
          "Dictation practice",
        ],
      },
      {
        name: "EVS (Environmental Studies)",
        icon: Sparkles,
        topics: [
          "Our neighborhood",
          "Transport and communication",
          "Animals – domestic and wild",
          "Water, air, and hygiene",
          "National symbols and festivals",
        ],
      },
      {
        name: "Art & Craft",
        icon: Palette,
        topics: [
          "Drawing objects from imagination",
          "Craft using various materials",
        ],
      },
      {
        name: "Value Education",
        icon: Heart,
        topics: [
          "Good manners and social behavior",
          "Respect for elders and environment",
        ],
      },
    ],
  },
  primary: {
    title: "Primary Syllabus 2025–26 (Class 1 to 5)",
    description: "The CBSE curriculum for Classes 1 to 5 focuses on building a strong academic foundation and promoting conceptual clarity, creativity, critical thinking, and holistic development.",
    classes: [
      {
        id: "class1",
        title: "Class 1",
        badge: "1",
        description: "Students step into formal education in Class 1. The CBSE syllabus is carefully designed to arouse interest in academics.",
        subjects: [
          { name: "English", topics: ["Foundational language skills", "Alphabet recognition, phonics, basic reading & writing", "Simple sentences, rhymes, and storytelling activities"] },
          { name: "Mathematics", topics: ["Numbers 1–99", "Introduction to addition and subtraction", "Shapes, patterns, and measurement concepts"] },
          { name: "Hindi", topics: ["Basic Hindi letters and reading", "Simple writing and vocabulary based on Sarangi textbook"] },
          { name: "EVS", topics: ["Self and surroundings", "Plants, animals, food, weather and safety topics"] },
        ],
      },
      {
        id: "class2",
        title: "Class 2",
        badge: "2",
        description: "The Class 2 CBSE syllabus enhances the child's natural talents and creative skills through stories and poems.",
        subjects: [
          { name: "English", topics: ["Developing reading and comprehension", "Writing simple sentences & vocabulary expansion"] },
          { name: "Mathematics", topics: ["Numbers up to 1000", "Basic addition, subtraction, simple multiplication concepts", "Time and money basics"] },
          { name: "Hindi", topics: ["Extended letter recognition, reading, and simple grammar", "Vocabulary and creative writing basics"] },
          { name: "EVS", topics: ["Community helpers, transport and communication", "Health, hygiene, seasons and nature topics"] },
        ],
      },
      {
        id: "class3",
        title: "Class 3",
        badge: "3",
        description: "In Class 3, students explore reading and writing. Math covers pattern manipulation, money, and smart charts.",
        subjects: [
          { name: "English", topics: ["Stories, poems and comprehension", "Grammar basics (sentences, parts of speech)", "Vocabulary and speaking skills"] },
          { name: "Mathematics", topics: ["Numbers, basic operations", "Shapes, measurements, time and money", "Patterns, puzzles and problem solving"] },
          { name: "Hindi", topics: ["Reading and writing stories and poems in Hindi", "Elementary grammar and writing skills"] },
          { name: "EVS", topics: ["Concepts about plants, animals, weather", "Healthy habits, community and environment topics"] },
        ],
      },
      {
        id: "class4",
        title: "Class 4",
        badge: "4",
        description: "By Class 4, students are fully equipped to absorb new subjects and learn through experimentation.",
        subjects: [
          { name: "English", topics: ["Sentence formation, punctuation", "Reading comprehension and creative writing"] },
          { name: "Mathematics", topics: ["Advanced arithmetic (addition, subtraction, multiplication, division)", "Fractions, measurement, data handling, time, money and shapes"] },
          { name: "Hindi", topics: ["Prose and poetry reading", "Grammar and writing practice"] },
          { name: "EVS", topics: ["Natural resources", "Health and safety", "Plants, animals, community and environment concepts"] },
        ],
      },
      {
        id: "class5",
        title: "Class 5",
        badge: "5",
        description: "The curriculum emphasizes developing the child's ability to question and search for answers, enhancing reasoning abilities.",
        subjects: [
          { name: "English", topics: ["Reading comprehension and response", "Grammar, creative and descriptive writing"] },
          { name: "Mathematics", topics: ["Arithmetic (whole numbers, fractions, decimals)", "Geometry basics, data handling, measurement"] },
          { name: "Hindi", topics: ["Reading comprehension", "Grammar fundamentals and writing skills"] },
          { name: "EVS", topics: ["Environmental awareness", "Natural resources, ecosystems and practical applications"] },
        ],
      },
    ],
  },
};

type GradeKey = "nursery" | "lkg" | "ukg" | "primary";

const tabs: { key: GradeKey; label: string }[] = [
  { key: "nursery", label: "Nursery" },
  { key: "lkg", label: "LKG" },
  { key: "ukg", label: "UKG" },
  { key: "primary", label: "Primary" },
];

const CurriculumTabs = () => {
  const [activeTab, setActiveTab] = useState<GradeKey>("nursery");
  const [activeClass, setActiveClass] = useState("class1");

  const renderPrePrimaryContent = (grade: "nursery" | "lkg" | "ukg") => {
    const data = syllabusData[grade];
    return (
      <motion.div
        key={grade}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-8"
      >
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {data.title}
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.subjects.map((subject, index) => {
            const Icon = subject.icon;
            return (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">{subject.name}</h4>
                </div>
                <ul className="space-y-2">
                  {subject.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    );
  };

  const renderPrimaryContent = () => {
    const data = syllabusData.primary;
    const currentClass = data.classes.find((c) => c.id === activeClass) || data.classes[0];

    return (
      <motion.div
        key="primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="space-y-8"
      >
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {data.title}
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Class Sub-tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {data.classes.map((cls) => (
            <button
              key={cls.id}
              onClick={() => setActiveClass(cls.id)}
              className={`w-12 h-12 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
                activeClass === cls.id
                  ? "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/30"
                  : "bg-card text-foreground hover:bg-secondary/10 border border-border hover:border-secondary/30"
              }`}
            >
              {cls.badge}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeClass}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            <div className="text-center">
              <span className="inline-block bg-secondary/20 text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-2">
                {currentClass.title} Syllabus
              </span>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {currentClass.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {currentClass.subjects.map((subject, index) => (
                <motion.div
                  key={subject.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="bg-card rounded-xl border border-border p-5 hover:shadow-md hover:border-primary/20 transition-all duration-300"
                >
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    {subject.name}
                  </h4>
                  <ul className="space-y-1.5">
                    {subject.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            CBSE Syllabus 2025–26
          </span>
          <h2 className="section-title">Grade-wise Curriculum</h2>
          <p className="section-subtitle mx-auto">
            Explore the detailed CBSE syllabus for each grade from Nursery to Class 5
          </p>
        </div>

        {/* Main Grade Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-card text-foreground hover:bg-primary/10 border border-border hover:border-primary/30 hover:-translate-y-0.5"
              }`}
            >
              Grade: {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "primary"
            ? renderPrimaryContent()
            : renderPrePrimaryContent(activeTab)}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CurriculumTabs;
