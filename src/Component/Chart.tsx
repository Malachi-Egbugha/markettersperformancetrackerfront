import React,{useState} from 'react';
import { Pie } from 'react-chartjs-2';
type ChartProps = {
    data: number[],
    labels: string[]
    }
const Chart = ({data,labels}:ChartProps) => {
    
    const [chartData, setChartData] = useState({
        labels:labels,
        datasets: [
            {
                label:'Population',
                data:data,
                backgroundColor:
                    ['rgb(209,236,241,1)',
                        'rgb(210,249,238,1)',
                        'rgb(214,216,217,1)',
                        'rgb(253,220,223,1)',
                        'rgb(56, 164, 186, 1)',
                        'rgb(247,4,3,1)'
                    ],
                
            }
        ]
    })
    return (
        <div className="chart">
            <Pie
                type="pie"
                
                
	data={chartData}
	options={{ 
                   
                    
                }}
                
/>

        </div>
        
    )
    
}

export default Chart