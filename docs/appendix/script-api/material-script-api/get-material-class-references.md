---
sidebar_position: 9
title: "getMaterialClassReferences"
description: "Retrieves a list of references to a material class with the given ID or path."
---

# system.mes.material.getMaterialClassReferences

## Description

Retrieves a list of references to a [Material Classes](../../data-model/material-model/material-class) record by its ID or path.


## Permissions

This method requires the `MATERIAL.READ.GET` permission.

## Syntax

```python
system.mes.material.getMaterialClassReferences(idOrPath)
```

## Parameters

| Parameter  | Type     | Nullable | Description                                       |
|------------|----------|----------|---------------------------------------------------|
| `idOrPath` | `String` | False    | The ID or path of the material class to retrieve. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name         | Type                | Description                                                             |
|--------------|---------------------|-------------------------------------------------------------------------|
| `tableName`  | `String`            | The name of the table that the reference is in.                         |
| `references` | `List<JSON Object>` | List of JSON objects corresponding to references to the material class. |

The JSON Objects in references has the following properties:

| Name        | Type            | Description                                                    |
|-------------|-----------------|----------------------------------------------------------------|
| `fkColName` | `String`        | The name of the foreign key column.                            |
| `id`        | `String` (ULID) | The ULID of the object that is referencing the material class. |

## Code Examples

```python
# Retrieve the references for the material class specified
material_class_references = system.mes.material.getMaterialClassReferences('RAW')

# Output the material class references
print(material_class_references)
```
