const stats = [
  ["2015", "Founded"],
  ["100+", "Completed Projects"],
  ["100 MW+", "Large Project Experience"],
  ["360°", "Energy Solutions"],
];

const services = [
  ["Owner’s Engineering", "Feasibility, vendor selection, execution supervision and commissioning support."],
  ["Detailed Engineering", "Solar PV design, drawings, BOQ, technical review and design vetting."],
  ["Project Management", "Procurement monitoring, execution coordination, quality checks and liaisoning."],
  ["Asset Management", "Generation analysis, O&M supervision, health checks, thermal inspection and IV curve testing."],
  ["Power Advisory", "PPA support, renewable power sourcing, open access consulting and ROI analysis."],
  ["Electro-Legal Services", "DISCOM, CEIG and statutory approval support for renewable energy projects."],
];

const projects = [
  ["70 MW", "Cleantech Solar", "DPR for four states"],
  ["50 MW", "Natrinai Green Ventures", "Design cum project management"],
  ["40 MW", "SEA Renewables", "DPR and preliminary design"],
  ["25 MW", "Natrinai Green Energy", "Design cum project management"],
  ["12 MW", "ACG Capsules", "Owner side engineering"],
  ["6 MW", "Adwaith Textiles", "Owner side engineering and project management"],
];

const clients = [
  "Tata Coffee",
  "Hatsun",
  "Exide Industries",
  "Indian Oil Petronas",
  "Dalmia Bharat",
  "Yokohama",
  "ACG Capsules",
  "Southern Railway",
  "Polyhose",
  "KLRF Ltd",
  "Niswin Foods",
  "Shanthi Feeds",
];

export default function Home() {
  return (
    <main className="bg-[#fffaf0] text-[#1f1f1f]">
      <div className="bg-[#0b6f2a] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-6 py-2 text-sm">
          <span>✉ sales@kcsgreen.com</span>
          <span>☎ +91 9597426758</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="KCS Green Energy Solutions" className="h-16 w-auto" />
          </a>

          <nav className="hidden gap-8 font-medium md:flex">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#f7941d] px-5 py-3 font-bold text-white shadow-md"
          >
            Request Consultation
          </a>
        </div>
      </header>

      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-r from-[#fffaf0] via-white to-[#e9f7ec] px-6 py-20"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 font-bold uppercase tracking-widest text-[#f7941d]">
              Solar Advisory Services
            </p>

            <h1 className="text-4xl font-black leading-tight text-[#0b6f2a] md:text-6xl">
              End-to-End Renewable Energy Solutions
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8">
              From feasibility and DPR to execution, commissioning and plant health
              checks — KCS Green Energy Solutions provides reliable renewable energy
              consulting for investors, EPCs and industrial consumers.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-[#0b6f2a] px-7 py-4 font-bold text-white shadow-lg"
              >
                Request Consultation
              </a>
              <a
                href="#projects"
                className="rounded-full border-2 border-[#0b6f2a] px-7 py-4 font-bold text-[#0b6f2a]"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#0b6f2a] p-5 shadow-2xl">
            <div className="grid gap-5 sm:grid-cols-2">
              {stats.map(([number, label]) => (
                <div key={label} className="rounded-3xl bg-white p-8 shadow-md">
                  <div className="text-4xl font-black text-[#0b6f2a]">{number}</div>
                  <div className="mt-3 font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-widest text-[#f7941d]">
            About KCS
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#0b6f2a] md:text-5xl">
            360° Renewable Energy Consulting from Coimbatore
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8">
            KCS Green Energy Solutions provides energy management, design and
            engineering, project management, asset management and electro-legal
            services. The firm supports solar and renewable power projects from
            early-stage feasibility to post-commissioning performance analysis.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-black text-[#0b6f2a]">
                Er. A.D. Thirumoorthy – Founder
              </h3>
              <p className="mt-4 leading-7">
                Former Superintending Engineer, TNEB / Coimbatore, Chief Technical
                Advisor for Indian Wind Power Association and renewable integration
                committee member in Tamil Nadu.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-black text-[#0b6f2a]">
                Er. T. Surendar Kashyap – Co-Founder
              </h3>
              <p className="mt-4 leading-7">
                Post Graduate in Power Electronics from Anna University with solar
                experience across tendering, engineering and commissioning at L&T
                and Mahindra Susten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-widest text-[#f7941d]">
            Services
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#0b6f2a] md:text-5xl">
            Services for EPCs, Investors and Energy Consumers
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, description]) => (
              <div
                key={title}
                className="rounded-3xl border border-green-100 bg-[#fffaf0] p-8 shadow-md"
              >
                <h3 className="text-xl font-black text-[#0b6f2a]">{title}</h3>
                <p className="mt-4 leading-7">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#0b6f2a] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-widest text-[#f7941d]">
            Project Experience
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Selected Completed Projects
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map(([capacity, client, scope]) => (
              <div
                key={client}
                className="rounded-3xl bg-white/10 p-8 shadow-lg ring-1 ring-white/20"
              >
                <div className="text-4xl font-black text-[#f7941d]">
                  {capacity}
                </div>
                <h3 className="mt-4 text-2xl font-bold">{client}</h3>
                <p className="mt-3 text-white/85">{scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-widest text-[#f7941d]">
            Experience Snapshot
          </p>

          <h2 className="mt-3 text-3xl font-black text-[#0b6f2a] md:text-5xl">
            Trusted by Industrial and Renewable Energy Clients
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {clients.map((client) => (
              <div
                key={client}
                className="rounded-2xl bg-white p-5 text-center font-bold shadow-md"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#1f1f1f] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-[#f7941d]">
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Start Your Renewable Energy Project with KCS
            </h2>

            <div className="mt-8 space-y-4 text-white/85">
              <p>#64A1, Kashyap House, Aruna Nagar, Nallampalayam, Coimbatore – 641006</p>
              <p>Email: sales@kcsgreen.com</p>
              <p>Phone: +91 9597426758</p>
              <p>GSTIN: 33ABNPT8547M1ZR</p>
            </div>
          </div>

          <form className="rounded-3xl bg-white p-8 text-[#1f1f1f] shadow-2xl">
            <div className="grid gap-4">
              <input className="rounded-xl border p-4" placeholder="Name" />
              <input className="rounded-xl border p-4" placeholder="Company" />
              <input className="rounded-xl border p-4" placeholder="Email" />
              <input className="rounded-xl border p-4" placeholder="Phone" />
              <textarea
                className="rounded-xl border p-4"
                placeholder="Project requirement"
                rows={4}
              />
              <button
                type="submit"
                className="rounded-xl bg-[#f7941d] px-6 py-4 font-black text-white"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-[#0b6f2a] px-6 py-6 text-center text-sm text-white">
        © {new Date().getFullYear()} KCS Green Energy Solutions. All rights reserved.
      </footer>
    </main>
  );
}
