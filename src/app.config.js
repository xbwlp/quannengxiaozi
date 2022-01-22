export default defineAppConfig({
  pages: ['pages/index/index', 'pages/activity/index', 'pages/rights/index', 'pages/my/index'],
  tabBar: {
    custom: false,
    color: '#aaa',
    selectedColor: '#000000',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '通知和介绍',
        iconPath: 'img/home.png',
        selectedIconPath: 'img/home-current.png',
      },
      {
        pagePath: 'pages/activity/index',
        text: '活动预约',
        iconPath: 'img/activity.png',
        selectedIconPath: 'img/activity-current.png',
      },
      {
        pagePath: 'pages/rights/index',
        text: '权益平台',
        iconPath: 'img/rights.png',
        selectedIconPath: 'img/rights-current.png',
      },
      {
        pagePath: 'pages/my/index',
        text: '我的',
        iconPath: 'img/me.png',
        selectedIconPath: 'img/me-current.png',
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
