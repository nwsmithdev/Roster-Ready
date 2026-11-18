import styles from './FileUpload.module.css';

function FileUpload({ selectedFile, onFileSelect, onFileRemove, fileError, onValidate }) {

    function handleFileChange(e) {
        const file = e.target.files[0];
        if (!file) return;
        onFileSelect(file);
    }

    return (
        <section aria-labelledby="upload-heading" className={styles.fileUploadSection}>
            <h2 id="upload-heading" className={styles.uploadTitle}>Upload your roster</h2>
            <p className={styles.uploadInstructions}>Select a CSV file</p>
            <div className={styles.dropZone}>
                <span className={styles.uploadIcon}>Upload Icon</span>
                <p className={styles.uploadDrop}>Drag and drop your CSV file here</p>
                <p className={styles.fileSeparator}>or</p>
                <label htmlFor="roster-file" className={styles.browseLabel}>Browse files</label>
                <input className={styles.fileInput} id="roster-file" type="file" accept=".csv,text/csv" onChange={handleFileChange}/>
                <p className={styles.fileReq}>CSV only - One file at a time</p>
            </div>

            {/* conditionally adds the filename once a file has been uploaded */} 
            {selectedFile && (
                <p>
                    Selected File: <strong>{selectedFile.name}</strong>
                </p>
            )}

            {/* conditionally adds a validate button for the uploaded file */}
            {selectedFile && (
                <button type="button" onClick={onValidate}>
                    Validate Roster
                </button>
            )}

            {/* conditonally adds error statements if there are errors during the upload process */}
            {fileError && (
                <p className={styles.fileError} role="alert">
                    {fileError}
                </p>
            )}

            {/* if a file has been uploaded, gives a user the option to remove it */}
            <button type="button" onClick={onFileRemove}>
                Remove File
            </button>
        </section>
    );
}

export default FileUpload;