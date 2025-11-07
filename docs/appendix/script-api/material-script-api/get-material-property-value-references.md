---
sidebar_position: 44
title: "getMaterialPropertyValueReferences"
description: "Retrieves a list of references to a material property value with the given ID."
---

# system.mes.material.getMaterialPropertyValueReferences

## Description

Retrieves a list of references to a [Material Property Values](../../data-model/material-model/material-property-value) by its ID.

## Syntax

```python
system.mes.material.getMaterialPropertyValueReferences(id)
```

## Parameters

| Parameter | Type     | Nullable | Description                                          |
|-----------|----------|----------|------------------------------------------------------|
| `id`      | `String` | False    | The ULID of the material property value to retrieve. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name         | Type                | Description                                                                      |
|--------------|---------------------|----------------------------------------------------------------------------------|
| `tableName`  | `String`            | The name of the table that the reference is in.                                  |
| `references` | `List<JSON Object>` | List of JSON objects corresponding to references to the material property value. |

The JSON Objects in references has the following properties:

| Name        | Type            | Description                                                             |
|-------------|-----------------|-------------------------------------------------------------------------|
| `fkColName` | `String`        | The name of the foreign key column.                                     |
| `id`        | `String` (ULID) | The ULID of the object that is referencing the material property value. |

## Code Examples

```python
# Retrieve the references for the material property value specified
propertyValueReferences = system.mes.material.getMaterialPropertyValueReferences('01JRDP4APW-5D56ZQ8C-8949XKYT')

# Output the material property value references
print(propertyValueReferences)
```
