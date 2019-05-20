import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const sounds = ['Okay', 'Bummer', 'Yikes', 'Dang', 'Good', 'Let\'s unpack that'];

let currentSound = {pause(){}};

function TitleBar() {
  return (
    <header>
      <h1>Voice Box</h1>
    </header>
  );
}

function file(word) {
  return `sounds/${word.toLowerCase().match(/\w/g).join('')}.mp3`;
}

function playSound(word) {
  currentSound.pause();
  currentSound = new Audio(file(word));
  currentSound.play();
}

function Sound(props) {
  return (
    <button onClick={() => playSound(props.word)}>
      <span>{props.word}</span>
    </button>
  );
}



function Grid() {
  return (
    <div className="Grid">
      {sounds.map(word => <Sound key={word} word={word} />)}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TitleBar />
      <Grid />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
