"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3144],{70463:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var l=a(63696),n=a(43023);function r(e){const t=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4",img:"img"},(0,n.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,{id:"12-update文の書き方",style:{position:"relative"}},l.createElement(t.a,{href:"#12-update%E6%96%87%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9","aria-label":"12 update文の書き方 permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"12. UPDATE文の書き方"),"\n",l.createElement(t.p,null,"データベースの値を更新する方法を説明する"),"\n",l.createElement(t.h2,{id:"基本的な書き方",style:{position:"relative"}},l.createElement(t.a,{href:"#%E5%9F%BA%E6%9C%AC%E7%9A%84%E3%81%AA%E6%9B%B8%E3%81%8D%E6%96%B9","aria-label":"基本的な書き方 permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"基本的な書き方"),"\n",l.createElement(t.p,null,"テーブルの値を更新する場合は、UPDATE文を使います。"),"\n",l.createElement(t.p,null,"UPDATE文はSELECT文と同じようにWHERE句の指定は任意です。ただし、WHERE句を使わない場合は、テーブルの全レコードを更新してしまうため、注意が必要です。"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sql"},"UPDATE テーブル名\r\nSET カラム名 = 値\r\nWHERE カラム名 = 条件値;\n")),"\n",l.createElement(t.p,null,"WHERE句を使って1レコードだけを更新したい場合は、主キーを指定して更新を行います。\r\n主キー以外の情報を使ってレコードを更新する場合は複数のレコードが対象になる可能性があることを覚えておきましょう。"),"\n",l.createElement(t.h3,{id:"1テーブルの値を一つ更新する",style:{position:"relative"}},l.createElement(t.a,{href:"#1%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%81%AE%E5%80%A4%E3%82%92%E4%B8%80%E3%81%A4%E6%9B%B4%E6%96%B0%E3%81%99%E3%82%8B","aria-label":"1テーブルの値を一つ更新する permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1.テーブルの値を一つ更新する"),"\n",l.createElement(t.p,null,l.createElement(t.code,null,"customers"),"テーブルの",l.createElement(t.code,null,"customerNumber"),"（主キー）が",l.createElement(t.code,null,"8103"),"であるレコードの",l.createElement(t.code,null,"customerName"),"を",l.createElement(t.code,null,"Atelier Graphic"),"に更新する。"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sql"},'UPDATE customers\r\nSET customerName = "Atelier Graphic"\r\nWHERE customerNumber = 8103;\n')),"\n",l.createElement(t.h4,{id:"更新前のテーブル",style:{position:"relative"}},l.createElement(t.a,{href:"#%E6%9B%B4%E6%96%B0%E5%89%8D%E3%81%AE%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB","aria-label":"更新前のテーブル permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"更新前のテーブル"),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"./before-update-statement-1.png",alt:"テーブル更新前1"})),"\n",l.createElement(t.h4,{id:"更新後のテーブル",style:{position:"relative"}},l.createElement(t.a,{href:"#%E6%9B%B4%E6%96%B0%E5%BE%8C%E3%81%AE%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB","aria-label":"更新後のテーブル permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"更新後のテーブル"),"\n",l.createElement(t.p,null,"UPDATE文を実行した場合は表示内容の更新をする必要があります。",l.createElement(t.code,null,"データ更新"),"ボタンをクリックして更新します。\r\nここで",l.createElement(t.code,null,"customerName"),"が",l.createElement(t.code,null,"アトリエ グラフィック"),"から",l.createElement(t.code,null,"Atelier Graphic"),"に変わったことが確認できます。"),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"./after-update-statement-1.png",alt:"テーブル更新後1"})),"\n",l.createElement(t.h3,{id:"2テーブルの値を複数更新する",style:{position:"relative"}},l.createElement(t.a,{href:"#2%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%81%AE%E5%80%A4%E3%82%92%E8%A4%87%E6%95%B0%E6%9B%B4%E6%96%B0%E3%81%99%E3%82%8B","aria-label":"2テーブルの値を複数更新する permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2.テーブルの値を複数更新する"),"\n",l.createElement(t.p,null,"同時に複数のカラムを更新した場合は、SET句の後にコンマ区切りでカラム名と値を書けば"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-sql"},'UPDATE customers\r\nSET customerName = "Signal Gift Store",\r\n    contactFirstName = "鈴木"\r\nWHERE customerNumber = 8112;\n')),"\n",l.createElement(t.h4,{id:"更新前のテーブル-1",style:{position:"relative"}},l.createElement(t.a,{href:"#%E6%9B%B4%E6%96%B0%E5%89%8D%E3%81%AE%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB-1","aria-label":"更新前のテーブル 1 permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"更新前のテーブル"),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"./before-update-statement-2.png",alt:"テーブル更新前2"})),"\n",l.createElement(t.h4,{id:"更新後のテーブル-1",style:{position:"relative"}},l.createElement(t.a,{href:"#%E6%9B%B4%E6%96%B0%E5%BE%8C%E3%81%AE%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB-1","aria-label":"更新後のテーブル 1 permalink",className:"anchor before"},l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"更新後のテーブル"),"\n",l.createElement(t.p,null,"ここで",l.createElement(t.code,null,"customerName"),"と",l.createElement(t.code,null,"contactFirstName"),"が同時に変わったのが確認ができます。"),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"./after-update-statement-2.png",alt:"テーブル更新後2"})))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.RP)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)};function E(e){let{children:t}=e;return t}function i(e){return l.createElement(E,e,l.createElement(c,e))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-doc-js-content-file-path-c-web-site-repositories-java-bootcamp-mirror-java-bootcamp-mirror-website-pages-docs-entrypg-12-write-update-statement-mdx-bb5262007a2b77c56be1.js.map