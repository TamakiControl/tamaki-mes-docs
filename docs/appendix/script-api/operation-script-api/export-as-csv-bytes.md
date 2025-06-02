---
sidebar_position: 27
title: "exportAsCsvBytes"
description: "Exports all operations as raw bytes in CSV format (UTF-8 encoded)"
---

# system.mes.operation.exportAsCsvBytes

## Description

Exports all [Operations](../../data-model/operation-model/operation) as raw bytes in CSV format 
(UTF-8 encoded). Streams operation data from the database and formats it as CSV, including a 
header row.

## Syntax

```python
system.mes.operation.exportAsCsvBytes()
```

## Parameters

No parameters.

## Returns

A Byte array (Byte[]) containing the raw byte data of the CSV export.

## Code Examples

### Perspective
```python
csvBytes = system.mes.operation.exportAsCsvBytes()
system.perspective.download("operations.csv", csvBytes)
```


