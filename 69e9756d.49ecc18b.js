(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{142:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return v}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),l=b(n),s=o,v=l["".concat(r,".").concat(s)]||l[s]||d[s]||a;return n?i.a.createElement(v,c(c({ref:t},p),{},{components:n})):i.a.createElement(v,c({ref:t},p))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=s;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var p=2;p<a;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return b}));var o=n(2),i=n(6),a=(n(0),n(142)),r={title:"RoomInvitation"},c={unversionedId:"api/room-invitation",id:"api/room-invitation",isDocsHomePage:!1,title:"RoomInvitation",description:"Accept room invitation",source:"@site/docs/api/room-invitation.md",slug:"/api/room-invitation",permalink:"/docs/api/room-invitation",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/api/room-invitation.md",version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1602141112,sidebar:"docs",previous:{title:"Room",permalink:"/docs/api/room"},next:{title:"Friendship",permalink:"/docs/api/friendship"}},m=[{value:"RoomInvitation",id:"roominvitation",children:[{value:"roomInvitation.accept() \u21d2 <code>Promise &lt;void&gt;</code>",id:"roominvitationaccept-\u21d2-promise-void",children:[]},{value:"roomInvitation.inviter() \u21d2 <code>Promise &lt;Contact&gt;</code>",id:"roominvitationinviter-\u21d2-promise-contact",children:[]},{value:"roomInvitation.topic() \u21d2 <code>Promise &lt;string&gt;</code>",id:"roominvitationtopic-\u21d2-promise-string",children:[]},{value:"<del>roomInvitation.roomTopic()</del>",id:"roominvitationroomtopic",children:[]},{value:"roomInvitation.date() \u21d2 <code>Promise &lt;Date&gt;</code>",id:"roominvitationdate-\u21d2-promise-date",children:[]},{value:"roomInvitation.age() \u21d2 <code>Promise &lt;number&gt;</code>",id:"roominvitationage-\u21d2-promise-number",children:[]}]}],p={rightToc:m};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Accept room invitation"),Object(a.b)("h2",{id:"roominvitation"},"RoomInvitation"),Object(a.b)("p",null,"accept room invitation"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kind"),": global class"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/room-invitation#RoomInvitation"}),"RoomInvitation"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/room-invitation#RoomInvitation+accept"}),".accept","(",")")," \u21d2 ",Object(a.b)("inlineCode",{parentName:"li"},"Promise <void>")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/room-invitation#RoomInvitation+inviter"}),".inviter","(",")")," \u21d2 ",Object(a.b)("inlineCode",{parentName:"li"},"Promise <Contact>")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/room-invitation#RoomInvitation+topic"}),".topic","(",")")," \u21d2 ",Object(a.b)("inlineCode",{parentName:"li"},"Promise <string>")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/room-invitation#RoomInvitation+roomTopic"}),Object(a.b)("del",{parentName:"a"},".roomTopic","(",")"))," \u21d2 ",Object(a.b)("inlineCode",{parentName:"li"},"Promise <string>")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/room-invitation#RoomInvitation+date"}),".date","(",")")," \u21d2 ",Object(a.b)("inlineCode",{parentName:"li"},"Promise <Date>")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/api/room-invitation#RoomInvitation+age"}),".age","(",")")," \u21d2 ",Object(a.b)("inlineCode",{parentName:"li"},"Promise <number>"))))),Object(a.b)("h3",{id:"roominvitationaccept-\u21d2-promise-void"},"roomInvitation.accept","(",")"," \u21d2 ",Object(a.b)("inlineCode",{parentName:"h3"},"Promise <void>")),Object(a.b)("p",null,"Accept Room Invitation"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/api/room-invitation#RoomInvitation"}),Object(a.b)("inlineCode",{parentName:"a"},"RoomInvitation")),"  "),Object(a.b)("h4",{id:"example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const bot = new Wechaty()\nbot.on('room-invite', async roomInvitation => {\n  try {\n    console.log(`received room-invite event.`)\n    await roomInvitation.accept()\n  } catch (e) {\n    console.error(e)\n  }\n}\n.start()\n")),Object(a.b)("h3",{id:"roominvitationinviter-\u21d2-promise-contact"},"roomInvitation.inviter","(",")"," \u21d2 ",Object(a.b)("inlineCode",{parentName:"h3"},"Promise <Contact>")),Object(a.b)("p",null,"Get the inviter from room invitation"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/api/room-invitation#RoomInvitation"}),Object(a.b)("inlineCode",{parentName:"a"},"RoomInvitation")),"  "),Object(a.b)("h4",{id:"example-1"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const bot = new Wechaty()\nbot.on('room-invite', async roomInvitation => {\n  const inviter = await roomInvitation.inviter()\n  const name = inviter.name()\n  console.log(`received room invitation event from ${name}`)\n}\n.start()\n")),Object(a.b)("h3",{id:"roominvitationtopic-\u21d2-promise-string"},"roomInvitation.topic","(",")"," \u21d2 ",Object(a.b)("inlineCode",{parentName:"h3"},"Promise <string>")),Object(a.b)("p",null,"Get the room topic from room invitation"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/api/room-invitation#RoomInvitation"}),Object(a.b)("inlineCode",{parentName:"a"},"RoomInvitation")),"  "),Object(a.b)("h4",{id:"example-2"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"const bot = new Wechaty()\nbot.on('room-invite', async roomInvitation => {\n  const topic = await roomInvitation.topic()\n  console.log(`received room invitation event from room ${topic}`)\n}\n.start()\n")),Object(a.b)("h3",{id:"roominvitationroomtopic"},Object(a.b)("del",{parentName:"h3"},"roomInvitation.roomTopic","(",")")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/api/room-invitation#RoomInvitation"}),Object(a.b)("inlineCode",{parentName:"a"},"RoomInvitation")),Object(a.b)("br",{parentName:"p"}),"\n",Object(a.b)("strong",{parentName:"p"},"Deprecated:"),": use topic","(",")"," instead"),Object(a.b)("h3",{id:"roominvitationdate-\u21d2-promise-date"},"roomInvitation.date","(",")"," \u21d2 ",Object(a.b)("inlineCode",{parentName:"h3"},"Promise <Date>")),Object(a.b)("p",null,"Get the invitation time"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/api/room-invitation#RoomInvitation"}),Object(a.b)("inlineCode",{parentName:"a"},"RoomInvitation"))),Object(a.b)("h3",{id:"roominvitationage-\u21d2-promise-number"},"roomInvitation.age","(",")"," \u21d2 ",Object(a.b)("inlineCode",{parentName:"h3"},"Promise <number>")),Object(a.b)("p",null,"Returns the roopm invitation age in seconds."),Object(a.b)("p",null,"For example, the invitation is sent at time ",Object(a.b)("inlineCode",{parentName:"p"},"8:43:01"),", and when we received it in Wechaty, the time is ",Object(a.b)("inlineCode",{parentName:"p"},"8:43:15"),", then the age","(",")"," will return ",Object(a.b)("inlineCode",{parentName:"p"},"8:43:15 - 8:43:01 = 14 (seconds)")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kind"),": instance method of ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/api/room-invitation#RoomInvitation"}),Object(a.b)("inlineCode",{parentName:"a"},"RoomInvitation"))))}b.isMDXComponent=!0}}]);