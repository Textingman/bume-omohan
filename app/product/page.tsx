import Link from 'next/link';
import { Heart, Users, BookOpen, Phone, CheckCircle, Baby, UserCheck, Star, ArrowRight, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="py-20" style={{ backgroundColor: '#F0FDF9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#CCFBF1', color: '#2D7D6F' }}>
            <Heart className="w-4 h-4" fill="#2D7D6F" />
            The Omohan Care Navigation Benefit
          </div>
          <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1A4A42' }}>
            Expert care support for every employee.
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10" style={{ color: '#4B7A72' }}>
            Omohan gives every employee a dedicated care navigator — a real human expert who helps them find, vet, and access care for their family at every stage of life.
          </p>
          <Link href="/signup" className="inline-block text-white font-bold px-8 py-4 rounded-xl text-lg transition-opacity hover:opacity-90 shadow-lg" style={{ backgroundColor: '#2D7D6F' }}>
            Get Care Support
          </Link>
        </div>
      </section>

      {/* What&apos;s Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1A4A42' }}>What every employee gets</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
              A dedicated care navigator plus access to resources for every caregiving situation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Phone, title: 'Dedicated care navigator', desc: 'Every employee gets a real human navigator — not a chatbot — who learns their family&apos;s needs and provides ongoing support.' },
              { icon: Baby, title: 'Childcare & daycare', desc: 'Finding quality childcare, backup care, after-school programs, and summer camps for children of all ages.' },
              { icon: UserCheck, title: 'Eldercare & senior living', desc: 'Navigating senior living options, in-home care, memory care, and Medicare/Medicaid benefits for aging parents.' },
              { icon: Heart, title: 'Special needs support', desc: 'Resources and advocacy for children and adults with disabilities, developmental differences, or special needs.' },
              { icon: Star, title: 'Mental health resources', desc: 'Connecting employees and their families with therapists, counselors, and mental health support services.' },
              { icon: Users, title: 'Newborn & parental leave', desc: 'Support for new parents navigating leave policies, newborn care, postpartum resources, and childcare planning.' },
              { icon: BookOpen, title: 'Personalized care plans', desc: 'Your navigator researches options, vets providers, and creates a customized care plan for your specific situation.' },
              { icon: Shield, title: 'Crisis & emergency care', desc: 'Immediate support when unexpected caregiving situations arise — available 24/7 for urgent needs.' },
              { icon: ArrowRight, title: 'Ongoing support', desc: 'As your needs change, your navigator adapts your plan. We&apos;re with you for the long haul, not just a one-time call.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl border hover:shadow-md transition-shadow" style={{ borderColor: '#CCFBF1' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#CCFBF1' }}>
                  <item.icon className="w-6 h-6" style={{ color: '#2D7D6F' }} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: '#1A4A42' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20" style={{ backgroundColor: '#F0FDF9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#1A4A42' }}>How care navigation works</h2>
          <p className="text-xl text-center mb-14" style={{ color: '#6B7280' }}>From your first call to ongoing support — Omohan is with you every step of the way.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', icon: Phone, title: 'Connect with your navigator', desc: 'Call, text, or message your dedicated care navigator anytime. They get to know your family and your specific needs.' },
              { step: '2', icon: BookOpen, title: 'Get a personalized care plan', desc: 'Your navigator researches options, vets providers, and creates a customized plan for your situation.' },
              { step: '3', icon: Heart, title: 'Ongoing support & guidance', desc: 'As your needs evolve, your navigator adapts your plan. We&apos;re with you for the long haul.' },
            ].map((step) => (
              <div key={step.step} className="text-center p-8 bg-white rounded-2xl border" style={{ borderColor: '#CCFBF1' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 text-xl font-extrabold text-white" style={{ backgroundColor: '#2D7D6F' }}>
                  {step.step}
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#CCFBF1' }}>
                  <step.icon className="w-6 h-6" style={{ color: '#2D7D6F' }} />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#1A4A42' }}>{step.title}</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer Value */}
      <section className="py-20" style={{ backgroundColor: '#1A4A42' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why employers choose Omohan</h2>
              <p className="text-xl mb-8" style={{ color: '#99F6E4' }}>
                Caregiving responsibilities cost employers billions annually in lost productivity. Omohan helps employees manage care — so they can show up fully at work.
              </p>
              <Link href="/signup" className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl transition-opacity hover:opacity-90" style={{ backgroundColor: '#2D7D6F', color: '#FFFFFF' }}>
                Request a Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { title: 'No cost to the employer', desc: 'Omohan is funded through voluntary employee payroll deduction.' },
                { title: 'Zero IT setup required', desc: 'Employees self-enroll using their unique Employee ID. No integration needed.' },
                { title: 'Immediate access', desc: 'Employees connect with their care navigator from day one of enrollment.' },
                { title: 'Dedicated HR support', desc: 'Our team supports your HR department throughout implementation and beyond.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-5 rounded-2xl" style={{ backgroundColor: 'rgba(45,125,111,0.3)' }}>
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#2D7D6F' }} />
                  <div>
                    <p className="font-bold text-sm text-white mb-1">{item.title}</p>
                    <p className="text-sm" style={{ color: '#CCFBF1' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#F0FDF9' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-14 h-14 mx-auto mb-6" style={{ color: '#2D7D6F' }} fill="#2D7D6F" />
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#1A4A42' }}>Ready to support your employees?</h2>
          <p className="text-xl mb-10" style={{ color: '#4B7A72' }}>Request a proposal and our team will walk you through everything.</p>
          <Link href="/signup" className="inline-block text-white font-bold px-8 py-4 rounded-xl text-lg transition-opacity hover:opacity-90 shadow-lg" style={{ backgroundColor: '#2D7D6F' }}>
            Get Care Support
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
