---
sidebar_position: 26
title: "exportMaterialsAsJson"
description: "Exports all materials as a JSON string (UTF-8 encoded)"
---

# system.mes.material.exportMaterialsAsJson

## Description

Exports all [Materials](../../data-model/material-model/material) as a JSON string (UTF-8 encoded).
Streams material data from the database and formats it as a JSON string, including a header row.

## Syntax

```python
system.mes.material.exportMaterialsAsJson()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

All materials as a JSON string (UTF-8 encoded).

## Code Examples

### Perspective
```python
jsonString = system.mes.material.exportMaterialsAsJson()
system.perspective.download("materials.json", jsonBytes)
```

### Script Console
```python
jsonString = system.mes.material.exportMaterialsAsJson()
path = system.file.saveFile("materials.json")
if path is not None:
	system.file.writeFile(path, jsonString)
```
