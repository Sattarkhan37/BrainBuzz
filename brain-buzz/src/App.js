import Main from "./Main";
import Header from "./Header";
import { useEffect, useReducer } from "react";
import Loader from "./Loader.js";
import Error from "./Error.js";
import StartScreen from "./StartScreen.js";
import Question from "./Question.js";
const initialState = {
  questions: [],
  //loading,'error','active','finisher'
  status: "loading",
};
function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
      case 'start':
        return{...state,status:'active'}

    default:
      throw new Error("Action is Unknow");
  }
}
export default function App() {
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);
  const numQUestion = questions.length;
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);
  return (
    <div>
      <div className="app">
        <Header />
        <Main>
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && <StartScreen numQUestion={numQUestion} dispatch={dispatch}/>}
          {status ==="active"&&<Question/>}
        </Main>
      </div>
    </div>
  );
}
