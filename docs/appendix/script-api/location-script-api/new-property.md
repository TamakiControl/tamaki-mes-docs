---
sidebar_position: 15
title: "newProperty"
description: "Creates a new location property."
---

# system.mes.location.newProperty

## Description

Creates a new [Location Properties](../../data-model/location-model/location-property) to be formatted with attributes.

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
# Create a new property for temperature
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

# Print the JSON representation of the saved property
print(saved_property)
```