---
sidebar_position: 1
title: "Introduction to Inventory Script API"
description: "Overview of functions available in the Inventory Script API."
---

# Inventory Script API

Welcome to the Inventory Script API documentation. This API provides a comprehensive set of functions for managing and interacting with inventory within the system. Below is a list of available functions, each with a brief description and a link to its detailed documentation.

## Function List

### [`checkLocationHasCapacity`](./check-location-has-capacity)

Checks if the [Locations](../../data-model/location-model/location) record can store the given quantity of material. Returns a boolean indicating whether the location can accommodate the given quantity of inventory. Returns a boolean indicating whether the location can accommodate the given quantity of inventory.

**NOTE:** If the Material Lot ID is provided, the Material ID parameter becomes optional but must not be None; instead, use an empty string. If the Material Lot name is provided instead of its ID, the Material ID is required to locate the lot in the database, as two lots with the same name may belong to different materials.

### [`newConsumeRequest`](./new-consume-request)

Generates an empty non-persisted Consume Request to provide the structure required by the API to save a new record into the database. This method must be combined with the [consume](./consume) method in order to persist the record. Returns a JSON representation of the newly created Consume Request object.

### [`consume`](./consume)

Consumes inventory from the MES based on the provided parameters. Returns a JSON representation of a material lot record for a Consume Request.

### [`validateConsumeRequest`](./validate-consume-request)

Validates a consume request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`newUnconsumeRequest`](./new-unconsume-request)

Generates an empty non-persisted Unconsume Request to provide the structure required by the API to save a new record into the database. This method must be combined with the [unconsume](./unconsume) method in order to persist the record. Returns a JSON representation of the newly created Unconsume Request object.

### [`unconsume`](./unconsume)

Unconsumes inventory from the MES based on the provided parameters. Returns a JSON representation of a material lot record for an Unconsume Request.

### [`validateUnconsumeRequest`](./validate-unconsume-request)

Validates an unconsume request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`newProduceRequest`](./new-produce-request)

Generates an empty non-persisted Produce Request to provide the structure required by the API to save a new record into the database. This method must be combined with the [produce](./produce) method in order to persist the record. Returns a JSON representation of the newly created Produce Request object.

### [`produce`](./produce)

Produces inventory from the MES based on the provided parameters. Returns a JSON representation of a material lot record for a Produce Request.

### [`validateProduceRequest`](./validate-produce-request)

Validates a produce request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`newMoveRequest`](./new-move-request)

Generates an empty non-persisted Move Request to provide the structure required by the API to save a new record into the database. This method must be combined with the [move](./move) method in order to persist the record. Returns a JSON representation of the newly created Move Request object.

### [`move`](./move)

Moves inventory from the MES based on the provided parameters. Returns a JSON representation of a material lot record for a Move Request.

### [`validateMoveRequest`](./validate-move-request)

Validates a move request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`newSplitRequest`](./new-split-request)

Generates an empty non-persisted Split Request to provide the structure required by the API to save a new record into the database. This method must be combined with the [split](./split) method in order to persist the record. Returns a JSON representation of the newly created Split Request object.

### [`split`](./split)

Splits inventory from the MES based on the provided parameters. Returns a JSON representation of a material lot record for a Split Request.

### [`validateSplitRequest`](./validate-split-request)

Validates a split request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`newMergeRequest`](./new-merge-request)

Generates an empty non-persisted Merge Request to provide the structure required by the API to save a new record into the database. This method must be combined with the [merge](./merge) method in order to persist the record. Returns a JSON representation of the newly created Merge Request object.

### [`merge`](./merge)

Merges inventory from the MES based on the provided parameters. Returns a JSON representation of a material lot record for a Merge Request.

### [`validateMergeRequest`](./validate-merge-request)

Validates a merge request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`newScrapRequest`](./new-scrap-request)

Generates an empty non-persisted Scrap Request to provide the structure required by the API to save a new record into the database. This method must be combined with the [scrap](./scrap) method in order to persist the record. Returns a JSON representation of the newly created Scrap Request object.

### [`scrap`](./scrap)

Scraps inventory from the MES based on the provided parameters. Returns a JSON representation of a material lot record for a Scrap Request.

### [`validateScrapRequest`](./validate-scrap-request)

Validates a scrap request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`newReturnRequest`](./new-return-request)

Generates an empty non-persisted Return Request to provide the structure required by the API to save a new record into the database. This method must be combined with the [returnInventory](./return-inventory) method in order to persist the record. Returns a JSON representation of the newly created Return Request object.

### [`returnInventory`](./return-inventory)

Returns inventory from the MES based on the provided parameters. Returns a JSON representation of a material lot record for a Return Request.

### [`validateReturnRequest`](./validate-return-request)

Validates a return request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`newChangeStatusRequest`](./new-change-status-request)

