---
sidebar_position: 1
title: "Introduction to Inventory Script API"
description: "Overview of functions available in the Inventory Script API."
---

# Inventory Script API

Welcome to the Inventory Script API documentation. This API provides a comprehensive set of functions for managing and
interacting with inventory within the system. Below is a list of available functions, each with a brief description and
a link to its detailed documentation.

## Function List

### [`getInventory`](getInventory.md)

Retrieves the inventory for a material lot at a location. Returns a JSON representation of the MaterialLotRecord for the
inventory.

### [`newLotHistoryRequest`](newLotHistoryRequest.md)

Creates a new empty LotHistoryRequestDTO. Returns a JSON representation of the new LotHistoryRequestDTO object.

### [`getLotHistory`](getLotHistory.md)

Retrieves all records of a material lot that match the given criteria. Returns a JSON array of matching lot records.

### [`newConsumeRequest`](newConsumeRequest.md)

Creates a new empty ConsumeRequestDTO. Returns a JSON representation of the new ConsumeRequestDTO object.

### [`newProduceRequest`](newProduceRequest.md)

Creates a new empty ProduceRequestDTO. Returns a JSON representation of the new ProduceRequestDTO object.

### [`newReceiveRequest`](newReceiveRequest.md)

Creates a new empty ReceiveRequestDTO. Returns a JSON representation of the new ReceiveRequestDTO object.

### [`newShipRequest`](newShipRequest.md)

Creates a new empty ShipRequestDTO. Returns a JSON representation of the new ShipRequestDTO object.

### [`newScrapRequest`](newScrapRequest.md)

Creates a new empty ScrapRequestDTO. Returns a JSON representation of the new ScrapRequestDTO object.

### [`newMoveRequest`](newMoveRequest.md)

Creates a new empty MoveRequestDTO. Returns a JSON representation of the new MoveRequestDTO object.

### [`newSplitRequest`](newSplitRequest.md)

Creates a new empty SplitRequestDTO. Returns a JSON representation of the new SplitRequestDTO object.

### [`newMergeRequest`](newMergeRequest.md)

Creates a new empty MergeRequestDTO. Returns a JSON representation of the new MergeRequestDTO object.

### [`newChangeStatusRequest`](newChangeStatusRequest.md)

Creates a new empty ChangeStatusRequestDTO. Returns a JSON representation of the new ChangeStatusRequestDTO object.

### [`newEditInventoryQuantityRequest`](newEditInventoryQuantityRequest.md)

Creates a new empty EditInventoryQuantityRequestDTO. Returns a JSON representation of the new
EditInventoryQuantityRequestDTO object.

### [`validateConsumeRequest`](validateConsumeRequest.md)

Validates a consume request in the MES system. Returns a JSON dictionary with field names as keys and lists of
validation violations.

### [`validateProduceRequest`](validateProduceRequest.md)

Validates a produce request in the MES system. Returns a JSON dictionary with field names as keys and lists of
validation violations.

### [`validateReceiveRequest`](validateReceiveRequest.md)

Validates a receive request in the MES system. Returns a JSON dictionary with field names as keys and lists of
validation violations.

### [`validateShipRequest`](validateShipRequest.md)

Validates a ship request in the MES system. Returns a JSON dictionary with field names as keys and lists of validation
violations.

### [`validateScrapRequest`](validateScrapRequest.md)

Validates a scrap request in the MES system. Returns a JSON dictionary with field names as keys and lists of validation
violations.

### [`validateMoveRequest`](validateMoveRequest.md)

Validates a move request in the MES system. Returns a JSON dictionary with field names as keys and lists of validation
violations.

### [`validateSplitRequest`](validateSplitRequest.md)

Validates a split request in the MES system. Returns a JSON dictionary with field names as keys and lists of validation
violations.

### [`validateMergeRequest`](validateMergeRequest.md)

Validates a merge request in the MES system. Returns a JSON dictionary with field names as keys and lists of validation
violations.

### [`validateChangeStatusRequest`](validateChangeStatusRequest.md)

Validates a change status request in the MES system. Returns a JSON dictionary with field names as keys and lists of
validation violations.

### [`validateEditInventoryQuantityRequest`](validateEditInventoryQuantityRequest.md)

Validates an edit inventory quantity request in the MES system. Returns a JSON dictionary with field names as keys and
lists of validation violations.

### [`consume`](consume.md)

Consumes a quantity of Material Inventory from a material lot at the specified location. Returns a JSON representation
of the MaterialLotRecord for the consumption.

### [`produce`](produce.md)

Produces a quantity of Material Inventory for a material lot at the specified location. Returns a JSON representation of
the MaterialLotRecord for the production.

### [`receive`](receive.md)

Receives inventory into the MES system. If the lot indicated does not already exist, it will be created. Returns a JSON
representation of the MaterialLotRecord for the receive.

### [`ship`](ship.md)

Ships inventory from the MES system. Returns a JSON representation of the MaterialLotRecord for the shipment.

### [`scrap`](scrap.md)

Scraps inventory from the MES system. Returns a JSON representation of the MaterialLotRecord for the scrapping.

### [`move`](move.md)

Moves inventory within the MES system. Returns a JSON representation of the MaterialLotRecord for the movement.

### [`split`](split.md)

Splits a material lot into a new lot in the MES system. Returns a JSON representation of the split result.

### [`merge`](merge.md)

Merges two material lots into one in the MES system. Returns a JSON representation of the merge result.

### [`changeStatus`](changeStatus.md)

Changes the status of a material lot in the MES system. Returns a JSON representation of the status change result.

### [`editInventoryQuantity`](editInventoryQuantity.md)

Edits the quantity of a material inventory in the MES system. Returns a JSON representation of the edit result.

---

Explore each function’s documentation for detailed usage examples and additional information.