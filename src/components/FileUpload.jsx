import styles from './FileUpload.module.css';

function FileUpload({ selectedFile, onFileSelect, onFileRemove, fileError }) {

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
            {selectedFile && (
                <p>
                    Selected file: <strong>{selectedFile.name}</strong>
                </p>
            )}
            {fileError && (
                <p className={styles.fileError} role="alert">
                    {fileError}
                </p>
            )}
            <button type="button" onClick={onFileRemove}>
                Remove file
            </button>
        </section>
    );
}

export default FileUpload;