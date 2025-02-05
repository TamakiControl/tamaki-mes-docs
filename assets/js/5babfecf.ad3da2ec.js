"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[6795],{7407:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var n=r(4848),s=r(8453);const d={sidebar_position:24,title:"newReturnRequest",description:"Generates an empty non-persisted return request to provide the structure to save a new record into the database."},i="system.mes.inventory.newReturnRequest",c={id:"appendix/script-api/inventory-script-api/new-return-request",title:"newReturnRequest",description:"Generates an empty non-persisted return request to provide the structure to save a new record into the database.",source:"@site/docs/appendix/script-api/inventory-script-api/new-return-request.md",sourceDirName:"appendix/script-api/inventory-script-api",slug:"/appendix/script-api/inventory-script-api/new-return-request",permalink:"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/new-return-request",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/new-return-request.md",tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24,title:"newReturnRequest",description:"Generates an empty non-persisted return request to provide the structure to save a new record into the database."},sidebar:"tutorialSidebar",previous:{title:"validateScrapRequest",permalink:"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/validate-scrap-request"},next:{title:"returnInventory",permalink:"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/return-inventory"}},l={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Code Examples",id:"code-examples",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"systemmesinventorynewreturnrequest",children:"system.mes.inventory.newReturnRequest"})}),"\n",(0,n.jsxs)(t.p,{children:["Generates an empty non-persisted Return Request to provide the structure required by the API to save a new record into the database.\nThis method must be combined with the ",(0,n.jsx)(t.a,{href:"./return-inventory",children:"returnInventory"})," method in order to persist the record."]}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"system.mes.inventory.newReturnRequest()\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"This method does not take any parameters."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"Returns a JSON representation of the newly created Return Request object. The following is a list of keys and default values:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Key"}),(0,n.jsx)(t.th,{children:"Default Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"type"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"RETURN"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"quantity"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"unitOfMeasureSymbol"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"lotIdOrName"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"materialIdOrPath"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"sourceLocationIdOrPath"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"operationId"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"productionOrderIdOrName"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"materialReasonCodeId"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"startDate"})}),(0,n.jsx)(t.td,{children:"Current Time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"endDate"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ongoing"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"false"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"inventoryName"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"notes"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"spare1"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"spare2"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"spare3"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"# Generate the object structure for a new return request object with no initial arguments\nnew_request = system.mes.inventory.newReturnRequest()\n\n# Set basic attributes for the new return request\nnew_request['materialIdOrPath'] = 'Bottle/Milk'\nnew_request['sourceLocationIdOrPath'] = 'DairyCo'\nnew_request['quantity'] = 610\n# (You can continue setting other properties as needed here)\n\n# Return the request\nreturned_request = system.mes.inventory.returnInventory(**new_request)\n\n# Output the JSON representation of the returned request\nprint(returned_request)\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(6540);const s={},d=n.createContext(s);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);