import { useState } from 'react';
import AppHeader from './components/AppHeader';
import IntroSection from './components/IntroSection';
import FileUpload from './components/FileUpload';
import styles from './App.module.css';
import { findMissingColumns } from './utils/validationRules.js';
import ValidationFeedback from './components/ValidationFeedback.jsx';
import Papa from 'papaparse';

function App() {

  const [ selectedFile, setSelectedFile ] = useState(null);
  const [ fileError, setFileError ] = useState("");
  const [ parsedRows, setParsedRows ] = useState([]);
  const [ missingColumns, setMissingColumns ] = useState([]);
  const [ hasValidated, setHasValidated ] = useState(false);

  const handleFileSelect = (file) => {
    if (!file) return;
    if (!file.name.toLowerCase().endsWith(".csv")) {
      setFileError("Please select a CSV file.");
      return;
    }
    setFileError("");
    setSelectedFile(file);
    setHasValidated(false);
    setMissingColumns([]);
    setParsedRows([]);
  }

  const handleFileRemove = () => {
    setSelectedFile(null);
    setFileError("");
    setHasValidated(false);
    setMissingColumns([]);
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
        const missing = findMissingColumns(results.meta.fields ?? []);
        setMissingColumns(missing);
        setHasValidated(true);
        console.log(missing);
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
      {hasValidated && (
        <ValidationFeedback
          missingColumns={missingColumns}
          recordCount={parsedRows.length}
        />
      )}
    </>
  )
}

export default App
