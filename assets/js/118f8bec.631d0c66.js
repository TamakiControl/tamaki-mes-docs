"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[6545],{61613:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"appendix/script-api/location-script-api/find-locations","title":"findLocations","description":"Retrieves Locations based on the specified pagination, sort, and column constraint parameters.","source":"@site/docs/appendix/script-api/location-script-api/find-locations.md","sourceDirName":"appendix/script-api/location-script-api","slug":"/appendix/script-api/location-script-api/find-locations","permalink":"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/find-locations","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/location-script-api/find-locations.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"title":"findLocations","description":"Retrieves Locations based on the specified pagination, sort, and column constraint parameters."},"sidebar":"tutorialSidebar","previous":{"title":"saveLocation","permalink":"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/save-location"},"next":{"title":"getLocation","permalink":"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/get-location"}}');var n=i(74848),r=i(28453);const a={sidebar_position:4,title:"findLocations",description:"Retrieves Locations based on the specified pagination, sort, and column constraint parameters."},o="system.mes.location.findLocations",d={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Code Examples",id:"code-examples",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"systemmeslocationfindlocations",children:"system.mes.location.findLocations"})}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["Retrieves ",(0,n.jsx)(t.a,{href:"../../data-model/location-model/location",children:"Locations"})," records based on the specified pagination, sort, and column constraint parameters."]}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"system.mes.location.findLocations(**queryRequest)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.p,{children:["Using Python keyword arguments, a ",(0,n.jsx)(t.a,{href:"../query-script-api/query-request",children:"Query Request"})," can be passed to the ",(0,n.jsx)(t.code,{children:"findLocations"})," function\nwithout specifying each parameter individually. Please refer to the ",(0,n.jsx)(t.a,{href:"../query-script-api/query-request",children:"Query Request"})," documentation for a list of parameters."]}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.p,{children:"Returns a Query Result object with the following properties:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"content"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:"List"}),"<",(0,n.jsx)(t.a,{href:"../../data-model/location-model/location",children:"Location"}),">"]}),(0,n.jsx)(t.td,{children:"The list of all records found that meet the specified criteria"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"totalPages"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Integer"})}),(0,n.jsx)(t.td,{children:"If pagination is used, this is the number of total pages of records in the database for the specified page size."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"totalElements"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Long"})}),(0,n.jsx)(t.td,{children:"If pagination is used, this is the number of records in the database that meet the specified criteria."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"pageSize"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Integer"})}),(0,n.jsx)(t.td,{children:"If pagination is used, this is the specified page size."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"pageIndex"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Integer"})}),(0,n.jsx)(t.td,{children:"If pagination is used, this is the specified page index."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hasContent"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Boolean"})}),(0,n.jsx)(t.td,{children:"True if an records were found that meet the specified criteria."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"isFirst"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Boolean"})}),(0,n.jsx)(t.td,{children:"If pagination is used, this is true if the first page was returned."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"isLast"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Boolean"})}),(0,n.jsx)(t.td,{children:"If pagination is used, this is true if the last page was returned."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hasNext"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Boolean"})}),(0,n.jsx)(t.td,{children:"If pagination is used, this is true if there is a page of content available after this one."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"hasPrevious"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"Boolean"})}),(0,n.jsx)(t.td,{children:"If pagination is used, this is true if there is a page of content available before this one."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,n.jsx)(t.p,{children:"Here is an example of how to use a Query Request to retrieve the first ten Locations created in 2025 sorted by their\nname."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"# Generate the object structure for a new query request\nqueryRequest = system.mes.query.newQueryRequest()\n\n# Set the basic attributes of the query request\nqueryRequest['pageSize'] = 10\nqueryRequest['pageIndex'] = 0\n\nqueryRequest['sortFields'] = ['name']\nqueryRequest['sortDirection'] = 'Ascending'\n\n# Generate the object structure for a filter for the query request\nfilterRequest = system.mes.query.newFilterRequest()\nfilterRequest['field'] = 'createdDate'\nfilterRequest['condition'] = 'between'\nfilterRequest['minDateValue'] = '2025-01-01T00:00:00Z'\nfilterRequest['maxDateValue'] = '2026-01-01T00:00:00Z'\n\nfilters = [filterRequest]\n\nqueryRequest['filters'] = filters\n\n# Retrieve the locations that match the filter\nresult = system.mes.location.findLocations(**queryRequest)\n\n# Output the locations that match the filter.\nprint(result)\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var s=i(96540);const n={},r=s.createContext(n);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);