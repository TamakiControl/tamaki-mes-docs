---
sidebar_position: 27
title: "newChangeStatusRequest"
description: "Generates an empty non-persisted change status request to provide the structure to save a new record into the database."
---

# system.mes.inventory.newChangeStatusRequest

Generates an empty non-persisted Change Status Request to provide the structure required by the API to save a new record into the database.
This method must be combined with the [changeStatus](./change-status) method in order to persist the record.

## Syntax

```python
system.mes.inventory.newChangeStatusRequest()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Change Status Request object. The following is a list of keys and default values:

| Key                     | Default Value   |
|-------------------------|-----------------|
| `type`                  | `STATUS_CHANGE` |
| `lotId`                 | `null`          |
| `newStatus`             | `null`          |
| `operationId`           | `null`          |
| `inventoryOperationId`  | `null`          |
| `notes`                 | `null`          |
| `spare1`                | `null`          |
| `spare2`                | `null`          |
| `spare3`                | `null`          |

## Code Examples

```python
# Generate the object structure for a new change status request object with no initial arguments
newRequest = system.mes.inventory.newChangeStatusRequest()

# Set basic attributes for the new change status requestOPOE
newRequest['newStatus'] = 'AVAILABLE'
newRequest['lotId'] = '01JJCQEJYG-E31FHVTF-JB6WEJTC'
# (You can continue setting other properties as needed here)

# Change the status of the lot
changedStatusRequest = system.mes.inventory.changeStatus(**newRequest)

# Output the JSON representation of the changed status request
print(changedStatusRequest)
```
