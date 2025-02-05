"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[7733],{6191:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=r(4848),n=r(8453);const i={sidebar_position:47,title:"newLotHistoryRequest",description:"Generates an empty non-persisted lot history request to provide the structure to retrieve records from the database."},o="system.mes.inventory.newLotHistoryRequest",d={id:"appendix/script-api/inventory-script-api/new-lot-history-request",title:"newLotHistoryRequest",description:"Generates an empty non-persisted lot history request to provide the structure to retrieve records from the database.",source:"@site/docs/appendix/script-api/inventory-script-api/new-lot-history-request.md",sourceDirName:"appendix/script-api/inventory-script-api",slug:"/appendix/script-api/inventory-script-api/new-lot-history-request",permalink:"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/new-lot-history-request",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/new-lot-history-request.md",tags:[],version:"current",sidebarPosition:47,frontMatter:{sidebar_position:47,title:"newLotHistoryRequest",description:"Generates an empty non-persisted lot history request to provide the structure to retrieve records from the database."},sidebar:"tutorialSidebar",previous:{title:"getAllInventoryForLocationAndChildren",permalink:"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/get-all-inventory-for-location-and-children"},next:{title:"getLotHistory",permalink:"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/get-lot-history"}},c={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Code Examples",id:"code-examples",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"systemmesinventorynewlothistoryrequest",children:"system.mes.inventory.newLotHistoryRequest"})}),"\n",(0,s.jsxs)(t.p,{children:["Generates an empty non-persisted Lot History Request to provide the structure required by the API to retrieve records from the database.\nThis method must be combined with the ",(0,s.jsx)(t.a,{href:"./get-lot-history",children:"getLotHistory"})," method to retrieve the records."]}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"system.mes.inventory.newLotHistoryRequest()\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"-"}),(0,s.jsx)(t.td,{children:"This method does not take any parameters."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"Returns a JSON representation of the newly created Lot History Request object. The following is a list of keys and default values:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{children:"Default Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"lotId"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"null"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"lotRecordType"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"null"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"operationId"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"null"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"productionOrderIdOrName"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"null"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"materialReasonCodeId"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"null"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"startDate"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"null"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"endDate"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"null"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"status"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"null"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# Generate the object structure for a new lot history request object with no initial arguments\nnew_lot_history_request = system.mes.inventory.newLotHistoryRequest()\n\n# Set basic attributes for the new lot history request\nnew_lot_history_request['lotId'] = '01JJCPQWYG-T9CW4G6Z-96XBWYQB'\n# (You can continue setting other properties as needed here)\n\n# Retrieve the lot history\nlot_history = system.mes.inventory.getLotHistory(**new_lot_history_request)\n\n# Output the list of lot history records\nprint(lot_history)\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>d});var s=r(6540);const n={},i=s.createContext(n);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);