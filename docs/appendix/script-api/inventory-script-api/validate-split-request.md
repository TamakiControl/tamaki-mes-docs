---
sidebar_position: 17
title: "validateSplitRequest"
description: "Validates a split request based on the provided parameters."
---

# system.mes.inventory.validateSplitRequest

Validates a split request based on the provided parameters.

## Syntax

```python
system.mes.inventory.validateSplitRequest(**split_request)
```

## Parameters

| Parameter                  | Type            | Description                                                                                                                               |
| -------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                     | `String`        | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                 | `Double`        | The quantity to split from the location.                                                                                                  |
| `unitOfMeasureSymbol`      | `String`        | The symbol of the unit of measure for the quantity.                                                                                       |
| `sourceLotId`              | `String` (ULID) | The ID of the inventory lot being split.                                                                                                  |
| `sourceLocationIdOrPath`   | `String`        | The ID or path of the location from which inventory will be split.                                                                        |
| `destinationLotName`       | `String`        | The name of the inventory lot the split inventory goes to.                                                                                |
| `operationId`              | `String` (ULID) | The ID of the operation splitting this inventory.                                                                                         |
| `inventoryOperationId`     | `String` (ULID) | The ID of the inventory operation related to this split action.                                                                           |
| `productionOrderIdOrName`  | `String`        | The ID or name of the production order associated with the split.                                                                         |
| `materialReasonCodeId`     | `String` (ULID) | The ID of the material reason code to add additional context.                                                                             |
| `destinationInventoryName` | `String`        | The name of the inventory the split inventory goes to.                                                                                    |
| `notes`                    | `String`        | Notes related to the split request.                                                                                                       |
| `spare1`                   | `String`        | Additional field for user-defined context.                                                                                                |
| `spare2`                   | `String`        | Additional field for user-defined context.                                                                                                |
| `spare3`                   | `String`        | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new split request object with no initial arguments
split_request = system.mes.inventory.newSplitRequest()

# Set basic attributes for the new split request
split_request['sourceLocationIdOrPath'] = 'DairyCo'
split_request['sourceLotId'] = '01JJCQEJYG-E31FHVTF-JB6WEJTC'
split_request['destinationLotName'] = '5db685a7-2096-449a-b96c-effb3739e021'
split_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Validate split request parameters
validation_errors = system.mes.inventory.validateSplitRequest(**split_request)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Split request parameters are valid.')
```
