"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[5904],{9766:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"appendix/data-model/intro","title":"TamakiMES Data Model Introduction","description":"This document provides an overview of the data model used in TamakiMES. The model is designed to track and manage","source":"@site/docs/appendix/data-model/intro.md","sourceDirName":"appendix/data-model","slug":"/appendix/data-model/intro","permalink":"/tamaki-mes-docs/docs/appendix/data-model/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/intro.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Appendix","permalink":"/tamaki-mes-docs/docs/category/appendix"},"next":{"title":"Location Model Overview","permalink":"/tamaki-mes-docs/docs/appendix/data-model/location-model/intro"}}');var r=i(4848),t=i(8453);const a={},o="TamakiMES Data Model Introduction",d={},l=[{value:"Core Modules and Their Relationships",id:"core-modules-and-their-relationships",level:2},{value:"Common Object Model",id:"common-object-model",level:2},{value:"BaseEntity Class",id:"baseentity-class",level:3},{value:"ULID Generator",id:"ulid-generator",level:3},{value:"How Audit Fields Are Populated",id:"how-audit-fields-are-populated",level:3},{value:"Modular Structure and Interactions",id:"modular-structure-and-interactions",level:2}];function c(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"tamakimes-data-model-introduction",children:"TamakiMES Data Model Introduction"})}),"\n",(0,r.jsxs)(n.p,{children:["This document provides an overview of the data model used in ",(0,r.jsx)(n.strong,{children:"TamakiMES"}),". The model is designed to track and manage\nkey entities involved in manufacturing operations, supporting functions like **OEE (Operational Equipment Effectiveness)\n**, yield and lot tracing, inventory tracking, and production scheduling."]}),"\n",(0,r.jsx)(n.h2,{id:"core-modules-and-their-relationships",children:"Core Modules and Their Relationships"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"data-model.svg",src:i(5086).A+"",width:"3263",height:"2594"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Location"}),(0,r.jsx)(n.br,{}),"\n","Defines where an operation or equipment is located within the factory. The hierarchy includes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Enterprise"}),": The top level, representing the entire organization."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Site"}),": Represents different factory sites."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Area"}),": Subdivisions within a site, like departments."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cell"}),": Smaller areas within an area, such as production cells."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Unit"}),": The smallest functional unit within a cell."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Each piece of equipment or operation is associated with a specific location to provide a clear context for production\ntracking."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Materials"}),(0,r.jsx)(n.br,{}),"\n","Manages the tracking of lots, inventory, and materials in various formats:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cans"}),": Individual units like 16oz or 32oz cans."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cases"}),": Bundled units like 12-pack cases."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Materials are linked to operations, enabling tracking of inventory usage, lot tracing, and yield calculation."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Equipment"}),(0,r.jsx)(n.br,{}),"\n","Includes non-consumable assets like forklifts, valves, pumps, fillers, and totes. This module supports:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Work Orders"}),": Maintenance and repair orders."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Maintenance Tracking"}),": Ensures equipment is operational and logs downtime."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Equipment is assigned to specific operations and locations, contributing to OEE and performance tracking."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Personnel"}),(0,r.jsx)(n.br,{}),"\n","Contains information about the people operating the equipment and running the machines. This includes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Users and Privileges"}),": Access controls for operators, supervisors, and other roles."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Shift Assignments (Shifts)"}),": Assigns personnel to operations based on shifts."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Personnel can be associated with operations and scheduling, ensuring appropriate staffing."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Recipes"}),(0,r.jsx)(n.br,{}),"\n","Manages standard parameters (SPs) and values for operations. Recipes define how products should be processed in\nspecific operations, ensuring consistency and quality control."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Operation"}),(0,r.jsx)(n.br,{}),"\n","Represents the primary production tasks, such as:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Packaging L1 Production"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Blend Production"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Unload Sucrose"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Operations are central to the system and interact with most other modules, including:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Materials"}),": For tracking input and output."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Equipment and Personnel"}),": For associating resources and workforce."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Production Orders and Scheduling"}),": To execute and manage tasks based on production demands."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Performance"}),": To measure efficiency and output quality."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Production Orders"}),(0,r.jsx)(n.br,{}),"\n","Tracks orders and Bill of Materials (BOM) data from an ERP system. Production orders:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Schedule and execute specific operations."}),"\n",(0,r.jsx)(n.li,{children:"Define which materials and recipes to use for production tasks."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Orders are essential for planning and are linked to scheduling, ensuring operations align with production goals."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Scheduling"}),(0,r.jsx)(n.br,{}),"\n","Specifies when an operation should occur, detailing:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Date and Time"}),": Such as \u201c8 AM on Thursday\u201d for specific operations."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Order"}),": Links to production orders."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Materials, Personnel, and Equipment"}),": Allocates necessary resources to meet production schedules."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Scheduling ensures that resources, orders, and personnel align with production timelines and goals."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Performance"}),(0,r.jsx)(n.br,{}),"\n","Tracks Operational Equipment Effectiveness (OEE) and logs downtime:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"OEE Data"}),": Monitors how efficiently the equipment and operations run."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Downtime Logging"}),": Records any time equipment is non-operational, impacting productivity."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The performance data helps in evaluating and improving the efficiency of operations and scheduling."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:["Each module plays a specific role in the overall MES framework, enabling ",(0,r.jsx)(n.strong,{children:"TamakiMES"})," to provide comprehensive,\nreal-time insights into production performance, inventory management, and operational efficiency. The ",(0,r.jsx)(n.strong,{children:"common object\nmodel"})," underpins this structure, ensuring consistency and traceability across all records."]}),"\n",(0,r.jsx)(n.h2,{id:"common-object-model",children:"Common Object Model"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"common object model"})," defines a set of base entities that standardize core fields, provide auditing capabilities,\nand offer flexible, reusable components across the schema. This is primarily achieved through the ",(0,r.jsx)(n.code,{children:"BaseEntity"})," class."]}),"\n",(0,r.jsx)(n.h3,{id:"baseentity-class",children:"BaseEntity Class"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"BaseEntity"})," class serves as the foundation for all major entities in TamakiMES, providing essential fields and\nfunctions such as:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ULID Identifiers"}),": Each entity instance uses a unique, ",(0,r.jsx)(n.strong,{children:"Universally Unique Lexicographically Sortable Identifier (\nULID)"})," as its primary key. ULIDs ensure consistency and traceability, especially in distributed systems, as they are\nboth unique and ordered by time."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ULIDs in TamakiMES can also have their cardinality adjusted to include a hash of a \u201cparent\u201d entity, allowing\nhierarchical relationships."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Audit Fields"}),": The ",(0,r.jsx)(n.code,{children:"BaseEntity"})," class includes standard fields for tracking creation and modification events:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"createdDate"})," and ",(0,r.jsx)(n.code,{children:"createdBy"}),": Automatically populated when a record is created."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"modifiedDate"})," and ",(0,r.jsx)(n.code,{children:"modifiedBy"}),": Updated when a record is modified, enabling traceability of changes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Custom Notes and Spare Fields"}),": Three ",(0,r.jsx)(n.code,{children:"spare"})," fields (",(0,r.jsx)(n.code,{children:"spare1"}),", ",(0,r.jsx)(n.code,{children:"spare2"}),", and ",(0,r.jsx)(n.code,{children:"spare3"}),") are provided as\noptional text fields. These can be customized by users for additional context or metadata as needed."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Status and Metadata"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"enabled"}),": A Boolean field indicating if the entity is active."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"notes"}),": Stores general information related to the entity, supporting more detailed context."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"ulid-generator",children:"ULID Generator"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"ULID"})," generator is implemented as a custom identifier generator in Java. This generator creates ULIDs that are\nunique across distributed systems and lexicographically sortable, which is ideal for systems that log events or need\nconsistent ordering by creation time. The generator:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Combines timestamp and randomness"})," to ensure uniqueness."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Supports prefixing"})," with a custom value, which can be derived from a parent entity, adding flexibility in\nhierarchies."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The generator uses ",(0,r.jsx)(n.strong,{children:"Crockford\u2019s Base32 encoding"})," for encoding the timestamp and random segments, providing compact,\nsortable identifiers."]}),"\n",(0,r.jsx)(n.h3,{id:"how-audit-fields-are-populated",children:"How Audit Fields Are Populated"}),"\n",(0,r.jsxs)(n.p,{children:["The audit fields\u2014",(0,r.jsx)(n.code,{children:"createdBy"}),", ",(0,r.jsx)(n.code,{children:"createdDate"}),", ",(0,r.jsx)(n.code,{children:"modifiedBy"}),", and ",(0,r.jsx)(n.code,{children:"modifiedDate"}),"\u2014are handled automatically within the\ncommon object model. They:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Capture the current system user and timestamp at the time of creation or modification."}),"\n",(0,r.jsx)(n.li,{children:"Ensure every entity maintains a history of who made changes and when, supporting compliance and auditing."}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"modular-structure-and-interactions",children:"Modular Structure and Interactions"}),"\n",(0,r.jsx)(n.p,{children:"TamakiMES is structured into interconnected modules, each handling a specific aspect of manufacturing operations. Below\nis a high-level view of the different modules and how they interact:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Operations Module"}),": Manages production and material operations, including yield tracking and lot tracing. This\nmodule interfaces with:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Inventory Module"})," to update inventory levels based on production or material consumption."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"OEE Module"})," to record performance data and calculate effectiveness based on equipment usage."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OEE Module"}),": Tracks equipment performance and provides OEE calculations. It integrates with:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Equipment Management"})," to gather data on equipment utilization and downtime."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"QA Module"})," to analyze quality issues that may impact OEE scores."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"QA Module"}),": Records quality checks and tracks compliance data. It interacts with:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Inventory Module"})," to link QA data to specific lots and inventory items."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Operations Module"})," for auditing production steps and quality events."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Inventory Module"}),": Manages inventory levels and materials within the plant. It interacts with:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Operations Module"})," to track material consumption and production output."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"QA Module"})," for quality control on incoming and outgoing materials."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"This structure allows TamakiMES to maintain clear boundaries between functional domains while ensuring a cohesive flow\nof data. Each module communicates through well-defined interfaces, leveraging the common object model for consistency\nacross records and facilitating easy integration with external systems."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:["This high-level structure gives users an understanding of how different areas of TamakiMES interact and how the ",(0,r.jsx)(n.strong,{children:"common\nobject model"})," underpins key functionality and consistency across the system."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5086:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/data-model-154f250d7e5ad825f7a604429bf6b028.svg"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var s=i(6540);const r={},t=s.createContext(r);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);