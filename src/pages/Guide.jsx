import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Moon, ArrowLeft, Brain, Zap, Trophy, Clock, Sun, Phone, Book, Users, Activity, Lightbulb } from 'lucide-react';

const Guide = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('focus');

  const focusContent = [
    {
      icon: Brain,
      title: 'Memory Consolidation',
      description: 'During sleep, your brain processes and stores information from the day. Quality sleep can improve memory retention by up to 40%.'
    },
    {
      icon: Zap,
      title: 'Enhanced Concentration',
      description: 'Well-rested teens show 25% better focus and attention span in class compared to sleep-deprived peers.'
    },
    {
      icon: Trophy,
      title: 'Academic Performance',
      description: 'Students who maintain consistent sleep schedules average one full letter grade higher than those with irregular sleep patterns.'
    },
    {
      icon: Lightbulb,
      title: 'Creative Problem-Solving',
      description: "Quality sleep enhances your brain's ability to make connections and solve complex problems creatively."
    }
  ];

  const sleepTips = [
    {
      icon: Clock,
      title: 'The 3-Hour Wind-Down',
      description: 'Start your bedtime routine 3 hours before sleep. Gradually dim lights, reduce screen time, and shift to calming activities.'
    },
    {
      icon: Sun,
      title: 'Light Management',
      description: 'Reduce blue light exposure 2 hours before bed. Use night mode on devices or blue light blocking glasses.'
    },
    {
      icon: Phone,
      title: 'Tech-Free Zone',
      description: 'Keep phones out of the bedroom. The bedroom should be associated only with sleep and relaxation.'
    },
    {
      icon: Book,
      title: 'Evening Routine Ritual',
      description: 'Create a consistent 30-minute routine: light reading, journaling, or gentle stretching to signal your body it\'s time to sleep.'
    }
  ];

  const healthResources = [
    {
      icon: Users,
      title: 'Teen Sleep Science',
      description: 'Teenagers need 8-10 hours of sleep due to ongoing brain development. Your circadian rhythm naturally shifts later during adolescence.'
    },
    {
      icon: Activity,
      title: 'Physical Health Connection',
      description: 'Poor sleep affects hormone regulation, immune function, and metabolism. Quality sleep reduces stress and improves overall health.'
    },
    {
      icon: Brain,
      title: 'Mental Health Support',
      description: 'Sleep deprivation increases risk of anxiety and depression. Prioritizing sleep is one of the most effective mental health strategies.'
    },
    {
      icon: Lightbulb,
      title: 'Lifestyle Balance',
      description: 'Balance school, activities, and social life with sleep. Sometimes saying no to late-night events is saying yes to your health.'
    }
  ];

  const renderContent = () => {
    let content = [];
    let sectionTitle = '';
    let sectionDescription = '';

    if (activeSection === 'focus') {
      content = focusContent;
      sectionTitle = 'Focus & Performance';
      sectionDescription = 'Discover how quality sleep directly impacts your academic success and cognitive abilities';
    } else if (activeSection === 'tips') {
      content = sleepTips;
      sectionTitle = 'Sleep Improvement Tips';
      sectionDescription = 'The secret is what you do BEFORE bed – these strategies will transform your sleep';
    } else {
      content = healthResources;
      sectionTitle = 'Teen Health Resources';
      sectionDescription = 'Understanding your unique sleep needs as a teenager and building healthy habits for life';
    }

    return (
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">{sectionTitle}</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">{sectionDescription}</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {content.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all hover:transform hover:scale-105"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 mb-4">
                    <IconComponent className="w-7 h-7 text-blue-400" />
                  </div>
                  <CardTitle className="text-2xl text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-lg leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden md:inline">Back to Home</span>
          </button>
          <div className="flex items-center gap-2">
            <Moon className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-semibold text-white">Teen Sleep Guide</span>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Your Complete Sleep Guide</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Everything you need to know about improving your sleep and maximizing your potential
          </p>
        </div>
      </section>

      <section className="pb-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              onClick={() => setActiveSection('focus')}
              className={`px-6 py-6 text-lg rounded-lg transition-all ${
                activeSection === 'focus'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                  : 'bg-slate-800/50 hover:bg-slate-700 text-slate-300 border border-slate-700'
              }`}
            >
              Focus & Performance
            </Button>
            <Button
              onClick={() => setActiveSection('tips')}
              className={`px-6 py-6 text-lg rounded-lg transition-all ${
                activeSection === 'tips'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                  : 'bg-slate-800/50 hover:bg-slate-700 text-slate-300 border border-slate-700'
              }`}
            >
              Sleep Improvement Tips
            </Button>
            <Button
              onClick={() => setActiveSection('health')}
              className={`px-6 py-6 text-lg rounded-lg transition-all ${
                activeSection === 'health'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                  : 'bg-slate-800/50 hover:bg-slate-700 text-slate-300 border border-slate-700'
              }`}
            >
              Teen Health Resources
            </Button>
          </div>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-6xl">{renderContent()}</div>
      </section>

      <section className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-12 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Transform Your Sleep?</h2>
              <p className="text-xl text-slate-300">
                Remember: The key to better sleep isn't what happens in bed, it's what you do in the hours before.
              </p>
              <Button
                onClick={() => navigate('/')}
                className="mt-4 px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all transform hover:scale-105"
              >
                Back to Home
              </Button>
            </CardContent>
          </Card>
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

export default Guide;
