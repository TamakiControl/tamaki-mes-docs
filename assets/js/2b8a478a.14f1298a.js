"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[868],{3610:(e,d,i)=>{i.r(d),i.d(d,{assets:()=>s,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var t=i(4848),r=i(8453);const o={sidebar_position:7,title:"material_lot_records",description:"Documentation for the material_lot_records table, outlining its columns and structure."},n="Material Lot Records",c={id:"appendix/data-model/material-model/material_lot_records",title:"material_lot_records",description:"Documentation for the material_lot_records table, outlining its columns and structure.",source:"@site/docs/appendix/data-model/material-model/material_lot_records.md",sourceDirName:"appendix/data-model/material-model",slug:"/appendix/data-model/material-model/material_lot_records",permalink:"/tamaki-mes-docs/docs/appendix/data-model/material-model/material_lot_records",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/material-model/material_lot_records.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"material_lot_records",description:"Documentation for the material_lot_records table, outlining its columns and structure."},sidebar:"tutorialSidebar",previous:{title:"material_reason_codes",permalink:"/tamaki-mes-docs/docs/appendix/data-model/material-model/material_reason_codes"},next:{title:"Personnel Model Overview",permalink:"/tamaki-mes-docs/docs/appendix/data-model/personnel-model/intro"}},s={},a=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>lotRecordType</code>",id:"lotrecordtype",level:3},{value:"<code>material_lot_id</code>",id:"material_lot_id",level:3},{value:"<code>secondary_material_lot_id</code>",id:"secondary_material_lot_id",level:3},{value:"<code>operation_record_id</code>",id:"operation_record_id",level:3},{value:"<code>production_order_id</code>",id:"production_order_id",level:3},{value:"<code>material_scrap_code_id</code>",id:"material_scrap_code_id",level:3},{value:"<code>source_location_id</code> and <code>destination_location_id</code>",id:"source_location_id-and-destination_location_id",level:3},{value:"<code>lotStatus</code>",id:"lotstatus",level:3},{value:"<code>quantity</code>",id:"quantity",level:3},{value:"<code>startDate</code> and <code>endDate</code>",id:"startdate-and-enddate",level:3},{value:"<code>status</code>",id:"status",level:3}];function l(e){const d={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.header,{children:(0,t.jsx)(d.h1,{id:"material-lot-records",children:"Material Lot Records"})}),"\n",(0,t.jsx)(d.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(d.p,{children:["The ",(0,t.jsx)(d.code,{children:"MaterialLotRecord"})," entity captures changes and actions related to specific material lots, including activities such\nas consumption, production, and movement. Each record maintains details about the type of change, associated locations,\nquantities, and timestamps, providing a comprehensive history of material flow."]}),"\n",(0,t.jsx)(d.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,t.jsxs)(d.p,{children:["The following table outlines the SQL columns for the ",(0,t.jsx)(d.code,{children:"material_lot_records"})," table, providing a brief description of\neach, along with sample data where applicable."]}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Column"}),(0,t.jsx)(d.th,{children:"Type"}),(0,t.jsx)(d.th,{children:"Description"}),(0,t.jsx)(d.th,{children:"Example"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"id"})}),(0,t.jsxs)(d.td,{children:[(0,t.jsx)(d.code,{children:"String"})," (ULID)"]}),(0,t.jsx)(d.td,{children:"Unique identifier for the material lot record."}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"lotRecordType"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"Enum"})}),(0,t.jsxs)(d.td,{children:["Type of change, such as ",(0,t.jsx)(d.code,{children:"CONSUMPTION"}),", ",(0,t.jsx)(d.code,{children:"PRODUCTION"}),", ",(0,t.jsx)(d.code,{children:"MERGE"}),"."]}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"CONSUMPTION"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"material_lot_id"})}),(0,t.jsxs)(d.td,{children:[(0,t.jsx)(d.code,{children:"String"})," (ULID)"]}),(0,t.jsxs)(d.td,{children:["References the primary material lot affected by the record. See ",(0,t.jsx)(d.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/material-model/material_lots",children:"material_lots"}),"."]}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"secondary_material_lot_id"})}),(0,t.jsxs)(d.td,{children:[(0,t.jsx)(d.code,{children:"String"})," (ULID)"]}),(0,t.jsx)(d.td,{children:"References a secondary material lot involved in the record, if applicable."}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"01JAP8RJBN-9WTGQRQW-Y3XCRTXF"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"operation_record_id"})}),(0,t.jsxs)(d.td,{children:[(0,t.jsx)(d.code,{children:"String"})," (ULID)"]}),(0,t.jsxs)(d.td,{children:["References the associated operation record. See ",(0,t.jsx)(d.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/operations-model/operation_records",children:"operation_records"}),"."]}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"01JAP8RJBN-4VYZUKE1-LY2QHV8X"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"production_order_id"})}),(0,t.jsxs)(d.td,{children:[(0,t.jsx)(d.code,{children:"String"})," (ULID)"]}),(0,t.jsxs)(d.td,{children:["References the associated production order. See ",(0,t.jsx)(d.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/production-order-model/production_orders",children:"production_orders"}),"."]}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"01JAP8RJBN-7KQZT6VF-Q5VUZYPW"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"material_scrap_code_id"})}),(0,t.jsxs)(d.td,{children:[(0,t.jsx)(d.code,{children:"String"})," (ULID)"]}),(0,t.jsxs)(d.td,{children:["References an optional reason code for the material action. See ",(0,t.jsx)(d.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/material-model/material_reason_codes",children:"material_reason_codes"}),"."]}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"source_location_id"})}),(0,t.jsxs)(d.td,{children:[(0,t.jsx)(d.code,{children:"String"})," (ULID)"]}),(0,t.jsxs)(d.td,{children:["Location where the material is sourced. See ",(0,t.jsx)(d.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/location-model/locations",children:"locations"}),"."]}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"01JAP8RJBN-4VYZUKE1-LY2QHV8X"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"destination_location_id"})}),(0,t.jsxs)(d.td,{children:[(0,t.jsx)(d.code,{children:"String"})," (ULID)"]}),(0,t.jsxs)(d.td,{children:["Location where the material is transferred. See ",(0,t.jsx)(d.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/location-model/locations",children:"locations"}),"."]}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"lotStatus"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"Enum"})}),(0,t.jsxs)(d.td,{children:["Initial status of the material lot, such as ",(0,t.jsx)(d.code,{children:"OPEN"}),", ",(0,t.jsx)(d.code,{children:"CLOSED"}),", etc."]}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"OPEN"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"quantity"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"Double"})}),(0,t.jsx)(d.td,{children:"Quantity of material involved in the record."}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"100.5"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"startDate"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"Instant"})}),(0,t.jsx)(d.td,{children:"Timestamp marking the beginning of the change."}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"2024-05-10T08:00:00Z"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"endDate"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"Instant"})}),(0,t.jsx)(d.td,{children:"Timestamp marking the end of the change."}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"2024-05-10T10:00:00Z"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"status"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"Enum"})}),(0,t.jsxs)(d.td,{children:["Status indicating if the change is ",(0,t.jsx)(d.code,{children:"IN_PROGRESS"})," or ",(0,t.jsx)(d.code,{children:"COMPLETE"}),"."]}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"COMPLETE"})})]})]})]}),"\n",(0,t.jsx)(d.h2,{id:"field-details",children:"Field Details"}),"\n",(0,t.jsx)(d.h3,{id:"lotrecordtype",children:(0,t.jsx)(d.code,{children:"lotRecordType"})}),"\n",(0,t.jsxs)(d.p,{children:["Defines the type of change for the record, specified by the ",(0,t.jsx)(d.strong,{children:"LotRecordType"})," enum, which includes options such as\n",(0,t.jsx)(d.code,{children:"CONSUMPTION"}),", ",(0,t.jsx)(d.code,{children:"PRODUCTION"}),", and ",(0,t.jsx)(d.code,{children:"SCRAP"}),". This helps categorize material actions."]}),"\n",(0,t.jsx)(d.h3,{id:"material_lot_id",children:(0,t.jsx)(d.code,{children:"material_lot_id"})}),"\n",(0,t.jsxs)(d.p,{children:["References the primary ",(0,t.jsx)(d.code,{children:"MaterialLot"})," impacted by the record, which serves as the main context for the material action.\nSee ",(0,t.jsx)(d.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/material-model/material_lots",children:"material_lots"})," for details."]}),"\n",(0,t.jsx)(d.h3,{id:"secondary_material_lot_id",children:(0,t.jsx)(d.code,{children:"secondary_material_lot_id"})}),"\n",(0,t.jsxs)(d.p,{children:["Points to an optional secondary ",(0,t.jsx)(d.code,{children:"MaterialLot"})," involved in the record, used in cases like splitting or merging."]}),"\n",(0,t.jsx)(d.h3,{id:"operation_record_id",children:(0,t.jsx)(d.code,{children:"operation_record_id"})}),"\n",(0,t.jsxs)(d.p,{children:["References the ",(0,t.jsx)(d.code,{children:"OperationRecord"})," associated with this material action, providing context for operational activities.\nSee ",(0,t.jsx)(d.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/operations-model/operation_records",children:"operation_records"})," for more information."]}),"\n",(0,t.jsx)(d.h3,{id:"production_order_id",children:(0,t.jsx)(d.code,{children:"production_order_id"})}),"\n",(0,t.jsxs)(d.p,{children:["Indicates the associated ",(0,t.jsx)(d.code,{children:"ProductionOrder"}),", linking the record to a specific production order. This provides\ntraceability for production-related material activities.\nSee ",(0,t.jsx)(d.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/production-order-model/production_orders",children:"production_orders"})," for details."]}),"\n",(0,t.jsx)(d.h3,{id:"material_scrap_code_id",children:(0,t.jsx)(d.code,{children:"material_scrap_code_id"})}),"\n",(0,t.jsxs)(d.p,{children:["Optional reference to a ",(0,t.jsx)(d.code,{children:"MaterialReasonCode"})," that provides a reason for the material action, especially useful for scrap\nactivities.\nSee ",(0,t.jsx)(d.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/material-model/material_reason_codes",children:"material_reason_codes"})," for more details."]}),"\n",(0,t.jsxs)(d.h3,{id:"source_location_id-and-destination_location_id",children:[(0,t.jsx)(d.code,{children:"source_location_id"})," and ",(0,t.jsx)(d.code,{children:"destination_location_id"})]}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsxs)(d.li,{children:[(0,t.jsx)(d.strong,{children:"source_location_id"}),": Specifies the location where the material originates."]}),"\n",(0,t.jsxs)(d.li,{children:[(0,t.jsx)(d.strong,{children:"destination_location_id"}),": Specifies the location where the material is moved or transferred."]}),"\n"]}),"\n",(0,t.jsxs)(d.p,{children:["Both fields reference the ",(0,t.jsx)(d.code,{children:"Location"})," entity, facilitating precise tracking of material movements within the facility.\nSee ",(0,t.jsx)(d.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/location-model/locations",children:"locations"})," for additional context."]}),"\n",(0,t.jsx)(d.h3,{id:"lotstatus",children:(0,t.jsx)(d.code,{children:"lotStatus"})}),"\n",(0,t.jsxs)(d.p,{children:["Represents the initial state of the material lot, such as ",(0,t.jsx)(d.code,{children:"OPEN"}),", ",(0,t.jsx)(d.code,{children:"CLOSED"}),", or ",(0,t.jsx)(d.code,{children:"SCRAPPED"}),", helping to indicate the\nstatus of the lot at the time of the record."]}),"\n",(0,t.jsx)(d.h3,{id:"quantity",children:(0,t.jsx)(d.code,{children:"quantity"})}),"\n",(0,t.jsx)(d.p,{children:"Specifies the amount of material involved in this action, enabling quantification of the material movement or usage."}),"\n",(0,t.jsxs)(d.h3,{id:"startdate-and-enddate",children:[(0,t.jsx)(d.code,{children:"startDate"})," and ",(0,t.jsx)(d.code,{children:"endDate"})]}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsxs)(d.li,{children:[(0,t.jsx)(d.strong,{children:"startDate"}),": Timestamp indicating when the material action began."]}),"\n",(0,t.jsxs)(d.li,{children:[(0,t.jsx)(d.strong,{children:"endDate"}),": Timestamp indicating when the material action concluded."]}),"\n"]}),"\n",(0,t.jsx)(d.p,{children:"These timestamps provide temporal context for each material activity."}),"\n",(0,t.jsx)(d.h3,{id:"status",children:(0,t.jsx)(d.code,{children:"status"})}),"\n",(0,t.jsxs)(d.p,{children:["Indicates whether the material action is currently ",(0,t.jsx)(d.code,{children:"IN_PROGRESS"})," or ",(0,t.jsx)(d.code,{children:"COMPLETE"}),", helping to monitor the state of the\nmaterial operation."]})]})}function h(e={}){const{wrapper:d}={...(0,r.R)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,d,i)=>{i.d(d,{R:()=>n,x:()=>c});var t=i(6540);const r={},o=t.createContext(r);function n(e){const d=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),t.createElement(o.Provider,{value:d},e.children)}}}]);