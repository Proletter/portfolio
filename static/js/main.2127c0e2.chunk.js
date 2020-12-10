(this.webpackJsonpa=this.webpackJsonpa||[]).push([[0],[,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(1),o=a.n(n),s=a(4),c=a.n(s),r=(a(10),a(11),a(2)),l=a.p+"static/media/profile.d9cb327e.svg",u=(a(12),{aboutMe:"Experienced Software Engineer with a demonstrated history of working in the Information Technology and Services industry. Skilled in Python (Programming Language), Software Development, Django, JavaScript, SQL and NoSQL with interests in Artificial Intelligence and Machine Learning..",interests:"Hairy ball? Nope, that's not a game, it's a math theorem. I'm pretty much fascinated with Mathematical Concepts and their application in the real world. I am an active reader, about 70% non-fiction books and speaking about fictions, Neil Gaiman is my favourite. When I'm not writing computer programs, I'd likely be in the world of Astrology, Computer vision, Cinematography, Chess, Music, Car racing.  By the way, I hope to drive formular 1 car someday."}),p=[{src:"./images/github.png",alt:"github profile",url:"https://github.com/collinsuzebu",label:"Github",direction:"right"},{src:"./images/about-me.png",alt:"about-me",label:"About me",text:u.aboutMe,direction:"left"},{src:"./images/projects.png",alt:"projects",label:"Projects",direction:"bottom"},{src:"./images/stackoverflow.png",alt:"stack overflow profile",url:"https://stackoverflow.com/users/12972377/collins",label:"Stack Overflow",direction:"left"},{src:"./images/linkedin.png",alt:"linkedIn profile",url:"https://linkedin.com/in/collinsuz",label:"LinkedIn",direction:"left"},{src:"./images/dev.png",alt:"dev profile",url:"https://dev.to/collinsuz",label:"Dev.to",direction:"left"}],m=[{src:"/images/neumopaste.png",alt:"Neumopaste",url:"https://neumo-paste.herokuapp.com",label:"Neumopaste",text:"Nuemopaste allows users to share links to code snippets without bombarding a chat group",direction:"left"},{src:"/images/itstime.png",alt:"Itstime",url:"https://itstime.vercel.app",label:"Itstime",text:"An open source web application for learning new technologies.",direction:"left"},{src:"/images/home.png",alt:"projects",label:"Home",direction:"bottom"},{src:"/images/socix.png",alt:"Socix",url:"https://socix.vercel.app",label:"Socix",text:"A messaging app meant for teams and workplaces.",direction:"right"},{src:"/images/fastweather.png",alt:"fast-weather",url:"https://github.com/collinsuzebu/fastweather",label:"FastWeather",text:"FastWeather is a robust asynchronous (openweathermap) application, designed to handles I/O and CPU computative background tasks.",direction:"right"},{src:"/images/pi-monitor.png",alt:"pi-monitor",url:"https://github.com/collinsuzebu/pimonitor",label:"Pi monitor",text:"The application is designed to diagnose the cause of embedded system performance depreciation.",direction:"bottom"}],d=" Numpy, Scikitlearn, Pandas packages, Django, Nameko, Bottle, ExpressJS, ReactJS, Data analysis, Data Mining, Data Cleaning, Data Modeling, Data Visualization using Tableau, RestAPI, SQL, MongoDB, Linux, Git, Docker, Redux, FastAPI, Celery, Redis, VanillaJS, Heroku, AWS",g=["#F2EEBF","#DEE4B9","","#C6F2C6","#CAD5CF","#C6E8FF","#ECDFEC","","#FAEAEC","#F2EEBF","","","#CAD5CF","#C6F2C6","#DEE4B9","","#C6E8FF","#ECDFEC","#FAEAEC","","#FFE4B5","#FFFAFA","#FFEBCD"],b=[{src:"/images/skills.png",alt:"skills",label:"Skills",text:function(){var e=[];return d.split(",").forEach((function(t,a){e.push(Object(i.jsx)("span",{style:{color:g[a]},children:t},a))})),e}(),direction:"left"},{src:"/images/home.png",alt:"projects",label:"Home",direction:"bottom"},{src:"/images/interests.png",alt:"interests",label:"Interests",text:u.interests,direction:"right"},{src:"/images/about-me.png",alt:"about-me",label:"About me",text:u.aboutMe,direction:"top"}],h=(a(13),function(e){var t,a=Object(n.useState)(!1),o=Object(r.a)(a,2),s=o[0],c=o[1],l=e.spinning,u="About me"===e.header;return Object(i.jsxs)("div",{className:"Tooltip-Wrapper",onMouseEnter:function(){t=setTimeout((function(){c(!0)}),e.delay||400)},onMouseLeave:function(){clearInterval(t),c(!1)},children:[e.children,s&&!l&&Object(i.jsxs)("div",{className:"Tooltip-Tip ".concat(e.direction||"top"),children:[e.header,e.content&&Object(i.jsx)("div",{className:"Tooltip-Body",style:{width:u&&"270px"},children:e.content})]})]})});function f(){var e=Object(n.useRef)(null),t=Object(n.useState)(!1),a=Object(r.a)(t,2),o=a[0],s=a[1],c=Object(n.useState)(!1),u=Object(r.a)(c,2),d=u[0],g=u[1],f=Object(n.useState)(!1),j=Object(r.a)(f,2),v=j[0],x=j[1],O=Object(n.useState)(!1),F=Object(r.a)(O,2),k=F[0],C=F[1],E=Object(n.useState)(!1),S=Object(r.a)(E,2),w=S[0],y=S[1],D=Object(n.useState)(!1),I=Object(r.a)(D,2),A=I[0],N=I[1];Object(n.useEffect)((function(){var e;return o&&(e=setTimeout((function(){s(!1)}),1e3)),v&&(e=setTimeout((function(){x(!1)}),1e3)),d&&(e=setTimeout((function(){g(!1)}),1e3)),function(){clearTimeout(e)}}),[o,v,d]),Object(n.useEffect)((function(){for(var t=e.current,a=t.childNodes,i=270,n=360/a.length,o=0;o<a.length;o++){i+=n,a[o].style.transform="rotate(".concat(i,"deg) translate(").concat(t.clientWidth/2,"px) rotate(-").concat(i,"deg)")}}),[k]);var T=function(e){"projects"===e.target.alt&&(e.preventDefault(),g(!0),x(!0),N(!1),y(!0),C(!k)),"about-me"===e.target.alt&&(e.preventDefault(),g(!0),x(!0),N(!0),y(!1),C(!k))},B=function(){var e=p;return k&&w&&(e=m),k&&A&&(e=b),e}();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"ciclegraph ".concat(o&&"spin"," ").concat(v&&"fadeSpin"),ref:e,children:B.map((function(e,t){return Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.url,className:"circle ".concat(d&&"fadeIn"),onClick:T,children:Object(i.jsx)(h,{header:e.label,content:e.text,direction:e.direction,spinning:v,children:Object(i.jsx)("img",{src:e.src,alt:e.alt})})},t)}))}),Object(i.jsx)("div",{className:"big__globe",children:Object(i.jsx)("img",{src:l,alt:"collins profile",onClick:function(e){s(!0)},style:{pointerEvents:"all"}})})]})}var j=function(){return Object(i.jsx)("div",{className:"app",children:Object(i.jsx)("div",{className:"main",children:Object(i.jsx)(f,{})})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),o(e),s(e)}))};c.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root")),v()}],[[14,1,2]]]);