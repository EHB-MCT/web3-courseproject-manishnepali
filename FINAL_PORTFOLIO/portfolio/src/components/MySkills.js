import '../App.css';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,LineChart  } from 'recharts';
import { PureComponent } from 'react';


function MySkills(){

  const data= [
    { name: 'vanilla javascipt', value: 20 },
    { name: 'Angnular', value: 30 },
    { name: 'React', value: 40 },
    { name: 'Vue', value: 30 },
    
  ];

  const dataAdobe= [
    { name: 'Illustrator', value: 30 },
    { name: 'Photoshop', value: 20 },
    { name: 'Premiere pro', value: 15 },
    { name: 'After effects', value: 15 },
    { name: 'Xd', value: 20}
    
  ];
  const COLORS = ['#EFD819', '#D7022F', '#78D9F6', '#3EB37F'];
  const ColorsAdobe = ['#FF9A00', '#32A8FF', '#9999FF', 'red', '#FF61F6'];
  let renderLabel = function(entry) {
    return entry.name;
}
  return (
    <div className="myskills">
     <div className="OnePager"
     style={{backgroundColor: '#6c7a89'}}>
      <h1>My skills</h1>
   
     <PieChart width={1200} height={500} id="chart">
        <Pie
          data={data}
          cx={450}
          cy={300}
          innerRadius={120}
          outerRadius={160}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={renderLabel}
          
        >
         
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              
              
          ))}
          
        </Pie>
        
        <Pie
          data={dataAdobe}
          cx={950}
          cy={300}
          innerRadius={120}
          outerRadius={160}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={renderLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={ColorsAdobe[index % ColorsAdobe.length]} id="cell"/>
              
              
          ))}
        </Pie>
        
        </PieChart>
        
     </div>
    </div>
  );
}

export default MySkills;
