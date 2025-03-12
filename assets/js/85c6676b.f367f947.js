"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[7296],{1900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"appendix/script-api/inventory-script-api/validate-scrap-request","title":"validateScrapRequest","description":"Validates a scrap request based on the provided parameters.","source":"@site/docs/appendix/script-api/inventory-script-api/validate-scrap-request.md","sourceDirName":"appendix/script-api/inventory-script-api","slug":"/appendix/script-api/inventory-script-api/validate-scrap-request","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/validate-scrap-request","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/validate-scrap-request.md","tags":[],"version":"current","sidebarPosition":23,"frontMatter":{"sidebar_position":23,"title":"validateScrapRequest","description":"Validates a scrap request based on the provided parameters."},"sidebar":"tutorialSidebar","previous":{"title":"scrap","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/scrap"},"next":{"title":"newReturnRequest","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/new-return-request"}}');var n=r(4848),d=r(8453);const i={sidebar_position:23,title:"validateScrapRequest",description:"Validates a scrap request based on the provided parameters."},a="system.mes.inventory.validateScrapRequest",c={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Code Examples",id:"code-examples",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"systemmesinventoryvalidatescraprequest",children:"system.mes.inventory.validateScrapRequest"})}),"\n",(0,n.jsx)(t.p,{children:"Validates a scrap request based on the provided parameters."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"system.mes.inventory.validateScrapRequest(**scrap_request)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"type"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"quantity"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Double"})}),(0,n.jsx)(t.td,{children:"The quantity to scrap from the location."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"unitOfMeasureSymbol"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"The symbol of the unit of measure for the quantity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"lotIdOrName"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"The ID or name of the inventory lot that will be scrapped."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"materialIdOrPath"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"The ID or path of the material being scrapped."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"sourceLocationIdOrPath"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"The ID or path of the location from which inventory will be scrapped."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"operationId"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,n.jsx)(t.td,{children:"The ID of the operation scrapping this inventory."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"productionOrderIdOrName"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"The ID or name of the production order associated with the scrap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"materialReasonCodeId"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,n.jsx)(t.td,{children:"The ID of the material reason code to add additional context."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"startDate"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Instant"})}),(0,n.jsx)(t.td,{children:"The start date and time of the scrap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"endDate"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Instant"})}),(0,n.jsx)(t.td,{children:"The end date and time of the scrap."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ongoing"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Boolean"})}),(0,n.jsx)(t.td,{children:"Indicates whether this request is ongoing."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"inventoryName"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"The name of the inventory the scrapped inventory goes to."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"notes"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"Notes related to the scrap request."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"spare1"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"Additional field for user-defined context."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"spare2"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"Additional field for user-defined context."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"spare3"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"Additional field for user-defined context."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"Returns a JSON object where keys are field names and values are lists of validation violation messages."}),"\n",(0,n.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"# Generate the object structure for a new scrap request object with no initial arguments\nscrap_request = system.mes.inventory.newScrapRequest()\n\n# Set basic attributes for the new scrap request\nscrap_request['materialIdOrPath'] = 'Bottle/Milk'\nscrap_request['sourceLocationIdOrPath'] = 'DairyCo'\nscrap_request['quantity'] = 610\n# (You can continue setting other properties as needed here)\n\n# Validate scrap request parameters\nvalidation_errors = system.mes.inventory.validateScrapRequest(**scrap_request)\n\nif len(validation_errors) > 0:\n    print('Validation errors found:', validation_errors)\nelse:\n    print('Scrap request parameters are valid.')\n"})})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var s=r(6540);const n={},d=s.createContext(n);function i(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);