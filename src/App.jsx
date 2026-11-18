import { useState } from 'react';
import AppHeader from './components/AppHeader';
import IntroSection from './components/IntroSection';
import FileUpload from './components/FileUpload';
import './App.module.css';

function App() {

  const [ selectedFile, setSelectedFile ] = useState(null);
  const [ fileError, setFileError ] = useState("");

  const handleFileSelect = (file) => {
    console.log(file)
    if (!file) return;
    if (!file.name.toLowerCase().endsWith(".csv")) {
      setSelectedFile(null);
      setFileError("Please select a CSV file.");
      return;
    }
    setFileError("");
    setSelectedFile(file);
  }

  const handleFileRemove = () => {
    setSelectedFile(null);
  }

  return (
    <>
      <AppHeader/>
      <IntroSection/>
      <FileUpload
        selectedFile={selectedFile}
        onFileSelect={handleFileSelect}
        onFileRemove={handleFileRemove}
        fileError={fileError}
      />
    </>
  )
}

export default App
