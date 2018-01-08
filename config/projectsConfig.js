module.exports = {
    projects: [
      {
        name: 'index',
        name_cn: '项目列表',
        HtmlWebpackPlugin: {
          filename: 'index.html',
          template: 'src/templates/index.html',
          inject: true,
          chunks: ['projectList']
        },
        entry: ['projectList']
      },
      {
        name: 'NEN',
        name_cn: 'nen',
        HtmlWebpackPlugin: {
          filename: 'nen.html',
          template: 'src/templates/nen.html',
          title: 'nen',
          inject: true,
          chunks: ['nen']
        },
        entry: ['nen']
      },
    ]
  }
  