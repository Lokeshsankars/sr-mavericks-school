import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&auto=format&fit=crop&q=80"
          alt="Children learning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-secondary/20 blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="section-container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="text-primary font-semibold text-lg mb-4">
            Nursery & Primary School
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            A joyful space where young minds{" "}
            <span className="text-primary">grow</span> with confidence and curiosity
          </h1>
          
          <p className="text-white/80 text-lg mb-8 max-w-xl">
            At SR MAVERICKS, we believe early education should be nurturing,
            joyful, and meaningful. Our approach focuses on emotional safety,
            curiosity-driven learning, and individual attention.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 shadow-lg hover:shadow-xl transition-all"
              >
                Enquire Now
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/50 text-white bg-white/10 hover:bg-white/20 font-semibold text-lg px-8 backdrop-blur-sm"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
