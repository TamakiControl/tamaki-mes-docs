---
sidebar_position: 18
title: "exportAsJson"
description: "Exports inventory operations as raw JSON bytes (UTF-8 encoded)"
---

# system.mes.inventory.operation.exportAsJson

## Description

**No Parameter:**

Exports all [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) as raw JSON bytes (UTF-8 encoded).
Streams inventory operation data from the database and formats it as JSON, including a header row.

**With a Parameter:**

Exports selected [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) associated with the specified location ids or paths as raw JSON bytes (UTF-8 encoded).
Streams material data from the database and formats it as JSON, including a header row.


## Permissions

This method requires the `INVENTORY_OPERATION.READ.GET` permission.

## Syntax

```python
system.mes.inventory.operation.exportAsJson()
system.mes.inventory.operation.exportAsJson(locationIdOrPaths)
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

A Byte array (Byte[]) containing the raw byte data of the JSON export.

## Code Examples

### Perspective

```python
jsonBytes = system.mes.inventory.operation.exportAsJson()
system.perspective.download("inventory_operations.json", jsonBytes)
```

### Script Console

```python
jsonBytes = system.mes.inventory.operation.exportAsJson()
path = system.file.saveFile("inventory_operations.json")
if path is not None:
	system.file.writeFile(path, jsonBytes)
```
