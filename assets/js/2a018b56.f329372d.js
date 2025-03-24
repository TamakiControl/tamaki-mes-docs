"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[8102],{30801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"appendix/script-api/inventory-script-api/change-status","title":"changeStatus","description":"Changes the status of the inventory lot from the MES based on the provided parameters.","source":"@site/docs/appendix/script-api/inventory-script-api/change-status.md","sourceDirName":"appendix/script-api/inventory-script-api","slug":"/appendix/script-api/inventory-script-api/change-status","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/change-status","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/change-status.md","tags":[],"version":"current","sidebarPosition":28,"frontMatter":{"sidebar_position":28,"title":"changeStatus","description":"Changes the status of the inventory lot from the MES based on the provided parameters."},"sidebar":"tutorialSidebar","previous":{"title":"newChangeStatusRequest","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/new-change-status-request"},"next":{"title":"newEditInventoryQuantityRequest","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/new-edit-inventory-quantity-request"}}');var r=n(74848),i=n(28453);const d={sidebar_position:28,title:"changeStatus",description:"Changes the status of the inventory lot from the MES based on the provided parameters."},a="system.mes.inventory.changeStatus",c={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Code Examples",id:"code-examples",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"systemmesinventorychangestatus",children:"system.mes.inventory.changeStatus"})}),"\n",(0,r.jsx)(t.p,{children:"Changes the status of the inventory lot from the MES based on the provided parameters."}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"system.mes.inventory.changeStatus(**change_status_request)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"type"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"lotId"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,r.jsx)(t.td,{children:"The ID of the inventory lot whose status is being updated."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"newStatus"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"The new status to be assigned to the inventory lot."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"operationId"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,r.jsx)(t.td,{children:"The ID of the operation changing the status of this inventory."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"notes"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"Notes related to the change status request."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"spare1"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"Additional field for user-defined context."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"spare2"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"Additional field for user-defined context."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"spare3"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"Additional field for user-defined context."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"Returns a JSON representation of an inventory lot record for a Change Status Request."}),"\n",(0,r.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"# Generate the object structure for a new change status request object with no initial arguments\nnew_request = system.mes.inventory.newChangeStatusRequest()\n\n# Set basic attributes for the new change status requestOPOE\nnew_request['newStatus'] = 'AVAILABLE'\nnew_request['lotId'] = '01JJCQEJYG-E31FHVTF-JB6WEJTC'\n# (You can continue setting other properties as needed here)\n\n# Change the status of the lot\nchanged_status_request = system.mes.inventory.changeStatus(**new_request)\n\n# Output the JSON representation of the changed status request\nprint(changed_status_request)\n"})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>a});var s=n(96540);const r={},i=s.createContext(r);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);