---
sidebar_position: 25
title: "newScrapAllRequest"
description: "Generates an empty non-persisted scrap all request to provide the structure to save a new record into the database."
---

# system.mes.inventory.newScrapAllRequest

Generates an empty non-persisted Scrap All Request to provide the structure required by the API to save a new record into the database.
This method must be combined with the [scrapAll](./scrap-all) method in order to persist the record.

## Syntax

```python
system.mes.inventory.newScrapAllRequest()
```

## Parameters

| Parameter | Type | Description                               |
|-----------|------|-------------------------------------------|
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Scrap All Request object. The following is a list of keys and default values:

| Key                       | Default Value |
|---------------------------|---------------|
| `type`                    | `SCRAP`       |
| `sourceLocationIdOrPath`  | `null`        |
| `materialIdOrPath`        | `null`        |
| `operationId`             | `null`        |
| `inventoryOperationId`    | `null`        |
| `productionOrderIdOrName` | `null`        |
| `materialReasonCodeId`    | `null`        |
| `startDate`               | Current Time  |
| `endDate`                 | `null`        |

## Code Examples

```python
# Generate the object structure for a new scrap all request object
newRequest = system.mes.inventory.newScrapAllRequest()

# Set basic attributes for the new scrap all request
newRequest['materialIdOrPath'] = 'Bottle/Milk'
newRequest['sourceLocationIdOrPath'] = 'DairyCo'

# Scrap all inventory at the specified location that matches the material (if specified)
scrappedRecords = system.mes.inventory.scrapAll(**newRequest)

# Output the JSON representation of the scrapped records
print(scrappedRecords)
```
