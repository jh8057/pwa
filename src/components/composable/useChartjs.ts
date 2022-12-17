import { reactive, toRefs } from "vue";
export default () => {
  const state = reactive({
    chartData: {
      labels: ["NUMBER#1-ORANGE", "NUMBER#2-CORAL", "NUMBER#3-SALMON", "NUMBER#4-WHEAT"],
      datasets: [
        {
          backgroundColor: ["#FFA500", "#FF7F50", "#E18B6B", "#F5DEB3"],
          data: [40, 20, 80, 10],
        },
      ],
    },
    charOption : {
      responsive: true,
      maintainAspectRatio: false,
    }
  
  });


  const charOption = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const changeChartDataSize = () =>{
    console.log('changeChartDataSize')
    let newData = []
    for(let i = 0; i < 4;i++){
      let randomNum = Math.floor(Math.random() * 100)
      newData.push(randomNum)
    }
    state.chartData.datasets[0].data = newData
    console.log('state',state.chartData.datasets[0].data)
  }

  return {
    ...toRefs(state),
    changeChartDataSize
  };
};
