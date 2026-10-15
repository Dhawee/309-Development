import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, Award, ArrowRight, CheckCircle2, Users, Briefcase, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/projectData';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Header Banner (Midnight Blue Gradient — Left to Right, White Text) */}
      <section className="bg-[#101D32] text-white py-20 sm:py-28 border-b border-[#1D3252] relative overflow-hidden">
        {/* Left-to-Right Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101D32] via-[#101D32]/90 to-[#1D3A5C]/70" />
        {/* Subtle radial accent for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.04)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl font-medium text-white tracking-tight">
              About 309 Development Ltd.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              {COMPANY_INFO.description}
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Statement */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                Our Foundation & Purpose
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#101D32] leading-tight">
                Turning Spaces Into Assets That Secure Futures.
              </h2>
              <div className="w-12 h-1 bg-[#101D32] rounded-full" />

              <blockquote className="p-5 rounded-sm bg-slate-50 border-l-4 border-[#101D32] text-sm sm:text-base text-[#101D32] italic leading-relaxed border-y border-r border-slate-200">
                "{COMPANY_INFO.statement}"
              </blockquote>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Headquartered in Nigeria, 309 Development Ltd. was founded with a singular strategic conviction: that land development should not be passive speculation, but an active, disciplined wealth-generation process.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We combine meticulous title vetting, strategic geographic positioning, and proactive on-ground development to deliver a growing portfolio of real estate and investment products — from structured farmland to resort lifestyle parcels and beyond.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our inaugural flagship project — <strong className="text-[#101D32]">Verdant Acres & Resort (VAR)</strong> — is just the beginning. 309 Development Ltd. is building a comprehensive product pipeline designed to serve individual investors, institutional syndicates, and the broader real estate community.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-200">
                <div className="p-4 rounded-sm bg-slate-50 border border-slate-200">
                  <div className="font-heading font-bold text-[#101D32] text-base">{COMPANY_INFO.positioning.plug}</div>
                  <div className="text-xs text-slate-600 mt-1">Connecting verified land opportunities directly to serious investors.</div>
                </div>
                <div className="p-4 rounded-sm bg-slate-50 border border-slate-200">
                  <div className="font-heading font-bold text-[#101D32] text-base">{COMPANY_INFO.positioning.guide}</div>
                  <div className="text-xs text-slate-600 mt-1">Providing transparent legal, survey, and documentation counsel.</div>
                </div>
                <div className="p-4 rounded-sm bg-slate-50 border border-slate-200">
                  <div className="font-heading font-bold text-[#101D32] text-base">{COMPANY_INFO.positioning.voice}</div>
                  <div className="text-xs text-slate-600 mt-1">Championing accountable, structured wealth-building across Africa.</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-sm overflow-hidden border border-slate-200 shadow-sm bg-white aspect-[4/3]">
                <img
                  src="/assets/brand_bag_black.jpg"
                  alt="309 Corporate Identity"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-sm overflow-hidden border border-slate-200 shadow-sm bg-white aspect-square">
                  <img
                    src="/assets/brand_hardhat_2.jpg"
                    alt="309 Development Hard Hat"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-sm overflow-hidden border border-slate-200 shadow-sm bg-white aspect-square">
                  <img
                    src="/assets/brand_a4_envelope.jpg"
                    alt="309 Official Documentation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#101D32] bg-[#ECB7B5]/25 px-2.5 py-1 rounded-sm border border-[#ECB7B5]/40 mb-3 font-mono">
              <Users className="h-3.5 w-3.5 text-[#101D32]" />
              <span>Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#101D32]">
              The People Behind 309 Development
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Driven by experience, integrity, and a commitment to delivering structured real estate value.
            </p>
          </div>

          {/* CEO Featured Card */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white border border-slate-200 rounded-sm overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-4 bg-[#101D32] min-h-[280px] sm:min-h-[340px] flex items-center justify-center relative overflow-hidden">
                  <img
                    src="/assets/brand_hardhat.jpg"
                    alt="Chief Executive Officer — 309 Development Ltd."
                    className="w-full h-full object-cover absolute inset-0 opacity-60 mix-blend-luminosity"
                  />
                  <div className="relative z-10 text-center px-6">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#15243C] border-4 border-[#ECB7B5]/60 mx-auto mb-4 overflow-hidden flex items-center justify-center">
                      <span className="text-[#ECB7B5] text-4xl font-heading font-bold">C</span>
                    </div>
                    <div className="text-white font-heading font-bold text-lg">Chief Executive</div>
                    <div className="text-[#ECB7B5] text-xs font-mono uppercase tracking-wider mt-1">309 Development Ltd.</div>
                  </div>
                </div>
                <div className="md:col-span-8 p-8 sm:p-10 flex flex-col justify-center space-y-4">
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-sm bg-[#101D32] text-white text-[10px] font-mono uppercase tracking-widest w-fit">
                    Chief Executive Officer
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#101D32]">
                    Office of the CEO
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    The Chief Executive Officer of 309 Development Ltd. leads the company's strategic vision of transforming land into structured, high-value assets. With deep roots in Nigerian real estate development, the CEO drives the company's commitment to verified acquisitions, structured investment products, and transparent corporate governance.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Under this leadership, 309 Development has launched the Verdant Acres & Resort (VAR) flagship project and is actively building a pipeline of innovative real estate and investment products across Nigeria.
                  </p>
                  <div className="pt-2 flex items-center space-x-2 text-xs text-slate-500">
                    <MapPin className="h-4 w-4 text-[#101D32] shrink-0" />
                    <span>Yaba, Lagos, Nigeria</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Management Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                role: 'Head of Real Estate Development',
                department: 'Development',
                desc: 'Oversees all land acquisition, site planning, and project delivery phases — ensuring every development meets 309\'s high standards of quality and execution.'
              },
              {
                role: 'Head of Sales & Ambassador Relations',
                department: 'Sales',
                desc: 'Manages the nationwide 309 Ambassador network and drives investor acquisition strategy across all active and upcoming product launches.'
              },
              {
                role: 'Legal & Documentation Officer',
                department: 'Legal',
                desc: 'Responsible for all title verification, investor documentation, conveyancing, and regulatory compliance across all 309 Development projects.'
              },
              {
                role: 'Head of Customer Service',
                department: 'Customer Relations',
                desc: 'Ensures every investor receives responsive, transparent, and professional support throughout their investment journey with 309 Development.'
              },
              {
                role: 'Finance & Accounts Lead',
                department: 'Finance',
                desc: 'Manages corporate financial operations, investor payment verification, and ensures strict corporate banking governance standards are maintained.'
              },
              {
                role: 'Head of Marketing & Communications',
                department: 'Marketing',
                desc: 'Drives brand awareness, digital presence, and public communications to position 309 Development as Nigeria\'s premier real estate investment brand.'
              }
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-sm p-6 hover:border-[#101D32] hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-sm bg-slate-100 border border-slate-200 flex items-center justify-center mb-4">
                  <Briefcase className="h-5 w-5 text-[#101D32]" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#ECB7B5] font-semibold mb-1">{member.department}</div>
                <h4 className="font-heading font-bold text-base text-[#101D32] mb-2">{member.role}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-sm p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-sm bg-slate-100 text-[#101D32] w-fit mb-6 border border-slate-200">
                  <Target className="h-6 w-6 text-[#101D32]" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#101D32] mb-3">Our Mission</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{COMPANY_INFO.mission}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-[#101D32] font-semibold tracking-wider uppercase font-mono">
                Transforming Land • Delivering Structure
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-sm p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-sm bg-slate-100 text-[#101D32] w-fit mb-6 border border-slate-200">
                  <Compass className="h-6 w-6 text-[#101D32]" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#101D32] mb-3">Our Vision</h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{COMPANY_INFO.vision}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-[#101D32] font-semibold tracking-wider uppercase font-mono">
                Africa's Premier Real Estate Brand
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-[#101D32] bg-[#ECB7B5]/25 px-2.5 py-1 rounded-sm border border-[#ECB7B5]/40 mb-3 font-mono">
              <Award className="h-4 w-4 text-[#101D32]" />
              <span>Core Principles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#101D32]">
              The Core Values That Drive Us
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Every parcel development, customer consultation, and allocation mandate is anchored in these principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {COMPANY_INFO.values.map((val, idx) => (
              <div
                key={val.title}
                className="p-6 rounded-sm bg-white border border-slate-200 hover:border-[#101D32] hover:shadow-sm transition-all flex flex-col"
              >
                <div className="font-mono text-xs font-bold text-[#101D32] mb-3 flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ECB7B5]"></span>
                  <span>0{idx + 1}</span>
                </div>
                <h4 className="font-heading font-bold text-lg text-[#101D32] mb-2">{val.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose 309 — Blue Background */}
      <section className="py-20 bg-[#101D32] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-[#ECB7B5] mb-2 font-semibold">
              Distinctive Advantages
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              Why Discerning Investors Choose 309 Development Ltd.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-sm bg-[#15243C] border border-[#23395B] space-y-3 hover:border-[#ECB7B5] transition-colors"
              >
                <div className="flex items-center space-x-2 text-[#ECB7B5]">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="font-heading font-bold text-base text-white">{item.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[#23395B] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-slate-300">
              Ready to explore our flagship development?
            </div>
            <Link
              to="/projects/verdant-acres-resort"
              className="px-6 py-3.5 rounded-sm bg-[#182A45] hover:bg-[#1D3252] border border-[#ECB7B5]/60 text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors flex items-center space-x-2 shadow-md"
            >
              <span>Explore Verdant Acres & Resort</span>
              <ArrowRight className="h-4 w-4 text-[#ECB7B5]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
