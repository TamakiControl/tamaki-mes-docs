"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[7699],{834:(e,d,t)=>{t.r(d),t.d(d,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var i=t(4848),n=t(8453);const r={sidebar_position:3,title:"equipment_properties",description:"Documentation for the equipment_properties table, outlining its columns and structure."},l="Equipment Property",s={id:"appendix/data-model/equipment-model/equipment-property",title:"equipment_properties",description:"Documentation for the equipment_properties table, outlining its columns and structure.",source:"@site/docs/appendix/data-model/equipment-model/equipment-property.md",sourceDirName:"appendix/data-model/equipment-model",slug:"/appendix/data-model/equipment-model/equipment-property",permalink:"/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment-property",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment-property.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"equipment_properties",description:"Documentation for the equipment_properties table, outlining its columns and structure."},sidebar:"tutorialSidebar",previous:{title:"equipment",permalink:"/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment"},next:{title:"equipment_property_values",permalink:"/tamaki-mes-docs/docs/appendix/data-model/equipment-model/equipment-property-value"}},c={},o=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>data_type</code>",id:"data_type",level:3},{value:"<code>default_*_value</code>",id:"default__value",level:3},{value:"<code>format</code>",id:"format",level:3},{value:"<code>high_limit</code> and <code>low_limit</code>",id:"high_limit-and-low_limit",level:3},{value:"<code>nullable</code>",id:"nullable",level:3},{value:"<code>units</code>",id:"units",level:3},{value:"<code>equipment_class_id</code>",id:"equipment_class_id",level:3}];function h(e){const d={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.header,{children:(0,i.jsx)(d.h1,{id:"equipment-property",children:"Equipment Property"})}),"\n",(0,i.jsx)(d.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(d.p,{children:["The ",(0,i.jsx)(d.code,{children:"EquipmentProperty"})," entity defines attributes that are shared across all instances of an ",(0,i.jsx)(d.code,{children:"EquipmentClass"}),". For\nexample, an ",(0,i.jsx)(d.code,{children:"EquipmentClass"}),' of "Motor" might have a property such as "Horsepower" that applies to all motors, though\nthe actual values may vary for each individual motor. This structure allows standardized properties for each category of\nequipment.']}),"\n",(0,i.jsx)(d.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,i.jsxs)(d.p,{children:["The following table outlines the SQL columns for the ",(0,i.jsx)(d.code,{children:"equipment_properties"})," table, providing a brief description of\neach, along with sample data where applicable."]}),"\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"Column"}),(0,i.jsx)(d.th,{children:"Type"}),(0,i.jsx)(d.th,{children:"Description"}),(0,i.jsx)(d.th,{children:"Example"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"id"})}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(d.td,{children:"Unique identifier for the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"enabled"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Boolean"})}),(0,i.jsx)(d.td,{children:"If the entity is enabled or not."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"true"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"created_date"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"DateTime"})}),(0,i.jsx)(d.td,{children:"Date the entity was created."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"created_by"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"Person who created the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"TamakiMES"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"modified_date"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"DateTime"})}),(0,i.jsx)(d.td,{children:"Date the entity was created."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"modified_by"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"Last person to modify the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"TamakiMES"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"notes"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Blob"})}),(0,i.jsx)(d.td,{children:"Notes about the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"This entity has these extra notes"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"spare1"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"The first spare column that can be used for additional context on the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"some extra context 1"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"spare2"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"The second spare column that can be used for additional context on the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"some extra context 2"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"spare3"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"The third spare column that can be used for additional context on the entity."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"some extra context 3"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"data_type"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsxs)(d.td,{children:["Specifies the data type of the property, such as ",(0,i.jsx)(d.code,{children:"INTEGER"})," or ",(0,i.jsx)(d.code,{children:"STRING"}),"."]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"FLOAT"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"default_blob_value"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Blob"})}),(0,i.jsxs)(d.td,{children:["Default binary value for the property if ",(0,i.jsx)(d.code,{children:"data_type"})," is binary-compatible."]}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Binary data"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"default_date_value"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Datetime"})}),(0,i.jsx)(d.td,{children:"Default date value for the property, if applicable."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"2024-05-01 00:00:00"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"default_float_value"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Double"})}),(0,i.jsx)(d.td,{children:"Default floating-point value, if applicable."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"10.5"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"default_int_value"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"BigInt"})}),(0,i.jsx)(d.td,{children:"Default integer value for the property, if applicable."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"100"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"default_string_value"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"Default string value for the property, if applicable."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Default Value"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"description"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"Optional description of the property."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Temperature setting"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"format"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"Optional format string for property display."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"#.##"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"high_limit"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Double"})}),(0,i.jsx)(d.td,{children:"High limit for the property's value, if applicable."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"100.0"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"low_limit"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Double"})}),(0,i.jsx)(d.td,{children:"Low limit for the property's value, if applicable."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"0.0"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"name"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"Unique name of the property across all properties."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"HorsePower"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"nullable"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Boolean"})}),(0,i.jsx)(d.td,{children:"Indicates whether the property value can be null."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"false"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"options"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"Additional options or constraints for the property, if any."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"Option1, Option2"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"units"})}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"String"})}),(0,i.jsx)(d.td,{children:"Units associated with the property, if applicable."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"kW"})})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"equipment_class_id"})}),(0,i.jsxs)(d.td,{children:[(0,i.jsx)(d.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(d.td,{children:"References the equipment class to which this property belongs."}),(0,i.jsx)(d.td,{children:(0,i.jsx)(d.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]})]})]}),"\n",(0,i.jsx)(d.h2,{id:"field-details",children:"Field Details"}),"\n",(0,i.jsx)(d.h3,{id:"data_type",children:(0,i.jsx)(d.code,{children:"data_type"})}),"\n",(0,i.jsxs)(d.p,{children:["Specifies the data type of the property, such as ",(0,i.jsx)(d.code,{children:"INTEGER"}),", ",(0,i.jsx)(d.code,{children:"STRING"}),", ",(0,i.jsx)(d.code,{children:"FLOAT"}),", or ",(0,i.jsx)(d.code,{children:"DATETIME"}),", which defines the kind of\ndata this property holds."]}),"\n",(0,i.jsx)(d.h3,{id:"default__value",children:(0,i.jsx)(d.code,{children:"default_*_value"})}),"\n",(0,i.jsxs)(d.p,{children:["The default value fields (",(0,i.jsx)(d.code,{children:"default_blob_value"}),", ",(0,i.jsx)(d.code,{children:"default_date_value"}),", ",(0,i.jsx)(d.code,{children:"default_float_value"}),", ",(0,i.jsx)(d.code,{children:"default_int_value"}),",\n",(0,i.jsx)(d.code,{children:"default_string_value"}),") specify initial values for the property based on its ",(0,i.jsx)(d.code,{children:"data_type"}),"."]}),"\n",(0,i.jsx)(d.h3,{id:"format",children:(0,i.jsx)(d.code,{children:"format"})}),"\n",(0,i.jsx)(d.p,{children:"An optional field that allows formatting the display of property values, useful for data precision or specific\nformatting needs."}),"\n",(0,i.jsxs)(d.h3,{id:"high_limit-and-low_limit",children:[(0,i.jsx)(d.code,{children:"high_limit"})," and ",(0,i.jsx)(d.code,{children:"low_limit"})]}),"\n",(0,i.jsx)(d.p,{children:"Defines the acceptable range for the property\u2019s values. These constraints help enforce limits on numeric properties."}),"\n",(0,i.jsx)(d.h3,{id:"nullable",children:(0,i.jsx)(d.code,{children:"nullable"})}),"\n",(0,i.jsx)(d.p,{children:"Indicates whether the property can have null values, allowing flexibility in optional or required property\nconfigurations."}),"\n",(0,i.jsx)(d.h3,{id:"units",children:(0,i.jsx)(d.code,{children:"units"})}),"\n",(0,i.jsx)(d.p,{children:'Specifies the units of measurement for the property (e.g., "kW" for power). This field helps in standardizing the\ninterpretation of values.'}),"\n",(0,i.jsxs)(d.p,{children:["This is for display purposes only and is not a reference to any ",(0,i.jsx)(d.a,{href:"../utility-models/unit-of-measure-model/unit-of-measure",children:"unit_of_measure"})," entity."]}),"\n",(0,i.jsx)(d.h3,{id:"equipment_class_id",children:(0,i.jsx)(d.code,{children:"equipment_class_id"})}),"\n",(0,i.jsxs)(d.p,{children:["References the ",(0,i.jsx)(d.code,{children:"EquipmentClass"})," that this property applies to. This relationship allows the property to be defined at\nthe class level and inherited by all instances within the class."]})]})}function a(e={}){const{wrapper:d}={...(0,n.R)(),...e.components};return d?(0,i.jsx)(d,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,d,t)=>{t.d(d,{R:()=>l,x:()=>s});var i=t(6540);const n={},r=i.createContext(n);function l(e){const d=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function s(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(r.Provider,{value:d},e.children)}}}]);