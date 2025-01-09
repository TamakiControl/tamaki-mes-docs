"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[7780],{145:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var t=i(4848),r=i(8453);const s={sidebar_position:4,title:"operation_materials",description:"Documentation for the operation_materials table, outlining its columns and structure."},d="Operation Material",o={id:"appendix/data-model/operation-model/operation-material",title:"operation_materials",description:"Documentation for the operation_materials table, outlining its columns and structure.",source:"@site/docs/appendix/data-model/operation-model/operation-material.md",sourceDirName:"appendix/data-model/operation-model",slug:"/appendix/data-model/operation-model/operation-material",permalink:"/tamaki-mes-docs/docs/appendix/data-model/operation-model/operation-material",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/operation-model/operation-material.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"operation_materials",description:"Documentation for the operation_materials table, outlining its columns and structure."},sidebar:"tutorialSidebar",previous:{title:"operation_records",permalink:"/tamaki-mes-docs/docs/appendix/data-model/operation-model/operation-record"},next:{title:"OEE Model",permalink:"/tamaki-mes-docs/docs/appendix/data-model/oee-model/intro"}},l={},a=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>create_lot_if_not_found</code>",id:"create_lot_if_not_found",level:3},{value:"<code>flush_interval_millis</code>",id:"flush_interval_millis",level:3},{value:"<code>increment_production_order_count</code>",id:"increment_production_order_count",level:3},{value:"<code>lot_code_expression</code>",id:"lot_code_expression",level:3},{value:"<code>lot_expression_update_behavior</code>",id:"lot_expression_update_behavior",level:3},{value:"<code>lot_generation_strategy</code>",id:"lot_generation_strategy",level:3},{value:"<code>lot_resolution_strategy</code>",id:"lot_resolution_strategy",level:3},{value:"<code>material_expression</code>",id:"material_expression",level:3},{value:"<code>material_expression_update_behavior</code>",id:"material_expression_update_behavior",level:3},{value:"<code>material_source</code>",id:"material_source",level:3},{value:"<code>move_quantity_calc_type</code>",id:"move_quantity_calc_type",level:3},{value:"<code>move_quantity_expression</code>",id:"move_quantity_expression",level:3},{value:"<code>move_quantity_overflow_value</code>",id:"move_quantity_overflow_value",level:3},{value:"<code>operation_type</code>",id:"operation_type",level:3},{value:"<code>quantity_source</code>",id:"quantity_source",level:3},{value:"<code>scrap_remaining_inventory</code>",id:"scrap_remaining_inventory",level:3},{value:"<code>start_trigger_expression</code>",id:"start_trigger_expression",level:3},{value:"<code>start_trigger_type</code>",id:"start_trigger_type",level:3},{value:"<code>status</code>",id:"status",level:3},{value:"<code>stop_trigger_expression</code>",id:"stop_trigger_expression",level:3},{value:"<code>stop_trigger_type</code>",id:"stop_trigger_type",level:3},{value:"<code>trigger_source</code>",id:"trigger_source",level:3},{value:"<code>material_id</code>",id:"material_id",level:3},{value:"<code>move_location_id</code>",id:"move_location_id",level:3},{value:"<code>operation_id</code>",id:"operation_id",level:3},{value:"<code>reason_code_id</code>",id:"reason_code_id",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"operation-material",children:"Operation Material"})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"OperationMaterial"})," entity represents an action performed on a material lot or inventory within the MES system. Key attributes include\nlot handling strategies, quantity calculations, and triggers for initiating or completing actions. These fields support\nprecise management of material interactions, enabling efficient tracking and alignment with operational workflows."]}),"\n",(0,t.jsx)(n.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,t.jsxs)(n.p,{children:["The following table outlines the SQL columns for the ",(0,t.jsx)(n.code,{children:"operation_materials"})," table, providing a brief description of each, along\nwith sample data where applicable."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Column"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"id"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"String"})," (ULID)"]}),(0,t.jsx)(n.td,{children:"Unique identifier for the entity."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"enabled"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Boolean"})}),(0,t.jsx)(n.td,{children:"If the entity is enabled or not."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"true"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"created_date"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"DateTime"})}),(0,t.jsx)(n.td,{children:"Date the entity was created."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"created_by"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsx)(n.td,{children:"Person who created the entity."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"TamakiMES"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"modified_date"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"DateTime"})}),(0,t.jsx)(n.td,{children:"Date the entity was created."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"modified_by"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsx)(n.td,{children:"Last person to modify the entity."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"TamakiMES"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"notes"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Blob"})}),(0,t.jsx)(n.td,{children:"Notes about the entity."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"This entity has these extra notes"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"spare1"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsx)(n.td,{children:"The first spare column that can be used for additional context on the entity."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"some extra context 1"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"spare2"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsx)(n.td,{children:"The second spare column that can be used for additional context on the entity."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"some extra context 2"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"spare3"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsx)(n.td,{children:"The third spare column that can be used for additional context on the entity."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"some extra context 3"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"name"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsx)(n.td,{children:"Name of the operation material."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Lids"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"create_lot_if_not_found"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Boolean"})}),(0,t.jsx)(n.td,{children:"Create a lot if it doesn't exist. Only used if operationType is CONSUME."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"flush_interval_millis"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Integer"})}),(0,t.jsx)(n.td,{children:"The time interval between data saves in milliseconds."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"1000"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"increment_production_order_count"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Boolean"})}),(0,t.jsx)(n.td,{children:"Update the production order quantity if shipping or producing material."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"lot_code_expression"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsx)(n.td,{children:"The Ignition expression to resolve or generate the lot code. Can be an id or name if consuming and has to be a name if producing."}),(0,t.jsxs)(n.td,{children:["See ",(0,t.jsx)(n.a,{href:"https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax",children:"Ignition_expression_language_and_syntax"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"lot_expression_update_behavior"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsxs)(n.td,{children:["Strategy used if the lot code expression changes while the operation is active, as defined by the ",(0,t.jsx)(n.strong,{children:"ExpressionUpdateBehavior"})," enum."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"KEEP_FIRST_GOOD_VALUE"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"lot_generation_strategy"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsxs)(n.td,{children:["Strategy used to generate a lot code, as defined by the ",(0,t.jsx)(n.strong,{children:"LotGenerationStrategy"})," enum. Only used if operationType is PRODUCE."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"AUTO_GENERATE"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"lot_resolution_strategy"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsxs)(n.td,{children:["Strategy used to to get the lot code, as defined by the ",(0,t.jsx)(n.strong,{children:"LotResolutionStrategy"})," enum. Only used if operationType is for CONSUME or RECEIVE_CONSUME."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"FROM_SOURCE_LOCATION"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"material_expression"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"String"})," (max 2048)"]}),(0,t.jsx)(n.td,{children:"The Ignition expression for materials. Must return the id of the material."}),(0,t.jsxs)(n.td,{children:["See ",(0,t.jsx)(n.a,{href:"https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax",children:"Ignition_expression_language_and_syntax"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"material_expression_update_behavior"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsxs)(n.td,{children:["Strategy used if the material expression changes while the operation is active, as defined by the ",(0,t.jsx)(n.strong,{children:"ExpressionUpdateBehavior"})," enum."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"KEEP_FIRST_GOOD_VALUE"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"material_source"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsxs)(n.td,{children:["Strategy used for resolving the material id for an operation, as defined by the ",(0,t.jsx)(n.strong,{children:"MaterialResolutionStrategy"})," enum."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"STATIC"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"move_quantity_calc_type"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsxs)(n.td,{children:["Calculation type for movement quantity, as defined by the ",(0,t.jsx)(n.strong,{children:"CountCalcType"})," enum. Only used if quantitySource is EXPRESSION."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"DIRECT"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"move_quantity_expression"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"String"})," (max 2048)"]}),(0,t.jsx)(n.td,{children:"The Ignition expression for movement quantity."}),(0,t.jsxs)(n.td,{children:["See ",(0,t.jsx)(n.a,{href:"https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax",children:"Ignition_expression_language_and_syntax"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"move_quantity_overflow_value"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Double"})}),(0,t.jsx)(n.td,{children:"Overflow value for the movement quantity. Only used if quantitySource is EXPRESSION and the moveQuantityCalcType is RISING."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"100.0"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"operation_type"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsxs)(n.td,{children:["Material operation record type, as defined by the ",(0,t.jsx)(n.strong,{children:"OperationMaterialType"})," enum."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"CONSUME"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"quantity_source"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsxs)(n.td,{children:["Source of the quantity of an operation material, as defined by the ",(0,t.jsx)(n.strong,{children:"QuantitySource"})," enum."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"EXPRESSION"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"scrap_remaining_inventory"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Boolean"})}),(0,t.jsx)(n.td,{children:"Scraps any remaining material inventory for source location when the operation is active."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"start_trigger_expression"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsx)(n.td,{children:"Ignition expression to trigger the start of the transfer of materials."}),(0,t.jsxs)(n.td,{children:["See ",(0,t.jsx)(n.a,{href:"https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax",children:"Ignition_expression_language_and_syntax"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"start_trigger_type"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsxs)(n.td,{children:["Trigger type when starting the transfer of materials, as defined by the ",(0,t.jsx)(n.strong,{children:"TriggerType"})," enum."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"RISING_EDGE"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"status"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsxs)(n.td,{children:["Status of the operation material, as defined by the ",(0,t.jsx)(n.strong,{children:"Status"})," enum."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"IDLE"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"stop_trigger_expression"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"String"})," (max 2048)"]}),(0,t.jsx)(n.td,{children:"Ignition expression to trigger the end of the transfer of materials."}),(0,t.jsxs)(n.td,{children:["See ",(0,t.jsx)(n.a,{href:"https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax",children:"Ignition_expression_language_and_syntax"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"stop_trigger_type"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsxs)(n.td,{children:["Trigger type when stopping the transfer of materials, as defined by the ",(0,t.jsx)(n.strong,{children:"TriggerType"})," enum."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"FALLING_EDGE"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"trigger_source"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsxs)(n.td,{children:["Ways that the various operation materials can trigger, as defined by the ",(0,t.jsx)(n.strong,{children:"TriggerEvaluationStrategy"})," enum."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"EXPRESSION"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"material_id"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"String"})," (ULID)"]}),(0,t.jsxs)(n.td,{children:["References the material to which this operation material belongs. See ",(0,t.jsx)(n.a,{href:"../material-model/material",children:"materials"}),"."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"01JAP8RJBN-4VYZUKE1-LY2QHV8X"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"move_location_id"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"String"})," (ULID)"]}),(0,t.jsxs)(n.td,{children:["References the location for movement source or destination. See ",(0,t.jsx)(n.a,{href:"../location-model/location",children:"locations"}),"."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"operation_id"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"String"})," (ULID)"]}),(0,t.jsxs)(n.td,{children:["References the associated operation that uses the operation materials. See ",(0,t.jsx)(n.a,{href:"../operation-model/operation",children:"operations"}),"."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"01JAP8RJBN-7KQZT6VF-Q5VUZYPW"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"reason_code_id"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"String"})," (ULID)"]}),(0,t.jsxs)(n.td,{children:["References an optional reason code for any action on operation material. See ",(0,t.jsx)(n.a,{href:"../material-model/material-reason-code",children:"material_reason_codes"}),"."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"field-details",children:"Field Details"}),"\n",(0,t.jsx)(n.h3,{id:"name",children:(0,t.jsx)(n.code,{children:"name"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"name"})," field provides a descriptive identifier for the operation material."]}),"\n",(0,t.jsxs)(n.p,{children:["A few examples for the ",(0,t.jsx)(n.code,{children:"Packaging Operation"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Lids"}),": To govern adding lids to the line as it moves."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Filling"}),": To govern the liquid filler for each can."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create_lot_if_not_found",children:(0,t.jsx)(n.code,{children:"create_lot_if_not_found"})}),"\n",(0,t.jsx)(n.p,{children:"Creates a lot if it doesn't already exist. This can only be used if operationType is CONSUME."}),"\n",(0,t.jsx)(n.h3,{id:"flush_interval_millis",children:(0,t.jsx)(n.code,{children:"flush_interval_millis"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"flush_interval_millis"})," field specifies the interval, in milliseconds, between data saves to the database."]}),"\n",(0,t.jsx)(n.h3,{id:"increment_production_order_count",children:(0,t.jsx)(n.code,{children:"increment_production_order_count"})}),"\n",(0,t.jsx)(n.p,{children:"Indicates whether the production order quantity should be updated when we are shipping or producing material."}),"\n",(0,t.jsx)(n.h3,{id:"lot_code_expression",children:(0,t.jsx)(n.code,{children:"lot_code_expression"})}),"\n",(0,t.jsxs)(n.p,{children:["Expression to resolve or generate the lot code, using the Ignition expression language.\nThis can be an id or name if the operationType is CONSUME and has to be name if the operationType is PRODUCE.\nSee ",(0,t.jsx)(n.a,{href:"https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax",children:"Ignition_expression_language_and_syntax"})," for more details."]}),"\n",(0,t.jsx)(n.h3,{id:"lot_expression_update_behavior",children:(0,t.jsx)(n.code,{children:"lot_expression_update_behavior"})}),"\n",(0,t.jsxs)(n.p,{children:["Represents the strategy used if the lot code expression changes while the operation is active,\nas defined by the ",(0,t.jsx)(n.strong,{children:"ExpressionUpdateBehavior"})," enum, with possible values:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"KEEP_FIRST_GOOD_VALUE"}),": The system shall retain the first non-null, even if the expression changes during the operation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"KEEP_LAST_GOOD_VALUE"}),": The system shall retain the last non-null, even if the expression changes during the operation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"THROW_ERROR"}),": The system shall throw an error if the expression changes during the operation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"NEW_RECORD"}),": The system shall create a new record if the expression changes during the operation."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"lot_generation_strategy",children:(0,t.jsx)(n.code,{children:"lot_generation_strategy"})}),"\n",(0,t.jsxs)(n.p,{children:["Represents the strategy used to generate a lot code, as defined by the ",(0,t.jsx)(n.strong,{children:"LotGenerationStrategy"})," enum, with possible values:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"MANUAL"}),": Supplied with the startup script."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AUTO_GENERATE"}),": UUID lot code name."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"EXPRESSION"}),": Use an expression to generate a string used for the lot code name."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Only used if operationType is PRODUCE."}),"\n",(0,t.jsx)(n.h3,{id:"lot_resolution_strategy",children:(0,t.jsx)(n.code,{children:"lot_resolution_strategy"})}),"\n",(0,t.jsxs)(n.p,{children:["Represents the strategy used to to get the lot code, as defined by the ",(0,t.jsx)(n.strong,{children:"LotResolutionStrategy"})," enum, with\npossible values:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"FROM_SOURCE_LOCATION"}),": From an existing location that has materials stored there."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"EXPRESSION"}),": Return a lot code from an expression."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"MANUAL"}),": Must be supplied in script starting operation."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Only used if operationType is for CONSUME or RECEIVE_CONSUME."}),"\n",(0,t.jsx)(n.h3,{id:"material_expression",children:(0,t.jsx)(n.code,{children:"material_expression"})}),"\n",(0,t.jsxs)(n.p,{children:["Represents the expression for materials, using the Ignition expression language. Must return the id of the material.\nSee ",(0,t.jsx)(n.a,{href:"https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax",children:"Ignition_expression_language_and_syntax"})," for more details."]}),"\n",(0,t.jsx)(n.h3,{id:"material_expression_update_behavior",children:(0,t.jsx)(n.code,{children:"material_expression_update_behavior"})}),"\n",(0,t.jsxs)(n.p,{children:["Represents the strategy used if the material expression changes while the operation is active,\nas defined by the ",(0,t.jsx)(n.strong,{children:"ExpressionUpdateBehavior"})," enum, with possible values:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"KEEP_FIRST_GOOD_VALUE"}),": The system shall retain the first non-null, even if the expression changes during the operation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"KEEP_LAST_GOOD_VALUE"}),": The system shall retain the last non-null, even if the expression changes during the operation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"THROW_ERROR"}),": The system shall throw an error if the expression changes during the operation."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"NEW_RECORD"}),": The system shall create a new record if the expression changes during the operation."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"material_source",children:(0,t.jsx)(n.code,{children:"material_source"})}),"\n",(0,t.jsxs)(n.p,{children:["Represents the strategy used for resolving the material id for an operation, as defined\nby the ",(0,t.jsx)(n.strong,{children:"MaterialResolutionStrategy"})," enum, with possible values:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"STATIC"}),": Always the same material id."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"EXPRESSION"}),": Expression that provides the material id."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"FROM_SOURCE_LOCATION"}),": Pull the material from what is currently stored at the source location."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"MANUAL"}),": Supplied by a startOperation script call when the operation is started."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"move_quantity_calc_type",children:(0,t.jsx)(n.code,{children:"move_quantity_calc_type"})}),"\n",(0,t.jsxs)(n.p,{children:["Calculation type for movement quantity, as defined by the ",(0,t.jsx)(n.strong,{children:"CountCalcType"})," enum,\nwith options such as ",(0,t.jsx)(n.code,{children:"DIRECT"}),", and ",(0,t.jsx)(n.code,{children:"RISING"}),". Only used if quantitySource is EXPRESSION."]}),"\n",(0,t.jsx)(n.h3,{id:"move_quantity_expression",children:(0,t.jsx)(n.code,{children:"move_quantity_expression"})}),"\n",(0,t.jsxs)(n.p,{children:["Represents the expression for movement quantity, using the Ignition expression language.\nSee ",(0,t.jsx)(n.a,{href:"https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax",children:"Ignition_expression_language_and_syntax"})," for more details."]}),"\n",(0,t.jsx)(n.h3,{id:"move_quantity_overflow_value",children:(0,t.jsx)(n.code,{children:"move_quantity_overflow_value"})}),"\n",(0,t.jsx)(n.p,{children:"Overflow value for the movement quantity. Only used if quantitySource is EXPRESSION and the moveQuantityCalcType is RISING."}),"\n",(0,t.jsx)(n.h3,{id:"operation_type",children:(0,t.jsx)(n.code,{children:"operation_type"})}),"\n",(0,t.jsxs)(n.p,{children:["Represents the material operation record type, as defined by the ",(0,t.jsx)(n.strong,{children:"OperationMaterialType"})," enum, with options\nsuch as ",(0,t.jsx)(n.code,{children:"CONSUME"}),", ",(0,t.jsx)(n.code,{children:"PRODUCE"}),", ",(0,t.jsx)(n.code,{children:"SCRAP"}),", ",(0,t.jsx)(n.code,{children:"RECEIVE"}),", ",(0,t.jsx)(n.code,{children:"SHIP"}),", ",(0,t.jsx)(n.code,{children:"PRODUCE_SHIP"}),", and ",(0,t.jsx)(n.code,{children:"RECEIVE_CONSUME"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"quantity_source",children:(0,t.jsx)(n.code,{children:"quantity_source"})}),"\n",(0,t.jsxs)(n.p,{children:["Represents the source of the quantity of an operation material, as defined by the ",(0,t.jsx)(n.strong,{children:"QuantitySource"})," enum,\nwith possible values:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"EXPRESSION"}),": Use an expression to calculate the quantity."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"MANUAL"}),": Supplied by a startOperation script call when the operation is started."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"scrap_remaining_inventory",children:(0,t.jsx)(n.code,{children:"scrap_remaining_inventory"})}),"\n",(0,t.jsx)(n.p,{children:"Indicates whether to scrap any remaining material inventory for source location when the operation is active."}),"\n",(0,t.jsx)(n.h3,{id:"start_trigger_expression",children:(0,t.jsx)(n.code,{children:"start_trigger_expression"})}),"\n",(0,t.jsxs)(n.p,{children:["Represents the expression to trigger the start of the transfer of materials, using the Ignition expression language.\nSee ",(0,t.jsx)(n.a,{href:"https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax",children:"Ignition_expression_language_and_syntax"})," for more details."]}),"\n",(0,t.jsx)(n.h3,{id:"start_trigger_type",children:(0,t.jsx)(n.code,{children:"start_trigger_type"})}),"\n",(0,t.jsxs)(n.p,{children:["Trigger type when starting the transfer of materials, as defined by the ",(0,t.jsx)(n.strong,{children:"TriggerType"})," enum,\nwith options such as ",(0,t.jsx)(n.code,{children:"RISING_EDGE"}),", ",(0,t.jsx)(n.code,{children:"FALLING_EDGE"}),", and ",(0,t.jsx)(n.code,{children:"CHANGE"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"status",children:(0,t.jsx)(n.code,{children:"status"})}),"\n",(0,t.jsxs)(n.p,{children:["Represents the status of the operation material, as defined by the ",(0,t.jsx)(n.strong,{children:"Status"})," enum, with options such\nas ",(0,t.jsx)(n.code,{children:"IDLE"}),", ",(0,t.jsx)(n.code,{children:"RUNNING"}),", ",(0,t.jsx)(n.code,{children:"COMPLETED"}),", ",(0,t.jsx)(n.code,{children:"FAULTED"}),", ",(0,t.jsx)(n.code,{children:"CANCELLED"}),", ",(0,t.jsx)(n.code,{children:"UNKNOWN"}),", and ",(0,t.jsx)(n.code,{children:"PAUSED"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"stop_trigger_expression",children:(0,t.jsx)(n.code,{children:"stop_trigger_expression"})}),"\n",(0,t.jsxs)(n.p,{children:["Represents the expression to trigger the end of the transfer of materials, using the Ignition expression language.\nSee ",(0,t.jsx)(n.a,{href:"https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax",children:"Ignition_expression_language_and_syntax"})," for more details."]}),"\n",(0,t.jsx)(n.h3,{id:"stop_trigger_type",children:(0,t.jsx)(n.code,{children:"stop_trigger_type"})}),"\n",(0,t.jsxs)(n.p,{children:["Trigger type when stopping the transfer of materials, as defined by the ",(0,t.jsx)(n.strong,{children:"TriggerType"})," enum,\nwith options such as ",(0,t.jsx)(n.code,{children:"RISING_EDGE"}),", ",(0,t.jsx)(n.code,{children:"FALLING_EDGE"}),", and ",(0,t.jsx)(n.code,{children:"CHANGE"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"trigger_source",children:(0,t.jsx)(n.code,{children:"trigger_source"})}),"\n",(0,t.jsxs)(n.p,{children:["Represents the ways that the various operation materials can trigger, as defined by the ",(0,t.jsx)(n.strong,{children:"TriggerEvaluationStrategy"})," enum, with possible values:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"MANUAL"}),": Manually triggered from a startOperation script."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"EXPRESSION"}),": Triggered via start/end trigger expressions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"PARENT"}),": Triggered at the same time as the parent operation."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"material_id",children:(0,t.jsx)(n.code,{children:"material_id"})}),"\n",(0,t.jsxs)(n.p,{children:["References the ",(0,t.jsx)(n.code,{children:"Material"})," entity associated with this operation material, providing context about the material's characteristics and\nproperties.\nSee ",(0,t.jsx)(n.a,{href:"../material-model/material",children:"materials"})," for details."]}),"\n",(0,t.jsx)(n.h3,{id:"move_location_id",children:(0,t.jsx)(n.code,{children:"move_location_id"})}),"\n",(0,t.jsxs)(n.p,{children:["References the ",(0,t.jsx)(n.code,{children:"Location"})," entity for movement source or destination, allowing precise tracking of where\nthe material lot and inventory is within the facility.\nSee ",(0,t.jsx)(n.a,{href:"../location-model/location",children:"locations"})," for details."]}),"\n",(0,t.jsx)(n.h3,{id:"operation_id",children:(0,t.jsx)(n.code,{children:"operation_id"})}),"\n",(0,t.jsxs)(n.p,{children:["References the ",(0,t.jsx)(n.code,{children:"Operation"})," entity associated with this operation material, providing context to what action is being\nperformed in the MES system.\nSee ",(0,t.jsx)(n.a,{href:"../operation-model/operation",children:"operations"})," for details."]}),"\n",(0,t.jsx)(n.h3,{id:"reason_code_id",children:(0,t.jsx)(n.code,{children:"reason_code_id"})}),"\n",(0,t.jsxs)(n.p,{children:["Optional reference to a ",(0,t.jsx)(n.code,{children:"MaterialReasonCode"})," that provides a reason for running the operation.\nSee ",(0,t.jsx)(n.a,{href:"../material-model/material-reason-code",children:"material_reason_codes"})," for details."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>o});var t=i(6540);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);