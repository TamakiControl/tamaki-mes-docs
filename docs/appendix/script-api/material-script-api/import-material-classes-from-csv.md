---
sidebar_position: 23
title: "importMaterialClassesFromCsv"
description: "Imports material classes from a CSV file provided as a string or as raw bytes"
---

# system.mes.material.importMaterialClassesFromCsv

## Description

Imports [Material Classes](../../data-model/material-model/material-class) from a CSV file provided as a string or as raw bytes. 
The service layer will parse the CSV content and create or update material entities based on the 'name' and 'location' 
columns.

Recommended to export at least one pre-existing material classa  to CSV using the [Export Material Classes](export-material-classes-as-csv.md)
functionality to ensure the correct format of the CSV file.

## Syntax

```python
system.mes.material.importMaterialClassesFromCsv(importString)
system.mes.material.importMaterialClassesFromCsv(importBytes)
```

## Parameters

Either a string or bytes array representing the CSV content. 

| Parameter          | Type     | Description                                                   |
| ------------------ |----------| ------------------------------------------------------------- |
| `importString`     | `String` | The CSV content as a string.                                  |
| `importBytes`      | `PyArray` | The CSV content as raw bytes.                                 |

## Returns

The number of material classes successfully imported or updated.

## Code Examples

Here is an example of how to use the `importMaterialClassesFromCsv` method in the context of a [Perspective File Upload Component](https://www.docs.inductiveautomation.com/docs/8.1/appendix/components/perspective-components/perspective-input-palette/perspective-file-upload)
`onFileReceived` event handler. Reference [Perspective - File Upload Scripting](https://www.docs.inductiveautomation.com/docs/8.1/appendix/components/perspective-components/perspective-input-palette/perspective-file-upload/perspective-file-upload-scripting)
for more information on the `onFileReceived` event handler.

### Bytes
```python
def runAction(self, event):
	csvBytes = event.file.getBytes()
	system.mes.material.importMaterialClassesFromCsv(csvBytes)
```

### String
```python
def runAction(self, event):
	csvString = event.file.getString()
	system.mes.material.importMaterialClassesFromCsv(csvString)
```
