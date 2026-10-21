'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function TalkToSalesPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', size: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1200);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      <div className="min-h-screen grid md:grid-cols-2">
        {/* Left Panel */}
        <div className="relative hidden md:flex flex-col justify-between p-12 pt-20" style={{ backgroundColor: '#174B43' }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-20" style={{ backgroundColor: '#2E9F87' }} />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-15" style={{ backgroundColor: '#0F6B57' }} />
          </div>
          <div className="relative z-10">
            <div className="mb-8">
              {/* Heart Leaf Logo — designed for dark backgrounds */}
              <Image src="/logo-dark.png" alt="Omohan" width={140} height={44} className="h-11 w-auto object-contain" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>
              Book a Demo
            </p>
            <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: '2.25rem', color: 'white', lineHeight: 1.15, marginBottom: '1.25rem' }}>
              See how Omohan supports your employees.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: 1.75, maxWidth: '340px' }}>
              Talk to our team and learn how Omohan&apos;s care navigation benefit can help your employees manage caregiving — so they can focus on work.
            </p>
          </div>
          <div className="relative z-10 space-y-4">
            {[
              'Personalized demo for your organization',
              'Learn about the employee enrollment flow',
              'Understand pricing and implementation',
              'Get answers to your HR team&apos;s questions',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#2E9F87' }} />
                <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', fontFamily: 'Inter, sans-serif' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel: Form */}
        <div className="flex flex-col justify-center px-6 py-20 md:px-12 lg:px-16 bg-white">
          <div className="max-w-md w-full mx-auto">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#DFF8F1' }}>
                  <CheckCircle className="w-10 h-10" style={{ color: '#0F6B57' }} />
                </div>
                <h2 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#174B43', marginBottom: '1rem' }}>
                  We&apos;ll be in touch!
                </h2>
                <p style={{ fontSize: '1rem', color: '#2C3E3A', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Thank you for your interest in Omohan. Our team will reach out within 1–2 business days to schedule your demo.
                </p>
                <a href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#2E9F87', fontFamily: 'Inter, sans-serif' }}>
                  Back to Home
                </a>
              </div>
            ) : (
              <>
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#0F6B57', fontFamily: 'Inter, sans-serif' }}>
                  Book a Demo
                </p>
                <h1 style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 800, fontSize: '2rem', color: '#174B43', marginBottom: '0.75rem' }}>
                  Talk to our sales team.
                </h1>
                <p style={{ fontSize: '0.95rem', color: '#2C3E3A', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Tell us about your organization and we&apos;ll set up a personalized demo.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#2C3E3A' }}>Full Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                      style={{ border: '1px solid #D0EAE4', color: '#174B43', backgroundColor: '#FAFFFE' }} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#2C3E3A' }}>Work Email *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                      style={{ border: '1px solid #D0EAE4', color: '#174B43', backgroundColor: '#FAFFFE' }} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#2C3E3A' }}>Company Name *</label>
                    <input type="text" name="company" required value={formData.company} onChange={handleChange}
                      placeholder="Acme Corp"
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                      style={{ border: '1px solid #D0EAE4', color: '#174B43', backgroundColor: '#FAFFFE' }} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#2C3E3A' }}>Company Size</label>
                    <select name="size" value={formData.size} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                      style={{ border: '1px solid #D0EAE4', color: '#174B43', backgroundColor: '#FAFFFE' }}>
                      <option value="">Select company size...</option>
                      <option value="1-50">1–50 employees</option>
                      <option value="51-200">51–200 employees</option>
                      <option value="201-500">201–500 employees</option>
                      <option value="501-1000">501–1,000 employees</option>
                      <option value="1000+">1,000+ employees</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#2C3E3A' }}>What are you looking for?</label>
                    <textarea name="message" rows={3} value={formData.message} onChange={handleChange}
                      placeholder="Tell us about your team&apos;s caregiving needs..."
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none"
                      style={{ border: '1px solid #D0EAE4', color: '#174B43', backgroundColor: '#FAFFFE' }} />
                  </div>
                  <button type="submit" disabled={submitting}
                    className="w-full py-3.5 rounded-xl text-white font-semibold transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
                    style={{ backgroundColor: submitting ? '#9CA3AF' : '#2E9F87', cursor: submitting ? 'not-allowed' : 'pointer', fontFamily: 'Inter, sans-serif' }}>
                    {submitting ? 'Submitting...' : (<>Book a Demo <ArrowRight className="w-4 h-4" /></>)}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
