"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[2706],{4080:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>c,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"appendix/data-model/equipment-model/equipment","title":"equipment","description":"Documentation for the equipment table, outlining its columns and structure.","source":"@site/docs/appendix/data-model/equipment-model/equipment.md","sourceDirName":"appendix/data-model/equipment-model","slug":"/appendix/data-model/equipment-model/equipment","permalink":"/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"equipment","description":"Documentation for the equipment table, outlining its columns and structure."},"sidebar":"tutorialSidebar","previous":{"title":"equipment_classes","permalink":"/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment-class"},"next":{"title":"equipment_properties","permalink":"/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment-property"}}');var d=t(74848),s=t(28453);const c={sidebar_position:2,title:"equipment",description:"Documentation for the equipment table, outlining its columns and structure."},r="Equipment",l={},o=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>equipment_class_id</code>",id:"equipment_class_id",level:3},{value:"<code>location_id</code>",id:"location_id",level:3},{value:"<code>name</code>",id:"name",level:3},{value:"<code>description</code>",id:"description",level:3},{value:"<code>status</code>",id:"status",level:3}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.header,{children:(0,d.jsx)(i.h1,{id:"equipment",children:"Equipment"})}),"\n",(0,d.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,d.jsxs)(i.p,{children:["The ",(0,d.jsx)(i.code,{children:"Equipment"})," entity represents an actual piece of equipment within a factory or manufacturing environment. While\n",(0,d.jsx)(i.code,{children:"EquipmentClass"}),' defines categories like "Forklift" or "Saw," the ',(0,d.jsx)(i.code,{children:"Equipment"})," entity models individual instances of\nthose categories, such as a specific forklift used on a production line. This allows tracking of each piece of equipment\nindependently for operational, maintenance, and reporting purposes."]}),"\n",(0,d.jsx)(i.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,d.jsxs)(i.p,{children:["The following table outlines the SQL columns for the ",(0,d.jsx)(i.code,{children:"equipment"})," table, providing a brief description of each, along\nwith sample data where applicable."]}),"\n",(0,d.jsxs)(i.table,{children:[(0,d.jsx)(i.thead,{children:(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.th,{children:"Column"}),(0,d.jsx)(i.th,{children:"Type"}),(0,d.jsx)(i.th,{children:"Description"}),(0,d.jsx)(i.th,{children:"Example"})]})}),(0,d.jsxs)(i.tbody,{children:[(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"id"})}),(0,d.jsxs)(i.td,{children:[(0,d.jsx)(i.code,{children:"String"})," (ULID)"]}),(0,d.jsx)(i.td,{children:"Unique identifier for the entity."}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"enabled"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"Boolean"})}),(0,d.jsx)(i.td,{children:"If the entity is enabled or not."}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"true"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"created_date"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"DateTime"})}),(0,d.jsx)(i.td,{children:"Date the entity was created."}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"created_by"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"String"})}),(0,d.jsx)(i.td,{children:"Person who created the entity."}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"TamakiMES"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"modified_date"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"DateTime"})}),(0,d.jsx)(i.td,{children:"Date the entity was created."}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"modified_by"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"String"})}),(0,d.jsx)(i.td,{children:"Last person to modify the entity."}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"TamakiMES"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"notes"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"Blob"})}),(0,d.jsx)(i.td,{children:"Notes about the entity."}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"This entity has these extra notes"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"spare1"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"String"})}),(0,d.jsx)(i.td,{children:"The first spare column that can be used for additional context on the entity."}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"some extra context 1"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"spare2"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"String"})}),(0,d.jsx)(i.td,{children:"The second spare column that can be used for additional context on the entity."}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"some extra context 2"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"spare3"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"String"})}),(0,d.jsx)(i.td,{children:"The third spare column that can be used for additional context on the entity."}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"some extra context 3"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"equipment_class_id"})}),(0,d.jsxs)(i.td,{children:[(0,d.jsx)(i.code,{children:"String"})," (ULID)"]}),(0,d.jsxs)(i.td,{children:["References the equipment class to which this item belongs. See ",(0,d.jsx)(i.a,{href:"../equipment-model/equipment-class",children:"equipment_classes"}),"."]}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"location_id"})}),(0,d.jsxs)(i.td,{children:[(0,d.jsx)(i.code,{children:"String"})," (ULID)"]}),(0,d.jsxs)(i.td,{children:["Indicates where the equipment is stored or currently in use. See ",(0,d.jsx)(i.a,{href:"../location-model/location",children:"locations"}),"."]}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"01JAP8RJBN-4VYZUKE1-LY2QHV8X"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"name"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"String"})}),(0,d.jsx)(i.td,{children:"The name of the specific equipment item, unique within the equipment class."}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"Forklift #12"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"description"})}),(0,d.jsxs)(i.td,{children:[(0,d.jsx)(i.code,{children:"String"})," (max 2048)"]}),(0,d.jsx)(i.td,{children:"Detailed description of the equipment item."}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"Electric forklift used for material handling"})})]}),(0,d.jsxs)(i.tr,{children:[(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"status"})}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"String"})}),(0,d.jsxs)(i.td,{children:["Current operational status of the equipment. Possible values: ",(0,d.jsx)(i.code,{children:"OPERATIONAL"}),", ",(0,d.jsx)(i.code,{children:"DOWN"}),", ",(0,d.jsx)(i.code,{children:"UNDER_MAINTENANCE"}),", ",(0,d.jsx)(i.code,{children:"UNKNOWN"}),", as defined by the ",(0,d.jsx)(i.strong,{children:"EquipmentStatus"})," enum."]}),(0,d.jsx)(i.td,{children:(0,d.jsx)(i.code,{children:"OPERATIONAL"})})]})]})]}),"\n",(0,d.jsx)(i.h2,{id:"field-details",children:"Field Details"}),"\n",(0,d.jsx)(i.h3,{id:"equipment_class_id",children:(0,d.jsx)(i.code,{children:"equipment_class_id"})}),"\n",(0,d.jsxs)(i.p,{children:["References the ",(0,d.jsx)(i.code,{children:"EquipmentClass"})," that this item belongs to, allowing the equipment to inherit properties and attributes\ndefined by the class.\nSee ",(0,d.jsx)(i.a,{href:"../equipment-model/equipment-class",children:"equipment_classes"})," for details."]}),"\n",(0,d.jsx)(i.h3,{id:"location_id",children:(0,d.jsx)(i.code,{children:"location_id"})}),"\n",(0,d.jsxs)(i.p,{children:["Links to the ",(0,d.jsx)(i.code,{children:"Location"})," entity, specifying the physical location of the equipment. This enables tracking of where the\nequipment is deployed or stored within the facility.\nSee ",(0,d.jsx)(i.a,{href:"../location-model/location",children:"locations"})," for details."]}),"\n",(0,d.jsx)(i.h3,{id:"name",children:(0,d.jsx)(i.code,{children:"name"})}),"\n",(0,d.jsxs)(i.p,{children:["The ",(0,d.jsx)(i.code,{children:"name"}),' field provides a unique identifier for the equipment within the context of its class, such as "Forklift #12."\nThis allows easy differentiation of multiple equipment items in the same category.']}),"\n",(0,d.jsx)(i.h3,{id:"description",children:(0,d.jsx)(i.code,{children:"description"})}),"\n",(0,d.jsx)(i.p,{children:"An optional field for a more detailed description of the equipment, with a character limit of 2048. This can provide\nadditional context about the equipment\u2019s purpose or specifications."}),"\n",(0,d.jsx)(i.h3,{id:"status",children:(0,d.jsx)(i.code,{children:"status"})}),"\n",(0,d.jsxs)(i.p,{children:["Represents the current operational state of the equipment, based on the ",(0,d.jsx)(i.strong,{children:"EquipmentStatus"})," enum, with possible values:"]}),"\n",(0,d.jsxs)(i.ul,{children:["\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.strong,{children:"OPERATIONAL"}),": Equipment is fully functional and in use."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.strong,{children:"DOWN"}),": Equipment is not operational."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.strong,{children:"UNDER_MAINTENANCE"}),": Equipment is currently undergoing maintenance."]}),"\n",(0,d.jsxs)(i.li,{children:[(0,d.jsx)(i.strong,{children:"UNKNOWN"}),": Equipment status is not known."]}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,d.jsx)(i,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>c,x:()=>r});var n=t(96540);const d={},s=n.createContext(d);function c(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);