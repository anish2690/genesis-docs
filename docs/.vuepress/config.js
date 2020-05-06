module.exports = {
    base: '/genesis-docs/',
    title: 'Genesis',
    themeConfig: {
      repo: 'fmfe/genesis',
      repoLabel: 'Github',
      nav: [
        { text: '首页', link: '/' },
        { text: '指南', link: '/guide/' },
        {
          text: '核心库',
          items: [
            { text: 'genesis-core', link: '/core/' },
            { text: 'genesis-compiler', link: '/compiler/' },
            { text: 'genesis-app', link: '/app/' },
            { text: 'genesis-remote', link: '/remote/' },
            { text: 'square', link: '/square/' },
          ]
        }
      ],
      sidebar: [
        '/',
        {
          title: '指南',
          path: '/guide/',
          collapsable: false,
          children: [
            '/guide/'
          ]
        },
        {
          title: '进阶',
          path: '/guide/',
          collapsable: false,
          children: [
            '/guide/remote',
          ]
        }
      ]
    }
  }
  
  