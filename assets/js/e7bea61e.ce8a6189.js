"use strict";(self.webpackChunktamaki_mes_docs=self.webpackChunktamaki_mes_docs||[]).push([[5575],{9276:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=r(4848),i=r(8453);const a={sidebar_position:1,title:"Introduction to Inventory Script API",description:"Overview of functions available in the Inventory Script API."},s="Inventory Script API",o={id:"appendix/script-api/inventory-script-api/intro",title:"Introduction to Inventory Script API",description:"Overview of functions available in the Inventory Script API.",source:"@site/docs/appendix/script-api/inventory-script-api/intro.md",sourceDirName:"appendix/script-api/inventory-script-api",slug:"/appendix/script-api/inventory-script-api/intro",permalink:"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/TamakiControl/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction to Inventory Script API",description:"Overview of functions available in the Inventory Script API."},sidebar:"tutorialSidebar",previous:{title:"getEquipmentClasses",permalink:"/tamaki-mes-docs/docs/appendix/script-api/equipment-script-api/get-equipment-classes"},next:{title:"checkLocationHasCapacity",permalink:"/tamaki-mes-docs/docs/appendix/script-api/inventory-script-api/check-location-has-capacity"}},d={},l=[{value:"Function List",id:"function-list",level:2},{value:"<code>checkLocationHasCapacity</code>",id:"checklocationhascapacity",level:3},{value:"<code>newConsumeRequest</code>",id:"newconsumerequest",level:3},{value:"<code>consume</code>",id:"consume",level:3},{value:"<code>validateConsumeRequest</code>",id:"validateconsumerequest",level:3},{value:"<code>newUnconsumeRequest</code>",id:"newunconsumerequest",level:3},{value:"<code>unconsume</code>",id:"unconsume",level:3},{value:"<code>validateUnconsumeRequest</code>",id:"validateunconsumerequest",level:3},{value:"<code>newProduceRequest</code>",id:"newproducerequest",level:3},{value:"<code>produce</code>",id:"produce",level:3},{value:"<code>validateProduceRequest</code>",id:"validateproducerequest",level:3},{value:"<code>newMoveRequest</code>",id:"newmoverequest",level:3},{value:"<code>move</code>",id:"move",level:3},{value:"<code>validateMoveRequest</code>",id:"validatemoverequest",level:3},{value:"<code>newSplitRequest</code>",id:"newsplitrequest",level:3},{value:"<code>split</code>",id:"split",level:3},{value:"<code>validateSplitRequest</code>",id:"validatesplitrequest",level:3},{value:"<code>newMergeRequest</code>",id:"newmergerequest",level:3},{value:"<code>merge</code>",id:"merge",level:3},{value:"<code>validateMergeRequest</code>",id:"validatemergerequest",level:3},{value:"<code>newScrapRequest</code>",id:"newscraprequest",level:3},{value:"<code>scrap</code>",id:"scrap",level:3},{value:"<code>validateScrapRequest</code>",id:"validatescraprequest",level:3},{value:"<code>newReturnRequest</code>",id:"newreturnrequest",level:3},{value:"<code>returnInventory</code>",id:"returninventory",level:3},{value:"<code>validateReturnRequest</code>",id:"validatereturnrequest",level:3},{value:"<code>newChangeStatusRequest</code>",id:"newchangestatusrequest",level:3},{value:"<code>changeStatus</code>",id:"changestatus",level:3},{value:"<code>validateChangeStatusRequest</code>",id:"validatechangestatusrequest",level:3},{value:"<code>newEditInventoryQuantityRequest</code>",id:"neweditinventoryquantityrequest",level:3},{value:"<code>editInventoryQuantity</code>",id:"editinventoryquantity",level:3},{value:"<code>validateEditInventoryQuantityRequest</code>",id:"validateeditinventoryquantityrequest",level:3},{value:"<code>newReceiveRequest</code>",id:"newreceiverequest",level:3},{value:"<code>receive</code>",id:"receive",level:3},{value:"<code>validateReceiveRequest</code>",id:"validatereceiverequest",level:3},{value:"<code>newShipRequest</code>",id:"newshiprequest",level:3},{value:"<code>ship</code>",id:"ship",level:3},{value:"<code>validateShipRequest</code>",id:"validateshiprequest",level:3},{value:"<code>executeInventoryActions</code>",id:"executeinventoryactions",level:3},{value:"<code>setInventoryMetadata</code>",id:"setinventorymetadata",level:3},{value:"<code>publishInventoryState() and (List&lt;String&gt;)</code>",id:"publishinventorystate-and-liststring",level:3},{value:"<code>getInventoryForMaterial</code>",id:"getinventoryformaterial",level:3},{value:"<code>getInventoryByLotAndLocation</code>",id:"getinventorybylotandlocation",level:3},{value:"<code>getAllInventory</code>",id:"getallinventory",level:3},{value:"<code>getAllInventoryAtLocation</code>",id:"getallinventoryatlocation",level:3},{value:"<code>getAllInventoryForLocationAndChildren</code>",id:"getallinventoryforlocationandchildren",level:3},{value:"<code>newLotHistoryRequest</code>",id:"newlothistoryrequest",level:3},{value:"<code>getLotHistory</code>",id:"getlothistory",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"inventory-script-api",children:"Inventory Script API"})}),"\n",(0,n.jsx)(t.p,{children:"Welcome to the Inventory Script API documentation. This API provides a comprehensive set of functions for managing and interacting with inventory within the system. Below is a list of available functions, each with a brief description and a link to its detailed documentation."}),"\n",(0,n.jsx)(t.h2,{id:"function-list",children:"Function List"}),"\n",(0,n.jsx)(t.h3,{id:"checklocationhascapacity",children:(0,n.jsx)(t.a,{href:"./check-location-has-capacity",children:(0,n.jsx)(t.code,{children:"checkLocationHasCapacity"})})}),"\n",(0,n.jsxs)(t.p,{children:["Checks if the ",(0,n.jsx)(t.a,{href:"../../data-model/location-model/location",children:"Locations"})," record can store the given quantity of material. Returns a boolean indicating whether the location can accommodate the given quantity of inventory. Returns a boolean indicating whether the location can accommodate the given quantity of inventory."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"NOTE:"})," If the Material Lot ID is provided, the Material ID parameter becomes optional but must not be None; instead, use an empty string. If the Material Lot name is provided instead of its ID, the Material ID is required to locate the lot in the database, as two lots with the same name may belong to different materials."]}),"\n",(0,n.jsx)(t.h3,{id:"newconsumerequest",children:(0,n.jsx)(t.a,{href:"./new-consume-request",children:(0,n.jsx)(t.code,{children:"newConsumeRequest"})})}),"\n",(0,n.jsxs)(t.p,{children:["Generates an empty non-persisted Consume Request to provide the structure required by the API to save a new record into the database. This method must be combined with the ",(0,n.jsx)(t.a,{href:"./consume",children:"consume"})," method in order to persist the record. Returns a JSON representation of the newly created Consume Request object."]}),"\n",(0,n.jsx)(t.h3,{id:"consume",children:(0,n.jsx)(t.a,{href:"./consume",children:(0,n.jsx)(t.code,{children:"consume"})})}),"\n",(0,n.jsx)(t.p,{children:"Consumes inventory from the MES based on the provided parameters. Returns a JSON representation of a material lot record for a Consume Request."}),"\n",(0,n.jsx)(t.h3,{id:"validateconsumerequest",children:(0,n.jsx)(t.a,{href:"./validate-consume-request",children:(0,n.jsx)(t.code,{children:"validateConsumeRequest"})})}),"\n",(0,n.jsx)(t.p,{children:"Validates a consume request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages."}),"\n",(0,n.jsx)(t.h3,{id:"newunconsumerequest",children:(0,n.jsx)(t.a,{href:"./new-unconsume-request",children:(0,n.jsx)(t.code,{children:"newUnconsumeRequest"})})}),"\n",(0,n.jsxs)(t.p,{children:["Generates an empty non-persisted Unconsume Request to provide the structure required by the API to save a new record into the database. This method must be combined with the ",(0,n.jsx)(t.a,{href:"./unconsume",children:"unconsume"})," method in order to persist the record. Returns a JSON representation of the newly created Unconsume Request object."]}),"\n",(0,n.jsx)(t.h3,{id:"unconsume",children:(0,n.jsx)(t.a,{href:"./unconsume",children:(0,n.jsx)(t.code,{children:"unconsume"})})}),"\n",(0,n.jsx)(t.p,{children:"Unconsumes inventory from the MES based on the provided parameters. Returns a JSON representation of a material lot record for an Unconsume Request."}),"\n",(0,n.jsx)(t.h3,{id:"validateunconsumerequest",children:(0,n.jsx)(t.a,{href:"./validate-unconsume-request",children:(0,n.jsx)(t.code,{children:"validateUnconsumeRequest"})})}),"\n",(0,n.jsx)(t.p,{children:"Validates an unconsume request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages."}),"\n",(0,n.jsx)(t.h3,{id:"newproducerequest",children:(0,n.jsx)(t.a,{href:"./new-produce-request",children:(0,n.jsx)(t.code,{children:"newProduceRequest"})})}),"\n",(0,n.jsxs)(t.p,{children:["Generates an empty non-persisted Produce Request to provide the structure required by the API to save a new record into the database. This method must be combined with the ",(0,n.jsx)(t.a,{href:"./produce",children:"produce"})," method in order to persist the record. Returns a JSON representation of the newly created Produce Request object."]}),"\n",(0,n.jsx)(t.h3,{id:"produce",children:(0,n.jsx)(t.a,{href:"./produce",children:(0,n.jsx)(t.code,{children:"produce"})})}),"\n",(0,n.jsx)(t.p,{children:"Produces inventory from the MES based on the provided parameters. Returns a JSON representation of a material lot record for a Produce Request."}),"\n",(0,n.jsx)(t.h3,{id:"validateproducerequest",children:(0,n.jsx)(t.a,{href:"./validate-produce-request",children:(0,n.jsx)(t.code,{children:"validateProduceRequest"})})}),"\n",(0,n.jsx)(t.p,{children:"Validates a produce request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages."}),"\n",(0,n.jsx)(t.h3,{id:"newmoverequest",children:(0,n.jsx)(t.a,{href:"./new-move-request",children:(0,n.jsx)(t.code,{children:"newMoveRequest"})})}),"\n",(0,n.jsxs)(t.p,{children:["Generates an empty non-persisted Move Request to provide the structure required by the API to save a new record into the database. This method must be combined with the ",(0,n.jsx)(t.a,{href:"./move",children:"move"})," method in order to persist the record. Returns a JSON representation of the newly created Move Request object."]}),"\n",(0,n.jsx)(t.h3,{id:"move",children:(0,n.jsx)(t.a,{href:"./move",children:(0,n.jsx)(t.code,{children:"move"})})}),"\n",(0,n.jsx)(t.p,{children:"Moves inventory from the MES based on the provided parameters. Returns a JSON representation of a material lot record for a Move Request."}),"\n",(0,n.jsx)(t.h3,{id:"validatemoverequest",children:(0,n.jsx)(t.a,{href:"./validate-move-request",children:(0,n.jsx)(t.code,{children:"validateMoveRequest"})})}),"\n",(0,n.jsx)(t.p,{children:"Validates a move request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages."}),"\n",(0,n.jsx)(t.h3,{id:"newsplitrequest",children:(0,n.jsx)(t.a,{href:"./new-split-request",children:(0,n.jsx)(t.code,{children:"newSplitRequest"})})}),"\n",(0,n.jsxs)(t.p,{children:["Generates an empty non-persisted Split Request to provide the structure required by the API to save a new record into the database. This method must be combined with the ",(0,n.jsx)(t.a,{href:"./split",children:"split"})," method in order to persist the record. Returns a JSON representation of the newly created Split Request object."]}),"\n",(0,n.jsx)(t.h3,{id:"split",children:(0,n.jsx)(t.a,{href:"./split",children:(0,n.jsx)(t.code,{children:"split"})})}),"\n",(0,n.jsx)(t.p,{children:"Splits inventory from the MES based on the provided parameters. Returns a JSON representation of a material lot record for a Split Request."}),"\n",(0,n.jsx)(t.h3,{id:"validatesplitrequest",children:(0,n.jsx)(t.a,{href:"./validate-split-request",children:(0,n.jsx)(t.code,{children:"validateSplitRequest"})})}),"\n",(0,n.jsx)(t.p,{children:"Validates a split request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages."}),"\n",(0,n.jsx)(t.h3,{id:"newmergerequest",children:(0,n.jsx)(t.a,{href:"./new-merge-request",children:(0,n.jsx)(t.code,{children:"newMergeRequest"})})}),"\n",(0,n.jsxs)(t.p,{children:["Generates an empty non-persisted Merge Request to provide the structure required by the API to save a new record into the database. This method must be combined with the ",(0,n.jsx)(t.a,{href:"./merge",children:"merge"})," method in order to persist the record. Returns a JSON representation of the newly created Merge Request object."]}),"\n",(0,n.jsx)(t.h3,{id:"merge",children:(0,n.jsx)(t.a,{href:"./merge",children:(0,n.jsx)(t.code,{children:"merge"})})}),"\n",(0,n.jsx)(t.p,{children:"Merges inventory from the MES based on the provided parameters. Returns a JSON representation of a material lot record for a Merge Request."}),"\n",(0,n.jsx)(t.h3,{id:"validatemergerequest",children:(0,n.jsx)(t.a,{href:"./validate-merge-request",children:(0,n.jsx)(t.code,{children:"validateMergeRequest"})})}),"\n",(0,n.jsx)(t.p,{children:"Validates a merge request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages."}),"\n",(0,n.jsx)(t.h3,{id:"newscraprequest",children:(0,n.jsx)(t.a,{href:"./new-scrap-request",children:(0,n.jsx)(t.code,{children:"newScrapRequest"})})}),"\n",(0,n.jsxs)(t.p,{children:["Generates an empty non-persisted Scrap Request to provide the structure required by the API to save a new record into the database. This method must be combined with the ",(0,n.jsx)(t.a,{href:"./scrap",children:"scrap"})," method in order to persist the record. Returns a JSON representation of the newly created Scrap Request object."]}),"\n",(0,n.jsx)(t.h3,{id:"scrap",children:(0,n.jsx)(t.a,{href:"./scrap",children:(0,n.jsx)(t.code,{children:"scrap"})})}),"\n",(0,n.jsx)(t.p,{children:"Scraps inventory from the MES based on the provided parameters. Returns a JSON representation of a material lot record for a Scrap Request."}),"\n",(0,n.jsx)(t.h3,{id:"validatescraprequest",children:(0,n.jsx)(t.a,{href:"./validate-scrap-request",children:(0,n.jsx)(t.code,{children:"validateScrapRequest"})})}),"\n",(0,n.jsx)(t.p,{children:"Validates a scrap request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages."}),"\n",(0,n.jsx)(t.h3,{id:"newreturnrequest",children:(0,n.jsx)(t.a,{href:"./new-return-request",children:(0,n.jsx)(t.code,{children:"newReturnRequest"})})}),"\n",(0,n.jsxs)(t.p,{children:["Generates an empty non-persisted Return Request to provide the structure required by the API to save a new record into the database. This method must be combined with the ",(0,n.jsx)(t.a,{href:"./return-inventory",children:"returnInventory"})," method in order to persist the record. Returns a JSON representation of the newly created Return Request object."]}),"\n",(0,n.jsx)(t.h3,{id:"returninventory",children:(0,n.jsx)(t.a,{href:"./return-inventory",children:(0,n.jsx)(t.code,{children:"returnInventory"})})}),"\n",(0,n.jsx)(t.p,{children:"Returns inventory from the MES based on the provided parameters. Returns a JSON representation of a material lot record for a Return Request."}),"\n",(0,n.jsx)(t.h3,{id:"validatereturnrequest",children:(0,n.jsx)(t.a,{href:"./validate-return-request",children:(0,n.jsx)(t.code,{children:"validateReturnRequest"})})}),"\n",(0,n.jsx)(t.p,{children:"Validates a return request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages."}),"\n",(0,n.jsx)(t.h3,{id:"newchangestatusrequest",children:(0,n.jsx)(t.a,{href:"./new-change-status-request",children:(0,n.jsx)(t.code,{children:"newChangeStatusRequest"})})}),"\n",(0,n.jsxs)(t.p,{children:["Generates an empty non-persisted Change Status Request to provide the structure required by the API to save a new record into the database. This method must be combined with the ",(0,n.jsx)(t.a,{href:"./change-status",children:"changeStatus"})," method in order to persist the record. Returns a JSON representation of the newly created Change Status Request object."]}),"\n",(0,n.jsx)(t.h3,{id:"changestatus",children:(0,n.jsx)(t.a,{href:"./change-status",children:(0,n.jsx)(t.code,{children:"changeStatus"})})}),"\n",(0,n.jsx)(t.p,{children:"Changes the status of the material lot from the MES based on the provided parameters. Returns a JSON representation of a material lot record for a Change Status Request."}),"\n",(0,n.jsx)(t.h3,{id:"validatechangestatusrequest",children:(0,n.jsx)(t.a,{href:"./validate-change-status-request",children:(0,n.jsx)(t.code,{children:"validateChangeStatusRequest"})})}),"\n",(0,n.jsx)(t.p,{children:"Validates a change status request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages."}),"\n",(0,n.jsx)(t.h3,{id:"neweditinventoryquantityrequest",children:(0,n.jsx)(t.a,{href:"./new-edit-inventory-quantity-request",children:(0,n.jsx)(t.code,{children:"newEditInventoryQuantityRequest"})})}),"\n",(0,n.jsxs)(t.p,{children:["Generates an empty non-persisted Edit Inventory Quantity Request to provide the structure required by the API to save a new record into the database. This method must be combined with the ",(0,n.jsx)(t.a,{href:"./edit-inventory-quantity",children:"editInventoryQuantity"})," method in order to persist the record. Returns a JSON representation of the newly created Edit Inventory Quantity Request object."]}),"\n",(0,n.jsx)(t.h3,{id:"editinventoryquantity",children:(0,n.jsx)(t.a,{href:"./edit-inventory-quantity",children:(0,n.jsx)(t.code,{children:"editInventoryQuantity"})})}),"\n",(0,n.jsx)(t.p,{children:"Edit inventory quantity from the MES based on the provided parameters. Returns a JSON representation of a material lot record for an Edit Inventory Quantity Request."}),"\n",(0,n.jsx)(t.h3,{id:"validateeditinventoryquantityrequest",children:(0,n.jsx)(t.a,{href:"./validate-edit-inventory-quantity-request",children:(0,n.jsx)(t.code,{children:"validateEditInventoryQuantityRequest"})})}),"\n",(0,n.jsx)(t.p,{children:"Validates an edit inventory quantity request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages."}),"\n",(0,n.jsx)(t.h3,{id:"newreceiverequest",children:(0,n.jsx)(t.a,{href:"./new-receive-request",children:(0,n.jsx)(t.code,{children:"newReceiveRequest"})})}),"\n",(0,n.jsxs)(t.p,{children:["Generates an empty non-persisted Receive Request to provide the structure required by the API to save a new record into the database. This method must be combined with the ",(0,n.jsx)(t.a,{href:"./receive",children:"receive"})," method in order to persist the record. Returns a JSON representation of the newly created Receive Request object."]}),"\n",(0,n.jsx)(t.h3,{id:"receive",children:(0,n.jsx)(t.a,{href:"./receive",children:(0,n.jsx)(t.code,{children:"receive"})})}),"\n",(0,n.jsx)(t.p,{children:"Receives inventory into the MES based on the provided parameters. Returns a JSON representation of a material lot record for a Receive Request."}),"\n",(0,n.jsx)(t.h3,{id:"validatereceiverequest",children:(0,n.jsx)(t.a,{href:"./validate-receive-request",children:(0,n.jsx)(t.code,{children:"validateReceiveRequest"})})}),"\n",(0,n.jsx)(t.p,{children:"Validates a receive request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages."}),"\n",(0,n.jsx)(t.h3,{id:"newshiprequest",children:(0,n.jsx)(t.a,{href:"./new-ship-request",children:(0,n.jsx)(t.code,{children:"newShipRequest"})})}),"\n",(0,n.jsxs)(t.p,{children:["Generates an empty non-persisted Ship Request to provide the structure required by the API to save a new record into the database. This method must be combined with the ",(0,n.jsx)(t.a,{href:"./ship",children:"ship"})," method in order to persist the record. Returns a JSON representation of the newly created Ship Request object."]}),"\n",(0,n.jsx)(t.h3,{id:"ship",children:(0,n.jsx)(t.a,{href:"./ship",children:(0,n.jsx)(t.code,{children:"ship"})})}),"\n",(0,n.jsx)(t.p,{children:"Ships inventory from the MES based on the provided parameters. Returns a JSON representation of a material lot record for a Ship Request."}),"\n",(0,n.jsx)(t.h3,{id:"validateshiprequest",children:(0,n.jsx)(t.a,{href:"./validate-ship-request",children:(0,n.jsx)(t.code,{children:"validateShipRequest"})})}),"\n",(0,n.jsx)(t.p,{children:"Validates a ship request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages."}),"\n",(0,n.jsx)(t.h3,{id:"executeinventoryactions",children:(0,n.jsx)(t.a,{href:"./execute-inventory-actions",children:(0,n.jsx)(t.code,{children:"executeInventoryActions"})})}),"\n",(0,n.jsx)(t.p,{children:"Executes a list of inventory actions in a single transaction. That means that if any of the actions fail, none of them will be executed, and any changes made to the database will be rolled back. Returns a list of JSON representation of material lot records for the inventory actions executed."}),"\n",(0,n.jsx)(t.h3,{id:"setinventorymetadata",children:(0,n.jsx)(t.a,{href:"./set-inventory-metadata",children:(0,n.jsx)(t.code,{children:"setInventoryMetadata"})})}),"\n",(0,n.jsxs)(t.p,{children:["Updates the metadata for a given ",(0,n.jsx)(t.a,{href:"../../data-model/material-model/material-inventory",children:"Material Inventories"})," record by its ID. This includes the notes and spare fields. Returns a JSON representation of an inventory."]}),"\n",(0,n.jsx)(t.h3,{id:"publishinventorystate-and-liststring",children:(0,n.jsx)(t.a,{href:"./publish-inventory-state",children:(0,n.jsx)(t.code,{children:"publishInventoryState() and (List<String>)"})})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"No Parameter:"})," Publishes all of the ",(0,n.jsx)(t.a,{href:"../../data-model/material-model/material-inventory",children:"Material Inventories"})," to the tag system."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"With a Parameter:"})," Publishes only the specified ",(0,n.jsx)(t.a,{href:"../../data-model/material-model/material-inventory",children:"Material Inventories"})," to the tag system given the ID or path of the location associated with material inventory."]}),"\n",(0,n.jsx)(t.p,{children:"If successful, no response is returned."}),"\n",(0,n.jsx)(t.h3,{id:"getinventoryformaterial",children:(0,n.jsx)(t.a,{href:"./get-inventory-for-material",children:(0,n.jsx)(t.code,{children:"getInventoryForMaterial"})})}),"\n",(0,n.jsxs)(t.p,{children:["Retrieves the ",(0,n.jsx)(t.a,{href:"../../data-model/material-model/material-inventory",children:"Material Inventories"})," records for a specific material. Returns a list of JSON objects representing all inventories for a specific material."]}),"\n",(0,n.jsx)(t.h3,{id:"getinventorybylotandlocation",children:(0,n.jsx)(t.a,{href:"./get-inventory-by-lot-and-location",children:(0,n.jsx)(t.code,{children:"getInventoryByLotAndLocation"})})}),"\n",(0,n.jsxs)(t.p,{children:["Retrieves the ",(0,n.jsx)(t.a,{href:"../../data-model/material-model/material-inventory",children:"Material Inventories"})," record based on the material lot and location. Returns a JSON representation of a material inventory."]}),"\n",(0,n.jsx)(t.h3,{id:"getallinventory",children:(0,n.jsx)(t.a,{href:"./get-all-inventory",children:(0,n.jsx)(t.code,{children:"getAllInventory"})})}),"\n",(0,n.jsxs)(t.p,{children:["Retrieves all the ",(0,n.jsx)(t.a,{href:"../../data-model/material-model/material-inventory",children:"Material Inventories"})," records. Returns a list of JSON objects representing all material inventories."]}),"\n",(0,n.jsx)(t.h3,{id:"getallinventoryatlocation",children:(0,n.jsx)(t.a,{href:"./get-all-inventory-at-location",children:(0,n.jsx)(t.code,{children:"getAllInventoryAtLocation"})})}),"\n",(0,n.jsxs)(t.p,{children:["Retrieves all the ",(0,n.jsx)(t.a,{href:"../../data-model/material-model/material-inventory",children:"Material Inventories"})," records at a given location. Returns a list of JSON objects representing all material inventories at the given location."]}),"\n",(0,n.jsx)(t.h3,{id:"getallinventoryforlocationandchildren",children:(0,n.jsx)(t.a,{href:"./get-all-inventory-for-location-and-children",children:(0,n.jsx)(t.code,{children:"getAllInventoryForLocationAndChildren"})})}),"\n",(0,n.jsxs)(t.p,{children:["Retrieves all the ",(0,n.jsx)(t.a,{href:"../../data-model/material-model/material-inventory",children:"Material Inventories"})," records at a given location and its children. Returns a list of JSON objects representing all material inventories at the given location and its children."]}),"\n",(0,n.jsx)(t.h3,{id:"newlothistoryrequest",children:(0,n.jsx)(t.a,{href:"./new-lot-history-request",children:(0,n.jsx)(t.code,{children:"newLotHistoryRequest"})})}),"\n",(0,n.jsxs)(t.p,{children:["Generates an empty non-persisted Lot History Request to provide the structure required by the API to retrieve records from the database. This method must be combined with the ",(0,n.jsx)(t.a,{href:"./get-lot-history",children:"getLotHistory"})," method to retrieve the records. Returns a JSON representation of the newly created Lot History Request object."]}),"\n",(0,n.jsx)(t.h3,{id:"getlothistory",children:(0,n.jsx)(t.a,{href:"./get-lot-history",children:(0,n.jsx)(t.code,{children:"getLotHistory"})})}),"\n",(0,n.jsxs)(t.p,{children:["Retrieves all ",(0,n.jsx)(t.a,{href:"../../data-model/material-model/material-lot-record",children:"Material Lot Records"})," given the material lot and other parameters. Returns a list of JSON objects representing all material lot records for a material lot and other parameters."]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Explore each function\u2019s documentation for detailed usage examples and additional information."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>o});var n=r(6540);const i={},a=n.createContext(i);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);