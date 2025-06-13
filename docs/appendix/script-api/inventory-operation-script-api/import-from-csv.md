---
sidebar_position: 21
title: "importFromCsv"
description: "Imports inventory operations from a CSV file provided as a string or as raw bytes"
---

# system.mes.inventory.operation.importFromCsv

## Description

Imports [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) from a CSV file provided as a string or as raw bytes. 
The service layer will parse the CSV content and create or update operation entities based on the 'name' and 'location' 
columns.

Recommended to export at least one pre-existing operation to CSV using the [Export Operations](export-as-csv.md)
functionality to ensure the correct format of the CSV file.

## Syntax

```python
system.mes.inventory.operation.importFromCsv(importString)
system.mes.inventory.operation.importFromCsv(importBytes)
```

## Parameters

Either a string or bytes array representing the CSV content. 

| Parameter          | Type     | Description                                                   |
| ------------------ |----------| ------------------------------------------------------------- |
| `importString`     | `String` | The CSV content as a string.                                  |
| `importBytes`      | `PyArray` | The CSV content as raw bytes.                                 |

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
	system.mes.inventory.operation.importFromCsv(csvBytes)
```

### String
```python
def runAction(self, event):
	csvString = event.file.getString()
	system.mes.inventory.operation.importFromCsv(csvString)
```
