(this.webpackJsonpgoogle_books_search=this.webpackJsonpgoogle_books_search||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/1200px-Google_Books_logo_2015.svg.0d1c8667.png"},21:function(e,t,a){e.exports=a.p+"static/media/paul-schafer-t6oZEgL0z18-unsplash.13b28c48.jpg"},22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(17),s=a.n(c),r=(a(27),a(8)),l=a(7),i=a(18),m=a.n(i);var u=function(e){var t=Object(l.e)();return o.a.createElement("nav",{class:"navbar navbar-expand-md navbar-light bg-light"},o.a.createElement(r.b,{to:"/",className:"navbar-brand"},o.a.createElement("img",{src:m.a,alt:"googleLogo",style:{width:"120px"}})),o.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{class:"navbar-toggler-icon"})),o.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{class:"navbar-nav mr-auto"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(r.b,{to:"/search",className:"/search"===t.pathname?"nav-link active":"nav-link"},"Search")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(r.b,{to:"/saved",className:"/saved"===t.pathname?"nav-link active":"nav-link"},"Saved")))))},p=a(4),v=a.n(p),d=a(9),b=a(6),f=a(21),g=a.n(f);var h=function(e){Object(l.e)();var t=Object(n.useState)({type:"",message:""}),a=Object(b.a)(t,2),c=a[0],s=a[1];function r(){return(r=Object(d.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={bookId:t.id,title:t.volumeInfo.title,imageThumb:t.volumeInfo.imageLinks&&t.volumeInfo.imageLinks.thumbnail?t.volumeInfo.imageLinks.thumbnail:"https://cdn1.vectorstock.com/i/1000x1000/21/85/white-blank-book-cover-isolated-template-empty-vector-25362185.jpg",link:t.volumeInfo.previewLink},console.log("bookInfo ",a),e.next=4,fetch("/api/saveBook",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()}));case 4:n=e.sent,console.log("apiResult: ",n),n.message?(s({type:"success",message:n.message}),setTimeout((function(){s({})}),3e3)):(s({type:"danger",message:n.error}),setTimeout((function(){s({})}),2500));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log("booklist is ",e.bookList),o.a.createElement("div",{ref:e.myRef},o.a.createElement("div",{style:{position:"sticky",top:"0",left:"0"},className:c.type?"alert alert-".concat(c.type):"d-hide",role:"alert"},c.message),o.a.createElement("div",{class:"mb-3"},e.bookList?e.bookList.map((function(e){return o.a.createElement("div",{class:"something container"},o.a.createElement("div",{class:"bookImg"},e.volumeInfo.imageLinks&&e.volumeInfo.imageLinks.thumbnail?o.a.createElement("img",{src:e.volumeInfo.imageLinks.thumbnail}):o.a.createElement("img",{src:"https://cdn1.vectorstock.com/i/1000x1000/21/85/white-blank-book-cover-isolated-template-empty-vector-25362185.jpg"})),o.a.createElement("div",{class:"bookDesc"},o.a.createElement("h4",null,e.volumeInfo.title),e.volumeInfo.imageLinks&&e.volumeInfo.authors?o.a.createElement("ul",null,e.volumeInfo.authors.map((function(e){return o.a.createElement("li",null,e)}))):"[no author]",o.a.createElement("p",null,e.volumeInfo.description),o.a.createElement("div",{class:"d-flex justify-content-start"},o.a.createElement("a",{class:"myBtn2",href:e.volumeInfo.previewLink},"preview"),o.a.createElement("div",{class:"myBtn2",onClick:function(){!function(e){r.apply(this,arguments)}(e)}},"save"))))})):"No Books"))},k=function(e){return window.scrollTo(0,e.current.offsetTop)};var E=function(e){var t=Object(n.useRef)(null),a={height:"85vh",backgroundImage:"url(".concat(g.a,")"),backgroundSize:"cover",backgroundPositionY:"-174px"},c=Object(n.useState)(""),s=Object(b.a)(c,2),r=s[0],l=s[1],i=Object(n.useState)([]),m=Object(b.a)(i,2),u=m[0],p=m[1],f=Object(n.useState)([]),E=Object(b.a)(f,2);function y(){return(y=Object(d.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("[setResultBooks] called with '".concat(r,"'")),e.next=3,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(r)).then((function(e){return e.json()}));case 3:a=e.sent,p(a.items),console.log("booklist: ",a.items),k(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return E[0],E[1],o.a.createElement("div",{id:"something"},o.a.createElement("div",{class:"jumbotron jumbotron-fluid hero",style:a},o.a.createElement("div",{class:"searchBox container"},o.a.createElement("div",{class:"input-group mb-3 text-center",style:{width:"70%",margin:"160px auto"}},o.a.createElement("input",{onChange:function(e){var t=e.target.value;l(t)},value:r,type:"text",class:"form-control text-center",style:{borderTopLeftRadius:"20px",borderRadius:"20px",borderBottomLeftRadius:"20px"},placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),o.a.createElement("div",{class:"myBtnRgt",onClick:function(){!function(){y.apply(this,arguments)}()}},"Search Books")))),o.a.createElement(h,{bookList:u,myRef:t}))};var y=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1];function s(){return r.apply(this,arguments)}function r(){return(r=Object(d.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/booklist").then((function(e){return e.json()}));case 2:t=e.sent,c(t),console.log("apiBooks",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=Object(d.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("delete something? : ",t),e.next=3,fetch("/api/deleteBook/".concat(t)).then((function(e){return e.json()}));case 3:e.sent,s();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){s()}),[]),console.log("Show booklist is ",a),o.a.createElement("div",{class:"album py-5 bg-light"},o.a.createElement("div",{class:"container"},o.a.createElement("div",{class:"row"},a?a.map((function(e){return o.a.createElement("div",{class:"col-md-4 text-center"},o.a.createElement("div",{class:"card mb-4 box-shadow"},o.a.createElement("div",{class:"bookImg"},e.thumbnail&&e.thumbnail?o.a.createElement("img",{src:e.thumbnail}):"[no image]"),o.a.createElement("div",{class:"bookDesc2"},o.a.createElement("h5",{class:"bookTitle"},e.title),o.a.createElement("div",{class:"d-flex justify-content-center"},o.a.createElement("a",{class:"myBtn2",href:e.link},"preview"),o.a.createElement("div",{class:"myBtn2",onClick:function(){!function(e){l.apply(this,arguments)}(e._id)}}," delete ")))))})):"No Books Saved")))};var x=function(){return o.a.createElement(r.a,null,o.a.createElement(u,null),o.a.createElement(l.a,{exact:!0,path:["/","/search","/google_books_search"],component:E}),o.a.createElement(l.a,{exact:!0,path:"/saved",component:y}))};s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8e464110.chunk.js.map