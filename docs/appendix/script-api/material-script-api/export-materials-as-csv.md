---
sidebar_position: 25
title: 'exportAsCsv'
description: 'Exports all materials and material classes as a CSV byte array'
---

# system.mes.material.exportAsCsv

## Description

Exports all [Materials](../../data-model/material-model/material) as a CSV byte array.
Streams material data from the database and formats it as a CSV byte array, including a header row.

## Permissions

This method requires the `MATERIAL.READ.GET` permission.

## Syntax

```python
system.mes.material.exportAsCsv()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

All materials as a CSV string (UTF-8 encoded).

## Code Examples

### Perspective

```python
csvString = system.mes.material.exportMaterialsAsCsv()
system.perspective.download("materials.csv", csvBytes)
```

### Script Console

```python
csvString = system.mes.material.exportMaterialsAsCsv()
path = system.file.saveFile("materials.csv")
if path is not None:
	system.file.writeFile(path, csvString)
```
