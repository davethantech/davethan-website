import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CtaBlock } from '@/components/shared/CtaBlock';

export const metadata = {
  title: 'Careers | Davethan Technologies Limited',
  description: 'Join the Davethan Technologies team — explore open positions and help us deliver world-class IT solutions.',
};

const openRoles = [
  { title: 'IT Support Engineer', type: 'Full-Time', location: 'Chelmsford, UK', dept: 'Engineering' },
  { title: 'Cybersecurity Analyst', type: 'Full-Time', location: 'Remote (UK)', dept: 'Security' },
  { title: 'Cloud Infrastructure Engineer', type: 'Contract', location: 'Remote', dept: 'Cloud' },
  { title: 'Business Development Manager', type: 'Full-Time', location: 'Abuja, Nigeria', dept: 'Sales' },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="py-28 bg-[#070933] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase">JOIN OUR TEAM</span>
              <h1 className="text-5xl lg:text-6xl font-space font-bold text-white leading-[1.1]">
                Build your career with <span className="text-cyan-400">Davethan</span>
              </h1>
              <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
                We're always looking for talented people who are passionate about technology and driven to make a difference for our clients.
              </p>
            </div>
            <div className="flex-1 h-[380px] bg-white/5 rounded-2xl border border-white/10" />
          </div>
        </section>

        {/* WHY WORK WITH US */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase block mb-2">WHY DAVETHAN</span>
              <h2 className="text-4xl font-space font-bold text-[#070933]">Why work with us?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Growth Opportunities', desc: 'We invest in training, certifications, and career development for every team member.' },
                { title: 'Flexible Working', desc: 'We offer hybrid and remote-first options that respect your lifestyle.' },
                { title: 'Diverse Culture', desc: 'Our team spans the UK and Nigeria, bringing rich perspectives to every project.' },
                { title: 'Real Impact', desc: 'You\'ll work directly with clients and see the tangible results of your contributions.' },
                { title: 'Competitive Pay', desc: 'We offer market-rate compensation with performance-based incentives.' },
                { title: 'Supportive Team', desc: 'A collaborative environment where everyone\'s ideas are heard and valued.' },
              ].map((b) => (
                <div key={b.title} className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full mb-5" />
                  <h3 className="font-bold text-[#070933] mb-2">{b.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OPEN ROLES */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-cyan-500 font-bold tracking-widest text-xs uppercase block mb-2">OPEN POSITIONS</span>
              <h2 className="text-4xl font-space font-bold text-[#070933]">Current Openings</h2>
            </div>
            <div className="space-y-4">
              {openRoles.map((role) => (
                <div key={role.title} className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white border border-gray-100 rounded-xl px-8 py-6 hover:shadow-md hover:border-cyan-200 transition-all">
                  <div className="space-y-1">
                    <h3 className="font-space font-bold text-[#070933] text-lg">{role.title}</h3>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full font-semibold">{role.dept}</span>
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">{role.type}</span>
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">📍 {role.location}</span>
                    </div>
                  </div>
                  <button
                    id={`apply-${role.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="shrink-0 bg-gradient-to-r from-cyan-400 to-[#bff9ea] text-[#0a0d53] font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity text-sm"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>

            {/* GENERAL APPLICATION FORM */}
            <div className="mt-20 bg-gray-50 rounded-2xl p-10 border border-gray-100">
              <h3 className="text-3xl font-space font-bold text-[#070933] mb-2">Don't see the right role?</h3>
              <p className="text-gray-600 text-sm mb-8">Send us your CV and we'll keep it on file for future opportunities.</p>
              <form className="space-y-4 max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input id="career-name" type="text" placeholder="Full Name" required className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-cyan-400" />
                  <input id="career-email" type="email" placeholder="Email Address" required className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-cyan-400" />
                </div>
                <input id="career-position" type="text" placeholder="Position of Interest" className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-cyan-400" />
                <textarea id="career-message" rows={4} placeholder="Tell us about yourself..." className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-cyan-400 resize-none" />
                <button id="career-submit" type="submit" className="bg-gradient-to-r from-cyan-400 to-[#bff9ea] text-[#0a0d53] font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity">
                  Submit Application &rarr;
                </button>
              </form>
            </div>
          </div>
        </section>

        <CtaBlock />
      </main>
      <Footer />
    </div>
  );
}
