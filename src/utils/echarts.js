
import * as echarts from '../components/ec-canvas/echarts'

const initChart = data => {
  return function(canvas, width, height) {
    const chart = echarts.init(canvas, null, {
      width: width,
      height: height
    })
    canvas.setChart(chart)
  
    const option = {
      backgroundColor: '#fff',
      series: [{
        label: {
          normal: {
            fontSize: 14
          }
        },
        type: 'pie',
        roseType: true,
        center: ['50%', '50%'],
        radius: [0, '80%'],
        data,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 2, 2, 0.3)'
          }
        }
      }]
    }
  
    chart.setOption(option)
    return chart
  }
}

export default initChart