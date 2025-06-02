---
sidebar_position: 25
title: "exportMaterialsAsCsv"
description: "Exports all materials as a CSV string (UTF-8 encoded)"
---

# system.mes.material.exportMaterialsAsCsv

## Description

Exports all [Materials](../../data-model/material-model/material) as a CSV string (UTF-8 encoded). 
Streams material data from the database and formats it as a CSV string, including a header row.

## Syntax

```python
system.mes.material.exportMaterialsAsCsv()
```

## Parameters

No parameters.

## Returns

All materials as a CSV string (UTF-8 encoded).

## Code Examples

### Perspective
```python
csvString = system.mes.material.exportMaterialsAsCsv()
system.perspective.download("materials.csv", csvBytes)
```

### Vision
```python
csvString = system.mes.material.exportMaterialsAsCsv()
path = system.file.saveFile("materials.csv")
if path is not None:
	system.file.writeFile(path, csvString)
```


