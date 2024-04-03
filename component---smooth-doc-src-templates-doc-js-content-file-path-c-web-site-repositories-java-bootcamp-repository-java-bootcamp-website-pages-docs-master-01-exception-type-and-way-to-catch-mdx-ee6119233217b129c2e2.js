"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4957],{98450:function(e,a,t){t.r(a),t.d(a,{default:function(){return s}});var n=t(63696),r=t(43023);function i(e){const a=Object.assign({h1:"h1",a:"a",div:"div",h2:"h2",h3:"h3",p:"p",ol:"ol",li:"li",pre:"pre",code:"code"},(0,r.RP)(),e.components);return n.createElement(n.Fragment,null,n.createElement(a.h1,{id:"01-java-における例外の種類例外をキャッチする方法",style:{position:"relative"}},n.createElement(a.a,{href:"#01-java-%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E4%BE%8B%E5%A4%96%E3%81%AE%E7%A8%AE%E9%A1%9E%E4%BE%8B%E5%A4%96%E3%82%92%E3%82%AD%E3%83%A3%E3%83%83%E3%83%81%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95","aria-label":"01 java における例外の種類例外をキャッチする方法 permalink",className:"anchor before"},n.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"01. Java における例外の種類・例外をキャッチする方法"),"\n",n.createElement("p",{className:"goal"},"例外とは何か、例外の種類を知り、例外のキャッチ処理を実装できるようになること"),"\n",n.createElement(a.h2,{id:"学習",style:{position:"relative"}},n.createElement(a.a,{href:"#%E5%AD%A6%E7%BF%92","aria-label":"学習 permalink",className:"anchor before"},n.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"学習"),"\n",n.createElement(a.h3,{id:"java-における例外処理を知る",style:{position:"relative"}},n.createElement(a.a,{href:"#java-%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E4%BE%8B%E5%A4%96%E5%87%A6%E7%90%86%E3%82%92%E7%9F%A5%E3%82%8B","aria-label":"java における例外処理を知る permalink",className:"anchor before"},n.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Java における例外処理を知る"),"\n",n.createElement(a.p,null,"Java における例外とは何か、その例外をキャッチする方法と例外の種類を Web で調べてください。\r\n検索キーワードは、「 ",n.createElement(a.a,{href:"https://www.google.com/search?q=java+%E4%BE%8B%E5%A4%96+try+catch"},"java 例外 try catch")," 」です。\r\n3 種類ぐらい説明記事やサンプルコードを読んで、Java における例外処理の概要をつかみましょう。"),"\n",n.createElement(a.h2,{id:"練習問題-1-マルチキャッチ時間-20-分",style:{position:"relative"}},n.createElement(a.a,{href:"#%E7%B7%B4%E7%BF%92%E5%95%8F%E9%A1%8C-1-%E3%83%9E%E3%83%AB%E3%83%81%E3%82%AD%E3%83%A3%E3%83%83%E3%83%81%E6%99%82%E9%96%93-20-%E5%88%86","aria-label":"練習問題 1 マルチキャッチ時間 20 分 permalink",className:"anchor before"},n.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"練習問題 1: マルチキャッチ（時間: 20 分）"),"\n",n.createElement(a.p,null,"次の 4 つのクラスを利用する BirdWatching クラスを実行すると、実行結果の通りになるように、\r\nBirdWatching クラスの該当処理に、try-catch-finally 例外処理をコーディングしなさい"),"\n",n.createElement(a.p,null,"ただし、例外処理はマルチキャッチにすること"),"\n",n.createElement(a.ol,null,"\n",n.createElement(a.li,null,"Bird.java"),"\n",n.createElement(a.li,null,"Eagle.java"),"\n",n.createElement(a.li,null,"Pigeon.java"),"\n",n.createElement(a.li,null,"Logger.java"),"\n"),"\n",n.createElement(a.h3,{id:"birdwatchingjava",style:{position:"relative"}},n.createElement(a.a,{href:"#birdwatchingjava","aria-label":"birdwatchingjava permalink",className:"anchor before"},n.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"BirdWatching.java"),"\n",n.createElement(a.pre,null,n.createElement(a.code,{className:"language-java"},'package master.trycatch.multi;\r\n\r\nimport static master.trycatch.multi.util.Logger.LogType.DEBUG;\r\nimport static master.trycatch.multi.util.Logger.LogType.INFO;\r\n\r\nimport master.trycatch.multi.entity.base.Bird;\r\nimport master.trycatch.multi.entity.Eagle;\r\nimport master.trycatch.multi.entity.Pigeon;\r\nimport master.trycatch.multi.util.Logger;\r\n\r\npublic class BirdWatching {\r\n\r\n    public static void main(String[] args) {\r\n\r\n        boolean isNeedToValidPigeon = true;\r\n        boolean isNeedToConvertToPigeon = false;\r\n\r\n        BirdWatching app = new BirdWatching();\r\n        app.execute(\r\n                isNeedToValidPigeon,\r\n                isNeedToConvertToPigeon);\r\n        System.out.println();\r\n\r\n        isNeedToValidPigeon = false;\r\n        isNeedToConvertToPigeon = true;\r\n        app.execute(\r\n                isNeedToValidPigeon,\r\n                isNeedToConvertToPigeon);\r\n        System.out.println();\r\n\r\n        isNeedToConvertToPigeon = false;\r\n        app.execute(\r\n                isNeedToValidPigeon,\r\n                isNeedToConvertToPigeon);\r\n    }\r\n\r\n    private void execute(\r\n            boolean isNeedToValidPigeon,\r\n            boolean isNeedToConvertToPigeon) {\r\n\r\n        Bird eagle = new Eagle("オジロワシ");\r\n        Bird pigeon = new Pigeon(null);\r\n\r\n        eagle.fly();\r\n        if (isNeedToValidPigeon) {\r\n            pigeon.fly();\r\n            pigeon.isEmptyName();\r\n        }\r\n        if (isNeedToConvertToPigeon) {\r\n            Bird convertedPigeon = Bird.convertToPigeon(eagle);\r\n            convertedPigeon.fly();\r\n        }\r\n    }\r\n}\n')),"\n",n.createElement(a.h3,{id:"1-birdjava",style:{position:"relative"}},n.createElement(a.a,{href:"#1-birdjava","aria-label":"1 birdjava permalink",className:"anchor before"},n.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"1. Bird.java"),"\n",n.createElement(a.pre,null,n.createElement(a.code,{className:"language-java"},'package master.trycatch.multi.entity.base;\r\n\r\nimport master.trycatch.multi.entity.Pigeon;\r\n\r\npublic abstract class Bird {\r\n\r\n    protected String className;\r\n    protected String name;\r\n\r\n    protected Bird(String name) {\r\n        this.name = name;\r\n        this.className = "Bird";\r\n    }\r\n\r\n    public boolean isEmptyName() {\r\n        return this.name.equals("");\r\n    }\r\n\r\n    public void fly() {\r\n        System.out.format(\r\n                "[%s] %s が飛んだ. %n",\r\n                this.className, this.name);\r\n    }\r\n\r\n    public static Pigeon convertToPigeon(Bird bird) {\r\n        return (Pigeon) bird;\r\n    }\r\n}\n')),"\n",n.createElement(a.h3,{id:"2-eaglejava",style:{position:"relative"}},n.createElement(a.a,{href:"#2-eaglejava","aria-label":"2 eaglejava permalink",className:"anchor before"},n.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"2. Eagle.java"),"\n",n.createElement(a.pre,null,n.createElement(a.code,{className:"language-java"},'package master.trycatch.multi.entity;\r\n\r\nimport master.trycatch.multi.entity.base.Bird;\r\n\r\npublic class Eagle extends Bird {\r\n\r\n    public Eagle(String name) {\r\n        super(name);\r\n        this.className = "Eagle";\r\n    }\r\n}\n')),"\n",n.createElement(a.h3,{id:"3-pigeonjava",style:{position:"relative"}},n.createElement(a.a,{href:"#3-pigeonjava","aria-label":"3 pigeonjava permalink",className:"anchor before"},n.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"3. Pigeon.java"),"\n",n.createElement(a.pre,null,n.createElement(a.code,{className:"language-java"},'package master.trycatch.multi.entity;\r\n\r\nimport master.trycatch.multi.entity.base.Bird;\r\n\r\npublic class Pigeon extends Bird {\r\n\r\n    public Pigeon(String name) {\r\n        super(name);\r\n        this.className = "Pigeon";\r\n    }\r\n}\n')),"\n",n.createElement(a.h3,{id:"4-loggerjava",style:{position:"relative"}},n.createElement(a.a,{href:"#4-loggerjava","aria-label":"4 loggerjava permalink",className:"anchor before"},n.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"4. Logger.java"),"\n",n.createElement(a.pre,null,n.createElement(a.code,{className:"language-java"},'package master.trycatch.multi.util;\r\n\r\npublic class Logger {\r\n\r\n    public enum LogType {\r\n        DEBUG("DEBUG"),\r\n        INFO("INFO"),\r\n        WARN("WARN"),;\r\n\r\n        private String name;\r\n\r\n        private LogType(String name) {\r\n            this.name = name;\r\n        }\r\n\r\n        private String getName() {\r\n            return this.name;\r\n        }\r\n    }\r\n\r\n    public static void log(LogType type, String message) {\r\n\r\n        System.out.format(\r\n                ":: [%s] %s %n", type.getName(), message);\r\n    }\r\n\r\n    public static void log(LogType type, Exception e) {\r\n\r\n        log(type, e.getClass().getName());\r\n\r\n        for (StackTraceElement element : e.getStackTrace()) {\r\n            log(type, "  at " + element.toString());\r\n        }\r\n    }\r\n}\n')),"\n",n.createElement(a.h3,{id:"例外処理を追記した-birdwatchingjava-の実行結果",style:{position:"relative"}},n.createElement(a.a,{href:"#%E4%BE%8B%E5%A4%96%E5%87%A6%E7%90%86%E3%82%92%E8%BF%BD%E8%A8%98%E3%81%97%E3%81%9F-birdwatchingjava-%E3%81%AE%E5%AE%9F%E8%A1%8C%E7%B5%90%E6%9E%9C","aria-label":"例外処理を追記した birdwatchingjava の実行結果 permalink",className:"anchor before"},n.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"例外処理を追記した BirdWatching.java の実行結果"),"\n",n.createElement(a.pre,null,n.createElement(a.code,{className:"language-console"},"[Eagle] オジロワシ が飛んだ.\r\n[Pigeon] null が飛んだ.\r\n:: [DEBUG] [ヌルポ例外] 例外をキャッチしました.\r\n:: [DEBUG] java.lang.NullPointerException\r\n:: [DEBUG]   at master.trycatch.multi.entity.base.Bird.isEmptyName(Bird.java:16)\r\n:: [DEBUG]   at master.trycatch.multi.BirdWatching.execute(BirdWatching.java:48)\r\n:: [DEBUG]   at master.trycatch.multi.BirdWatching.main(BirdWatching.java:19)\r\n:: [INFO] finally ブロックです.\r\n:: [INFO] try-catch を抜けました.\r\n\r\n[Eagle] オジロワシ が飛んだ.\r\n:: [DEBUG] [キャスト例外] 例外をキャッチしました.\r\n:: [DEBUG] java.lang.ClassCastException\r\n:: [DEBUG]   at master.trycatch.multi.entity.base.Bird.convertToPigeon(Bird.java:26)\r\n:: [DEBUG]   at master.trycatch.multi.BirdWatching.execute(BirdWatching.java:51)\r\n:: [DEBUG]   at master.trycatch.multi.BirdWatching.main(BirdWatching.java:26)\r\n:: [INFO] finally ブロックです.\r\n:: [INFO] try-catch を抜けました.\r\n\r\n[Eagle] オジロワシ が飛んだ.\r\n:: [INFO] finally ブロックです.\r\n:: [INFO] try-catch を抜けました.\n")),"\n",n.createElement(a.h2,{id:"解答例",style:{position:"relative"}},n.createElement(a.a,{href:"#%E8%A7%A3%E7%AD%94%E4%BE%8B","aria-label":"解答例 permalink",className:"anchor before"},n.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"解答例"),"\n",n.createElement(a.p,null,n.createElement(a.a,{href:"https://github.com/fs5013-furi-sutao/java-bootcamp-answers/blob/main/06.master/01.exception-type-and-way-to-catch/src/master/trycatch/multi"},"https://github.com/fs5013-furi-sutao/java-bootcamp-answers/blob/main/06.master/01.exception-type-and-way-to-catch/src/master/trycatch/multi")),"\n",n.createElement(a.h2,{id:"練習問題-2-シングルキャッチ時間-20-分",style:{position:"relative"}},n.createElement(a.a,{href:"#%E7%B7%B4%E7%BF%92%E5%95%8F%E9%A1%8C-2-%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AB%E3%82%AD%E3%83%A3%E3%83%83%E3%83%81%E6%99%82%E9%96%93-20-%E5%88%86","aria-label":"練習問題 2 シングルキャッチ時間 20 分 permalink",className:"anchor before"},n.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"練習問題 2: シングルキャッチ（時間: 20 分）"),"\n",n.createElement(a.p,null,"練習問題 1 のマルチキャッチを、実行結果の通りになるように、シングルキャッチの例外処理に変更しなさい"),"\n",n.createElement(a.h3,{id:"例外処理をシングルキャッチにした-birdwatchingjava-の実行結果",style:{position:"relative"}},n.createElement(a.a,{href:"#%E4%BE%8B%E5%A4%96%E5%87%A6%E7%90%86%E3%82%92%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AB%E3%82%AD%E3%83%A3%E3%83%83%E3%83%81%E3%81%AB%E3%81%97%E3%81%9F-birdwatchingjava-%E3%81%AE%E5%AE%9F%E8%A1%8C%E7%B5%90%E6%9E%9C","aria-label":"例外処理をシングルキャッチにした birdwatchingjava の実行結果 permalink",className:"anchor before"},n.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"例外処理をシングルキャッチにした BirdWatching.java の実行結果"),"\n",n.createElement(a.pre,null,n.createElement(a.code,{className:"language-console"},"[Eagle] オジロワシ が飛んだ.\r\n[Pigeon] null が飛んだ.\r\n:: [DEBUG] java.lang.NullPointerException\r\n:: [DEBUG]   at master.trycatch.single.entity.base.Bird.isEmptyName(Bird.java:16)\r\n:: [DEBUG]   at master.trycatch.single.BirdWatching.execute(BirdWatching.java:48)\r\n:: [DEBUG]   at master.trycatch.single.BirdWatching.main(BirdWatching.java:19)\r\n:: [INFO] finally ブロックです.\r\n:: [INFO] try-catch を抜けました.\r\n\r\n[Eagle] オジロワシ が飛んだ.\r\n:: [DEBUG] java.lang.ClassCastException\r\n:: [DEBUG]   at master.trycatch.single.entity.base.Bird.convertToPigeon(Bird.java:26)\r\n:: [DEBUG]   at master.trycatch.single.BirdWatching.execute(BirdWatching.java:51)\r\n:: [DEBUG]   at master.trycatch.single.BirdWatching.main(BirdWatching.java:26)\r\n:: [INFO] finally ブロックです.\r\n:: [INFO] try-catch を抜けました.\r\n\r\n[Eagle] オジロワシ が飛んだ.\r\n:: [INFO] finally ブロックです.\r\n:: [INFO] try-catch を抜けました.\n")),"\n",n.createElement(a.h2,{id:"解答例-1",style:{position:"relative"}},n.createElement(a.a,{href:"#%E8%A7%A3%E7%AD%94%E4%BE%8B-1","aria-label":"解答例 1 permalink",className:"anchor before"},n.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"解答例"),"\n",n.createElement(a.p,null,n.createElement(a.a,{href:"https://github.com/fs5013-furi-sutao/java-bootcamp-answers/blob/main/06.master/01.exception-type-and-way-to-catch/src/master/trycatch/single"},"https://github.com/fs5013-furi-sutao/java-bootcamp-answers/blob/main/06.master/01.exception-type-and-way-to-catch/src/master/trycatch/single")))}var l=function(e){void 0===e&&(e={});const{wrapper:a}=Object.assign({},(0,r.RP)(),e.components);return a?n.createElement(a,e,n.createElement(i,e)):i(e)};function c(e){let{children:a}=e;return a}function s(e){return n.createElement(c,e,n.createElement(l,e))}}}]);
//# sourceMappingURL=component---smooth-doc-src-templates-doc-js-content-file-path-c-web-site-repositories-java-bootcamp-repository-java-bootcamp-website-pages-docs-master-01-exception-type-and-way-to-catch-mdx-ee6119233217b129c2e2.js.map