export default defineAppConfig({
  pages: ['pages/index/index', 'pages/activity/index', 'pages/rights/index', 'pages/my/index'],
  tabBar: {
    custom: false,
    color: '#000000',
    selectedColor: '#000000',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '通知和介绍',
      },
      {
        pagePath: 'pages/activity/index',
        text: '活动预约',
      },
      {
        pagePath: 'pages/rights/index',
        text: '权益平台',
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
})
