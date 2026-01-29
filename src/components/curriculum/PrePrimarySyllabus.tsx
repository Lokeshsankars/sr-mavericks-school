import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, Calculator, Globe, Palette } from "lucide-react";

const nurserySyllabus = {
  title: "Nursery Syllabus 2025–26",
  description:
    "The Nursery programme focuses on helping children adjust to the school environment in a safe and joyful way. Learning happens through play, stories, rhymes, and hands-on activities. Children develop early language skills, basic number awareness, and social interaction. Emphasis is placed on motor skill development and creativity. This stage builds confidence and curiosity for future learning.",
  subjects: [
    {
      name: "English & Pre-literacy",
      icon: BookOpen,
      topics: [
        "Pre-writing strokes: lines and curves",
        "Alphabet recognition (A–Z)",
        "Listening to rhymes and simple words",
        "Vocabulary through stories and picture books",
      ],
    },
    {
      name: "Early Mathematics",
      icon: Calculator,
      topics: [
        "Pre-math concepts (big/small, up/down)",
        "Number recognition and counting (1–20)",
        "Basic shapes and patterns",
      ],
    },
    {
      name: "General Awareness / EVS",
      icon: Globe,
      topics: [
        "Myself and my family",
        "Fruits and vegetables",
        "Colours and seasons",
        "Transport and animals",
      ],
    },
    {
      name: "Creative & Motor Skills",
      icon: Palette,
      topics: [
        "Drawing, colouring, clay modelling",
        "Cutting and pasting activities",
        "Outdoor play and movement activities",
      ],
    },
  ],
  footer:
    "Nursery learning emphasises sensory experiences, social interaction, and joyful discovery that prepare children for LKG.",
};

const lkgSyllabus = {
  title: "LKG (Lower Kindergarten) Syllabus 2025–26",
  description:
    "LKG introduces children to structured learning while keeping the process fun and engaging. The curriculum focuses on early literacy, numeracy, and environmental awareness. Children learn through activities, storytelling, art, and group interaction. Communication skills and good habits are gradually developed. This stage strengthens the foundation for academic learning.",
  subjects: [
    {
      name: "English",
      topics: [
        "Pre-writing strokes (standing, sleeping, curved lines)",
        "Capital and small letters (A–Z; a–z)",
        "Phonics and sounds",
        "Simple words and vocabulary building",
      ],
    },
    {
      name: "Mathematics",
      topics: [
        "Counting up to 10",
        "Shapes identification",
        "Comparing groups (more/less)",
        "Positions (inside/outside, above/below)",
      ],
    },
    {
      name: "General Awareness & EVS",
      topics: [
        "About myself and family",
        "People who help us (doctor, teacher, police, etc.)",
        "Transport (road, rail, air)",
        "Safety at home and playground",
        "Seasons: summer, winter, rainy",
      ],
    },
    {
      name: "Environmental Science",
      topics: [
        "Good habits and manners",
        "Living and non-living things",
        "Traffic rules and safety basics",
      ],
    },
    {
      name: "Creative Skills",
      topics: ["Art and craft projects", "Music, dance, and movement activities"],
    },
  ],
  footer:
    "LKG strengthens foundational academic skills while keeping learning playful and engaging for young learners.",
};

const ukgSyllabus = {
  title: "UKG (Upper Kindergarten) Syllabus 2025–26",
  description:
    "UKG prepares children for formal schooling with enhanced language and number skills. The curriculum emphasizes reading readiness, basic writing, and logical thinking. Children explore their surroundings through environmental studies and practical activities. Creativity, confidence, and independence are encouraged. This stage ensures a smooth transition to Class 1.",
  subjects: [
    {
      name: "English",
      topics: [
        "Revision of letter recognition and phonics",
        "Vocabulary extension",
        "Listening, speaking, and basic sentence structure",
        "Storytelling and oral comprehension",
      ],
    },
    {
      name: "Mathematics",
      topics: [
        "Numbers up to 100–200",
        "Basic addition (single digit)",
        "Shapes (square, triangle, rectangle, circle, etc.)",
        "Concepts: big/small, more/less, same/different",
        "Colours and patterns",
      ],
    },
    {
      name: "Environmental Science (EVS)",
      topics: [
        "Introduction to air, water, and sound",
        "Pollution basics",
        "Traffic rules and safety",
        "Living vs non-living things",
        "Transport types (land, water, air)",
      ],
    },
    {
      name: "Hindi",
      topics: [
        "Swara (अ–अ:) and Vyanjan (क–ज्ञ)",
        "Maatra knowledge and simple word formation",
      ],
    },
    {
      name: "Creative Activities",
      topics: [
        "Drawing, colouring, clay work",
        "Rhymes and movement",
        "Role-play and group interaction",
      ],
    },
  ],
  footer:
    "UKG learning emphasises confidence building, fine motor skills, language expression, and readiness for Grade 1 academics.",
};

const teachingApproach = [
  "Play-based and activity-oriented learning",
  "Hands-on experiences, group activities + storytelling",
  "Creative exploration and motor development",
  "Informal assessments and observational progress tracking",
];

const PrePrimarySyllabus = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-10">
            <span className="inline-block bg-secondary/20 text-secondary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-3">
              Pre-Primary
            </span>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              CBSE Pre-Primary Syllabus 2025–26
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The CBSE pre-primary curriculum is designed to provide a strong
              foundation for young learners through play-based, activity-oriented,
              and child-centric learning. CBSE does not conduct formal examinations
              at the pre-primary level—learning is continuous and observation-based.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {/* Nursery */}
            <AccordionItem
              value="nursery"
              className="bg-card rounded-xl border border-border px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-5">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    N
                  </span>
                  {nurserySyllabus.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-muted-foreground mb-6">
                  {nurserySyllabus.description}
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {nurserySyllabus.subjects.map((subject) => (
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
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-primary italic">
                  {nurserySyllabus.footer}
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* LKG */}
            <AccordionItem
              value="lkg"
              className="bg-card rounded-xl border border-border px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-5">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-sky/10 flex items-center justify-center text-sky font-bold text-sm">
                    LKG
                  </span>
                  {lkgSyllabus.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-muted-foreground mb-6">
                  {lkgSyllabus.description}
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {lkgSyllabus.subjects.map((subject) => (
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
                            <span className="w-1.5 h-1.5 bg-sky rounded-full mt-1.5 shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-sky italic">{lkgSyllabus.footer}</p>
              </AccordionContent>
            </AccordionItem>

            {/* UKG */}
            <AccordionItem
              value="ukg"
              className="bg-card rounded-xl border border-border px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-5">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center text-forest font-bold text-sm">
                    UKG
                  </span>
                  {ukgSyllabus.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-muted-foreground mb-6">
                  {ukgSyllabus.description}
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {ukgSyllabus.subjects.map((subject) => (
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
                            <span className="w-1.5 h-1.5 bg-forest rounded-full mt-1.5 shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-forest italic">{ukgSyllabus.footer}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Teaching Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6"
          >
            <h3 className="font-semibold text-foreground mb-3">
              Teaching Approach for Pre-Primary
            </h3>
            <div className="flex flex-wrap gap-3">
              {teachingApproach.map((approach) => (
                <span
                  key={approach}
                  className="bg-background px-4 py-2 rounded-full text-sm text-muted-foreground border border-border"
                >
                  {approach}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrePrimarySyllabus;
