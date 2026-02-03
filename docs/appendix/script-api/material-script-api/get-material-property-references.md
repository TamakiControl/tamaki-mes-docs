---
sidebar_position: 33
title: "getMaterialPropertyReferences"
description: "Retrieves a list of references to a material property with the given ID."
---

# system.mes.material.getMaterialPropertyReferences

## Description

Retrieves a list of references to a [Material Properties](../../data-model/material-model/material-property) by its ID.

## Syntax

```python
system.mes.material.getMaterialPropertyReferences(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                    |
|-----------|-----------------|----------|------------------------------------------------|
| `id`      | `String` (ULID) | False    | The ULID of the material property to retrieve. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name         | Type                | Description                                                                |
|--------------|---------------------|----------------------------------------------------------------------------|
| `tableName`  | `String`            | The name of the table that the reference is in.                            |
| `references` | `List<JSON Object>` | List of JSON objects corresponding to references to the material property. |

The JSON Objects in references has the following properties:

| Name        | Type            | Description                                                       |
|-------------|-----------------|-------------------------------------------------------------------|
| `fkColName` | `String`        | The name of the foreign key column.                               |
| `id`        | `String` (ULID) | The ULID of the object that is referencing the material property. |

## Code Examples

```python
# Retrieve the references for the material property specified
propertyReferences = system.mes.material.getMaterialPropertyReferences('01JQY39KNJ-E6AH9CCK-WM2XMMRW')

# Output the material property references
print(propertyReferences)
```
