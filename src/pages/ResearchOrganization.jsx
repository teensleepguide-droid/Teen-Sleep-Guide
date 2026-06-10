import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import SurveyForm from '../components/SurveyForm';

const STORAGE_KEY = 'sleep_submissions';

const loadSubmissions = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
};

const ResearchOrganization = () => {
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState(() => loadSubmissions());

  useEffect(() => {
    setSubmissions(loadSubmissions());
  }, []);

  const handleSaved = (items) => {
    setSubmissions(items);
  };

  const averageRating = () => {
    if (!submissions || submissions.length === 0) return 0;
    const sum = submissions.reduce((s, it) => s + (it.rating || 0), 0);
    return (sum / submissions.length).toFixed(2);
  };

  const exportCSV = () => {
    if (!submissions || submissions.length === 0) return;
    const headers = ['id', 'date', 'wakeUpTime', 'bedTime', 'rating', 'notes'];
    const rows = submissions.map((r) => headers.map((h) => JSON.stringify(r[h] ?? '')).join(','));
    const csv = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sleep_submissions.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => navigate('/')} className="text-slate-300 hover:text-blue-400">Back to Home</button>
          <div className="text-xl font-semibold">Research — Teen Sleep Guide</div>
        </div>
      </header>

      <main className="pt-32 px-6 pb-24">
        <div className="container mx-auto max-w-5xl space-y-8">
          <Card className="bg-slate-800/60 border-slate-700">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">R</div>
                <div>
                  <CardTitle className="text-2xl">Sleep Research & Surveys</CardTitle>
                  <p className="text-slate-400 mt-1">Collecting anonymous student schedules and sleep-friendliness ratings to inform research and reports.</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300">Our research work examines how daily schedules and evening habits affect teens' perceived sleep quality. Students can submit a short daily log and a rating — data is stored locally in the browser for demo purposes.</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle>Submit a Daily Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <SurveyForm onSaved={handleSaved} />
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle>Collected Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">Submissions: <strong className="text-white">{submissions.length}</strong></p>
                <p className="text-slate-300">Average sleep-friendliness: <strong className="text-white">{averageRating()}</strong></p>
                <div className="mt-4 flex gap-3">
                  <Button onClick={exportCSV} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">Export CSV</Button>
                  <Button onClick={() => { localStorage.setItem(STORAGE_KEY, JSON.stringify([])); setSubmissions([]); }} className="bg-slate-800/50 text-slate-200 px-4 py-2">Clear</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle>Recent Entries</CardTitle>
              </CardHeader>
              <CardContent>
                {submissions.length === 0 ? (
                  <p className="text-slate-400">No entries yet.</p>
                ) : (
                  <div className="space-y-4">
                    {submissions.slice().reverse().slice(0, 6).map((s) => (
                      <div key={s.id} className="rounded-2xl bg-slate-950/60 border border-slate-700 p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-slate-400">{s.date}</div>
                            <div className="text-white font-semibold">Wake {s.wakeUpTime} • Bed {s.bedTime}</div>
                          </div>
                          <div className="text-sm text-blue-300">Rating: {s.rating}</div>
                        </div>
                        {s.notes && <div className="mt-2 text-slate-300 text-sm">{s.notes}</div>}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResearchOrganization;
