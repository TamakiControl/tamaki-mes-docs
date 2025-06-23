---
sidebar_position: 28
title: "changeStatus"
description: "Changes the status of the inventory lot from the MES based on the provided parameters."
---

# system.mes.inventory.changeStatus

Changes the status of the inventory lot from the MES based on the provided parameters.

## Syntax

```python
system.mes.inventory.changeStatus(**change_status_request)
```

## Parameters

| Parameter                 | Type            | Description                                                                                                                               |
| ------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                    | `String`        | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `lotId`                   | `String` (ULID) | The ID of the inventory lot whose status is being updated.                                                                                |
| `newStatus`               | `String`        | The new status to be assigned to the inventory lot.                                                                                       |
| `operationId`             | `String` (ULID) | The ID of the operation changing the status of this inventory.                                                                            |
| `inventoryOperationId`    | `String` (ULID) | The ID of the inventory operation related to this change status action.                                                                   |
| `notes`                   | `String`        | Notes related to the change status request.                                                                                               |
| `spare1`                  | `String`        | Additional field for user-defined context.                                                                                                |
| `spare2`                  | `String`        | Additional field for user-defined context.                                                                                                |
| `spare3`                  | `String`        | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON representation of an inventory lot record for a Change Status Request.

## Code Examples

```python
# Generate the object structure for a new change status request object with no initial arguments
new_request = system.mes.inventory.newChangeStatusRequest()

# Set basic attributes for the new change status requestOPOE
new_request['newStatus'] = 'AVAILABLE'
new_request['lotId'] = '01JJCQEJYG-E31FHVTF-JB6WEJTC'
# (You can continue setting other properties as needed here)

# Change the status of the lot
changed_status_request = system.mes.inventory.changeStatus(**new_request)

# Output the JSON representation of the changed status request
print(changed_status_request)
```
