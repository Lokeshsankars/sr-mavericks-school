import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import CurriculumCards from "@/components/CurriculumCards";
import ProgrammeTabs from "@/components/ProgrammeTabs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Play, Quote } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const testimonials = [
  {
    text: "Choosing SR MAVERICKS for my child has been one of the best decisions we've made. The teachers are caring, creative, and deeply invested in every child's growth. My child looks forward to school every single day.",
    name: "Sameera",
  },
  {
    text: "SR MAVERICKS provides a warm and structured environment where children feel safe to explore, ask questions, and grow. The balance between academics and creativity is excellent.",
    name: "Arvind K.",
  },
  {
    text: "The teachers go beyond textbooks and focus on values, confidence, and communication. We've seen a remarkable change in our child's social and emotional development.",
    name: "Priya R.",
  },
];

const galleryImages = [
  "assets/gallery-1.jpeg",
  "assets/gallery-2.jpeg",
  "assets/gallery-3.jpeg",
  "assets/gallery-4.jpeg",
  "assets/gallery-5.jpeg",
  "assets/gallery-6.jpeg",
  "assets/classroom-1.jpeg",
  "assets/care-2.jpeg",
];

const faqs = [
  {
    question: "How is the SR MAVERICKS curriculum different from others?",
    answer:
      "Our curriculum focuses on holistic development by blending academics, creativity, emotional intelligence, and life skills. Learning is inquiry-based, child-centered, and age-appropriate.",
  },
  {
    question: "Does the school provide transport facilities?",
    answer:
      "Yes, safe and reliable transport facilities are available on selected routes, following strict safety and supervision standards.",
  },
  {
    question: "What is the background of the teachers?",
    answer:
      "Our educators are qualified, trained in early childhood and primary education, and continuously upskilled to meet modern teaching standards.",
  },
];

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Special Care Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Special Care for Every Child
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                At SR MAVERICKS, we believe early education should be nurturing,
                joyful, and meaningful. Our approach focuses on emotional safety,
                curiosity-driven learning, and individual attention.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
              <img
                src="assets/care-1.jpeg"
                alt="Children Learning"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>

          {/* About Grid */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-coral/30 rounded-full blur-lg" />
              <img
                src="assets/classroom-1.jpeg"
                alt="Classroom Learning"
                className="relative rounded-xl shadow-lg w-full h-[280px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                About SR MAVERICKS
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                SR MAVERICKS is a nurturing learning centre dedicated to building
                strong foundations for young learners. We focus on holistic
                development by blending academics, creativity, and life skills.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our school environment encourages confidence, collaboration,
                and kindness — helping children grow into capable and
                compassionate individuals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-sunshine/40 rounded-full blur-lg" />
              <img
                src="assets/care-2.jpeg"
                alt="Outdoor Play"
                className="relative rounded-xl shadow-lg w-full h-[280px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Cards */}
      <CurriculumCards />

      {/* Programme Tabs */}
      <ProgrammeTabs />

      {/* Holistic Gallery */}
      <section className="py-16 md:py-24 bg-card">
        <div className="section-container">
          <h2 className="section-title text-center mb-12">Holistic Environment</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <motion.img
                key={index}
                src={img}
                alt={`School gallery ${index + 1}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`rounded-xl shadow-md w-full h-[180px] md:h-[200px] object-cover hover:scale-105 transition-transform ${
                  index % 3 === 0 ? "rotate-[-2deg]" : index % 3 === 2 ? "rotate-[2deg]" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-card rounded-2xl p-6 shadow-xl flex justify-center">
                <img
                  src="assets/founder.jpeg"
                  alt="Founder"
                  className="w-[240px] sm:w-[260px] md:w-[280px] h-auto object-cover rounded-xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Founder's Message
              </h2>
              <p className="text-primary font-medium mb-4">
                Warm wishes to our parents, educators, students, and the entire
                SR MAVERICKS family as we step into a new year together.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Education is constantly evolving, and 2026 invites us to think
                differently, act compassionately, and prepare our children for
                a future shaped by innovation and humanity. At SR MAVERICKS,
                we remain committed to nurturing confident learners who are
                curious, resilient, and kind.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To our dear students — learning is not just about finding answers,
                but about asking meaningful questions. Be explorers, be thinkers,
                and never hesitate to shape the world around you with courage
                and creativity.
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">Mr. S. Founder</p>
                <p className="text-muted-foreground text-sm">Founder & Managing Director</p>
                <p className="text-primary text-sm font-medium">SR MAVERICKS</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-card">
        <div className="section-container">
          <h2 className="section-title text-center mb-12">
            What Parents Say About Us
          </h2>

          <div className="max-w-3xl mx-auto">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-muted/50 rounded-2xl p-8 md:p-10 relative"
            >
              <Quote className="absolute top-6 left-6 h-10 w-10 text-primary/20" />
              <p className="text-lg text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonials[activeTestimonial].text}"
              </p>
              <p className="text-primary font-semibold">
                — {testimonials[activeTestimonial].name}
              </p>
            </motion.div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeTestimonial === index ? "bg-primary" : "bg-border"
                  }`}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campus Video */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="section-title">Our School Campus</h2>
            <p className="section-subtitle mx-auto">
              Take a glimpse into life at SR MAVERICKS through our campus videos
              and school activities.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/YddZRIHqD_A?rel=0"
                title="SR Mavericks Campus Tour"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="py-16 md:py-24 bg-card">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Any Question? We Got You
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Here are answers to some of the most common questions parents ask
                about SR MAVERICKS. If you need more details, feel free to reach out
                to our admissions team.
              </p>
              <img
                src="assets/faq-image.png"
                alt="Happy children learning"
                className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
              />
            </div>

            {/* Right - Accordion */}
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-muted/50 rounded-xl px-6 border-none"
                  >
                    <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-8 text-center lg:text-left">
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
