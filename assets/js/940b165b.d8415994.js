"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[1318],{1321:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=d(4848),n=d(8453);const r={sidebar_position:6,title:"location_property_values",description:"Documentation for the location_property_values table, outlining its columns and structure."},o="Location Property Values",l={id:"appendix/data-model/location-model/location-property-value",title:"location_property_values",description:"Documentation for the location_property_values table, outlining its columns and structure.",source:"@site/docs/appendix/data-model/location-model/location-property-value.md",sourceDirName:"appendix/data-model/location-model",slug:"/appendix/data-model/location-model/location-property-value",permalink:"/tamaki-mes-docs/docs/appendix/data-model/location-model/location-property-value",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/location-model/location-property-value.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"location_property_values",description:"Documentation for the location_property_values table, outlining its columns and structure."},sidebar:"tutorialSidebar",previous:{title:"location_properties",permalink:"/tamaki-mes-docs/docs/appendix/data-model/location-model/location-property"},next:{title:"Material Model Overview",permalink:"/tamaki-mes-docs/docs/appendix/data-model/material-model/intro"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>blob_value</code>, <code>date_value</code>, <code>float_value</code>, <code>int_value</code>, <code>string_value</code>",id:"blob_value-date_value-float_value-int_value-string_value",level:3},{value:"<code>location_id</code>",id:"location_id",level:3},{value:"<code>property_id</code>",id:"property_id",level:3},{value:"Relationship Structure",id:"relationship-structure",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"location-property-values",children:"Location Property Values"})}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"LocationPropertyValue"})," entity represents specific property values assigned to individual ",(0,i.jsx)(t.code,{children:"Location"})," entities,\nallowing each location to have customized property settings. This table links properties defined in ",(0,i.jsx)(t.code,{children:"LocationProperty"}),"\nto actual ",(0,i.jsx)(t.code,{children:"Location"})," records, storing values for each assigned property."]}),"\n",(0,i.jsx)(t.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,i.jsxs)(t.p,{children:["The following table outlines the SQL columns for the ",(0,i.jsx)(t.code,{children:"location_property_values"})," table, providing a brief description of\neach."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Column"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Example"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"id"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(t.td,{children:"Unique identifier for the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"enabled"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Boolean"})}),(0,i.jsx)(t.td,{children:"If the entity is enabled or not."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"true"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"created-date"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"DateTime"})}),(0,i.jsx)(t.td,{children:"Date the entity was created."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"created-by"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Person who created the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"TamakiMES"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"modified-date"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"DateTime"})}),(0,i.jsx)(t.td,{children:"Date the entity was created."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"modified-by"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Last person to modify the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"TamakiMES"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"notes"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Blob"})}),(0,i.jsx)(t.td,{children:"Notes about the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"This entity has these extra notes"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"spare1"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The first spare column that can be used for additional context on the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"some extra context 1"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"spare2"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The second spare column that can be used for additional context on the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"some extra context 2"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"spare3"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The third spare column that can be used for additional context on the entity."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"some extra context 3"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"blob_value"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Blob"})}),(0,i.jsx)(t.td,{children:"Binary data if the property type is binary-compatible."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Binary data"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"data_type"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Data type of the property value, corresponding to the property\u2019s data type."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"FLOAT"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"date_value"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Datetime"})}),(0,i.jsx)(t.td,{children:"Date value for the property if applicable."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"2024-05-01 00:00:00"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"float_value"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Double"})}),(0,i.jsxs)(t.td,{children:["Floating-point value if the property is of type ",(0,i.jsx)(t.code,{children:"FLOAT"}),"."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"10.5"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"int_value"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"BigInt"})}),(0,i.jsxs)(t.td,{children:["Integer value if the property type is ",(0,i.jsx)(t.code,{children:"INTEGER"}),"."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"100"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"string_value"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Blob"})}),(0,i.jsxs)(t.td,{children:["String value for the property if the type is ",(0,i.jsx)(t.code,{children:"STRING"}),"."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Property value text"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"location_id"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsxs)(t.td,{children:["References the ",(0,i.jsx)(t.code,{children:"Location"})," associated with this property value. See ",(0,i.jsx)(t.a,{href:"../location-model/location",children:"locations"}),"."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"property_id"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsxs)(t.td,{children:["References the specific ",(0,i.jsx)(t.code,{children:"LocationProperty"})," assigned to the location. See ",(0,i.jsx)(t.a,{href:"../location-model/location-property",children:"location_properties"}),"."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"01JAP8RJBN-4VYZUKE1-LY2QHV8X"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"field-details",children:"Field Details"}),"\n",(0,i.jsxs)(t.h3,{id:"blob_value-date_value-float_value-int_value-string_value",children:[(0,i.jsx)(t.code,{children:"blob_value"}),", ",(0,i.jsx)(t.code,{children:"date_value"}),", ",(0,i.jsx)(t.code,{children:"float_value"}),", ",(0,i.jsx)(t.code,{children:"int_value"}),", ",(0,i.jsx)(t.code,{children:"string_value"})]}),"\n",(0,i.jsxs)(t.p,{children:["These columns hold the actual property values, with the relevant field populated based on the ",(0,i.jsx)(t.code,{children:"data_type"})," of the\nproperty. For example:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"blob_value"})," is used if the property is a binary type."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"date_value"})," stores date values."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"float_value"})," holds floating-point values."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"int_value"})," stores integer values."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"string_value"})," holds text-based values."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"location_id",children:(0,i.jsx)(t.code,{children:"location_id"})}),"\n",(0,i.jsxs)(t.p,{children:["References the ",(0,i.jsx)(t.code,{children:"Location"})," associated with this property value, enabling specific property settings per location.\nSee ",(0,i.jsx)(t.a,{href:"../location-model/location",children:"locations"})," for details on the ",(0,i.jsx)(t.code,{children:"Location"})," entity."]}),"\n",(0,i.jsx)(t.h3,{id:"property_id",children:(0,i.jsx)(t.code,{children:"property_id"})}),"\n",(0,i.jsxs)(t.p,{children:["References the ",(0,i.jsx)(t.code,{children:"LocationProperty"})," assigned to the location, linking to a defined property and its characteristics.\nSee ",(0,i.jsx)(t.a,{href:"../location-model/location-property",children:"location_properties"})," for more information."]}),"\n",(0,i.jsx)(t.h2,{id:"relationship-structure",children:"Relationship Structure"}),"\n",(0,i.jsxs)(t.p,{children:["Each entry in the ",(0,i.jsx)(t.code,{children:"location_property_values"})," table assigns a specific value to a property for an individual location,\nallowing unique configurations across locations. The table uses a composite unique key on ",(0,i.jsx)(t.code,{children:"location_id"})," and\n",(0,i.jsx)(t.code,{children:"property_id"})," to prevent duplicate property assignments for the same location."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,d)=>{d.d(t,{R:()=>o,x:()=>l});var i=d(6540);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);