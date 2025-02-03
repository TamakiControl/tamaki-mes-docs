"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[1973],{3990:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=i(4848),n=i(8453);const s={sidebar_position:14,title:"getLocationGroupReferences",description:"Retrieves a list of references to a location with the given ID."},o="system.mes.location.getLocationGroupReferences",c={id:"appendix/script-api/location-script-api/get-location-group-references",title:"getLocationGroupReferences",description:"Retrieves a list of references to a location with the given ID.",source:"@site/docs/appendix/script-api/location-script-api/get-location-group-references.md",sourceDirName:"appendix/script-api/location-script-api",slug:"/appendix/script-api/location-script-api/get-location-group-references",permalink:"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/get-location-group-references",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/location-script-api/get-location-group-references.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,title:"getLocationGroupReferences",description:"Retrieves a list of references to a location with the given ID."},sidebar:"tutorialSidebar",previous:{title:"deleteLocationWithReferences",permalink:"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/delete-location-with-references"},next:{title:"deleteLocationGroup",permalink:"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/delete-location-group"}},d={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Code Examples",id:"code-examples",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"systemmeslocationgetlocationgroupreferences",children:"system.mes.location.getLocationGroupReferences"})}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["Retrieves a list of references to a ",(0,r.jsx)(t.a,{href:"../../data-model/location-model/location-group",children:"Location Groups"})," record by its ID."]}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"system.mes.location.getLocationGroupReferences(id)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"id"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,r.jsx)(t.td,{children:"The ID of the location group to retrieve."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"Returns a list of JSON objects. Each JSON object has the following properties:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"tableName"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"The name of the table that the reference is in."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"references"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"List<JSON Object>"})}),(0,r.jsx)(t.td,{children:"List of JSON objects corresponding to references to the location."})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"The JSON Objects in references has the following properties:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"fkColName"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"String"})}),(0,r.jsx)(t.td,{children:"The name of the foreign key column."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"id"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"String"})," (ULID)"]}),(0,r.jsx)(t.td,{children:"The ULID of the object that is referencing the location."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"# Retrieve the references for the location group specified\ngroup_references = system.mes.location.getLocationGroupReferences('DairyCo')\n\n# Output the location group references\nprint(group_references)\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>c});var r=i(6540);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);