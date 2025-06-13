---
sidebar_position: 29
title: "exportMaterialClassesAsJsonBytes"
description: "Exports all material classes as raw bytes in JSON format (UTF-8 encoded)"
---

# system.mes.material.exportMaterialClassesAsJsonBytes

## Description

Exports all [Material Classes](../../data-model/material-model/material-class) as raw bytes in JSON format
(UTF-8 encoded). Streams material data from the database and formats it as JSON, including a
header row.

## Syntax

```python
system.mes.material.exportMaterialClassesAsJsonBytes()
```

## Parameters

No parameters.

## Returns

A Byte array (Byte[]) containing the raw byte data of the JSON export.

## Code Examples

### Perspective
```python
jsonBytes = system.mes.material.exportMaterialClassesAsJsonBytes()
system.perspective.download("material_classes.json", jsonBytes)
```


