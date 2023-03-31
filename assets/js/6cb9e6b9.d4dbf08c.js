"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[4551],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),h=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=h(n),p=i,m=c["".concat(l,".").concat(p)]||c[p]||d[p]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var h=2;h<r;h++)o[h]=n[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1,title:"What is a Chaumian Mint"},o=void 0,s={unversionedId:"FAQs/WhatIsChaumianMint",id:"FAQs/WhatIsChaumianMint",title:"What is a Chaumian Mint",description:"This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.",source:"@site/docs/FAQs/WhatIsChaumianMint.md",sourceDirName:"FAQs",slug:"/FAQs/WhatIsChaumianMint",permalink:"/docs/FAQs/WhatIsChaumianMint",draft:!1,editUrl:"https://github.com/fedimint/wiki_fedimint/tree/main/docs/FAQs/WhatIsChaumianMint.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"What is a Chaumian Mint"},sidebar:"tutorialSidebar",previous:{title:"Frequently Asked Questions",permalink:"/docs/category/frequently-asked-questions"},next:{title:"How do backups work?",permalink:"/docs/FAQs/Backups"}},l={},h=[{value:"What is a Federated Mint?",id:"what-is-a-federated-mint",level:2},{value:"How does it relate to Bitcoin?",id:"how-does-it-relate-to-bitcoin",level:2},{value:"What about centralization?",id:"what-about-centralization",level:2}],u={toc:h},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.")),(0,i.kt)("p",null,"One of the (if not the) earliest e-cash schemes were ",(0,i.kt)("a",{parentName:"p",href:"http://www.hit.bme.hu/~buttyan/courses/BMEVIHIM219/2009/Chaum.BlindSigForPayment.1982.PDF"},"Chaumian mints or banks"),". They use blind signatures to allow the anonymous transfer of backing assets held by the mint. "),(0,i.kt)("p",null,"The basic idea is that a user can give the mint some amount x of an asset and the mint in turn blind signs x IOUs that allow the user to either withdraw the asset or exchange them for new IOUs or products. "),(0,i.kt)("p",null,"The small word \u201cblind\u201d does the heavy lifting here, it means that the user and mint run a cryptographic protocol that allows the user to acquire a digital signature on some data without the mint learning anything about the message or the signature so that when the mint sees one of its signatures for some message it can no longer tell to whom it was issued. "),(0,i.kt)("p",null,"This means trading these IOUs is completely anonymous."),(0,i.kt)("p",null,"\u201cWhy have I never heard of this before?\u201d you may ask and the sad answer is that it never really caught on. "),(0,i.kt)("p",null,"One big problem of chaumian mints is that they are a single point of failure and an easy target for regulation and other attacks. Most countries financial regulations disallow anonymous payments to some degree, so running a mint in the open is a bad idea."),(0,i.kt)("p",null,"Running one anonymously brings with it the problem of trust, the operator could run away with the money at any point. This combination of problems relegated the concept to a very small, low value market, e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20210518075600/https://lightning-wallet.com/storage-tokens"},"to pay for watchtower fees")," in lightning."),(0,i.kt)("h2",{id:"what-is-a-federated-mint"},"What is a Federated Mint?"),(0,i.kt)("p",null,"In a federated mint the required trust is split over multiple parties. It employs a consensus algorithm and threshold cryptography to guarantee both safety and availability even in the case that some parties are compromised. "),(0,i.kt)("p",null,"That means if the participants are sufficiently distributed not even a nation state level attacker can harm the federation. Running it anonymously also becomes much more attractive since there is no single party anymore that could run away with the backing funds."),(0,i.kt)("h2",{id:"how-does-it-relate-to-bitcoin"},"How does it relate to Bitcoin?"),(0,i.kt)("p",null,"Bitcoin is the first asset in human history that can truly be held in a federated manner, meaning only being accessible if a certain quorum of people agrees. It is thus the perfect backing asset for a federated mint. A first, primitive version could work as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"deposit"),": A User sends BTC to the federation\u2019s wallet and in turn receives the corresponding amount of eCash notes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"transfer"),": The user can then pay someone else using these notes, which works as follows:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The payer selects appropriately many notes and sends them to the payee"),(0,i.kt)("li",{parentName:"ul"},"The payee exchanges these notes for new ones using the federated mint"),(0,i.kt)("li",{parentName:"ul"},"Only then does the payee accepts the transaction, as the exchange may fail in case of a double spend"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"withdraw"),": Finally any user can redeem notes for BTC again.")),(0,i.kt)("p",null,"We see that between deposit and withdrawal there can be many internal transactions, so federated mints do not only provide excellent privacy but also scaling. One problem with this primitive version is the enormous centralization pressure it exerts, as two federated mints won\u2019t accept each other\u2019s notes, making big mints more attractive. This can be mitigated by integrating with Lightning. For this the federation needs to support two more operations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ln-send"),": pay an LN invoice using eCash notes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ln-receive"),": issue an invoice to a user. Once it is paid the user receives the appropriate amount of eCash notes.")),(0,i.kt)("p",null,"With these two operations any federated mint suddenly becomes interoperable with any other Lightning node, including other federated mints. The federation essentially becomes a hosted but federated Lightning wallet."),(0,i.kt)("h2",{id:"what-about-centralization"},"What about centralization?"),(0,i.kt)("p",null,"Yes, a federated mint requires more trust than a self-hosted Lightning node or on-chain Bitcoin. But we think that the risk can be minimized sufficiently by distributing the federation members. "),(0,i.kt)("p",null,"There are many people that can not or do not want to run their own lightning wallet, be it because of fees or maintenance effort. "),(0,i.kt)("p",null,"For these a federated mint is much preferable to centralized solutions as it protects user privacy and has no single points of failure. Systemic risks should be sufficiently mitigated by the fact that any willing group of people should be able to start their own federation."))}d.isMDXComponent=!0}}]);