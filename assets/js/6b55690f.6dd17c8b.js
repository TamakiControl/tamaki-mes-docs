"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[1384],{3835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=r(4848),o=r(8453);const s={sidebar_position:6,title:"getProperty",description:"Retrieves a location property by its ID or name."},n="system.mes.location.getProperty",a={id:"appendix/script-api/location-script-api/get-property",title:"getProperty",description:"Retrieves a location property by its ID or name.",source:"@site/docs/appendix/script-api/location-script-api/get-property.md",sourceDirName:"appendix/script-api/location-script-api",slug:"/appendix/script-api/location-script-api/get-property",permalink:"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/get-property",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/location-script-api/get-property.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"getProperty",description:"Retrieves a location property by its ID or name."},sidebar:"tutorialSidebar",previous:{title:"getLocationsByPartialPath",permalink:"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/get-locations-by-partial-path"},next:{title:"saveProperty",permalink:"/tamaki-mes-docs/docs/appendix/script-api/location-script-api/save-property"}},p={},c=[{value:"Method Description",id:"method-description",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example Usage",id:"example-usage",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"systemmeslocationgetproperty",children:"system.mes.location.getProperty"})}),"\n",(0,i.jsx)(t.p,{children:"Retrieves a location property by its specified ID or name."}),"\n",(0,i.jsx)(t.h2,{id:"method-description",children:"Method Description"}),"\n",(0,i.jsx)(t.p,{children:"This function retrieves the details of a location property based on the provided ULID or name. It is useful for\naccessing specific property details, such as configuration and attributes, when the unique identifier or name is known."}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"A JSON representation of the location property."}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"idOrName"})}),(0,i.jsx)(t.td,{children:"String"}),(0,i.jsx)(t.td,{children:"The ULID or name of the location property to retrieve."})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"\n    property = system.mes.location.getProperty(id_or_name)\n    property['defaultValue'] = 100\n    system.mes.location.saveProperty(**property)\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>a});var i=r(6540);const o={},s=i.createContext(o);function n(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);