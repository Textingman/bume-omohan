import Link from 'next/link';
import { Heart, Users, BookOpen, Phone, CheckCircle, Star, Baby, UserCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: '#F0FDF9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#CCFBF1', color: '#2D7D6F' }}>
            <Heart className="w-4 h-4" fill="#2D7D6F" />
            About Omohan
          </div>
          <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1A4A42' }}>
            Caregiving Is Hard.<br />
            <span style={{ color: '#2D7D6F' }}>We Make It Manageable.</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#4B7A72' }}>
            Omohan was founded by caregivers who experienced firsthand how overwhelming it is to balance work and family care responsibilities — and built the support system they wished they'd had.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#1A4A42' }}>Our Mission</h2>
              <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
                73% of employees have caregiving responsibilities — for children, aging parents, or family members with special needs. Yet most employers offer little to no support for these challenges.
              </p>
              <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
                Omohan partners with employers to provide every employee with a dedicated care navigator — a real human expert who helps research options, vet providers, and create personalized care plans.
              </p>
              <p className="text-lg" style={{ color: '#6B7280' }}>
                The result: employees who feel supported, show up fully at work, and stay longer with employers who care about their whole lives.
              </p>
            </div>
            <div className="rounded-2xl p-10" style={{ backgroundColor: '#1A4A42' }}>
              <h3 className="text-2xl font-bold text-white mb-8">The Caregiving Crisis</h3>
              <div className="space-y-6">
                {[
                  { icon: Users, stat: '73%', label: 'of employees have caregiving responsibilities' },
                  { icon: Heart, stat: '$33B', label: 'lost annually to caregiving-related absenteeism' },
                  { icon: Baby, stat: '40%', label: 'reduction in absenteeism with Omohan' },
                  { icon: Star, stat: '98%', label: 'employee satisfaction with care navigation' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#2D7D6F' }}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-extrabold" style={{ color: '#99F6E4' }}>{item.stat}</p>
                      <p className="text-sm" style={{ color: '#CCFBF1' }}>{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Care Navigation Works */}
      <section className="py-20" style={{ backgroundColor: '#F0FDF9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#1A4A42' }}>How Care Navigation Works</h2>
          <p className="text-xl text-center mb-12" style={{ color: '#6B7280' }}>Your dedicated navigator is a real person — not a chatbot — who becomes an expert on your family's needs.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Phone, step: '1', title: 'Connect Anytime', desc: 'Call, text, or message your navigator whenever you need help. No appointments, no waiting rooms.' },
              { icon: BookOpen, step: '2', title: 'Get Expert Guidance', desc: 'Your navigator researches options, vets providers, and creates a personalized care plan for your situation.' },
              { icon: Heart, step: '3', title: 'Ongoing Support', desc: 'As your needs evolve, your navigator adapts your plan. We're with you for the long haul — not just a one-time call.' },
            ].map((item) => (
              <div key={item.step} className="text-center p-8 bg-white rounded-2xl border" style={{ borderColor: '#CCFBF1' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-extrabold text-white" style={{ backgroundColor: '#2D7D6F' }}>
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#CCFBF1' }}>
                  <item.icon className="w-6 h-6" style={{ color: '#2D7D6F' }} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1A4A42' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#1A4A42' }}>Every Type of Care, Covered</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              'Childcare & Daycare Finding', 'Eldercare & Senior Living', 'Special Needs Support',
              'Mental Health Resources', 'Newborn & Parental Leave', 'Crisis & Emergency Care',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl border" style={{ borderColor: '#CCFBF1', backgroundColor: '#F0FDF9' }}>
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#2D7D6F' }} />
                <span className="font-medium text-sm" style={{ color: '#1A4A42' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#1A4A42' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" style={{ color: '#99F6E4' }} fill="#99F6E4" />
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Support Your Employees?</h2>
          <p className="text-xl mb-10" style={{ color: '#99F6E4' }}>Give your team the care support they deserve — and watch productivity, retention, and morale soar.</p>
          <Link href="/signup" className="inline-block text-white font-bold px-10 py-4 rounded-xl text-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#2D7D6F' }}>
            Get Care Support
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
