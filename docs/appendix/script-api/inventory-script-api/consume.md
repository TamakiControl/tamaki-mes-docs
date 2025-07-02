---
sidebar_position: 4
title: "consume"
description: "Consumes inventory from the MES based on the provided parameters."
---

# system.mes.inventory.consume

Consumes inventory from the MES based on the provided parameters.

## Syntax

```python
system.mes.inventory.consume(**consume_request)
```

## Parameters

| Parameter                     | Type            | Nullable | Description                                                                                                                               |
|-------------------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                        | `String`        | True     | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                    | `Double`        | False    | The quantity to consume from the location.                                                                                                |
| `unitOfMeasureSymbol`         | `String`        | True     | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`                 | `String`        | True     | The ID or name of the inventory lot that will be consuming the given lot.                                                                 |
| `materialIdOrPath`            | `String`        | False    | The ID or path of the material being consumed.                                                                                            |
| `sourceLocationIdOrPath`      | `String`        | False    | The ID or path of the location from which inventory will be consumed.                                                                     |
| `consumingLotIdOrName`        | `String`        | True     | The ID or name of the inventory lot from which the material is being consumed.                                                            |
| `destinationLocationIdOrPath` | `String`        | True     | The ID or path of the location the consumed inventory goes to.                                                                            |
| `createIfNotExists`           | `Boolean`       | False    | Indicates whether the system should create the lot if it does not exist. Default value is `false`.                                        |
| `operationId`                 | `String` (ULID) | True     | The ID of the operation consuming this inventory.                                                                                         |
| `productionOrderIdOrName`     | `String`        | True     | The ID or name of the production order associated with the consumption.                                                                   |
| `materialReasonCodeId`        | `String` (ULID) | True     | The ID of the material reason code to add additional context.                                                                             |
| `startDate`                   | `Instant`       | False    | The start date and time of the consumption. Default value is `Current Instant`.                                                           |
| `endDate`                     | `Instant`       | True     | The end date and time of the consumption.                                                                                                 |
| `ongoing`                     | `Boolean`       | False    | Indicates whether this request is ongoing. Default value is `false`.                                                                      |
| `inventoryName`               | `String`        | True     | The name of the inventory.                                                                                                                |
| `notes`                       | `String`        | True     | Notes related to the consume request.                                                                                                     |
| `spare1`                      | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare2`                      | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare3`                      | `String`        | True     | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON representation of an inventory lot record for a Consume Request.

## Code Examples

```python
# Generate the object structure for a new consume request object with no initial arguments
new_request = system.mes.inventory.newConsumeRequest()

# Set basic attributes for the new consume request
new_request['materialIdOrPath'] = 'Bottle/Milk'
new_request['sourceLocationIdOrPath'] = 'DairyCo'
new_request['quantity'] = 610
new_request['createIfNotExists'] = True
# (You can continue setting other properties as needed here)

# Consume the request
consumed_request = system.mes.inventory.consume(**new_request)

# Output the JSON representation of the consumed request
print(consumed_request)
```
