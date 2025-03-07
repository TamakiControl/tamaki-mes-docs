---
sidebar_position: 16
title: "split"
description: "Splits inventory from the MES based on the provided parameters."
---

# system.mes.inventory.split

Splits inventory from the MES based on the provided parameters.

## Syntax
```python
system.mes.inventory.split(**split_request)
```

## Parameters

| Parameter                   | Type            | Description                                                                                                                               |
|-----------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                      | `String`        | The type of request defined by the LotRecordType Enum. It is internally set and must not be modified, as changes may break functionality. |
| `quantity`                  | `Double`        | The quantity to split from the location.                                                                                                  |
| `unitOfMeasureSymbol`       | `String`        | The symbol of the unit of measure for the quantity.                                                                                       |
| `sourceLotId`               | `String` (ULID) | The ID of the inventory lot being split.                                                                                                  |
| `sourceLocationIdOrPath`    | `String`        | The ID or path of the location from which inventory will be split.                                                                        |
| `destinationLotName`        | `String`        | The name of the inventory lot the split inventory goes to.                                                                                |
| `operationId`               | `String` (ULID) | The ID of the operation splitting this inventory.                                                                                         |
| `productionOrderIdOrName`   | `String`        | The ID or name of the production order associated with the split.                                                                         |
| `materialReasonCodeId`      | `String` (ULID) | The ID of the material reason code to add additional context.                                                                             |
| `destinationInventoryName`  | `String`        | The name of the inventory the split inventory goes to.                                                                                    |
| `notes`                     | `String`        | Notes related to the split request.                                                                                                       |
| `spare1`                    | `String`        | Additional field for user-defined context.                                                                                                |
| `spare2`                    | `String`        | Additional field for user-defined context.                                                                                                |
| `spare3`                    | `String`        | Additional field for user-defined context.                                                                                                |

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