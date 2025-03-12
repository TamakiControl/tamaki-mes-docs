"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[5753],{137:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"appendix/data-model/personnel-model/personnel-department","title":"personnel_departments","description":"Documentation for the personnel_departments table, outlining its columns and structure.","source":"@site/docs/appendix/data-model/personnel-model/personnel-department.md","sourceDirName":"appendix/data-model/personnel-model","slug":"/appendix/data-model/personnel-model/personnel-department","permalink":"/tamaki-mes-docs/docs/appendix/data-model/personnel-model/personnel-department","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/personnel-model/personnel-department.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"personnel_departments","description":"Documentation for the personnel_departments table, outlining its columns and structure."},"sidebar":"tutorialSidebar","previous":{"title":"personnel","permalink":"/tamaki-mes-docs/docs/appendix/data-model/personnel-model/personnel"},"next":{"title":"personnel_shifts","permalink":"/tamaki-mes-docs/docs/appendix/data-model/personnel-model/personnel-shift"}}');var i=t(4848),d=t(8453);const s={sidebar_position:4,title:"personnel_departments",description:"Documentation for the personnel_departments table, outlining its columns and structure."},a="Personnel Department",o={},l=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>parent_id</code>",id:"parent_id",level:3},{value:"<code>name</code>",id:"name",level:3},{value:"<code>description</code>",id:"description",level:3},{value:"<code>path</code>",id:"path",level:3},{value:"Hierarchical Structure",id:"hierarchical-structure",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"personnel-department",children:"Personnel Department"})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"PersonnelDepartment"})," entity represents departments within an organization, providing a hierarchical structure for\norganizing personnel. Each department can have a parent department, creating a flexible structure to accommodate\ndifferent organizational levels and reporting structures."]}),"\n",(0,i.jsx)(n.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,i.jsxs)(n.p,{children:["The following table outlines the SQL columns for the ",(0,i.jsx)(n.code,{children:"personnel_departments"})," table, providing a brief description of\neach, along with sample data where applicable."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Column"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Example"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"id"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(n.td,{children:"Unique identifier for the department."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"parent_id"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(n.td,{children:"References the parent department, establishing a hierarchy."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"name"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"String"})}),(0,i.jsx)(n.td,{children:"Name of the department. Required and unique within its parent department."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Engineering"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"description"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"String"})," (max 2048)"]}),(0,i.jsx)(n.td,{children:"Detailed description of the department's role and responsibilities."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Handles engineering tasks"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"path"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:"String"})," (unique)"]}),(0,i.jsx)(n.td,{children:"Unique path for the department, generated based on the hierarchy."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/Corporate/Engineering"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"field-details",children:"Field Details"}),"\n",(0,i.jsx)(n.h3,{id:"parent_id",children:(0,i.jsx)(n.code,{children:"parent_id"})}),"\n",(0,i.jsxs)(n.p,{children:["References the parent ",(0,i.jsx)(n.code,{children:"PersonnelDepartment"}),", allowing departments to be organized in a hierarchical structure.\nThis structure enables modeling departments from high-level divisions down to specialized units."]}),"\n",(0,i.jsx)(n.h3,{id:"name",children:(0,i.jsx)(n.code,{children:"name"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"name"}),' field provides a descriptive identifier for the department, such as "Engineering" or "Finance." This field\nmust be unique within the scope of its parent department.']}),"\n",(0,i.jsx)(n.h3,{id:"description",children:(0,i.jsx)(n.code,{children:"description"})}),"\n",(0,i.jsx)(n.p,{children:"An optional field that provides additional context for the department's function or scope. This can support clarity\naround the department's responsibilities within the organization."}),"\n",(0,i.jsx)(n.h3,{id:"path",children:(0,i.jsx)(n.code,{children:"path"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"path"})," is a unique identifier for the department, generated automatically based on the hierarchical structure. It\nreflects the department's place within the organization, enabling easier navigation and reporting."]}),"\n",(0,i.jsx)(n.h2,{id:"hierarchical-structure",children:"Hierarchical Structure"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"PersonnelDepartment"})," supports a hierarchical structure, allowing for nested departments. The ",(0,i.jsx)(n.code,{children:"computePath"})," method\ngenerates a unique path for each department based on its name and hierarchy, providing an easy-to-read representation of\nthe department\u2019s location within the organization."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, a path like ",(0,i.jsx)(n.code,{children:"/Corporate/Engineering"}),' indicates that "Engineering" is a sub-department under "Corporate."']})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(6540);const i={},d=r.createContext(i);function s(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);