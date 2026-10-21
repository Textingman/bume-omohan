import Link from 'next/link';
import { Heart, Phone, BookOpen, Baby, UserCheck, Star, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundColor: '#DFF8F1' }}>
        {/* Organic shape decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-30" style={{ backgroundColor: '#2E9F87' }} />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-20" style={{ backgroundColor: '#0F6B57' }} />
          <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full opacity-15" style={{ backgroundColor: '#2E9F87' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8" style={{ backgroundColor: 'rgba(46,159,135,0.15)', color: '#0F6B57', fontFamily: 'Inter, sans-serif' }}>
              <Heart className="w-4 h-4" fill="#0F6B57" />
              Care Support for Every Employee
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              <span style={{ color: '#174B43', display: 'block' }}>Care Support for Every Family.</span>
              <span style={{ color: '#2E9F87', display: 'block' }}>At Every Stage of Life.</span>
            </h1>

            <p style={{ fontSize: '1.15rem', lineHeight: 1.75, color: '#2C3E3A', marginBottom: '2.5rem', maxWidth: '560px' }}>
              Omohan connects employees with expert care navigators to help manage childcare, eldercare, and every caregiving challenge in between — so they can focus on work and family.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/signup"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#2E9F87', fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
                Get Care Support <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/product"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-colors"
                style={{ border: '2px solid #0F6B57', color: '#0F6B57', fontFamily: 'Inter, sans-serif', fontSize: '1rem', backgroundColor: 'transparent' }}>
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CARE CATEGORIES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Childcare Card */}
            <div className="p-8 rounded-2xl flex items-start gap-6" style={{ backgroundColor: '#DFF8F1' }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(46,159,135,0.2)' }}>
                <Baby className="w-7 h-7" style={{ color: '#0F6B57', strokeWidth: 1.75 }} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '1.25rem', color: '#174B43', marginBottom: '0.5rem' }}>Childcare</h3>
                <p style={{ fontSize: '0.95rem', color: '#2C3E3A', lineHeight: 1.7, marginBottom: '1rem' }}>
                  Find guidance and resources to navigate childcare needs with confidence.
                </p>
                <Link href="/product" className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: '#0F6B57' }}>
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Eldercare Card */}
            <div className="p-8 rounded-2xl flex items-start gap-6" style={{ backgroundColor: '#E8F5EC' }}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(15,107,87,0.15)' }}>
                <UserCheck className="w-7 h-7" style={{ color: '#0F6B57', strokeWidth: 1.75 }} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '1.25rem', color: '#174B43', marginBottom: '0.5rem' }}>Eldercare</h3>
                <p style={{ fontSize: '0.95rem', color: '#2C3E3A', lineHeight: 1.7, marginBottom: '1rem' }}>
                  Get support navigating care for aging parents and loved ones.
                </p>
                <Link href="/product" className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: '#0F6B57' }}>
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW OMOHAN WORKS ── */}
      <section className="py-20" style={{ backgroundColor: '#E8F5EC' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#174B43', marginBottom: '1rem' }}>
              How Omohan works
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#2C3E3A', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
              Getting care support should feel simple. Here&apos;s how it works.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px" style={{ backgroundColor: '#2E9F87', opacity: 0.3 }} />
            {[
              { num: '1', icon: Heart, title: 'Tell us what you need', desc: 'Share your caregiving situation with your dedicated Omohan navigator.' },
              { num: '2', icon: Phone, title: 'Connect with a care navigator', desc: 'Your navigator gets to know your family and researches the best options for your situation.' },
              { num: '3', icon: BookOpen, title: 'Get personalized guidance', desc: 'Receive a customized care plan and ongoing support as your needs evolve.' },
            ].map((step) => (
              <div key={step.num} className="text-center p-8 rounded-2xl bg-white" style={{ border: '1px solid rgba(46,159,135,0.2)' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 text-xl font-bold text-white" style={{ backgroundColor: '#0F6B57', fontFamily: 'Manrope, sans-serif' }}>
                  {step.num}
                </div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DFF8F1' }}>
                  <step.icon className="w-6 h-6" style={{ color: '#0F6B57', strokeWidth: 1.75 }} />
                </div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#174B43', marginBottom: '0.75rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#2C3E3A', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPORT AT EVERY STAGE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: '#174B43', marginBottom: '1rem' }}>
              Support at every stage of life
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#2C3E3A', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              Caregiving needs change over time. Omohan is with your employees through every chapter.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Baby, title: 'Growing families', desc: 'Newborn care, parental leave, and childcare planning.' },
              { icon: Star, title: 'Childcare needs', desc: 'Daycare, after-school programs, and backup care.' },
              { icon: Users, title: 'Family transitions', desc: 'Special needs support, mental health resources, and family changes.' },
              { icon: UserCheck, title: 'Aging parents', desc: 'Senior living, in-home care, and Medicare navigation.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border" style={{ borderColor: '#DFF8F1', backgroundColor: '#FAFFFE' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#DFF8F1' }}>
                  <item.icon className="w-6 h-6" style={{ color: '#0F6B57', strokeWidth: 1.75 }} />
                </div>
                <h3 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#174B43', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#2C3E3A', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMPLOYER BENEFITS ── */}
      <section className="py-20" style={{ backgroundColor: '#174B43' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', color: 'white', marginBottom: '1.25rem' }}>
                Built for employers who care about their people.
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Omohan is a voluntary employee benefit that helps working caregivers manage their responsibilities — so they can show up fully at work.
              </p>
              <Link href="/signup"
                className="inline-block px-7 py-3.5 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#2E9F87', fontFamily: 'Inter, sans-serif' }}>
                Request a Proposal
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { title: 'No cost to the employer', desc: 'Omohan is funded through voluntary employee payroll deduction.' },
                { title: 'Zero IT setup required', desc: 'Employees self-enroll using their unique Employee ID. No integration needed.' },
                { title: 'Immediate access', desc: 'Employees connect with their care navigator from day one of enrollment.' },
                { title: 'Dedicated HR support', desc: 'Our team supports your HR department throughout implementation and beyond.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-5 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#2E9F87' }} />
                  <div>
                    <p style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: 'white', marginBottom: '0.25rem' }}>{item.title}</p>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#DFF8F1' }}>
        {/* Organic shape decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full opacity-25" style={{ backgroundColor: '#2E9F87' }} />
          <div className="absolute top-8 left-8 w-32 h-32 rounded-full opacity-15" style={{ backgroundColor: '#0F6B57' }} />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#174B43', marginBottom: '1.25rem' }}>
            Your family deserves support. We&apos;re here to help.
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#2C3E3A', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Connect with a care navigator and get the support your family needs — at every stage of life.
          </p>
          <Link href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#2E9F87', fontFamily: 'Inter, sans-serif' }}>
            Get Care Support <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
