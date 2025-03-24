"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[9847],{75379:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});const d=JSON.parse('{"id":"appendix/data-model/material-model/material-class","title":"material_classes","description":"Documentation for the material_classes table, outlining its columns and structure.","source":"@site/docs/appendix/data-model/material-model/material-class.md","sourceDirName":"appendix/data-model/material-model","slug":"/appendix/data-model/material-model/material-class","permalink":"/tamaki-mes-docs/docs/appendix/data-model/material-model/material-class","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/material-model/material-class.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"material_classes","description":"Documentation for the material_classes table, outlining its columns and structure."},"sidebar":"tutorialSidebar","previous":{"title":"Material Model Overview","permalink":"/tamaki-mes-docs/docs/appendix/data-model/material-model/intro"},"next":{"title":"materials","permalink":"/tamaki-mes-docs/docs/appendix/data-model/material-model/material"}}');var s=i(74848),r=i(28453);const a={sidebar_position:1,title:"material_classes",description:"Documentation for the material_classes table, outlining its columns and structure."},n="Material Class",l={},c=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>parent_id</code>",id:"parent_id",level:3},{value:"<code>name</code>",id:"name",level:3},{value:"<code>description</code>",id:"description",level:3},{value:"<code>path</code>",id:"path",level:3}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"material-class",children:"Material Class"})}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"MaterialClass"}),' entity represents categories or classifications of materials, allowing hierarchical grouping and\norganization. This structure is useful for grouping similar materials under a common class, such as "Raw Material" or "\nPackaging," and it enables properties or attributes to be shared across materials within the same class.']}),"\n",(0,s.jsx)(t.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,s.jsxs)(t.p,{children:["The following table outlines the SQL columns for the ",(0,s.jsx)(t.code,{children:"material_classes"})," table, providing a brief description of each,\nalong with sample data where applicable."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Column"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Example"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"id"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,s.jsx)(t.td,{children:"Unique identifier for the entity."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"enabled"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Boolean"})}),(0,s.jsx)(t.td,{children:"If the entity is enabled or not."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"true"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"created_date"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"DateTime"})}),(0,s.jsx)(t.td,{children:"Date the entity was created."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"created_by"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"Person who created the entity."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"TamakiMES"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"modified_date"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"DateTime"})}),(0,s.jsx)(t.td,{children:"Date the entity was created."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"modified_by"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"Last person to modify the entity."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"TamakiMES"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"notes"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Blob"})}),(0,s.jsx)(t.td,{children:"Notes about the entity."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"This entity has these extra notes"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"spare1"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The first spare column that can be used for additional context on the entity."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"some extra context 1"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"spare2"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The second spare column that can be used for additional context on the entity."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"some extra context 2"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"spare3"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"The third spare column that can be used for additional context on the entity."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"some extra context 3"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"parent_id"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,s.jsxs)(t.td,{children:["References the parent material class, creating a hierarchical structure. See ",(0,s.jsx)(t.a,{href:"../material-model/material-class",children:"material_classes"}),"."]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"name"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"String"})}),(0,s.jsx)(t.td,{children:"Name of the material class. Required for each class and unique within the parent class."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Raw Material"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"description"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"String"})," (max 2048)"]}),(0,s.jsx)(t.td,{children:"Optional description providing more details about the material class."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Base materials for production"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"path"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"String"})," (unique)"]}),(0,s.jsx)(t.td,{children:"Unique path for the material class, automatically generated based on the hierarchy."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"/Materials/Raw Materials"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"field-details",children:"Field Details"}),"\n",(0,s.jsx)(t.h3,{id:"parent_id",children:(0,s.jsx)(t.code,{children:"parent_id"})}),"\n",(0,s.jsxs)(t.p,{children:["References the ",(0,s.jsx)(t.code,{children:"MaterialClass"})," entity that serves as this class's parent, allowing for hierarchical grouping of classes.\nSee ",(0,s.jsx)(t.a,{href:"../material-model/material-class",children:"material_classes"})," for details."]}),"\n",(0,s.jsx)(t.h3,{id:"name",children:(0,s.jsx)(t.code,{children:"name"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"name"}),' field provides a descriptive identifier for the material class, such as "Raw Material" or "Packaging." This\nname must be unique within its parent class.']}),"\n",(0,s.jsx)(t.h3,{id:"description",children:(0,s.jsx)(t.code,{children:"description"})}),"\n",(0,s.jsx)(t.p,{children:"An optional field that allows for a longer description of the material class, with a character limit of 2048. This can\ninclude additional context or details about the types of materials grouped under this class."}),"\n",(0,s.jsx)(t.h3,{id:"path",children:(0,s.jsx)(t.code,{children:"path"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"path"})," is a unique identifier that represents the hierarchical location of the material class within the overall\nclassification structure. This path is automatically computed based on the name and parent hierarchy, providing easy\nnavigation and traceability."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>n});var d=i(96540);const s={},r=d.createContext(s);function a(e){const t=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),d.createElement(r.Provider,{value:t},e.children)}}}]);