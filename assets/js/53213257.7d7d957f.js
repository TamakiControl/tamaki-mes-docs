"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[3331],{41907:(e,i,d)=>{d.r(i),d.d(i,{assets:()=>c,contentTitle:()=>n,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"appendix/data-model/material-model/material-property","title":"material_properties","description":"Documentation for the material_properties table, outlining its columns and structure.","source":"@site/docs/appendix/data-model/material-model/material-property.md","sourceDirName":"appendix/data-model/material-model","slug":"/appendix/data-model/material-model/material-property","permalink":"/tamaki-mes-docs/docs/appendix/data-model/material-model/material-property","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/material-model/material-property.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"material_properties","description":"Documentation for the material_properties table, outlining its columns and structure."},"sidebar":"tutorialSidebar","previous":{"title":"materials","permalink":"/tamaki-mes-docs/docs/appendix/data-model/material-model/material"},"next":{"title":"material_property_values","permalink":"/tamaki-mes-docs/docs/appendix/data-model/material-model/material-property-value"}}');var r=d(74848),l=d(28453);const s={sidebar_position:3,title:"material_properties",description:"Documentation for the material_properties table, outlining its columns and structure."},n="Material Property",c={},a=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>data_type</code>",id:"data_type",level:3},{value:"<code>default_*_value</code>",id:"default__value",level:3},{value:"<code>name</code>",id:"name",level:3},{value:"<code>description</code>",id:"description",level:3},{value:"<code>high_limit</code> and <code>low_limit</code>",id:"high_limit-and-low_limit",level:3},{value:"<code>format</code>",id:"format",level:3},{value:"<code>nullable</code>",id:"nullable",level:3},{value:"<code>unit_of_measure_id</code>",id:"unit_of_measure_id",level:3},{value:"<code>material_class_id</code>",id:"material_class_id",level:3}];function o(e){const i={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"material-property",children:"Material Property"})}),"\n",(0,r.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"MaterialProperty"})," entity represents properties associated with materials, specifically for a given ",(0,r.jsx)(i.code,{children:"MaterialClass"}),".\nEach property includes details such as data type, description, and value limits, allowing materials within the same\nclass to have standardized attributes while still allowing specific customization."]}),"\n",(0,r.jsx)(i.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,r.jsxs)(i.p,{children:["The following table outlines the SQL columns for the ",(0,r.jsx)(i.code,{children:"material_properties"})," table, providing a brief description of each,\nalong with sample data where applicable."]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Column"}),(0,r.jsx)(i.th,{children:"Type"}),(0,r.jsx)(i.th,{children:"Description"}),(0,r.jsx)(i.th,{children:"Example"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"id"})}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"String"})," (ULID)"]}),(0,r.jsx)(i.td,{children:"Unique identifier for the entity."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"enabled"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Boolean"})}),(0,r.jsx)(i.td,{children:"If the entity is enabled or not."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"true"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"created_date"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"DateTime"})}),(0,r.jsx)(i.td,{children:"Date the entity was created."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"created_by"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"String"})}),(0,r.jsx)(i.td,{children:"Person who created the entity."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"TamakiMES"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"modified_date"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"DateTime"})}),(0,r.jsx)(i.td,{children:"Date the entity was created."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"modified_by"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"String"})}),(0,r.jsx)(i.td,{children:"Last person to modify the entity."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"TamakiMES"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"notes"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Blob"})}),(0,r.jsx)(i.td,{children:"Notes about the entity."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"This entity has these extra notes"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"spare1"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"String"})}),(0,r.jsx)(i.td,{children:"The first spare column that can be used for additional context on the entity."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"some extra context 1"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"spare2"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"String"})}),(0,r.jsx)(i.td,{children:"The second spare column that can be used for additional context on the entity."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"some extra context 2"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"spare3"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"String"})}),(0,r.jsx)(i.td,{children:"The third spare column that can be used for additional context on the entity."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"some extra context 3"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"data_type"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"String"})}),(0,r.jsxs)(i.td,{children:["Specifies the data type of the property, such as ",(0,r.jsx)(i.code,{children:"INTEGER"})," or ",(0,r.jsx)(i.code,{children:"STRING"}),"."]}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Float"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"default_blob_value"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Blob"})}),(0,r.jsxs)(i.td,{children:["Default binary value for the property if ",(0,r.jsx)(i.code,{children:"data_type"})," is binary-compatible."]}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Binary data"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"default_date_value"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Datetime"})}),(0,r.jsx)(i.td,{children:"Default date value for the property, if applicable."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"2024-05-01 00:00:00"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"default_float_value"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Double"})}),(0,r.jsx)(i.td,{children:"Default floating-point value, if applicable."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"10.5"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"default_int_value"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"BigInt"})}),(0,r.jsx)(i.td,{children:"Default integer value for the property, if applicable."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"100"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"default_string_value"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"String"})}),(0,r.jsx)(i.td,{children:"Default string value for the property, if applicable."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Default Value"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"name"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"String"})}),(0,r.jsx)(i.td,{children:"Name of the material property, unique within the material class."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Density"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"description"})}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"String"})," (max 2048)"]}),(0,r.jsx)(i.td,{children:"Detailed description of the material property."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Defines the density of the material"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"high_limit"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Double"})}),(0,r.jsx)(i.td,{children:"Upper limit for the property value, if applicable."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"10.0"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"low_limit"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Double"})}),(0,r.jsx)(i.td,{children:"Lower limit for the property value, if applicable."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"0.1"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"format"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"String"})}),(0,r.jsx)(i.td,{children:"Formatting string for the property, useful for display or input parsing."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"0.00"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"nullable"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Boolean"})}),(0,r.jsx)(i.td,{children:"Indicates if the property value can be null."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"false"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"options"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"String"})}),(0,r.jsx)(i.td,{children:"Additional options or constraints for the property, if any."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Option1, Option2"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"unit_of_measure_id"})}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"String"})," (ULID)"]}),(0,r.jsxs)(i.td,{children:["References the unit of measure for the property. See ",(0,r.jsx)(i.a,{href:"../utility-models/unit-of-measure-model/unit-of-measure",children:"unit_of_measure"}),"."]}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"01JAP8RJBN-4VYZUKE1-LY2QHV8X"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"material_class_id"})}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"String"})," (ULID)"]}),(0,r.jsxs)(i.td,{children:["References the material class to which this property belongs. See ",(0,r.jsx)(i.a,{href:"../material-model/material-class",children:"material_classes"}),"."]}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]})]})]}),"\n",(0,r.jsx)(i.h2,{id:"field-details",children:"Field Details"}),"\n",(0,r.jsx)(i.h3,{id:"data_type",children:(0,r.jsx)(i.code,{children:"data_type"})}),"\n",(0,r.jsxs)(i.p,{children:["Specifies the data type of the property value, allowing properties to be typed as ",(0,r.jsx)(i.code,{children:"String"}),", ",(0,r.jsx)(i.code,{children:"Integer"}),", ",(0,r.jsx)(i.code,{children:"Float"}),", and\nmore, based on the material\u2019s requirements."]}),"\n",(0,r.jsx)(i.h3,{id:"default__value",children:(0,r.jsx)(i.code,{children:"default_*_value"})}),"\n",(0,r.jsxs)(i.p,{children:["The default value fields (",(0,r.jsx)(i.code,{children:"default_blob_value"}),", ",(0,r.jsx)(i.code,{children:"default_date_value"}),", ",(0,r.jsx)(i.code,{children:"default_float_value"}),", ",(0,r.jsx)(i.code,{children:"default_int_value"}),",\n",(0,r.jsx)(i.code,{children:"default_string_value"}),") specify initial values for the property based on its ",(0,r.jsx)(i.code,{children:"data_type"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"name",children:(0,r.jsx)(i.code,{children:"name"})}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"name"}),' field is a descriptive identifier for the material property, such as "Density" or "Color."']}),"\n",(0,r.jsx)(i.h3,{id:"description",children:(0,r.jsx)(i.code,{children:"description"})}),"\n",(0,r.jsx)(i.p,{children:"An optional, detailed description of the property that provides additional context or usage information."}),"\n",(0,r.jsxs)(i.h3,{id:"high_limit-and-low_limit",children:[(0,r.jsx)(i.code,{children:"high_limit"})," and ",(0,r.jsx)(i.code,{children:"low_limit"})]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"high_limit"}),": The maximum allowable value for the property, if applicable."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"low_limit"}),": The minimum allowable value for the property, if applicable."]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"These fields are particularly useful for numeric properties, ensuring that values remain within an acceptable range."}),"\n",(0,r.jsx)(i.h3,{id:"format",children:(0,r.jsx)(i.code,{children:"format"})}),"\n",(0,r.jsx)(i.p,{children:"An optional field for defining how the property should be displayed or input, such as a numeric format string."}),"\n",(0,r.jsx)(i.h3,{id:"nullable",children:(0,r.jsx)(i.code,{children:"nullable"})}),"\n",(0,r.jsxs)(i.p,{children:["Indicates if the property value is required or can be left empty (",(0,r.jsx)(i.code,{children:"null"}),")."]}),"\n",(0,r.jsx)(i.h3,{id:"unit_of_measure_id",children:(0,r.jsx)(i.code,{children:"unit_of_measure_id"})}),"\n",(0,r.jsxs)(i.p,{children:["References the unit of measure applicable to this property, such as kilograms or liters, supporting context for values as well as conversions.\nSee ",(0,r.jsx)(i.a,{href:"../utility-models/unit-of-measure-model/unit-of-measure",children:"unit_of_measure"})," for details."]}),"\n",(0,r.jsxs)(i.p,{children:["This is for display purposes only and is not a reference to any ",(0,r.jsx)(i.a,{href:"../utility-models/unit-of-measure-model/unit-of-measure",children:"unit_of_measure"})," entity."]}),"\n",(0,r.jsx)(i.h3,{id:"material_class_id",children:(0,r.jsx)(i.code,{children:"material_class_id"})}),"\n",(0,r.jsxs)(i.p,{children:["References the ",(0,r.jsx)(i.code,{children:"MaterialClass"})," entity associated with this property, ensuring that each material within the class can\nshare common properties.",(0,r.jsx)(i.br,{}),"\n","See ",(0,r.jsx)(i.a,{href:"../material-model/material-class",children:"material_classes"})," for details."]})]})}function h(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,i,d)=>{d.d(i,{R:()=>s,x:()=>n});var t=d(96540);const r={},l=t.createContext(r);function s(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function n(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);