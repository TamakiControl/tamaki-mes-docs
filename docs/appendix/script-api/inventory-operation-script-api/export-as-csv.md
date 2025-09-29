---
sidebar_position: 17
title: "exportAsCsv"
description: "Exports inventory operations as raw CSV bytes (UTF-8 encoded)"
---

# system.mes.inventory.operation.exportAsCsv

## Description

**No Parameter:**

Exports all [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) as raw CSV bytes (UTF-8 encoded).
Streams inventory operation data from the database and formats it as CSV, including a header row.

**With a Parameter:**

Exports selected [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) associated with the specified location ids or paths as raw CSV bytes (UTF-8 encoded).
Streams material data from the database and formats it as CSV, including a header row.

## Syntax

```python
system.mes.inventory.operation.exportAsCsv()
system.mes.inventory.operation.exportAsCsv(locationIdOrPaths)
```

## Parameters

| Parameter | Type | Nullable | Description                                 |
| --------- | ---- | -------- | ------------------------------------------- |
| None      | -    | -        | This function does not take any parameters. |

**With a Parameter:**

| Parameter           | Type     | Nullable | Description                                                                                             |
| ------------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------- |
| `locationIdOrPaths` | `PyList` | True     | List of location ids or paths used to determine which associated inventory operations will be exported. |

## Returns

A Byte array (Byte[]) containing the raw byte data of the CSV export.

## Code Examples

### Perspective

```python
csvBytes = system.mes.inventory.operation.exportAsCsv()
system.perspective.download("inventory_operations.csv", csvBytes)
```

### Script Console

```python
csvBytes = system.mes.inventory.operation.exportAsCsv()
path = system.file.saveFile("inventory_operations.csv")
if path is not None:
	system.file.writeFile(path, csvBytes)
```
