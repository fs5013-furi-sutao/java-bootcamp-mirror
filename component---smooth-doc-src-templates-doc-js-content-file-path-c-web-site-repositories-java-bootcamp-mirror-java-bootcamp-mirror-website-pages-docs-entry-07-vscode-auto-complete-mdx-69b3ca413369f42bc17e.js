"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6858],{74180:function(e,l,n){n.r(l),n.d(l,{default:function(){return i}});var t=n(63696),a=n(43023);function r(e){const l=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",pre:"pre",code:"code",ol:"ol",li:"li",img:"img",h3:"h3",ul:"ul"},(0,a.RP)(),e.components);return t.createElement(t.Fragment,null,t.createElement(l.h1,{id:"07-補完機能でコーディングをスピードアップしよう",style:{position:"relative"}},t.createElement(l.a,{href:"#07-%E8%A3%9C%E5%AE%8C%E6%A9%9F%E8%83%BD%E3%81%A7%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%82%92%E3%82%B9%E3%83%94%E3%83%BC%E3%83%89%E3%82%A2%E3%83%83%E3%83%97%E3%81%97%E3%82%88%E3%81%86","aria-label":"07 補完機能でコーディングをスピードアップしよう permalink",className:"anchor before"},t.createElement(l.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"07. 補完機能でコーディングをスピードアップしよう"),"\n",t.createElement("p",{className:"goal"},"自動補完機能を使えば、コーディングミスなく、コーディング速度もアップできることを知る。どんな\r\nIDE にも自動補完機能があることを知る"),"\n",t.createElement(l.p,null,"VSCode には自動補完機能がある。"),"\n",t.createElement(l.p,null,"補完機能とは、入力された文字列から推測して、ユーザの入力を補助してくれる機能のことだ。"),"\n",t.createElement(l.p,null,"以下の例を見てみよう。"),"\n",t.createElement(l.h2,{id:"今回のサンプルコード",style:{position:"relative"}},t.createElement(l.a,{href:"#%E4%BB%8A%E5%9B%9E%E3%81%AE%E3%82%B5%E3%83%B3%E3%83%97%E3%83%AB%E3%82%B3%E3%83%BC%E3%83%89","aria-label":"今回のサンプルコード permalink",className:"anchor before"},t.createElement(l.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"今回のサンプルコード"),"\n",t.createElement(l.p,null,"例えば、次のような簡単なコードを例にとって、補完機能を使ってみる。"),"\n",t.createElement(l.pre,null,t.createElement(l.code,{className:"language-java"},'public class App {\r\n\r\n    public static void main(String[] args) {\r\n        System.out.println("Hello world.");\r\n    }\r\n}\n')),"\n",t.createElement(l.h2,{id:"補完機能を利用するコーディング手順",style:{position:"relative"}},t.createElement(l.a,{href:"#%E8%A3%9C%E5%AE%8C%E6%A9%9F%E8%83%BD%E3%82%92%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E6%89%8B%E9%A0%86","aria-label":"補完機能を利用するコーディング手順 permalink",className:"anchor before"},t.createElement(l.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"補完機能を利用するコーディング手順"),"\n",t.createElement(l.p,null,"補完を効かせながらコーディングする流れは次の通り。"),"\n",t.createElement(l.ol,null,"\n",t.createElement(l.li,null,t.createElement(l.code,null,"class")," と入力"),"\n",t.createElement(l.li,null,"候補に ",t.createElement(l.code,null,"class")," と ",t.createElement(l.code,null,"class template")," がリストアップ表示される"),"\n",t.createElement(l.li,null,t.createElement(l.code,null,"class template")," を選択"),"\n",t.createElement(l.li,null,"Enter で決定"),"\n"),"\n",t.createElement(l.pre,null,t.createElement(l.code,{className:"language-java"},"/**\r\n * App\r\n */\r\npublic class App {\r\n\r\n\r\n}\n")),"\n",t.createElement(l.ol,{start:"5"},"\n",t.createElement(l.li,null,t.createElement(l.code,null,"main")," と入力"),"\n",t.createElement(l.li,null,"候補のトップに ",t.createElement(l.code,null,"main template")," がリストアップ表示される"),"\n",t.createElement(l.li,null,t.createElement(l.code,null,"main template")," を選択"),"\n",t.createElement(l.li,null,"Enter で決定"),"\n"),"\n",t.createElement(l.pre,null,t.createElement(l.code,{className:"language-java"},"/**\r\n * App\r\n */\r\npublic class App {\r\n\r\n    public static void main(String[] args) {\r\n\r\n    }\r\n}\n")),"\n",t.createElement(l.ol,{start:"9"},"\n",t.createElement(l.li,null,t.createElement(l.code,null,"sysout")," と入力"),"\n",t.createElement(l.li,null,"候補に ",t.createElement(l.code,null,"sysout template")," のみがリストアップ表示される"),"\n",t.createElement(l.li,null,"Enter で決定"),"\n"),"\n",t.createElement(l.pre,null,t.createElement(l.code,{className:"language-java"},'/**\r\n * App\r\n */\r\npublic class App {\r\n\r\n    public static void main(String[] args) {\r\n        System.out.println("Hello world.");\r\n    }\r\n}\n')),"\n",t.createElement(l.ol,{start:"12"},"\n",t.createElement(l.li,null,t.createElement(l.code,null,'"Hello world."')," を入力"),"\n",t.createElement(l.li,null,"ファンクションキー ",t.createElement(l.code,null,"F5")," を押す"),"\n",t.createElement(l.li,null,"プログラムの実行結果が表示される"),"\n"),"\n",t.createElement(l.p,null,t.createElement(l.img,{src:"./images/coding_and_running.gif",alt:"VSCode 自動補完機能の使用例"})),"\n",t.createElement(l.p,null,"スピードアップを意識して、どんどんコーディングをファンキーにしていこう～"),"\n",t.createElement(l.h2,{id:"練習問題時間-20-分",style:{position:"relative"}},t.createElement(l.a,{href:"#%E7%B7%B4%E7%BF%92%E5%95%8F%E9%A1%8C%E6%99%82%E9%96%93-20-%E5%88%86","aria-label":"練習問題時間 20 分 permalink",className:"anchor before"},t.createElement(l.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"練習問題（時間: 20 分）"),"\n",t.createElement(l.p,null,"次のプログラムを、IDE の自動補完機能を使って、プログラムを作成しなさい。"),"\n",t.createElement(l.p,null,"main メソッドに以下の 2 つの処理を記述して、プログラム実行結果が以下に示したようになるようにプログラム IdeAutoCompleted.java を作成しなさい。"),"\n",t.createElement(l.h3,{id:"1-変数宣言変数への代入処理",style:{position:"relative"}},t.createElement(l.a,{href:"#1-%E5%A4%89%E6%95%B0%E5%AE%A3%E8%A8%80%E5%A4%89%E6%95%B0%E3%81%B8%E3%81%AE%E4%BB%A3%E5%85%A5%E5%87%A6%E7%90%86","aria-label":"1 変数宣言変数への代入処理 permalink",className:"anchor before"},t.createElement(l.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. 変数宣言、変数への代入処理:"),"\n",t.createElement(l.ul,null,"\n",t.createElement(l.li,null,"変数「父親の年齢」に 42 を代入"),"\n",t.createElement(l.li,null,"変数「母の年齢」に 38 を代入"),"\n",t.createElement(l.li,null,"変数「ぼくの年齢」に 20 を代入"),"\n",t.createElement(l.li,null,"変数「ぼくの体重（kg）」に 670 を代入"),"\n"),"\n",t.createElement(l.h3,{id:"2-変数に代入した数値の表示処理",style:{position:"relative"}},t.createElement(l.a,{href:"#2-%E5%A4%89%E6%95%B0%E3%81%AB%E4%BB%A3%E5%85%A5%E3%81%97%E3%81%9F%E6%95%B0%E5%80%A4%E3%81%AE%E8%A1%A8%E7%A4%BA%E5%87%A6%E7%90%86","aria-label":"2 変数に代入した数値の表示処理 permalink",className:"anchor before"},t.createElement(l.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. 変数に代入した数値の表示処理:"),"\n",t.createElement(l.ul,null,"\n",t.createElement(l.li,null,"「父親の年齢」を表示"),"\n",t.createElement(l.li,null,"「母の年齢」を表示"),"\n",t.createElement(l.li,null,"「ぼくの年齢」を表示"),"\n",t.createElement(l.li,null,"「ぼくの体重（kg）」を表示"),"\n"),"\n",t.createElement(l.h3,{id:"プログラム実行結果",style:{position:"relative"}},t.createElement(l.a,{href:"#%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E5%AE%9F%E8%A1%8C%E7%B5%90%E6%9E%9C","aria-label":"プログラム実行結果 permalink",className:"anchor before"},t.createElement(l.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"プログラム実行結果"),"\n",t.createElement(l.pre,null,t.createElement(l.code,null,"ぼくのパパの年齢は 42 歳です.\r\nぼくのママの年齢は 38 歳です.\r\nぼくの年齢は 20 歳です.\r\n\r\nぼくの体重は 670Kg です.\n")),"\n",t.createElement(l.h2,{id:"解答例",style:{position:"relative"}},t.createElement(l.a,{href:"#%E8%A7%A3%E7%AD%94%E4%BE%8B","aria-label":"解答例 permalink",className:"anchor before"},t.createElement(l.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"解答例"),"\n",t.createElement(l.p,null,t.createElement(l.a,{href:"https://github.com/fs5013-furi-sutao/java-bootcamp-answers/blob/main/02.entry/07.vscode-auto-complete/src/IdeAutoCompleted.java"},"https://github.com/fs5013-furi-sutao/java-bootcamp-answers/blob/main/02.entry/07.vscode-auto-complete/src/IdeAutoCompleted.java")))}var c=function(e){void 0===e&&(e={});const{wrapper:l}=Object.assign({},(0,a.RP)(),e.components);return l?t.createElement(l,e,t.createElement(r,e)):r(e)};function E(e){let{children:l}=e;return l}function i(e){return t.createElement(E,e,t.createElement(c,e))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-doc-js-content-file-path-c-web-site-repositories-java-bootcamp-mirror-java-bootcamp-mirror-website-pages-docs-entry-07-vscode-auto-complete-mdx-69b3ca413369f42bc17e.js.map