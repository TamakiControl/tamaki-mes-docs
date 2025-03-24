"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[4689],{15262:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"appendix/script-api/inventory-script-api/new-scrap-request","title":"newScrapRequest","description":"Generates an empty non-persisted scrap request to provide the structure to save a new record into the database.","source":"@site/docs/appendix/script-api/inventory-script-api/new-scrap-request.md","sourceDirName":"appendix/script-api/inventory-script-api","slug":"/appendix/script-api/inventory-script-api/new-scrap-request","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/new-scrap-request","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/new-scrap-request.md","tags":[],"version":"current","sidebarPosition":21,"frontMatter":{"sidebar_position":21,"title":"newScrapRequest","description":"Generates an empty non-persisted scrap request to provide the structure to save a new record into the database."},"sidebar":"tutorialSidebar","previous":{"title":"validateMergeRequest","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/validate-merge-request"},"next":{"title":"scrap","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/scrap"}}');var n=t(74848),d=t(28453);const i={sidebar_position:21,title:"newScrapRequest",description:"Generates an empty non-persisted scrap request to provide the structure to save a new record into the database."},c="system.mes.inventory.newScrapRequest",a={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Code Examples",id:"code-examples",level:2}];function o(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"systemmesinventorynewscraprequest",children:"system.mes.inventory.newScrapRequest"})}),"\n",(0,n.jsxs)(r.p,{children:["Generates an empty non-persisted Scrap Request to provide the structure required by the API to save a new record into the database.\nThis method must be combined with the ",(0,n.jsx)(r.a,{href:"./scrap",children:"scrap"})," method in order to persist the record."]}),"\n",(0,n.jsx)(r.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"system.mes.inventory.newScrapRequest()\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameter"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"-"}),(0,n.jsx)(r.td,{children:"This method does not take any parameters."})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.p,{children:"Returns a JSON representation of the newly created Scrap Request object. The following is a list of keys and default values:"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Key"}),(0,n.jsx)(r.th,{children:"Default Value"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"type"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"SCRAP"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"quantity"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"null"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"unitOfMeasureSymbol"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"null"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"lotIdOrName"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"null"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"materialIdOrPath"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"null"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"sourceLocationIdOrPath"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"null"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"operationId"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"null"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"productionOrderIdOrName"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"null"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"materialReasonCodeId"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"null"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"startDate"})}),(0,n.jsx)(r.td,{children:"Current Time"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"endDate"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"null"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"ongoing"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"inventoryName"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"null"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"notes"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"null"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"spare1"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"null"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"spare2"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"null"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"spare3"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"null"})})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"# Generate the object structure for a new scrap request object with no initial arguments\nnew_request = system.mes.inventory.newScrapRequest()\n\n# Set basic attributes for the new scrap request\nnew_request['materialIdOrPath'] = 'Bottle/Milk'\nnew_request['sourceLocationIdOrPath'] = 'DairyCo'\nnew_request['quantity'] = 610\n# (You can continue setting other properties as needed here)\n\n# Scrap the request\nscrapped_request = system.mes.inventory.scrap(**new_request)\n\n# Output the JSON representation of the scrapped request\nprint(scrapped_request)\n"})})]})}function h(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var s=t(96540);const n={},d=s.createContext(n);function i(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);