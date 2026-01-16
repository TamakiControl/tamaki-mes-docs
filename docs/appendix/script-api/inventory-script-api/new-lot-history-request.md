---
sidebar_position: 62
title: "newLotHistoryRequest"
description: "Generates an empty lot history request to provide the structure to retrieve records from the database."
---

# system.mes.inventory.newLotHistoryRequest

Generates an empty Lot History Request to provide the structure required by the API to retrieve records from the database.
This method must be combined with the [getLotHistory](./get-lot-history) method to retrieve the records.

## Syntax

```python
system.mes.inventory.newLotHistoryRequest()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Lot History Request object. The following is a list of keys and default values:

| Key                       | Default Value |
|---------------------------|---------------|
| `lotId`                   | `null`        |
| `lotRecordType`           | `null`        |
| `operationId`             | `null`        |
| `inventoryOperationId`    | `null`        |
| `productionOrderIdOrName` | `null`        |
| `materialReasonCodeId`    | `null`        |
| `startDate`               | `null`        |
| `endDate`                 | `null`        |
| `status`                  | `null`        |

## Code Examples

```python
# Generate the object structure for a new lot history request object with no initial arguments
new_lot_history_request = system.mes.inventory.newLotHistoryRequest()

# Set basic attributes for the new lot history request
new_lot_history_request['lotId'] = '01JJCPQWYG-T9CW4G6Z-96XBWYQB'
# (You can continue setting other properties as needed here)

# Retrieve the lot history
lot_history = system.mes.inventory.getLotHistory(**new_lot_history_request)

# Output the list of lot history records
print(lot_history)
```
