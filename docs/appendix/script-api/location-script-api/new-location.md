---
sidebar_position: 2
title: "newLocation"
description: "Generates an empty non-persisted locations object to provide the structure to save a new record into the database."
---

# system.mes.location.newLocation

## Description

Generates an empty non-persisted [Locations](../../data-model/location-model/location) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveLocation](./save-location) method in order to persist the record.

## Syntax

```python
system.mes.location.newLocation()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created location object. The following is a list of keys and default values:

| Key                      | Default Value    |
|--------------------------|------------------|
| `name`                   | `null`           |
| `description`            | `null`           |
| `parentId`               | `null`           |
| `type`                   | `ENTERPRISE`     |
| `processType`            | `NONE`           |
| `sortOrder`              | `0`              |
| `allowNegativeInventory` | `false`          |
| `storageCapacity`        | `null`           |
| `storageCapacityUnitId`  | `null`           |
| `lotStorageStrategy`     | `NO_STORAGE`     |
| `lotUseStrategy`         | `FIFO`           |
| `path`                   | `null`           |
| `id`                     | `null`           |
| `notes`                  | `null`           |
| `enabled`                | `true`           |
| `spare1`                 | `null`           |
| `spare2`                 | `null`           |
| `spare3`                 | `null`           |

## Code Examples

```python
# Generate the object structure for a new location object with no initial arguments
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
