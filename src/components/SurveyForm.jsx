import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const STORAGE_KEY = 'sleep_submissions';

const loadSubmissions = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
};

const saveSubmissions = (items) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    // ignore
  }
};

const SurveyForm = ({ onSaved }) => {
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [wakeUpTime, setWakeUpTime] = useState('07:00');
  const [bedTime, setBedTime] = useState('23:00');
  const [rating, setRating] = useState(3);
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // keep values stable when component mounts
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const entry = {
      id: Date.now(),
      date,
      wakeUpTime,
      bedTime,
      rating: Number(rating),
      notes,
    };

    const items = loadSubmissions();
    items.push(entry);
    saveSubmissions(items);

    setTimeout(() => {
      setSubmitting(false);
      setNotes('');
      setRating(3);
      if (onSaved) onSaved(items);
    }, 250);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <label className="space-y-2 text-slate-300">
          <span className="text-sm">Date</span>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-white" />
        </label>
        <label className="space-y-2 text-slate-300">
          <span className="text-sm">Wake up time</span>
          <input type="time" value={wakeUpTime} onChange={(e) => setWakeUpTime(e.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-white" />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <label className="space-y-2 text-slate-300">
          <span className="text-sm">Bedtime</span>
          <input type="time" value={bedTime} onChange={(e) => setBedTime(e.target.value)} className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-white" />
        </label>
        <label className="space-y-2 text-slate-300">
          <span className="text-sm">Sleep-friendliness (1–5)</span>
          <input type="range" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} className="w-full" />
          <div className="text-slate-300">Rating: {rating}</div>
        </label>
      </div>

      <label className="space-y-2 text-slate-300">
        <span className="text-sm">Daily schedule / notes</span>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4} className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-white" placeholder="Describe your day: classes, homework, screen use, activities..." />
      </label>

      <div className="flex gap-4">
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3" disabled={submitting}>{submitting ? 'Saving...' : 'Submit'}</Button>
        <Button type="button" onClick={() => {
          const items = loadSubmissions();
          saveSubmissions([]);
          if (onSaved) onSaved([]);
        }} className="bg-slate-800/50 text-slate-200 px-6 py-3">Clear All</Button>
      </div>
    </form>
  );
};

export default SurveyForm;
