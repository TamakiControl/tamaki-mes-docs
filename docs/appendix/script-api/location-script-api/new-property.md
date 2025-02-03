---
sidebar_position: 16
title: "newProperty"
description: "Generates an empty non-persisted properties object to provide the structure to save a new record into the database."
---

# system.mes.location.newProperty

## Description

Generates an empty non-persisted [Location Properties](../../data-model/location-model/location-property) object to provide the structure required by the API 
to save a new record into the database. This method must be combined with the [saveProperty](./save-property) method in order to persist the record.

## Syntax
```python
system.mes.location.newProperty()
```

## Parameters

| Parameter | Type | Description                               |
|-----------|------|-------------------------------------------|
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Location Property object. The following is a list of keys and default values:

| Key              | Default Value    |
|------------------|------------------|
| `name`           | `null`           |
| `description`    | `null`           |
| `dataType`       | `String`         |
| `lowLimit`       | `null`           |
| `highLimit`      | `null`           |
| `format`         | `null`           |
| `units`          | `null`           |
| `options`        | `null`           |
| `nullable`       | `false`          |
| `defaultValue`   | `null`           |
| `id`             | `null`           |
| `notes`          | `null`           |
| `enabled`        | `true`           |
| `spare1`         | `null`           |
| `spare2`         | `null`           |
| `spare3`         | `null`           |

## Code Examples

```python
# Generate the object structure for a new property object with no initial arguments
temperature_property = system.mes.location.newProperty()

# Define property details
temperature_property['name'] = 'Temperature'
temperature_property['dataType'] = 'Float'
temperature_property['units'] = 'Celsius'
temperature_property['nullable'] = False
temperature_property['lowLimit'] = -20
temperature_property['highLimit'] = 50
# (You can continue setting other properties as needed here)

# Save the property
saved_property = system.mes.location.saveProperty(**temperature_property)

# Output the JSON representation of the saved property
print(saved_property)
```