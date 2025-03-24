"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[5962],{5950:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"appendix/data-model/personnel-model/personnel-certification","title":"personnel_certifications","description":"Documentation for the personnel_certifications table, outlining its columns and structure.","source":"@site/docs/appendix/data-model/personnel-model/personnel-certification.md","sourceDirName":"appendix/data-model/personnel-model","slug":"/appendix/data-model/personnel-model/personnel-certification","permalink":"/tamaki-mes-docs/docs/appendix/data-model/personnel-model/personnel-certification","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/personnel-model/personnel-certification.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"personnel_certifications","description":"Documentation for the personnel_certifications table, outlining its columns and structure."},"sidebar":"tutorialSidebar","previous":{"title":"personnel_shifts","permalink":"/tamaki-mes-docs/docs/appendix/data-model/personnel-model/personnel-shift"},"next":{"title":"personnel_person_certifications","permalink":"/tamaki-mes-docs/docs/appendix/data-model/personnel-model/personnel-person-certification"}}');var r=n(74848),o=n(28453);const s={sidebar_position:5,title:"personnel_certifications",description:"Documentation for the personnel_certifications table, outlining its columns and structure."},c="Personnel Certification",d={},l=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>description</code>",id:"description",level:3}];function a(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"personnel-certification",children:"Personnel Certification"})}),"\n",(0,r.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"PersonnelCertification"})," entity represents specific certifications held by personnel within the organization. Each\ncertification includes a name and a description, which provides context on the purpose or requirements of the\ncertification."]}),"\n",(0,r.jsx)(i.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,r.jsxs)(i.p,{children:["The following table outlines the SQL columns for the ",(0,r.jsx)(i.code,{children:"personnel_certifications"})," table, providing a brief description of\neach, along with sample data where applicable."]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Column"}),(0,r.jsx)(i.th,{children:"Type"}),(0,r.jsx)(i.th,{children:"Description"}),(0,r.jsx)(i.th,{children:"Example"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"id"})}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"String"})," (ULID)"]}),(0,r.jsx)(i.td,{children:"Unique identifier for the certification."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"name"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"String"})}),(0,r.jsx)(i.td,{children:"Name of the certification. Must be unique."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Forklift Operator"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"description"})}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"String"})," (max 2048)"]}),(0,r.jsx)(i.td,{children:"Detailed description of the certification requirements or scope."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Certified to operate forklifts in the warehouse environment."})})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"field-details",children:"Field Details"}),"\n",(0,r.jsx)(i.h3,{id:"name",children:(0,r.jsx)(i.code,{children:"name"})}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"name"}),' field provides a concise identifier for the certification, such as "Forklift Operator" or "Safety Training."\nThis field must be unique within the table, ensuring each certification is distinct.']}),"\n",(0,r.jsx)(i.h3,{id:"description",children:(0,r.jsx)(i.code,{children:"description"})}),"\n",(0,r.jsx)(i.p,{children:"An optional field that offers additional details about the certification, such as requirements, training content, or\ncontext. This description can be up to 2048 characters long, providing ample space for details that may help clarify the\ncertification\u2019s relevance or scope within the organization."})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>s,x:()=>c});var t=n(96540);const r={},o=t.createContext(r);function s(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);