"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[8582],{3498:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=d(4848),n=d(8453);const s={sidebar_position:1,title:"equipment_classes",description:"Documentation for the equipment_classes table, outlining its columns and structure."},r="Equipment Class",c={id:"appendix/data-model/equipment-model/equipment-class",title:"equipment_classes",description:"Documentation for the equipment_classes table, outlining its columns and structure.",source:"@site/docs/appendix/data-model/equipment-model/equipment-class.md",sourceDirName:"appendix/data-model/equipment-model",slug:"/appendix/data-model/equipment-model/equipment-class",permalink:"/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment-class",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment-class.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"equipment_classes",description:"Documentation for the equipment_classes table, outlining its columns and structure."},sidebar:"tutorialSidebar",previous:{title:"Equipment Schema Overview",permalink:"/tamaki-mes-docs/docs/appendix/data-model/equipment-model/intro"},next:{title:"equipment",permalink:"/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment"}},l={},a=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>parent_id</code>",id:"parent_id",level:3},{value:"<code>name</code>",id:"name",level:3},{value:"<code>description</code>",id:"description",level:3},{value:"<code>path</code>",id:"path",level:3}];function o(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"equipment-class",children:"Equipment Class"})}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"EquipmentClass"}),' entity represents a category of equipment, such as a "Forklift" or "Saw." This entity groups\nequipment items for scheduling and reporting purposes. For example, a packaging line may require a forklift, and a\nfactory might own multiple forklifts.']}),"\n",(0,i.jsx)(t.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,i.jsxs)(t.p,{children:["The following table outlines the SQL columns for the ",(0,i.jsx)(t.code,{children:"equipment_classes"})," table, providing a brief description of each,\nalong with sample data where applicable."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Column"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Example"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"id"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(t.td,{children:"Unique identifier for the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"enabled"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Boolean"})}),(0,i.jsx)(t.td,{children:"If the entity is enabled or not."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"true"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"created_date"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"DateTime"})}),(0,i.jsx)(t.td,{children:"Date the entity was created."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"created_by"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Person who created the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"TamakiMES"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"modified_date"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"DateTime"})}),(0,i.jsx)(t.td,{children:"Date the entity was created."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"modified_by"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Last person to modify the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"TamakiMES"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"notes"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Blob"})}),(0,i.jsx)(t.td,{children:"Notes about the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"This entity has these extra notes"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"spare1"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The first spare column that can be used for additional context on the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"some extra context 1"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"spare2"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The second spare column that can be used for additional context on the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"some extra context 2"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"spare3"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The third spare column that can be used for additional context on the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"some extra context 3"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"parent_id"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(t.td,{children:"References the parent equipment class, allowing hierarchy."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"name"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Name of the equipment class, required and unique within the parent."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Forklift"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"description"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (max 2048)"]}),(0,i.jsx)(t.td,{children:"Detailed description of the equipment class."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"A heavy-duty lifting vehicle"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"path"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (unique)"]}),(0,i.jsx)(t.td,{children:"Unique path generated based on the name and parent hierarchy."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"/Warehouse/Forklift"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"field-details",children:"Field Details"}),"\n",(0,i.jsx)(t.h3,{id:"parent_id",children:(0,i.jsx)(t.code,{children:"parent_id"})}),"\n",(0,i.jsxs)(t.p,{children:["References the parent ",(0,i.jsx)(t.code,{children:"EquipmentClass"})," by ID, allowing a hierarchical structure among equipment classes. This hierarchy\nenables grouping related classes under broader categories."]}),"\n",(0,i.jsx)(t.h3,{id:"name",children:(0,i.jsx)(t.code,{children:"name"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"name"})," field is mandatory and provides the primary identifier for the equipment class. Each name must be unique\nwithin the context of its parent class to ensure clear identification."]}),"\n",(0,i.jsx)(t.h3,{id:"description",children:(0,i.jsx)(t.code,{children:"description"})}),"\n",(0,i.jsx)(t.p,{children:"An optional field that allows a longer description of the equipment class, with a character limit of 2048. This field\ncan be used to provide additional context about the type of equipment represented by the class."}),"\n",(0,i.jsx)(t.h3,{id:"path",children:(0,i.jsx)(t.code,{children:"path"})}),"\n",(0,i.jsxs)(t.p,{children:["The unique ",(0,i.jsx)(t.code,{children:"path"})," of the equipment class is automatically generated from the name and parent hierarchy. This field is\nupdated whenever the entity is created or modified, ensuring a consistent representation of the hierarchy across all\nrecords."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,t,d)=>{d.d(t,{R:()=>r,x:()=>c});var i=d(6540);const n={},s=i.createContext(n);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);