"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[3334],{8645:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var t=d(4848),c=d(8453);const n={sidebar_position:3,title:"production_order_customers",description:"Documentation for the production_order_customers table, detailing columns and constraints in the database schema."},o="Production Order Customers Table",i={id:"appendix/data-model/production-order-model/production_order_customers",title:"production_order_customers",description:"Documentation for the production_order_customers table, detailing columns and constraints in the database schema.",source:"@site/docs/appendix/data-model/production-order-model/production_order_customers.md",sourceDirName:"appendix/data-model/production-order-model",slug:"/appendix/data-model/production-order-model/production_order_customers",permalink:"/tamaki-mes-docs/docs/appendix/data-model/production-order-model/production_order_customers",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/production-order-model/production_order_customers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"production_order_customers",description:"Documentation for the production_order_customers table, detailing columns and constraints in the database schema."},sidebar:"tutorialSidebar",previous:{title:"production_order_bill_of_materials",permalink:"/tamaki-mes-docs/docs/appendix/data-model/production-order-model/production_order_bill_of_materials"},next:{title:"production_order_properties",permalink:"/tamaki-mes-docs/docs/appendix/data-model/production-order-model/production_order_properties"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Constraints",id:"constraints",level:2}];function a(e){const r={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"production-order-customers-table",children:"Production Order Customers Table"})}),"\n",(0,t.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"production_order_customers"})," table stores information about customers associated with production orders, including\ncontact information, address, and other relevant details. This table facilitates customer management and communication\nwithin the production order workflow."]}),"\n",(0,t.jsx)(r.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Column"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Example"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"id"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"varchar(255)"})}),(0,t.jsx)(r.td,{children:"Primary key, unique identifier for the customer."}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"01FZ8P9BJN-4VYZUKE1"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"address"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"varchar(200)"})}),(0,t.jsx)(r.td,{children:"Customer's physical address."}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"123 Milk Rd."})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"alt_contact"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"varchar(100)"})}),(0,t.jsx)(r.td,{children:"Name of the alternate contact person."}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"Jane Smith"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"alt_contact_email"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"varchar(255)"})}),(0,t.jsx)(r.td,{children:"Email address of the alternate contact."}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"jane.smith@dairyco.com"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"alt_contact_phone"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"varchar(255)"})}),(0,t.jsx)(r.td,{children:"Phone number of the alternate contact."}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"+1-800-555-5678"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"city"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"varchar(100)"})}),(0,t.jsx)(r.td,{children:"City where the customer is located."}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"Dairyville"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"country"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"varchar(100)"})}),(0,t.jsx)(r.td,{children:"Country of the customer."}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"USA"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"description"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"varchar(255)"})}),(0,t.jsx)(r.td,{children:"Optional description of the customer."}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"Major dairy supplier"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"name"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"varchar(255)"})}),(0,t.jsx)(r.td,{children:"Unique name of the customer."}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"Dairy Co."})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"primary_contact"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"varchar(100)"})}),(0,t.jsx)(r.td,{children:"Name of the primary contact person."}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"John Doe"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"primary_contact_email"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"varchar(255)"})}),(0,t.jsx)(r.td,{children:"Email address of the primary contact."}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"john.doe@dairyco.com"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"primary_contact_phone"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"varchar(255)"})}),(0,t.jsx)(r.td,{children:"Phone number of the primary contact."}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"+1-800-555-1234"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"state"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"varchar(100)"})}),(0,t.jsx)(r.td,{children:"State or region where the customer is located."}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"ID"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"zip"})}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"varchar(255)"})}),(0,t.jsx)(r.td,{children:"Zip code of the customer's address."}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"83701"})})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"constraints",children:"Constraints"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Primary Key"}),": ",(0,t.jsx)(r.code,{children:"id"})," - Uniquely identifies each customer."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.strong,{children:"Unique Key"}),": ",(0,t.jsx)(r.code,{children:"name"})," - Ensures that each customer name is unique within the system."]}),"\n"]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"production_order_customers"})," table provides a structured repository for customer information, supporting effective\ncustomer management and communication within TamakiMES."]})]})}function h(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,r,d)=>{d.d(r,{R:()=>o,x:()=>i});var t=d(6540);const c={},n=t.createContext(c);function o(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);