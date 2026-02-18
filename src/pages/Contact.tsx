import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Our School",
    content: ( 
      <>  
        NO.45 , Bhakthavachallam avenue, 
        <br />
        Near, James St, Poonamallee,
        <br />
        Chennai, Tamil Nadu - 600056
      </>
    ),
    color: "bg-forest",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "info@srmavericks.com",
    color: "bg-primary",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: (<>+91 9384813886<br />+91 9384813887</>),
    color: "bg-sky",
  },
  {
    icon: Clock,
    title: "Timings",
    content: (
      <>  
        Monday to Friday: 8:30 AM – 6:00 PM 
        <br />
        Saturday & Sunday: 9:00 AM – 5:00 PM
      </>
    ), 
    color: "bg-accent",
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero Image */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, color: "#9CA3AF" }}  
            animate={{ opacity: 1, y: 0, color: "#374151" }}   
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              We’re here to help — get in touch with SR MAVERICKS
            </p>
          </motion.div>
        </div>
      </section>


      {/* Get In Touch */}
      <section className="py-16 md:py-20 bg-card">
        <div className="section-container">
          <h2 className="section-title text-center mb-12">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-muted/50 rounded-xl p-5"
                >
                  <div
                    className={`w-10 h-10 ${card.color} rounded-lg flex items-center justify-center mb-3`}
                  >
                    <card.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{card.title}</h4>
                  <p className="text-muted-foreground text-sm">{card.content}</p>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-full min-h-[300px]"
            >
              <iframe                          
                src="https://www.google.com/maps?q=13.04389176385258,80.10517538875662&z=16&output=embed"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                title="School Location"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-20 bg-muted/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="section-title text-center mb-4">Connect With Us</h2>
            <p className="text-muted-foreground text-center mb-10">
              Fill out the form below and we'll send your inquiry directly to our WhatsApp.
            </p>

            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-lg">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
