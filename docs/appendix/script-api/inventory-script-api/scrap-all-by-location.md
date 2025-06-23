---
sidebar_position: 23
title: "scrapAllByLocation"
description: "Scraps all inventory at a specified location."
---

# system.mes.inventory.scrapAllByLocation

Scraps all inventory at a specified location. This function allows you to scrap multiple inventory items at once based on their location, rather than individually scrapping each item.

## Syntax

```python
system.mes.inventory.scrapAllByLocation(locationIdOrPath, operationId=None, inventoryOperationId=None, productionOrderIdOrName=None, materialReasonCodeId=None)
```

## Parameters

| Parameter                 | Type            | Description                                                               |
| ------------------------- | --------------- |---------------------------------------------------------------------------|
| `locationIdOrPath`        | `String`        | The ID or path of the location from which all inventory will be scrapped. |
| `operationId`             | `String` (ULID) | The ID of the operation scrapping this inventory.                         |
| `inventoryOperationId`    | `String` (ULID) | The ID of the inventory operation related to this scrap action.           |
| `productionOrderIdOrName` | `String`        | The ID or name of the production order associated with the scrap.         |
| `materialReasonCodeId`    | `String` (ULID) | The ID of the material reason code to add additional context.             |

## Returns

Returns a JSON representation of the inventory lots that were created during the scrap operation.

## Code Examples

```python
# Scrap all inventory at a specific location
scrapped_lots = system.mes.inventory.scrapAllByLocation('DairyCo')

# Output the JSON representation of the scrapped lots
print(scrapped_lots)
```