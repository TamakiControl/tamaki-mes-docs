"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[7005],{3690:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>s});var d=i(4848),r=i(8453);const n={sidebar_position:4,title:"material_inventory",description:"Documentation for the material_inventory table, outlining its columns and structure."},o="Material Inventory",c={id:"appendix/data-model/material-model/material-inventory",title:"material_inventory",description:"Documentation for the material_inventory table, outlining its columns and structure.",source:"@site/docs/appendix/data-model/material-model/material-inventory.md",sourceDirName:"appendix/data-model/material-model",slug:"/appendix/data-model/material-model/material-inventory",permalink:"/tamaki-mes-docs/docs/appendix/data-model/material-model/material-inventory",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/material-model/material-inventory.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"material_inventory",description:"Documentation for the material_inventory table, outlining its columns and structure."},sidebar:"tutorialSidebar",previous:{title:"material_lots",permalink:"/tamaki-mes-docs/docs/appendix/data-model/material-model/material-lot"},next:{title:"material_properties",permalink:"/tamaki-mes-docs/docs/appendix/data-model/material-model/material-property"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>quantity</code>",id:"quantity",level:3},{value:"<code>storage_location_id</code>",id:"storage_location_id",level:3},{value:"<code>material_lot_id</code>",id:"material_lot_id",level:3},{value:"<code>production_order_id</code>",id:"production_order_id",level:3}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.header,{children:(0,d.jsx)(t.h1,{id:"material-inventory",children:"Material Inventory"})}),"\n",(0,d.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,d.jsxs)(t.p,{children:["The ",(0,d.jsx)(t.code,{children:"MaterialInventory"})," entity represents the storage of specific material lots at various locations. Each inventory\nrecord links a material lot to a storage location, allowing for tracking of material quantities across different\nlocations in the facility. This structure enables effective inventory management by specifying where and how much of\neach material lot is stored."]}),"\n",(0,d.jsx)(t.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,d.jsxs)(t.p,{children:["The following table outlines the SQL columns for the ",(0,d.jsx)(t.code,{children:"material_inventory"})," table, providing a brief description of each,\nalong with sample data where applicable."]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Column"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Example"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"id"})}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,d.jsx)(t.td,{children:"Unique identifier for the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"enabled"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Boolean"})}),(0,d.jsx)(t.td,{children:"If the entity is enabled or not."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"true"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"created_date"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"DateTime"})}),(0,d.jsx)(t.td,{children:"Date the entity was created."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"created_by"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsx)(t.td,{children:"Person who created the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"TamakiMES"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"modified_date"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"DateTime"})}),(0,d.jsx)(t.td,{children:"Date the entity was created."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"modified_by"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsx)(t.td,{children:"Last person to modify the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"TamakiMES"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"notes"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Blob"})}),(0,d.jsx)(t.td,{children:"Notes about the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"This entity has these extra notes"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"spare1"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsx)(t.td,{children:"The first spare column that can be used for additional context on the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"some extra context 1"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"spare2"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsx)(t.td,{children:"The second spare column that can be used for additional context on the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"some extra context 2"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"spare3"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsx)(t.td,{children:"The third spare column that can be used for additional context on the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"some extra context 3"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"name"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsx)(t.td,{children:"Name of the inventory at that location at that time."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"165456432135659"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"quantity"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Double"})}),(0,d.jsx)(t.td,{children:"Current quantity of material in this inventory record."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"250.0"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"storage_location_id"})}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,d.jsxs)(t.td,{children:["References the location where the inventory is stored. See ",(0,d.jsx)(t.a,{href:"../location-model/location",children:"locations"}),"."]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"material_lot_id"})}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,d.jsxs)(t.td,{children:["References the material lot stored in this location. See ",(0,d.jsx)(t.a,{href:"../material-model/material-lot",children:"material_lots"}),"."]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"01JAP8RJBN-4VYZUKE1-LY2QHV8X"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"production_order_id"})}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,d.jsxs)(t.td,{children:["References the associated production order. See ",(0,d.jsx)(t.a,{href:"../production-order-model/production-order",children:"production_orders"}),"."]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"01JAP8RJBN-7KQZT6VF-Q5VUZYPW"})})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"field-details",children:"Field Details"}),"\n",(0,d.jsx)(t.h3,{id:"name",children:(0,d.jsx)(t.code,{children:"name"})}),"\n",(0,d.jsxs)(t.p,{children:["The ",(0,d.jsx)(t.code,{children:"name"})," field provides a descriptive identifier of the inventory at that location at that time, such as a License Plate Number for a pallet."]}),"\n",(0,d.jsx)(t.h3,{id:"quantity",children:(0,d.jsx)(t.code,{children:"quantity"})}),"\n",(0,d.jsx)(t.p,{children:"Represents the current quantity of material in this specific inventory record. This field allows for accurate management\nof material stock levels and tracking across multiple locations."}),"\n",(0,d.jsx)(t.h3,{id:"storage_location_id",children:(0,d.jsx)(t.code,{children:"storage_location_id"})}),"\n",(0,d.jsxs)(t.p,{children:["References the ",(0,d.jsx)(t.code,{children:"Location"})," entity where this inventory is stored, allowing precise tracking of material storage within\nthe facility.\nSee ",(0,d.jsx)(t.a,{href:"../location-model/location",children:"locations"})," for details."]}),"\n",(0,d.jsx)(t.h3,{id:"material_lot_id",children:(0,d.jsx)(t.code,{children:"material_lot_id"})}),"\n",(0,d.jsxs)(t.p,{children:["Links to the specific ",(0,d.jsx)(t.code,{children:"MaterialLot"})," associated with this inventory record, enabling tracking of unique lots within each\nstorage location.\nSee ",(0,d.jsx)(t.a,{href:"../material-model/material-lot",children:"material_lots"})," for details."]}),"\n",(0,d.jsx)(t.h3,{id:"production_order_id",children:(0,d.jsx)(t.code,{children:"production_order_id"})}),"\n",(0,d.jsxs)(t.p,{children:["Indicates the associated ",(0,d.jsx)(t.code,{children:"ProductionOrder"}),", linking the inventory record to a specific production order. This enables tracking\nof materials for a production order.\nSee ",(0,d.jsx)(t.a,{href:"../production-order-model/production-order",children:"production_orders"})," for details."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>c});var d=i(6540);const r={},n=d.createContext(r);function o(e){const t=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),d.createElement(n.Provider,{value:t},e.children)}}}]);