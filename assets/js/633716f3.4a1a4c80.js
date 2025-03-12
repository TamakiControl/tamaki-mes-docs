"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[5256],{9662:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>d,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"appendix/script-api/inventory-script-api/validate-ship-request","title":"validateShipRequest","description":"Validates a ship request based on the provided parameters.","source":"@site/docs/appendix/script-api/inventory-script-api/validate-ship-request.md","sourceDirName":"appendix/script-api/inventory-script-api","slug":"/appendix/script-api/inventory-script-api/validate-ship-request","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/validate-ship-request","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/validate-ship-request.md","tags":[],"version":"current","sidebarPosition":38,"frontMatter":{"sidebar_position":38,"title":"validateShipRequest","description":"Validates a ship request based on the provided parameters."},"sidebar":"tutorialSidebar","previous":{"title":"ship","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/ship"},"next":{"title":"executeInventoryActions","permalink":"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/execute-inventory-actions"}}');var r=i(4848),n=i(8453);const d={sidebar_position:38,title:"validateShipRequest",description:"Validates a ship request based on the provided parameters."},a="system.mes.inventory.validateShipRequest",c={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Code Examples",id:"code-examples",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"systemmesinventoryvalidateshiprequest",children:"system.mes.inventory.validateShipRequest"})}),"\n",(0,r.jsx)(t.p,{children:"Validates a ship request based on the provided parameters."}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"system.mes.inventory.validateShipRequest(**ship_request)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"type"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"quantity"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Double"})}),(0,r.jsx)(t.td,{children:"The quantity to ship from the location."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"unitOfMeasureSymbol"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"The symbol of the unit of measure for the quantity."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"lotIdOrName"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"The ID or name of the inventory lot that will be shipped."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"materialIdOrPath"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"The ID or path of the material being shipped."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"sourceLocationIdOrPath"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"The ID or path of the location from which inventory will be shipped."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"operationId"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,r.jsx)(t.td,{children:"The ID of the operation shipping this inventory."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"productionOrderIdOrName"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"The ID or name of the production order associated with the ship."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"materialReasonCodeId"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,r.jsx)(t.td,{children:"The ID of the material reason code to add additional context."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"startDate"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Instant"})}),(0,r.jsx)(t.td,{children:"The start date and time of the ship."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"endDate"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Instant"})}),(0,r.jsx)(t.td,{children:"The end date and time of the ship."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"ongoing"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Boolean"})}),(0,r.jsx)(t.td,{children:"Indicates whether this request is ongoing."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"inventoryName"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"The name of the inventory the shipped inventory goes to."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"notes"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"Notes related to the ship request."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"spare1"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"Additional field for user-defined context."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"spare2"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"Additional field for user-defined context."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"spare3"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"Additional field for user-defined context."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"Returns a JSON object where keys are field names and values are lists of validation violation messages."}),"\n",(0,r.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"# Generate the object structure for a new ship request object with no initial arguments\nship_request = system.mes.inventory.newShipRequest()\n\n# Set basic attributes for the new ship request\nship_request['materialIdOrPath'] = 'Bottle/Milk'\nship_request['sourceLocationIdOrPath'] = 'DairyCo'\nship_request['quantity'] = 610\n# (You can continue setting other properties as needed here)\n\n# Validate ship request parameters\nvalidation_errors = system.mes.inventory.validateShipRequest(**ship_request)\n\nif len(validation_errors) > 0:\n    print('Validation errors found:', validation_errors)\nelse:\n    print('Ship request parameters are valid.')\n"})})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>a});var s=i(6540);const r={},n=s.createContext(r);function d(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);