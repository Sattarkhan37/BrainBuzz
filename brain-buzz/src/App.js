import Main from "./Main";
import Header from "./Header";
export default function App() {
  return (
    <div>
      <div className="app">
        <Header />
        <Main className="main">
          <p>1/15</p>
          <p>Question?</p>
        </Main>
      </div>
    </div>
  );
}
