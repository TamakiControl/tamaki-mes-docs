"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[7470],{1419:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=o(4848),a=o(8453);const r={sidebar_position:1,title:"Introduction to Location API",description:"Overview of functions available in the Location API."},n="Location API",c={id:"appendix/script-api/location-script-api/intro",title:"Introduction to Location API",description:"Overview of functions available in the Location API.",source:"@site/docs/appendix/script-api/location-script-api/intro.md",sourceDirName:"appendix/script-api/location-script-api",slug:"/appendix/script-api/location-script-api/intro",permalink:"/https://docs.tamaki-control.com/docs/appendix/script-api/location-script-api/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/location-script-api/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction to Location API",description:"Overview of functions available in the Location API."},sidebar:"tutorialSidebar",previous:{title:"validateSplitRequest",permalink:"/https://docs.tamaki-control.com/docs/appendix/script-api/inventory-script-api/validateSplitRequest"},next:{title:"getLocationsByPropertyValue",permalink:"/https://docs.tamaki-control.com/docs/appendix/script-api/location-script-api/getLocationsByPropertyValue"}},s={},l=[{value:"Function List",id:"function-list",level:2},{value:"<code>newLocation</code>",id:"newlocation",level:3},{value:"<code>getLocation</code>",id:"getlocation",level:3},{value:"<code>getAllLocations</code>",id:"getalllocations",level:3},{value:"<code>getLocationTree</code>",id:"getlocationtree",level:3},{value:"<code>getLocationsByPartialPath</code>",id:"getlocationsbypartialpath",level:3},{value:"<code>getLocationsByPropertyValue</code>",id:"getlocationsbypropertyvalue",level:3},{value:"<code>saveLocation</code>",id:"savelocation",level:3},{value:"<code>validateLocation</code>",id:"validatelocation",level:3},{value:"<code>newProperty</code>",id:"newproperty",level:3},{value:"<code>getProperty</code>",id:"getproperty",level:3},{value:"<code>saveProperty</code>",id:"saveproperty",level:3},{value:"<code>deleteProperty</code>",id:"deleteproperty",level:3},{value:"<code>newPropertyValue</code>",id:"newpropertyvalue",level:3},{value:"<code>getPropertyValueFor</code>",id:"getpropertyvaluefor",level:3},{value:"<code>validateProperty</code>",id:"validateproperty",level:3},{value:"<code>validatePropertyValue</code>",id:"validatepropertyvalue",level:3},{value:"<code>savePropertyValue</code>",id:"savepropertyvalue",level:3},{value:"<code>deletePropertyValue</code>",id:"deletepropertyvalue",level:3}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"location-api",children:"Location API"})}),"\n",(0,i.jsx)(t.p,{children:"Welcome to the Location API documentation. This API provides a comprehensive set of functions for managing and\ninteracting with locations within the system. Below is a list of available functions, each with a brief description and\na link to its detailed documentation."}),"\n",(0,i.jsx)(t.h2,{id:"function-list",children:"Function List"}),"\n",(0,i.jsx)(t.h3,{id:"newlocation",children:(0,i.jsx)(t.a,{href:"/https://docs.tamaki-control.com/docs/appendix/script-api/location-script-api/newLocation",children:(0,i.jsx)(t.code,{children:"newLocation"})})}),"\n",(0,i.jsx)(t.p,{children:"Creates a new location record in the system with attributes like name, type, and parent ID. Returns a JSON\nrepresentation of the new Location object."}),"\n",(0,i.jsx)(t.h3,{id:"getlocation",children:(0,i.jsx)(t.a,{href:"/https://docs.tamaki-control.com/docs/appendix/script-api/location-script-api/getLocation",children:(0,i.jsx)(t.code,{children:"getLocation"})})}),"\n",(0,i.jsx)(t.p,{children:"Retrieves the location with a specified ID or path. This function returns a JSON representation of the location."}),"\n",(0,i.jsx)(t.h3,{id:"getalllocations",children:(0,i.jsx)(t.a,{href:"/https://docs.tamaki-control.com/docs/appendix/script-api/location-script-api/getAllLocations",children:(0,i.jsx)(t.code,{children:"getAllLocations"})})}),"\n",(0,i.jsx)(t.p,{children:"Retrieves a list of all locations in the system. The function returns a JSON array of location objects."}),"\n",(0,i.jsx)(t.h3,{id:"getlocationtree",children:(0,i.jsx)(t.a,{href:"/https://docs.tamaki-control.com/docs/appendix/script-api/location-script-api/getLocationTree",children:(0,i.jsx)(t.code,{children:"getLocationTree"})})}),"\n",(0,i.jsx)(t.p,{children:"Retrieves all locations organized in a hierarchical tree structure, allowing for recursive access. Returns a JSON\nrepresentation of the tree."}),"\n",(0,i.jsx)(t.h3,{id:"getlocationsbypartialpath",children:(0,i.jsx)(t.a,{href:"/https://docs.tamaki-control.com/docs/appendix/script-api/location-script-api/getLocationsByPartialPath",children:(0,i.jsx)(t.code,{children:"getLocationsByPartialPath"})})}),"\n",(0,i.jsx)(t.p,{children:"Retrieves all locations that have paths containing a specified partial path. Returns a JSON list of matching locations."}),"\n",(0,i.jsx)(t.h3,{id:"getlocationsbypropertyvalue",children:(0,i.jsx)(t.a,{href:"/https://docs.tamaki-control.com/docs/appendix/script-api/location-script-api/getLocationsByPropertyValue",children:(0,i.jsx)(t.code,{children:"getLocationsByPropertyValue"})})}),"\n",(0,i.jsx)(t.p,{children:"Retrieves all locations that have a specific value for a given property. This function returns a JSON list of all\nmatching locations."}),"\n",(0,i.jsx)(t.h3,{id:"savelocation",children:(0,i.jsx)(t.a,{href:"/https://docs.tamaki-control.com/docs/appendix/script-api/location-script-api/saveLocation",children:(0,i.jsx)(t.code,{children:"saveLocation"})})}),"\n",(0,i.jsx)(t.p,{children:"Creates or updates a location based on provided parameters. This function saves the location and returns a JSON\nrepresentation of the saved object."}),"\n",(0,i.jsx)(t.h3,{id:"validatelocation",children:(0,i.jsx)(t.a,{href:"/https://docs.tamaki-control.com/docs/appendix/script-api/location-script-api/validateLocation",children:(0,i.jsx)(t.code,{children:"validateLocation"})})}),"\n",(0,i.jsx)(t.p,{children:"Validates a location based on provided parameters. Returns a JSON dictionary where keys are field names and values are\nlists of validation violations."}),"\n",(0,i.jsx)(t.h3,{id:"newproperty",children:(0,i.jsx)(t.a,{href:"/https://docs.tamaki-control.com/docs/appendix/script-api/location-script-api/newProperty",children:(0,i.jsx)(t.code,{children:"newProperty"})})}),"\n",(0,i.jsx)(t.p,{children:"Creates a new location property. Returns a JSON representation of the newly created property."}),"\n",(0,i.jsx)(t.h3,{id:"getproperty",children:(0,i.jsx)(t.a,{href:"/https://docs.tamaki-control.com/docs/appendix/script-api/location-script-api/getProperty",children:(0,i.jsx)(t.code,{children:"getProperty"})})}),"\n",(0,i.jsx)(t.p,{children:"Retrieves a location property with the specified ID or name. Returns a JSON representation of the property."}),"\n",(0,i.jsx)(t.h3,{id:"saveproperty",children:(0,i.jsx)(t.a,{href:"/https://docs.tamaki-control.com/docs/appendix/script-api/location-script-api/saveProperty",children:(0,i.jsx)(t.code,{children:"saveProperty"})})}),"\n",(0,i.jsx)(t.p,{children:"Creates or updates a location property based on provided parameters. If an ID is provided and corresponds to an existing\nproperty, it updates; otherwise, it creates a new property. Returns a JSON representation of the saved property."}),"\n",(0,i.jsx)(t.h3,{id:"deleteproperty",children:(0,i.jsx)(t.a,{href:"/https://docs.tamaki-control.com/docs/appendix/script-api/location-script-api/deleteProperty",children:(0,i.jsx)(t.code,{children:"deleteProperty"})})}),"\n",(0,i.jsx)(t.p,{children:"Deletes a location property by ID, with an option to force deletion if it is referenced by other objects."}),"\n",(0,i.jsx)(t.h3,{id:"newpropertyvalue",children:(0,i.jsx)(t.a,{href:"/https://docs.tamaki-control.com/docs/appendix/script-api/location-script-api/newPropertyValue",children:(0,i.jsx)(t.code,{children:"newPropertyValue"})})}),"\n",(0,i.jsx)(t.p,{children:"Creates a new property value for a location. Returns a JSON representation of the newly created property value."}),"\n",(0,i.jsx)(t.h3,{id:"getpropertyvaluefor",children:(0,i.jsx)(t.a,{href:"/https://docs.tamaki-control.com/docs/appendix/script-api/location-script-api/getPropertyValueFor",children:(0,i.jsx)(t.code,{children:"getPropertyValueFor"})})}),"\n",(0,i.jsx)(t.p,{children:"Retrieves the value of a specified property for a given location. Returns the value as a JSON object."}),"\n",(0,i.jsx)(t.h3,{id:"validateproperty",children:(0,i.jsx)(t.a,{href:"/https://docs.tamaki-control.com/docs/appendix/script-api/location-script-api/validateProperty",children:(0,i.jsx)(t.code,{children:"validateProperty"})})}),"\n",(0,i.jsx)(t.p,{children:"Validates a location property based on provided parameters. Returns a JSON dictionary with field names as keys and lists\nof validation violations as values."}),"\n",(0,i.jsx)(t.h3,{id:"validatepropertyvalue",children:(0,i.jsx)(t.a,{href:"/https://docs.tamaki-control.com/docs/appendix/script-api/location-script-api/validatePropertyValue",children:(0,i.jsx)(t.code,{children:"validatePropertyValue"})})}),"\n",(0,i.jsx)(t.p,{children:"Validates a location property value based on provided parameters. Returns a JSON dictionary with field names as keys and\nlists of validation violations."}),"\n",(0,i.jsx)(t.h3,{id:"savepropertyvalue",children:(0,i.jsx)(t.a,{href:"/https://docs.tamaki-control.com/docs/appendix/script-api/location-script-api/savePropertyValue",children:(0,i.jsx)(t.code,{children:"savePropertyValue"})})}),"\n",(0,i.jsx)(t.p,{children:"Creates or updates a property value for a location based on provided parameters. If an ID is provided and matches an\nexisting value, it updates; otherwise, it creates a new value. Returns a JSON representation of the saved property\nvalue."}),"\n",(0,i.jsx)(t.h3,{id:"deletepropertyvalue",children:(0,i.jsx)(t.a,{href:"/https://docs.tamaki-control.com/docs/appendix/script-api/location-script-api/deletePropertyValue",children:(0,i.jsx)(t.code,{children:"deletePropertyValue"})})}),"\n",(0,i.jsx)(t.p,{children:"Deletes a property value for a location by ID."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"Explore each function\u2019s documentation for detailed usage examples and additional information."})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>n,x:()=>c});var i=o(6540);const a={},r=i.createContext(a);function n(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);