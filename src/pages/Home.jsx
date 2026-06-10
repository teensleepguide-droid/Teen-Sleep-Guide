import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Moon, Clock, Brain, Heart, Mail, ListChecks } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [calcInputs, setCalcInputs] = useState({
    wakeUpTime: '07:00',
    sleepHours: 9,
    screenTime: true,
    exercise: false,
  });

  const parseTime = (value) => {
    const [hours, minutes] = value.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const formatTime = (minutes) => {
    const normalized = ((minutes % 1440) + 1440) % 1440;
    const hours = Math.floor(normalized / 60);
    const mins = normalized % 60;
    const period = hours >= 12 ? 'PM' : 'AM';
    const display = hours % 12 === 0 ? 12 : hours % 12;
    return `${display}:${mins.toString().padStart(2, '0')} ${period}`;
  };

  const calculator = useMemo(() => {
    const wake = parseTime(calcInputs.wakeUpTime);
    const targetSleep = Math.round(calcInputs.sleepHours * 60);
    const bedtime = wake - targetSleep;
    const screensOff = bedtime - (calcInputs.screenTime ? 45 : 30);
    const exerciseNote = calcInputs.exercise
      ? 'Include a short stretch session earlier in the evening.'
      : 'Keep your evening calm with light activities.';
    return {
      bedtime: formatTime(bedtime),
      screensOff: formatTime(screensOff),
      exerciseNote,
    };
  }, [calcInputs]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Moon className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-semibold">Teen Sleep Guide</span>
          </div>
          <nav className="hidden md:flex gap-8 text-slate-300">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            <a href="/research" className="hover:text-blue-400 transition-colors">Research</a>
            <a href="#calculator" className="hover:text-blue-400 transition-colors">Calculator</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-32 px-6">
        <section className="container mx-auto max-w-6xl text-center pb-20">
          <div className="space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30">
              <ListChecks className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              A smarter sleep routine for teens
              <span className="block mt-3 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                built around your school day.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Get a personalized plan with exact bedtimes, screen-off reminders, and habit guidance for better focus, mood, and energy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={() => {
                  ReactGA.event({
                    category: 'engagement',
                    action: 'click',
                    label: 'open_routine_builder'
                  });
                  navigate('/guide');
                }}
                className="px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-lg shadow-blue-500/20"
              >
                Open the Routine Builder
              </Button>
              <a
                href="#calculator"
                onClick={() => ReactGA.event({
                  category: 'engagement',
                  action: 'click',
                  label: 'try_sleep_calculator'
                })}
                className="inline-flex items-center justify-center px-8 py-5 rounded-2xl border border-slate-700 text-slate-200 hover:bg-slate-800/80 transition-colors"
              >
                Try the Sleep Calculator
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-slate-900/50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold">About Teen Sleep Guide</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mt-4"></div>
            </div>
            <Card className="bg-slate-800/60 border border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12 space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  This guide helps teens reclaim their evenings with routines that fit homework, hobbies, and sleep goals. It is designed to turn confusing bedtime advice into clear, practical steps.
                </p>
                <p>
                  Instead of guessing when to go to bed, you'll get a schedule that works with your wake-up time and daily demands.
                </p>
                <p className="text-blue-400 font-semibold">
                  Better sleep means better focus, better mood, and better days.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">What We Offer</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mt-4"></div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="bg-slate-800/60 border border-slate-700 hover:border-blue-500/50 transition-all hover:scale-[1.02]">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                    <Brain className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold">Sleep Science</h3>
                  <p className="text-slate-300">Learn why sleep matters for memory, energy, and mood.</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/60 border border-slate-700 hover:border-blue-500/50 transition-all hover:scale-[1.02]">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                    <Clock className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="text-2xl font-semibold">Nightly Routines</h3>
                  <p className="text-slate-300">Build routines with exact times for homework, wind-down, and bedtime.</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/60 border border-slate-700 hover:border-blue-500/50 transition-all hover:scale-[1.02]">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                    <Heart className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-semibold">Healthy Habits</h3>
                  <p className="text-slate-300">Improve your mood and energy with simple teen-friendly habits.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="calculator" className="py-20 bg-slate-900/50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
              <Card className="bg-slate-800/60 border border-slate-700">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <p className="text-sm uppercase tracking-[0.24em] text-blue-400">Sleep Calculator</p>
                    <h2 className="text-4xl font-bold mt-4">Get a quick bedtime score</h2>
                    <p className="text-slate-300 mt-3">
                      Enter your wake-up time and goals to see the best time to stop screens and go to bed.
                    </p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="space-y-3 text-slate-300">
                      <span>Wake-up time</span>
                      <input
                        type="time"
                        value={calcInputs.wakeUpTime}
                        onChange={(e) => setCalcInputs((prev) => ({ ...prev, wakeUpTime: e.target.value }))}
                        className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-white"
                      />
                    </label>
                    <label className="space-y-3 text-slate-300">
                      <span>Sleep target</span>
                      <div className="flex items-center gap-3">
                        <input
                          type="range"
                          min="8"
                          max="10"
                          step="0.5"
                          value={calcInputs.sleepHours}
                          onChange={(e) => setCalcInputs((prev) => ({ ...prev, sleepHours: Number(e.target.value) }))}
                          className="w-full"
                        />
                        <span className="min-w-[3rem] text-right text-slate-200">{calcInputs.sleepHours}h</span>
                      </div>
                    </label>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 mt-6">
                    <label className="flex items-center gap-3 text-slate-300">
                      <input
                        type="checkbox"
                        checked={calcInputs.screenTime}
                        onChange={(e) => setCalcInputs((prev) => ({ ...prev, screenTime: e.target.checked }))}
                        className="h-5 w-5 rounded border-slate-700 bg-slate-900 text-blue-500"
                      />
                      Screens off early
                    </label>
                    <label className="flex items-center gap-3 text-slate-300">
                      <input
                        type="checkbox"
                        checked={calcInputs.exercise}
                        onChange={(e) => setCalcInputs((prev) => ({ ...prev, exercise: e.target.checked }))}
                        className="h-5 w-5 rounded border-slate-700 bg-slate-900 text-blue-500"
                      />
                      Add evening stretch
                    </label>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/60 border border-slate-700">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-blue-400">Your recommended schedule</p>
                    <h3 className="text-3xl font-bold mt-4">Today’s suggested plan</h3>
                  </div>
                  <div className="grid gap-4">
                    <div className="rounded-3xl bg-slate-950/70 border border-slate-700 p-5">
                      <p className="text-sm text-slate-400">Screens off by</p>
                      <p className="text-2xl font-semibold text-white">{calculator.screensOff}</p>
                    </div>
                    <div className="rounded-3xl bg-slate-950/70 border border-slate-700 p-5">
                      <p className="text-sm text-slate-400">Target bedtime</p>
                      <p className="text-2xl font-semibold text-white">{calculator.bedtime}</p>
                    </div>
                  </div>
                  <p className="text-slate-300">{calculator.exerciseNote}</p>
                  <Button
                    onClick={() => {
                      ReactGA.event({
                        category: 'engagement',
                        action: 'click',
                        label: 'build_full_routine'
                      });
                      navigate('/guide');
                    }}
                    className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl"
                  >
                    Build the full routine
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold">Contact</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mt-4"></div>
            </div>
            <Card className="bg-slate-800/60 border border-slate-700">
              <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
                <div className="rounded-2xl bg-blue-500/10 p-4">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <p className="text-xl font-semibold">Email us</p>
                  <p className="text-slate-300">teensleepguide@gmail.com</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Moon className="w-5 h-5 text-blue-400" />
            <span className="text-lg font-semibold">Teen Sleep Guide</span>
          </div>
          <p className="text-slate-500">© 2026 Teen Sleep Guide. Helping teens sleep better, one night at a time.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
