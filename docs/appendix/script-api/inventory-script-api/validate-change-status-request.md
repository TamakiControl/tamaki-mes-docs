---
sidebar_position: 14
title: "validateChangeStatusRequest"
description: "Validates the specified parameters for a change status request and returns any validation errors."
---

# system.mes.inventory.validateChangeStatusRequest

Validates the specified parameters for a change status request and returns any validation errors. This only checks if the status change request can be processed based on the attributes given, without actually changing the inventory status. Use this function to verify your parameters before executing the actual status change operation.


## Permissions

This method requires the `INVENTORY.READ.VALIDATE` permission.

## Syntax

```python
system.mes.inventory.validateChangeStatusRequest(**change_status_request)
```

## Parameters

| Parameter              | Type            | Nullable | Description                                                                                                                               |
|------------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                 | `String`        | True     | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `lotId`                | `String` (ULID) | False    | The ID of the inventory lot whose status is being updated.                                                                                |
| `newStatus`            | `String`        | False    | The new status to be assigned to the inventory lot.                                                                                       |
| `operationId`          | `String` (ULID) | True     | The ID of the operation changing the status of this inventory.                                                                            |
| `inventoryOperationId` | `String` (ULID) | True     | The ID of the inventory operation related to this change status action.                                                                   |
| `notes`                | `String`        | True     | Notes related to the change status request.                                                                                               |
| `spare1`               | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare2`               | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare3`               | `String`        | True     | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new change status request object with no initial arguments
change_status_request = system.mes.inventory.newChangeStatusRequest()

# Set basic attributes for the new change status request
change_status_request['newStatus'] = 'AVAILABLE'
change_status_request['lotId'] = '01JJCQEJYG-E31FHVTF-JB6WEJTC'
# (You can continue setting other properties as needed here)

# Validate change status request parameters
validation_errors = system.mes.inventory.validateChangeStatusRequest(**change_status_request)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Change status request parameters are valid.')
```
