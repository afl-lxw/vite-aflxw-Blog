
export const navbarZh: any = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    activeMatch: '^/web/',
    items: [
      {
        text: 'Web',
        items: [
          { text: 'Javascript', link: '/web/javascript/设计模式.md' },
          { text: 'Typescript', link: '/web/typescript/' },
          { text: 'Vue', link: '/web/vue/' },
          { text: 'Webpack', link: '/web/webpack/' },
          { text: 'CICD', link: '/web/cI-CD/' },
          { text: 'WebGL', link: '/web/webGL/' },
          { text: 'THREE.js', link: '/web/threejs/' },
          { text: 'React', link: '/web/react/' },
        ]
      },
      {
        text: '集成测试',
        items: [
          { text: 'cypress', link: '/tests/cypress/' },
          { text: 'playwright', link: '/tests/playwright/' },

        ]
      },
      {
        text: '混合开发',
        items: [
          { text: 'Flutter', link: '/flutter/' },
          { text: 'React Native', link: '/reactNative/' },

        ]
      },
    ]
  },
  {
    text: 'service',
    items: [
      { text: "Nodejs", link: '/service/node/' },
      { text: "Golang", link: '/service/go/' },
      { text: "Rust", link: '/service/rust/' },
      {
        text: '服务',
        items: [
          { text: "Docker", link: '/service/docker/' },
          { text: "Mongodb", link: '/service/mongodb/' },
          { text: "Mysql", link: '/service/mysql/' },
          { text: "Elasticsearch", link: '/service/elasticsearch/' },
          { text: "Redias", link: '/service/redis/' },


        ]
      },
    ]
  },
  {
    text: "Harmony",
    items: [
      {
        text: "Ark",
        items: [
          { text: "ArkTs", link: '/harmony/ark/arkts/' },
          { text: "ArkUI", link: '/harmony/ark/arkui/' },
        ]
      },
      {
        text: "Harmony OS",
        items: [

        ]
      },
    ]
  },
  {
    text: 'Design',
    items: [
      {
        text: "UI/UX",
        items: [
          { text: "UI", link: '/design/ui/' },
          { text: "UX", link: '/design/ux/' },

        ]
      },
    ]
  },
  {
    text: '归档',
    items: [
      {
        text: "有点意思",
        items: [
          { text: "小技巧", link: '/docMD/order/' },
        ]
      },
      {
        text: "其他",
        items: [
          { text: "Mac", link: '/docMD/mac/' },
          { text: "Git", link: '/docMD/git/' },
        ]
      },
    ]
  },
]

