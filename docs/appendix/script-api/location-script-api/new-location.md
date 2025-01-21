---
sidebar_position: 0
title: "newLocation"
description: "Creates a new location in the system."
---

# system.mes.location.newLocation

## Description

Creates a new [Locations](../../data-model/location-model/location) record to be formatted with attributes.

## Syntax
```python
system.mes.location.newLocation()
```

## Parameters

| Parameter | Type | Description                               |
|-----------|------|-------------------------------------------|
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Location object. The following is a list of keys and default values:

| Key                        | Default Value    |
|----------------------------|------------------|
| `name`                     | `null`           |
| `description`              | `null`           |
| `parentId`                 | `null`           |
| `type`                     | `ENTERPRISE`     |
| `processType`              | `NONE`           |
| `sortOrder`                | `0`              |
| `allowNegativeInventory`   | `false`          |
| `storageCapacity`          | `null`           |
| `storageCapacityUnitId`    | `null`           |
| `lotStorageStrategy`       | `ALLOW_MULTIPLE` |
| `lotUseStrategy`           | `FIFO`           |
| `path`                     | `null`           |
| `id`                       | `null`           |
| `notes`                    | `null`           |
| `enabled`                  | `true`           |
| `spare1`                   | `null`           |
| `spare2`                   | `null`           |
| `spare3`                   | `null`           |

## Code Examples

```python
# Create a new location instance with no initial arguments
new_location = system.mes.location.newLocation()

# Set basic attributes for the new location
new_location['name'] = 'NewLocation'
new_location['description'] = 'A new location created via script.'
# (You can continue setting other properties as needed here)

# Save the new location to the system
saved_location = system.mes.location.saveLocation(**new_location)

# Output the JSON representation of the saved location
print(saved_location)
```