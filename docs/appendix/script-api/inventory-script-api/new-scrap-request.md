---
sidebar_position: 21
title: "newScrapRequest"
description: "Generates an empty non-persisted scrap request to provide the structure to save a new record into the database."
---

# system.mes.inventory.newScrapRequest

Generates an empty non-persisted Scrap Request to provide the structure required by the API to save a new record into the database.
This method must be combined with the [scrap](./scrap) method in order to persist the record.

## Syntax

```python
system.mes.inventory.newScrapRequest()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Scrap Request object. The following is a list of keys and default values:

| Key                       | Default Value |
|---------------------------|---------------|
| `type`                    | `SCRAP`       |
| `quantity`                | `null`        |
| `unitOfMeasureSymbol`     | `null`        |
| `lotIdOrName`             | `null`        |
| `materialIdOrPath`        | `null`        |
| `sourceLocationIdOrPath`  | `null`        |
| `operationId`             | `null`        |
| `inventoryOperationId`    | `null`        |
| `productionOrderIdOrName` | `null`        |
| `materialReasonCodeId`    | `null`        |
| `startDate`               | Current Time  |
| `endDate`                 | `null`        |
| `ongoing`                 | `false`       |
| `inventoryName`           | `null`        |
| `notes`                   | `null`        |
| `spare1`                  | `null`        |
| `spare2`                  | `null`        |
| `spare3`                  | `null`        |

## Code Examples

```python
# Generate the object structure for a new scrap request object with no initial arguments
newRequest = system.mes.inventory.newScrapRequest()

# Set basic attributes for the new scrap request
newRequest['materialIdOrPath'] = 'Bottle/Milk'
newRequest['sourceLocationIdOrPath'] = 'DairyCo'
newRequest['quantity'] = 610
# (You can continue setting other properties as needed here)

# Scrap the request
scrappedRequest = system.mes.inventory.scrap(**newRequest)

# Output the JSON representation of the scrapped request
print(scrappedRequest)
```
