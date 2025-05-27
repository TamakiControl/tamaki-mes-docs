---
sidebar_position: 25
title: "exportAsCsv"
description: "Exports all operations as a CSV string (UTF-8 encoded)"
---

# system.mes.operation.importFromJson

## Description

Exports all [Operations](../../data-model/operation-model/operation) as a CSV string (UTF-8 encoded). 
Streams operation data from the database and formats it as a CSV string, including a header row.

## Syntax

```python
system.mes.operation.exportAsCsv()
```

## Parameters

No parameters.

## Returns

All operations as a CSV string (UTF-8 encoded).

## Code Examples

### Perspective
```python
csvString = system.mes.operation.exportAsCsv()
system.perspective.download("operations.csv", csvBytes)
```

### Vision
```python
csvString = system.mes.operation.exportAsCsv()
path = system.file.saveFile("operations.csv")
if path is not None:
	system.file.writeFile(path, csvString)
```


