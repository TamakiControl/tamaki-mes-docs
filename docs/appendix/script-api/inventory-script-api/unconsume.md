---
sidebar_position: 7
title: "unconsume"
description: "Unconsumes inventory from the MES based on the provided parameters."
---

# system.mes.inventory.unconsume

Unconsumes inventory from the MES based on the provided parameters.

## Syntax

```python
system.mes.inventory.unconsume(**unconsume_request)
```

## Parameters

| Parameter                     | Type            | Nullable | Description                                                                                                                               |
|-------------------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                        | `String`        | True     | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                    | `Double`        | False    | The quantity to unconsume from the location.                                                                                              |
| `unitOfMeasureSymbol`         | `String`        | True     | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`                 | `String`        | True     | The ID or name of the inventory lot that will be unconsuming the given lot.                                                               |
| `materialIdOrPath`            | `String`        | False    | The ID or path of the material being unconsumed.                                                                                          |
| `destinationLocationIdOrPath` | `String`        | False    | The ID or path of the location the unconsumed inventory goes to.                                                                          |
| `sourceLocationIdOrPath`      | `String`        | True     | The ID or path of the location where the inventory is being unconsumed from.                                                              |
| `operationId`                 | `String` (ULID) | True     | The ID of the operation unconsuming this inventory.                                                                                       |
| `inventoryOperationId`        | `String`        | True     | The ID of the inventory operation related to this un-consumption.                                                                         |
| `productionOrderIdOrName`     | `String`        | True     | The ID or name of the production order associated with the unconsumption.                                                                 |
| `materialReasonCodeId`        | `String` (ULID) | True     | The ID of the material reason code to add additional context.                                                                             |
| `startDate`                   | `Instant`       | False    | The start date and time of the unconsumption. Default value is `Current Instant`.                                                         |
| `endDate`                     | `Instant`       | True     | The end date and time of the unconsumption.                                                                                               |
| `ongoing`                     | `Boolean`       | False    | Indicates whether this request is ongoing. Default value is `false`.                                                                      |
| `inventoryName`               | `String`        | True     | The name of the inventory.                                                                                                                |
| `notes`                       | `String`        | True     | Notes related to the unconsume request.                                                                                                   |
| `spare1`                      | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare2`                      | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare3`                      | `String`        | True     | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON representation of an inventory lot record for an Unconsume Request.

## Code Examples

```python
# Generate the object structure for a new unconsume request object with no initial arguments
new_request = system.mes.inventory.newUnconsumeRequest()

# Set basic attributes for the new unconsume request
new_request['materialIdOrPath'] = 'Bottle/Milk'
new_request['destinationLocationIdOrPath'] = 'DairyCo'
new_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Unconsume the request
unconsumed_request = system.mes.inventory.unconsume(**new_request)

# Output the JSON representation of the unconsumed request
print(unconsumed_request)
```
