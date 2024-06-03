import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className='quiz-app'>
      <div className='score-section' style={{display:"none"}}>
        <h2>Your Score:3/3</h2>
        <button>Restart</button>
      </div>
      <div className='question-section'>
        <h2>Question 1</h2>
          <p>This is sample Question</p>
          <div  className='options'>
            <button>Option 1</button>
            <button>Option 2</button>
            <button>Option 3</button>
            <button>Option 4</button>
          </div>
          <div className='timer'>Time Left:<span>5s</span></div>
       
      </div>
    </div>


    </>
  );
}

export default App;
