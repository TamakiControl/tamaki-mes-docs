---
sidebar_position: 23
title: "validateScrapRequest"
description: "Validates the specified parameters for a scrap request and returns any validation errors."
---

# system.mes.inventory.validateScrapRequest

Validates the specified parameters for a scrap request and returns any validation errors. This only checks if the scrap request can be processed based on the attributes given, without actually performing the inventory scrapping. Use this function to verify your parameters before executing the actual scrap operation.

## Syntax

```python
system.mes.inventory.validateScrapRequest(**scrap_request)
```

## Parameters

| Parameter                 | Type            | Nullable | Description                                                                                                                               |
|---------------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                    | `String`        | True     | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                | `Double`        | False    | The quantity to scrap from the location.                                                                                                  |
| `unitOfMeasureSymbol`     | `String`        | True     | The symbol of the unit of measure for the quantity.                                                                                       |
| `lotIdOrName`             | `String`        | True     | The ID or name of the inventory lot that will be scrapped.                                                                                |
| `materialIdOrPath`        | `String`        | False    | The ID or path of the material being scrapped.                                                                                            |
| `sourceLocationIdOrPath`  | `String`        | False    | The ID or path of the location from which inventory will be scrapped.                                                                     |
| `operationId`             | `String` (ULID) | True     | The ID of the operation scrapping this inventory.                                                                                         |
| `inventoryOperationId`    | `String` (ULID) | True     | The ID of the inventory operation related to this scrap action.                                                                           |
| `productionOrderIdOrName` | `String`        | True     | The ID or name of the production order associated with the scrap.                                                                         |
| `materialReasonCodeId`    | `String` (ULID) | True     | The ID of the material reason code to add additional context.                                                                             |
| `startDate`               | `Instant`       | False    | The start date and time of the scrap. Default value is `Current Instant`.                                                                 |
| `endDate`                 | `Instant`       | True     | The end date and time of the scrap.                                                                                                       |
| `ongoing`                 | `Boolean`       | False    | Indicates whether this request is ongoing. Default value is `false`.                                                                      |
| `inventoryName`           | `String`        | True     | The name of the inventory the scrapped inventory goes to.                                                                                 |
| `notes`                   | `String`        | True     | Notes related to the scrap request.                                                                                                       |
| `spare1`                  | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare2`                  | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare3`                  | `String`        | True     | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new scrap request object with no initial arguments
scrap_request = system.mes.inventory.newScrapRequest()

# Set basic attributes for the new scrap request
scrap_request['materialIdOrPath'] = 'Bottle/Milk'
scrap_request['sourceLocationIdOrPath'] = 'DairyCo'
scrap_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Validate scrap request parameters
validation_errors = system.mes.inventory.validateScrapRequest(**scrap_request)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Scrap request parameters are valid.')
```
