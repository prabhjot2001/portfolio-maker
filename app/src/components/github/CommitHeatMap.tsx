import { useState, useEffect } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

type propsType = { repo: string };

const CommitHeatMap = ({ repo }: propsType) => {
  const [commitsData, setCommitsData] = useState<any[]>([]);

  useEffect(() => {
    const fetchCommits = async () => {
      const response = await fetch(
        `https://api.github.com/repos/prabhjot2001/${repo}/commits?per_page=100`
      );
      const data = await response.json();

      const commitDates: { [key: string]: number } = {};

      data.forEach((commit: any) => {
        const commitDate = new Date(
          commit.commit.committer.date
        ).toLocaleDateString();
        commitDates[commitDate] = (commitDates[commitDate] || 0) + 1;
      });

      const heatmapData = Object.keys(commitDates).map((date) => ({
        date: date,
        count: commitDates[date],
      }));

      setCommitsData(heatmapData);
    };

    fetchCommits();
  }, []);

  return (
    <div>
      <h2>GitHub Commit Heatmap</h2>
      <CalendarHeatmap
        startDate={new Date("2024-01-01")}
        endDate={new Date()}
        values={commitsData.map((commit) => ({
          date: new Date(commit.date),
          count: commit.count,
        }))}
        showWeekdayLabels={true}
        classForValue={(value) => {
          if (!value) return "color-empty";
          if (value.count >= 5) return "color-scale-4";
          if (value.count >= 3) return "color-scale-3";
          if (value.count >= 1) return "color-scale-2";
          return "color-scale-1";
        }}
      />
    </div>
  );
};

export default CommitHeatMap;
