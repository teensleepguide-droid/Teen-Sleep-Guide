import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Moon, Clock, Brain, Heart, Mail } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Moon className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-semibold text-white">Teen Sleep Guide</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">About</a>
            <a href="#services" className="text-slate-300 hover:text-blue-400 transition-colors">Services</a>
            <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center border border-blue-500/30">
                <Moon className="w-10 h-10 text-blue-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Better Sleep Starts
              <span className="block mt-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Before Bedtime
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A science-backed guide to help teens overcome sleep struggles and unlock their full potential through proven pre-bedtime routines
            </p>
            <div className="pt-6">
              <Button
                onClick={() => navigate('/guide')}
                className="px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Story</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto"></div>
          </div>
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  When I was younger, I struggled with sleep every single night. I would lie awake for hours, tossing and turning, watching the clock tick closer to morning. It affected everything – my grades, my mood, my energy, and my relationships.
                </p>
                <p>
                  I tried everything: counting sheep, meditation apps, sleeping pills, new mattresses. Nothing worked. That's when I discovered the truth that changed everything.
                </p>
                <p className="text-xl font-semibold text-blue-400">
                  The real way to fix sleep problems isn't what you do in bed – it's what you do BEFORE bed.
                </p>
                <p>
                  Once I learned to prepare my mind and body in the hours leading up to sleep, everything changed. I created this guide to share these life-changing strategies with other teens who are going through the same struggle I did.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What We Offer</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all hover:transform hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <Brain className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Focus & Performance</h3>
                <p className="text-slate-400">
                  Learn how quality sleep enhances your academic performance, concentration, and mental clarity
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all hover:transform hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                  <Clock className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Sleep Improvement Tips</h3>
                <p className="text-slate-400">
                  Discover proven pre-bedtime routines and habits that actually work for lasting results
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all hover:transform hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                  <Heart className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Teen Health Resources</h3>
                <p className="text-slate-400">
                  Access comprehensive resources tailored specifically for teenage sleep patterns and lifestyle
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-400">
              Have questions or need personalized guidance? We're here to help you on your journey to better sleep.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all">
              <CardContent className="p-8 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-slate-400">support@teensleepguide.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Moon className="w-5 h-5 text-blue-400" />
            <span className="text-lg font-semibold text-white">Teen Sleep Guide</span>
          </div>
          <p className="text-slate-500">© 2024 Teen Sleep Guide. Helping teens sleep better, one night at a time.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
