"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[8510],{34240:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"appendix/script-api/operation-script-api/find-operation-records","title":"findOperationRecords","description":"Retrieves Operations based on the specified pagination, sort, and column constraint parameters.","source":"@site/docs/appendix/script-api/operation-script-api/find-operation-records.md","sourceDirName":"appendix/script-api/operation-script-api","slug":"/appendix/script-api/operation-script-api/find-operation-records","permalink":"/tamaki-mes-docs/docs/appendix/script-api/operation-script-api/find-operation-records","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/operation-script-api/find-operation-records.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"title":"findOperationRecords","description":"Retrieves Operations based on the specified pagination, sort, and column constraint parameters.","sidebar_position":0},"sidebar":"tutorialSidebar","previous":{"title":"system.mes.operation","permalink":"/tamaki-mes-docs/docs/category/systemmesoperation"},"next":{"title":"findOperations","permalink":"/tamaki-mes-docs/docs/appendix/script-api/operation-script-api/find-operations"}}');var n=i(74848),r=i(28453);const a={title:"findOperationRecords",description:"Retrieves Operations based on the specified pagination, sort, and column constraint parameters.",sidebar_position:0},o="system.mes.operation.findOperationRecords",d={},c=[{value:"Description",id:"description",level:2},{value:"Permissions",id:"permissions",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Returns",id:"returns",level:3},{value:"Code Examples",id:"code-examples",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"systemmesoperationfindoperationrecords",children:"system.mes.operation.findOperationRecords"})}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["Retrieves ",(0,n.jsx)(t.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/operation-model/operation-record",children:"Operation Records"})," based on the specified pagination, sort, and column constraint parameters."]}),"\n",(0,n.jsx)(t.h2,{id:"permissions",children:"Permissions"}),"\n",(0,n.jsx)(t.p,{children:"This scripting function has no client permission restrictions."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsxs)(t.p,{children:["Using Python keyword arguments, a ",(0,n.jsx)(t.a,{href:"/tamaki-mes-docs/docs/appendix/script-api/query-script-api/query-request",children:"Query Request"})," can be passed to the ",(0,n.jsx)(t.code,{children:"findOperationRecords"})," function\nwithout specifying each parameter individually. Please refer to the Query Request documentation for a list of parameters."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"system.mes.operation.findOperationRecords(**queryRequest)\n"})}),"\n",(0,n.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"Returns a Query Result object with the following properties:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["List<",(0,n.jsx)(t.a,{href:"/tamaki-mes-docs/docs/appendix/data-model/operation-model/operation-record",children:"OperationRecord"}),">"]}),(0,n.jsx)(t.td,{children:"content"}),(0,n.jsx)(t.td,{children:"The list of all records found that meet the specified criteria"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"totalPages"}),(0,n.jsx)(t.td,{children:"If pagination is used, this is the number of total pages of records in the database for the specified page size."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Long"}),(0,n.jsx)(t.td,{children:"totalElements"}),(0,n.jsx)(t.td,{children:"If pagination is used, this is the number of records in the database that meet the specified criteria."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"pageSize"}),(0,n.jsx)(t.td,{children:"If pagination is used, this is the specified page size."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"pageIndex"}),(0,n.jsx)(t.td,{children:"If pagination is used, this is the specified page index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"hasContent"}),(0,n.jsx)(t.td,{children:"True if an records were found that meet the specified criteria."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"isFirst"}),(0,n.jsx)(t.td,{children:"If pagination is used, this is true if the first page was returned."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"isLast"}),(0,n.jsx)(t.td,{children:"If pagination is used, this is true if the last page was returned."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"hasNext"}),(0,n.jsx)(t.td,{children:"If pagination is used, this is true if there is a page of content available after this one."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Boolean"}),(0,n.jsx)(t.td,{children:"hasPrevious"}),(0,n.jsx)(t.td,{children:"If pagination is used, this is true if there is a page of content available before this one."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,n.jsx)(t.p,{children:"Here is an example of how to use a Query Request to retrieve the first ten Operation Records created in 2024 sorted by their\nname."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'queryRequest = system.mes.query.newQueryRequest()  \n\nqueryRequest["pageSize"] = 10\nqueryRequest["pageIndex"] = 0\n\nqueryRequest["sortFields"] = ["name"]\nqueryRequest["sortDirection"] = "Ascending"\n\nfilterRequest = system.mes.query.newFilterRequest()  \nfilterRequest["field"] = "createdDate"  \nfilterRequest["condition"] = "between"  \nfilterRequest["minDateValue"] = "2024-01-01T00:00:00Z"\nfilterRequest["maxDateValue"] = "2025-01-01T00:00:00Z"\n    \nfilters = [filterRequest]  \n  \nqueryRequest["filters"] = filters  \n\nresult = system.mes.operation.findOperationRecords(**queryRequest)\n'})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var s=i(96540);const n={},r=s.createContext(n);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);