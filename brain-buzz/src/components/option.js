function option() {
    return (
        <div>
            <div className="options">
        {questions.options.map((option) => (
          <button className="btn btn-option" key={option}>{option}</button>
        ))}
      </div>
        </div>
    )
}

export default option
