import React from "react";
import { Bar } from "react-chartjs-2";

// charts options
const options = {
  maintainAspectRatio: false, // Don't maintain w/h ratio
  legend: {
    labels: {
      color: "#050c42",
      fontFamily:
        "'Jeju Gothic', 'Noto Sans KR', 'Nanum Gothic', 'Apple SD Gothic Neo', sans-serif",
      fontSize: 16,
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          displayFormats: {
            quarter: "MMM D",
          },
          tooltipFormat: "MMM D",
        },
        ticks: {
          color: "#050c42",
          fontFamily:
            "'Jeju Gothic', 'Noto Sans KR', 'Nanum Gothic', 'Apple SD Gothic Neo', sans-serif",
          fontSize: 13,
        },
        // x축 최대값 보다 공간 확보
        afterDataLimits(scale) {
          scale.max += 1;
          scale.min -= 1;
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          //   suggestedMax: axis.max + 10,
          color: "#050c42",
          fontFamily:
            "'Jeju Gothic', 'Noto Sans KR', 'Nanum Gothic', 'Apple SD Gothic Neo', sans-serif",
          fontSize: 13,
        },
        // y축 최대값 보다 공간 확보
        afterDataLimits(scale) {
          scale.max += 1;
          //   scale.min -= 1;
        },
      },
    ],
  },
};

const MainChart = ({ clickCount }) => {
  //charts
  const date = new Date(Date.now());
  let dateData = [];

  console.log("clickCount", clickCount);

  // clickCount 있는거 만큼 반복
  for (let dayCount in clickCount) {
    // data 삽입
    dateData.push({
      x: new Date("2020", date.getMonth(), dayCount),
      y: clickCount[dayCount],
    });
  }
  // 마지막에 하루 추가해서 여백 차지
  dateData.push({
    x: new Date("2020", date.getMonth(), date.getDate() + 1),
    y: 0,
  });

  // dateData.push(
  //   { x: new Date("2020", date.getMonth(), date.getDate() - 12), y: 2 },
  //   { x: new Date("2020", date.getMonth(), date.getDate() - 9), y: 40 },
  //   { x: new Date("2020", date.getMonth(), date.getDate() - 6), y: 20 },
  //   { x: new Date("2020", date.getMonth(), date.getDate() - 3), y: 50 },
  //   { x: new Date("2020", date.getMonth(), date.getDate()), y: 30 },
  //   { x: new Date("2020", date.getMonth(), date.getDate() + 1), y: 0 }
  // );

  console.log(dateData);

  // charts data
  const data = {
    datasets: [
      {
        label: "일별 클릭통계",
        fill: true,
        //   lineTension: 0.3,
        backgroundColor: "rgba(94, 203, 161, 0.7)",
        borderColor: "rgba(94, 203, 161, 0.5)",
        hoverBackgroundColor: "rgb(0, 0, 0)",
        hoverBorderColor: "rgba(220, 220, 220,1)",

        data: dateData,
      },
    ],
  };

  return (
    <>
      <article className="canvas-container">
        <Bar data={data} options={options} height={300} />
      </article>
    </>
  );
};

export default MainChart;
