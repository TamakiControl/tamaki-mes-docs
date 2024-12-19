"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[6857],{2567:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var d=i(4848),n=i(8453);const r={sidebar_position:6,title:"material_reason_codes",description:"Documentation for the material_reason_codes table, outlining its columns and structure."},o="Material Reason Codes",s={id:"appendix/data-model/material-model/material_reason_codes",title:"material_reason_codes",description:"Documentation for the material_reason_codes table, outlining its columns and structure.",source:"@site/docs/appendix/data-model/material-model/material_reason_codes.md",sourceDirName:"appendix/data-model/material-model",slug:"/appendix/data-model/material-model/material_reason_codes",permalink:"/https://docs.tamaki-control.com/docs/appendix/data-model/material-model/material_reason_codes",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/material-model/material_reason_codes.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"material_reason_codes",description:"Documentation for the material_reason_codes table, outlining its columns and structure."},sidebar:"tutorialSidebar",previous:{title:"material_property_values",permalink:"/https://docs.tamaki-control.com/docs/appendix/data-model/material-model/material_property_values"},next:{title:"material_lot_records",permalink:"/https://docs.tamaki-control.com/docs/appendix/data-model/material-model/material_lot_records"}},a={},c=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>lotRecordType</code>",id:"lotrecordtype",level:3},{value:"<code>reasonCode</code>",id:"reasoncode",level:3},{value:"<code>description</code>",id:"description",level:3},{value:"<code>requireComments</code>",id:"requirecomments",level:3}];function l(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.header,{children:(0,d.jsx)(t.h1,{id:"material-reason-codes",children:"Material Reason Codes"})}),"\n",(0,d.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,d.jsxs)(t.p,{children:["The ",(0,d.jsx)(t.code,{children:"MaterialReasonCode"})," entity represents standardized codes used for categorizing specific reasons associated with\nmaterial handling activities, such as scrapping, merging, or consumption. These codes aid in providing consistent\ndocumentation and tracking for various material-related processes, enabling better reporting and analysis."]}),"\n",(0,d.jsx)(t.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,d.jsxs)(t.p,{children:["The following table outlines the SQL columns for the ",(0,d.jsx)(t.code,{children:"material_reason_codes"})," table, providing a brief description of\neach, along with sample data where applicable."]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Column"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Example"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"id"})}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,d.jsx)(t.td,{children:"Unique identifier for the reason code."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"lotRecordType"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Enum"})}),(0,d.jsxs)(t.td,{children:["Specifies the type of lot record this reason code applies to, such as ",(0,d.jsx)(t.code,{children:"CONSUMPTION"})," or ",(0,d.jsx)(t.code,{children:"SCRAP"}),"."]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"SCRAP"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"reasonCode"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsx)(t.td,{children:"Unique code identifying the reason for material handling."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"SCRP001"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"description"})}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"String"})," (max 255)"]}),(0,d.jsx)(t.td,{children:"Detailed description of the reason for the material activity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Material scrapped due to contamination"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"requireComments"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Boolean"})}),(0,d.jsx)(t.td,{children:"Indicates whether additional comments are required when using this reason code."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"true"})})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"field-details",children:"Field Details"}),"\n",(0,d.jsx)(t.h3,{id:"lotrecordtype",children:(0,d.jsx)(t.code,{children:"lotRecordType"})}),"\n",(0,d.jsxs)(t.p,{children:["Represents the specific type of lot record that this reason code pertains to, allowing categorization of codes based on\nmaterial handling activities, such as ",(0,d.jsx)(t.code,{children:"CONSUMPTION"}),", ",(0,d.jsx)(t.code,{children:"SCRAP"}),", or ",(0,d.jsx)(t.code,{children:"MERGE"}),". This helps in identifying the context for each\nreason code."]}),"\n",(0,d.jsx)(t.h3,{id:"reasoncode",children:(0,d.jsx)(t.code,{children:"reasonCode"})}),"\n",(0,d.jsx)(t.p,{children:"A unique code that identifies the reason associated with the material handling process. This code enables standardized\nreference for common reasons across operations."}),"\n",(0,d.jsx)(t.h3,{id:"description",children:(0,d.jsx)(t.code,{children:"description"})}),"\n",(0,d.jsx)(t.p,{children:"An optional field that provides a detailed description of the reason code\u2019s purpose or application, allowing users to\nadd more context to the selected reason."}),"\n",(0,d.jsx)(t.h3,{id:"requirecomments",children:(0,d.jsx)(t.code,{children:"requireComments"})}),"\n",(0,d.jsx)(t.p,{children:"Specifies if additional comments are required when selecting this reason code, which helps in capturing additional\ncontext or justification during the material handling process."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>s});var d=i(6540);const n={},r=d.createContext(n);function o(e){const t=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),d.createElement(r.Provider,{value:t},e.children)}}}]);