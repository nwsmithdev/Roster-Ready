import { useState } from 'react';
import AppHeader from './components/AppHeader';
import IntroSection from './components/IntroSection';
import FileUpload from './components/FileUpload';
import styles from './App.module.css';
import Papa from 'papaparse';

function App() {

  const [ selectedFile, setSelectedFile ] = useState(null);
  const [ fileError, setFileError ] = useState("");
  const [ parsedRows, setParsedRows ] = useState([]);

  const handleFileSelect = (file) => {
    if (!file) return;
    if (!file.name.toLowerCase().endsWith(".csv")) {
      setSelectedFile(null);
      setFileError("Please select a CSV file.");
      return;
    }
    setFileError("");
    setSelectedFile(file);
    setParsedRows([]);
  }

  const handleFileRemove = () => {
    setSelectedFile(null);
    setParsedRows([]);
  }

  const handleValidate = () => {
    if (!selectedFile) return;

    Papa.parse(selectedFile, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        console.log(results);
        setParsedRows(results.data);
      },
    });
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
        onValidate={handleValidate}
      />
      {parsedRows.length > 0 && (
        <p role="status" className={styles.tempStatus}>
          {parsedRows.length} records parsed successfully
        </p>
      )}
    </>
  )
}

export default App
