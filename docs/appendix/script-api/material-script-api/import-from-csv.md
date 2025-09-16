---
sidebar_position: 23
title: "importFromCsv"
description: "Imports materials from a CSV file provided as raw bytes"
---

# system.mes.material.importFromCsv

## Description

Imports [Materials](../../data-model/material-model/material) from a CSV file provided as raw bytes.
The service layer parses the CSV content and creates or updates material entities.

Recommended to export at least one pre-existing material to CSV using the [Export Materials](export-materials-as-csv.md)
functionality to ensure the correct format of the CSV file.

## Syntax

```python
system.mes.material.importFromCsv(importBytes)
```

## Parameters

A bytes array representing the CSV content.

| Parameter      | Type      | Nullable | Description                   |
|----------------|-----------|----------|-------------------------------|
| `importBytes`  | `PyArray` | False    | The CSV content as raw bytes. |

## Returns

An ApiResponse object where `data` is the number of materials successfully imported or updated.

## Code Examples

Here is an example of how to use the `importFromCsv` method in the context of a [Perspective File Upload Component](https://www.docs.inductiveautomation.com/docs/8.1/appendix/components/perspective-components/perspective-input-palette/perspective-file-upload)
`onFileReceived` event handler. Reference [Perspective - File Upload Scripting](https://www.docs.inductiveautomation.com/docs/8.1/appendix/components/perspective-components/perspective-input-palette/perspective-file-upload/perspective-file-upload-scripting)
for more information on the `onFileReceived` event handler.

```python
def runAction(self, event):
	csvBytes = event.file.getBytes()
	response = system.mes.material.importFromCsv(csvBytes)
	# response["data"] contains the number imported
```
