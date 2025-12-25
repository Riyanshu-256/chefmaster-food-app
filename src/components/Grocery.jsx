import { motion } from "framer-motion";

const categories = [
  {
    title: "Fresh Vegetables",
    image:
      "https://i.pinimg.com/736x/4f/c8/33/4fc833a1610d8d04b1d2c7b755f18c12.jpg",
    desc: "Hand-harvested from trusted local farms, our vegetables are sourced daily at peak freshness. Each selection undergoes strict quality checks to preserve natural flavor, essential nutrients, and farm-fresh aroma—bringing vibrant, wholesome produce straight to your kitchen.",
  },
  {
    title: "Seasonal Fruits",
    image:
      "https://i.pinimg.com/736x/a8/ca/0f/a8ca0fd6894db828c12767afb4f3e2f1.jpg",
    desc: "Carefully picked at the perfect stage of ripeness, our seasonal fruits deliver unmatched sweetness, juiciness, and natural goodness. Sourced directly from orchards, they ensure superior taste, freshness, and nutritional value in every bite.",
  },
  {
    title: "Organic Staples",
    image:
      "https://i.pinimg.com/736x/08/6b/7b/086b7b4b4af32cbebc1c8f0345116711.jpg",
    desc: "Our organic staples include premium grains, lentils, and pulses cultivated using sustainable farming practices. Free from harmful chemicals and preservatives, these essentials offer purity, rich flavor, and dependable quality for everyday cooking.",
  },
  {
    title: "Dairy & Bakery",
    image:
      "https://i.pinimg.com/1200x/06/f3/bd/06f3bdb3cd0b9a2cc6a990cb6cabea40.jpg",
    desc: "Experience daily-fresh dairy and bakery essentials made from high-quality ingredients. From farm-fresh milk to freshly baked bread and treats, every item is crafted to deliver authentic taste, softness, and nutritional balance.",
  },
  {
    title: "Premium Groceries",
    image:
      "https://i.pinimg.com/736x/7d/5a/f2/7d5af281a196dbba967a6b5f7ae9cbc2.jpg",
    desc: "Discover a refined selection of imported, gourmet, and specialty grocery products. Carefully curated for discerning tastes, our premium range elevates everyday meals with superior ingredients, global flavors, and exceptional quality.",
  },
];

export default function GroceryPage() {
  return (
    <section className="bg-linear-to-b from-slate-50 to-white py-28">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">
            Fresh <span className="text-emerald-600">Grocery</span> Market
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Explore thoughtfully curated grocery categories designed for
            quality, freshness, and convenience.
          </p>
        </div>

        {/* Category Sections */}
        <div className="space-y-28">
          {categories.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-14 items-center ${
                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[420px] w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-4xl font-bold mb-6">{item.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
