---
sidebar_position: 1
title: "Introduction to Inventory Operation Script API"
description: "Overview of functions available in the Inventory Operation Script API."
---

# Inventory Operation Script API

Welcome to the Inventory Operation Script API documentation. This API provides a comprehensive set of functions for managing and interacting with inventory operations within the system. Below is a list of available functions, each with a brief description and a link to its detailed documentation.

> Note: All export functions return raw byte arrays (byte[]) so they can be written directly to files or downloaded. Some older documentation may have referenced String return types; these have been corrected.

## Function List

### [newInventoryOperation](./new-inventory-operation)

Generates an empty non-persisted [Inventory Operation](../../data-model/inventory-operation-model/inventory-operation) object to provide the structure required by the API to save a new record into the database. Must be combined with [saveInventoryOperation](./save-inventory-operation) to persist the record. Returns a JSON representation of the new object.

### [saveInventoryOperation](./save-inventory-operation)

Creates or updates an [Inventory Operation](../../data-model/inventory-operation-model/inventory-operation) record based on provided parameters. Returns a JSON representation of the saved inventory operation.

### [validateInventoryOperation](./validate-inventory-operation)

Validates an [Inventory Operation](../../data-model/inventory-operation-model/inventory-operation) definition without saving it. Returns a JSON object mapping field names to lists of validation messages.

### [getInventoryOperation](./get-inventory-operation)

Retrieves an [Inventory Operation](../../data-model/inventory-operation-model/inventory-operation) by its unique identifier. Returns a JSON object representing the inventory operation.

### [getAllInventoryOperations](./get-all-inventory-operations)

Retrieves all configured [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation). Returns a JSON array.

### [getInventoryOperationsByOperation](./get-inventory-operations-by-operation)

Retrieves all [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) associated with a given operation. Returns a JSON array.

### [getInventoryOperationsByLocation](./get-inventory-operations-by-location)

Retrieves all [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) at a given location (by id or path). Returns a JSON array.

### [getInventoryOperationReferences](./get-inventory-operation-references)

Retrieves references to an [Inventory Operation](../../data-model/inventory-operation-model/inventory-operation) by ID. Returns a JSON structure describing references.

### [getInventoryOperationStatus](./get-inventory-operation-status)

Retrieves the status enum of an [Inventory Operation](../../data-model/inventory-operation-model/inventory-operation) by ID.

### [deleteInventoryOperation](./delete-inventory-operation)

Deletes an [Inventory Operation](../../data-model/inventory-operation-model/inventory-operation) by ID if it has no blocking references. Returns an ApiResponse.

### [executeInventoryOperation](./execute-inventory-operation)

Executes an [Inventory Operation](../../data-model/inventory-operation-model/inventory-operation) in a single step. If already running, behaves like [stopInventoryOperation](./stop-inventory-operation). Returns the resulting inventory lot record.

### [startInventoryOperation](./start-inventory-operation)

Starts an [Inventory Operation](../../data-model/inventory-operation-model/inventory-operation). Returns the started inventory lot record (open-ended).

### [stopInventoryOperation](./stop-inventory-operation)

Stops a running [Inventory Operation](../../data-model/inventory-operation-model/inventory-operation). Returns the completed inventory lot record.

### [cancelInventoryOperation](./cancel-inventory-operation)

Cancels a running [Inventory Operation](../../data-model/inventory-operation-model/inventory-operation) and the associated lot record. Returns the canceled lot record.

### [updateInventoryOperationStatesFromDatabase](./update-inventory-operation-states-from-database)

Refreshes gateway state for all or specified [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation). No return value.

### [importFromCsv](./import-from-csv)

Imports [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) from a CSV (byte array). Returns an ApiResponse containing the count imported/updated.

### [importFromJson](./import-from-json)

Imports [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) from JSON (byte array). Returns an ApiResponse containing the count imported/updated.

### [exportAsCsv](./export-as-csv)

Exports all or selected [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) as CSV (byte array) for download.

### [exportAsJson](./export-as-json)

Exports all or selected [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) as JSON (byte array) for download.

### [getInventoryOperationPermissions](./get-inventory-operation-permissions)

Retrieves the full list of permission role keys associated with the Inventory Operation API.

---

### Deprecated / Removed Functions

The following functions appeared in earlier documentation but are not available in the current API implementation:

- isSourceLocationRequired
- isDestinationLocationRequired

Their pages are retained only for historical reference and are marked deprecated.

---

Explore each function’s documentation for detailed usage examples and additional information.
