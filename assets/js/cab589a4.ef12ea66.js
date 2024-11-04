"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[6366],{4800:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(4848),d=i(8453);const s={sidebar_position:5,title:"equipment_maintenance_plans",description:"Documentation for the equipment_maintenance_plans table, outlining its columns and structure."},r="Equipment Maintenance Plan",a={id:"appendix/data-model/equipment-model/equipment-maintenance-plans",title:"equipment_maintenance_plans",description:"Documentation for the equipment_maintenance_plans table, outlining its columns and structure.",source:"@site/docs/appendix/data-model/equipment-model/equipment-maintenance-plans.md",sourceDirName:"appendix/data-model/equipment-model",slug:"/appendix/data-model/equipment-model/equipment-maintenance-plans",permalink:"/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment-maintenance-plans",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment-maintenance-plans.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"equipment_maintenance_plans",description:"Documentation for the equipment_maintenance_plans table, outlining its columns and structure."},sidebar:"tutorialSidebar",previous:{title:"equipment_property_values",permalink:"/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment-property-values"},next:{title:"equipment_maintenance_orders",permalink:"/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment-maintenance-orders"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>description</code>",id:"description",level:3},{value:"<code>trigger_type</code>",id:"trigger_type",level:3},{value:"<code>trigger_expression</code>",id:"trigger_expression",level:3},{value:"<code>equipment_id</code>",id:"equipment_id",level:3},{value:"<code>department_id</code>",id:"department_id",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"equipment-maintenance-plan",children:"Equipment Maintenance Plan"})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"EquipmentMaintenancePlan"})," entity defines maintenance schedules and triggers for specific pieces of equipment. These\nplans specify when maintenance should occur, the triggering conditions, and the department responsible. This enables\nproactive and automated maintenance scheduling based on predefined criteria."]}),"\n",(0,t.jsx)(n.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,t.jsxs)(n.p,{children:["The following table outlines the SQL columns for the ",(0,t.jsx)(n.code,{children:"equipment_maintenance_plans"})," table, providing a brief description\nof each, along with sample data where applicable."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Column"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"id"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"String"})," (ULID)"]}),(0,t.jsx)(n.td,{children:"Unique identifier for the maintenance plan."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"description"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"String"})," (max 2048)"]}),(0,t.jsx)(n.td,{children:"Detailed description of the maintenance plan."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Quarterly inspection of forklift"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"trigger_type"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Enum"})}),(0,t.jsxs)(n.td,{children:["The type of trigger that initiates maintenance. Possible values: ",(0,t.jsx)(n.code,{children:"MANUAL"}),", ",(0,t.jsx)(n.code,{children:"EXPRESSION"}),", ",(0,t.jsx)(n.code,{children:"CRONTAB"}),"."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"CRONTAB"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"trigger_expression"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsx)(n.td,{children:"An optional expression that defines the trigger condition (e.g., cron syntax)."}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"0 0 * * 1"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"equipment_id"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"String"})," (ULID)"]}),(0,t.jsxs)(n.td,{children:["References the specific equipment this maintenance plan applies to. See ",(0,t.jsx)(n.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment",children:"equipment"}),"."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"department_id"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"String"})," (ULID)"]}),(0,t.jsxs)(n.td,{children:["References the department responsible for carrying out the maintenance. See ",(0,t.jsx)(n.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/personnel-model/personnel_departments",children:"personnel_departments"}),"."]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"01JAP8RJBN-4VYZUKE1-LY2QHV8X"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"field-details",children:"Field Details"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:(0,t.jsx)(n.code,{children:"description"})}),"\n",(0,t.jsx)(n.p,{children:"An optional field for a longer description of the maintenance plan, with a character limit of 2048. This field provides\ncontext on the type and purpose of the maintenance."}),"\n",(0,t.jsx)(n.h3,{id:"trigger_type",children:(0,t.jsx)(n.code,{children:"trigger_type"})}),"\n",(0,t.jsx)(n.p,{children:"Defines the trigger type for initiating a maintenance order. The possible values are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"MANUAL"}),": Maintenance is manually initiated."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"EXPRESSION"}),": Triggered by an expression, such as a PLC condition."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CRONTAB"}),": Triggered by a cron-like schedule, allowing for regular, automated maintenance."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"trigger_expression",children:(0,t.jsx)(n.code,{children:"trigger_expression"})}),"\n",(0,t.jsxs)(n.p,{children:["An optional field that stores the condition or schedule for maintenance, typically used with ",(0,t.jsx)(n.code,{children:"EXPRESSION"})," or ",(0,t.jsx)(n.code,{children:"CRONTAB"}),"\ntrigger types."]}),"\n",(0,t.jsx)(n.h3,{id:"equipment_id",children:(0,t.jsx)(n.code,{children:"equipment_id"})}),"\n",(0,t.jsxs)(n.p,{children:["References the specific ",(0,t.jsx)(n.code,{children:"Equipment"})," item this maintenance plan applies to, enabling targeted scheduling for individual\npieces of equipment. See ",(0,t.jsx)(n.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment",children:"equipment"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"department_id",children:(0,t.jsx)(n.code,{children:"department_id"})}),"\n",(0,t.jsxs)(n.p,{children:["References the ",(0,t.jsx)(n.code,{children:"PersonnelDepartment"})," responsible for executing the maintenance plan, ensuring accountability and\nresource allocation. See ",(0,t.jsx)(n.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/personnel-model/personnel_departments",children:"personnel_departments"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(6540);const d={},s=t.createContext(d);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);