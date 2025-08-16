import type { NextPage } from "next";
import { useState, Fragment, ChangeEvent } from "react";

type ApiResponse = {
  message: string;
};

const App: NextPage = () => {
  const [result, setResult] = useState<ApiResponse | null>(null);
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    try {
      console.log('クライアントサイド: リクエスト送信開始', { id: name });

      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: name }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('クライアントサイド: レスポンス受信', data);
        setResult(data);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>gRPC Client</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Request'}
        </button>
      </form>

      {result && (
        <div>
          <h3>Response:</h3>
          <p>Message: {result.message}</p>
        </div>
      )}
    </div>
  );
};

export default App;