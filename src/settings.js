module.exports = {
  // 页面title
  title: '三年开发经验',
  // 发布pages的仓库名（博客部署文件存放的仓库名）
  pagesRepo: 'gitee-blog',
  // 网站配置信息
  siteOptions: {
    title: '三年开发经验',
    subtitle: '厕所开发',
    author: '卑微小张',
    description: '可怜.jpg',
    github: 'https://github.com/zff-programmer',
    navMenu: {
      '/index': '首页',
      '/article': '文章',
      '/works': '作品',
      '/article/关于本站': '关于本站'
    },
    skills: ['JavaScript', 'Css', 'C#', 'Sql Server'],
  },
  // 评论配置信息
  commentOptions: {
    owner: 'zclzone',
    repo: 'gitee-blog',
    clientId: '13f12c4d3203ceee7d22',
    clientSecret: '4de1abe7fa4d21bc1c76b6e03a86f0cc2d4afc83'
  },
  // gitee oauth
  giteeOauthOptions: {
    baseOauthUrl: 'https://gitee.com/oauth',
    clientId: '5469618e0b5d3fb058336b82c907bc9459f3c727ad1eb060325a803d91209a52',
    clientSecret: 'cb90ca23bd37be8d8a1aa53551db8cef4a5b148babef6aa78f3ad58e778c0abd',
    redirectUri: 'https://zclzone.gitee.io/redirect'
  },
  // gitee api
  giteeApiOptions: {
    baseApiURL: 'https://gitee.com/api/v5',
    owner: 'Sally-Zhang',
    repo: 'gitee-blog-db'
  }
}