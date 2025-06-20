---
sidebar_position: 17
title: "isSourceLocationRequired"
description: "Determines if a source location is required for a specific inventory operation type."
---

# system.mes.inventory.operation.isSourceLocationRequired

## Description

Determines if a source location is required for a specific [Inventory Operations](../../data-model/inventory-model/inventory-operation) type. Different inventory operation types have different requirements regarding source and destination locations. This function helps validate whether a source location must be specified for the given operation type.

## Syntax

```python
system.mes.inventory.operation.isSourceLocationRequired(lotRecordType)
```

## Parameters

| Parameter       | Type     | Description                                                        |
| --------------- | -------- | ------------------------------------------------------------------ |
| `lotRecordType` | `String` | The type of inventory operation to check (e.g., CONSUME, PRODUCE). |

## Returns

Returns a boolean value indicating whether a source location is required for the specified inventory operation type.
- `true`: Source location is required for this inventory operation type
- `false`: Source location is not required for this inventory operation type

## Example Usage

```python
# Check if source location is required for CONSUME operation type
is_required = system.mes.inventory.operation.isSourceLocationRequired("CONSUME")

# Print the result
if is_required:
    print("Source location is required for CONSUME operations")
else:
    print("Source location is not required for CONSUME operations")
```
