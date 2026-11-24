

function ValidationFeedback({ missingColumns, recordCount }) {
    const hasMissingColumns = missingColumns.length > 0;
    
    return(
        <section aria-live="polite">
            {hasMissingColumns ? (
                    <>
                        <h3>Required columns are missing!</h3>
                        <p>Update your csv</p>
                        <ul>
                            {missingColumns.map((column) => (
                                <li key={column}>{column}</li>
                            ))}
                        </ul>
                    </>
                ) : (
                    <>
                        <h3>File structure looks good!</h3>
                        <p>All required columns were found.</p>
                        <p>{recordCount} records were successfully read.</p>
                    </>
                )}
        </section>
    );
}

export default ValidationFeedback;

