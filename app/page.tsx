import Link from 'next/link';
import { Heart, Users, BookOpen, Phone, CheckCircle, Star, ArrowRight, Baby, UserCheck } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Warm Hero */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: '#F0FDF9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8" style={{ backgroundColor: '#CCFBF1', color: '#2D7D6F' }}>
                <Heart className="w-4 h-4" fill="#2D7D6F" />
                Care Support for Every Employee
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6" style={{ color: '#1A4A42' }}>
                Care Support for Every Family.
                <span className="block" style={{ color: '#2D7D6F' }}>At Every Stage of Life.</span>
              </h1>
              <p className="text-xl mb-10" style={{ color: '#4B7A72' }}>
                Omohan connects employees with expert care navigators to help manage childcare, eldercare, and every caregiving challenge in between — so they can focus on work and family.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/signup" className="px-8 py-4 text-white text-lg font-bold rounded-xl transition-opacity hover:opacity-90 shadow-lg" style={{ backgroundColor: '#2D7D6F' }}>
                  Get Care Support
                </Link>
                <Link href="/about" className="px-8 py-4 text-lg font-semibold rounded-xl transition-opacity hover:opacity-90 border-2" style={{ color: '#2D7D6F', borderColor: '#2D7D6F', backgroundColor: 'transparent' }}>
                  How It Works
                </Link>
              </div>
            </div>
            {/* Care Visual */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Baby, label: 'Childcare', color: '#CCFBF1' },
                { icon: UserCheck, label: 'Eldercare', color: '#D1FAE5' },
                { icon: Heart, label: 'Special Needs', color: '#FEF3C7' },
                { icon: Users, label: 'Family Support', color: '#E0F2FE' },
              ].map((card) => (
                <div key={card.label} className="rounded-2xl p-6 flex flex-col items-center justify-center text-center" style={{ backgroundColor: card.color, minHeight: '140px' }}>
                  <card.icon className="w-10 h-10 mb-3" style={{ color: '#2D7D6F' }} />
                  <span className="font-bold text-sm" style={{ color: '#1A4A42' }}>{card.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y" style={{ backgroundColor: '#FFFFFF', borderColor: '#D1FAE5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500K+', label: 'Families Supported' },
              { value: '98%', label: 'Employee Satisfaction' },
              { value: '40%', label: 'Reduction in Absenteeism' },
              { value: '24/7', label: 'Care Navigator Access' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-extrabold mb-1" style={{ color: '#2D7D6F' }}>{stat.value}</div>
                <div className="text-sm font-medium" style={{ color: '#6B7280' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Care Journey */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1A4A42' }}>Your Care Journey</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
              From your first call to ongoing support, Omohan is with you every step of the way.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5" style={{ backgroundColor: '#CCFBF1' }} />
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', icon: Phone, title: 'Connect with a Navigator', desc: 'Call, text, or message your dedicated care navigator anytime. They get to know your family and your needs.' },
                { step: '2', icon: BookOpen, title: 'Get a Personalized Care Plan', desc: 'Your navigator researches options, vets providers, and creates a customized care plan for your situation.' },
                { step: '3', icon: Heart, title: 'Ongoing Support & Guidance', desc: 'As your needs change, your navigator adapts your plan. We're with you for the long haul.' },
              ].map((step) => (
                <div key={step.step} className="text-center relative">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-extrabold text-white" style={{ backgroundColor: '#2D7D6F' }}>
                    {step.step}
                  </div>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#CCFBF1' }}>
                    <step.icon className="w-7 h-7" style={{ color: '#2D7D6F' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#1A4A42' }}>{step.title}</h3>
                  <p style={{ color: '#6B7280' }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Care Types */}
      <section className="py-20" style={{ backgroundColor: '#F0FDF9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#1A4A42' }}>We Support Every Type of Care</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Childcare & Daycare', desc: 'Finding quality childcare, backup care, and after-school programs for your children.' },
              { title: 'Eldercare & Senior Living', desc: 'Navigating senior living options, in-home care, and Medicare/Medicaid benefits.' },
              { title: 'Special Needs Support', desc: 'Resources and advocacy for children and adults with disabilities or special needs.' },
              { title: 'Mental Health Resources', desc: 'Connecting families with therapists, counselors, and mental health support services.' },
              { title: 'Newborn & Parental Leave', desc: 'Support for new parents navigating leave policies, newborn care, and postpartum resources.' },
              { title: 'Crisis & Emergency Care', desc: 'Immediate support when unexpected caregiving situations arise — we're here 24/7.' },
            ].map((care) => (
              <div key={care.title} className="bg-white p-6 rounded-xl border hover:shadow-md transition-shadow" style={{ borderColor: '#CCFBF1' }}>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#2D7D6F' }} />
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: '#1A4A42' }}>{care.title}</h3>
                    <p className="text-sm" style={{ color: '#6B7280' }}>{care.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#1A4A42' }}>Families Love Omohan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: 'My navigator found the perfect memory care facility for my mom in just 3 days. I was overwhelmed and they made it manageable.', name: 'Maria T.', role: 'Employee, Healthcare Sector' },
              { quote: 'As a working parent of a child with autism, Omohan has been a lifeline. They know every resource in our area.', name: 'David K.', role: 'Employee, Tech Industry' },
              { quote: 'I didn't know where to start with newborn care. My navigator walked me through everything and I felt so supported.', name: 'Jennifer L.', role: 'New Parent, Finance Sector' },
            ].map((t) => (
              <div key={t.name} className="p-8 rounded-2xl border" style={{ borderColor: '#CCFBF1', backgroundColor: '#F0FDF9' }}>
                <div className="flex mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4" style={{ color: '#2D7D6F' }} fill="#2D7D6F" />)}
                </div>
                <p className="text-lg mb-6 italic" style={{ color: '#374151' }}>"{t.quote}"</p>
                <div>
                  <p className="font-bold" style={{ color: '#1A4A42' }}>{t.name}</p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section className="py-20" style={{ backgroundColor: '#1A4A42' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">For Employers</h2>
              <p className="text-xl mb-8" style={{ color: '#99F6E4' }}>
                Caregiving responsibilities cost employers $33 billion annually in lost productivity. Omohan helps your employees manage care — so they can show up fully at work.
              </p>
              <div className="space-y-4 mb-10">
                {['Reduce absenteeism by up to 40%', 'Improve employee retention', 'Boost productivity and focus', 'Easy to implement — no IT required'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5" style={{ color: '#2D7D6F' }} />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/signup" className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl transition-opacity hover:opacity-90" style={{ backgroundColor: '#2D7D6F', color: '#FFFFFF' }}>
                Request an Employer Demo <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '$33B', label: 'Annual cost of caregiving to employers' },
                { value: '73%', label: 'Employees with caregiving responsibilities' },
                { value: '40%', label: 'Reduction in absenteeism with Omohan' },
                { value: '5x', label: 'ROI for employers who offer care benefits' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl p-6 text-center" style={{ backgroundColor: 'rgba(45,125,111,0.3)' }}>
                  <div className="text-3xl font-extrabold mb-2" style={{ color: '#99F6E4' }}>{stat.value}</div>
                  <div className="text-sm" style={{ color: '#CCFBF1' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#F0FDF9' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" style={{ color: '#2D7D6F' }} fill="#2D7D6F" />
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#1A4A42' }}>Ready to Support Your Employees?</h2>
          <p className="text-xl mb-10" style={{ color: '#4B7A72' }}>Join thousands of families who trust Omohan for care support at every stage of life.</p>
          <Link href="/signup" className="inline-block text-white font-bold px-10 py-5 rounded-xl text-xl transition-opacity hover:opacity-90 shadow-lg" style={{ backgroundColor: '#2D7D6F' }}>
            Get Care Support — Free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
