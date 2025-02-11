"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[3821],{1090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>a});var i=n(4848),s=n(8453);const d={sidebar_position:3,title:"saveLocation",description:"Creates or updates a location with specified parameters."},o="system.mes.location.saveLocation",r={id:"appendix/script-api/location-script-api/save-location",title:"saveLocation",description:"Creates or updates a location with specified parameters.",source:"@site/docs/appendix/script-api/location-script-api/save-location.md",sourceDirName:"appendix/script-api/location-script-api",slug:"/appendix/script-api/location-script-api/save-location",permalink:"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/save-location",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/location-script-api/save-location.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"saveLocation",description:"Creates or updates a location with specified parameters."},sidebar:"tutorialSidebar",previous:{title:"newLocation",permalink:"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/new-location"},next:{title:"findLocations",permalink:"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/find-locations"}},c={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Code Examples",id:"code-examples",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"systemmeslocationsavelocation",children:"system.mes.location.saveLocation"})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["Creates or updates a ",(0,i.jsx)(t.a,{href:"../../data-model/location-model/location",children:"Locations"})," record in the system based on the provided parameters."]}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"system.mes.location.saveLocation(**location_data)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"name"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The name of the location."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"description"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"A detailed description of the location."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"parentId"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(t.td,{children:"The ULID of the parent location."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"type"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The type of the location (e.g., ENTERPRISE, COMPANY, SITE, AREA, LINE, CELL_GROUP, CELL, UNIT)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"processType"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The process type for the location (e.g., STORAGE, CONTINUOUS, BATCH, DISCRETE, NONE)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"sortOrder"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Integer"})}),(0,i.jsx)(t.td,{children:"Determines the display order of the location."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"allowNegativeInventory"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Boolean"})}),(0,i.jsx)(t.td,{children:"Allows inventory to go negative at this location."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"storageCapacity"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Double"})}),(0,i.jsx)(t.td,{children:"Maximum storage capacity allowed at the location."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"storageCapacityUnitId"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsxs)(t.td,{children:["The ULID for the storage capacity unit to be used as the default unit of measure for this location. See ",(0,i.jsx)(t.a,{href:"../../data-model/utility-models/unit-of-measure-model/unit-of-measure",children:"unit_of_measure"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"lotStorageStrategy"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Defines the lot storage strategy (e.g, ALLOW_MULTIPLE, ALLOW_SINGLE_OR_THROW, MERGE_INTO_PREVIOUS, MERGE_INTO_NEW, NO_STORAGE)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"lotUseStrategy"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Defines the lot usage strategy, such as FIFO or FEFO."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"path"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Path of the location within the hierarchy."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"id"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(t.td,{children:"The ULID of the location (optional, used for updating an existing location)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"notes"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Notes related to the location."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"enabled"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Boolean"})}),(0,i.jsx)(t.td,{children:"Indicates if the location is active and enabled."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"spare1"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Additional field for user-defined context."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"spare2"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Additional field for user-defined context."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"spare3"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Additional field for user-defined context."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"Returns a JSON representation of the saved location."}),"\n",(0,i.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"# Generate the object structure for a new location object, set the name and save it\nnew_location = system.mes.location.newLocation()\nnew_location['name'] = 'Warehouse'\nsaved_location = system.mes.location.saveLocation(**new_location)\n\n# Output the JSON representation of the saved location\nprint(saved_location)\n\n# Generate the object structure for another new location object to update the previous location\nlocation_data = system.mes.location.newLocation()\n\n# Set basic attributes for the updated location\nlocation_data['id'] = saved_location.id\nlocation_data['name'] = 'Warehouse'\nlocation_data['description'] = 'Main storage location for raw materials.'\nlocation_data['type'] = 'AREA'\nlocation_data['processType'] = 'STORAGE'\nlocation_data['sortOrder'] = 1\n# (You can continue setting other properties as needed here)\n\n# Save the location to update it in the system\nupdated_location = system.mes.location.saveLocation(**location_data)\n\n# Output the JSON representation of the updated location\nprint(updated_location)\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const s={},d=i.createContext(s);function o(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);