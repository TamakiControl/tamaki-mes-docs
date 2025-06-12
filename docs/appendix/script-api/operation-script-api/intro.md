---
sidebar_position: 1
title: "Introduction to Operations API"
description: "Overview of functions available in the Operations API."
---

# Operations API

Welcome to the Operations API documentation. This API provides a comprehensive set of functions for managing and interacting with operations in the MES system. Below is a list of available functions, each with a brief description and a link to its detailed documentation.

## Function List

### [`newOperation`](./new-operation)

Generates an empty non-persisted [Operations](../../data-model/operation-model/operation) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveOperation](./save-operation) method in order to persist the record.
Returns a JSON representation of the newly created operation object.

### [`saveOperation`](./save-operation)

Creates or updates a [Operations](../../data-model/operation-model/operation) record in the system based on the provided parameters. Returns a JSON representation of the saved operation.

### [`findOperations`](./find-operations)

Retrieves [Operations](../../data-model/operation-model/operation) records based on the specified pagination, sort, and column constraint parameters. Returns a Query Result object.

### [`getOperation`](./get-operation)

Retrieves a [Operations](../../data-model/operation-model/operation) record by its ID. Returns a JSON representation of the operation.

### [`getOperationsByLocation`](./get-operations-by-location)

Retrieves all the [Operations](../../data-model/operation-model/operation) records at a given location. Returns a list of JSON objects representing all operations at the given location.

### [`getOperations`](./get-operations)

Retrieves all the [Operations](../../data-model/operation-model/operation) records. Returns a list of JSON objects representing all operations.

### [`getOperationReferences`](./get-operation-references)

Retrieves a list of references to an [Operations](../../data-model/operation-model/operation) object by its ID. Returns a list of JSON objects.

### [`getOperationStatus`](./get-operation-status)

Retrieves the status of an [Operations](../../data-model/operation-model/operation) object by its ID. Returns the status of the operation.

### [`validateOperation`](./validate-operation)

Validates the specified parameters for an [Operations](../../data-model/operation-model/operation) record and returns any validation errors.
This only checks if the operation object can be saved based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteOperation`](./delete-operation)

Deletes an [Operations](../../data-model/operation-model/operation) record by its ID. This cannot delete an operation with references to it. If successful, an ApiResponse Object is returned with the success bool set True.

### [`startOperation`](./start-operation)

Starts an [Operations](../../data-model/operation-model/operation) object. Returns a JSON object of the operation execution result for the start of the operation.

### [`stopOperation`](./stop-operation)

Stops an [Operations](../../data-model/operation-model/operation) object. Returns a JSON object of the operation execution result for the end of the operation.

### [`pauseOperation`](./pause-operation)

Pauses an [Operations](../../data-model/operation-model/operation) object. Returns a JSON object of the operation execution result for the suspension of the operation.

### [`setProductionOrderForOperation`](./set-production-order-for-operation)

Sets the production order for a given [Operations](../../data-model/operation-model/operation) record. No response is returned.

### [`getProductionOrderForOperation`](./get-production-order-for-operation)

Retrieves the production order for a given [Operations](../../data-model/operation-model/operation) record. Returns a JSON objects representing a production order associated with the operation.

### [`findOperationRecords`](./find-operation-records)

Retrieves [Operation Records](../../data-model/operation-model/operation-record) records based on the specified pagination, sort, and column constraint parameters. Returns a Query Result object.

### [`getActiveOperationRecords`](./get-active-operation-records)

Retrieves all active [Operation Records](../../data-model/operation-model/operation-record). Returns a list of JSON objects representing the active operation records.

### [`getOperationRecordForLocationAndDate`](./get-operation-record-for-location-and-date)

Retrieves a [Operation Records](../../data-model/operation-model/operation-record) record by the location ID or path, the start date and the end date. Returns a JSON representation of the operation record. Returns nothing if no operation record is found.

### [`getOperationRecordReferences`](./get-operation-record-references)

Retrieves a list of references to an [Operation Records](../../data-model/operation-model/operation-record) object by its ID. Returns a list of JSON objects.

### [`updateOperationStatesFromDatabase`](./update-operation-states-from-database)

**No Parameter:** Updates the states of all the [Operations](../../data-model/operation-model/operation) from the database.

**With a Parameter:** Updates the states of only the specified [Operations](../../data-model/operation-model/operation) from the database given
the ID of the operations.

If successful, no response is returned.

---

Explore each function’s documentation for detailed usage examples and additional information.
