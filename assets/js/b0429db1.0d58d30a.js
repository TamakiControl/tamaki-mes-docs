"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[7763],{9873:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=d(4848),n=d(8453);const r={sidebar_position:4,title:"equipment_property_values",description:"Documentation for the equipment_property_values table, outlining its columns and structure."},s="Equipment Property Value",l={id:"appendix/data-model/equipment-model/equipment-property-value",title:"equipment_property_values",description:"Documentation for the equipment_property_values table, outlining its columns and structure.",source:"@site/docs/appendix/data-model/equipment-model/equipment-property-value.md",sourceDirName:"appendix/data-model/equipment-model",slug:"/appendix/data-model/equipment-model/equipment-property-value",permalink:"/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment-property-value",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment-property-value.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"equipment_property_values",description:"Documentation for the equipment_property_values table, outlining its columns and structure."},sidebar:"tutorialSidebar",previous:{title:"equipment_properties",permalink:"/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment-property"},next:{title:"equipment_maintenance_plans",permalink:"/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment-maintenance-plan"}},c={},o=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>blob_value</code>, <code>date_value</code>, <code>float_value</code>, <code>int_value</code>, <code>string_value</code>",id:"blob_value-date_value-float_value-int_value-string_value",level:3},{value:"<code>equipment_id</code>",id:"equipment_id",level:3},{value:"<code>property_id</code>",id:"property_id",level:3}];function h(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"equipment-property-value",children:"Equipment Property Value"})}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"EquipmentPropertyValue"})," entity represents the value of a property for a specific instance of ",(0,i.jsx)(t.code,{children:"Equipment"}),". While\n",(0,i.jsx)(t.code,{children:"EquipmentProperty"})," defines attributes at the class level, ",(0,i.jsx)(t.code,{children:"EquipmentPropertyValue"}),' provides the actual values for each\nproperty on individual equipment items. For example, if "Horsepower" is a property of the "Motor" equipment class, then\n',(0,i.jsx)(t.code,{children:"EquipmentPropertyValue"})," stores the specific horsepower of each motor."]}),"\n",(0,i.jsx)(t.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,i.jsxs)(t.p,{children:["The following table outlines the SQL columns for the ",(0,i.jsx)(t.code,{children:"equipment_property_values"})," table, providing a brief description of\neach, along with sample data where applicable."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Column"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Example"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"id"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(t.td,{children:"Unique identifier for the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"enabled"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Boolean"})}),(0,i.jsx)(t.td,{children:"If the entity is enabled or not."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"true"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"created_date"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"DateTime"})}),(0,i.jsx)(t.td,{children:"Date the entity was created."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"created_by"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Person who created the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"TamakiMES"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"modified_date"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"DateTime"})}),(0,i.jsx)(t.td,{children:"Date the entity was created."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"modified_by"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Last person to modify the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"TamakiMES"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"notes"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Blob"})}),(0,i.jsx)(t.td,{children:"Notes about the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"This entity has these extra notes"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"spare1"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The first spare column that can be used for additional context on the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"some extra context 1"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"spare2"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The second spare column that can be used for additional context on the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"some extra context 2"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"spare3"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The third spare column that can be used for additional context on the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"some extra context 3"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"blob_value"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Blob"})}),(0,i.jsx)(t.td,{children:"Binary data if the property type is binary-compatible."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Binary data"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"data_type"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Data type of the property value, corresponding to the property\u2019s data type."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"FLOAT"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"date_value"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Datetime"})}),(0,i.jsx)(t.td,{children:"Date value for the property if applicable."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"2024-05-01 00:00:00"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"float_value"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Double"})}),(0,i.jsxs)(t.td,{children:["Floating-point value if the property is of type ",(0,i.jsx)(t.code,{children:"FLOAT"}),"."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"10.5"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"int_value"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"BigInt"})}),(0,i.jsxs)(t.td,{children:["Integer value if the property type is ",(0,i.jsx)(t.code,{children:"INTEGER"}),"."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"100"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string_value"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Blob"})}),(0,i.jsxs)(t.td,{children:["String value for the property if the type is ",(0,i.jsx)(t.code,{children:"STRING"}),"."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Property value text"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"equipment_id"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(t.td,{children:"References the specific equipment to which this property value applies."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"property_id"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsxs)(t.td,{children:["References the ",(0,i.jsx)(t.code,{children:"EquipmentProperty"})," that defines the property being valued."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"01JAP8R5RT-9WTGQRQW-Y3XCRTXF"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"field-details",children:"Field Details"}),"\n",(0,i.jsxs)(t.h3,{id:"blob_value-date_value-float_value-int_value-string_value",children:[(0,i.jsx)(t.code,{children:"blob_value"}),", ",(0,i.jsx)(t.code,{children:"date_value"}),", ",(0,i.jsx)(t.code,{children:"float_value"}),", ",(0,i.jsx)(t.code,{children:"int_value"}),", ",(0,i.jsx)(t.code,{children:"string_value"})]}),"\n",(0,i.jsxs)(t.p,{children:["These columns hold the actual property values, with the relevant field populated based on the ",(0,i.jsx)(t.code,{children:"data_type"})," of the\nproperty. For example:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"blob_value"})," is used if the property is a binary type."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"date_value"})," stores date values."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"float_value"})," holds floating-point values."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"int_value"})," stores integer values."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"string_value"})," holds text-based values."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"equipment_id",children:(0,i.jsx)(t.code,{children:"equipment_id"})}),"\n",(0,i.jsxs)(t.p,{children:["References the specific ",(0,i.jsx)(t.code,{children:"Equipment"})," item this property value is associated with, allowing each piece of equipment to\nhave unique property values based on its actual configuration."]}),"\n",(0,i.jsx)(t.h3,{id:"property_id",children:(0,i.jsx)(t.code,{children:"property_id"})}),"\n",(0,i.jsxs)(t.p,{children:["Links to the ",(0,i.jsx)(t.code,{children:"EquipmentProperty"}),' that defines the attribute being valued (e.g., "Horsepower"). This association allows\n',(0,i.jsx)(t.code,{children:"EquipmentPropertyValue"})," to inherit metadata, such as limits or units, from the property definition."]})]})}function a(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,d)=>{d.d(t,{R:()=>s,x:()=>l});var i=d(6540);const n={},r=i.createContext(n);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);