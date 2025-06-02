---
sidebar_position: 27
title: "exportMaterialClassesAsCsvBytes"
description: "Exports all material classes as raw bytes in CSV format (UTF-8 encoded)"
---

# system.mes.material.exportMaterialClassesAsCsvBytes

## Description

Exports all [Material Classes](../../data-model/material-model/material-class) as raw bytes in CSV format 
(UTF-8 encoded). Streams material data from the database and formats it as CSV, including a 
header row.

## Syntax

```python
system.mes.material.exportMaterialClassesAsCsvBytes()
```

## Parameters

No parameters.

## Returns

A Byte array (Byte[]) containing the raw byte data of the CSV export.

## Code Examples

### Perspective
```python
csvBytes = system.mes.material.exportMaterialClassesAsCsvBytes()
system.perspective.download("material_classes.csv", csvBytes)
```


