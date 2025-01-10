"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[8616],{2187:(e,d,r)=>{r.r(d),r.d(d,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var i=r(4848),t=r(8453);const n={sidebar_position:2,title:"production_order_bill_of_materials",description:"Documentation for the production_order_bill_of_materials table, detailing columns and constraints in the database schema."},o="Production Order Bill of Material",c={id:"appendix/data-model/production-order-model/production-order-bill-of-material",title:"production_order_bill_of_materials",description:"Documentation for the production_order_bill_of_materials table, detailing columns and constraints in the database schema.",source:"@site/docs/appendix/data-model/production-order-model/production-order-bill-of-material.md",sourceDirName:"appendix/data-model/production-order-model",slug:"/appendix/data-model/production-order-model/production-order-bill-of-material",permalink:"/tamaki-mes-docs/docs/appendix/data-model/production-order-model/production-order-bill-of-material",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/production-order-model/production-order-bill-of-material.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"production_order_bill_of_materials",description:"Documentation for the production_order_bill_of_materials table, detailing columns and constraints in the database schema."},sidebar:"tutorialSidebar",previous:{title:"production_orders",permalink:"/tamaki-mes-docs/docs/appendix/data-model/production-order-model/production-order"},next:{title:"production_order_customers",permalink:"/tamaki-mes-docs/docs/appendix/data-model/production-order-model/production-order-customer"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>material_group</code>",id:"material_group",level:3},{value:"<code>material_type</code>",id:"material_type",level:3},{value:"<code>position</code>",id:"position",level:3},{value:"<code>quantity_order</code>",id:"quantity_order",level:3},{value:"<code>quantity_per_produced_unit</code>",id:"quantity_per_produced_unit",level:3},{value:"<code>material_id</code>",id:"material_id",level:3},{value:"<code>product_material_id</code>",id:"product_material_id",level:3},{value:"<code>production_order_id</code>",id:"production_order_id",level:3},{value:"<code>unit_of_measure_id</code>",id:"unit_of_measure_id",level:3}];function a(e){const d={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.header,{children:(0,i.jsx)(d.h1,{id:"production-order-bill-of-material",children:"Production Order Bill of Material"})}),"\n",(0,i.jsx)(d.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(d.p,{children:["The ",(0,i.jsx)(d.code,{children:"ProductionOrderBillOfMaterial"})," entity defines the materials required for producing a unit within a specific\nproduction order. Each entry specifies the material, its quantity per unit, and additional details, enabling precise\nplanning and material allocation."]}),"\n",(0,i.jsx)(d.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,i.jsxs)(d.p,{children:["The following table outlines the SQL columns for the ",(0,i.jsx)(d.code,{children:"production_order_bill_of_materials"})," table, providing a brief description of\neach, along with sample data where applicable."]}),"\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"Column"}),(0,i.jsx)(d.th,{children:"Type"}),(0,i.jsx)(d.th,{children:"Description"}),(0,i.jsx)(d.th,{children:"Example"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"id"})}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(d.td,{children:"Unique identifier for the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"enabled"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Boolean"})}),(0,i.jsx)(d.td,{children:"If the entity is enabled or not."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"true"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"created_date"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"DateTime"})}),(0,i.jsx)(d.td,{children:"Date the entity was created."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"created_by"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"Person who created the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"TamakiMES"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"modified_date"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"DateTime"})}),(0,i.jsx)(d.td,{children:"Date the entity was created."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"modified_by"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"Last person to modify the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"TamakiMES"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"notes"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Blob"})}),(0,i.jsx)(d.td,{children:"Notes about the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"This entity has these extra notes"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"spare1"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"The first spare column that can be used for additional context on the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"some extra context 1"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"spare2"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"The second spare column that can be used for additional context on the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"some extra context 2"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"spare3"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"The third spare column that can be used for additional context on the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"some extra context 3"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"material_group"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"Group categorizing similar materials, supporting organized tracking."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Raw Materials"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"material_type"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsxs)(d.td,{children:["Type of material, as defined by the ",(0,i.jsx)(d.strong,{children:"MaterialType"})," enum."]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"PRODUCT"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"position"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Integer"})}),(0,i.jsx)(d.td,{children:"Position or order of the material within the production order\u2019s materials list."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"1"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"quantity_order"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Double"})}),(0,i.jsx)(d.td,{children:"Total quantity required for the entire production order."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"500.0"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"quantity_per_produced_unit"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Double"})}),(0,i.jsx)(d.td,{children:"Quantity of the material per unit produced."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"10.5"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"material_id"})}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"String"})," (ULID)"]}),(0,i.jsxs)(d.td,{children:["References the ",(0,i.jsx)(d.code,{children:"Material"})," that is the input material required for production. See ",(0,i.jsx)(d.a,{href:"../material-model/material",children:"materials"}),"."]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"01G8V9S9B9-3QWXS4VC"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"product_material_id"})}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"String"})," (ULID)"]}),(0,i.jsxs)(d.td,{children:["References the ",(0,i.jsx)(d.code,{children:"Material"})," product that this bill of materials is used for. See ",(0,i.jsx)(d.a,{href:"../material-model/material",children:"materials"}),"."]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"01G8V9S9B9-4YJXS9W8"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"production_order_id"})}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"String"})," (ULID)"]}),(0,i.jsxs)(d.td,{children:["References the ",(0,i.jsx)(d.code,{children:"ProductionOrder"}),", linking to the associated production order. See ",(0,i.jsx)(d.a,{href:"../production-order-model/production-order",children:"production_orders"}),"."]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"01FZ8P9BJN-4VYZUKE1"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"unit_of_measure_id"})}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"String"})," (ULID)"]}),(0,i.jsxs)(d.td,{children:["References the unit of measure for quantity. See ",(0,i.jsx)(d.a,{href:"../utility-models/unit-of-measure-model/unit-of-measure",children:"unit_of_measure"}),"."]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]})]})]}),"\n",(0,i.jsx)(d.h2,{id:"field-details",children:"Field Details"}),"\n",(0,i.jsx)(d.h3,{id:"material_group",children:(0,i.jsx)(d.code,{children:"material_group"})}),"\n",(0,i.jsxs)(d.p,{children:["The ",(0,i.jsx)(d.code,{children:"material_group"})," field categorizes similar materials and supports organized tracking."]}),"\n",(0,i.jsx)(d.h3,{id:"material_type",children:(0,i.jsx)(d.code,{children:"material_type"})}),"\n",(0,i.jsxs)(d.p,{children:["Represents the type of material, as defined by the ",(0,i.jsx)(d.strong,{children:"MaterialType"})," enum, with options such as ",(0,i.jsx)(d.code,{children:"COMPONENT"}),", ",(0,i.jsx)(d.code,{children:"PRODUCT"}),", and ",(0,i.jsx)(d.code,{children:"BYPRODUCT"}),"."]}),"\n",(0,i.jsx)(d.h3,{id:"position",children:(0,i.jsx)(d.code,{children:"position"})}),"\n",(0,i.jsx)(d.p,{children:"Represents the position of this bill of materials within the production order's materials list."}),"\n",(0,i.jsx)(d.h3,{id:"quantity_order",children:(0,i.jsx)(d.code,{children:"quantity_order"})}),"\n",(0,i.jsx)(d.p,{children:"Represents the quantity of the material used for the entire production order."}),"\n",(0,i.jsx)(d.h3,{id:"quantity_per_produced_unit",children:(0,i.jsx)(d.code,{children:"quantity_per_produced_unit"})}),"\n",(0,i.jsx)(d.p,{children:"Represents the quantity of the material used per unit produced of the product."}),"\n",(0,i.jsx)(d.h3,{id:"material_id",children:(0,i.jsx)(d.code,{children:"material_id"})}),"\n",(0,i.jsxs)(d.p,{children:["References the ",(0,i.jsx)(d.code,{children:"Material"})," entity associated with the input material required for production.\nSee ",(0,i.jsx)(d.a,{href:"../material-model/material",children:"materials"})," for details."]}),"\n",(0,i.jsx)(d.h3,{id:"product_material_id",children:(0,i.jsx)(d.code,{children:"product_material_id"})}),"\n",(0,i.jsxs)(d.p,{children:["References the ",(0,i.jsx)(d.code,{children:"Material"})," entity associated with the product material that this bill of materials supports.\nSee ",(0,i.jsx)(d.a,{href:"../material-model/material",children:"materials"})," for details."]}),"\n",(0,i.jsx)(d.h3,{id:"production_order_id",children:(0,i.jsx)(d.code,{children:"production_order_id"})}),"\n",(0,i.jsxs)(d.p,{children:["References the ",(0,i.jsx)(d.code,{children:"ProductionOrder"})," entity associated with the bill of materials, providing us information on\nSee ",(0,i.jsx)(d.a,{href:"../production-order-model/production-order",children:"production_orders"})," for details."]}),"\n",(0,i.jsx)(d.h3,{id:"unit_of_measure_id",children:(0,i.jsx)(d.code,{children:"unit_of_measure_id"})}),"\n",(0,i.jsxs)(d.p,{children:["References the unit of measure applicable to this material, such as kilograms or liters, supporting precise tracking of quantities.\nSee ",(0,i.jsx)(d.a,{href:"../utility-models/unit-of-measure-model/unit-of-measure",children:"unit_of_measure"})," for details."]})]})}function h(e={}){const{wrapper:d}={...(0,t.R)(),...e.components};return d?(0,i.jsx)(d,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,d,r)=>{r.d(d,{R:()=>o,x:()=>c});var i=r(6540);const t={},n=i.createContext(t);function o(e){const d=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(n.Provider,{value:d},e.children)}}}]);