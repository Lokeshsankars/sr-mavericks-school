import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Eye, Target, GraduationCap, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-secondary/20 to-primary/10">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About SR MAVERICKS
            </h1>
            <p className="text-lg text-muted-foreground">
              Nurturing young minds since 2012
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24 bg-card">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SR MAVERICKS School was established in the year <strong className="text-foreground">2012</strong> by{" "}
                <strong className="text-foreground">Dr. K. Sumathi (MBA, MPhil, PhD)</strong>. Backed by the{" "}
                <strong className="text-foreground">SRN Industrial Corporation</strong> for over a decade, the school
                stands as a centre of academic excellence and holistic development.
              </p>
              <p>
                At SR MAVERICKS, we are committed to widening intellectual horizons,
                nurturing discipline, and instilling high ideals that contribute to the
                total personality development of every child.
              </p>
              <p>
                We constantly work to transform young learners into confident and
                competent individuals with strong theoretical knowledge, practical
                exposure, and social responsibility — preparing them for higher
                education and life beyond classrooms.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl" />
              <img
                src="assets/founder.jpeg"
                alt="Dr. K. Sumathi"
                className="relative rounded-2xl shadow-xl w-500px h-[500px] object-cover justify-center mx-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-2">Our Founder</h2>
              <h3 className="text-2xl text-primary font-semibold mb-1">Dr. K. Sumathi</h3>
              <p className="text-muted-foreground mb-6">MBA, MPhil, PhD</p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Dr. K. Sumathi envisioned SR MAVERICKS as an institution that balances
                academic excellence with moral values. Her leadership emphasizes
                integrity, innovation, and inclusivity, ensuring that every child
                receives an education rooted in values and future readiness.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a strong belief in education as a tool for social transformation,
                she continues to guide the institution towards excellence and
                community impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-card">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To move towards new horizons by creating a harmonious society through
                value-based education and integral formation of self, rooted in
                equality, justice, love, truth, unity, and peace.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-8"
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To help every child grow confidently, creatively, morally, and
                socially. We strive to provide opportunities that enable children
                to unlock their potential, embrace joyful learning, and become
                inquisitive lifelong learners.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="section-container">
          <h2 className="section-title text-center mb-12">
            Why Choose SR MAVERICKS?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Academic Excellence",
                description: "Strong foundations through structured and inquiry-based learning.",
                color: "bg-sky",
              },
              {
                icon: Users,
                title: "Holistic Development",
                description: "Focus on emotional, social, physical, and moral growth.",
                color: "bg-forest",
              },
              {
                icon: Heart,
                title: "Value-Based Education",
                description: "Education rooted in ethics, empathy, and responsibility.",
                color: "bg-coral",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 shadow-md text-center"
              >
                <div
                  className={`w-16 h-16 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
