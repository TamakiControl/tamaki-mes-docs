"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[5340],{1193:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=i(4848),d=i(8453);const n={sidebar_position:3,title:"equipment_properties",description:"Documentation for the equipment_properties table, outlining its columns and structure."},s="Equipment Property",l={id:"appendix/data-model/equipment-model/equipment-properties",title:"equipment_properties",description:"Documentation for the equipment_properties table, outlining its columns and structure.",source:"@site/docs/appendix/data-model/equipment-model/equipment-properties.md",sourceDirName:"appendix/data-model/equipment-model",slug:"/appendix/data-model/equipment-model/equipment-properties",permalink:"/https://docs.tamaki-control.com/docs/appendix/data-model/equipment-model/equipment-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment-properties.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"equipment_properties",description:"Documentation for the equipment_properties table, outlining its columns and structure."},sidebar:"tutorialSidebar",previous:{title:"equipment",permalink:"/https://docs.tamaki-control.com/docs/appendix/data-model/equipment-model/equipment"},next:{title:"equipment_property_values",permalink:"/https://docs.tamaki-control.com/docs/appendix/data-model/equipment-model/equipment-property-values"}},o={},c=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>equipment_class_id</code>",id:"equipment_class_id",level:3},{value:"<code>name</code>",id:"name",level:3},{value:"<code>description</code>",id:"description",level:3},{value:"<code>data_type</code>",id:"data_type",level:3},{value:"<code>default_value</code>",id:"default_value",level:3},{value:"<code>hi_limit</code> and <code>lo_limit</code>",id:"hi_limit-and-lo_limit",level:3},{value:"<code>units</code>",id:"units",level:3}];function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"equipment-property",children:"Equipment Property"})}),"\n",(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"EquipmentProperty"})," entity defines attributes that are shared across all instances of an ",(0,r.jsx)(t.code,{children:"EquipmentClass"}),". For\nexample, an ",(0,r.jsx)(t.code,{children:"EquipmentClass"}),' of "Motor" might have a property such as "Horsepower" that applies to all motors, though\nthe actual values may vary for each individual motor. This structure allows standardized properties for each category of\nequipment.']}),"\n",(0,r.jsx)(t.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,r.jsxs)(t.p,{children:["The following table outlines the SQL columns for the ",(0,r.jsx)(t.code,{children:"equipment_properties"})," table, providing a brief description of\neach, along with sample data where applicable."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Column"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Example"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"id"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,r.jsx)(t.td,{children:"Unique identifier for the equipment property."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"equipment_class_id"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,r.jsx)(t.td,{children:"References the equipment class to which this property belongs."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"name"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:'Name of the property (e.g., "Horsepower").'}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Horsepower"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"description"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"String"})," (max 2048)"]}),(0,r.jsx)(t.td,{children:"Detailed description of the property."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Defines the power output of the motor"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"data_type"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Enum"})}),(0,r.jsx)(t.td,{children:"Data type of the property, specifying the format of the property's values."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"INTEGER"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"default_value"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Object"})}),(0,r.jsx)(t.td,{children:"Default value for the property, used if no specific value is provided."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"100"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"hi_limit"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Double"})}),(0,r.jsx)(t.td,{children:"Optional upper limit for the property value, if applicable."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"150.0"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"lo_limit"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Double"})}),(0,r.jsx)(t.td,{children:"Optional lower limit for the property value, if applicable."}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"50.0"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"units"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:'Units associated with the property value (e.g., "kW" for power).'}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"kW"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"field-details",children:"Field Details"}),"\n",(0,r.jsx)(t.h3,{id:"equipment_class_id",children:(0,r.jsx)(t.code,{children:"equipment_class_id"})}),"\n",(0,r.jsxs)(t.p,{children:["References the ",(0,r.jsx)(t.code,{children:"EquipmentClass"})," that this property applies to. This relationship allows the property to be defined at\nthe class level and inherited by all instances within the class."]}),"\n",(0,r.jsx)(t.h3,{id:"name",children:(0,r.jsx)(t.code,{children:"name"})}),"\n",(0,r.jsx)(t.p,{children:'The name of the property, which provides a clear identifier (e.g., "Horsepower") for the characteristic it represents.'}),"\n",(0,r.jsx)(t.h3,{id:"description",children:(0,r.jsx)(t.code,{children:"description"})}),"\n",(0,r.jsx)(t.p,{children:"An optional field for a more detailed description of the property, with a character limit of 2048. This field can\nprovide additional context about the purpose or specifications of the property."}),"\n",(0,r.jsx)(t.h3,{id:"data_type",children:(0,r.jsx)(t.code,{children:"data_type"})}),"\n",(0,r.jsx)(t.p,{children:"Defines the data type of the property, specifying how the property's values should be interpreted (e.g., as an integer,\nstring, etc.). This helps ensure consistent value formats across instances of the property."}),"\n",(0,r.jsx)(t.h3,{id:"default_value",children:(0,r.jsx)(t.code,{children:"default_value"})}),"\n",(0,r.jsx)(t.p,{children:"An optional default value for the property, which will be applied if no specific value is set for an instance of the\nequipment."}),"\n",(0,r.jsxs)(t.h3,{id:"hi_limit-and-lo_limit",children:[(0,r.jsx)(t.code,{children:"hi_limit"})," and ",(0,r.jsx)(t.code,{children:"lo_limit"})]}),"\n",(0,r.jsx)(t.p,{children:"Optional fields that set upper and lower bounds for the property value, if applicable. These limits help enforce\nacceptable ranges for properties with measurable constraints."}),"\n",(0,r.jsx)(t.h3,{id:"units",children:(0,r.jsx)(t.code,{children:"units"})}),"\n",(0,r.jsx)(t.p,{children:'Specifies the units of measurement for the property (e.g., "kW" for power). This field helps in standardizing the\ninterpretation of values.'})]})}function p(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>l});var r=i(6540);const d={},n=r.createContext(d);function s(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);