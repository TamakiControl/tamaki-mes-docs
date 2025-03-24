"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[3419],{98220:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"appendix/script-api/inventory-script-api/validate-unconsume-request","title":"validateUnconsumeRequest","description":"Validates an unconsume request based on the provided parameters.","source":"@site/docs/appendix/script-api/inventory-script-api/validate-unconsume-request.md","sourceDirName":"appendix/script-api/inventory-script-api","slug":"/appendix/script-api/inventory-script-api/validate-unconsume-request","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/validate-unconsume-request","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/validate-unconsume-request.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8,"title":"validateUnconsumeRequest","description":"Validates an unconsume request based on the provided parameters."},"sidebar":"tutorialSidebar","previous":{"title":"unconsume","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/unconsume"},"next":{"title":"newProduceRequest","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/new-produce-request"}}');var r=t(74848),d=t(28453);const i={sidebar_position:8,title:"validateUnconsumeRequest",description:"Validates an unconsume request based on the provided parameters."},c="system.mes.inventory.validateUnconsumeRequest",o={},a=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Code Examples",id:"code-examples",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"systemmesinventoryvalidateunconsumerequest",children:"system.mes.inventory.validateUnconsumeRequest"})}),"\n",(0,r.jsx)(n.p,{children:"Validates an unconsume request based on the provided parameters."}),"\n",(0,r.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"system.mes.inventory.validateUnconsumeRequest(**unconsume_request)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"type"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{children:"The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"quantity"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Double"})}),(0,r.jsx)(n.td,{children:"The quantity to unconsume from the location."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"unitOfMeasureSymbol"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{children:"The symbol of the unit of measure for the quantity."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"lotIdOrName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{children:"The ID or name of the inventory lot that will be unconsuming the given lot."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"materialIdOrPath"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{children:"The ID or path of the material being unconsumed."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"sourceLocationIdOrPath"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{children:"The ID or path of the location from which inventory will be unconsumed."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"consumingLotIdOrName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{children:"The ID or name of the inventory lot from which the material is being unconsumed."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"destinationLocationIdOrPath"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{children:"The ID or path of the location the unconsumed inventory goes to."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"createIfNotExists"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Boolean"})}),(0,r.jsx)(n.td,{children:"Indicates whether the system should create the lot if it does not exist."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"operationId"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"String"})," (ULID)"]}),(0,r.jsx)(n.td,{children:"The ID of the operation unconsuming this inventory."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"productionOrderIdOrName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{children:"The ID or name of the production order associated with the unconsumption."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"materialReasonCodeId"})}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"String"})," (ULID)"]}),(0,r.jsx)(n.td,{children:"The ID of the material reason code to add additional context."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"startDate"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Instant"})}),(0,r.jsx)(n.td,{children:"The start date and time of the unconsumption."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"endDate"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Instant"})}),(0,r.jsx)(n.td,{children:"The end date and time of the unconsumption."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ongoing"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Boolean"})}),(0,r.jsx)(n.td,{children:"Indicates whether this request is ongoing."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"inventoryName"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{children:"The name of the inventory."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"notes"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{children:"Notes related to the unconsume request."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"spare1"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{children:"Additional field for user-defined context."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"spare2"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{children:"Additional field for user-defined context."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"spare3"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"String"})}),(0,r.jsx)(n.td,{children:"Additional field for user-defined context."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:"Returns a JSON object where keys are field names and values are lists of validation violation messages."}),"\n",(0,r.jsx)(n.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# Generate the object structure for a new unconsume request object with no initial arguments\nunconsume_request = system.mes.inventory.newUnconsumeRequest()\n\n# Set basic attributes for the new unconsume request\nunconsume_request['materialIdOrPath'] = 'Bottle/Milk'\nunconsume_request['destinationLocationIdOrPath'] = 'DairyCo'\nunconsume_request['quantity'] = 610\n# (You can continue setting other properties as needed here)\n\n# Validate unconsume request parameters\nvalidation_errors = system.mes.inventory.validateUnconsumeRequest(**unconsume_request)\n\nif len(validation_errors) > 0:\n    print('Validation errors found:', validation_errors)\nelse:\n    print('Unconsume request parameters are valid.')\n"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(96540);const r={},d=s.createContext(r);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);