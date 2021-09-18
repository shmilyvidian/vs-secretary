export default {
  pages: [
    'pages/index/index',
  ],
  // 分包
  subPackages: [
    {
      "root": 'pages/resumeInfo',
      "pages": ["index"]
    },
    {
      "root": 'pages/mine',
      "pages": ["index"]
    },
    {
      "root": 'pages/resumeAdd',
      "pages": ["index"]
    },
    {
      "root": 'pages/resumeUpload',
      "pages": ["index"]
    },
    {
      "root": 'pages/search',
      "pages": ["index"]
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#F9612A',
    navigationBarTitleText: '简历助手',
    navigationBarTextStyle: 'white'
  }
}
