import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Moon, ArrowLeft, Brain, Zap, Trophy, Clock, Sun, Phone, Book, Users, Activity, Lightbulb, ListChecks } from 'lucide-react';

const Guide = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('routine');
  const [routineInputs, setRoutineInputs] = useState({
    wakeUpTime: '07:00',
    schoolStartTime: '08:30',
    homework: true,
    exercise: false,
    screenTime: true,
    sleepTarget: 9,
  });
  const [routineSteps, setRoutineSteps] = useState([]);

  const parseTime = (value) => {
    const [hours, minutes] = value.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const formatTime = (minutes) => {
    const normalized = ((minutes % 1440) + 1440) % 1440;
    const hrs = Math.floor(normalized / 60);
    const mins = normalized % 60;
    const period = hrs >= 12 ? 'PM' : 'AM';
    const displayHour = hrs % 12 === 0 ? 12 : hrs % 12;
    return `${displayHour}:${mins.toString().padStart(2, '0')} ${period}`;
  };

  const updateRoutineInput = (field, value) => {
    setRoutineInputs((prev) => ({ ...prev, [field]: value }));
  };

  const generateRoutine = () => {
    ReactGA.event({
      category: 'engagement',
      action: 'generate_routine',
      label: 'routine_generated'
    });

    const wake = parseTime(routineInputs.wakeUpTime);
    const sleepMinutes = Math.round(Number(routineInputs.sleepTarget) * 60);
    const bedtime = wake - sleepMinutes;
    const screensOff = bedtime - (routineInputs.screenTime ? 45 : 30);
    const windDown = bedtime - 30;
    const finalize = bedtime - 15;
    const steps = [];

    steps.push({ time: wake, label: `Wake up at ${formatTime(wake)}` });
    steps.push({ time: screensOff - 90, label: 'Wrap up homework and organize your school bag' });

    if (routineInputs.exercise) {
      steps.push({ time: screensOff - 70, label: 'Do gentle stretching or light movement' });
    }

    steps.push({ time: screensOff, label: routineInputs.screenTime ? 'Turn screens off and switch to quiet activities' : 'Start calming, screen-free tasks' });
    steps.push({ time: windDown, label: 'Begin wind-down: reading, journaling, or breathing exercises' });
    steps.push({ time: finalize, label: 'Prepare your room: dim lights, set a cool temperature, and relax' });
    steps.push({ time: bedtime, label: `Lights out and aim to be asleep by ${formatTime(bedtime)}` });

    setRoutineSteps(steps.sort((a, b) => a.time - b.time));
  };

  const focusContent = [
    {
      icon: Brain,
      title: 'Memory Consolidation',
      description: 'During sleep, your brain processes and stores information from the day. Quality sleep can improve memory retention by up to 40%.',
    },
    {
      icon: Zap,
      title: 'Enhanced Concentration',
      description: 'Well-rested teens show 25% better focus and attention span in class compared to sleep-deprived peers.',
    },
    {
      icon: Trophy,
      title: 'Academic Performance',
      description: 'Students who maintain consistent sleep schedules average one full letter grade higher than those with irregular sleep patterns.',
    },
    {
      icon: Lightbulb,
      title: 'Creative Problem-Solving',
      description: "Quality sleep enhances your brain's ability to make connections and solve complex problems creatively.",
    },
  ];

  const sleepTips = [
    {
      icon: Clock,
      title: 'The 3-Hour Wind-Down',
      description: 'Start your bedtime routine 3 hours before sleep. Gradually dim lights, reduce screen time, and shift to calming activities.',
    },
    {
      icon: Sun,
      title: 'Light Management',
      description: 'Reduce blue light exposure 2 hours before bed. Use night mode on devices or blue light blocking glasses.',
    },
    {
      icon: Phone,
      title: 'Tech-Free Zone',
      description: 'Keep phones out of the bedroom. The bedroom should be associated only with sleep and relaxation.',
    },
    {
      icon: Book,
      title: 'Evening Routine Ritual',
      description: 'Create a consistent 30-minute routine: light reading, journaling, or gentle stretching to signal your body it\'s time to sleep.',
    },
  ];

  const healthResources = [
    {
      icon: Users,
      title: 'Teen Sleep Science',
      description: 'Teenagers need 8-10 hours of sleep due to ongoing brain development. Your circadian rhythm naturally shifts later during adolescence.',
    },
    {
      icon: Activity,
      title: 'Physical Health Connection',
      description: 'Poor sleep affects hormone regulation, immune function, and metabolism. Quality sleep reduces stress and improves overall health.',
    },
    {
      icon: Brain,
      title: 'Mental Health Support',
      description: 'Sleep deprivation increases risk of anxiety and depression. Prioritizing sleep is one of the most effective mental health strategies.',
    },
    {
      icon: Lightbulb,
      title: 'Lifestyle Balance',
      description: 'Balance school, activities, and social life with sleep. Sometimes saying no to late-night events is saying yes to your health.',
    },
  ];

  const renderBuilder = () => {
    return (
      <div className="space-y-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                  <ListChecks className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">Nightly Routine Builder</CardTitle>
                  <p className="text-slate-400 mt-2">Turn your schedule into an actionable plan with exact times for each step.</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="space-y-2 text-slate-300">
                  <span>Wake-up time</span>
                  <input
                    type="time"
                    value={routineInputs.wakeUpTime}
                    onChange={(e) => updateRoutineInput('wakeUpTime', e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white"
                  />
                </label>
                <label className="space-y-2 text-slate-300">
                  <span>School start time</span>
                  <input
                    type="time"
                    value={routineInputs.schoolStartTime}
                    onChange={(e) => updateRoutineInput('schoolStartTime', e.target.value)}
                    className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white"
                  />
                </label>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="flex items-center gap-3 text-slate-300">
                  <input
                    type="checkbox"
                    checked={routineInputs.homework}
                    onChange={(e) => updateRoutineInput('homework', e.target.checked)}
                    className="h-5 w-5 rounded border-slate-700 bg-slate-900 text-blue-500"
                  />
                  Include homework time
                </label>
                <label className="flex items-center gap-3 text-slate-300">
                  <input
                    type="checkbox"
                    checked={routineInputs.exercise}
                    onChange={(e) => updateRoutineInput('exercise', e.target.checked)}
                    className="h-5 w-5 rounded border-slate-700 bg-slate-900 text-blue-500"
                  />
                  Include light evening exercise
                </label>
              </div>

              <div className="space-y-2 text-slate-300">
                <label className="block">Target sleep hours</label>
                <input
                  type="range"
                  min="8"
                  max="10"
                  step="0.5"
                  value={routineInputs.sleepTarget}
                  onChange={(e) => updateRoutineInput('sleepTarget', e.target.value)}
                  className="w-full"
                />
                <div className="text-sm text-slate-400">Target: {routineInputs.sleepTarget} hours</div>
              </div>

              <Button
                onClick={generateRoutine}
                className="w-full px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
              >
                Generate Plan
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Your step-by-step plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {routineSteps.length === 0 ? (
                <p className="text-slate-400">Generate a routine to see a clear nightly timeline.</p>
              ) : (
                <div className="space-y-4">
                  {routineSteps.map((step, index) => (
                    <div key={index} className="rounded-3xl border border-slate-700 bg-slate-950/70 p-5">
                      <div className="text-sm uppercase tracking-[0.2em] text-slate-500">Step {index + 1}</div>
                      <div className="mt-2 flex items-center justify-between gap-4">
                        <p className="text-lg font-semibold text-white">{step.label}</p>
                        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-200">{formatTime(step.time)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

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
    } else if (activeSection === 'routine') {
      sectionTitle = 'Sleep Routine Builder';
      sectionDescription = 'Create a custom nightly plan that feels like a step-by-step routine instead of vague advice.';
      return (
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">{sectionTitle}</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">{sectionDescription}</p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto"></div>
          </div>
          {renderBuilder()}
        </div>
      );
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
              onClick={() => setActiveSection('routine')}
              className={`px-6 py-6 text-lg rounded-lg transition-all ${
                activeSection === 'routine'
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                  : 'bg-slate-800/50 hover:bg-slate-700 text-slate-300 border border-slate-700'
              }`}
            >
              Routine Builder
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
