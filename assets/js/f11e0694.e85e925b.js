"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[3247],{4151:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>c});var s=i(4848),r=i(8453);const n={title:"findMaterials",description:"Retrieves Materials based on the specified pagination, sort, and column constraint parameters.",sidebar_position:0},a="system.mes.material.findMaterials",d={id:"appendix/script-api/material-script-api/find-materials",title:"findMaterials",description:"Retrieves Materials based on the specified pagination, sort, and column constraint parameters.",source:"@site/docs/appendix/script-api/material-script-api/find-materials.md",sourceDirName:"appendix/script-api/material-script-api",slug:"/appendix/script-api/material-script-api/find-materials",permalink:"/tamaki-mes-docs/docs/appendix/script-api/material-script-api/find-materials",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/material-script-api/find-materials.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"findMaterials",description:"Retrieves Materials based on the specified pagination, sort, and column constraint parameters.",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"findMaterialClasses",permalink:"/tamaki-mes-docs/docs/appendix/script-api/material-script-api/find-material-classes"},next:{title:"system.mes.operation",permalink:"/tamaki-mes-docs/docs/category/systemmesoperation"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Returns",id:"returns",level:3},{value:"Code Examples",id:"code-examples",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"systemmesmaterialfindmaterials",children:"system.mes.material.findMaterials"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["Retrieves ",(0,s.jsx)(t.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/material-model/material",children:"Materials"})," based on the specified pagination, sort, and column constraint parameters."]}),"\n",(0,s.jsx)(t.h2,{id:"permissions",children:"Permissions"}),"\n",(0,s.jsx)(t.p,{children:"This scripting function has no client permission restrictions."}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsxs)(t.p,{children:["Using Python keyword arguments, a ",(0,s.jsx)(t.a,{href:"/tamaki-mes-docs/docs/appendix/script-api/query-script-api/query-request",children:"Query Request"})," can be passed to the ",(0,s.jsx)(t.code,{children:"findMaterials"})," function\nwithout specifying each parameter individually. Please refer to the Query Request documentation for a list of parameters."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"system.mes.material.findMaterials(**queryRequest)\n"})}),"\n",(0,s.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"Returns a Query Result object with the following properties:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["List<",(0,s.jsx)(t.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/material-model/material",children:"Material"}),">"]}),(0,s.jsx)(t.td,{children:"content"}),(0,s.jsx)(t.td,{children:"The list of all records found that meet the specified criteria"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"totalPages"}),(0,s.jsx)(t.td,{children:"If pagination is used, this is the number of total pages of records in the database for the specified page size."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Long"}),(0,s.jsx)(t.td,{children:"totalElements"}),(0,s.jsx)(t.td,{children:"If pagination is used, this is the number of records in the database that meet the specified criteria."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"pageSize"}),(0,s.jsx)(t.td,{children:"If pagination is used, this is the specified page size."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"pageIndex"}),(0,s.jsx)(t.td,{children:"If pagination is used, this is the specified page index."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"hasContent"}),(0,s.jsx)(t.td,{children:"True if an records were found that meet the specified criteria."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"isFirst"}),(0,s.jsx)(t.td,{children:"If pagination is used, this is true if the first page was returned."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"isLast"}),(0,s.jsx)(t.td,{children:"If pagination is used, this is true if the last page was returned."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"hasNext"}),(0,s.jsx)(t.td,{children:"If pagination is used, this is true if there is a page of content available after this one."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Boolean"}),(0,s.jsx)(t.td,{children:"hasPrevious"}),(0,s.jsx)(t.td,{children:"If pagination is used, this is true if there is a page of content available before this one."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,s.jsx)(t.p,{children:"Here is an example of how to use a Query Request to retrieve the first ten Materials created in 2024 sorted by their name."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'queryRequest = system.mes.query.newQueryRequest()  \n\nqueryRequest["pageSize"] = 10\nqueryRequest["pageIndex"] = 0\n\nqueryRequest["sortFields"] = ["name"]\nqueryRequest["sortDirection"] = "Ascending"\n\nfilterRequest = system.mes.query.newFilterRequest()  \nfilterRequest["field"] = "createdDate"  \nfilterRequest["condition"] = "between"  \nfilterRequest["minDateValue"] = "2024-01-01T00:00:00Z"\nfilterRequest["maxDateValue"] = "2025-01-01T00:00:00Z"\n    \nfilters = [filterRequest]  \n  \nqueryRequest["filters"] = filters  \n\nresult = system.mes.material.findMaterials(**queryRequest)\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>d});var s=i(6540);const r={},n=s.createContext(r);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);