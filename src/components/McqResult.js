export default function McResult({ result, retry }) {
    return (
      <div className="result-screen">
        <h2>Result: {result.percentage}%</h2>
        <p>
          Selected {result.correct} correct option out of {result.total} questions
        </p>
        <button onClick={retry}>Retry</button>
      </div>
    );
  }
  