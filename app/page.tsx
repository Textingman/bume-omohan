import Link from 'next/link';
import { Star, Shield, Zap } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: '#F0FDF9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#CCFBF1', color: '#2D7D6F' }}>
              <Star className="w-4 h-4" />
              Omohan
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#1F2937' }}>
              Care Support for Every Family.
              <span className="block" style={{ color: '#2D7D6F' }}>At Every Stage of Life.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#6B7280' }}>
              Omohan connects employees with expert care navigators to help manage childcare, eldercare, and every caregiving challenge in between — so they can focus on work and family.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link href="/signup" className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#2D7D6F' }}>
                Get Care Support
              </Link>
              <Link href="/about" className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2" style={{ color: '#2D7D6F', borderColor: '#2D7D6F', backgroundColor: '#FFFFFF' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>Why Choose Omohan</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>Family care support for every employee, every stage of life.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#2D7D6F33' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#CCFBF1' }}>
                  <Star className="w-7 h-7" style={{ color: '#2D7D6F' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1F2937' }}>Trusted & Reliable</h3>
              <p className="text-center" style={{ color: '#6B7280' }}>Get the support and guidance you need from a platform you can trust — available whenever you need it.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#2D7D6F33' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#CCFBF1' }}>
                  <Shield className="w-7 h-7" style={{ color: '#2D7D6F' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1F2937' }}>Safe & Secure</h3>
              <p className="text-center" style={{ color: '#6B7280' }}>Your privacy matters. We keep your information safe and never share it without your consent.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#2D7D6F33' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#CCFBF1' }}>
                  <Zap className="w-7 h-7" style={{ color: '#2D7D6F' }} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3" style={{ color: '#1F2937' }}>Fast & Easy</h3>
              <p className="text-center" style={{ color: '#6B7280' }}>Get started in minutes. No complicated setup, no long waits — just fast, straightforward access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#F0FDF9' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#1F2937' }}>Ready to Get Started?</h2>
          <p className="text-xl mb-10" style={{ color: '#6B7280' }}>Join thousands of people who trust Omohan.</p>
          <Link href="/signup" className="px-10 py-5 text-white text-xl font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90" style={{ backgroundColor: '#2D7D6F' }}>
            Get Care Support
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
