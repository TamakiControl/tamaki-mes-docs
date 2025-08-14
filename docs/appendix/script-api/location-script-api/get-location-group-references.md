---
sidebar_position: 14
title: "getLocationGroupReferences"
description: "Retrieves a list of references to a location with the given ID."
---

# system.mes.location.getLocationGroupReferences

## Description

Retrieves a list of references to a [Location Groups](../../data-model/location-model/location-group) record by its ID.

## Syntax

```python
system.mes.location.getLocationGroupReferences(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                               |
|-----------|-----------------|----------|-------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the location group to retrieve. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name         | Type                | Description                                                       |
| ------------ | ------------------- | ----------------------------------------------------------------- |
| `tableName`  | `String`            | The name of the table that the reference is in.                   |
| `references` | `List<JSON Object>` | List of JSON objects corresponding to references to the location. |

The JSON Objects in references has the following properties:

| Name        | Type            | Description                                              |
| ----------- | --------------- | -------------------------------------------------------- |
| `fkColName` | `String`        | The name of the foreign key column.                      |
| `id`        | `String` (ULID) | The ULID of the object that is referencing the location. |

## Code Examples

```python
# Retrieve the references for the location group specified
group_references = system.mes.location.getLocationGroupReferences('DairyCo')

# Output the location group references
print(group_references)
```
