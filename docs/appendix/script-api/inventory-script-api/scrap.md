---
sidebar_position: 22
title: "scrap"
description: "Scraps inventory from the MES based on the provided parameters."
---

# system.mes.inventory.scrap

Scraps inventory from the MES based on the provided parameters.

## Syntax
```python
system.mes.inventory.scrap(**scrap_request)
```

## Parameters

| Parameter                       | Type            | Description                                                                                                                               |
|---------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                          | `String`        | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                      | `Double`        | The quantity to scrap from the location.                                                                                                  |
| `unitOfMeasureSymbol`           | `String`        | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`                   | `String`        | The ID or name of the inventory lot that will be scrapped.                                                                                |
| `materialIdOrPath`              | `String`        | The ID or path of the material being scrapped.                                                                                            |
| `sourceLocationIdOrPath`        | `String`        | The ID or path of the location from which inventory will be scrapped.                                                                     |
| `operationId`                   | `String` (ULID) | The ID of the operation scrapping this inventory.                                                                                         |
| `productionOrderIdOrName`       | `String`        | The ID or name of the production order associated with the scrap.                                                                         |
| `materialReasonCodeId`          | `String` (ULID) | The ID of the material reason code to add additional context.                                                                             |
| `startDate`                     | `Instant`       | The start date and time of the scrap.                                                                                                     |
| `endDate`                       | `Instant`       | The end date and time of the scrap.                                                                                                       |
| `ongoing`                       | `Boolean`       | Indicates whether this request is ongoing.                                                                                                |
| `inventoryName`                 | `String`        | The name of the inventory the scrapped inventory goes to.                                                                                 |
| `notes`                         | `String`        | Notes related to the scrap request.                                                                                                       |
| `spare1`                        | `String`        | Additional field for user-defined context.                                                                                                |
| `spare2`                        | `String`        | Additional field for user-defined context.                                                                                                |
| `spare3`                        | `String`        | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON representation of an inventory lot record for a Scrap Request.

## Code Examples

```python
# Generate the object structure for a new scrap request object with no initial arguments
new_request = system.mes.inventory.newScrapRequest()

# Set basic attributes for the new scrap request
new_request['materialIdOrPath'] = 'Bottle/Milk'
new_request['sourceLocationIdOrPath'] = 'DairyCo'
new_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Scrap the request
scrapped_request = system.mes.inventory.scrap(**new_request)

# Output the JSON representation of the scrapped request
print(scrapped_request)
```