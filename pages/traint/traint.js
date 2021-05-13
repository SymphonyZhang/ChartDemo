// pages/traint/traint.js
import * as echarts from '../../components/ec-canvas/echarts'

var xAxisData = []
var data1 = []
var data2 = []
var maxInterval =60


function formatTime(value) {
  if (value == 0) {
    return 0
  }
  let result = "",
    hour = 0,
    min = 0,
    sec = 0
  if (value >= 60 * 60) {
    hour = Math.floor(value / 60 / 60)
    if (hour < 10) {
      result = "0" + hour + ":"
    } else {
      result = "" + hour + ":"
    }
  }

  min = Math.floor((value - hour * 60 * 60) / 60)
  if (min < 10) {
    result = result + "0" + min + ":"
  } else {
    result = result + "" + min + ":"
  }
  sec = value % 60
  if (sec < 10) {
    result = result + "0" + sec
  } else {
    result = result + sec
  }
  return result
};

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);


  var option = {
    //backgroundColor: '#eee',
    grid: [{
      left: 70,
      bottom: "50%",

    }, {
      left: 70,
      top: "50%",
    }],
    xAxis: [{
      type: 'category',
      axisLine: {
        show: true,
        onZero: false,
        lineStyle: {
          color: '#999'
        }
      },
      splitLine: {
        show: false
      },
      silent:true,
      position: "bottom",
      //zlevel:10,
      show: true,
      min: 0,
    }, {
      type: 'category',
      data: xAxisData,
      axisLine: {
        show: true,
        onZero: false,
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: true,
        rotate: 70,
        color: "#F00",
      },
      gridIndex: 1,
      silent:true,
      position: "bottom",
      //zlevel:10,
      show: true,
      min: 0,
    }],
    yAxis: [{
        // type: 'value',
        // name: "示例1",
         splitNumber: 3,
         silent:true,
        // axisLine: {
        //   show: true,
        //   onZero: false,
        //   lineStyle: {
        //     color: "#000"
        //   }
        // },
        // axisLabel: {
        //   formatter: '{value}',
        //   fontSize: 16
        // },
        // minInterval: 1,
        // splitLine: false,
        // nameTextStyle: {
        //   fontSize: 16
        // },
        // min: 0
      },
      {
        // type: 'value',
        // name: "示例2",
        // axisLine: {
        //   show: true,
        //   onZero: false,
        //   lineStyle: {
        //     color: "#000"
        //   }
        // },
        // axisLabel: {
        //   formatter: '{value}',
        //   fontSize: 16
        // },
         minInterval: 60,
         silent:true,
         maxInterval:maxInterval,
        // position: "left",
        // splitLine: false,
        gridIndex: 1,
        // nameGap: 30,
        splitNumber: 2,
        inverse: true,
        axisLabel: {
          formatter: function (value, index) {
            return formatTime(value)
          }
        }
        // nameTextStyle: {
        //   fontSize: 16
        // },
        // min: 0
      }
    ],

    series: [{
        type: 'bar',
        barMaxWidth: 20,
        data: data1
      },
      {
        type: 'bar',
        barMaxWidth: 20,
        data: data2,
        xAxisIndex: 1,
        yAxisIndex: 1,
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    xAxisData = ["14:00", "14:10", "14:30", "15:15", "15:50","16:00","16:10","16:15","16:20","16:25","16:30","16:35","16:40","16:45","16:50","16:55","17:00","17:05"];
    data1 = [100, 500, 825, 300, 200,120,300,300,300,300,300,300,300,300,300,300,300,300];
    data2 = [30, 15, 45, 275, 410,33,270,270,270,270,270,270,270,270,300,300,300,300];
    var max = Math.max.apply(Math, data2)
    maxInterval = Math.ceil((max/60)/3)*60
    if(maxInterval < 60){
      maxInterval = 60
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})