---
sidebar_position: 25
title: "returnInventory"
description: "Returns inventory from the MES based on the provided parameters."
---

# system.mes.inventory.return

Returns inventory from the MES based on the provided parameters.

## Syntax
```python
system.mes.inventory.returnInventory(**return_request)
```

## Parameters

| Parameter                       | Type            | Description                                                                                                                               |
|---------------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                          | `String`        | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                      | `Double`        | The quantity to return from the location.                                                                                                 |
| `unitOfMeasureSymbol`           | `String`        | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`                   | `String`        | The ID or name of material lot being returned.                                                                                            |
| `materialIdOrPath`              | `String`        | The ID or path of the material being returned.                                                                                            |
| `sourceLocationIdOrPath`        | `String`        | The ID or path of the location from which inventory will be returned.                                                                     |
| `operationId`                   | `String` (ULID) | The ID of the operation returning this inventory.                                                                                         |
| `productionOrderIdOrName`       | `String`        | The ID or name of the production order associated with the return.                                                                        |
| `materialReasonCodeId`          | `String` (ULID) | The ID of the material reason code to add additional context.                                                                             |
| `startDate`                     | `Instant`       | The start date and time of the return.                                                                                                    |
| `endDate`                       | `Instant`       | The end date and time of the return.                                                                                                      |
| `ongoing`                       | `Boolean`       | Indicates whether this request is ongoing.                                                                                                |
| `inventoryName`                 | `String`        | The name of the inventory the returned inventory goes to.                                                                                 |
| `notes`                         | `String`        | Notes related to the return request.                                                                                                      |
| `spare1`                        | `String`        | Additional field for user-defined context.                                                                                                |
| `spare2`                        | `String`        | Additional field for user-defined context.                                                                                                |
| `spare3`                        | `String`        | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON representation of a material lot record for a Return Request.

## Code Examples

```python
# Generate the object structure for a new return request object with no initial arguments
new_request = system.mes.inventory.newReturnRequest()

# Set basic attributes for the new return request
new_request['materialIdOrPath'] = 'Bottle/Milk'
new_request['sourceLocationIdOrPath'] = 'DairyCo'
new_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Return the request
returned_request = system.mes.inventory.returnInventory(**new_request)

# Output the JSON representation of the returned request
print(returned_request)
```