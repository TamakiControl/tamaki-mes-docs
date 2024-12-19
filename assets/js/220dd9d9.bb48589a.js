"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[5315],{3165:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var i=r(4848),s=r(8453);const n={title:"findProductionOrders",description:"Retrieves Production Orders based on the specified pagination, sort, and column constraint parameters.",sidebar_position:0},d="system.mes.productionOrder.findProductionOrders",o={id:"appendix/script-api/production-order-script-api/find-production-orders",title:"findProductionOrders",description:"Retrieves Production Orders based on the specified pagination, sort, and column constraint parameters.",source:"@site/docs/appendix/script-api/production-order-script-api/find-production-orders.md",sourceDirName:"appendix/script-api/production-order-script-api",slug:"/appendix/script-api/production-order-script-api/find-production-orders",permalink:"/tamaki-mes-docs/docs/appendix/script-api/production-order-script-api/find-production-orders",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/production-order-script-api/find-production-orders.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"findProductionOrders",description:"Retrieves Production Orders based on the specified pagination, sort, and column constraint parameters.",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"system.mes.productionOrder",permalink:"/tamaki-mes-docs/docs/category/systemmesproductionorder"},next:{title:"system.mes.query",permalink:"/tamaki-mes-docs/docs/category/systemmesquery"}},a={},c=[{value:"Description",id:"description",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Returns",id:"returns",level:3},{value:"Code Examples",id:"code-examples",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"systemmesproductionorderfindproductionorders",children:"system.mes.productionOrder.findProductionOrders"})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["Retrieves ",(0,i.jsx)(t.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/production-order-model/production-order",children:"Production Orders"})," based on the specified pagination, sort, and column constraint parameters."]}),"\n",(0,i.jsx)(t.h2,{id:"permissions",children:"Permissions"}),"\n",(0,i.jsx)(t.p,{children:"This scripting function has no client permission restrictions."}),"\n",(0,i.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsxs)(t.p,{children:["Using Python keyword arguments, a ",(0,i.jsx)(t.a,{href:"/tamaki-mes-docs/docs/appendix/script-api/query-script-api/query-request",children:"Query Request"})," can be passed to the ",(0,i.jsx)(t.code,{children:"findProductionOrders"})," function\nwithout specifying each parameter individually. Please refer to the Query Request documentation for a list of parameters."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"system.mes.productionOrder.findProductionOrders(**queryRequest)\n"})}),"\n",(0,i.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"Returns a Query Result object with the following properties:"}),"\n",(0,i.jsx)(t.p,{children:"[ProductionOrder]"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["List<",(0,i.jsx)(t.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/production-order-model/production-order",children:"ProductionOrder"}),">"]}),(0,i.jsx)(t.td,{children:"content"}),(0,i.jsx)(t.td,{children:"The list of all records found that meet the specified criteria"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"totalPages"}),(0,i.jsx)(t.td,{children:"If pagination is used, this is the number of total pages of records in the database for the specified page size."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Long"}),(0,i.jsx)(t.td,{children:"totalElements"}),(0,i.jsx)(t.td,{children:"If pagination is used, this is the number of records in the database that meet the specified criteria."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"pageSize"}),(0,i.jsx)(t.td,{children:"If pagination is used, this is the specified page size."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"pageIndex"}),(0,i.jsx)(t.td,{children:"If pagination is used, this is the specified page index."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"hasContent"}),(0,i.jsx)(t.td,{children:"True if an records were found that meet the specified criteria."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"isFirst"}),(0,i.jsx)(t.td,{children:"If pagination is used, this is true if the first page was returned."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"isLast"}),(0,i.jsx)(t.td,{children:"If pagination is used, this is true if the last page was returned."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"hasNext"}),(0,i.jsx)(t.td,{children:"If pagination is used, this is true if there is a page of content available after this one."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Boolean"}),(0,i.jsx)(t.td,{children:"hasPrevious"}),(0,i.jsx)(t.td,{children:"If pagination is used, this is true if there is a page of content available before this one."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,i.jsx)(t.p,{children:"Here is an example of how to use a Query Request to retrieve the first ten Production Orders created in 2024 sorted by their\nname."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'queryRequest = system.mes.query.newQueryRequest()  \n\nqueryRequest["pageSize"] = 10\nqueryRequest["pageIndex"] = 0\n\nqueryRequest["sortFields"] = ["name"]\nqueryRequest["sortDirection"] = "Ascending"\n\nfilterRequest = system.mes.query.newFilterRequest()  \nfilterRequest["field"] = "createdDate"  \nfilterRequest["condition"] = "between"  \nfilterRequest["minDateValue"] = "2024-01-01T00:00:00Z"\nfilterRequest["maxDateValue"] = "2025-01-01T00:00:00Z"\n    \nfilters = [filterRequest]  \n  \nqueryRequest["filters"] = filters  \n\nresult = system.mes.productionOrder.findProductionOrders(**queryRequest)\n'})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>o});var i=r(6540);const s={},n=i.createContext(s);function d(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);