---
sidebar_position: 14
title: "validateChangeStatusRequest"
description: "Validates a change status request based on the provided parameters."
---

# system.mes.inventory.validateChangeStatusRequest

Validates a change status request based on the provided parameters.

## Syntax

```python
system.mes.inventory.validateChangeStatusRequest(**change_status_request)
```

## Parameters

| Parameter     | Type            | Description                                                                                                                               |
|---------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`        | `String`        | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `lotId`       | `String` (ULID) | The ID of the inventory lot whose status is being updated.                                                                                |
| `newStatus`   | `String`        | The new status to be assigned to the inventory lot.                                                                                       |
| `operationId` | `String` (ULID) | The ID of the operation changing the status of this inventory.                                                                            |
| `notes`       | `String`        | Notes related to the change status request.                                                                                               |
| `spare1`      | `String`        | Additional field for user-defined context.                                                                                                |
| `spare2`      | `String`        | Additional field for user-defined context.                                                                                                |
| `spare3`      | `String`        | Additional field for user-defined context.                                                                                                |

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
