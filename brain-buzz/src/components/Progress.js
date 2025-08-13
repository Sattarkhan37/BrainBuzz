function progress({ index, numQUestion, points, maxPossiblePoints,answer }) {
  return (
    <header className="progress">
      <progress max={numQUestion} value={index+Number(answer!==null)} />
      <p>
        Question<strong>{index + 1}</strong>/{numQUestion}
      </p>
      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}

export default progress;
