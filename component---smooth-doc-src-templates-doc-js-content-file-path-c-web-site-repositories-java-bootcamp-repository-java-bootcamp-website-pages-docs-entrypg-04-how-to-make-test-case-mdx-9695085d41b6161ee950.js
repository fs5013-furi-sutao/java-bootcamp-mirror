"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6100],{77072:function(e,n,l){l.r(n),l.d(n,{default:function(){return i}});var t=l(63696),a=l(43023);function r(e){const n=Object.assign({h1:"h1",a:"a",div:"div",h2:"h2",h3:"h3",p:"p",pre:"pre",code:"code",ol:"ol",li:"li"},(0,a.RP)(),e.components);return t.createElement(t.Fragment,null,t.createElement(n.h1,{id:"04-テストケースの作成方法",style:{position:"relative"}},t.createElement(n.a,{href:"#04-%E3%83%86%E3%82%B9%E3%83%88%E3%82%B1%E3%83%BC%E3%82%B9%E3%81%AE%E4%BD%9C%E6%88%90%E6%96%B9%E6%B3%95","aria-label":"04 テストケースの作成方法 permalink",className:"anchor before"},t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"04. テストケースの作成方法"),"\n",t.createElement("p",{className:"goal"},"テストケースの作成ができるようになること"),"\n",t.createElement(n.h2,{id:"学習",style:{position:"relative"}},t.createElement(n.a,{href:"#%E5%AD%A6%E7%BF%92","aria-label":"学習 permalink",className:"anchor before"},t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"学習"),"\n",t.createElement(n.h3,{id:"テストケースの作成方法",style:{position:"relative"}},t.createElement(n.a,{href:"#%E3%83%86%E3%82%B9%E3%83%88%E3%82%B1%E3%83%BC%E3%82%B9%E3%81%AE%E4%BD%9C%E6%88%90%E6%96%B9%E6%B3%95","aria-label":"テストケースの作成方法 permalink",className:"anchor before"},t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"テストケースの作成方法"),"\n",t.createElement(n.p,null,"実際のプログラムを確認してテストケースの作り方を覚えましょう。"),"\n",t.createElement(n.h2,{id:"必要なファイルのダウンロード",style:{position:"relative"}},t.createElement(n.a,{href:"#%E5%BF%85%E8%A6%81%E3%81%AA%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AE%E3%83%80%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%89","aria-label":"必要なファイルのダウンロード permalink",className:"anchor before"},t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"必要なファイルのダウンロード"),"\n",t.createElement(n.p,null,"テストケースの作り方を確認するために次のJavaプロジェクトとテスト仕様書兼報告書を使います。"),"\n",t.createElement(n.p,null,t.createElement(n.a,{href:"./LearningProject.zip"},"プロジェクトファイル")),"\n",t.createElement(n.p,null,t.createElement(n.a,{href:"./%E3%83%86%E3%82%B9%E3%83%88%E4%BB%95%E6%A7%98%E6%9B%B8.xlsx"},"テスト仕様書")),"\n",t.createElement(n.h2,{id:"プログラムの内容",style:{position:"relative"}},t.createElement(n.a,{href:"#%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%81%AE%E5%86%85%E5%AE%B9","aria-label":"プログラムの内容 permalink",className:"anchor before"},t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"プログラムの内容"),"\n",t.createElement(n.p,null,"整数を2つ入力する"),"\n",t.createElement(n.p,null,"演算子（+,-,*）を入力する"),"\n",t.createElement(n.p,null,"入力された演算子に沿った計算結果を表示する"),"\n",t.createElement(n.p,null,"ただし、演算子として（+,-,*）以外のものが入力された場合、計算はできないものとして演算子の変わりに「?」を、実行結果に「0」を表示する"),"\n",t.createElement(n.p,null,"また、整数の入力時、整数以外を入力した場合は、「整数の数値で入力してください」"),"\n",t.createElement(n.h3,{id:"実行例",style:{position:"relative"}},t.createElement(n.a,{href:"#%E5%AE%9F%E8%A1%8C%E4%BE%8B","aria-label":"実行例 permalink",className:"anchor before"},t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"実行例"),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-txt",meta:"title=Learning.javaの実行結果"},"1つ目の数値を入力：15\r\n2つ目の数値を入力：3\r\n演算対象の数字は 15 と 3 です \r\n次の3つのどれかの演算子を入力してください（+, -, *）: +\r\n15 + 3 = 18\n")),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-txt",meta:"title=Learning.javaの実行結果"},"1つ目の数値を入力：15\r\n2つ目の数値を入力：3\r\n演算対象の数字は 15 と 3 です \r\n次の3つのどれかの演算子を入力してください（+, -, *）: -\r\n15 - 3 = 12\n")),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-txt",meta:"title=Learning.javaの実行結果"},"1つ目の数値を入力：15\r\n2つ目の数値を入力：3\r\n演算対象の数字は 15 と 3 です \r\n次の3つのどれかの演算子を入力してください（+, -, *）: *\r\n15 * 3 = 45\n")),"\n",t.createElement(n.pre,null,t.createElement(n.code,{className:"language-txt",meta:"title=Learning.javaの実行結果"},"1つ目の数値を入力：15\r\n2つ目の数値を入力：3\r\n演算対象の数字は 15 と 3 です \r\n次の3つのどれかの演算子を入力してください（+, -, *）: a\r\n15 ? 3 = 0\n")),"\n",t.createElement(n.h2,{id:"プログラムの仕様と実装したプログラムからテストケースを作成する",style:{position:"relative"}},t.createElement(n.a,{href:"#%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%81%AE%E4%BB%95%E6%A7%98%E3%81%A8%E5%AE%9F%E8%A3%85%E3%81%97%E3%81%9F%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%81%8B%E3%82%89%E3%83%86%E3%82%B9%E3%83%88%E3%82%B1%E3%83%BC%E3%82%B9%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B","aria-label":"プログラムの仕様と実装したプログラムからテストケースを作成する permalink",className:"anchor before"},t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"プログラムの仕様と実装したプログラムからテストケースを作成する"),"\n",t.createElement(n.p,null,"テストケースを作成するにあたって主に2つのことを考慮する必要があります。"),"\n",t.createElement(n.p,null,"1つ目は「実装したプログラムが要件を満たしているか」、"),"\n",t.createElement(n.p,null,"2つ目は「どんなテストを実施すればプログラムにバグがないか保証できるか」です。"),"\n",t.createElement(n.p,null,"単体テストの場合、プログラムが要件を満たしているか確認するためには、詳細設計から実装すべき機能を洗い出してテストケースを作成します。"),"\n",t.createElement(n.p,null,"実装したプログラムにバグかないかどうかは、実装の仕方によってテストすべき項目がことなるため、プログラムの内部構造にあわせたテストケースを作成します。\r\nこのとき、網羅性を意識してテストをする必要があります。"),"\n",t.createElement(n.h3,{id:"テストすべき内容",style:{position:"relative"}},t.createElement(n.a,{href:"#%E3%83%86%E3%82%B9%E3%83%88%E3%81%99%E3%81%B9%E3%81%8D%E5%86%85%E5%AE%B9","aria-label":"テストすべき内容 permalink",className:"anchor before"},t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"テストすべき内容"),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,"整数が2つ入力できること"),"\n",t.createElement(n.li,null,"整数を入力する際に整数以外を入力した場合、「整数の数値で入力してください」と表示され、数値の入力を再度求められること"),"\n",t.createElement(n.li,null,"2つの整数を正しく入力した場合、演算対象の数値の確認が表示されること"),"\n",t.createElement(n.li,null,"2つの整数を正しく入力した後、演算子が入力できること"),"\n",t.createElement(n.li,null,"演算子として「+」を入力した場合、入力した2つの数値の足し算の式と答えが表示されること　"),"\n",t.createElement(n.li,null,"演算子として「-」を入力した場合、入力した2つの数値の引き算の式と答えが表示されること　"),"\n",t.createElement(n.li,null,"演算子として「*」を入力した場合、入力した2つの数値の掛け算の式と答えが表示されること　"),"\n",t.createElement(n.li,null,"演算子として「+,-,*」以外のものを入力した場合、計算結果の演算子に「?」、演算結果に「0」が表示されること。"),"\n"),"\n",t.createElement(n.h3,{id:"実際のテストケース",style:{position:"relative"}},t.createElement(n.a,{href:"#%E5%AE%9F%E9%9A%9B%E3%81%AE%E3%83%86%E3%82%B9%E3%83%88%E3%82%B1%E3%83%BC%E3%82%B9","aria-label":"実際のテストケース permalink",className:"anchor before"},t.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"実際のテストケース"),"\n",t.createElement(n.p,null,"上記の「テストすべき内容」を基に作成したのが、「テスト仕様書」のテストケースです。"),"\n",t.createElement(n.p,null,"各テストケースがどのように「テストすべき内容」と結びつくのか、確認がしやすいように備考に記述をしています。"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.RP)(),e.components);return n?t.createElement(n,e,t.createElement(r,e)):r(e)};function E(e){let{children:n}=e;return n}function i(e){return t.createElement(E,e,t.createElement(c,e))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-doc-js-content-file-path-c-web-site-repositories-java-bootcamp-repository-java-bootcamp-website-pages-docs-entrypg-04-how-to-make-test-case-mdx-9695085d41b6161ee950.js.map