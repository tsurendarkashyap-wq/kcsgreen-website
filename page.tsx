const services = [
  ['Owner’s Engineering', 'Project feasibility, financial closure support, bid management, vendor finalisation, execution supervision and commissioning support.'],
  ['Detailed Engineering', 'Solar PV plant design, drawing preparation, BOQ generation, technical analysis and drawing vetting.'],
  ['Project Management', 'Procurement monitoring, execution coordination, quality checks, liaisoning and schedule control.'],
  ['Asset Management', 'Generation analysis, O&M supervision, health checks, thermal inspection and IV curve testing.'],
  ['Power Advisory', 'PPA handling, renewable power sourcing, open access consulting, ROI analysis and agreement vetting.'],
  ['Electro-Legal Services', 'DISCOM, CEIG and statutory approval support for renewable energy projects.']
];

const projects = [
  ['70 MW', 'Captive Solar Plant', 'Cleantech Solar', 'DPR for four states'],
  ['50 MW', 'Captive Solar Plant', 'Acciona', 'Load flow study'],
  ['50 MW', 'Captive Use & Sale', 'Natrinai Green Ventures', 'Design cum project management'],
  ['40 MW', 'Solar Plant - Myanmar', 'SEA Renewables', 'DPR and preliminary design'],
  ['25 MW', 'Captive Solar', 'Natrinai Green Energy', 'Design cum project management'],
  ['12 MW', 'Captive Solar', 'ACG Capsules', 'Owner side engineering']
];

const clients = ['Tata Coffee', 'Hatsun', 'Exide Industries', 'Indian Oil Petronas', 'Dalmia Bharat', 'Yokohama', 'ACG Capsules', 'Southern Railway', 'Polyhose Enterprises', 'KLRF Ltd', 'Niswin Foods', 'Shanthi Feeds'];

export default function Home() {
  return (
    <main>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-kcsDark/90 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold tracking-tight">KCS Green Energy Solutions</a>
          <div className="hidden gap-7 text-sm md:flex">
            <a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-kcsDark via-kcsGreen to-emerald-600 pt-28 text-white">
        <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-kcsOrange/30 blur-3xl" />
        <div className="section relative grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-6 flex flex-wrap gap-3"><span className="badge">Engineering</span><span className="badge">Project Management</span><span className="badge">Asset Management</span></div>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">Solar advisory and renewable energy project expertise.</h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">End-to-end energy solutions for investors, developers, EPC contractors and industrial consumers, from feasibility and DPR to execution, commissioning and plant health checks.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-full bg-kcsOrange px-7 py-3 font-bold text-kcsDark shadow-lg">Request Consultation</a>
              <a href="#projects" className="rounded-full border border-white/40 px-7 py-3 font-bold">View Projects</a>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white/12 p-6 shadow-2xl ring-1 ring-white/20">
            <div className="grid grid-cols-2 gap-4">
              {[[2015, 'Founded'], ['60+', 'Completed projects'], ['70 MW+', 'Large project experience'], ['360°', 'Energy solutions']].map(([n, l]) => <div key={String(l)} className="rounded-3xl bg-white p-6 text-kcsDark"><div className="text-3xl font-black text-kcsGreen">{n}</div><div className="mt-2 text-sm font-semibold">{l}</div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="max-w-3xl"><p className="font-bold uppercase tracking-widest text-kcsOrange">About KCS</p><h2 className="mt-3 text-3xl font-black md:text-5xl">360° renewable energy consulting from Coimbatore.</h2><p className="mt-5 text-lg text-slate-700">KCS Green Energy Solutions provides energy management, design and engineering, project management, asset management and electro-legal services. The firm supports solar and renewable power projects from early-stage feasibility to post-commissioning performance analysis.</p></div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card"><h3 className="text-xl font-black">Er. A.D. Thirumoorthy – Founder</h3><p className="mt-3 text-slate-700">Former Superintending Engineer, TNEB / Coimbatore, Chief Technical Advisor for Indian Wind Power Association and renewable integration committee member in Tamil Nadu.</p></div>
          <div className="card"><h3 className="text-xl font-black">Er. T. Surendar Kashyap – Co-Founder</h3><p className="mt-3 text-slate-700">Post Graduate in Power Electronics from Anna University with solar experience across tendering, engineering and commissioning at L&T and Mahindra Susten.</p></div>
        </div>
      </section>

      <section id="services" className="bg-white"><div className="section"><p className="font-bold uppercase tracking-widest text-kcsOrange">Services</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Built for EPCs, investors and energy consumers.</h2><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map(([t,d]) => <div className="card" key={t}><h3 className="text-xl font-black text-kcsGreen">{t}</h3><p className="mt-3 text-slate-700">{d}</p></div>)}</div></div></section>

      <section id="capabilities" className="section"><p className="font-bold uppercase tracking-widest text-kcsOrange">Capabilities</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Engineering tools and field testing capability.</h2><div className="mt-8 flex flex-wrap gap-3">{['PVSyst', 'AutoCAD', 'DIALux', 'ETAP', 'STAAD', 'Fluke Thermal Imager', 'Solmetric 1500V / 30A IV Curve Tracer'].map(x => <span key={x} className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm ring-1 ring-black/5">{x}</span>)}</div></section>

      <section id="projects" className="bg-kcsDark text-white"><div className="section"><p className="font-bold uppercase tracking-widest text-kcsOrange">Project Experience</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Selected completed projects.</h2><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map(([cap,type,client,scope]) => <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/15" key={client}><div className="text-3xl font-black text-kcsOrange">{cap}</div><h3 className="mt-4 text-xl font-bold">{type}</h3><p className="mt-2 text-white/80">{client}</p><p className="mt-4 text-sm text-white/70">{scope}</p></div>)}</div></div></section>

      <section className="section"><p className="font-bold uppercase tracking-widest text-kcsOrange">Experience Snapshot</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Trusted across industrial and renewable energy clients.</h2><div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">{clients.map(c => <div key={c} className="rounded-2xl bg-white p-4 text-center text-sm font-bold shadow-sm ring-1 ring-black/5">{c}</div>)}</div></section>

      <section id="contact" className="bg-gradient-to-br from-kcsGreen to-kcsDark text-white"><div className="section grid gap-10 md:grid-cols-2"><div><p className="font-bold uppercase tracking-widest text-kcsOrange">Contact</p><h2 className="mt-3 text-3xl font-black md:text-5xl">Start your renewable energy project with KCS.</h2><p className="mt-6 text-white/80">#64A1, Kashyap House, Aruna Nagar, Nallampalayam, Coimbatore – 641006</p><p className="mt-3 text-white/80">GSTIN: 33ABNPT8547M1ZR</p></div><form className="rounded-3xl bg-white p-6 text-kcsDark shadow-2xl"><div className="grid gap-4"><input placeholder="Name" className="rounded-xl border p-3"/><input placeholder="Company" className="rounded-xl border p-3"/><input placeholder="Email" className="rounded-xl border p-3"/><input placeholder="Phone" className="rounded-xl border p-3"/><textarea placeholder="Project requirement" rows={4} className="rounded-xl border p-3"/><button type="submit" className="rounded-xl bg-kcsOrange px-6 py-3 font-black">Send Enquiry</button></div></form></div></section>

      <footer className="bg-kcsDark px-6 py-8 text-center text-sm text-white/70">© {new Date().getFullYear()} KCS Green Energy Solutions. All rights reserved.</footer>
    </main>
  );
}
