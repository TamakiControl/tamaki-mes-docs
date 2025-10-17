---
sidebar_position: 16
title: "split"
description: "Splits inventory from the MES based on the provided parameters."
---

# system.mes.inventory.split

Splits inventory from the MES based on the provided parameters.


## Permissions

This method requires the `INVENTORY.WRITE.SPLIT` permission.

## Syntax

```python
system.mes.inventory.split(**split_request)
```

## Parameters

| Parameter                  | Type            | Nullable | Description                                                                                                                               |
|----------------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                     | `String`        | True     | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                 | `Double`        | False    | The quantity to split from the location.                                                                                                  |
| `unitOfMeasureSymbol`      | `String`        | True     | The symbol of the unit of measure for the quantity.                                                                                       |
| `sourceLotId`              | `String` (ULID) | False    | The ID of the inventory lot being split.                                                                                                  |
| `sourceLocationIdOrPath`   | `String`        | False    | The ID or path of the location from which inventory will be split.                                                                        |
| `destinationLotName`       | `String`        | False    | The name of the inventory lot the split inventory goes to.                                                                                |
| `operationId`              | `String` (ULID) | True     | The ID of the operation splitting this inventory.                                                                                         |
| `inventoryOperationId`     | `String` (ULID) | True     | The ID of the inventory operation related to this split action.                                                                           |
| `productionOrderIdOrName`  | `String`        | True     | The ID or name of the production order associated with the split.                                                                         |
| `materialReasonCodeId`     | `String` (ULID) | True     | The ID of the material reason code to add additional context.                                                                             |
| `destinationInventoryName` | `String`        | True     | The name of the inventory the split inventory goes to.                                                                                    |
| `notes`                    | `String`        | True     | Notes related to the split request.                                                                                                       |
| `spare1`                   | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare2`                   | `String`        | True     | Additional field for user-defined context.                                                                                                |
| `spare3`                   | `String`        | True     | Additional field for user-defined context.                                                                                                |

## Returns

Returns a JSON representation of an inventory lot record for a Split Request.

## Code Examples

```python
# Generate the object structure for a new split request object with no initial arguments
new_request = system.mes.inventory.newSplitRequest()

# Set basic attributes for the new split request
new_request['sourceLocationIdOrPath'] = 'DairyCo'
new_request['sourceLotId'] = '01JJCQEJYG-E31FHVTF-JB6WEJTC'
new_request['destinationLotName'] = '5db685a7-2096-449a-b96c-effb3739e021'
new_request['quantity'] = 610
# (You can continue setting other properties as needed here)

# Split the request
split_request = system.mes.inventory.split(**new_request)

# Output the JSON representation of the split request
print(split_request)
```
