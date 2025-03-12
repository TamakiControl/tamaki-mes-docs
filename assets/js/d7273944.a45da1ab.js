"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[6237],{9951:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});const d=JSON.parse('{"id":"appendix/script-api/inventory-script-api/validate-produce-request","title":"validateProduceRequest","description":"Validates a produce request based on the provided parameters.","source":"@site/docs/appendix/script-api/inventory-script-api/validate-produce-request.md","sourceDirName":"appendix/script-api/inventory-script-api","slug":"/appendix/script-api/inventory-script-api/validate-produce-request","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/validate-produce-request","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/validate-produce-request.md","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11,"title":"validateProduceRequest","description":"Validates a produce request based on the provided parameters."},"sidebar":"tutorialSidebar","previous":{"title":"produce","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/produce"},"next":{"title":"newMoveRequest","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/new-move-request"}}');var n=r(4848),i=r(8453);const s={sidebar_position:11,title:"validateProduceRequest",description:"Validates a produce request based on the provided parameters."},c="system.mes.inventory.validateProduceRequest",o={},a=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Code Examples",id:"code-examples",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"systemmesinventoryvalidateproducerequest",children:"system.mes.inventory.validateProduceRequest"})}),"\n",(0,n.jsx)(t.p,{children:"Validates a produce request based on the provided parameters."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"system.mes.inventory.validateProduceRequest(**produce_request)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"type"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"quantity"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Double"})}),(0,n.jsx)(t.td,{children:"The quantity to produce from the location."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"unitOfMeasureSymbol"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"The symbol of the unit of measure for the quantity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"lotIdOrName"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"The ID or name of the inventory lot from which the material is being produced."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"materialIdOrPath"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"The ID or path of the material being produced."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"destinationLocationIdOrPath"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"The ID or path of the location the produced inventory goes to."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"producingLotIdOrName"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"The ID or name of the inventory lot that will be producing the given lot."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"sourceLocationIdOrPath"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"The ID or path of the location from which inventory will be produced."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"createIfNotExists"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Boolean"})}),(0,n.jsx)(t.td,{children:"Indicates whether the system should create the lot if it does not exist."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"operationId"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,n.jsx)(t.td,{children:"The ID of the operation producing this inventory."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"productionOrderIdOrName"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"The ID or name of the production order associated with the production."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"incrementProductionOrderCount"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Boolean"})}),(0,n.jsx)(t.td,{children:"Indicates whether to increment the production order count."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"materialReasonCodeId"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,n.jsx)(t.td,{children:"The ID of the material reason code to add additional context."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"startDate"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Instant"})}),(0,n.jsx)(t.td,{children:"The start date and time of the production."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"endDate"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Instant"})}),(0,n.jsx)(t.td,{children:"The end date and time of the production."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ongoing"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Boolean"})}),(0,n.jsx)(t.td,{children:"Indicates whether this request is ongoing."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"inventoryName"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"The name of the inventory."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"notes"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"Notes related to the produce request."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"spare1"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"Additional field for user-defined context."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"spare2"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"Additional field for user-defined context."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"spare3"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"Additional field for user-defined context."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"Returns a JSON object where keys are field names and values are lists of validation violation messages."}),"\n",(0,n.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"# Generate the object structure for a new produce request object with no initial arguments\nproduce_request = system.mes.inventory.newProduceRequest()\n\n# Set basic attributes for the new produce request\nproduce_request['materialIdOrPath'] = 'Bottle/Milk'\nproduce_request['destinationLocationIdOrPath'] = 'DairyCo'\nproduce_request['quantity'] = 610\n# (You can continue setting other properties as needed here)\n\n# Validate produce request parameters\nvalidation_errors = system.mes.inventory.validateProduceRequest(**produce_request)\n\nif len(validation_errors) > 0:\n    print('Validation errors found:', validation_errors)\nelse:\n    print('Produce request parameters are valid.')\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var d=r(6540);const n={},i=d.createContext(n);function s(e){const t=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),d.createElement(i.Provider,{value:t},e.children)}}}]);