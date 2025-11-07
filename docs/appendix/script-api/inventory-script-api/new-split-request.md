---
sidebar_position: 15
title: "newSplitRequest"
description: "Generates an empty non-persisted split request to provide the structure to save a new record into the database."
---

# system.mes.inventory.newSplitRequest

Generates an empty non-persisted Split Request to provide the structure required by the API to save a new record into the database.
This method must be combined with the [split](./split) method in order to persist the record.

## Syntax

```python
system.mes.inventory.newSplitRequest()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Split Request object. The following is a list of keys and default values:

| Key                        | Default Value |
|----------------------------|---------------|
| `type`                     | `SPLIT`       |
| `quantity`                 | `null`        |
| `unitOfMeasureSymbol`      | `null`        |
| `sourceLotId`              | `null`        |
| `sourceLocationIdOrPath`   | `null`        |
| `destinationLotName`       | `null`        |
| `operationId`              | `null`        |
| `inventoryOperationId`     | `null`        |
| `productionOrderIdOrName`  | `null`        |
| `materialReasonCodeId`     | `null`        |
| `destinationInventoryName` | `null`        |
| `notes`                    | `null`        |
| `spare1`                   | `null`        |
| `spare2`                   | `null`        |
| `spare3`                   | `null`        |

## Code Examples

```python
# Generate the object structure for a new split request object with no initial arguments
newRequest = system.mes.inventory.newSplitRequest()

# Set basic attributes for the new split request
newRequest['sourceLocationIdOrPath'] = 'DairyCo'
newRequest['sourceLotId'] = '01JJCQEJYG-E31FHVTF-JB6WEJTC'
newRequest['destinationLotName'] = '5db685a7-2096-449a-b96c-effb3739e021'
newRequest['quantity'] = 610
# (You can continue setting other properties as needed here)

# Split the request
splitRequest = system.mes.inventory.split(**newRequest)

# Output the JSON representation of the split request
print(splitRequest)
```
