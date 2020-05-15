function _defineProperties(l,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(l,t.key,t)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Ge0H:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J"),u=function l(){_classCallCheck(this,l)},i=e("pMnS"),a=e("VLCt"),o=e("SVse"),r=function(){function l(n,e,t){_classCallCheck(this,l),this.servicecalls=n,this.router=e,this.meta=t,this.getNews()}return _createClass(l,[{key:"ngOnInit",value:function(){this.meta.updateMetaInfo("We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.","Media","assets/news.jpg","media"),this.meta.updateTitle("","Media")}},{key:"getNews",value:function(){var l=this;this.servicecalls.postServer("getNewsList",{}).subscribe((function(n){console.log("Res=>",n),l.news=n;for(var e=0;e<l.news.length;e++)l.news[e].description=l.news[e].description.split("\n").join("<br />"),l.news[e].description=l.news[e].description.replace(/utilityAid/g,"https://utility-aid.co.uk/utilityAid")}),(function(l){console.log("error",l)}))}},{key:"headingTitle",value:function(l){var n=l.heading.replace(/ /g,"_");this.router.navigate(["media/news-media",n,l.newsdate])}}]),l}(),s=e("PIxx"),c=e("iInd"),d=e("xQZR"),g=t.pb({encapsulation:0,styles:[[".header[_ngcontent-%COMP%]{background:center 70%/cover no-repeat fixed;display:table;position:relative;width:100%;height:70vh;margin-top:-22px}.ng-lazyloaded[_ngcontent-%COMP%]{opacity:1;-webkit-animation:.5s fadein;animation:.5s fadein}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadein{from{opacity:0}to{opacity:1}}img.ng-lazyloaded[_ngcontent-%COMP%]{opacity:1;-webkit-animation:.5s fadein;animation:.5s fadein}.container[_ngcontent-%COMP%]{padding:70px 20px}.ua-energy-row[_ngcontent-%COMP%]{margin-bottom:80px;cursor:pointer}.ua-news-wrapper[_ngcontent-%COMP%]{color:#1d282f;padding:0 40px}.ua-news-img[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%]{border:3px solid #3697c2;width:100%}.ua-news[_ngcontent-%COMP%]{max-height:270px;overflow:hidden;color:#000}.ua-news[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{visibility:hidden}.news-headings[_ngcontent-%COMP%]{color:#3697c2;font-weight:700;letter-spacing:1px;font-family:vag_roundedregular;font-size:24px}h3[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px;line-height:1.5}a[_ngcontent-%COMP%]{background-color:transparent;color:#3697c2}.ua-news[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .ua-news[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:vag_roundedregular!important;font-weight:400}p[_ngcontent-%COMP%]{font-size:16.5px;margin:5 0 0 10px;font-stretch:normal;line-height:normal;color:#454545}.right-date[_ngcontent-%COMP%]{float:right;color:#1d282f;font-weight:700;font-family:vag_roundedregular;font-size:17px}a[_ngcontent-%COMP%]:hover{color:#23527c;text-decoration:none;outline:0}.ua-news[_ngcontent-%COMP%]   .content-description[_ngcontent-%COMP%]{max-height:60px;word-wrap:break-word;overflow:hidden;color:#000}.expand[_ngcontent-%COMP%]{color:#3697c2}.expand[_ngcontent-%COMP%]:hover{color:#23527c;text-decoration:none;outline:0}  .ua-news img{display:none}"]],data:{}});function p(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,22,"div",[["class","row ua-energy-row"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.headingTitle(l.context.$implicit)&&t),t}),null,null)),(l()(),t.rb(1,0,null,null,3,"div",[["class","col-lg-5 col-md-5"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,2,"div",[["class","ua-news-img"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,1,"img",[["class","img1"]],null,null,null,null,null)),t.qb(4,1720320,null,0,a.a,[t.k,t.x,t.z,[2,"options"]],{lazyImage:[0,"lazyImage"],defaultImage:[1,"defaultImage"]},null),(l()(),t.rb(5,0,null,null,17,"div",[["class","col-lg-7 col-md-7"]],null,null,null,null,null)),(l()(),t.rb(6,0,null,null,7,"div",[["class","ua-news innerspan"],["style","max-height:250px;margin-bottom: 10px;"]],null,null,null,null,null)),(l()(),t.rb(7,0,null,null,1,"h3",[["class","news-headings"]],null,null,null,null,null)),(l()(),t.Jb(8,null,[" "," "])),(l()(),t.rb(9,0,null,null,0,"p",[["class","content-description"]],null,null,null,null,null)),(l()(),t.rb(10,0,null,null,1,"p",[],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.rb(11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.rb(12,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.rb(13,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.rb(14,0,null,null,8,"div",[["class","d-flex justify-content-between"],["style","width:100%"]],null,null,null,null,null)),(l()(),t.rb(15,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.rb(16,0,null,null,2,"a",[["class","expand-link"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.headingTitle(l.context.$implicit)&&t),t}),null,null)),(l()(),t.rb(17,0,null,null,1,"span",[["class","expand"],["style","font-size:20.5px;font-family:'vag_roundedregular';"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Expand >"])),(l()(),t.rb(19,0,null,null,3,"div",[],null,null,null,null,null)),(l()(),t.rb(20,0,null,null,2,"span",[["class","right-date pt-1"]],null,null,null,null,null)),(l()(),t.Jb(21,null,[" ",""])),t.Gb(22,2)],(function(l,n){l(n,4,0,"https://www.utility-aid.co.uk/"+n.context.$implicit.image,"assets/utility-bgblur.gif")}),(function(l,n){l(n,8,0,n.context.$implicit.heading),l(n,10,0,n.context.$implicit.description);var e=t.Kb(n,21,0,l(n,22,0,t.Cb(n.parent.parent,0),n.context.$implicit.newsdate,"d MMMM yyyy"));l(n,21,0,e)}))}function b(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,2,"div",[["class","ua-news-wrapper"],["id","blog"],["style","min-height:500px"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,p)),t.qb(2,278528,null,0,o.j,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.news)}),null)}function m(l){return t.Lb(0,[t.Eb(0,o.e,[t.s]),(l()(),t.rb(1,0,null,null,5,"header",[["class","header d-flex align-items-center d-flex justify-content-center"]],null,null,null,null,null)),t.qb(2,1720320,null,0,a.a,[t.k,t.x,t.z,[2,"options"]],{lazyImage:[0,"lazyImage"],defaultImage:[1,"defaultImage"]},null),(l()(),t.rb(3,0,null,null,3,"div",[["class","text-vertical-center"]],null,null,null,null,null)),(l()(),t.rb(4,0,null,null,2,"h1",[["class","heading_text"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,1,"span",[["class","fontBold"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" media "])),(l()(),t.rb(7,0,null,null,3,"section",[["class","media-page"]],null,null,null,null,null)),(l()(),t.rb(8,0,null,null,2,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,b)),t.qb(10,16384,null,0,o.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,2,0,"assets/media.jpg","assets/utility-bgblur.gif"),l(n,10,0,e.news)}),null)}var f=t.nb("app-media",r,(function(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"app-media",[],null,null,null,m,g)),t.qb(1,114688,null,0,r,[s.a,c.k,d.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),h=function(){function l(n,e,t){_classCallCheck(this,l),this.route=n,this.servicecalls=e,this.meta=t}return _createClass(l,[{key:"ngOnInit",value:function(){var l=this;this.route.params.subscribe((function(n){l.heading=n.title,l.newdate=n.newsDate,l.getNewsDetails(n.title)}))}},{key:"getNewsDetails",value:function(l){var n=this;this.servicecalls.postServer("getNewsDetails",{heading:l}).subscribe((function(l){console.log("Res=>",l),n.details=l;var e=n.details.description.replace(/utilityAid/g,"https://utility-aid.co.uk/utilityAid");n.list1=e.replace(/\n/g,"<br />"),n.meta.updateTitle("",n.details.heading),n.meta.updateMetaInfo(n.list1,n.details.heading,n.details.image,"news-media/"+n.heading+"/"+n.details.newsdate)}),(function(l){console.log("error",l)}))}}]),l}(),w=t.pb({encapsulation:0,styles:[['.header[_ngcontent-%COMP%]{background:url(media.d47348d113e67456998a.jpg) center 70%/cover no-repeat fixed;display:table;position:relative;width:100%;height:70vh;margin-top:-22px}.container[_ngcontent-%COMP%]{padding:30px 20px 170px}.content-description[_ngcontent-%COMP%]{padding:10px 0}.expand[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%]{border:3px solid #3697c2;width:300px}.news-headings[_ngcontent-%COMP%]{color:#3697c2;font-weight:700;font-family:vag_roundedregular;font-size:20.5px}a[_ngcontent-%COMP%]{background-color:transparent}.expand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .expand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:vag_roundedregular!important;font-weight:400}.fontfamily[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:"Helvetica Neue"!important;color:#454545}p[_ngcontent-%COMP%]{font-size:16.5px;margin:5 0 0 10px;font-stretch:normal;line-height:normal;color:#000}.right-date[_ngcontent-%COMP%]{float:right;color:#1d282f;font-family:vag_roundedregular;font-size:17px}a[_ngcontent-%COMP%]:hover{color:#23527c;text-decoration:underline;outline:0}  .innerspan .MsoNormal img{width:100%!important;max-width:700px!important}  .innerspan img{width:100%!important;max-width:700px!important}@media screen and (max-width:1022px){.expand[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%]{width:200px}}']],data:{}});function x(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,14,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,2,"div",[["class","expand col-md-4"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,1,"img",[["class","img1"],["src",""]],null,null,null,null,null)),t.qb(4,1720320,null,0,a.a,[t.k,t.x,t.z,[2,"options"]],{lazyImage:[0,"lazyImage"],defaultImage:[1,"defaultImage"]},null),(l()(),t.rb(5,0,null,null,5,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),t.rb(6,0,null,null,1,"div",[["class","news-headings  mt-2"]],null,null,null,null,null)),(l()(),t.Jb(7,null,[" "," "])),(l()(),t.rb(8,0,null,null,2,"span",[["class","right-date"]],null,null,null,null,null)),(l()(),t.Jb(9,null,[" ",""])),t.Gb(10,2),(l()(),t.rb(11,0,null,null,3,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(12,0,null,null,2,"div",[["class","expand col-md-12 innerspan"]],null,null,null,null,null)),(l()(),t.rb(13,0,null,null,0,"p",[["class","content-description"]],null,null,null,null,null)),(l()(),t.rb(14,0,null,null,0,"p",[],[[8,"innerHTML",1]],null,null,null,null))],(function(l,n){l(n,4,0,"https://www.utility-aid.co.uk/"+n.component.details.image,"assets/utility-bgblur.gif")}),(function(l,n){var e=n.component;l(n,7,0,e.details.heading);var u=t.Kb(n,9,0,l(n,10,0,t.Cb(n.parent,0),e.details.newsdate,"d MMMM yyyy"));l(n,9,0,u),l(n,14,0,e.list1)}))}function v(l){return t.Lb(0,[t.Eb(0,o.e,[t.s]),(l()(),t.rb(1,0,null,null,5,"header",[["class","header d-flex align-items-center d-flex justify-content-center"]],null,null,null,null,null)),t.qb(2,1720320,null,0,a.a,[t.k,t.x,t.z,[2,"options"]],{lazyImage:[0,"lazyImage"],defaultImage:[1,"defaultImage"]},null),(l()(),t.rb(3,0,null,null,3,"div",[["class","text-vertical-center"]],null,null,null,null,null)),(l()(),t.rb(4,0,null,null,2,"h1",[["class","heading_text"]],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,1,"span",[["class","fontBold"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" media "])),(l()(),t.rb(7,0,null,null,2,"section",[["class","expand-media-page"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,x)),t.qb(9,16384,null,0,o.k,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,2,0,"assets/media.jpg","assets/utility-bgblur.gif"),l(n,9,0,e.details)}),null)}var y=t.nb("app-media-expand-one",h,(function(l){return t.Lb(0,[(l()(),t.rb(0,0,null,null,1,"app-media-expand-one",[],null,null,null,v,w)),t.qb(1,114688,null,0,h,[c.a,s.a,d.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),M=function l(){_classCallCheck(this,l)};e.d(n,"MediaModuleNgFactory",(function(){return _}));var _=t.ob(u,[],(function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[i.a,f,y]],[3,t.j],t.v]),t.Bb(4608,o.m,o.l,[t.s,[2,o.v]]),t.Bb(1073742336,c.m,c.m,[[2,c.r],[2,c.k]]),t.Bb(1073742336,M,M,[]),t.Bb(1073742336,o.c,o.c,[]),t.Bb(1073742336,a.b,a.b,[]),t.Bb(1073742336,u,u,[]),t.Bb(1024,c.i,(function(){return[[{path:"",component:r},{path:"news-media/:title/:newsDate",component:h}]]}),[]),t.Bb(256,"options",{preset:a.c},[])])}))}}]);