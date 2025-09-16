---
sidebar_position: 19
title: "importFromCsv"
description: "Imports inventory operations from a CSV file provided as raw bytes"
---

# system.mes.inventory.operation.importFromCsv

## Description

Imports [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) from a CSV file provided as raw bytes.
The service layer will parse the CSV content and create or update inventory operation entities.

Recommended to export at least one pre-existing material to CSV using the [Export Inventory Operations](export-as-csv.md)
functionality to ensure the correct format of the CSV file.

## Syntax

```python
system.mes.inventory.operation.importFromCsv(importBytes)
```

## Parameters

| Parameter     | Type      | Nullable | Description                   |
| ------------- | --------- | -------- | ----------------------------- |
| `importBytes` | `PyArray` | False    | The CSV content as raw bytes. |

## Returns

An ApiResponse object where `data` is the number of inventory operations successfully imported or updated.

## Code Examples

Here is an example of how to use the `importFromCsv` method in the context of a [Perspective File Upload Component](https://www.docs.inductiveautomation.com/docs/8.1/appendix/components/perspective-components/perspective-input-palette/perspective-file-upload)
`onFileReceived` event handler. Reference [Perspective - File Upload Scripting](https://www.docs.inductiveautomation.com/docs/8.1/appendix/components/perspective-components/perspective-input-palette/perspective-file-upload/perspective-file-upload-scripting)
for more information on the `onFileReceived` event handler.

```python
def runAction(self, event):
	csvBytes = event.file.getBytes()
	response = system.mes.inventory.operation.importFromCsv(csvBytes)
	# response["data"] contains the number imported
```
