import ScrollReveal from "./components/ScrollReveal";

const NAV = [
  { label: "Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Visit", href: "#visit" },
];

const MARQUEE = [
  "Wok-Fire Pad See Ew",
  "Massaman Short Rib",
  "Green Curry & Thai Basil",
  "Crispy Papaya Salad",
  "Chili-Jam Fried Rice",
  "Coconut Pandan Custard",
];

const DISHES = [
  {
    name: "Khao Soi Chiang Mai",
    kind: "Northern curry noodle",
    note: "Slow-simmered coconut curry, braised chicken, crisp egg noodles, pickled mustard greens.",
    price: "18",
    tag: "House favorite",
  },
  {
    name: "Massaman Short Rib",
    kind: "Wok-fire braise",
    note: "Twelve-hour beef short rib, roasted peanuts, potato, tamarind and warm spice.",
    price: "26",
    tag: "Chef's pick",
  },
  {
    name: "Pad See Ew",
    kind: "Charred rice noodle",
    note: "Wide rice noodles seared over high flame with dark soy, gai lan and egg.",
    price: "17",
  },
  {
    name: "Som Tam Poo",
    kind: "Green papaya salad",
    note: "Shredded green papaya, long bean, tomato, chili and lime pounded to order.",
    price: "14",
    tag: "Spicy",
  },
  {
    name: "Chili-Jam Fried Rice",
    kind: "Wok classic",
    note: "Jasmine rice tossed with nam prik pao, egg, scallion and a squeeze of lime.",
    price: "16",
  },
  {
    name: "Pandan Coconut Custard",
    kind: "To finish",
    note: "Silken steamed custard, toasted coconut, palm-sugar caramel.",
    price: "11",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <ScrollReveal />

      {/* ---------- Header ---------- */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/10 bg-ink/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl font-semibold tracking-tight text-cream">
            Appethaize
          </a>
          <nav className="hidden items-center gap-8 text-sm text-cream-dim sm:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-saffron"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="tel:+16466699353"
            className="rounded-full bg-saffron px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-saffron-deep"
          >
            Reserve
          </a>
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <section
        id="top"
        className="grain relative flex min-h-screen items-center overflow-hidden pt-24"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="hero-glow absolute -left-24 top-10 h-96 w-96 rounded-full bg-saffron/25 blur-3xl" />
          <div className="hero-glow-slow absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-chili/20 blur-3xl" />
          <div className="hero-glow absolute left-1/2 top-1/3 h-72 w-72 rounded-full bg-leaf/15 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-6">
          <p
            className="hero-rise font-body text-sm uppercase tracking-[0.35em] text-saffron"
            style={{ "--rise-delay": "80ms" } as React.CSSProperties}
          >
            Thai Kitchen · Chinatown, NYC
          </p>
          <h1
            className="hero-rise mt-6 max-w-4xl font-display text-6xl font-semibold leading-[0.95] text-cream sm:text-7xl md:text-8xl"
            style={{ "--rise-delay": "180ms" } as React.CSSProperties}
          >
            Bold aromatics,
            <br />
            <span className="text-saffron">wok-fire</span> &amp; slow curries.
          </h1>
          <p
            className="hero-rise mt-8 max-w-xl text-lg leading-relaxed text-cream-dim"
            style={{ "--rise-delay": "300ms" } as React.CSSProperties}
          >
            Appethaize is a neighborhood Thai kitchen on Baxter Street — where
            high-flame woks, pounded-to-order salads and long-simmered curries
            meet the heart of Chinatown.
          </p>
          <div
            className="hero-rise mt-10 flex flex-wrap items-center gap-4"
            style={{ "--rise-delay": "420ms" } as React.CSSProperties}
          >
            <a
              href="#menu"
              className="rounded-full bg-cream px-7 py-3 font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              See the menu
            </a>
            <a
              href="tel:+16466699353"
              className="rounded-full border border-cream/25 px-7 py-3 font-semibold text-cream transition-colors hover:border-saffron hover:text-saffron"
            >
              Call +1 646 669 9353
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Marquee ---------- */}
      <div className="relative border-y border-cream/10 bg-ink-soft py-5">
        <div className="flex overflow-hidden">
          <div className="marquee-track flex shrink-0 items-center gap-10 whitespace-nowrap pr-10">
            {[...MARQUEE, ...MARQUEE].map((item, i) => (
              <span
                key={i}
                className="font-display text-2xl text-cream-dim"
              >
                {item}
                <span className="ml-10 text-saffron">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Story ---------- */}
      <section id="story" className="relative mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div className="reveal">
            <p className="font-body text-sm uppercase tracking-[0.3em] text-saffron">
              Our story
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl">
              Cooked over flame, seasoned by memory.
            </h2>
            <p className="mt-6 leading-relaxed text-cream-dim">
              Every plate at Appethaize starts with the smoke of a screaming-hot
              wok and the pound of a granite mortar. We source aromatics daily,
              balance every dish across sweet, sour, salt and heat, and simmer
              our curries until the spices bloom.
            </p>
            <p className="mt-4 leading-relaxed text-cream-dim">
              It&apos;s the food of Bangkok street stalls and Northern kitchens,
              served just off Canal Street.
            </p>
          </div>

          <div className="reveal" style={{ "--reveal-delay": "140ms" } as React.CSSProperties}>
            <div className="grid grid-cols-2 gap-5">
              {[
                { big: "12h", small: "braised curries" },
                { big: "600°", small: "wok flame" },
                { big: "Daily", small: "market aromatics" },
                { big: "Est.", small: "on Baxter St." },
              ].map((stat) => (
                <div
                  key={stat.small}
                  className="grain relative overflow-hidden rounded-2xl border border-cream/10 bg-ink-raise p-7"
                >
                  <div className="font-display text-4xl font-semibold text-saffron">
                    {stat.big}
                  </div>
                  <div className="mt-2 text-sm uppercase tracking-widest text-cream-dim">
                    {stat.small}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Menu ---------- */}
      <section id="menu" className="relative bg-ink-soft py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-body text-sm uppercase tracking-[0.3em] text-saffron">
                From the kitchen
              </p>
              <h2 className="mt-5 font-display text-4xl font-semibold text-cream sm:text-5xl">
                Signature plates
              </h2>
            </div>
            <p className="max-w-sm text-cream-dim">
              A rotating look at what&apos;s coming out of the wok this week.
              Ask your server about the daily specials.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DISHES.map((dish, i) => (
              <article
                key={dish.name}
                className="reveal group flex flex-col rounded-2xl border border-cream/10 bg-ink-raise p-7 transition-colors hover:border-saffron/50"
                style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-cream">
                      {dish.name}
                    </h3>
                    <p className="mt-1 text-sm uppercase tracking-widest text-cream-dim">
                      {dish.kind}
                    </p>
                  </div>
                  <span className="font-display text-xl text-saffron">
                    ${dish.price}
                  </span>
                </div>
                <p className="mt-5 flex-1 leading-relaxed text-cream-dim">
                  {dish.note}
                </p>
                {dish.tag ? (
                  <span className="mt-6 inline-flex w-fit rounded-full border border-saffron/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-saffron">
                    {dish.tag}
                  </span>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Visit ---------- */}
      <section id="visit" className="relative mx-auto max-w-6xl px-6 py-28">
        <div className="grain relative overflow-hidden rounded-3xl border border-cream/10 bg-ink-raise p-10 sm:p-14">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="reveal">
              <h2 className="text-outline font-display text-5xl font-semibold sm:text-6xl">
                Come hungry.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-cream-dim">
                Walk-ins welcome; larger parties, give us a call. We&apos;re a
                short stroll from the Canal Street trains.
              </p>
              <a
                href="tel:+16466699353"
                className="mt-8 inline-flex rounded-full bg-saffron px-7 py-3 font-semibold text-ink transition-colors hover:bg-saffron-deep"
              >
                Call to reserve
              </a>
            </div>

            <div className="reveal grid gap-6 sm:grid-cols-2" style={{ "--reveal-delay": "140ms" } as React.CSSProperties}>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-saffron">
                  Find us
                </h3>
                <p className="mt-3 leading-relaxed text-cream">
                  75 Baxter Street
                  <br />
                  New York, NY 10013
                  <br />
                  Chinatown
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-widest text-saffron">
                  Hours
                </h3>
                <ul className="mt-3 space-y-1 text-cream">
                  <li>Tue – Thu · 5–10pm</li>
                  <li>Fri – Sat · 5–11pm</li>
                  <li>Sunday · 5–9pm</li>
                  <li className="text-cream-dim">Monday · Closed</li>
                </ul>
              </div>
              <div className="sm:col-span-2">
                <h3 className="text-sm uppercase tracking-widest text-saffron">
                  Contact
                </h3>
                <p className="mt-3 text-cream">
                  <a href="tel:+16466699353" className="hover:text-saffron">
                    +1 646 669 9353
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-cream/10 bg-ink-soft">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-2xl font-semibold text-cream">
              Appethaize
            </p>
            <p className="mt-2 text-sm text-cream-dim">
              Thai Kitchen · 75 Baxter Street, New York
            </p>
          </div>
          <div className="flex gap-8 text-sm text-cream-dim">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-saffron">
                {item.label}
              </a>
            ))}
            <a href="tel:+16466699353" className="hover:text-saffron">
              Call
            </a>
          </div>
        </div>
        <div className="border-t border-cream/10 py-5 text-center text-xs text-cream-dim">
          © {new Date().getFullYear()} Appethaize. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
