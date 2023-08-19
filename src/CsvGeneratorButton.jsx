// CsvGeneratorButton.jsx
import React from 'react';
import { createRandomTitle, createRandomCredit } from './randomGenerators';
import { downloadCSV } from './csvUtils';

function CsvGeneratorButton() {
    const generateDataAndDownload = () => {
        const titles = Array.from({ length: 100 }, createRandomTitle);
        const credits = titles.flatMap(title => Array.from({ length: 3 }, () => createRandomCredit(title.id)));

        downloadCSV(titles, 'titles.csv');
        downloadCSV(credits, 'credits.csv');
    };

    return <button onClick={generateDataAndDownload}>Generate and Download CSVs</button>;
}

export default CsvGeneratorButton;
