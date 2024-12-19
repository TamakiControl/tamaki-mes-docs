"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[5080],{6293:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=t(4848),a=t(8453);const r={title:"findMaterialClasses",description:"Retrieves Material Classes based on the specified pagination, sort, and column constraint parameters.",sidebar_position:0},n="system.mes.material.findMaterialClasses",d={id:"appendix/script-api/material-script-api/find-material-classes",title:"findMaterialClasses",description:"Retrieves Material Classes based on the specified pagination, sort, and column constraint parameters.",source:"@site/docs/appendix/script-api/material-script-api/find-material-classes.md",sourceDirName:"appendix/script-api/material-script-api",slug:"/appendix/script-api/material-script-api/find-material-classes",permalink:"/tamaki-mes-docs/docs/appendix/script-api/material-script-api/find-material-classes",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/material-script-api/find-material-classes.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"findMaterialClasses",description:"Retrieves Material Classes based on the specified pagination, sort, and column constraint parameters.",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"findLots",permalink:"/tamaki-mes-docs/docs/appendix/script-api/material-script-api/find-lots"},next:{title:"findMaterials",permalink:"/tamaki-mes-docs/docs/appendix/script-api/material-script-api/find-materials"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Returns",id:"returns",level:3},{value:"Code Examples",id:"code-examples",level:2}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"systemmesmaterialfindmaterialclasses",children:"system.mes.material.findMaterialClasses"})}),"\n",(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:["Retrieves ",(0,i.jsx)(s.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/material-model/material-class",children:"Material Classes"})," based on the specified pagination, sort, and column constraint parameters."]}),"\n",(0,i.jsx)(s.h2,{id:"permissions",children:"Permissions"}),"\n",(0,i.jsx)(s.p,{children:"This scripting function has no client permission restrictions."}),"\n",(0,i.jsx)(s.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsxs)(s.p,{children:["Using Python keyword arguments, a ",(0,i.jsx)(s.a,{href:"/tamaki-mes-docs/docs/appendix/script-api/query-script-api/query-request",children:"Query Request"})," can be passed to the ",(0,i.jsx)(s.code,{children:"findMaterialClasses"})," function\nwithout specifying each parameter individually. Please refer to the Query Request documentation for a list of parameters."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"system.mes.material.findMaterialClasses(**queryRequest)\n"})}),"\n",(0,i.jsx)(s.h3,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:"Returns a Query Result object with the following properties:"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Name"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["List<",(0,i.jsx)(s.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/material-model/material-class",children:"MaterialClass"}),">"]}),(0,i.jsx)(s.td,{children:"content"}),(0,i.jsx)(s.td,{children:"The list of all records found that meet the specified criteria"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"totalPages"}),(0,i.jsx)(s.td,{children:"If pagination is used, this is the number of total pages of records in the database for the specified page size."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Long"}),(0,i.jsx)(s.td,{children:"totalElements"}),(0,i.jsx)(s.td,{children:"If pagination is used, this is the number of records in the database that meet the specified criteria."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"pageSize"}),(0,i.jsx)(s.td,{children:"If pagination is used, this is the specified page size."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Integer"}),(0,i.jsx)(s.td,{children:"pageIndex"}),(0,i.jsx)(s.td,{children:"If pagination is used, this is the specified page index."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Boolean"}),(0,i.jsx)(s.td,{children:"hasContent"}),(0,i.jsx)(s.td,{children:"True if an records were found that meet the specified criteria."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Boolean"}),(0,i.jsx)(s.td,{children:"isFirst"}),(0,i.jsx)(s.td,{children:"If pagination is used, this is true if the first page was returned."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Boolean"}),(0,i.jsx)(s.td,{children:"isLast"}),(0,i.jsx)(s.td,{children:"If pagination is used, this is true if the last page was returned."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Boolean"}),(0,i.jsx)(s.td,{children:"hasNext"}),(0,i.jsx)(s.td,{children:"If pagination is used, this is true if there is a page of content available after this one."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Boolean"}),(0,i.jsx)(s.td,{children:"hasPrevious"}),(0,i.jsx)(s.td,{children:"If pagination is used, this is true if there is a page of content available before this one."})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,i.jsx)(s.p,{children:"Here is an example of how to use a Query Request to retrieve the first ten Material Classes created in 2024 sorted by their name."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:'queryRequest = system.mes.query.newQueryRequest()  \n\nqueryRequest["pageSize"] = 10\nqueryRequest["pageIndex"] = 0\n\nqueryRequest["sortFields"] = ["name"]\nqueryRequest["sortDirection"] = "Ascending"\n\nfilterRequest = system.mes.query.newFilterRequest()  \nfilterRequest["field"] = "createdDate"  \nfilterRequest["condition"] = "between"  \nfilterRequest["minDateValue"] = "2024-01-01T00:00:00Z"\nfilterRequest["maxDateValue"] = "2025-01-01T00:00:00Z"\n    \nfilters = [filterRequest]  \n  \nqueryRequest["filters"] = filters  \n\nresult = system.mes.material.findMaterialClasses(**queryRequest)\n'})})]})}function p(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>n,x:()=>d});var i=t(6540);const a={},r=i.createContext(a);function n(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);