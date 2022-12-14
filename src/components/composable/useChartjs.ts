// import { reactive, toRefs } from "vue";
export default () => {
  // const state = reactive({
  //   p5: {},
  // });
  const chartData = {
    labels: ["NUMBER#1-ORANGE", "NUMBER#2-CORAL", "NUMBER#3-SALMON", "NUMBER#4-WHEAT"],
    datasets: [
      {
        backgroundColor: ["#FFA500", "#FF7F50", "#E18B6B", "#F5DEB3"],
        data: [40, 20, 80, 10],
      },
    ],
  };

  const charOption = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const changeChartDataSize = () =>{
    let newData = []
    for(let i = 0; i < 4;i++){
      let randomNum = Math.floor(Math.random() * 100)
      newData.push(randomNum)
    }
    chartData.datasets[0].data = newData
  }

  return {
    chartData,
    charOption,
    changeChartDataSize
  };
};
