"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[2781],{1761:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"appendix/script-api/inventory-script-api/validate-split-request","title":"validateSplitRequest","description":"Validates a split request based on the provided parameters.","source":"@site/docs/appendix/script-api/inventory-script-api/validate-split-request.md","sourceDirName":"appendix/script-api/inventory-script-api","slug":"/appendix/script-api/inventory-script-api/validate-split-request","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/validate-split-request","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/validate-split-request.md","tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"sidebar_position":17,"title":"validateSplitRequest","description":"Validates a split request based on the provided parameters."},"sidebar":"tutorialSidebar","previous":{"title":"split","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/split"},"next":{"title":"newMergeRequest","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/new-merge-request"}}');var r=i(4848),n=i(8453);const d={sidebar_position:17,title:"validateSplitRequest",description:"Validates a split request based on the provided parameters."},a="system.mes.inventory.validateSplitRequest",l={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Code Examples",id:"code-examples",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"systemmesinventoryvalidatesplitrequest",children:"system.mes.inventory.validateSplitRequest"})}),"\n",(0,r.jsx)(t.p,{children:"Validates a split request based on the provided parameters."}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"system.mes.inventory.validateSplitRequest(**split_request)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"type"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"quantity"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Double"})}),(0,r.jsx)(t.td,{children:"The quantity to split from the location."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"unitOfMeasureSymbol"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"The symbol of the unit of measure for the quantity."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"sourceLotId"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,r.jsx)(t.td,{children:"The ID of the inventory lot being split."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"sourceLocationIdOrPath"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"The ID or path of the location from which inventory will be split."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"destinationLotName"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"The name of the inventory lot the split inventory goes to."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"operationId"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,r.jsx)(t.td,{children:"The ID of the operation splitting this inventory."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"productionOrderIdOrName"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"The ID or name of the production order associated with the split."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"materialReasonCodeId"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,r.jsx)(t.td,{children:"The ID of the material reason code to add additional context."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"destinationInventoryName"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"The name of the inventory the split inventory goes to."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"notes"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"Notes related to the split request."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"spare1"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"Additional field for user-defined context."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"spare2"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"Additional field for user-defined context."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"spare3"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"Additional field for user-defined context."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"Returns a JSON object where keys are field names and values are lists of validation violation messages."}),"\n",(0,r.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"# Generate the object structure for a new split request object with no initial arguments\nsplit_request = system.mes.inventory.newSplitRequest()\n\n# Set basic attributes for the new split request\nsplit_request['sourceLocationIdOrPath'] = 'DairyCo'\nsplit_request['sourceLotId'] = '01JJCQEJYG-E31FHVTF-JB6WEJTC'\nsplit_request['destinationLotName'] = '5db685a7-2096-449a-b96c-effb3739e021'\nsplit_request['quantity'] = 610\n# (You can continue setting other properties as needed here)\n\n# Validate split request parameters\nvalidation_errors = system.mes.inventory.validateSplitRequest(**split_request)\n\nif len(validation_errors) > 0:\n    print('Validation errors found:', validation_errors)\nelse:\n    print('Split request parameters are valid.')\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>a});var s=i(6540);const r={},n=s.createContext(r);function d(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);