Generates an empty non-persisted Change Status Request to provide the structure required by the API to save a new record into the database. This method must be combined with the [changeStatus](./change-status) method in order to persist the record. Returns a JSON representation of the newly created Change Status Request object.

### [`changeStatus`](./change-status)

Changes the status of the material lot from the MES based on the provided parameters. Returns a JSON representation of a material lot record for a Change Status Request.

### [`validateChangeStatusRequest`](./validate-change-status-request)

Validates a change status request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`newEditInventoryQuantityRequest`](./new-edit-inventory-quantity-request)

Generates an empty non-persisted Edit Inventory Quantity Request to provide the structure required by the API to save a new record into the database. This method must be combined with the [editInventoryQuantity](./edit-inventory-quantity) method in order to persist the record. Returns a JSON representation of the newly created Edit Inventory Quantity Request object.

### [`editInventoryQuantity`](./edit-inventory-quantity)

Edit inventory quantity from the MES based on the provided parameters. Returns a JSON representation of a material lot record for an Edit Inventory Quantity Request.

### [`validateEditInventoryQuantityRequest`](./validate-edit-inventory-quantity-request)

Validates an edit inventory quantity request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`newReceiveRequest`](./new-receive-request)

Generates an empty non-persisted Receive Request to provide the structure required by the API to save a new record into the database. This method must be combined with the [receive](./receive) method in order to persist the record. Returns a JSON representation of the newly created Receive Request object.

### [`receive`](./receive)

Receives inventory into the MES based on the provided parameters. Returns a JSON representation of a material lot record for a Receive Request.

### [`validateReceiveRequest`](./validate-receive-request)

Validates a receive request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`newShipRequest`](./new-ship-request)

Generates an empty non-persisted Ship Request to provide the structure required by the API to save a new record into the database. This method must be combined with the [ship](./ship) method in order to persist the record. Returns a JSON representation of the newly created Ship Request object.

### [`ship`](./ship)

Ships inventory from the MES based on the provided parameters. Returns a JSON representation of a material lot record for a Ship Request.

### [`validateShipRequest`](./validate-ship-request)

Validates a ship request based on the provided parameters. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`executeInventoryActions`](./execute-inventory-actions)

Executes a list of inventory actions in a single transaction. That means that if any of the actions fail, none of them will be executed, and any changes made to the database will be rolled back. Returns a list of JSON representation of material lot records for the inventory actions executed.

### [`setInventoryMetadata`](./set-inventory-metadata)

Updates the metadata for a given [Material Inventories](../../data-model/material-model/material-inventory) record by its ID. This includes the notes and spare fields. Returns a JSON representation of an inventory.

### [`publishInventoryState() and (List<String>)`](./publish-inventory-state)

**No Parameter:** Publishes all of the [Material Inventories](../../data-model/material-model/material-inventory) to the tag system.

**With a Parameter:** Publishes only the specified [Material Inventories](../../data-model/material-model/material-inventory) to the tag system given the ID or path of the location associated with material inventory.

If successful, no response is returned.

### [`getInventoryForMaterial`](./get-inventory-for-material)

Retrieves the [Material Inventories](../../data-model/material-model/material-inventory) records for a specific material. Returns a list of JSON objects representing all inventories for a specific material.

### [`getInventoryByLotAndLocation`](./get-inventory-by-lot-and-location)

Retrieves the [Material Inventories](../../data-model/material-model/material-inventory) record based on the material lot and location. Returns a JSON representation of a material inventory.

### [`getAllInventory`](./get-all-inventory)

Retrieves all the [Material Inventories](../../data-model/material-model/material-inventory) records. Returns a list of JSON objects representing all material inventories.

### [`getAllInventoryAtLocation`](./get-all-inventory-at-location)

Retrieves all the [Material Inventories](../../data-model/material-model/material-inventory) records at a given location. Returns a list of JSON objects representing all material inventories at the given location.

### [`getAllInventoryForLocationAndChildren`](./get-all-inventory-for-location-and-children)

Retrieves all the [Material Inventories](../../data-model/material-model/material-inventory) records at a given location and its children. Returns a list of JSON objects representing all material inventories at the given location and its children.

### [`newLotHistoryRequest`](./new-lot-history-request)

Generates an empty non-persisted Lot History Request to provide the structure required by the API to retrieve records from the database. This method must be combined with the [getLotHistory](./get-lot-history) method to retrieve the records. Returns a JSON representation of the newly created Lot History Request object.

### [`getLotHistory`](./get-lot-history)

Retrieves all [Material Lot Records](../../data-model/material-model/material-lot-record) given the material lot and other parameters. Returns a list of JSON objects representing all material lot records for a material lot and other parameters.

---

Explore each function’s documentation for detailed usage examples and additional information.