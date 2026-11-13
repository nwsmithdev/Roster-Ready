import styles from './FileUpload.module.css';

function FileUpload() {
    return (
        <section aria-labelledby="upload-heading">
            <h2 id="upload-heading">Upload your roster</h2>
            <p>Select a CSV file</p>
            <div>
                <span>Upload Icon</span>
                <p>Drag and drop your CSV file here</p>
                <p>or</p>
                <label htmlFor="roster-file">Browse files</label>
                <input id="roster-file" type="file"/>
                <p>CSV only - One file at a time</p>
            </div>
        </section>
    );
}

export default FileUpload;