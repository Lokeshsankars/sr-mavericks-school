import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Layout from "@/components/Layout";

const galleryImages = [
  {
    src: "assets/care-1.jpeg",
    alt: "Children in classroom",
    category: "classroom",
  },
  {
    src: "assets/classroom-1.jpeg",
    alt: "Children in classroom",
    category: "classroom",
  },
  {
    src: "assets/gallery-2.jpeg",
    alt: "Learning together",
    category: "classroom",
  },
  {
    src: "assets/gallery-1.jpeg",
    alt: "Children playing",
    category: "activities",
  },
  {
    src: "assets/gallery-3.jpeg",
    alt: "children engaged in physical activity",
    category: "activities",
  },
  {
    src: "assets/care-2.jpeg",
    alt: "children engaged in physical activity",
    category: "activities",
  },
  {
    src: "assets/gallery-4.jpeg",
    alt: "child playing with blocks",
    category: "activities",
  },
  {
    src: "assets/gallery-5.jpeg",
    alt: "children engaged in art activity",
    category: "activities",
  },
  {
    src: "assets/gallery-6.jpeg",
    alt: "children participating in prayer activity",
    category: "activities",
  },
  {
    src: "assets/gallery-7.jpeg",
    alt: "child playing with blocks",
    category: "classroom",
  },
  {
    src: "assets/ad-1.png",
    alt: "Annual Day stage performance by students",
    category: "annual day",
  },
  {
    src: "assets/ad-2.png",
    alt: "Students performing dance during Annual Day",
    category: "annual day",
  },
  {
    src: "assets/ad-3.png",
    alt: "Annual Day cultural program highlights",
    category: "annual day",
  },
  {
    src: "assets/ad-4.png",
    alt: "Annual Day Fancy Dress Event",
    category: "annual day",
  },
  {
    src: "assets/ad-5.png",
    alt: "Students performing dance",
    category: "annual day",
  },
  {
    src: "assets/ad-6.png",
    alt: "Fancy dress competition on Annual Day",
    category: "annual day",
  },
  {
    src: "assets/ad-7.png",
    alt: "Child giving speech on Annual Day",
    category: "annual day",
  },
  {
    src: "assets/ad-8.png",
    alt: "Child giving speech on Annual Day",
    category: "annual day",
  },
  {
    src: "assets/ad-9.png",
    alt: "child giving speech on Annual Day",
    category: "annual day",
  },
  {
    src: "assets/ad-10.png",
    alt: "Chief Guest addressing audience at Annual Day",
    category: "annual day",
  },
  {
    src: "assets/ad-11.png",
    alt: "Founder welcoming guests at Annual Day",
    category: "annual day",
  },
  {
    src: "assets/ad-12.png",
    alt: "Founder welcoming guests at Annual Day",
    category: "annual day",
  }
];

const categories = ["all", "classroom", "activities", "annual day"];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-sunshine/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-coral/20 rounded-full blur-3xl" />
        <div className="section-container text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Our <span className="text-primary">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A glimpse into the vibrant life at SR MAVERICKS – where learning meets fun!
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-muted/30">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold capitalize transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                    : "bg-card text-foreground hover:bg-primary/10 border border-border hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16">
        <div className="section-container">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-4">
                    <div className="bg-primary/90 p-3 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110">
                      <ZoomIn className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-background opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <p className="text-sm font-medium truncate">{image.alt}</p>
                    <span className="text-xs text-background/80 capitalize">{image.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 p-2 bg-background/20 rounded-full hover:bg-background/40 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6 text-background" />
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
