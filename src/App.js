import React from 'react';
import './App.css';

import ParagraphOne from './components/ParagraphOne.jsx';
import ParagraphTwo from './components/ParagraphTwo.jsx';
import Button from './components/reusables/Button.jsx';
import NavBar from './components/reusables/Navbar.jsx';
import Page from './components/reusables/Page.jsx';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Page>
        <ParagraphOne />
        <ParagraphTwo />
        <ParagraphOne />
        <ParagraphTwo />
        <Button />
      </Page>
    </React.Fragment>
  );
}

export default App;
