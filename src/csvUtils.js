// csvUtils.js
export function downloadCSV(data, filename) {
    const csvData = objectToCSV(data);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', href);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function objectToCSV(data) {
    const keys = Object.keys(data[0]);
    const csvHeader = keys.join(',');

    const csvRows = data.map(obj => {
        const values = keys.map(key => {
            const value = obj[key];
            return typeof value === 'string' ? `"${value}"` : value;
        });
        return values.join(',');
    });

    return `${csvHeader}\n${csvRows.join('\n')}`;
}