"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[9130],{3330:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>n,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"appendix/script-api/production-order-script-api/delete-bill-of-materials","title":"deleteBillOfMaterials","description":"Deletes the bill of materials with the given ID.","source":"@site/docs/appendix/script-api/production-order-script-api/delete-bill-of-materials.md","sourceDirName":"appendix/script-api/production-order-script-api","slug":"/appendix/script-api/production-order-script-api/delete-bill-of-materials","permalink":"/tamaki-mes-docs/docs/appendix/script-api/production-order-script-api/delete-bill-of-materials","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/production-order-script-api/delete-bill-of-materials.md","tags":[],"version":"current","sidebarPosition":39,"frontMatter":{"sidebar_position":39,"title":"deleteBillOfMaterials","description":"Deletes the bill of materials with the given ID."},"sidebar":"tutorialSidebar","previous":{"title":"validateBillOfMaterials","permalink":"/tamaki-mes-docs/docs/appendix/script-api/production-order-script-api/validate-bill-of-materials"},"next":{"title":"deleteBillOfMaterialsWithReferences","permalink":"/tamaki-mes-docs/docs/appendix/script-api/production-order-script-api/delete-bill-of-materials-with-references"}}');var s=i(74848),d=i(28453);const l={sidebar_position:39,title:"deleteBillOfMaterials",description:"Deletes the bill of materials with the given ID."},n="system.mes.productionOrder.deleteBillOfMaterials",a={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Code Examples",id:"code-examples",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"systemmesproductionorderdeletebillofmaterials",children:"system.mes.productionOrder.deleteBillOfMaterials"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["Deletes a ",(0,s.jsx)(t.a,{href:"../../data-model/production-order-model/production-order-bill-of-material",children:"Production Order Bill of Materials"})," record by its ID.\nThis cannot delete a bill of materials with references to it."]}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"system.mes.productionOrder.deleteBillOfMaterials(id)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"id"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,s.jsx)(t.td,{children:"The ID of the bill of materials to delete."})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"If successful, no response is returned. If unsuccessful, an InUseException, IllegalArgumentException or ConstraintViolationException is thrown.\nIf the bill of materials that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"success"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Boolean"})}),(0,s.jsx)(t.td,{children:"Indicates if the delete was successful."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"message"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The reason why the deletion was successful or unsuccessful."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"data"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The data associated with the deletion."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"error"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The errors associated with the deletion."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# Delete a bill of materials by ID\nsystem.mes.productionOrder.deleteBillOfMaterials('01JQ31CZMB-E7QA782B-5B521H4M')\n"})})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>n});var r=i(96540);const s={},d=r.createContext(s);function l(e){const t=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(d.Provider,{value:t},e.children)}}}]);