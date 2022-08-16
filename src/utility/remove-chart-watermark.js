export const removeChartWatermark = (chart) => {
    chart.events.onAll(() => {
      for (const ele of document.getElementsByTagName('title')) {
        if (ele.textContent && ele.textContent.indexOf('amCharts library') > -1 && ele.parentNode && ele.parentNode.parentNode) {
          ele.parentNode.parentNode.removeChild(ele.parentNode)
        }
      }
      setTimeout(() => {
        for (const ele of document.getElementsByTagName('title')) {
          if (ele.textContent && ele.textContent.indexOf('amCharts library') > -1 && ele.parentNode && ele.parentNode.parentNode) {
            ele.parentNode.parentNode.removeChild(ele.parentNode)
          }
        }
      }, 4000)
    })
  }