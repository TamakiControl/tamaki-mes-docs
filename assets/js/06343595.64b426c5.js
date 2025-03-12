"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[4750],{9613:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"appendix/script-api/location-script-api/delete-property","title":"deleteProperty","description":"Deletes a specified location property by its ID or name.","source":"@site/docs/appendix/script-api/location-script-api/delete-property.md","sourceDirName":"appendix/script-api/location-script-api","slug":"/appendix/script-api/location-script-api/delete-property","permalink":"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/delete-property","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/location-script-api/delete-property.md","tags":[],"version":"current","sidebarPosition":22,"frontMatter":{"sidebar_position":22,"title":"deleteProperty","description":"Deletes a specified location property by its ID or name."},"sidebar":"tutorialSidebar","previous":{"title":"validateProperty","permalink":"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/validate-property"},"next":{"title":"deletePropertyWithReferences","permalink":"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/delete-property-with-references"}}');var i=r(4848),n=r(8453);const d={sidebar_position:22,title:"deleteProperty",description:"Deletes a specified location property by its ID or name."},o="system.mes.location.deleteProperty",c={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Code Examples",id:"code-examples",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"systemmeslocationdeleteproperty",children:"system.mes.location.deleteProperty"})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["Deletes a ",(0,i.jsx)(t.a,{href:"../../data-model/location-model/location-property",children:"Location Properties"})," record by its ID or name.\nThis cannot delete a location property with references to it."]}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"system.mes.location.deleteProperty(idOrName)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"idOrName"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The ID or name of the location property to delete."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"If successful, no response is returned. If unsuccessful, an InUseException, IllegalArgumentException or ConstraintViolationException is thrown.\nIf the property that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"success"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Boolean"})}),(0,i.jsx)(t.td,{children:"Indicates if the delete was successful."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"message"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The reason why the deletion was successful or unsuccessful."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"data"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The data associated with the deletion."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"error"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The errors associated with the deletion."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"# Delete a location property by ID or path\nsystem.mes.location.deleteProperty('Temperature')\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>o});var s=r(6540);const i={},n=s.createContext(i);function d(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);