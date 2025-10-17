---
sidebar_position: 23
title: "importFromCsv"
description: "Imports operations from a CSV file provided as a string or as raw bytes"
---

# system.mes.operation.importFromCsv

## Description

Imports [Operations](../../data-model/operation-model/operation) from a CSV file provided as a string or as raw bytes. 
The service layer will parse the CSV content and create or update operation entities based on the 'name' and 'location' 
columns.

Recommended to export at least one pre-existing operation to CSV using the [Export Operations](export-as-csv.md)
functionality to ensure the correct format of the CSV file.


## Permissions

This method requires the `OPERATION.WRITE.SAVE` permission.

## Syntax

```python
system.mes.operation.importFromCsv(importBytes)
```

## Parameters

| Parameter     | Type      | Nullable | Description                   |
|---------------|-----------|----------|-------------------------------|
| `importBytes` | `PyArray` | False    | The CSV content as raw bytes. |

## Returns

The number of operations successfully imported or updated.

## Code Examples

Here is an example of how to use the `importFromCsv` method in the context of a [Perspective File Upload Component](https://www.docs.inductiveautomation.com/docs/8.1/appendix/components/perspective-components/perspective-input-palette/perspective-file-upload)
`onFileReceived` event handler. Reference [Perspective - File Upload Scripting](https://www.docs.inductiveautomation.com/docs/8.1/appendix/components/perspective-components/perspective-input-palette/perspective-file-upload/perspective-file-upload-scripting)
for more information on the `onFileReceived` event handler.

### Bytes
```python
def runAction(self, event):
	csvBytes = event.file.getBytes()
	system.mes.operation.importFromCsv(csvBytes)
```

### String
```python
def runAction(self, event):
	csvString = event.file.getString()
	system.mes.operation.importFromCsv(csvString)
```
