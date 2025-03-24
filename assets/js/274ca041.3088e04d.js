"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[8487],{26442:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"appendix/data-model/personnel-model/personnel","title":"personnel","description":"Documentation for the personnel table, outlining its columns and structure.","source":"@site/docs/appendix/data-model/personnel-model/personnel.md","sourceDirName":"appendix/data-model/personnel-model","slug":"/appendix/data-model/personnel-model/personnel","permalink":"/tamaki-mes-docs/docs/appendix/data-model/personnel-model/personnel","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/personnel-model/personnel.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"personnel","description":"Documentation for the personnel table, outlining its columns and structure."},"sidebar":"tutorialSidebar","previous":{"title":"Personnel Model Overview","permalink":"/tamaki-mes-docs/docs/appendix/data-model/personnel-model/intro"},"next":{"title":"personnel_departments","permalink":"/tamaki-mes-docs/docs/appendix/data-model/personnel-model/personnel-department"}}');var t=s(74848),r=s(28453);const d={sidebar_position:3,title:"personnel",description:"Documentation for the personnel table, outlining its columns and structure."},l="Personnel",o={},c=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>personnel_department_id</code>",id:"personnel_department_id",level:3},{value:"<code>personnel_shift_id</code>",id:"personnel_shift_id",level:3},{value:"<code>personStatus</code>",id:"personstatus",level:3},{value:"<code>initials</code>",id:"initials",level:3},{value:"<code>username</code>",id:"username",level:3},{value:"Certifications",id:"certifications",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"personnel",children:"Personnel"})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Person"})," entity represents individuals within the organization. Each person is assigned to a department, may be\nlinked to a specific shift, and can hold multiple certifications. This structure allows for detailed workforce\nmanagement, covering assignments, schedules, and skill tracking within the organization."]}),"\n",(0,t.jsx)(n.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,t.jsxs)(n.p,{children:["The following table outlines the SQL columns for the ",(0,t.jsx)(n.code,{children:"personnel"})," table, providing a brief description of each, along\nwith sample data where applicable."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Column"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"id"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"String"})," (ULID)"]}),(0,t.jsx)(n.td,{children:"Unique identifier for the person."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"personnel_department_id"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"String"})," (ULID)"]}),(0,t.jsxs)(n.td,{children:["References the department to which the person is assigned. See ",(0,t.jsx)(n.a,{href:"personnel-department",children:"personnel_departments"}),"."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"personnel_shift_id"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"String"})," (ULID)"]}),(0,t.jsxs)(n.td,{children:["Optional reference to the shift assigned to the person. See ",(0,t.jsx)(n.a,{href:"personnel-shift",children:"personnel_shifts"}),"."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"01JAP8RJBN-4VYZUKE1-LY2QHV8X"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"personStatus"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Enum"})}),(0,t.jsxs)(n.td,{children:["Status of the person, such as ",(0,t.jsx)(n.code,{children:"ACTIVE"})," or ",(0,t.jsx)(n.code,{children:"INACTIVE"}),"."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ACTIVE"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"firstName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsx)(n.td,{children:"First name of the individual."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"John"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"lastName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsx)(n.td,{children:"Last name of the individual."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Doe"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"initials"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsx)(n.td,{children:"Generated initials for the person based on their first and last names."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"JD"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"username"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsx)(n.td,{children:"Unique username of the person, typically tied to the defined user source."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"jdoe"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"field-details",children:"Field Details"}),"\n",(0,t.jsx)(n.h3,{id:"personnel_department_id",children:(0,t.jsx)(n.code,{children:"personnel_department_id"})}),"\n",(0,t.jsxs)(n.p,{children:["References the ",(0,t.jsx)(n.code,{children:"PersonnelDepartment"})," entity that the person is assigned to. This allows organizing personnel based on\ndepartmental structures.\nSee ",(0,t.jsx)(n.a,{href:"personnel-department",children:"personnel_departments"})," for details on departments."]}),"\n",(0,t.jsx)(n.h3,{id:"personnel_shift_id",children:(0,t.jsx)(n.code,{children:"personnel_shift_id"})}),"\n",(0,t.jsxs)(n.p,{children:["References the shift to which the person is assigned. Shifts are optional and may be assigned based on operational\nneeds.\nSee ",(0,t.jsx)(n.a,{href:"personnel-shift",children:"personnel_shifts"})," for more information on shift assignments."]}),"\n",(0,t.jsx)(n.h3,{id:"personstatus",children:(0,t.jsx)(n.code,{children:"personStatus"})}),"\n",(0,t.jsxs)(n.p,{children:["Indicates the current status of the person. This field uses the ",(0,t.jsx)(n.strong,{children:"PersonStatus"})," enum with the following values:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"ACTIVE"}),": The person is actively working."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"INACTIVE"}),": The person is not currently active."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"initials",children:(0,t.jsx)(n.code,{children:"initials"})}),"\n",(0,t.jsx)(n.p,{children:"Automatically generated initials for the person, derived from the first and last names. This can be used for easy\nidentification."}),"\n",(0,t.jsx)(n.h3,{id:"username",children:(0,t.jsx)(n.code,{children:"username"})}),"\n",(0,t.jsx)(n.p,{children:"Unique username associated with the person, ensuring identification within the system."}),"\n",(0,t.jsx)(n.h2,{id:"certifications",children:"Certifications"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Person"})," entity can be associated with multiple certifications through a many-to-many relationship. This\nrelationship supports skill tracking and ensures that personnel meet the necessary qualifications for their roles."]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"personnel-certification",children:"personnel_certifications"})," for details on certifications."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var i=s(96540);const t={},r=i.createContext(t);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);