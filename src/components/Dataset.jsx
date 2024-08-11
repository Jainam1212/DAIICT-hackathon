import React, { useEffect, useState } from 'react';
import Papa from 'papaparse'; // Import PapaParse for parsing CSV files

export const ExcelViewer = () => {
    const [csvData, setCsvData] = useState(null); // State for CSV data

    useEffect(() => {
        const fetchCSVData = async () => {
            const url = `${process.env.PUBLIC_URL}/files/HELIO4CAST_ICMECAT_v22.csv`; 
            const response = await fetch(url);
            const text = await response.text();

            // Parse the CSV text
            Papa.parse(text, {
                complete: (results) => {
                    setCsvData(results.data); // Set parsed CSV data to state
                },
                header: false // Set to true if your CSV has a header row
            });
        };

        fetchCSVData(); // Fetch CSV data on component mount
    }, []); // Empty dependency array to run once on mount

    return (
        <div className="excel-viewer-container" style={{ marginLeft: "78px" }}>
            <div className="container">
                <div className="row p-3">
                    <div className="col-md-12">
                        <h2 style={{textAlign:'center',fontSize:'3rem',fontWeight:'bold',color:'white'}}>CSV Data Viewer</h2>
                    </div>
                </div>
            </div>

            {csvData && (
                <div className="excel-table-container" style={{overflowY: "auto", overflowX: "auto" }}>
                    <table className="excel-table" style={{ borderCollapse: 'collapse', width: '100%' }}>
                        <thead>
                            <tr>
                                {csvData[0].map((header, index) => (
                                    <th key={index} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody style={{color:'white'}}>
                            {csvData.slice(1).map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex} style={{ border: '1px solid #ddd', padding: '8px' }}>{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

