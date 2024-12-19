"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[5632],{9861:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var i=r(4848),o=r(8453);const a={sidebar_position:10,title:"getPropertyValueFor",description:"Retrieves a property value for a specified location and property."},n="system.mes.location.getPropertyValueFor",p={id:"appendix/script-api/location-script-api/get-property-value-for",title:"getPropertyValueFor",description:"Retrieves a property value for a specified location and property.",source:"@site/docs/appendix/script-api/location-script-api/get-property-value-for.md",sourceDirName:"appendix/script-api/location-script-api",slug:"/appendix/script-api/location-script-api/get-property-value-for",permalink:"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/get-property-value-for",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/location-script-api/get-property-value-for.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"getPropertyValueFor",description:"Retrieves a property value for a specified location and property."},sidebar:"tutorialSidebar",previous:{title:"newPropertyValue",permalink:"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/new-property-value"},next:{title:"validateProperty",permalink:"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/validate-property"}},s={},c=[{value:"Method Description",id:"method-description",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example Usage",id:"example-usage",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"systemmeslocationgetpropertyvaluefor",children:"system.mes.location.getPropertyValueFor"})}),"\n",(0,i.jsx)(t.p,{children:"Retrieves the property value for a specified location and property."}),"\n",(0,i.jsx)(t.h2,{id:"method-description",children:"Method Description"}),"\n",(0,i.jsx)(t.p,{children:"This function retrieves the value associated with a specific property for a given location. It allows users to query\nproperties directly by the location\u2019s ULID or path and the property\u2019s ULID or name."}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"The property value for the specified location and property if it exists."}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"locationIdOrPath"})}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"The ULID or path of the location."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"propertyIdOrName"})}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"The ULID or name of the property for which the value is retrieved."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'def getTemperatureValue(location_id, property_name):\n    # Retrieve the property value for the specified location and property\n    temperature_value = system.mes.location.getPropertyValueFor(location_id, property_name)\n    \n    if temperature_value:\n        print(f"Temperature Value for Location {location_id}: {temperature_value")\n    else:\n        print(f"No property value found for {property_name} at Location {location_id}")\n'})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>p});var i=r(6540);const o={},a=i.createContext(o);function n(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);