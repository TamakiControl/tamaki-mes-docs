---
sidebar_position: 19
title: "exportAsJson"
description: "Exports all inventory operations as a JSON string (UTF-8 encoded)"
---

# system.mes.inventory.operation.exportAsJson

## Description

Exports all [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) as a JSON string (UTF-8 encoded).
Streams operation data from the database and formats it as a JSON string, including a header row.

## Syntax

```python
system.mes.inventory.operation.exportAsJson()
```

## Parameters

| Parameter | Type | Nullable | Description                                 |
|-----------|------|----------|---------------------------------------------|
| None      | -    | -        | This function does not take any parameters. |

## Returns

All inventory operations as a JSON string (UTF-8 encoded).

## Code Examples

### Perspective
```python
jsonString = system.mes.inventory.operation.exportAsJson()
system.perspective.download("inventory_operations.json", jsonBytes)
```

### Script Console
```python
jsonString = system.mes.inventory.operation.exportAsJson()
path = system.file.saveFile("inventory_operations.json")
if path is not None:
	system.file.writeFile(path, jsonString)
```

