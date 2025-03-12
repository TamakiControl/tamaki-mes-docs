"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[2847],{7429:(e,d,r)=>{r.r(d),r.d(d,{assets:()=>s,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"appendix/data-model/production-order-model/production-order","title":"production_orders","description":"Documentation for the production_orders table, detailing columns and constraints in the database schema.","source":"@site/docs/appendix/data-model/production-order-model/production-order.md","sourceDirName":"appendix/data-model/production-order-model","slug":"/appendix/data-model/production-order-model/production-order","permalink":"/tamaki-mes-docs/docs/appendix/data-model/production-order-model/production-order","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/production-order-model/production-order.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"production_orders","description":"Documentation for the production_orders table, detailing columns and constraints in the database schema."},"sidebar":"tutorialSidebar","previous":{"title":"Production Order Model Overview","permalink":"/tamaki-mes-docs/docs/appendix/data-model/production-order-model/intro"},"next":{"title":"production_order_bill_of_materials","permalink":"/tamaki-mes-docs/docs/appendix/data-model/production-order-model/production-order-bill-of-material"}}');var i=r(4848),n=r(8453);const c={sidebar_position:1,title:"production_orders",description:"Documentation for the production_orders table, detailing columns and constraints in the database schema."},o="Production Order",s={},l=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>start_date</code>, <code>due_date</code>, <code>end_date</code>",id:"start_date-due_date-end_date",level:3},{value:"<code>quantity</code>, <code>quantity_produced</code>, <code>quantity_scheduled</code>",id:"quantity-quantity_produced-quantity_scheduled",level:3},{value:"<code>schedule_priority</code>",id:"schedule_priority",level:3},{value:"<code>status</code>",id:"status",level:3},{value:"<code>location_id</code>",id:"location_id",level:3},{value:"<code>product_material_id</code>",id:"product_material_id",level:3},{value:"<code>customer_id</code>",id:"customer_id",level:3},{value:"<code>unit_of_measure_id</code>",id:"unit_of_measure_id",level:3}];function h(e){const d={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.header,{children:(0,i.jsx)(d.h1,{id:"production-order",children:"Production Order"})}),"\n",(0,i.jsx)(d.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(d.p,{children:["The ",(0,i.jsx)(d.code,{children:"ProductionOrder"})," entity manages information related to each production order, including product details,\nscheduling, customer information, and production quantities. This table enables efficient tracking and organization of\nproduction orders within the TamakiMES system."]}),"\n",(0,i.jsx)(d.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,i.jsxs)(d.p,{children:["The following table outlines the SQL columns for the ",(0,i.jsx)(d.code,{children:"production_orders"})," table, providing a brief description of each, along\nwith sample data where applicable."]}),"\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"Column"}),(0,i.jsx)(d.th,{children:"Type"}),(0,i.jsx)(d.th,{children:"Description"}),(0,i.jsx)(d.th,{children:"Example"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"id"})}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(d.td,{children:"Unique identifier for the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"enabled"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Boolean"})}),(0,i.jsx)(d.td,{children:"If the entity is enabled or not."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"true"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"created_date"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"DateTime"})}),(0,i.jsx)(d.td,{children:"Date the entity was created."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"created_by"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"Person who created the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"TamakiMES"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"modified_date"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"DateTime"})}),(0,i.jsx)(d.td,{children:"Date the entity was created."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"modified_by"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"Last person to modify the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"TamakiMES"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"notes"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Blob"})}),(0,i.jsx)(d.td,{children:"Notes about the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"This entity has these extra notes"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"spare1"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"The first spare column that can be used for additional context on the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"some extra context 1"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"spare2"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"The second spare column that can be used for additional context on the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"some extra context 2"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"spare3"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"The third spare column that can be used for additional context on the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"some extra context 3"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"name"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"Unique name identifying the production order."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Order001"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"start_date"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"DateTime"})}),(0,i.jsx)(d.td,{children:"Date when production on this order began."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"2024-05-01 08:00:00"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"due_date"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"DateTime"})}),(0,i.jsx)(d.td,{children:"Expected completion date for the production order."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"2024-06-15 00:00:00"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"end_date"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"DateTime"})}),(0,i.jsx)(d.td,{children:"Date when the production was completed."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"2024-07-01 12:00:00"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"quantity"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Double"})}),(0,i.jsx)(d.td,{children:"Total quantity planned for production."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"500.0"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"quantity_produced"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Double"})}),(0,i.jsx)(d.td,{children:"Quantity already produced as part of this production order."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"250.0"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"quantity_scheduled"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Double"})}),(0,i.jsx)(d.td,{children:"Quantity scheduled for production."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"300.0"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"schedule_priority"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsxs)(d.td,{children:["Priority level for scheduling, determining order in the production queue, as defined by the ",(0,i.jsx)(d.strong,{children:"SchedulePriority"})," enum."]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"NORMAL"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"status"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsxs)(d.td,{children:["Running status of the production order, as defined by the ",(0,i.jsx)(d.strong,{children:"ProductionOrderStatus"})," enum."]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"IDLE"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"location_id"})}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"String"})," (ULID)"]}),(0,i.jsxs)(d.td,{children:["References the location where the production is taking place. See ",(0,i.jsx)(d.a,{href:"../location-model/location",children:"locations"}),"."]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"01FZ8P9BJN-4VYZUKE1"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"product_material_id"})}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"String"})," (ULID)"]}),(0,i.jsxs)(d.td,{children:["References the material being produced. See ",(0,i.jsx)(d.a,{href:"../material-model/material",children:"materials"}),"."]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"01G8V9S9B9-3QWXS4VC"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"customer_id"})}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"String"})," (ULID)"]}),(0,i.jsxs)(d.td,{children:["References the customer associated with the order. See ",(0,i.jsx)(d.a,{href:"../production-order-model/production-order-customer",children:"production_order_customers"}),"."]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"01H3XZ9JAB-4VKJ5LNY"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"unit_of_measure_id"})}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"String"})," (ULID)"]}),(0,i.jsxs)(d.td,{children:["References the unit of measure for quantity. See ",(0,i.jsx)(d.a,{href:"../utility-models/unit-of-measure-model/unit-of-measure",children:"unit_of_measure"}),"."]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]})]})]}),"\n",(0,i.jsx)(d.h2,{id:"field-details",children:"Field Details"}),"\n",(0,i.jsx)(d.h3,{id:"name",children:(0,i.jsx)(d.code,{children:"name"})}),"\n",(0,i.jsxs)(d.p,{children:["The ",(0,i.jsx)(d.code,{children:"name"})," field provides a descriptive identifier for the production order."]}),"\n",(0,i.jsxs)(d.h3,{id:"start_date-due_date-end_date",children:[(0,i.jsx)(d.code,{children:"start_date"}),", ",(0,i.jsx)(d.code,{children:"due_date"}),", ",(0,i.jsx)(d.code,{children:"end_date"})]}),"\n",(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsxs)(d.li,{children:[(0,i.jsx)(d.strong,{children:"start_date"}),": Timestamp indicating when the production started."]}),"\n",(0,i.jsxs)(d.li,{children:[(0,i.jsx)(d.strong,{children:"due_date"}),": Timestamp indicating the expected completion date for the production order."]}),"\n",(0,i.jsxs)(d.li,{children:[(0,i.jsx)(d.strong,{children:"end_date"}),": Timestamp indicating when the production was completed."]}),"\n"]}),"\n",(0,i.jsx)(d.p,{children:"These timestamps provide temporal context for each production order."}),"\n",(0,i.jsxs)(d.h3,{id:"quantity-quantity_produced-quantity_scheduled",children:[(0,i.jsx)(d.code,{children:"quantity"}),", ",(0,i.jsx)(d.code,{children:"quantity_produced"}),", ",(0,i.jsx)(d.code,{children:"quantity_scheduled"})]}),"\n",(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsxs)(d.li,{children:[(0,i.jsx)(d.strong,{children:"quantity"}),": The quantity of units planned for production."]}),"\n",(0,i.jsxs)(d.li,{children:[(0,i.jsx)(d.strong,{children:"quantity_produced"}),": The quantity of units already produced for this production order."]}),"\n",(0,i.jsxs)(d.li,{children:[(0,i.jsx)(d.strong,{children:"quantity_scheduled"}),": The quantity of units scheduled for production."]}),"\n"]}),"\n",(0,i.jsx)(d.p,{children:"These quantities provide metrics about the progress of the production order."}),"\n",(0,i.jsx)(d.h3,{id:"schedule_priority",children:(0,i.jsx)(d.code,{children:"schedule_priority"})}),"\n",(0,i.jsxs)(d.p,{children:["Represents the priority of this production order, as defined by the ",(0,i.jsx)(d.strong,{children:"SchedulePriority"})," enum,\nwith options such as ",(0,i.jsx)(d.code,{children:"LOW"}),", ",(0,i.jsx)(d.code,{children:"NORMAL"}),", ",(0,i.jsx)(d.code,{children:"HIGH"}),", and ",(0,i.jsx)(d.code,{children:"URGENT"}),"."]}),"\n",(0,i.jsx)(d.h3,{id:"status",children:(0,i.jsx)(d.code,{children:"status"})}),"\n",(0,i.jsxs)(d.p,{children:["Represents the running status of the production order, as defined by the ",(0,i.jsx)(d.strong,{children:"ProductionOrderStatus"})," enum, with options such as\n",(0,i.jsx)(d.code,{children:"IDLE"}),", ",(0,i.jsx)(d.code,{children:"SCHEDULED"}),", ",(0,i.jsx)(d.code,{children:"RUNNING"}),", ",(0,i.jsx)(d.code,{children:"PAUSED"}),", ",(0,i.jsx)(d.code,{children:"STOPPED"}),", ",(0,i.jsx)(d.code,{children:"CLOSED"}),", and ",(0,i.jsx)(d.code,{children:"CANCELLED"}),"."]}),"\n",(0,i.jsx)(d.h3,{id:"location_id",children:(0,i.jsx)(d.code,{children:"location_id"})}),"\n",(0,i.jsxs)(d.p,{children:["References the ",(0,i.jsx)(d.code,{children:"Location"})," entity where this production order is taking place, allowing precise tracking of where\nthis production order is within the facility.\nSee ",(0,i.jsx)(d.a,{href:"../location-model/location",children:"locations"})," for details."]}),"\n",(0,i.jsx)(d.h3,{id:"product_material_id",children:(0,i.jsx)(d.code,{children:"product_material_id"})}),"\n",(0,i.jsxs)(d.p,{children:["References the ",(0,i.jsx)(d.code,{children:"Material"})," entity associated with the production order, providing context about the material's characteristics and\nproperties.\nSee ",(0,i.jsx)(d.a,{href:"../material-model/material",children:"materials"})," for details."]}),"\n",(0,i.jsx)(d.h3,{id:"customer_id",children:(0,i.jsx)(d.code,{children:"customer_id"})}),"\n",(0,i.jsxs)(d.p,{children:["References the ",(0,i.jsx)(d.code,{children:"ProductionOrderCustomer"})," entity associated with the production order, providing us information on the customer.\nSee ",(0,i.jsx)(d.a,{href:"../production-order-model/production-order-customer",children:"production_order_customers"})," for details."]}),"\n",(0,i.jsx)(d.h3,{id:"unit_of_measure_id",children:(0,i.jsx)(d.code,{children:"unit_of_measure_id"})}),"\n",(0,i.jsxs)(d.p,{children:["References the unit of measure applicable to this material, such as kilograms or liters, supporting precise tracking of quantities.\nSee ",(0,i.jsx)(d.a,{href:"../utility-models/unit-of-measure-model/unit-of-measure",children:"unit_of_measure"})," for details."]})]})}function a(e={}){const{wrapper:d}={...(0,n.R)(),...e.components};return d?(0,i.jsx)(d,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,d,r)=>{r.d(d,{R:()=>c,x:()=>o});var t=r(6540);const i={},n=t.createContext(i);function c(e){const d=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function o(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(n.Provider,{value:d},e.children)}}}]);