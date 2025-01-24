---
sidebar_position: 21
title: "getLocationPropertyReferences"
description: "Retrieves a list of references to a location property with the given ID or path."
---

# system.mes.location.getLocationPropertyReferences

## Description

Retrieves a list of references to a [Location Properties](../../data-model/location-model/location-property) by its ID or name.

## Syntax
```python
system.mes.location.getLocationPropertyReferences(idOrName)
```

## Parameters

| Parameter  | Type     | Description                                            |
|------------|----------|--------------------------------------------------------|
| `idOrName` | `String` | The ULID or name of the location property to retrieve. |

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
# Retrieve the references for the location property specified
property_references = system.mes.location.getLocationPropertyReferences('Cows')

# Output the location property references
print(property_references)
```