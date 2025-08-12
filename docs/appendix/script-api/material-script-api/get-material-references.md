---
sidebar_position: 22
title: "getMaterialReferences"
description: "Retrieves a list of references to a material with the given ID or path."
---

# system.mes.material.getMaterialReferences

## Description

Retrieves a list of references to a [Materials](../../data-model/material-model/material) record by its ID or path.

## Syntax

```python
system.mes.material.getMaterialReferences(idOrPath)
```

## Parameters

| Parameter  | Type     | Nullable | Description                                 |
|------------|----------|----------|---------------------------------------------|
| `idOrPath` | `String` | False    | The ID or path of the material to retrieve. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name         | Type                | Description                                                       |
|--------------|---------------------|-------------------------------------------------------------------|
| `tableName`  | `String`            | The name of the table that the reference is in.                   |
| `references` | `List<JSON Object>` | List of JSON objects corresponding to references to the material. |

The JSON Objects in references has the following properties:

| Name        | Type            | Description                                              |
|-------------|-----------------|----------------------------------------------------------|
| `fkColName` | `String`        | The name of the foreign key column.                      |
| `id`        | `String` (ULID) | The ULID of the object that is referencing the material. |

## Code Examples

```python
# Retrieve the references for the material specified
material_references = system.mes.material.getMaterialReferences('IRB/5391537510212')

# Output the material references
print(material_references)
```
