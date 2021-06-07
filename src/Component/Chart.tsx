import { title } from 'process';
import React,{useState,useEffect} from 'react';
import { Bar } from 'react-chartjs-2';
type ChartProps = {
    dataenter: number[],
    labelsenter: string[],
    titled:string,
    }
const Chart = ({ dataenter, labelsenter, titled }: ChartProps) => {
    const [enterdata, setEnterdata] = useState<number[]>(dataenter);
    const [enterlabels, setEnterlabels] = useState<string[]>(labelsenter);
      const [entertitle, setEntertitle] = useState<string>(titled);
    
    let setvar = () => {
        setEnterdata(dataenter);
        setEnterlabels(labelsenter);
        setEntertitle(titled);
    }
    useEffect(() => {
    setvar();
  },[] );
    
    const [chartData, setChartData] = useState({
        labels:enterlabels,
        datasets: [
            {
                label:entertitle,
                data:enterdata,
                backgroundColor:
                    [   'rgb(255,205,241,1)',
                        'rgb(210,249,238,1)',
                        //'rgb(214,216,217,1)',
                        //'rgb(253,220,223,1)',
                        //'rgb(56, 164, 186, 1)',
                        //'rgb(247,4,3,1)'
                    ],
                
            }
        ]
    })
    return (
        <div className="chart">
            <Bar
                type="bar"
                
                
	data={chartData}
                options={{
                    title: {
                        display: true,
                        text: "testing",
                        fontSize:20
                    },
                    legend: {
                        display: true,
                        position:'right'
                    }
                   
                    
                }}
                
/>

        </div>
        
    )
    
}

export default Chart