"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[4908],{7868:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=d(4848),i=d(8453);const s={sidebar_position:2,title:"utilities_document_data",description:"Documentation for the utilities_document_data table, outlining its columns and structure."},c="Document Data",o={id:"appendix/data-model/utility-models/document-model/document-data",title:"utilities_document_data",description:"Documentation for the utilities_document_data table, outlining its columns and structure.",source:"@site/docs/appendix/data-model/utility-models/document-model/document-data.md",sourceDirName:"appendix/data-model/utility-models/document-model",slug:"/appendix/data-model/utility-models/document-model/document-data",permalink:"/tamaki-mes-docs/docs/appendix/data-model/utility-models/document-model/document-data",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/utility-models/document-model/document-data.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"utilities_document_data",description:"Documentation for the utilities_document_data table, outlining its columns and structure."},sidebar:"tutorialSidebar",previous:{title:"Document Model Overview",permalink:"/tamaki-mes-docs/docs/appendix/data-model/utility-models/document-model/intro"},next:{title:"utilities_documents",permalink:"/tamaki-mes-docs/docs/appendix/data-model/utility-models/document-model/documents"}},r={},l=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>data</code>",id:"data",level:3},{value:"<code>status</code>",id:"status",level:3},{value:"<code>version</code>",id:"version",level:3},{value:"<code>document_id</code>",id:"document_id",level:3}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"document-data",children:"Document Data"})}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"DocumentData"})," entity represents the data of documents within the database. The table contains the actual data\nof the documents, the status and version of the file and the document_id that links it to a ",(0,n.jsx)(t.strong,{children:"Documents"})," entity\nthat contains the metadata of the document."]}),"\n",(0,n.jsx)(t.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,n.jsxs)(t.p,{children:["The following table outlines the SQL columns for the ",(0,n.jsx)(t.code,{children:"utilities_document_data"})," table, providing a brief description of each,\nalong with sample data where applicable."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Column"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Example"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"id"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,n.jsx)(t.td,{children:"Unique identifier for the entity."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"enabled"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Boolean"})}),(0,n.jsx)(t.td,{children:"If the entity is enabled or not."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"true"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"created_date"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"DateTime"})}),(0,n.jsx)(t.td,{children:"Date the entity was created."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"created_by"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"Person who created the entity."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"TamakiMES"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"modified_date"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"DateTime"})}),(0,n.jsx)(t.td,{children:"Date the entity was created."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"modified_by"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"Last person to modify the entity."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"TamakiMES"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"notes"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Blob"})}),(0,n.jsx)(t.td,{children:"Notes about the entity."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"This entity has these extra notes"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"spare1"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"The first spare column that can be used for additional context on the entity."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"some extra context 1"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"spare2"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"The second spare column that can be used for additional context on the entity."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"some extra context 2"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"spare3"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsx)(t.td,{children:"The third spare column that can be used for additional context on the entity."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"some extra context 3"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"data"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Blob"})}),(0,n.jsx)(t.td,{children:"Stores the data of the uploaded document (binary large object)."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Binary data"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"status"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"String"})}),(0,n.jsxs)(t.td,{children:["The status of the uploaded document, as defined by the ",(0,n.jsx)(t.strong,{children:"DocumentStatus"})," enum."]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ACTIVE"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"version"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Integer"})}),(0,n.jsx)(t.td,{children:"Version of the uploaded Document. Must be greater than 0."}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"1"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"document_id"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,n.jsxs)(t.td,{children:["References a document. See ",(0,n.jsx)(t.a,{href:"../../utility-models/document-model/documents",children:"utilities_documents"}),"."]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"01JAP8RJBN-9WTGQRQW-Y3XCRTXF"})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"field-details",children:"Field Details"}),"\n",(0,n.jsx)(t.h3,{id:"data",children:(0,n.jsx)(t.code,{children:"data"})}),"\n",(0,n.jsx)(t.p,{children:"Stores the data of the uploaded document as a binary large object."}),"\n",(0,n.jsx)(t.h3,{id:"status",children:(0,n.jsx)(t.code,{children:"status"})}),"\n",(0,n.jsxs)(t.p,{children:["Defines the status of the document, based on the ",(0,n.jsx)(t.strong,{children:"DocumentStatus"})," enum, which includes options\nsuch as ",(0,n.jsx)(t.code,{children:"ACTIVE"}),", ",(0,n.jsx)(t.code,{children:"RETIRED"}),", ",(0,n.jsx)(t.code,{children:"UNDER_REVIEW"}),", ",(0,n.jsx)(t.code,{children:"TRIAL"}),", ",(0,n.jsx)(t.code,{children:"DRAFT"})," and ",(0,n.jsx)(t.code,{children:"REJECTED"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"version",children:(0,n.jsx)(t.code,{children:"version"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"version"})," field provides a version number to the uploaded document to permit tracking changes\nand updates to files."]}),"\n",(0,n.jsx)(t.h3,{id:"document_id",children:(0,n.jsx)(t.code,{children:"document_id"})}),"\n",(0,n.jsxs)(t.p,{children:["References a ",(0,n.jsx)(t.code,{children:"Document"})," entity that contains the metadata for the uploaded document.\nSee ",(0,n.jsx)(t.a,{href:"../../utility-models/document-model/documents",children:"utilities_documents"})," for details."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,t,d)=>{d.d(t,{R:()=>c,x:()=>o});var n=d(6540);const i={},s=n.createContext(i);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);