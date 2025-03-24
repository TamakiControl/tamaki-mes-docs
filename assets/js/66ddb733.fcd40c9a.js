"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[4340],{10584:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"appendix/data-model/location-model/location-group","title":"location_groups","description":"Documentation for the location_groups table, outlining its columns and structure.","source":"@site/docs/appendix/data-model/location-model/location-group.md","sourceDirName":"appendix/data-model/location-model","slug":"/appendix/data-model/location-model/location-group","permalink":"/tamaki-mes-docs/docs/appendix/data-model/location-model/location-group","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/data-model/location-model/location-group.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"location_groups","description":"Documentation for the location_groups table, outlining its columns and structure."},"sidebar":"tutorialSidebar","previous":{"title":"locations","permalink":"/tamaki-mes-docs/docs/appendix/data-model/location-model/location"},"next":{"title":"location_location_groups","permalink":"/tamaki-mes-docs/docs/appendix/data-model/location-model/location-location-group"}}');var o=i(74848),d=i(28453);const c={sidebar_position:3,title:"location_groups",description:"Documentation for the location_groups table, outlining its columns and structure."},r="Location Group",s={},l=[{value:"Overview",id:"overview",level:2},{value:"Table Structure",id:"table-structure",level:2},{value:"Field Details",id:"field-details",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>description</code>",id:"description",level:3},{value:"Locations",id:"locations",level:3}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"location-group",children:"Location Group"})}),"\n",(0,o.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"LocationGroup"})," entity represents a grouping of locations within the manufacturing environment, allowing for\norganization and categorization of locations based on shared characteristics or purposes. For example, a location group\ncould represent a collection of storage areas or production cells."]}),"\n",(0,o.jsx)(t.h2,{id:"table-structure",children:"Table Structure"}),"\n",(0,o.jsxs)(t.p,{children:["The following table outlines the SQL columns for the ",(0,o.jsx)(t.code,{children:"location_groups"})," table, providing a brief description of each,\nalong with sample data where applicable."]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Column"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"}),(0,o.jsx)(t.th,{children:"Example"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"id"})}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,o.jsx)(t.td,{children:"Unique identifier for the entity."}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"01JAP8RJBN-8ZTPXSGY-J9GSDPE1"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"enabled"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"Boolean"})}),(0,o.jsx)(t.td,{children:"If the entity is enabled or not."}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"true"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"created_date"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"DateTime"})}),(0,o.jsx)(t.td,{children:"Date the entity was created."}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"created_by"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"String"})}),(0,o.jsx)(t.td,{children:"Person who created the entity."}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"TamakiMES"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"modified_date"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"DateTime"})}),(0,o.jsx)(t.td,{children:"Date the entity was created."}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"2024-12-31T19:48:44Z"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"modified_by"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"String"})}),(0,o.jsx)(t.td,{children:"Last person to modify the entity."}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"TamakiMES"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"notes"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"Blob"})}),(0,o.jsx)(t.td,{children:"Notes about the entity."}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"This entity has these extra notes"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"spare1"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"String"})}),(0,o.jsx)(t.td,{children:"The first spare column that can be used for additional context on the entity."}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"some extra context 1"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"spare2"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"String"})}),(0,o.jsx)(t.td,{children:"The second spare column that can be used for additional context on the entity."}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"some extra context 2"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"spare3"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"String"})}),(0,o.jsx)(t.td,{children:"The third spare column that can be used for additional context on the entity."}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"some extra context 3"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"name"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"String"})}),(0,o.jsx)(t.td,{children:"Name of the location group."}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"Storage Areas"})})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"description"})}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"String"})}),(0,o.jsx)(t.td,{children:"Optional description providing details about the location group."}),(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"Group of all storage locations."})})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"field-details",children:"Field Details"}),"\n",(0,o.jsx)(t.h3,{id:"name",children:(0,o.jsx)(t.code,{children:"name"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"name"})," field provides a unique identifier for the location group, used to distinguish it from other groups."]}),"\n",(0,o.jsx)(t.h3,{id:"description",children:(0,o.jsx)(t.code,{children:"description"})}),"\n",(0,o.jsx)(t.p,{children:"An optional field for a more detailed description of the location group, which can provide additional context on its\npurpose or the types of locations it includes."}),"\n",(0,o.jsx)(t.h3,{id:"locations",children:"Locations"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"LocationGroup"})," entity is linked to multiple ",(0,o.jsx)(t.code,{children:"Location"})," entities through a many-to-many relationship. This\nassociation is managed through a join table, ",(0,o.jsx)(t.code,{children:"location_location_groups"}),", which contains the following columns:"]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Column"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"location_group_id"})}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,o.jsxs)(t.td,{children:["References the ",(0,o.jsx)(t.code,{children:"LocationGroup"})," this entry belongs to."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"location_id"})}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,o.jsxs)(t.td,{children:["References the specific ",(0,o.jsx)(t.code,{children:"Location"})," in the group. See ",(0,o.jsx)(t.a,{href:"../location-model/location",children:"locations"}),"."]})]})]})]}),"\n",(0,o.jsxs)(t.p,{children:["The many-to-many relationship allows each ",(0,o.jsx)(t.code,{children:"LocationGroup"})," to contain multiple ",(0,o.jsx)(t.code,{children:"Location"})," entities, and each ",(0,o.jsx)(t.code,{children:"Location"}),"\ncan belong to multiple ",(0,o.jsx)(t.code,{children:"LocationGroups"}),". This structure supports flexible grouping and categorization within the system."]})]})}function h(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>r});var n=i(96540);const o={},d=n.createContext(o);function c(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);