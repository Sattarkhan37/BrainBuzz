function Question({ questions }) {
  console.log(questions);

  return (
    <div>
      <h4>{questions.question}</h4>
    </div>
  );
}

export default Question;
