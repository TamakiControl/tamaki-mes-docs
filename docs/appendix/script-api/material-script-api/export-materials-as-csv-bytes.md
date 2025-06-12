---
sidebar_position: 27
title: "exportMaterialsAsCsvBytes"
description: "Exports all materials as raw bytes in CSV format (UTF-8 encoded)"
---

# system.mes.material.exportMaterialsAsCsvBytes

## Description

Exports all [Materials](../../data-model/material-model/material) as raw bytes in CSV format 
(UTF-8 encoded). Streams material data from the database and formats it as CSV, including a 
header row.

## Syntax

```python
system.mes.material.exportMaterialsAsCsvBytes()
```

## Parameters

No parameters.

## Returns

A Byte array (Byte[]) containing the raw byte data of the CSV export.

## Code Examples

### Perspective
```python
csvBytes = system.mes.material.exportMaterialsAsCsvBytes()
system.perspective.download("materials.csv", csvBytes)
```


