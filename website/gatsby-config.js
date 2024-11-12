const path = require('path')

module.exports = {
  pathPrefix: "/java-bootcamp-mirror",
  plugins: [
    {
      resolve: 'smooth-doc',
      options: {
        name: 'Java Bootcamp',
        siteUrl: 'https://fs5013-furi-sutao.github.io/java-bootcamp-mirror/',
        description: 'およそ 250 時間で Java 言語とプログラミングの 基礎 ～ 発展的内容までの知識と技能を手に入れるフリースタイル ITS 所属の方向けのプログラムです',
        baseDirectory: path.resolve(__dirname, '../'),
        author: 'Hashimoto Natsuki',
        sections: ['Java Bootcamp', '01.イントロ', '02.入門編', '03.初級編', '04.中級編', '05.上級編', '06.マスタ編' , '07.初級PG認定試験対策' , 'サイトについて'],
        navItems: [{ title: 'ホーム', url: '/home/' }],
        // twitterAccount: 'neoziro',
        githubRepositoryURL: 'https://github.com/fs5013-furi-sutao/java-bootcamp-mirror',
        carbonAdsURL:
          '//cdn.carbonads.com/carbon.js?serve=CE7IL2JN&placement=xstyleddev',
        docSearch: {
          appId: 'J2LYQ9877O',
          apiKey: '9295224c1474afa9f75f7d4772a1f713',
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
