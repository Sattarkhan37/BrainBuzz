function StartScreen({numQUestion,dispatch}) {
  return (
    <div className="start">
      <h2>Welocme to React Quiz</h2>
      <h3>{numQUestion} Question to Test your React mastery</h3>
      <button className="btn btn-ui" onClick={()=>dispatch({type:"start"})}>lets Start</button>
    </div>
  );
}

export default StartScreen;
