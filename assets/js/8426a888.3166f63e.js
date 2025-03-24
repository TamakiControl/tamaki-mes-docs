"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[9476],{77441:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>n,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"appendix/data-model/material-model/material-property-value","title":"material_property_values","description":"Documentation for the material_property_values table, outlining its columns and structure.","source":"@site/docs/appendix/data-model/material-model/material-property-value.md","sourceDirName":"appendix/data-model/material-model","slug":"/appendix/data-model/material-model/material-property-value","permalink":"/tamaki-mes-docs/docs/appendix/data-model/material-model/material-property-value","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/material-model/material-property-value.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"material_property_values","description":"Documentation for the material_property_values table, outlining its columns and structure."},"sidebar":"tutorialSidebar","previous":{"title":"material_properties","permalink":"/tamaki-mes-docs/docs/appendix/data-model/material-model/material-property"},"next":{"title":"material_reason_codes","permalink":"/tamaki-mes-docs/docs/appendix/data-model/material-model/material-reason-code"}}');var i=d(74848),l=d(28453);const n={sidebar_position:4,title:"material_property_values",description:"Documentation for the material_property_values table, outlining its columns and structure."},s="Material Property Value",a={},c=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>blob_value</code>, <code>date_value</code>, <code>float_value</code>, <code>int_value</code>, <code>string_value</code>",id:"blob_value-date_value-float_value-int_value-string_value",level:3},{value:"<code>material_id</code>",id:"material_id",level:3},{value:"<code>property_id</code>",id:"property_id",level:3}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"material-property-value",children:"Material Property Value"})}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"MaterialPropertyValue"})," entity stores the actual values of properties for specific material instances. Each property\nvalue is linked to a material and its associated property, allowing customization and specific attributes to be set at\nthe individual material level."]}),"\n",(0,i.jsx)(t.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,i.jsxs)(t.p,{children:["The following table outlines the SQL columns for the ",(0,i.jsx)(t.code,{children:"material_property_values"})," table, providing a brief description of\neach, along with sample data where applicable."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Column"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Example"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"id"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(t.td,{children:"Unique identifier for the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"enabled"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Boolean"})}),(0,i.jsx)(t.td,{children:"If the entity is enabled or not."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"true"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"created_date"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"DateTime"})}),(0,i.jsx)(t.td,{children:"Date the entity was created."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"created_by"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Person who created the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"TamakiMES"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"modified_date"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"DateTime"})}),(0,i.jsx)(t.td,{children:"Date the entity was created."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"modified_by"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Last person to modify the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"TamakiMES"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"notes"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Blob"})}),(0,i.jsx)(t.td,{children:"Notes about the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"This entity has these extra notes"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"spare1"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The first spare column that can be used for additional context on the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"some extra context 1"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"spare2"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The second spare column that can be used for additional context on the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"some extra context 2"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"spare3"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The third spare column that can be used for additional context on the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"some extra context 3"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"blob_value"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Blob"})}),(0,i.jsx)(t.td,{children:"Binary data if the property type is binary-compatible."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Binary data"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"data_type"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Data type of the property value, corresponding to the property\u2019s data type."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"FLOAT"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"date_value"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Datetime"})}),(0,i.jsx)(t.td,{children:"Date value for the property if applicable."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"2024-05-01 00:00:00"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"float_value"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Double"})}),(0,i.jsxs)(t.td,{children:["Floating-point value if the property is of type ",(0,i.jsx)(t.code,{children:"FLOAT"}),"."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"10.5"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"int_value"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"BigInt"})}),(0,i.jsxs)(t.td,{children:["Integer value if the property type is ",(0,i.jsx)(t.code,{children:"INTEGER"}),"."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"100"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string_value"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Blob"})}),(0,i.jsxs)(t.td,{children:["String value for the property if the type is ",(0,i.jsx)(t.code,{children:"STRING"}),"."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Property value text"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"material_id"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsxs)(t.td,{children:["References the material to which this property value belongs. See ",(0,i.jsx)(t.a,{href:"../material-model/material",children:"materials"}),"."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"property_id"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsxs)(t.td,{children:["References the property being applied to the material. See ",(0,i.jsx)(t.a,{href:"../material-model/material-property",children:"material_properties"}),"."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"01JAP8RJBN-4VYZUKE1-LY2QHV8X"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"field-details",children:"Field Details"}),"\n",(0,i.jsxs)(t.h3,{id:"blob_value-date_value-float_value-int_value-string_value",children:[(0,i.jsx)(t.code,{children:"blob_value"}),", ",(0,i.jsx)(t.code,{children:"date_value"}),", ",(0,i.jsx)(t.code,{children:"float_value"}),", ",(0,i.jsx)(t.code,{children:"int_value"}),", ",(0,i.jsx)(t.code,{children:"string_value"})]}),"\n",(0,i.jsxs)(t.p,{children:["These columns hold the actual property values, with the relevant field populated based on the ",(0,i.jsx)(t.code,{children:"data_type"})," of the\nproperty. For example:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"blob_value"})," is used if the property is a binary type."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"date_value"})," stores date values."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"float_value"})," holds floating-point values."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"int_value"})," stores integer values."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"string_value"})," holds text-based values."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"material_id",children:(0,i.jsx)(t.code,{children:"material_id"})}),"\n",(0,i.jsxs)(t.p,{children:["References the ",(0,i.jsx)(t.code,{children:"Material"})," entity that this property value is associated with, allowing specific attributes to be\nassigned to individual materials.\nSee ",(0,i.jsx)(t.a,{href:"../material-model/material",children:"materials"})," for details."]}),"\n",(0,i.jsx)(t.h3,{id:"property_id",children:(0,i.jsx)(t.code,{children:"property_id"})}),"\n",(0,i.jsxs)(t.p,{children:["References the ",(0,i.jsx)(t.code,{children:"MaterialProperty"})," entity defining the property being set, enabling customization and unique attributes\nfor materials.\nSee ",(0,i.jsx)(t.a,{href:"../material-model/material-property",children:"material_properties"})," for details."]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,t,d)=>{d.d(t,{R:()=>n,x:()=>s});var r=d(96540);const i={},l=r.createContext(i);function n(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);