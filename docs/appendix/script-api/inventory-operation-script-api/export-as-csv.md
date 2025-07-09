---
sidebar_position: 17
title: "exportAsCsv"
description: "Exports all inventory operations as a CSV string (UTF-8 encoded)"
---

# system.mes.inventory.operation.exportAsCsv

## Description

Exports all [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) as a CSV string (UTF-8 encoded). 
Streams operation data from the database and formats it as a CSV string, including a header row.

## Syntax

```python
system.mes.inventory.operation.exportAsCsv()
```

## Parameters

No parameters.

## Returns

All inventory operations as a CSV string (UTF-8 encoded).

## Code Examples

### Perspective
```python
csvString = system.mes.inventory.operation.exportAsCsv()
system.perspective.download("inventory_operations.csv", csvBytes)
```

### Script Console
```python
csvString = system.mes.inventory.operation.exportAsCsv()
path = system.file.saveFile("inventory_operations.csv")
if path is not None:
	system.file.writeFile(path, csvString)
```


