---
sidebar_position: 26
title: "exportMaterialClassesAsJson"
description: "Exports all material classes as a JSON string (UTF-8 encoded)"
---

# system.mes.material.exportMaterialClassesAsJson

## Description

Exports all [Material Classes](../../data-model/material-model/material-class) as a JSON string (UTF-8 encoded).
Streams material data from the database and formats it as a JSON string, including a header row.

## Syntax

```python
system.mes.material.exportMaterialClassesAsJson()
```

## Parameters

No parameters.

## Returns

All materials as a JSON string (UTF-8 encoded).

## Code Examples

### Perspective
```python
jsonString = system.mes.material.exportMaterialClassesAsJson()
system.perspective.download("material_classes.json", jsonBytes)
```

### Vision
```python
jsonString = system.mes.material.exportMaterialClassesAsJson()
path = system.file.saveFile("material_classes.json")
if path is not None:
	system.file.writeFile(path, jsonString)
```

