"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[2847],{5881:(e,d,r)=>{r.r(d),r.d(d,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var i=r(4848),n=r(8453);const t={sidebar_position:1,title:"production_orders",description:"Documentation for the production_orders table, detailing columns and constraints in the database schema."},o="Production Orders Table",c={id:"appendix/data-model/production-order-model/production-order",title:"production_orders",description:"Documentation for the production_orders table, detailing columns and constraints in the database schema.",source:"@site/docs/appendix/data-model/production-order-model/production-order.md",sourceDirName:"appendix/data-model/production-order-model",slug:"/appendix/data-model/production-order-model/production-order",permalink:"/tamaki-mes-docs/docs/appendix/data-model/production-order-model/production-order",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/production-order-model/production-order.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"production_orders",description:"Documentation for the production_orders table, detailing columns and constraints in the database schema."},sidebar:"tutorialSidebar",previous:{title:"Production Order Schema Overview",permalink:"/tamaki-mes-docs/docs/appendix/data-model/production-order-model/intro"},next:{title:"production_order_bill_of_materials",permalink:"/tamaki-mes-docs/docs/appendix/data-model/production-order-model/production-order-bill-of-material"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Constraints",id:"constraints",level:2}];function a(e){const d={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.header,{children:(0,i.jsx)(d.h1,{id:"production-orders-table",children:"Production Orders Table"})}),"\n",(0,i.jsx)(d.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(d.p,{children:["The ",(0,i.jsx)(d.code,{children:"production_orders"})," table manages information related to each production order, including product details,\nscheduling, customer information, and production quantities. This table enables efficient tracking and organization of\nproduction orders within the TamakiMES system."]}),"\n",(0,i.jsx)(d.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"Column"}),(0,i.jsx)(d.th,{children:"Type"}),(0,i.jsx)(d.th,{children:"Description"}),(0,i.jsx)(d.th,{children:"Example"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"due_date"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"datetime"})}),(0,i.jsx)(d.td,{children:"Expected completion date for the production order."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"2024-06-15 00:00:00"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"end_date"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"datetime"})}),(0,i.jsx)(d.td,{children:"Date when the production was completed."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"2024-07-01 12:00:00"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"name"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"varchar(255)"})}),(0,i.jsx)(d.td,{children:"Unique name identifying the production order."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Order001"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"quantity"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"double"})}),(0,i.jsx)(d.td,{children:"Total quantity planned for production."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"500.0"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"quantity_produced"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"double"})}),(0,i.jsx)(d.td,{children:"Quantity already produced as part of this production order."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"250.0"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"quantity_scheduled"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"double"})}),(0,i.jsx)(d.td,{children:"Quantity scheduled for production."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"300.0"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"schedule_priority"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"varchar(255)"})}),(0,i.jsx)(d.td,{children:"Priority level for scheduling, determining order in the production queue."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"HIGH"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"start_date"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"datetime"})}),(0,i.jsx)(d.td,{children:"Date when production on this order began."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"2024-05-01 08:00:00"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"status"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"varchar(255)"})}),(0,i.jsxs)(d.td,{children:["Current status of the production order, such as ",(0,i.jsx)(d.code,{children:"IDLE"})," or ",(0,i.jsx)(d.code,{children:"ACTIVE"}),"."]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"ACTIVE"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"location_id"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"varchar(255)"})}),(0,i.jsxs)(d.td,{children:["Foreign key to ",(0,i.jsx)(d.code,{children:"locations"}),", indicating where the production is taking place. See ",(0,i.jsx)(d.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/location-model/location",children:"locations"}),"."]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"01FZ8P9BJN-4VYZUKE1"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"product_material_id"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"varchar(255)"})}),(0,i.jsxs)(d.td,{children:["Foreign key to ",(0,i.jsx)(d.code,{children:"materials"}),", referencing the material being produced. See ",(0,i.jsx)(d.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/material-model/material",children:"materials"}),"."]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"01G8V9S9B9-3QWXS4VC"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"customer_id"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"varchar(255)"})}),(0,i.jsxs)(d.td,{children:["Foreign key to ",(0,i.jsx)(d.code,{children:"production_order_customers"}),", linking the customer associated with the order. See ",(0,i.jsx)(d.a,{href:"production-order-customer",children:"production_order_customers"}),"."]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"01H3XZ9JAB-4VKJ5LNY"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"unit_of_measure_id"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"varchar(255)"})}),(0,i.jsxs)(d.td,{children:["Foreign key to ",(0,i.jsx)(d.code,{children:"unit_of_measure"}),", specifying the unit of measure for quantity. See ",(0,i.jsx)(d.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/utility-models/unit-of-measure-model/unit-of-measure",children:"unit_of_measure"}),"."]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Liters"})})]})]})]}),"\n",(0,i.jsx)(d.h2,{id:"constraints",children:"Constraints"}),"\n",(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsxs)(d.li,{children:[(0,i.jsx)(d.strong,{children:"Primary Key"}),": ",(0,i.jsx)(d.code,{children:"id"})," - Uniquely identifies each production order."]}),"\n",(0,i.jsxs)(d.li,{children:[(0,i.jsx)(d.strong,{children:"Unique Key"}),": ",(0,i.jsx)(d.code,{children:"name"})," - Ensures each production order name is unique within the system."]}),"\n",(0,i.jsxs)(d.li,{children:[(0,i.jsx)(d.strong,{children:"Foreign Keys"}),":","\n",(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsxs)(d.li,{children:[(0,i.jsx)(d.code,{children:"location_id"})," \u2192 ",(0,i.jsx)(d.code,{children:"locations(id)"})]}),"\n",(0,i.jsxs)(d.li,{children:[(0,i.jsx)(d.code,{children:"product_material_id"})," \u2192 ",(0,i.jsx)(d.code,{children:"materials(id)"})]}),"\n",(0,i.jsxs)(d.li,{children:[(0,i.jsx)(d.code,{children:"customer_id"})," \u2192 ",(0,i.jsx)(d.code,{children:"production_order_customers(id)"})]}),"\n",(0,i.jsxs)(d.li,{children:[(0,i.jsx)(d.code,{children:"unit_of_measure_id"})," \u2192 ",(0,i.jsx)(d.code,{children:"unit_of_measure(id)"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(d.hr,{}),"\n",(0,i.jsx)(d.p,{children:"This table structure provides an efficient layout for managing production orders within the TamakiMES system, allowing\neach order to have detailed information on scheduling, quantities, and associated entities."})]})}function h(e={}){const{wrapper:d}={...(0,n.R)(),...e.components};return d?(0,i.jsx)(d,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,d,r)=>{r.d(d,{R:()=>o,x:()=>c});var i=r(6540);const n={},t=i.createContext(n);function o(e){const d=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(t.Provider,{value:d},e.children)}}}]);