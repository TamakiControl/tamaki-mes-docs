---
sidebar_position: 25
title: "exportMaterialsAsCsv"
description: "Exports all material classes as a CSV string (UTF-8 encoded)"
---

# system.mes.material.exportMaterialClassesAsCsv

## Description

Exports all [Material Classes](../../data-model/material-model/material-class) as a CSV string (UTF-8 encoded). 
Streams material class data from the database and formats it as a CSV string, including a header row.

## Syntax

```python
system.mes.material.exportMaterialClassesAsCsv()
```

## Parameters

No parameters.

## Returns

All material classes as a CSV string (UTF-8 encoded).

## Code Examples

### Perspective
```python
csvString = system.mes.material.exportMaterialClassesAsCsv()
system.perspective.download("material_classes.csv", csvBytes)
```

### Script Console
```python
csvString = system.mes.material.exportMaterialClassesAsCsv()
path = system.file.saveFile("material_classes.csv")
if path is not None:
	system.file.writeFile(path, csvString)
```


