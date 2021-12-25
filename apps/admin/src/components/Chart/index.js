import "./chart.css";
// rechart
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart({title, data, dataKeyXAxis, dataKeyLine}) {
  return (
    <div className="chart">
      <h3 className="chart-title">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey={dataKeyXAxis}/>
          <Line type="monotone" dataKey={dataKeyLine} stroke="#5c1111"/>
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
