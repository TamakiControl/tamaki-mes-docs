---
sidebar_position: 10
title: "getLocationReferences"
description: "Retrieves a list of references to a location with the given id or path."
---

# system.mes.location.getLocationReferences

## Description

Retrieves a list of references to a [Locations](../../data-model/location-model/location) record by its id or path.

## Syntax
```python
system.mes.location.getLocationReferences(idOrPath)
```

## Parameters

| Parameter  | Type     | Description                                 |
|------------|----------|---------------------------------------------|
| `idOrPath` | `String` | The ID or path of the location to retrieve. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name         | Type                 | Description                                                        |
|--------------|----------------------|--------------------------------------------------------------------|
| `tableName`  | `String`             | The name of the table that the reference is in.                    |
| `references` | `List\<JSON Object>` | List of JSON objects corresponding to references to the location.  |

The JSON Objects in references has the following properties:

| Name        | Type            | Description                                              |
|-------------|-----------------|----------------------------------------------------------|
| `fkColName` | `String`        | The name of the foreign key column.                      |
| `id`        | `String` (ULID) | The ULID of the object that is referencing the location. |

## Code Examples

```python
# Retrieve the references for the location specified
location_references = system.mes.location.getLocationReferences('DairyCo')

# Output the location references
print(location_references)
```