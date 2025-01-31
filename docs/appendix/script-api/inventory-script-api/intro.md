---
sidebar_position: 1
title: "Introduction to Inventory Script API"
description: "Overview of functions available in the Inventory Script API."
---

# Inventory Script API

Welcome to the Inventory Script API documentation. This API provides a comprehensive set of functions for managing and interacting with inventory within the system. Below is a list of available functions, each with a brief description and a link to its detailed documentation.

## Function List

### [`checkLocationHasCapacity`](check-location-has-capacity)

Checks if the [Material Inventories](../../data-model/material-model/material-inventory) record can store the given quantity of material.

**NOTE:** If a material lot ID is provided, the material ID parameter becomes optional (cannot be None or left as null).
This can be left as an empty string. 

### [`newConsumeRequest`](new-consume-request)

Creates a new Consume Request record to be formatted with attributes.

### [`consume`](consume)

Consumes inventory from the MES based on the provided parameters.

### [`validateConsumeRequest`](validate-consume-request)

Validates a consume request based on the provided parameters.

### [`newUnconsumeRequest`](new-unconsume-request)

Creates a new Unconsume Request record to be formatted with attributes.

### [`unconsume`](unconsume)

Unconsumes inventory from the MES based on the provided parameters.

### [`validateUnconsumeRequest`](validate-unconsume-request)

Validates an unconsume request based on the provided parameters.

### [`newProduceRequest`](new-produce-request)

Creates a new Produce Request record to be formatted with attributes.

### [`produce`](produce)

Produces inventory from the MES based on the provided parameters.

### [`validateProduceRequest`](validate-produce-request)

Validates a produce request based on the provided parameters.

### [`newMoveRequest`](new-move-request)

Creates a new Move Request record to be formatted with attributes.

### [`move`](move)

Moves inventory from the MES based on the provided parameters.

### [`validateMoveRequest`](validate-move-request)

Validates a move request based on the provided parameters.

### [`newSplitRequest`](new-split-request)

Creates a new Split Request record to be formatted with attributes.

### [`split`](split)

Splits inventory from the MES based on the provided parameters.

### [`validateSplitRequest`](validate-split-request)

Validates a split request based on the provided parameters.

### [`newMergeRequest`](new-merge-request)

Creates a new Merge Request record to be formatted with attributes.

### [`merge`](merge)

Merges inventory from the MES based on the provided parameters.

### [`validateMergeRequest`](validate-merge-request)

Validates a merge request based on the provided parameters.

### [`newScrapRequest`](new-scrap-request)

Creates a new Scrap Request record to be formatted with attributes.

### [`scrap`](scrap)

Scraps inventory from the MES based on the provided parameters.

### [`validateScrapRequest`](validate-scrap-request)

Validates a scrap request based on the provided parameters.

### [`newReturnRequest`](new-return-request)

Creates a new Return Request record to be formatted with attributes.

### [`returnInventory`](return-inventory)

Returns inventory from the MES based on the provided parameters.

### [`validateReturnRequest`](validate-return-request)

Validates a return request based on the provided parameters.

### [`newChangeStatusRequest`](new-change-status-request)

Creates a new Change Status Request record to be formatted with attributes.

### [`changeStatus`](change-status)

Changes the status of the material lot from the MES based on the provided parameters.

### [`validateChangeStatusRequest`](validate-change-status-request)

Validates a change status request based on the provided parameters.

### [`newEditInventoryQuantityRequest`](new-edit-inventory-quantity-request)

Creates a new Edit Inventory Quantity Request record to be formatted with attributes.

### [`editInventoryQuantity`](edit-inventory-quantity)

Edit inventory quantity from the MES based on the provided parameters.

### [`validateEditInventoryQuantityRequest`](validate-edit-inventory-quantity-request)

Validates an edit inventory quantity request based on the provided parameters.

### [`newReceiveRequest`](new-receive-request)

Creates a new Receive Request record to be formatted with attributes.

### [`receive`](receive)

Receives inventory from the MES based on the provided parameters.

### [`validateReceiveRequest`](validate-receive-request)

Validates a receive request based on the provided parameters.

### [`newShipRequest`](new-ship-request)

Creates a new Ship Request record to be formatted with attributes.

### [`ship`](ship)

Ships inventory from the MES based on the provided parameters.

### [`validateShipRequest`](validate-ship-request)

Validates a ship request based on the provided parameters.

### [`executeInventoryActions`](execute-inventory-actions)

Executes a list of inventory actions in a single transaction. That means that if any of the actions fail, none of them will be executed, and any changes made to the database will be rolledback.

### [`setInventoryMetadata`](set-inventory-metadata)

Updates the metadata for a given [Material Inventories](../../data-model/material-model/material-inventory) record by its ID. This includes the notes and spare fields.

### [`publishInventoryState() and (List<String>)`](publish-inventory-state)

**No Parameter:** Publishes all of the [Material Inventories](../../data-model/material-model/material-inventory) to the tag system.

**With a Parameter:** Publishes only the specified [Material Inventories](../../data-model/material-model/material-inventory) to the tag system given 
the ID or path of the location associated with material inventory.

### [`getInventoryForMaterial`](get-inventory-for-material)

Retrieves the [Material Inventories](../../data-model/material-model/material-inventory) records for a specific material.

### [`getInventoryByLotAndLocation`](get-inventory-by-lot-and-location)

Retrieves the [Material Inventories](../../data-model/material-model/material-inventory) record based on the material lot and location.

### [`getAllInventory`](get-all-inventory)

Retrieves all the [Material Inventories](../../data-model/material-model/material-inventory) records.

### [`getAllInventoryAtLocation`](get-all-inventory-at-location)

Retrieves all the [Material Inventories](../../data-model/material-model/material-inventory) records at a given location.

### [`getAllInventoryForLocationAndChildren`](get-all-inventory-for-location-and-children)

Retrieves all the [Material Inventories](../../data-model/material-model/material-inventory) records at a given location and its children.

### [`newLotHistoryRequest`](new-lot-history-request)

Creates a new Lot History Request record to be formatted with attributes.

### [`getLotHistory`](get-lot-history)

Retrieves all [Material Lot Records](../../data-model/material-model/material-lot-record) given the material lot and other parameters.

---

Explore each function’s documentation for detailed usage examples and additional information.
