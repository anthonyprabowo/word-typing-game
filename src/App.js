import React, {useState, useEffect} from 'react';
import './App.css';
import Words from './components/Words.js';
import Container from './components/Container.js';
import TypeRacer from './components/TypeRacer.js';
import Result from './components/Result.js';

function App() {
  const [word, setWord] = useState(Words);
  const [newWord, setNewWord] = useState(word[0]);
  const [disabled, setDisabled] = useState(true);
  const [timer, setTimer] = useState(30);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [result, setResult] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [animation, setAnimation] = useState(null);

  let randomWord = Math.floor(Math.random() * word.length);

  const checkAnswer = () => {
    if(inputValue.trim() === newWord) {
      setCorrectAnswer(prevCorrect => [...prevCorrect, newWord])
      setResult(prevCorrectResult => prevCorrectResult + 1);
      return;
    }
    setWrongAnswer(prevWrong => [...prevWrong, inputValue]);
  }

  const handleInput = e => {
    if(e.charCode === 13 && inputValue.trim() !== '') { // check if the user press enter and if the input value is not an empty string
      checkAnswer();
      setNewWord(word[randomWord]); // set word with random word
      setInputValue('');
    } 
  }

  const handleStart = () => {
    setDisabled(!disabled);
    setCorrectAnswer([]);
    setWrongAnswer([]);
    setResult(0);
    setInputValue("");
  }

  useEffect(() => {
    if(timer <= 30 && timer !== 0 && disabled === false) {
      setTimeout(() => setTimer(prevTime => prevTime - 1), 1000)
    } else if(disabled) {
      setTimer(30);
      setAnimation(null);
    } else if(timer === 0) {
      setDisabled(true);
    }

    if(timer <= 10) {
      setAnimation("scaleNumber 2s infinite");
    }
  }, [disabled, timer]);

  useEffect(() => {
    setNewWord(word[randomWord]);
  },[])

  return (
    <div className="App">
      <Container>
        <TypeRacer newWord={newWord} timer={timer} disabled={disabled} setInputValue={setInputValue} inputValue={inputValue} animation={animation} handleInput={handleInput} handleStart={handleStart} />
      </Container>
      <Result correctAnswer={correctAnswer} result={result} wrongAnswer={wrongAnswer}/>
      
      
      
    </div>
  );
}

export default App;
