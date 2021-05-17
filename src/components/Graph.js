import React, { useState, useEffect } from 'react';
import raw from '../APT.AX.csv';
// React Libraries
import * as XLSX from 'xlsx';
import { Line } from 'react-chartjs-2';

const Graph = () => {
    const [prices, setPrices] = useState([]);


    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(raw);

            fileReader.onload = e => {
                const bufferArray = e.target.result;

                const wb = XLSX.read(bufferArray, {type: 'buffer'});

                const wsname = wb.SheetNames[1];

                const ws=wb.Sheets[wsname];

                const data=XLSX.utils.sheet_to_json(ws);

                resolve(data);
            }

            fileReader.onerror=(error => {
                reject(error);
            })
        })

        promise.then(d => {
            setPrices(d);
        })
    });

    return (
        <div>
            <Line
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green'],
                    datasets: [
                        {
                            label: 'Share Price',
                            borderColor: 'black',
                            backgroundColor: 'white',
                            data: {prices},
                        }
                    ],
                }}
                height={400}
                width={400}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                font: {
                                    size: 24,
                                }
                            }
                        }
                    }
                }}
            />
        </div>
    );


}

export default Graph;
