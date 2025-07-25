---
sidebar_position: 37
title: "ship"
description: "Ships inventory from the MES based on the provided parameters."
---

# system.mes.inventory.ship

Ships inventory from the MES based on the provided parameters.

## Syntax

```python
system.mes.inventory.ship(**ship_request)
```

## Parameters

| Parameter                 | Type            | Description                                                                                                                               |
| ------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                    | `String`        | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                | `Double`        | The quantity to ship from the location.                                                                                                   |
| `unitOfMeasureSymbol`     | `String`        | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`             | `String`        | The ID or name of the inventory lot that will be shipped.                                                                                 |
| `materialIdOrPath`        | `String`        | The ID or path of the material being shipped.                                                                                             |
| `sourceLocationIdOrPath`  | `String`        | The ID or path of the location from which inventory will be shipped.                                                                      |
| `operationId`             | `String` (ULID) | The ID of the operation shipping this inventory.                                                                                          |
| `inventoryOperationId`    | `String` (ULID) | The ID of the inventory operation related to this ship action.                                                                            |
| `productionOrderIdOrName` | `String`        | The ID or name of the production order associated with the ship.                                                                          |
| `materialReasonCodeId`    | `String` (ULID) | The ID of the material reason code to add additional context.                                                                             |
| `startDate`               | `Instant`       | The start date and time of the ship.                                                                                                      |
| `endDate`                 | `Instant`       | The end date and time of the ship.                                                                                                        |
| `ongoing`                 | `Boolean`       | Indicates whether this request is ongoing.                                                                                                |
| `inventoryName`           | `String`        | The name of the inventory the shipped inventory goes to.                                                                                  |
| `notes`                   | `String`        | Notes related to the ship request.                                                                                                        |
| `spare1`                  | `String`        | Additional field for user-defined context.                                                                                                |
| `spare2`                  | `String`        | Additional field for user-defined context.                                                                                                |
| `spare3`                  | `String`        | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON representation of an inventory lot record for a Ship Request.

## Code Examples

```python
# Generate the object structure for a new ship request object with no initial arguments
new_request = system.mes.inventory.newShipRequest()

# Set basic attributes for the new ship request
new_request['materialIdOrPath'] = 'Bottle/Milk'
new_request['sourceLocationIdOrPath'] = 'DairyCo'
new_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Ship the request
shipped_request = system.mes.inventory.ship(**new_request)

# Output the JSON representation of the shipped request
print(shipped_request)
```
