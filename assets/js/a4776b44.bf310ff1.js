"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[9914],{7573:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var d=i(4848),n=i(8453);const s={sidebar_position:3,title:"material_lots",description:"Documentation for the material_lots table, outlining its columns and structure."},r="Material Lots",l={id:"appendix/data-model/material-model/material-lot",title:"material_lots",description:"Documentation for the material_lots table, outlining its columns and structure.",source:"@site/docs/appendix/data-model/material-model/material-lot.md",sourceDirName:"appendix/data-model/material-model",slug:"/appendix/data-model/material-model/material-lot",permalink:"/tamaki-mes-docs/docs/appendix/data-model/material-model/material-lot",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/material-model/material-lot.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"material_lots",description:"Documentation for the material_lots table, outlining its columns and structure."},sidebar:"tutorialSidebar",previous:{title:"materials",permalink:"/tamaki-mes-docs/docs/appendix/data-model/material-model/material"},next:{title:"material_inventory",permalink:"/tamaki-mes-docs/docs/appendix/data-model/material-model/material-inventory"}},a={},c=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>material_id</code>",id:"material_id",level:3},{value:"<code>status</code>",id:"status",level:3},{value:"<code>total_quantity</code>",id:"total_quantity",level:3},{value:"<code>expiration_date</code>",id:"expiration_date",level:3},{value:"<code>closed_date</code>",id:"closed_date",level:3},{value:"<code>unit_of_measure_id</code>",id:"unit_of_measure_id",level:3}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.header,{children:(0,d.jsx)(t.h1,{id:"material-lots",children:"Material Lots"})}),"\n",(0,d.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,d.jsxs)(t.p,{children:["The ",(0,d.jsx)(t.code,{children:"MaterialLot"})," entity represents a specific batch or lot of a material. Each lot is associated with a parent\nmaterial, has a defined status, and includes details like total quantity, expiration date, and unit of measure. This\nentity supports tracking and management of materials in discrete quantities for production, inventory, and compliance."]}),"\n",(0,d.jsx)(t.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,d.jsxs)(t.p,{children:["The following table outlines the SQL columns for the ",(0,d.jsx)(t.code,{children:"material_lots"})," table, providing a brief description of each, along\nwith sample data where applicable."]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Column"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Example"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"id"})}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,d.jsx)(t.td,{children:"Unique identifier for the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"enabled"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Boolean"})}),(0,d.jsx)(t.td,{children:"If the entity is enabled or not."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"true"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"created_date"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"DateTime"})}),(0,d.jsx)(t.td,{children:"Date the entity was created."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"created_by"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsx)(t.td,{children:"Person who created the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"TamakiMES"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"modified_date"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"DateTime"})}),(0,d.jsx)(t.td,{children:"Date the entity was created."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"modified_by"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsx)(t.td,{children:"Last person to modify the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"TamakiMES"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"notes"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Blob"})}),(0,d.jsx)(t.td,{children:"Notes about the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"This entity has these extra notes"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"spare1"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsx)(t.td,{children:"The first spare column that can be used for additional context on the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"some extra context 1"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"spare2"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsx)(t.td,{children:"The second spare column that can be used for additional context on the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"some extra context 2"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"spare3"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsx)(t.td,{children:"The third spare column that can be used for additional context on the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"some extra context 3"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"name"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsx)(t.td,{children:"Name of the lot, unique within the context of its parent material."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Batch #1001"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"material_id"})}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,d.jsxs)(t.td,{children:["References the material associated with this lot. See ",(0,d.jsx)(t.a,{href:"material",children:"materials"}),"."]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"status"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsxs)(t.td,{children:["Current status of the material lot, as defined by the ",(0,d.jsx)(t.strong,{children:"LotStatus"})," enum."]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"OPEN"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"total_quantity"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Double"})}),(0,d.jsx)(t.td,{children:"Total quantity of material contained in the lot."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"1500.0"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"expiration_date"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"DateTime"})}),(0,d.jsx)(t.td,{children:"Optional field indicating the expected expiration date of the lot."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"2024-12-31T23:59:59Z"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"closed_date"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"DateTime"})}),(0,d.jsx)(t.td,{children:"Optional field indicating the date the lot was closed."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"2024-01-15T12:00:00Z"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"unit_of_measure_id"})}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,d.jsxs)(t.td,{children:["References the unit of measure for the lot quantity. See ",(0,d.jsx)(t.a,{href:"../utility-models/unit-of-measure-model/unit-of-measure",children:"unit_of_measure"}),"."]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"01JAP8RJBN-4VYZUKE1-LY2QHV8X"})})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"field-details",children:"Field Details"}),"\n",(0,d.jsx)(t.h3,{id:"material_id",children:(0,d.jsx)(t.code,{children:"material_id"})}),"\n",(0,d.jsxs)(t.p,{children:["References the ",(0,d.jsx)(t.code,{children:"Material"})," entity associated with this lot, providing context about the material's characteristics and\nproperties.\nSee ",(0,d.jsx)(t.a,{href:"material",children:"materials"})," for details on ",(0,d.jsx)(t.code,{children:"Material"}),"."]}),"\n",(0,d.jsx)(t.h3,{id:"status",children:(0,d.jsx)(t.code,{children:"status"})}),"\n",(0,d.jsxs)(t.p,{children:["Indicates the current state of the lot, using the ",(0,d.jsx)(t.strong,{children:"LotStatus"})," enum, with possible values:"]}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:"OPEN"}),": Lot is in the system but not available for use."]}),"\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:"AVAILABLE"}),": Lot is available for use."]}),"\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:"QA_HOLD"}),": Lot is put on hold by QA. It is quarantined or under inspection and is not available for use."]}),"\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:"EXPIRED"}),": Lot is expired. It is not available for use."]}),"\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:"SHIPPED"}),": Lot is shipped to a customer."]}),"\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:"CLOSED"}),": Lot has been closed and is no longer active."]}),"\n"]}),"\n",(0,d.jsx)(t.h3,{id:"total_quantity",children:(0,d.jsx)(t.code,{children:"total_quantity"})}),"\n",(0,d.jsx)(t.p,{children:"Specifies the total quantity of the material that has ever existed for this lot. This value must be zero or greater\nand goes up when inventory is added but does not go back down when inventory is removed."}),"\n",(0,d.jsx)(t.h3,{id:"expiration_date",children:(0,d.jsx)(t.code,{children:"expiration_date"})}),"\n",(0,d.jsx)(t.p,{children:"Optional field for the expected expiration date of the material in the lot, primarily used for perishable or\ntime-sensitive materials."}),"\n",(0,d.jsx)(t.h3,{id:"closed_date",children:(0,d.jsx)(t.code,{children:"closed_date"})}),"\n",(0,d.jsx)(t.p,{children:"Optional field for the date on which the lot was closed, useful for tracking lifecycle events of the lot."}),"\n",(0,d.jsx)(t.h3,{id:"unit_of_measure_id",children:(0,d.jsx)(t.code,{children:"unit_of_measure_id"})}),"\n",(0,d.jsxs)(t.p,{children:["References the ",(0,d.jsx)(t.code,{children:"UnitOfMeasure"})," entity associated with the material lot, enabling consistent measurement standards.\nSee ",(0,d.jsx)(t.a,{href:"../utility-models/unit-of-measure-model/unit-of-measure",children:"unit_of_measure"})," for details on ",(0,d.jsx)(t.code,{children:"UnitOfMeasure"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>l});var d=i(6540);const n={},s=d.createContext(n);function r(e){const t=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),d.createElement(s.Provider,{value:t},e.children)}}}]);