"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[7198],{23650:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"appendix/script-api/material-script-api/get-property-or-create-new","title":"getPropertyOrCreateNew","description":"Retrieves or creates a material property by its ID or name depending on if it exists.","source":"@site/docs/appendix/script-api/material-script-api/get-property-or-create-new.md","sourceDirName":"appendix/script-api/material-script-api","slug":"/appendix/script-api/material-script-api/get-property-or-create-new","permalink":"/tamaki-mes-docs/docs/appendix/script-api/material-script-api/get-property-or-create-new","draft":false,"unlisted":false,"editUrl":"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/material-script-api/get-property-or-create-new.md","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"sidebar_position":30,"title":"getPropertyOrCreateNew","description":"Retrieves or creates a material property by its ID or name depending on if it exists."},"sidebar":"tutorialSidebar","previous":{"title":"saveProperty","permalink":"/tamaki-mes-docs/docs/appendix/script-api/material-script-api/save-property"},"next":{"title":"getProperty","permalink":"/tamaki-mes-docs/docs/appendix/script-api/material-script-api/get-property"}}');var s=t(74848),d=t(28453);const n={sidebar_position:30,title:"getPropertyOrCreateNew",description:"Retrieves or creates a material property by its ID or name depending on if it exists."},a="system.mes.material.getPropertyOrCreateNew",c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Code Examples",id:"code-examples",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"systemmesmaterialgetpropertyorcreatenew",children:"system.mes.material.getPropertyOrCreateNew"})}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["Retrieves a ",(0,s.jsx)(r.a,{href:"../../data-model/material-model/material-property",children:"Material Properties"})," record if an existing material property exists with the specified ID or name.\nOtherwise, creates a new ",(0,s.jsx)(r.a,{href:"../../data-model/material-model/material-property",children:"Material Properties"})," record with the specified name and attributes."]}),"\n",(0,s.jsx)(r.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"system.mes.material.getPropertyOrCreateNew(**property_data)\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"materialClassId"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"String"})," (ULID)"]}),(0,s.jsx)(r.td,{children:"The ULID of the material class associated with this material property."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"name"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"String"})}),(0,s.jsx)(r.td,{children:"The name of the material property."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"description"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"String"})}),(0,s.jsx)(r.td,{children:"A description of the material property."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"dataType"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"String"})}),(0,s.jsx)(r.td,{children:"The data type of the property (e.g., Integer, String, Float)."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"lowLimit"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Double"})}),(0,s.jsx)(r.td,{children:"The minimum value allowed for a numerical property."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"highLimit"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Double"})}),(0,s.jsx)(r.td,{children:"The maximum value allowed for a numerical property."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"format"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"String"})}),(0,s.jsx)(r.td,{children:"The format of the property, if applicable."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"unitOfMeasureId"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"String"})," (ULID)"]}),(0,s.jsx)(r.td,{children:"The ULID of the unit of measure for this property."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"unitOfMeasureName"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"String"})}),(0,s.jsx)(r.td,{children:"The name of the unit of measure for the property. For display purposes only."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"unitOfMeasureSymbol"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"String"})}),(0,s.jsx)(r.td,{children:"The symbol of the unit of measure for the property. For display purposes only."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"options"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"String"})}),(0,s.jsxs)(r.td,{children:["List of possible values for the property (e.g., ",(0,s.jsx)(r.code,{children:'"[option1, option2]"'}),")."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"nullable"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Boolean"})}),(0,s.jsx)(r.td,{children:"Defines if the property can accept null values."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"defaultValue"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Mixed"})}),(0,s.jsx)(r.td,{children:"The default value assigned to the property if none is provided. The type is mixed as it depends on what dataType is."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"id"})}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.code,{children:"String"})," (ULID)"]}),(0,s.jsx)(r.td,{children:"The ULID of the material property (optional, for updating an existing property)."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"notes"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"String"})}),(0,s.jsx)(r.td,{children:"Notes related to the material property."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"enabled"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"Boolean"})}),(0,s.jsx)(r.td,{children:"Indicates if the property is active and enabled."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"spare1"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"String"})}),(0,s.jsx)(r.td,{children:"Additional field for user-defined context."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"spare2"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"String"})}),(0,s.jsx)(r.td,{children:"Additional field for user-defined context."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"spare3"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"String"})}),(0,s.jsx)(r.td,{children:"Additional field for user-defined context."})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:"Returns a JSON representation of the material property."}),"\n",(0,s.jsx)(r.h2,{id:"code-examples",children:"Code Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"# Generate the object structure for a new property object for temperature\nnew_property = system.mes.material.newProperty()\n\n# Define property details\nnew_property['name'] = 'Temperature'\nnew_property['dataType'] = 'Float'\nnew_property['unitOfMeasureId'] = '01JAP8RJBN-4VYZUKE1-LY2QHV8X'\nnew_property['nullable'] = False\nnew_property['lowLimit'] = -20\nnew_property['highLimit'] = 50\n# (You can continue setting other properties as needed here)\n\n# Get the property if it exists, otherwise creates it with the given attributes\nproperty = system.mes.location.getPropertyOrCreateNew(**new_property)\n\n# Output the JSON representation of the property\nprint(property)\n"})})]})}function p(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>a});var i=t(96540);const s={},d=i.createContext(s);function n(e){const r=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(d.Provider,{value:r},e.children)}}}]);