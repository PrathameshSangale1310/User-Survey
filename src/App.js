import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Qna from './components/Qna';
import questions from './components/Questions';
import './App.css';

function App() {
  const [surveyStarted, setSurveyStarted] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={!surveyStarted ? <Welcome onStart={() => setSurveyStarted(true)} /> : <Qna questions={questions} />}
        />
        <Route
          path="/welcome"
          element={<Welcome onStart={() => setSurveyStarted(true)} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
