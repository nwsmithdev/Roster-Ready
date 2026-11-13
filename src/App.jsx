import { useState } from 'react';
import AppHeader from './components/AppHeader';
import IntroSection from './components/IntroSection';
import FileUpload from './components/FileUpload';
import './App.module.css';

function App() {
  return (
    <>
      <AppHeader/>
      <IntroSection/>
      <FileUpload/>
    </>
  )
}

export default App
