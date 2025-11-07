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

| Parameter                 | Type            | Nullable | Description                                                                                                                               |
|---------------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                    | `String`        | True     | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                | `Double`        | False    | The quantity to return from the location.                                                                                                 |
| `unitOfMeasureSymbol`     | `String`        | True     | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`             | `String`        | True     | The ID or name of the inventory lot being returned.                                                                                       |
| `materialIdOrPath`        | `String`        | False    | The ID or path of the material being returned.                                                                                            |
| `sourceLocationIdOrPath`  | `String`        | False    | The ID or path of the location from which inventory will be returned.                                                                     |
| `operationId`             | `String` (ULID) | True     | The ID of the operation returning this inventory.                                                                                         |
| `inventoryOperationId`    | `String` (ULID) | True     | The ID of the inventory operation related to this return action.                                                                          |
| `productionOrderIdOrName` | `String`        | True     | The ID or name of the production order associated with the return.                                                                        |
| `materialReasonCodeId`    | `String` (ULID) | True     | The ID of the material reason code to add additional context.                                                                             |
| `startDate`               | `Instant`       | False    | The start date and time of the return. Default value is `Current Instant`.                                                                |
| `endDate`                 | `Instant`       | True     | The end date and time of the return.                                                                                                      |
| `ongoing`                 | `Boolean`       | False    | Indicates whether this request is ongoing. Default value is `false`.                                                                      |
| `inventoryName`           | `String`        | True     | The name of the inventory the returned inventory goes to.                                                                                 |
| `notes`                   | `String`        | True     | Notes related to the return request.                                                                                                      |
| `spare1`                  | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare2`                  | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare3`                  | `String`        | True     | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON representation of an inventory lot record for a Return Request.

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
