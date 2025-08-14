---
sidebar_position: 20
title: "exportAsJsonBytes"
description: "Exports all inventory operations as raw bytes in JSON format (UTF-8 encoded)"
---

# system.mes.inventory.operation.exportAsJsonBytes

## Description

Exports all [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) as raw bytes in JSON format
(UTF-8 encoded). Streams operation data from the database and formats it as JSON, including a
header row.

## Syntax

```python
system.mes.inventory.operation.exportAsJsonBytes()
```

## Parameters

| Parameter | Type | Nullable | Description                                 |
|-----------|------|----------|---------------------------------------------|
| None      | -    | -        | This function does not take any parameters. |

## Returns

A Byte array (Byte[]) containing the raw byte data of the JSON export.

## Code Examples

### Perspective
```python
jsonBytes = system.mes.inventory.operation.exportAsJsonBytes()
system.perspective.download("inventory_operations.json", jsonBytes)
```


