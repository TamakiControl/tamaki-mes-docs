"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[7406],{1072:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=i(4848),o=i(8453);const a={sidebar_position:2,title:"getLocationsByPropertyValue",description:"Retrieves all locations with a specific property value."},n="getLocationsByPropertyValue",s={id:"appendix/script-api/location-script-api/getLocationsByPropertyValue",title:"getLocationsByPropertyValue",description:"Retrieves all locations with a specific property value.",source:"@site/docs/appendix/script-api/location-script-api/getLocationsByPropertyValue.md",sourceDirName:"appendix/script-api/location-script-api",slug:"/appendix/script-api/location-script-api/getLocationsByPropertyValue",permalink:"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/getLocationsByPropertyValue",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/location-script-api/getLocationsByPropertyValue.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"getLocationsByPropertyValue",description:"Retrieves all locations with a specific property value."},sidebar:"tutorialSidebar",previous:{title:"Introduction to Location API",permalink:"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/intro"},next:{title:"newLocation",permalink:"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/newLocation"}},c={},p=[{value:"Method Description",id:"method-description",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example Usage",id:"example-usage",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"getlocationsbypropertyvalue",children:"getLocationsByPropertyValue"})}),"\n",(0,r.jsx)(t.p,{children:"Retrieves all locations that have the specified value for a given property."}),"\n",(0,r.jsx)(t.h2,{id:"method-description",children:"Method Description"}),"\n",(0,r.jsx)(t.p,{children:"This function searches through locations and returns those that match a specified property value. It allows users to\nfilter locations based on the ID or name of a property and a particular value for that property."}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.p,{children:"A JSON list of all locations that have the specified property value."}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"propertyIdOrName"})}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"The ID or name of the location property to filter by."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"propertyValue"})}),(0,r.jsx)(t.td,{children:"Mixed"}),(0,r.jsx)(t.td,{children:"The value to search for within the specified property."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'property_name = "erp_location"\nvalue = "WRHS-01"\nmatching_locations = system.mes.location.getLocationsByPropertyValue(property_name, value)\n\nif not matching_locations:\n    raise Exception(f"No locations found with {property_name} = {value}")\n\n'})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>s});var r=i(6540);const o={},a=r.createContext(o);function n(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);