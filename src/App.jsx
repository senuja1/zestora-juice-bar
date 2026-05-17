import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Leaf,
  Sparkles,
  Zap,
  Clock,
  MapPin,
  Phone,
  ShoppingBag,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  Truck,
  MessageCircle,
  Flame,
  Factory,
  Citrus,
  CupSoda,
  ThermometerSnowflake,
  PackageCheck,
  Star,
} from "lucide-react";

// ─── fade-up helper ───────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const fadeUpView = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroY   = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const imageY  = useTransform(scrollYProgress, [0, 1], [0, -55]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const statsRef  = useRef(null);
  const storyRef  = useRef(null);
  const statsIn   = useInView(statsRef,  { once: true, margin: "-60px" });
  const storyIn   = useInView(storyRef,  { once: true, margin: "-80px" });

  // ─── DATA ────────────────────────────────────────────────────────────────────
  const drinks = [
    {
      name: "Mango Nova",
      desc: "Ripe Alphonso mango, passion fruit, a squeeze of fresh lime, and crushed ice with a tiny sea-salt finish. It tastes like a good day.",
      price: "Rs. 650",
      image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=1200&q=90",
      tag: "Tropical · Vitamin C",
      note: "Bright, thick, sunset-sweet",
      accent: "#ffb347",
    },
    {
      name: "Green Orbit",
      desc: "Green apple, cucumber, a big handful of spinach, mint leaves, and lemon in chilled mineral water. Light enough for 8 AM. Honest enough for every day.",
      price: "Rs. 590",
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=1200&q=90",
      tag: "Detox · Fresh Mint",
      note: "Clean, grounding, morning reset",
      accent: "#7fffb0",
    },
    {
      name: "Berry Nebula",
      desc: "Strawberry, blueberry, banana, real Greek yogurt, and a honey drizzle on top. It's the one people photograph before they drink.",
      price: "Rs. 720",
      image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=1200&q=90",
      tag: "Smoothie · Protein",
      note: "Creamy, soft, post-workout",
      accent: "#ff7eb3",
    },
    {
      name: "Island Pulse",
      desc: "Pineapple, fresh orange, a sharp hit of ginger, and coconut water with ice-cold citrus foam floating on top. You'll feel it in two sips.",
      price: "Rs. 680",
      image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?auto=format&fit=crop&w=1200&q=90",
      tag: "Energy · Hydration",
      note: "Sharp, golden, tropical charge",
      accent: "#ffdc5e",
    },
  ];

  const steps = [
    [Factory,             "The cold bar",           "Stainless counters, visible slicing, cold storage behind glass. You see exactly what goes in."],
    [Citrus,              "We check everything",    "Colour, smell, texture, ripeness — every piece of fruit is checked before the blender gets near it."],
    [ThermometerSnowflake,"Cold-prepped, not lazy", "Nothing sits in sugar water. Fruit is chilled, cut fresh, and stays that way until your order comes in."],
    [CupSoda,             "Blended after you order","We never pre-make. Four minutes after you pay or message us on WhatsApp, it's in your hand."],
  ];

  const gallery = [
    {
      image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=1400&q=90",
      title: "The cold counter",
      caption: "Where every order starts its 4-minute journey.",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1200&q=90",
      title: "Prep station",
      caption: "Open counter. Nothing to hide.",
      span: "",
    },
    {
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=90",
      title: "What goes in",
      caption: "Simple ingredients. All of them real.",
      span: "",
    },
    {
      image: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&w=1200&q=90",
      title: "Morning delivery",
      caption: "Fresh fruit in by 6 AM. Never yesterday's stock.",
      span: "md:col-span-2",
    },
  ];

  const trust = [
    [HeartPulse,   "Built around how you feel",  "Detox, hydration, recovery, energy, creamy smoothie, and low-sugar blends. Pick what your body needs today."],
    [ShieldCheck,  "No surprises on the label",   "Every drink lists its ingredients clearly. Allergen-friendly options always available."],
    [PackageCheck, "Scales with your team",       "Office packs, campus orders, event coolers, weekly detox bundles — we handle the volume."],
    [Truck,        "WhatsApp-first ordering",     "Pre-order, schedule a pickup, get office delivery. Custom sweetness, fast confirmation, zero friction."],
  ];

  const stats = [
    ["0%",   "artificial colors or syrups"],
    ["4 min","average serve time, always"],
    ["18+",  "fresh ingredients every week"],
    ["6",    "signature blends on the menu"],
  ];

  const features = [
    "You choose the sweetness — dry, balanced, or sweet",
    "Office and campus bulk orders with cold-pack delivery",
    "Weekly detox plans on WhatsApp scheduling",
    "Seasonal fruit specials every fortnight",
    "Open prep counter so you always see what's inside",
    "WhatsApp order confirmed in under 3 minutes",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090806] text-white selection:bg-orange-300 selection:text-black">

      {/* ── background ────────────────────────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(255,154,31,.24),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(168,255,72,.16),transparent_28%),linear-gradient(135deg,#090806_0%,#15110d_42%,#050403_100%)]" />
        <div className="absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle_at_center,rgba(255,255,255,.14)_1px,transparent_1px)] bg-[size:22px_22px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
        {/* slow ambient orbs */}
        <motion.div animate={{ scale:[1,1.18,1], opacity:[0.18,0.32,0.18] }} transition={{ duration:9, repeat:Infinity, ease:"easeInOut" }} className="absolute left-[14%] top-[12%] h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />
        <motion.div animate={{ scale:[1,1.14,1], opacity:[0.14,0.26,0.14] }} transition={{ duration:11, repeat:Infinity, ease:"easeInOut", delay:3 }} className="absolute right-[12%] bottom-[18%] h-80 w-80 rounded-full bg-lime-400/15 blur-3xl" />
      </div>

      {/* ── cursor glow ───────────────────────────────────────────────────────── */}
      <div
        className="pointer-events-none fixed z-50 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-300/8 blur-3xl transition-transform duration-75"
        style={{ left: mouse.x, top: mouse.y }}
      />

      {/* ══════════════════════════════════════════════════════════════════════
          NAV
      ══════════════════════════════════════════════════════════════════════ */}
      <nav className="fixed left-1/2 top-5 z-40 flex w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-[#15110d]/75 px-5 py-3 shadow-2xl shadow-black/40 backdrop-blur-2xl">
        <a href="#top" className="flex items-center gap-3">
          <motion.div whileHover={{ rotate: 14, scale: 1.1 }} transition={{ type:"spring", stiffness:320 }} className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-orange-300 to-lime-300 text-black shadow-lg shadow-orange-400/20">
            <Leaf className="h-5 w-5" />
          </motion.div>
          <div>
            <p className="font-black leading-none">Zestora</p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">Cold Press Lab</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.22em] text-white/50 md:flex">
          {["story","menu","process","gallery","visit"].map((item) => (
            <motion.a key={item} href={`#${item}`} whileHover={{ color:"#fed7aa" }} className="capitalize transition">{item}</motion.a>
          ))}
        </div>

        <motion.a href="https://wa.me/94706857171" target="_blank" rel="noreferrer" whileHover={{ scale:1.06 }} whileTap={{ scale:0.97 }} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-black hover:bg-orange-200 transition">
          <MessageCircle className="h-4 w-4" /> Order
        </motion.a>
      </nav>

      {/* ══════════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="top" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-[1fr_1.05fr]">

        <motion.div style={{ y: heroY }}>
          <motion.div {...fadeUp(0)} className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-300/20 bg-orange-300/10 px-4 py-2 text-sm font-bold text-orange-100 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" /> Colombo's freshest cold press bar
          </motion.div>

          <motion.h1 {...fadeUp(0.08)} className="text-[16vw] font-black leading-[0.78] tracking-[-0.12em] md:text-[9vw] lg:text-[7.2vw]">
            RAW FRUIT.
            <motion.span
              className="block bg-gradient-to-r from-orange-200 via-yellow-200 to-lime-200 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200%" }}
            >
              COLD STEEL.
            </motion.span>
          </motion.h1>

          <motion.p {...fadeUp(0.18)} className="mt-8 max-w-xl text-lg leading-relaxed text-white/55 md:text-xl">
            Everything you drink here started as a whole piece of fruit this morning. No shortcuts. No syrup. Just a blender, honest ingredients, and four minutes of your time.
          </motion.p>

          <motion.div {...fadeUp(0.26)} className="mt-10 flex flex-wrap gap-4">
            <motion.a href="#menu" whileHover={{ scale:1.05 }} whileTap={{ scale:0.97 }} className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-300 to-lime-300 px-8 py-4 font-black text-black shadow-2xl shadow-orange-500/20 transition">
              Explore the Bar <ArrowUpRight className="h-5 w-5 transition group-hover:rotate-45" />
            </motion.a>
            <motion.a href="#process" whileHover={{ scale:1.03 }} className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-8 py-4 font-bold text-white backdrop-blur-xl transition hover:bg-white/12">
              How it's made
            </motion.a>
          </motion.div>

          <motion.div {...fadeUp(0.34)} className="mt-9 grid gap-3 sm:grid-cols-3">
            {["No syrup. Ever.", "Done in 4 minutes", "Fresh fruit every morning"].map((item, i) => (
              <motion.div key={item} whileHover={{ y:-5, backgroundColor:"rgba(255,255,255,0.09)" }} transition={{ type:"spring", stiffness:300 }} className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-bold text-white/60 backdrop-blur-xl cursor-default">
                <CheckCircle2 className="mr-2 inline h-4 w-4 text-lime-200" />{item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* hero image cluster */}
        <motion.div {...fadeUp(0.12)} style={{ y: imageY }} className="relative">
          <motion.div
            animate={{ y:[0,-14,0] }}
            transition={{ duration:5.5, repeat:Infinity, ease:"easeInOut" }}
            className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-[#15110d] p-3 shadow-2xl shadow-black/50"
          >
            <div className="grid gap-3 md:grid-cols-[1.2fr_.8fr]">
              <div className="relative min-h-[570px] overflow-hidden rounded-[2.2rem]">
                <motion.img
                  src="https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=1400&q=90"
                  alt="Mango Nova"
                  className="h-full w-full object-cover"
                  whileHover={{ scale:1.04 }}
                  transition={{ duration:0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                <motion.div
                  initial={{ opacity:0, y:-8 }}
                  animate={{ opacity:1, y:0 }}
                  transition={{ delay:0.6 }}
                  className="absolute left-5 top-5 rounded-full bg-orange-300 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-black"
                >
                  Live Blend
                </motion.div>
                <div className="absolute bottom-5 left-5 right-5 rounded-[2rem] border border-white/10 bg-black/45 p-5 backdrop-blur-xl">
                  <p className="text-xs font-bold uppercase tracking-[0.26em] text-orange-200">Today's favourite</p>
                  <h2 className="mt-2 text-4xl font-black tracking-[-0.06em]">Mango Nova</h2>
                  <p className="mt-2 text-sm text-white/55">Mango · passion fruit · lime · crushed ice</p>
                  <div className="mt-4 flex gap-1 text-orange-200">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div key={i} initial={{ scale:0 }} animate={{ scale:1 }} transition={{ delay: 0.8 + i*0.07, type:"spring" }}>
                        <Star className="h-4 w-4 fill-orange-200" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden gap-3 md:grid">
                {gallery.slice(1,3).map((item, i) => (
                  <motion.div key={item.image} whileHover={{ scale:1.03 }} transition={{ duration:0.4 }} className="relative overflow-hidden rounded-[2rem]">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <p className="absolute bottom-4 left-4 text-sm font-black">{item.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* floating badge */}
          <motion.div
            animate={{ y:[0,12,0] }}
            transition={{ duration:4.2, repeat:Infinity, ease:"easeInOut" }}
            className="absolute -left-8 top-28 hidden rounded-3xl border border-white/10 bg-[#15110d]/85 p-4 backdrop-blur-xl md:block"
          >
            <Factory className="mb-2 h-6 w-6 text-orange-200" />
            <p className="text-xs font-black">Open prep bar</p>
            <p className="text-[10px] text-white/45">nothing hidden</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          STATS
      ══════════════════════════════════════════════════════════════════════ */}
      <section ref={statsRef} className="relative mx-auto grid max-w-7xl gap-5 px-6 pb-24 md:grid-cols-4">
        {stats.map(([num, text], i) => (
          <motion.div
            key={text}
            initial={{ opacity:0, y:24 }}
            animate={statsIn ? { opacity:1, y:0 } : {}}
            transition={{ duration:0.6, delay: i*0.1, ease:[0.22,1,0.36,1] }}
            whileHover={{ y:-6 }}
            className="rounded-[2rem] border border-white/10 bg-[#15110d]/70 p-7 backdrop-blur-xl"
          >
            <motion.div
              className="text-5xl font-black tracking-[-0.06em] text-orange-200"
              initial={{ opacity:0, scale:0.7 }}
              animate={statsIn ? { opacity:1, scale:1 } : {}}
              transition={{ duration:0.5, delay: i*0.1+0.2, type:"spring" }}
            >
              {num}
            </motion.div>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-white/40">{text}</p>
          </motion.div>
        ))}
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          STORY
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="story" ref={storyRef} className="relative mx-auto grid max-w-7xl gap-14 px-6 py-28 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity:0, x:-30 }}
          animate={storyIn ? { opacity:1, x:0 } : {}}
          transition={{ duration:0.7, ease:[0.22,1,0.36,1] }}
        >
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-orange-200">Why we exist</p>
          <h2 className="text-5xl font-black leading-[0.88] tracking-[-0.08em] md:text-7xl">
            We got tired of juice bars that weren't really juice bars.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-white/55">
            Every place we walked into used syrup, old fruit, or a pre-made mix that sat in a fridge since Tuesday. So we built something different — visible prep, daily sourcing, and a 4-minute blend that's honest from start to finish.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-white/45">
            No hidden process. No mystery bottles behind the counter. Just fruit, a blender, and people who actually care what goes into your cup.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity:0, x:30 }}
          animate={storyIn ? { opacity:1, x:0 } : {}}
          transition={{ duration:0.7, delay:0.1, ease:[0.22,1,0.36,1] }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {trust.map(([Icon, title, text], i) => (
            <motion.div
              key={title}
              whileHover={{ y:-8, borderColor:"rgba(255,255,255,0.18)" }}
              transition={{ type:"spring", stiffness:280 }}
              className="rounded-[2rem] border border-white/10 bg-[#15110d]/70 p-6 backdrop-blur-xl"
            >
              <Icon className="mb-8 h-8 w-8 text-orange-200" />
              <h3 className="text-xl font-black tracking-[-0.03em]">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          MENU
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="menu" className="relative rounded-t-[3rem] bg-[#eee6d8] px-6 py-28 text-[#15110d]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <motion.p {...fadeUpView(0)} className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-black/45">
                The menu
              </motion.p>
              <motion.h2 {...fadeUpView(0.06)} className="text-6xl font-black leading-[0.85] tracking-[-0.08em] md:text-8xl">
                Every detail sells the drink.
              </motion.h2>
            </div>
            <motion.p {...fadeUpView(0.1)} className="max-w-xl text-xl leading-relaxed text-black/55">
              We wrote these like a chef would describe food — not like a label. Real ingredients, real flavours, real price. Tap the WhatsApp button and it's on its way.
            </motion.p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {drinks.map((drink, i) => (
              <motion.div
                key={drink.name}
                {...fadeUpView(i * 0.08)}
                whileHover={{ y:-14, scale:1.02 }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                transition={{ type:"spring", stiffness:260, damping:22 }}
                className="group overflow-hidden rounded-[2.3rem] bg-[#15110d] p-3 text-white shadow-2xl shadow-black/20 cursor-default"
              >
                <div className="relative h-[360px] overflow-hidden rounded-[1.8rem]">
                  <motion.img
                    src={drink.image}
                    alt={drink.name}
                    className="h-full w-full object-cover"
                    animate={{ scale: hovered === i ? 1.1 : 1 }}
                    transition={{ duration:0.55 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/10" />

                  {/* tag pill */}
                  <motion.div
                    initial={{ opacity:0, x:-8 }}
                    whileInView={{ opacity:1, x:0 }}
                    viewport={{ once:true }}
                    transition={{ delay: 0.2 + i*0.06 }}
                    className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-black backdrop-blur-xl"
                  >
                    {drink.tag}
                  </motion.div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-200">{drink.note}</p>
                    <h3 className="text-3xl font-black tracking-[-0.06em]">{drink.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{drink.desc}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4">
                  <span className="text-xl font-black" style={{ color: drink.accent }}>{drink.price}</span>
                  <motion.a
                    href={`https://wa.me/94706857171?text=Hi, I'd like to order a ${encodeURIComponent(drink.name)}`}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale:1.15, rotate:6 }}
                    whileTap={{ scale:0.93 }}
                    className="grid h-11 w-11 place-items-center rounded-full bg-white text-black transition hover:bg-orange-200"
                  >
                    <ShoppingBag className="h-5 w-5" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          PROCESS
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="process" className="bg-[#eee6d8] px-6 pb-28 text-[#15110d]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <motion.p {...fadeUpView(0)} className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-black/45">
              The process
            </motion.p>
            <motion.h2 {...fadeUpView(0.06)} className="text-5xl font-black leading-[0.88] tracking-[-0.07em] md:text-7xl">
              From morning crate to cold cup.
            </motion.h2>
            <motion.p {...fadeUpView(0.12)} className="mt-6 max-w-xl text-lg leading-relaxed text-black/55">
              We're not hiding anything. Here's exactly what happens between the fruit supplier and your hand.
            </motion.p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([Icon, title, text], i) => (
              <motion.div
                key={title}
                initial={{ opacity:0, y:28 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay: i*0.1, duration:0.6, ease:[0.22,1,0.36,1] }}
                whileHover={{ y:-8, boxShadow:"0 24px 40px -12px rgba(0,0,0,0.18)" }}
                className="rounded-[2.2rem] border border-black/10 bg-white p-7 shadow-sm transition"
              >
                <div className="mb-8 flex items-center justify-between">
                  <motion.div
                    className="grid h-14 w-14 place-items-center rounded-2xl bg-[#15110d] text-orange-200"
                    whileHover={{ rotate:12 }}
                    transition={{ type:"spring", stiffness:300 }}
                  >
                    <Icon className="h-7 w-7" />
                  </motion.div>
                  <span className="text-4xl font-black text-black/10">0{i+1}</span>
                </div>
                <h3 className="text-xl font-black tracking-[-0.03em]">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-black/55">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          GALLERY
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="gallery" className="bg-[#eee6d8] px-6 pb-28 text-[#15110d]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <motion.p {...fadeUpView(0)} className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-black/45">
                Inside Zestora
              </motion.p>
              <motion.h2 {...fadeUpView(0.06)} className="max-w-3xl text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-7xl">
                See it before you visit. Trust it before you order.
              </motion.h2>
            </div>
            <motion.p {...fadeUpView(0.1)} className="max-w-md text-lg leading-relaxed text-black/55">
              Real photos of the prep counter, the ingredients, the cups, and the daily fruit delivery. No stock photography. No filters hiding things.
            </motion.p>
          </div>

          <div className="grid auto-rows-[280px] gap-5 md:grid-cols-4">
            {gallery.map((item, i) => (
              <motion.div
                key={item.image}
                initial={{ opacity:0, y:22 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay: i*0.09, duration:0.6, ease:[0.22,1,0.36,1] }}
                whileHover={{ scale:1.025 }}
                className={`group relative overflow-hidden rounded-[2.2rem] shadow-xl ${item.span}`}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale:1.08 }}
                  transition={{ duration:0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <motion.div
                  initial={{ opacity:0, y:8 }}
                  whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }}
                  transition={{ delay: i*0.09+0.2 }}
                  className="absolute bottom-5 left-5 right-5"
                >
                  <p className="text-xl font-black text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-white/65">{item.caption}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          BRAND / TRUST SECTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#eee6d8] px-6 pb-28 text-[#15110d]">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[3rem] bg-[#15110d] p-6 text-white lg:grid-cols-[1.1fr_.9fr] lg:p-10">
          <div className="relative min-h-[520px] overflow-hidden rounded-[2.3rem]">
            <motion.img
              src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1400&q=90"
              alt="Fresh fruit prep"
              className="h-full w-full object-cover"
              whileHover={{ scale:1.04 }}
              transition={{ duration:0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
            <motion.div
              initial={{ opacity:0, y:16 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.6, delay:0.15 }}
              className="absolute bottom-6 left-6 right-6 rounded-[2rem] bg-black/45 p-5 backdrop-blur-xl"
            >
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange-200">What you see behind the counter</p>
              <h3 className="mt-2 text-4xl font-black tracking-[-0.06em]">Proof, not promises.</h3>
            </motion.div>
          </div>

          <div className="flex flex-col justify-center p-2 md:p-8">
            <motion.p {...fadeUpView(0)} className="mb-6 text-sm font-bold uppercase tracking-[0.28em] text-orange-200">
              Why people keep coming back
            </motion.p>
            <motion.h2 {...fadeUpView(0.06)} className="text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-6xl">
              We earn trust in the first sip.
            </motion.h2>
            <motion.p {...fadeUpView(0.12)} className="mt-8 text-lg leading-relaxed text-white/55">
              Anyone can say they use fresh fruit. We show you the counter. You watch it get made. The result speaks faster than any marketing line.
            </motion.p>
            <div className="mt-8 grid gap-3">
              {features.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity:0, x:-14 }}
                  whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }}
                  transition={{ delay: i*0.07, duration:0.5 }}
                  className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4"
                >
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-orange-200" />
                  <span className="font-bold text-white/70">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          VISIT / CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="visit" className="bg-[#eee6d8] px-6 pb-10 text-[#15110d]">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-gradient-to-br from-orange-300 via-yellow-200 to-lime-300 p-9 md:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-end">
            <motion.div {...fadeUpView(0)}>
              <p className="mb-6 text-sm font-black uppercase tracking-[0.3em] text-black/55">Visit · pre-order · office delivery</p>
              <h2 className="text-6xl font-black leading-[0.84] tracking-[-0.08em] md:text-8xl">
                The cold cup is already waiting for you.
              </h2>
              <p className="mt-6 max-w-lg text-lg font-bold text-black/55">
                Walk in, message ahead on WhatsApp, or request a cold-pack delivery for your office meeting. We make it easy to not have a bad juice day.
              </p>
            </motion.div>

            <motion.div {...fadeUpView(0.1)} className="space-y-4">
              {[
                [MapPin,  "Location",           "Colombo, Sri Lanka"],
                [Clock,   "Open hours",          "Every day — 8 AM to 10 PM"],
                [Phone,   "Phone / WhatsApp",    "070 685 7171"],
              ].map(([Icon, label, value]) => (
                <motion.div
                  key={label}
                  whileHover={{ scale:1.02 }}
                  className="flex items-center gap-4 rounded-2xl bg-white/40 px-5 py-4 backdrop-blur-xl"
                >
                  <Icon className="h-5 w-5 flex-shrink-0 text-black" />
                  <div>
                    <p className="font-black text-black">{label}</p>
                    <p className="font-bold text-black/60">{value}</p>
                  </div>
                </motion.div>
              ))}

              <motion.a
                href="https://wa.me/94706857171"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale:1.04 }}
                whileTap={{ scale:0.97 }}
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#15110d] px-8 py-5 text-lg font-black text-white shadow-2xl transition"
              >
                <MessageCircle className="h-5 w-5 text-lime-200" />
                Order on WhatsApp
                <ArrowUpRight className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}