import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Step 1: Enquiry or Appointment",
    content: (
      <>
        <p className="text-muted-foreground mb-4">
          For enquiries or to schedule an appointment, please contact us using
          the details below:
        </p>
        <div className="bg-primary/10 rounded-xl p-4 space-y-2">
          <p className="flex items-center gap-2 text-foreground">
            <Mail className="h-4 w-4 text-primary" />
            <strong>info@srmavericks.com</strong>
          </p>
          <p className="flex items-center gap-2 text-foreground">
            <Phone className="h-4 w-4 text-primary" />
            <strong>+91 9384813886 <br /> <span> +91 9384813887 </span></strong>
          </p>
        </div>
      </>
    ),
  },
  {
    title: "Step 2: Joining Formalities",
    content: (
      <>
        <p className="text-muted-foreground mb-4">
          Once the admission approval is completed and fees are paid, parents
          are required to submit the following documents:
        </p>
        <ul className="space-y-2">
          {[
            "Student's personal details",
            "Copy of Passport (for foreign nationals) or Aadhaar Card (for Indian nationals)",
            "Copy of Birth Certificate",
            "Signed consent forms",
            "Medical details of the child",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle2 className="h-5 w-5 text-forest flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
];

const additionalInfo = [
  "Admissions are confirmed only after verification of documents.",
  "Seat availability is limited and offered on a first-come basis.",
  "Parents are encouraged to visit the campus before confirmation.",
  "Orientation sessions are conducted for parents and students.",
  "Age-appropriate placement is ensured for every child.",
];

const Admissions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/20 to-accent/10">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Admissions
            </h1>
            <p className="text-lg text-muted-foreground">
              Begin your child's learning journey with SR MAVERICKS
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
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Admissions at SR MAVERICKS
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At SR MAVERICKS, we believe in nurturing confident, capable learners
                by preparing children for a dynamic and evolving future. Our approach
                focuses on holistic development, encouraging curiosity, independence,
                and a lifelong love for learning.
              </p>
              <p>
                While most students begin their schooling at the start of the academic
                year, we understand that this may not always be possible for every
                family. Subject to seat availability, admissions are accepted
                throughout the year.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Eligibility</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SR MAVERICKS follows a non-discriminatory admissions policy. We do not
                differentiate based on race, religion, colour, gender, or national
                origin.
              </p>
              <p>
                Admissions are offered in line with our capacity to provide appropriate
                learning support and maintain an enriching educational environment for
                every child.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 md:py-20 bg-card">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-foreground mb-4"
            >
              Admissions Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground leading-relaxed mb-10"
            >
              Our admissions process is designed to be transparent, welcoming, and
              inclusive. Students are considered for admission when it is determined
              that the school can effectively meet their educational and
              developmental needs.
            </motion.p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-muted/50 rounded-2xl p-6"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  {step.content}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Additional Information
            </h2>
            <ul className="space-y-3">
              {additionalInfo.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We invite you to connect with us and explore how SR MAVERICKS can
              support your child's growth and learning journey.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
              >
                Contact Admissions Team
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;
