---
sidebar_position: 27
title: "newChangeStatusRequest"
description: "Creates a new Change Status Request record to be formatted with attributes."
---

# system.mes.inventory.newChangeStatusRequest

Creates a new Change Status Request record to be formatted with attributes.

## Syntax
```python
system.mes.inventory.newChangeStatusRequest()
```

## Parameters

| Parameter | Type | Description                               |
|-----------|------|-------------------------------------------|
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Change Status Request object. The following is a list of keys and default values:

| Key            | Default Value    |
|----------------|------------------|
| `type`         | `STATUS_CHANGE`  |
| `lotId`        | `null`           |
| `newStatus`    | `null`           |
| `operationId`  | `null`           |
| `notes`        | `null`           |
| `spare1`       | `null`           |
| `spare2`       | `null`           |
| `spare3`       | `null`           |

## Code Examples

```python
# Create a new change status request instance with no initial arguments
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