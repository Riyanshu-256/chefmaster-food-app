import { motion } from "framer-motion";

const features = [
  {
    title: "Precision Delivery",
    desc: "Smart routing and preparation workflows ensure every meal reaches you hot, fresh, and right on time.",
  },
  {
    title: "Farm-to-Fork Sourcing",
    desc: "We work directly with trusted local Bokaro growers to source fresh, seasonal, and responsibly grown ingredients.",
  },
  {
    title: "Chef-Led Standards",
    desc: "Every recipe is designed, tested, and refined by experienced chefs to meet consistent quality benchmarks.",
  },
  {
    title: "Human Support",
    desc: "Real people, real help. Our support team is available 24/7 to assist you without automated bots.",
  },
];

const About = () => {
  return (
    <div className="bg-[#F8FAFC] text-slate-900 antialiased font-sans">
      {/* ================= HERO ================= */}
      <section className="max-w-[1300px] mx-auto px-6 pt-20 md:pt-28 pb-24 md:pb-32 grid lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-10"
        >
          <h1 className="text-6xl md:text-[5.5rem] font-black leading-[0.9] tracking-tighter">
            ChefMaster: Where Precision Creates Excellence <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-red-600">
              Delivered with purpose.
            </span>
          </h1>

          <p className="text-xl text-slate-500 max-w-xl leading-relaxed font-medium">
            ChefMaster is a chef-driven restaurant brand from Bokaro, built on
            precision, freshness, and respect for food. We combine culinary
            expertise with operational discipline to deliver restaurant-quality
            meals consistently at your doorstep.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute -inset-6 bg-orange-100/60 rounded-[4rem] -rotate-3 -z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
            alt="ChefMaster Kitchen"
            className="w-full h-[420px] md:h-[600px] object-cover rounded-[3.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)]"
          />
        </motion.div>
      </section>

      {/* ================= YEARS OF EXCELLENCE ================= */}
      <section className="max-w-[1300px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* EXPERIENCE (UPDATED TO MATCH ORDERS DELIVERED STYLE) */}
          <div
            className="md:col-span-2 bg-white rounded-[3rem] p-12
  flex flex-col justify-center items-center text-center
  shadow-[0_20px_60px_rgba(0,0,0,0.12)]
  hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)]
  transition-all duration-500 hover:-translate-y-2"
          >
            {/* NUMBER */}
            <h2 className="text-5xl font-black text-slate-900">
              05<span className="text-orange-500 text-3xl">+</span>
            </h2>

            {/* LABEL */}
            <p className="text-slate-500 font-bold uppercase tracking-[0.25em] text-[10px] mt-3">
              Years of Operational Excellence
            </p>
          </div>

          {/* ORDERS DELIVERED */}
          <div
            className="bg-white rounded-[3rem] p-12 flex flex-col justify-center items-center text-center
      shadow-[0_20px_60px_rgba(0,0,0,0.12)]
      hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)]
      transition-all duration-500 hover:-translate-y-2"
          >
            <h2 className="text-5xl font-black text-slate-900">
              50K<span className="text-orange-500 text-3xl">+</span>
            </h2>

            <p className="text-slate-500 font-bold uppercase tracking-[0.25em] text-[10px] mt-3">
              Orders Delivered
            </p>
          </div>

          {/* APP STORE RATING */}
          <div
            className="bg-white rounded-[3rem] p-12 flex flex-col items-center justify-center text-center
      shadow-[0_20px_60px_rgba(0,0,0,0.12)]
      hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)]
      transition-all duration-500 hover:-translate-y-2"
          >
            <h2 className="text-5xl font-black text-slate-900">4.8 ⭐</h2>

            <p className="text-slate-500 font-bold uppercase tracking-[0.25em] text-[10px] mt-3">
              App Store Rating
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="relative max-w-[1300px] mx-auto px-6 py-32">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-400/10 blur-[120px] rounded-full" />
        </div>

        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
            The system behind the{" "}
            <span className="text-orange-500">flavor.</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            ChefMaster is engineered like a restaurant and operated like a
            system — ensuring quality, speed, and consistency at scale.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="
          group relative rounded-[2.8rem] p-px
          bg-linear-to-br from-orange-400/40 via-transparent to-slate-200
          hover:scale-[1.03]
          transition-all duration-500
        "
            >
              {/* Card body */}
              <div
                className="
            h-full rounded-[2.7rem] p-10
            bg-white/80 backdrop-blur-xl
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            group-hover:shadow-[0_30px_90px_rgba(0,0,0,0.18)]
            transition-all duration-500
          "
              >
                {/* Icon Orb */}
                <div
                  className="
              w-16 h-16 mb-8 rounded-2xl
              bg-linear-to-br from-orange-400 to-orange-600
              text-white text-3xl flex items-center justify-center
              shadow-lg
              group-hover:scale-90
              transition-transform duration-500
            "
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h4 className="text-2xl font-black mb-4 text-slate-900">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
