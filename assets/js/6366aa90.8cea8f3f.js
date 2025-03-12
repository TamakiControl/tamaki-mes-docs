"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[5731],{9979:(o,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"appendix/data-model/location-model/intro","title":"Location Model Overview","description":"The Location model in TamakiMES is designed to represent the hierarchical structure and characteristics of","source":"@site/docs/appendix/data-model/location-model/intro.md","sourceDirName":"appendix/data-model/location-model","slug":"/appendix/data-model/location-model/intro","permalink":"/tamaki-mes-docs/docs/appendix/data-model/location-model/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/location-model/intro.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"TamakiMES Data Model Introduction","permalink":"/tamaki-mes-docs/docs/appendix/data-model/intro"},"next":{"title":"locations","permalink":"/tamaki-mes-docs/docs/appendix/data-model/location-model/location"}}');var i=n(4848),a=n(8453);const r={},c="Location Model Overview",s={},l=[{value:"1. Location",id:"1-location",level:3},{value:"2. LocationGroup",id:"2-locationgroup",level:3},{value:"3. Location-LocationGroup",id:"3-location-locationgroup",level:3},{value:"4. LocationProperty",id:"4-locationproperty",level:3},{value:"5. LocationPropertyValue",id:"5-locationpropertyvalue",level:3},{value:"Summary",id:"summary",level:2}];function d(o){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",strong:"strong",...(0,a.R)(),...o.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"location-model-overview",children:"Location Model Overview"})}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.strong,{children:"Location"})," model in ",(0,i.jsx)(e.em,{children:"TamakiMES"})," is designed to represent the hierarchical structure and characteristics of\nphysical locations within a manufacturing environment. Each location can be a part of a larger organizational structure,\nsupport specific types of processes, and include attributes like storage capabilities, inventory strategies, and maximum\ncapacities."]}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h3,{id:"1-location",children:"1. Location"}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.strong,{children:"Location"})," entity represents physical or logical locations within the facility. Locations are hierarchical and can\nbe of various types, such as ",(0,i.jsx)(e.code,{children:"ENTERPRISE"}),", ",(0,i.jsx)(e.code,{children:"SITE"}),", ",(0,i.jsx)(e.code,{children:"AREA"}),", or ",(0,i.jsx)(e.code,{children:"UNIT"}),", allowing flexible representation from high-level\ncompany structures down to specific production units."]}),"\n",(0,i.jsx)(e.h3,{id:"2-locationgroup",children:"2. LocationGroup"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"LocationGroup"})," enables the creation of logical groupings of locations. These groups are useful for organizing\nlocations into sets that can be managed collectively, such as grouping all locations in a specific department or\nproduction area."]}),"\n",(0,i.jsx)(e.h3,{id:"3-location-locationgroup",children:"3. Location-LocationGroup"}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.strong,{children:"location_location_groups"})," table is a join table that establishes a many-to-many relationship between the ",(0,i.jsx)(e.strong,{children:"Location"})," and\n",(0,i.jsx)(e.strong,{children:"LocationGroup"})," entities. This structure enables locations to be organized into various groups, which can be used for\ncategorization, reporting, and managing subsets of locations within the manufacturing environment."]}),"\n",(0,i.jsx)(e.h3,{id:"4-locationproperty",children:"4. LocationProperty"}),"\n",(0,i.jsx)(e.p,{children:'Defines a property that can apply to multiple locations, such as "Temperature Control" or "Storage Type."'}),"\n",(0,i.jsx)(e.h3,{id:"5-locationpropertyvalue",children:"5. LocationPropertyValue"}),"\n",(0,i.jsx)(e.p,{children:"Stores the actual values of properties for specific locations, allowing each location to have unique characteristics\nbased on its configuration."}),"\n",(0,i.jsx)(e.hr,{}),"\n",(0,i.jsx)(e.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(e.p,{children:["The Location model in ",(0,i.jsx)(e.em,{children:"TamakiMES"})," provides a robust framework for organizing, managing, and configuring the physical and\nlogical layout of a manufacturing facility. Through hierarchical locations, groupings, and customizable properties, the\nmodel supports complex facility structures and flexible inventory strategies."]})]})}function p(o={}){const{wrapper:e}={...(0,a.R)(),...o.components};return e?(0,i.jsx)(e,{...o,children:(0,i.jsx)(d,{...o})}):d(o)}},8453:(o,e,n)=>{n.d(e,{R:()=>r,x:()=>c});var t=n(6540);const i={},a=t.createContext(i);function r(o){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function c(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(i):o.components||i:r(o.components),t.createElement(a.Provider,{value:e},o.children)}}}]);