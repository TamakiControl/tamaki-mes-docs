---
sidebar_position: 18
title: "isDestinationLocationRequired"
description: "Determines if a destination location is required for a specific inventory operation type."
---

# system.mes.inventory.operation.isDestinationLocationRequired

## Description

Determines if a destination location is required for a specific [Inventory Operations](../../data-model/inventory-model/inventory-operation) type. Different inventory operation types have different requirements regarding source and destination locations. This function helps validate whether a destination location must be specified for the given operation type.

## Syntax

```python
system.mes.inventory.operation.isDestinationLocationRequired(lotRecordType)
```

## Parameters

| Parameter       | Type     | Nullable | Description                                                        |
|-----------------|----------|----------|--------------------------------------------------------------------|
| `lotRecordType` | `String` | False    | The type of inventory operation to check (e.g., CONSUME, PRODUCE). |

## Returns

Returns a boolean value indicating whether a destination location is required for the specified inventory operation type.
- `true`: Destination location is required for this inventory operation type
- `false`: Destination location is not required for this inventory operation type

## Example Usage

```python
# Check if destination location is required for PRODUCE operation type
is_required = system.mes.inventory.operation.isDestinationLocationRequired("PRODUCE")

# Print the result
if is_required:
    print("Destination location is required for PRODUCE operations")
else:
    print("Destination location is not required for PRODUCE operations")
```
