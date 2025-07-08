import { useState } from 'react';

interface EmotionResult {
  emotion: string;
  confidence: number;
}

function App() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<EmotionResult | null>(null);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setResult(null);
    setError('');

    try {
      const res = await fetch('http://localhost:8000/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) throw new Error('API error');

      const data = await res.json();
      setResult(data);
      setText('');

    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-[#F8FAFC] to-[#E0F2F1] flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-8 space-y-6 border border-teal-100">
        <h1 className="text-3xl font-semibold text-center text-teal-600">Emotion Reflection</h1>

        <p className="text-sm text-gray-500 text-center">
          Write how you're feeling and get a gentle reflection on your emotional tone.
        </p>

        <textarea
          className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-700 placeholder:text-gray-400"
          rows={5}
          placeholder="e.g., I'm nervous about my first job interview"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setResult(null);
          }}
        />
        <button
          onClick={handleSubmit}
          disabled={loading || !text.trim()}
          className={`w-full py-3 rounded-xl font-semibold text-base transition duration-300 ease-in-out tracking-wide
    ${loading || !text.trim()
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed shadow-sm'
              : 'bg-gradient-to-r from-teal-400 to-cyan-500 text-white hover:from-teal-500 hover:to-cyan-600 shadow-lg hover:shadow-xl'}
  `}
        >
          {loading ? 'Analyzing...' : 'Reflect Emotion'}
        </button>


        {error && (
          <p className="text-red-600 text-sm text-center">{error}</p>
        )}

        {result && (
          <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-xl text-teal-800">
            <p className="text-lg font-medium">Detected Emotion: <span className="font-bold">{result.emotion}</span></p>
            <p className="text-sm mt-1">Confidence: {(result.confidence * 100).toFixed(1)}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
