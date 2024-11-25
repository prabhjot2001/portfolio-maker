import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CommitGraph = () => {
  const [commits, setCommits] = useState<any[]>([]);
  const [chartData, setChartData] = useState<any>({});

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/prabhjot2001/AI-Powered-notes-app/commits"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data from GitHub");
        }

        const data = await response.json();
        setCommits(data);


        const commitDates: string[] = [];
        const commitCounts: number[] = [];

     
        data.forEach((commit: any) => {
          const date = new Date(
            commit.commit.committer.date
          ).toLocaleDateString();
          const existingDateIndex = commitDates.indexOf(date);

          if (existingDateIndex !== -1) {
            commitCounts[existingDateIndex]++;
          } else {
            commitDates.push(date);
            commitCounts.push(1);
          }
        });

        setChartData({
          labels: commitDates,
          datasets: [
            {
              label: "Commits per Day",
              data: commitCounts,
              borderColor: "#0076b6",
              tension: 0.1,
              fill: false,
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchCommits();
  }, []);

  if (!chartData.labels || chartData.labels.length === 0) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <h2>Commits Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default CommitGraph;
