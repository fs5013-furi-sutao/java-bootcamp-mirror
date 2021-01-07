const path = require('path')

module.exports = {
  pathPrefix: "/java-bootcamp",
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        name: 'Java Bootcamp',
        siteUrl: 'https://fs5013-furi-sutao.github.io/java-bootcamp/',
        description: 'およそ 250 時間で Java 言語とプログラミングの 基礎 ～ 発展的内容までの知識を手に入れるフリースタイル ITS 所属の方向けのプログラム',
        baseDirectory: path.resolve(__dirname, '../'),
        author: 'Hashimoto Natsuki',
        sections: ['Java Bootcamp', '01.イントロ', '02.入門編'],
        navItems: [{ title: 'ホーム', url: '/home/' }],
        // twitterAccount: 'neoziro',
        githubRepositoryURL: 'https://github.com/fs5013-furi-sutao/java-bootcamp',
        carbonAdsURL:
          '//cdn.carbonads.com/carbon.js?serve=CE7IL2JN&placement=xstyleddev',
        docSearch: {
          apiKey: 'a0c23a738fe1cfffa923daba2eb185be',
          indexName: 'smooth-doc',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-154496255-5',
      },
    },
  ],
}
