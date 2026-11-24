
export const REQUIRED_COLUMNS = [
    'First Name',
    'Last Name',
    'Email',
    'Registration Status'
];

export const findMissingColumns = (headers) => {
    const updatedHeaders = headers.map((header) => header.trim().toLowerCase());

    const missingColumns = REQUIRED_COLUMNS.filter((requiredColumn) => {
        const normalizedColumn = requiredColumn.trim().toLowerCase();
        
        return !updatedHeaders.includes(normalizedColumn);
    });

    return missingColumns;
};
