"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[2733],{89157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"appendix/script-api/material-script-api/delete-property-values-with-references-for","title":"deletePropertyValuesWithReferencesFor","description":"Deletes all material property values with the given material path and property names and any immediate references to any property value if possible.","source":"@site/docs/appendix/script-api/material-script-api/delete-property-values-with-references-for.md","sourceDirName":"appendix/script-api/material-script-api","slug":"/appendix/script-api/material-script-api/delete-property-values-with-references-for","permalink":"/tamaki-mes-docs/docs/appendix/script-api/material-script-api/delete-property-values-with-references-for","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/material-script-api/delete-property-values-with-references-for.md","tags":[],"version":"current","sidebarPosition":53,"frontMatter":{"sidebar_position":53,"title":"deletePropertyValuesWithReferencesFor","description":"Deletes all material property values with the given material path and property names and any immediate references to any property value if possible."},"sidebar":"tutorialSidebar","previous":{"title":"deletePropertyValuesFor","permalink":"/tamaki-mes-docs/docs/appendix/script-api/material-script-api/delete-property-values-for"},"next":{"title":"newMaterialReasonCode","permalink":"/tamaki-mes-docs/docs/appendix/script-api/material-script-api/new-material-reason-code"}}');var s=r(74848),i=r(28453);const n={sidebar_position:53,title:"deletePropertyValuesWithReferencesFor",description:"Deletes all material property values with the given material path and property names and any immediate references to any property value if possible."},l="system.mes.material.deletePropertyValuesWithReferencesFor",p={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Code Examples",id:"code-examples",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"systemmesmaterialdeletepropertyvalueswithreferencesfor",children:"system.mes.material.deletePropertyValuesWithReferencesFor"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["Deletes all ",(0,s.jsx)(t.a,{href:"../../data-model/material-model/material-property-value",children:"Material Property Values"})," records given the material path and property names.\nAlso deletes immediate references to any material property value if possible."]}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"system.mes.material.deletePropertyValuesWithReferencesFor(materialPath, propertyNames)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"materialPath"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The path of the material."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"propertyNames"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"List<String>"})}),(0,s.jsx)(t.td,{children:"The names of the properties."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown."}),"\n",(0,s.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"# Delete all material property values by the material path and property names\nsystem.mes.material.deletePropertyValuesWithReferencesFor('IRB/5391537510212', ['Density', 'Melting Point'])\n"})})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>l});var a=r(96540);const s={},i=a.createContext(s);function n(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);