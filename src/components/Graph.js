import { Line } from 'react-chartjs-2';

const Graph = () => {
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
                            data: [12, 3, 2, 5, 3],
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
