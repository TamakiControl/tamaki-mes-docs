---
sidebar_position: 1
title: "Introduction to Inventory Operation Script API"
description: "Overview of functions available in the Inventory Operation Script API."
---

# Inventory Operation Script API

Welcome to the Inventory Operation Script API documentation. This API provides a comprehensive set of functions for managing and interacting with inventory operations within the system. Below is a list of available functions, each with a brief description and a link to its detailed documentation.

## Function List

Here's the reformatted list following the structure you provided:

### [newInventoryOperation](./new-inventory-operation)

Generates an empty non-persisted [Inventory Operations](../../data-model/inventory-model/inventory-operation) object to provide the structure required by the API to save a new record into the database.
This method must be combined with the [saveInventoryOperation](./save-inventory-operation) method in order to persist the record. Returns a JSON representation of the newly created Inventory Operation object.

### [saveInventoryOperation](./save-inventory-operation)

Creates or updates an [Inventory Operations](../../data-model/inventory-model/inventory-operation) record in the system based on the provided parameters. Returns a JSON representation of the saved inventory operation.

### [getInventoryOperation](./get-inventory-operation)

Retrieves an [Inventory Operations](../../data-model/inventory-model/inventory-operation) object by its unique identifier. Returns a JSON object representing the inventory operation.

### [getAllInventoryOperations](./get-all-inventory-operations)

Retrieves all [Inventory Operations](../../data-model/inventory-model/inventory-operation) records configured in the system. Returns a JSON array of inventory operation objects.

### [getInventoryOperationsByOperation](./get-inventory-operations-by-operation)

Retrieves all the [Inventory Operations](../../data-model/inventory-model/inventory-operation) records for a given operation. Returns a list of JSON objects representing all inventory operations for a given operation.

### [getInventoryOperationsByLocation](./get-inventory-operations-by-location)

Retrieves all the [Inventory Operations](../../data-model/inventory-model/inventory-operation) records at a given location. Returns a list of JSON objects representing all inventory operations at the given location.

### [getInventoryOperationReferences](./get-inventory-operation-references)

Retrieves a list of references to an [Inventory Operations](../../data-model/inventory-model/inventory-operation) object by its ID. Returns a list of JSON objects.

### [getInventoryOperationStatus](./get-inventory-operation-status)

Retrieves the status of an [Inventory Operations](../../data-model/inventory-model/inventory-operation) object by its ID. Returns the status of the inventory operation.

### [validateInventoryOperation](./validate-inventory-operation)

Validates the specified parameters for an [Inventory Operations](../../data-model/inventory-model/inventory-operation) record and returns any validation errors.
This only checks if the inventory operation object can be saved based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [deleteInventoryOperation](./delete-inventory-operation)

Deletes an [Inventory Operations](../../data-model/inventory-model/inventory-operation) record by its ID. This cannot delete an inventory operation with references to it. If successful, an ApiResponse Object is returned with the success bool set True.

### [isSourceLocationRequired](./is-source-location-required)

Determines if a source location is required for a specific [Inventory Operations](../../data-model/inventory-model/inventory-operation) type. Returns a boolean value indicating whether a source location is required.

### [isDestinationLocationRequired](./is-destination-location-required)

Determines if a destination location is required for a specific [Inventory Operations](../../data-model/inventory-model/inventory-operation) type. Returns a boolean value indicating whether a destination location is required.

### [executeInventoryOperation](./execute-inventory-operation)

Executes an [Inventory Operations](../../data-model/inventory-model/inventory-operation) object and creates a new inventory lot record without having to start and then stop the operation.
If [Inventory Operations](../../data-model/inventory-model/inventory-operation) object is already started, this will act as a [stopInventoryOperation](./stop-inventory-operation).
Returns a JSON object of the inventory lot record for the executed inventory operation.

### [startInventoryOperation](./start-inventory-operation)

Starts an [Inventory Operations](../../data-model/inventory-model/inventory-operation) object. Returns a JSON object of the inventory lot record for the start of the inventory operation.

### [stopInventoryOperation](./stop-inventory-operation)

Stops an [Inventory Operations](../../data-model/inventory-model/inventory-operation) object. Returns a JSON object of the inventory lot record for the end of the inventory operation.

### [cancelInventoryOperation](./cancel-inventory-operation)

Cancels an [Inventory Operations](../../data-model/inventory-model/inventory-operation) object. Returns a JSON object of the inventory lot record for the cancelled inventory operation.

### [updateInventoryOperationStatesFromDatabase](./update-inventory-operation-states-from-database)

**No Parameter:** Updates the states of all the [Inventory Operations](../../data-model/inventory-model/inventory-operation) from the database.

**With a Parameter:** Updates the states of only the specified [Inventory Operations](../../data-model/inventory-model/inventory-operation) from the database given
the ID of the inventory operations.

If successful, no response is returned.

---

Explore each function’s documentation for detailed usage examples and additional information.
