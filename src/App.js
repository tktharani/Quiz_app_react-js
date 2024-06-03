import logo from './logo.svg';
import './App.css';
import questiondata from "./questions.json"
import { useEffect, useState } from 'react';

function App() {
  const[currentQuestion,setCurrentQuestion]=useState(0);
  const[score,setScore]=useState(0);
  const[showScore,setShowScore]=useState(false);
  const[timer,setTimer]=useState(10);

  useEffect(()=>{
    let interval;
    if(timer > 0 && !showScore){
      interval =setInterval(()=>{
        setTimer((prevTimer)=>prevTimer - 1);

      },1000)
    }
    else{
      clearInterval(interval);
      setShowScore(true);

    }
    return ()=>clearInterval(interval);

  },[timer,showScore])

  const handleAnswerclick = (selectedOption)=>{
    if(selectedOption===questiondata[currentQuestion].correctOption)
      {
      setScore((prevScore)=>prevScore + 1)
    }
    if (currentQuestion < questiondata.length -1){
      setCurrentQuestion((prevQuestion)=>prevQuestion + 1);
      setTimer(10);
    }
    else{
      setShowScore(true);
    }

  }
  const handlerestart =()=>{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimer(10);

  }

  

  return (
    <>
    <div className='quiz-app'>
        {showScore?(
          <div className='score-section' >
            <h2>Your Score:{score}/{questiondata.length} </h2>
              <button onClick={handlerestart}>Restart</button>
            </div>
        ):(
          <div className='question-section'>
        <h2>Question {currentQuestion+1}</h2>
          <p>{questiondata[currentQuestion].question}</p>
          <div  className='options'>
           {questiondata[currentQuestion].
           options.map((option,index)=>(
            <button key={index} onClick={()=>handleAnswerclick(option)}>{option}</button>
           ))}
          </div>
          <div className='timer'>Time Left:<span>{timer}s</span></div>
      </div> 
    )}
       </div>


    </>
  );
}

export default App;
