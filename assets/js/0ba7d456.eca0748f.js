"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[4280],{8947:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var i=r(4848),n=r(8453);const d={sidebar_position:42,title:"getInventoryForMaterial",description:"Retrieves all inventory for a specific material."},s="system.mes.inventory.getInventoryForMaterial",c={id:"appendix/script-api/inventory-script-api/get-inventory-for-material",title:"getInventoryForMaterial",description:"Retrieves all inventory for a specific material.",source:"@site/docs/appendix/script-api/inventory-script-api/get-inventory-for-material.md",sourceDirName:"appendix/script-api/inventory-script-api",slug:"/appendix/script-api/inventory-script-api/get-inventory-for-material",permalink:"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/get-inventory-for-material",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/get-inventory-for-material.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{sidebar_position:42,title:"getInventoryForMaterial",description:"Retrieves all inventory for a specific material."},sidebar:"tutorialSidebar",previous:{title:"publishInventoryState",permalink:"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/publish-inventory-state"},next:{title:"getInventoryByLotAndLocation",permalink:"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/get-inventory-by-lot-and-location"}},l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example Usage",id:"example-usage",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"systemmesinventorygetinventoryformaterial",children:"system.mes.inventory.getInventoryForMaterial"})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["Retrieves the ",(0,i.jsx)(t.a,{href:"../../data-model/material-model/material-inventory",children:"Material Inventories"})," records for a specific material."]}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"system.mes.inventory.getInventoryForMaterial(materialIdOrPath)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"materialIdOrPath"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The ID or path of the material associated with the inventory's lot."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"Returns a list of JSON objects representing all inventories for a specific material.\nEach JSON object has the following properties:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"storageLocationId"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(t.td,{children:"The ULID of the storage location of the inventory."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"storageLocationPath"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The path of the storage location of the inventory."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"lotId"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(t.td,{children:"The ULID of the material lot for the inventory."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"lotName"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The name of the material lot for the inventory."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"lotStatus"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The status of the material lot for the inventory (e.g OPEN, AVAILABLE, QA_HOLD, EXPIRED, SHIPPED, CLOSED)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"quantity"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Double"})}),(0,i.jsx)(t.td,{children:"The current quantity of material in the inventory."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"unitOfMeasureId"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(t.td,{children:"The ULID of the unit of measure associated with the material."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"unitOfMeasureName"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The name of the unit of measure associated with the material."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"name"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The name of the inventory."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"productionOrderId"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(t.td,{children:"The ULID of the production order associated with the inventory."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"productionOrderName"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The name of the production order associated with the inventory."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"materialId"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(t.td,{children:"The ULID of the material associated with the inventory's lot."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"materialPath"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The path of the material associated with the inventory's lot."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"materialDescription"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The description of the material associated with the inventory's lot."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"materialImage"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Byte[]"})}),(0,i.jsx)(t.td,{children:"The image of the material associated with the inventory's lot."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"materialClassId"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(t.td,{children:"The ULID of the material class associated with the inventory's lot."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"materialClassPath"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"The path of the material class associated with the inventory's lot."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"id"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,i.jsx)(t.td,{children:"The ULID of the inventory."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"notes"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Notes related to the inventory."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"enabled"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Booelean"})}),(0,i.jsx)(t.td,{children:"Indicates if the inventory is active and enabled."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"spare1"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Additional field for user-defined context."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"spare2"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Additional field for user-defined context."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"spare3"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"String"})}),(0,i.jsx)(t.td,{children:"Additional field for user-defined context."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"# Retrieve inventory for a material\ninventory_for_material = system.mes.inventory.getInventoryForMaterial('Bottle/Milk')\n\n# Output the list of inventories\nprint(inventory_for_material)\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var i=r(6540);const n={},d=i.createContext(n);function s(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);