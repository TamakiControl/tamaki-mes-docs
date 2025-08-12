---
sidebar_position: 18
title: "exportAsCsvBytes"
description: "Exports all inventory operations as raw bytes in CSV format (UTF-8 encoded)"
---

# system.mes.inventory.operation.exportAsCsvBytes

## Description

Exports all [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) as raw bytes in CSV format 
(UTF-8 encoded). Streams operation data from the database and formats it as CSV, including a 
header row.

## Syntax

```python
system.mes.inventory.operation.exportAsCsvBytes()
```

## Parameters

| Parameter | Type | Nullable | Description                                 |
|-----------|------|----------|---------------------------------------------|
| None      | -    | -        | This function does not take any parameters. |

## Returns

A Byte array (Byte[]) containing the raw byte data of the CSV export.

## Code Examples

### Perspective
```python
csvBytes = system.mes.inventory.operation.exportAsCsvBytes()
system.perspective.download("inventory_operations.csv", csvBytes)
```


