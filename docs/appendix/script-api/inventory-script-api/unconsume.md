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

| Parameter                      | Type            | Description                                                                   |
|--------------------------------|-----------------|-------------------------------------------------------------------------------|
| `type`                         | `String`        | The type of request used for inventory request deserialization.               |
| `quantity`                     | `Double`        | The quantity to unconsume from the location.                                  |
| `unitOfMeasureSymbol`          | `String`        | The symbol of the unit of measure for the quantity.                           |
| `lotIdOrName`                  | `String`        | The ID or name of material lot that will be unconsuming the given lot.        |
| `materialIdOrPath`             | `String`        | The ID or path of the material being unconsumed.                              |
| `destinationLocationIdOrPath`  | `String`        | The ID or path of the location the unconsumed inventory goes to.              |
| `operationId`                  | `String` (ULID) | The ID of the operation unconsuming this inventory.                           |
| `productionOrderIdOrName`      | `String`        | The ID or name of the production order associated with the unconsumption.     |
| `materialReasonCodeId`         | `String` (ULID) | The ID of the material reason code to add additional context.                 |
| `startDate`                    | `Instant`       | The start date and time of the unconsumption.                                 |
| `endDate`                      | `Instant`       | The end date and time of the unconsumption.                                   |
| `ongoing`                      | `Boolean`       | Indicates whether this request is ongoing.                                    |
| `inventoryName`                | `String`        | The name of the inventory.                                                    |
| `notes`                        | `String`        | Notes related to the unconsume request.                                       |
| `spare1`                       | `String`        | Additional field for user-defined context.                                    |
| `spare2`                       | `String`        | Additional field for user-defined context.                                    |
| `spare3`                       | `String`        | Additional field for user-defined context.                                    |

## Returns

Returns a JSON representation of a material lot record for an Unconsume Request.

## Code Examples

```python
# Create a new unconsume request instance with no initial arguments
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