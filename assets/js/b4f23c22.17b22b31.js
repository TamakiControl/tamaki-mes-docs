"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[3799],{4659:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=s(4848),r=s(8453);const i={sidebar_position:36,title:"newShipRequest",description:"Generates an empty non-persisted ship request to provide the structure to save a new record into the database."},d="system.mes.inventory.newShipRequest",c={id:"appendix/script-api/inventory-script-api/new-ship-request",title:"newShipRequest",description:"Generates an empty non-persisted ship request to provide the structure to save a new record into the database.",source:"@site/docs/appendix/script-api/inventory-script-api/new-ship-request.md",sourceDirName:"appendix/script-api/inventory-script-api",slug:"/appendix/script-api/inventory-script-api/new-ship-request",permalink:"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/new-ship-request",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/new-ship-request.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{sidebar_position:36,title:"newShipRequest",description:"Generates an empty non-persisted ship request to provide the structure to save a new record into the database."},sidebar:"tutorialSidebar",previous:{title:"validateReceiveRequest",permalink:"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/validate-receive-request"},next:{title:"ship",permalink:"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/ship"}},l={},h=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Code Examples",id:"code-examples",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"systemmesinventorynewshiprequest",children:"system.mes.inventory.newShipRequest"})}),"\n",(0,n.jsxs)(t.p,{children:["Generates an empty non-persisted Ship Request to provide the structure required by the API to save a new record into the database.\nThis method must be combined with the ",(0,n.jsx)(t.a,{href:"./ship",children:"ship"})," method in order to persist the record."]}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"system.mes.inventory.newShipRequest()\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"This method does not take any parameters."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"Returns a JSON representation of the newly created Ship Request object. The following is a list of keys and default values:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Key"}),(0,n.jsx)(t.th,{children:"Default Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"type"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"SHIP"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"quantity"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"unitOfMeasureSymbol"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"lotIdOrName"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"materialIdOrPath"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"sourceLocationIdOrPath"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"operationId"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"productionOrderIdOrName"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"materialReasonCodeId"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"startDate"})}),(0,n.jsx)(t.td,{children:"Current Time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"endDate"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ongoing"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"false"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"inventoryName"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"notes"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"spare1"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"spare2"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"spare3"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"# Generate the object structure for a new ship request object with no initial arguments\nnew_request = system.mes.inventory.newShipRequest()\n\n# Set basic attributes for the new ship request\nnew_request['materialIdOrPath'] = 'Bottle/Milk'\nnew_request['sourceLocationIdOrPath'] = 'DairyCo'\nnew_request['quantity'] = 610\n# (You can continue setting other properties as needed here)\n\n# Ship the request\nshipped_request = system.mes.inventory.ship(**new_request)\n\n# Output the JSON representation of the shipped request\nprint(shipped_request)\n"})})]})}function a(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>c});var n=s(6540);const r={},i=n.createContext(r);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);