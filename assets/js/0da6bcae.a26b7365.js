"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[9589],{461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var s=t(4848),r=t(8453);const d={sidebar_position:7,title:"unconsume",description:"Unconsumes inventory from the MES based on the provided parameters."},i="system.mes.inventory.unconsume",c={id:"appendix/script-api/inventory-script-api/unconsume",title:"unconsume",description:"Unconsumes inventory from the MES based on the provided parameters.",source:"@site/docs/appendix/script-api/inventory-script-api/unconsume.md",sourceDirName:"appendix/script-api/inventory-script-api",slug:"/appendix/script-api/inventory-script-api/unconsume",permalink:"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/unconsume",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/unconsume.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"unconsume",description:"Unconsumes inventory from the MES based on the provided parameters."},sidebar:"tutorialSidebar",previous:{title:"newUnconsumeRequest",permalink:"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/new-unconsume-request"},next:{title:"validateUnconsumeRequest",permalink:"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/validate-unconsume-request"}},o={},a=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Code Examples",id:"code-examples",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"systemmesinventoryunconsume",children:"system.mes.inventory.unconsume"})}),"\n",(0,s.jsx)(n.p,{children:"Unconsumes inventory from the MES based on the provided parameters."}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"system.mes.inventory.unconsume(**unconsume_request)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"type"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsx)(n.td,{children:"The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"quantity"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Double"})}),(0,s.jsx)(n.td,{children:"The quantity to unconsume from the location."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"unitOfMeasureSymbol"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsx)(n.td,{children:"The symbol of the unit of measure for the quantity."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"lotIdOrName"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsx)(n.td,{children:"The ID or name of material lot that will be unconsuming the given lot."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"materialIdOrPath"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsx)(n.td,{children:"The ID or path of the material being unconsumed."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"destinationLocationIdOrPath"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsx)(n.td,{children:"The ID or path of the location the unconsumed inventory goes to."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"operationId"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"String"})," (ULID)"]}),(0,s.jsx)(n.td,{children:"The ID of the operation unconsuming this inventory."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"productionOrderIdOrName"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsx)(n.td,{children:"The ID or name of the production order associated with the unconsumption."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"materialReasonCodeId"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"String"})," (ULID)"]}),(0,s.jsx)(n.td,{children:"The ID of the material reason code to add additional context."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"startDate"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Instant"})}),(0,s.jsx)(n.td,{children:"The start date and time of the unconsumption."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"endDate"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Instant"})}),(0,s.jsx)(n.td,{children:"The end date and time of the unconsumption."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ongoing"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Boolean"})}),(0,s.jsx)(n.td,{children:"Indicates whether this request is ongoing."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"inventoryName"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsx)(n.td,{children:"The name of the inventory."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"notes"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsx)(n.td,{children:"Notes related to the unconsume request."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"spare1"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsx)(n.td,{children:"Additional field for user-defined context."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"spare2"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsx)(n.td,{children:"Additional field for user-defined context."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"spare3"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsx)(n.td,{children:"Additional field for user-defined context."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.p,{children:"Returns a JSON representation of a material lot record for an Unconsume Request."}),"\n",(0,s.jsx)(n.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Generate the object structure for a new unconsume request object with no initial arguments\nnew_request = system.mes.inventory.newUnconsumeRequest()\n\n# Set basic attributes for the new unconsume request\nnew_request['materialIdOrPath'] = 'Bottle/Milk'\nnew_request['destinationLocationIdOrPath'] = 'DairyCo'\nnew_request['quantity'] = 610\n# (You can continue setting other properties as needed here)\n\n# Unconsume the request\nunconsumed_request = system.mes.inventory.unconsume(**new_request)\n\n# Output the JSON representation of the unconsumed request\nprint(unconsumed_request)\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(6540);const r={},d=s.createContext(r);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);