"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[7076],{1928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=r(4848),s=r(8453);const i={sidebar_position:33,title:"newReceiveRequest",description:"Generates an empty non-persisted receive request to provide the structure to save a new record into the database."},d="system.mes.inventory.newReceiveRequest",c={id:"appendix/script-api/inventory-script-api/new-receive-request",title:"newReceiveRequest",description:"Generates an empty non-persisted receive request to provide the structure to save a new record into the database.",source:"@site/docs/appendix/script-api/inventory-script-api/new-receive-request.md",sourceDirName:"appendix/script-api/inventory-script-api",slug:"/appendix/script-api/inventory-script-api/new-receive-request",permalink:"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/new-receive-request",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/new-receive-request.md",tags:[],version:"current",sidebarPosition:33,frontMatter:{sidebar_position:33,title:"newReceiveRequest",description:"Generates an empty non-persisted receive request to provide the structure to save a new record into the database."},sidebar:"tutorialSidebar",previous:{title:"validateEditInventoryQuantityRequest",permalink:"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/validate-edit-inventory-quantity-request"},next:{title:"receive",permalink:"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/receive"}},l={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Code Examples",id:"code-examples",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"systemmesinventorynewreceiverequest",children:"system.mes.inventory.newReceiveRequest"})}),"\n",(0,n.jsxs)(t.p,{children:["Generates an empty non-persisted Receive Request to provide the structure required by the API to save a new record into the database.\nThis method must be combined with the ",(0,n.jsx)(t.a,{href:"./receive",children:"receive"})," method in order to persist the record."]}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"system.mes.inventory.newReceiveRequest()\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"This method does not take any parameters."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"Returns a JSON representation of the newly created Receive Request object. The following is a list of keys and default values:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Key"}),(0,n.jsx)(t.th,{children:"Default Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"type"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"RECEIVE"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"quantity"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"unitOfMeasureSymbol"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"lotIdOrName"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"materialIdOrPath"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"destinationLocationIdOrPath"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"createIfNotExists"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"false"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"operationId"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"productionOrderIdOrName"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"materialReasonCodeId"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"startDate"})}),(0,n.jsx)(t.td,{children:"Current Time"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"endDate"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ongoing"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"false"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"inventoryName"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"notes"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"spare1"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"spare2"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"spare3"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"null"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"# Generate the object structure for a new receive request object with no initial arguments\nnew_request = system.mes.inventory.newReceiveRequest()\n\n# Set basic attributes for the new receive request\nnew_request['materialIdOrPath'] = 'Bottle/Milk'\nnew_request['destinationLocationIdOrPath'] = 'DairyCo'\nnew_request['quantity'] = 610\nnew_request['createIfNotExists'] = True\n# (You can continue setting other properties as needed here)\n\n# Receive the request\nreceived_request = system.mes.inventory.receive(**new_request)\n\n# Output the JSON representation of the received request\nprint(received_request)\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>c});var n=r(6540);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);