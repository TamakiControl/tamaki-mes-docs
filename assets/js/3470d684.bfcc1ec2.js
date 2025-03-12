"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[81],{1733:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"appendix/script-api/inventory-script-api/get-inventory-lot-record-references","title":"getInventoryLotRecordReferences","description":"Retrieves a list of references to a inventory lot record with the given ID.","source":"@site/docs/appendix/script-api/inventory-script-api/get-inventory-lot-record-references.md","sourceDirName":"appendix/script-api/inventory-script-api","slug":"/appendix/script-api/inventory-script-api/get-inventory-lot-record-references","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/get-inventory-lot-record-references","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/get-inventory-lot-record-references.md","tags":[],"version":"current","sidebarPosition":60,"frontMatter":{"sidebar_position":60,"title":"getInventoryLotRecordReferences","description":"Retrieves a list of references to a inventory lot record with the given ID."},"sidebar":"tutorialSidebar","previous":{"title":"saveInventoryLotRecord","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/save-inventory-lot-record"},"next":{"title":"validateInventoryLotRecord","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/validate-inventory-lot-record"}}');var i=r(4848),s=r(8453);const o={sidebar_position:60,title:"getInventoryLotRecordReferences",description:"Retrieves a list of references to a inventory lot record with the given ID."},c="system.mes.inventory.getInventoryLotRecordReferences",d={},l=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Code Examples",id:"code-examples",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"systemmesinventorygetinventorylotrecordreferences",children:"system.mes.inventory.getInventoryLotRecordReferences"})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["Retrieves a list of references to an ",(0,i.jsx)(t.a,{href:"../../data-model/inventory-model/inventory-lot-record",children:"Inventory Lot Records"})," object by its ID."]}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"system.mes.inventory.getInventoryLotRecordReferences(id)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"id"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(t.td,{children:"The ID of the inventory lot record to retrieve."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"Returns a list of JSON objects. Each JSON object has the following properties:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"tableName"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The name of the table that the reference is in."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"references"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"List<JSON Object>"})}),(0,i.jsx)(t.td,{children:"List of JSON objects corresponding to references to the inventory lot record."})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"The JSON Objects in references has the following properties:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"fkColName"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The name of the foreign key column."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"id"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(t.td,{children:"The ULID of the object that is referencing the inventory lot record."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"# Retrieve the references for the inventory lot record specified\nlot_record_references = system.mes.inventory.getInventoryLotRecordReferences('VQNX3P98-01JE6QXQX0-993FMEHT')\n\n# Output the inventory lot record references\nprint(lot_record_references)\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(6540);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);