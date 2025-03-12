"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[2239],{9100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"appendix/data-model/location-model/location","title":"locations","description":"Documentation for the locations table, outlining its columns and structure.","source":"@site/docs/appendix/data-model/location-model/location.md","sourceDirName":"appendix/data-model/location-model","slug":"/appendix/data-model/location-model/location","permalink":"/tamaki-mes-docs/docs/appendix/data-model/location-model/location","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/location-model/location.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"locations","description":"Documentation for the locations table, outlining its columns and structure."},"sidebar":"tutorialSidebar","previous":{"title":"Location Model Overview","permalink":"/tamaki-mes-docs/docs/appendix/data-model/location-model/intro"},"next":{"title":"location_groups","permalink":"/tamaki-mes-docs/docs/appendix/data-model/location-model/location-group"}}');var d=n(4848),s=n(8453);const r={sidebar_position:2,title:"locations",description:"Documentation for the locations table, outlining its columns and structure."},c="Location",o={},l=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>parent_id</code>",id:"parent_id",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"<code>process_type</code>",id:"process_type",level:3},{value:"<code>sort_order</code>",id:"sort_order",level:3},{value:"<code>allow_negative_inventory</code>",id:"allow_negative_inventory",level:3},{value:"<code>storage_capacity</code> and <code>storage_capacity_unit_id</code>",id:"storage_capacity-and-storage_capacity_unit_id",level:3},{value:"<code>lot_storage_strategy</code> and <code>lot_use_strategy</code>",id:"lot_storage_strategy-and-lot_use_strategy",level:3},{value:"<code>path</code>",id:"path",level:3}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.header,{children:(0,d.jsx)(t.h1,{id:"location",children:"Location"})}),"\n",(0,d.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,d.jsxs)(t.p,{children:["The ",(0,d.jsx)(t.code,{children:"Location"})," entity represents individual locations within the manufacturing environment, organized in a hierarchical\nstructure. Locations have attributes such as type, process type, and storage capabilities, supporting a wide range of\nmanufacturing and storage needs. This flexible structure enables configurations from high-level company sites to\nspecific production units."]}),"\n",(0,d.jsx)(t.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,d.jsxs)(t.p,{children:["The following table outlines the SQL columns for the ",(0,d.jsx)(t.code,{children:"locations"})," table, providing a brief description of each, along\nwith sample data where applicable."]}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Column"}),(0,d.jsx)(t.th,{children:"Type"}),(0,d.jsx)(t.th,{children:"Description"}),(0,d.jsx)(t.th,{children:"Example"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"id"})}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,d.jsx)(t.td,{children:"Unique identifier for the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"enabled"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Boolean"})}),(0,d.jsx)(t.td,{children:"If the entity is enabled or not."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"true"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"created_date"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"DateTime"})}),(0,d.jsx)(t.td,{children:"Date the entity was created."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"created_by"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsx)(t.td,{children:"Person who created the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"TamakiMES"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"modified_date"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"DateTime"})}),(0,d.jsx)(t.td,{children:"Date the entity was created."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"modified_by"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsx)(t.td,{children:"Last person to modify the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"TamakiMES"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"notes"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Blob"})}),(0,d.jsx)(t.td,{children:"Notes about the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"This entity has these extra notes"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"spare1"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsx)(t.td,{children:"The first spare column that can be used for additional context on the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"some extra context 1"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"spare2"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsx)(t.td,{children:"The second spare column that can be used for additional context on the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"some extra context 2"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"spare3"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsx)(t.td,{children:"The third spare column that can be used for additional context on the entity."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"some extra context 3"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"name"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsx)(t.td,{children:"Name of the location. Required and unique within the parent location."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Warehouse A"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"description"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsx)(t.td,{children:"Optional description of the location."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Main storage warehouse"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"parent_id"})}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,d.jsxs)(t.td,{children:["References the parent location, creating a hierarchical structure. See ",(0,d.jsx)(t.a,{href:"../location-model/location",children:"locations"}),"."]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"01JAP8R5RT-3FPXQABY-7KQZT6VF"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"type"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsxs)(t.td,{children:["Type of the location, specifying its role within the hierarchy, as defined by the ",(0,d.jsx)(t.strong,{children:"LocationType"})," enum."]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"SITE"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"process_type"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsxs)(t.td,{children:["Type of process supported by the location, such as storage or continuous process, as defined by the ",(0,d.jsx)(t.strong,{children:"ProcessType"})," enum."]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"STORAGE"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"sort_order"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Integer"})}),(0,d.jsx)(t.td,{children:"Defines the order of locations within the hierarchy."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"1"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"allow_negative_inventory"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Boolean"})}),(0,d.jsx)(t.td,{children:"Allows or disallows negative inventory at the location."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"storage_capacity"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"Double"})}),(0,d.jsxs)(t.td,{children:["Specifies the maximum storage capacity, or ",(0,d.jsx)(t.code,{children:"null"})," for no limit."]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"10000.0"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"storage_capacity_unit_id"})}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,d.jsxs)(t.td,{children:["References the unit of measure for storage capacity. See ",(0,d.jsx)(t.a,{href:"../utility-models/unit-of-measure-model/unit-of-measure",children:"unit_of_measure"}),"."]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"01JAP8RJBN-4VYZUKE1-LY2QHV8X"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"lot_storage_strategy"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsxs)(t.td,{children:["Strategy for storing different numbers of lots, as defined by the ",(0,d.jsx)(t.strong,{children:"LotStorageStrategy"})," enum."]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"KEEP_PREVIOUS"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"lot_use_strategy"})}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"String"})}),(0,d.jsxs)(t.td,{children:["Strategy for using inventory lots, such as FIFO or LIFO, as defined by the ",(0,d.jsx)(t.strong,{children:"LotUseStrategy"})," enum."]}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"FIFO"})})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"path"})}),(0,d.jsxs)(t.td,{children:[(0,d.jsx)(t.code,{children:"String"})," (unique)"]}),(0,d.jsx)(t.td,{children:"Unique path for the location, generated based on the hierarchy."}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"/Warehouse/Site1/UnitA"})})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"field-details",children:"Field Details"}),"\n",(0,d.jsx)(t.h3,{id:"parent_id",children:(0,d.jsx)(t.code,{children:"parent_id"})}),"\n",(0,d.jsxs)(t.p,{children:["References the parent ",(0,d.jsx)(t.code,{children:"Location"}),", enabling a hierarchical structure across locations.\nSee ",(0,d.jsx)(t.a,{href:"../location-model/location",children:"locations"})," for details."]}),"\n",(0,d.jsx)(t.h3,{id:"type",children:(0,d.jsx)(t.code,{children:"type"})}),"\n",(0,d.jsxs)(t.p,{children:["Defines the type of the location, based on the ",(0,d.jsx)(t.strong,{children:"LocationType"})," enum, which includes options such as ",(0,d.jsx)(t.code,{children:"ENTERPRISE"}),", ",(0,d.jsx)(t.code,{children:"COMPANY"}),", ",(0,d.jsx)(t.code,{children:"SITE"}),", ",(0,d.jsx)(t.code,{children:"AREA"}),", ",(0,d.jsx)(t.code,{children:"LINE"}),", ",(0,d.jsx)(t.code,{children:"CELL_GROUP"}),", ",(0,d.jsx)(t.code,{children:"CELL"}),", and ",(0,d.jsx)(t.code,{children:"UNIT"}),".\nEach type supports a specific role in the hierarchy, from top-level organizations to\nindividual units."]}),"\n",(0,d.jsx)(t.h3,{id:"process_type",children:(0,d.jsx)(t.code,{children:"process_type"})}),"\n",(0,d.jsxs)(t.p,{children:["Specifies the type of process the location supports, using the ",(0,d.jsx)(t.strong,{children:"ProcessType"})," enum. This allows each location to be\nconfigured as ",(0,d.jsx)(t.code,{children:"STORAGE"}),", ",(0,d.jsx)(t.code,{children:"CONTINUOUS"}),", ",(0,d.jsx)(t.code,{children:"BATCH"}),", ",(0,d.jsx)(t.code,{children:"DISCRETE"}),", or ",(0,d.jsx)(t.code,{children:"NONE"}),"."]}),"\n",(0,d.jsx)(t.h3,{id:"sort_order",children:(0,d.jsx)(t.code,{children:"sort_order"})}),"\n",(0,d.jsx)(t.p,{children:"Determines the display or processing order within the location hierarchy, ensuring that locations are organized\nconsistently."}),"\n",(0,d.jsx)(t.h3,{id:"allow_negative_inventory",children:(0,d.jsx)(t.code,{children:"allow_negative_inventory"})}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:"allow_negative_inventory"}),": Specifies whether the location permits negative inventory, useful for locations where\noverdraws may be intentional."]}),"\n"]}),"\n",(0,d.jsxs)(t.h3,{id:"storage_capacity-and-storage_capacity_unit_id",children:[(0,d.jsx)(t.code,{children:"storage_capacity"})," and ",(0,d.jsx)(t.code,{children:"storage_capacity_unit_id"})]}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:"storage_capacity"}),": Defines the maximum storage capacity for the location, with ",(0,d.jsx)(t.code,{children:"null"})," indicating no limit."]}),"\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:"storage_capacity_unit_id"}),": References the unit of measure for capacity, allowing units such as kilograms, liters,\nor other relevant measures.\nSee ",(0,d.jsx)(t.a,{href:"../utility-models/unit-of-measure-model/unit-of-measure",children:"unit_of_measure"})," for details."]}),"\n"]}),"\n",(0,d.jsxs)(t.h3,{id:"lot_storage_strategy-and-lot_use_strategy",children:[(0,d.jsx)(t.code,{children:"lot_storage_strategy"})," and ",(0,d.jsx)(t.code,{children:"lot_use_strategy"})]}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:"lot_storage_strategy"}),": Determines how many lots can be stored in a location, using the ",(0,d.jsx)(t.strong,{children:"LotStorageStrategy"})," enum, with options like ",(0,d.jsx)(t.code,{children:"ALLOW_MULTIPLE"}),", ",(0,d.jsx)(t.code,{children:"ALLOW_SINGLE_OR_THROW"}),", ",(0,d.jsx)(t.code,{children:"MERGE_INTO_PREVIOUS"}),", ",(0,d.jsx)(t.code,{children:"MERGE_INTO_NEW"}),", and ",(0,d.jsx)(t.code,{children:"NO_STORAGE"}),"."]}),"\n",(0,d.jsxs)(t.li,{children:[(0,d.jsx)(t.strong,{children:"lot_use_strategy"}),": Specifies the order in which inventory lots are consumed, using the ",(0,d.jsx)(t.strong,{children:"LotUseStrategy"})," enum, with options like ",(0,d.jsx)(t.code,{children:"FIFO"}),", ",(0,d.jsx)(t.code,{children:"LIFO"}),", and ",(0,d.jsx)(t.code,{children:"FEFO"}),"."]}),"\n"]}),"\n",(0,d.jsx)(t.h3,{id:"path",children:(0,d.jsx)(t.code,{children:"path"})}),"\n",(0,d.jsxs)(t.p,{children:["The ",(0,d.jsx)(t.code,{children:"path"})," is a unique identifier for the location, automatically generated based on the location name and hierarchy,\nensuring easy navigation within the facility structure."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(6540);const d={},s=i.createContext(d);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);