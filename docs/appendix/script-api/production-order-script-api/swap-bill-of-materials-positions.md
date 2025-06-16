---
sidebar_position: 40
title: "swapBillOfMaterialsPositions"
description: "Swaps the positions of two bill of materials items within the same production order."
---

# system.mes.productionOrder.swapBillOfMaterialsPositions

## Description

Swaps the position values of two [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) records within the same production order. This is useful for reordering bill of materials items in a user interface.

## Syntax

```python
system.mes.productionOrder.swapBillOfMaterialsPositions(item1Id, item2Id)
```

## Parameters

| Parameter | Type            | Description                                                           |
|-----------|-----------------|-----------------------------------------------------------------------|
| `item1Id` | `String` (ULID) | The ULID of the first bill of materials item to swap positions with.  |
| `item2Id` | `String` (ULID) | The ULID of the second bill of materials item to swap positions with. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an InUseException, IllegalArgumentException or ConstraintViolationException is thrown.

| Name      | Type      | Description                                             |
|-----------|-----------|---------------------------------------------------------|
| `success` | `Boolean` | Indicates if the position swap was successful.          |
| `message` | `String`  | The reason why the swap was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the operation.                 |
| `error`   | `String`  | The errors associated with the operation.               |

## Code Examples

```python
# Swap the positions of two bill of materials items
response = system.mes.productionOrder.swapBillOfMaterialsPositions(
    '007YKTRY-01JCNH29SS-6HZDTR95',
    '007YKTRY-01JCNH29T9-MNMXF65A'
)

# Check if the swap was successful
if response.success:
    print("Successfully swapped bill of materials positions")
else:
    print("Failed to swap positions: " + response.message)
```
