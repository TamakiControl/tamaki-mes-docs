---
sidebar_position: 47
title: "newLotHistoryRequest"
description: "Creates a new Lot History Request record to be formatted with attributes."
---

# system.mes.inventory.newLotHistoryRequest

Creates a new Lot History Request record to be formatted with attributes.

## Syntax
```python
system.mes.inventory.newLotHistoryRequest()
```

## Parameters

| Parameter | Type | Description                               |
|-----------|------|-------------------------------------------|
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Lot History Request object. The following is a list of keys and default values:

| Key                          | Default Value    |
|------------------------------|------------------|
| `lotId`                      | `null`           |
| `lotRecordType`              | `null`           |
| `operationId`                | `null`           |
| `productionOrderIdOrName`    | `null`           |
| `materialReasonCodeId`       | `null`           |
| `startDate`                  | `null`           |
| `endDate`                    | `null`           |
| `status`                     | `null`           |

## Code Examples

```python
# Create a new lot history request instance with no initial arguments
new_lot_history_request = system.mes.inventory.newLotHistoryRequest()

# Set basic attributes for the new lot history request
new_lot_history_request['lotId'] = '01JJCPQWYG-T9CW4G6Z-96XBWYQB'
# (You can continue setting other properties as needed here)

# Retrieve the lot history
lot_history = system.mes.inventory.getLotHistory(**new_lot_history_request)

# Output the list of lot history records
print(lot_history)
```