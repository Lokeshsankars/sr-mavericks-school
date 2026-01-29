import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const classSyllabi = [
  {
    id: "class1",
    title: "Class 1 Syllabus 2025–26",
    badge: "1",
    color: "primary",
    description:
      "Students step into formal education in Class 1. The CBSE syllabus is carefully designed to arouse interest in academics. Poems and short stories in textbooks are well substantiated by infographics and illustrations, making learning appealing and easy.",
    subjects: [
      {
        name: "English",
        topics: [
          "Foundational language skills",
          "Alphabet recognition, phonics, basic reading & writing",
          "Simple sentences, rhymes, and storytelling activities",
        ],
      },
      {
        name: "Mathematics",
        topics: [
          "Numbers 1–99",
          "Introduction to addition and subtraction",
          "Shapes, patterns, and measurement concepts",
        ],
      },
      {
        name: "Hindi",
        topics: [
          "Basic Hindi letters and reading",
          "Simple writing and vocabulary based on Sarangi textbook",
        ],
      },
      {
        name: "EVS / General Awareness",
        topics: [
          "Self and surroundings",
          "Plants, animals, food, weather and safety topics",
        ],
      },
    ],
  },
  {
    id: "class2",
    title: "Class 2 Syllabus 2025–26",
    badge: "2",
    color: "sky",
    description:
      "The Class 2 CBSE syllabus enhances the child's natural talents and creative skills. It develops curiosity through stories and poems, inspiring exploration and learning. The curriculum focuses on improving reading and developing writing skills for clear communication.",
    subjects: [
      {
        name: "English",
        topics: [
          "Developing reading and comprehension",
          "Writing simple sentences & vocabulary expansion",
        ],
      },
      {
        name: "Mathematics",
        topics: [
          "Numbers up to 1000",
          "Basic addition, subtraction, simple multiplication concepts",
          "Time and money basics",
        ],
      },
      {
        name: "Hindi",
        topics: [
          "Extended letter recognition, reading, and simple grammar",
          "Vocabulary and creative writing basics",
        ],
      },
      {
        name: "EVS / Environmental Awareness",
        topics: [
          "Community helpers, transport and communication",
          "Health, hygiene, seasons and nature topics",
        ],
      },
    ],
  },
  {
    id: "class3",
    title: "Class 3 Syllabus 2025–26",
    badge: "3",
    color: "forest",
    description:
      "In Class 3, students explore reading and writing. Math covers pattern manipulation, money (rupees and coins), and smart charts. Hindi and English are designed to help students improve their language skills through engaging content.",
    subjects: [
      {
        name: "English",
        topics: [
          "Stories, poems and comprehension",
          "Grammar basics (sentences, parts of speech)",
          "Vocabulary and speaking skills",
        ],
      },
      {
        name: "Mathematics",
        topics: [
          "Numbers, basic operations",
          "Shapes, measurements, time and money",
          "Patterns, puzzles and problem solving",
        ],
      },
      {
        name: "Hindi",
        topics: [
          "Reading and writing stories and poems in Hindi",
          "Elementary grammar and writing skills",
        ],
      },
      {
        name: "EVS / The World Around Us",
        topics: [
          "Concepts about plants, animals, weather",
          "Healthy habits, community and environment topics",
        ],
      },
    ],
  },
  {
    id: "class4",
    title: "Class 4 Syllabus 2025–26",
    badge: "4",
    color: "coral",
    description:
      "By Class 4, students are fully equipped to absorb new subjects. They learn quickly from what they see and experience. The curriculum helps students learn and experiment on their learning journey with more advanced concepts.",
    subjects: [
      {
        name: "English",
        topics: [
          "Sentence formation, punctuation",
          "Reading comprehension and creative writing",
        ],
      },
      {
        name: "Mathematics",
        topics: [
          "Advanced arithmetic (addition, subtraction, multiplication, division)",
          "Fractions, measurement, data handling, time, money and shapes",
        ],
      },
      {
        name: "Hindi",
        topics: ["Prose and poetry reading", "Grammar and writing practice"],
      },
      {
        name: "EVS",
        topics: [
          "Natural resources",
          "Health and safety",
          "Plants, animals, community and environment concepts",
        ],
      },
    ],
  },
  {
    id: "class5",
    title: "Class 5 Syllabus 2025–26",
    badge: "5",
    color: "accent",
    description:
      "Up to Class 5, children are in lower primary school. The curriculum emphasizes developing the child's ability to question and search for answers, enhancing reasoning abilities and scientific temper. Students are introduced to various problem-solving strategies.",
    subjects: [
      {
        name: "English",
        topics: [
          "Reading comprehension and response",
          "Grammar, creative and descriptive writing",
        ],
      },
      {
        name: "Mathematics",
        topics: [
          "Arithmetic (whole numbers, fractions, decimals)",
          "Geometry basics, data handling, measurement",
        ],
      },
      {
        name: "Hindi",
        topics: [
          "Reading comprehension",
          "Grammar fundamentals and writing skills",
        ],
      },
      {
        name: "EVS / Science & Environment",
        topics: [
          "Environmental awareness",
          "Natural resources, ecosystems and practical applications",
          "Skills to explore and understand the world around them",
        ],
      },
    ],
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  sky: "bg-sky/10 text-sky",
  forest: "bg-forest/10 text-forest",
  coral: "bg-coral/10 text-coral",
  accent: "bg-accent/10 text-accent",
};

const dotColorMap: Record<string, string> = {
  primary: "bg-primary",
  sky: "bg-sky",
  forest: "bg-forest",
  coral: "bg-coral",
  accent: "bg-accent",
};

const PrimarySyllabus = () => {
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
          <div className="text-center mb-10">
            <span className="inline-block bg-accent/20 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-3">
              Primary Education
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              CBSE Primary Syllabus 2025–26 (Class 1 to 5)
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The CBSE curriculum for Classes 1 to 5 focuses on building a strong
              academic foundation and promoting conceptual clarity, creativity,
              critical thinking, and holistic development.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {classSyllabi.map((syllabus) => (
              <AccordionItem
                key={syllabus.id}
                value={syllabus.id}
                className="bg-background rounded-xl border border-border px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-5">
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-10 h-10 rounded-lg ${colorMap[syllabus.color]} flex items-center justify-center font-bold text-sm`}
                    >
                      {syllabus.badge}
                    </span>
                    {syllabus.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground mb-6">
                    {syllabus.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {syllabus.subjects.map((subject) => (
                      <div
                        key={subject.name}
                        className="bg-muted/50 rounded-lg p-4"
                      >
                        <h4 className="font-semibold text-foreground mb-2">
                          {subject.name}
                        </h4>
                        <ul className="space-y-1">
                          {subject.topics.map((topic) => (
                            <li
                              key={topic}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span
                                className={`w-1.5 h-1.5 ${dotColorMap[syllabus.color]} rounded-full mt-1.5 shrink-0`}
                              />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default PrimarySyllabus;
