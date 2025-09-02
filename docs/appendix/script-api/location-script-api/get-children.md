---
sidebar_position: 18
title: "getChildren"
description: "Retrieves all direct children of a location."
---

# system.mes.location.getChildren

## Description

Retrieves all direct children of a [Locations](../../data-model/location-model/location) record by its ID or path.

## Syntax

```python
system.mes.location.getChildren(locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Description                                                     |
|--------------------|----------|-----------------------------------------------------------------|
| `locationIdOrPath` | `String` | The ID or path of the parent location to retrieve children for. |

## Returns

Returns a list of JSON objects representing the direct children locations of the specified location.

Each object in the list has the following properties:

| Name                     | Type            | Description                                                                                                                                                                                       |
|--------------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`                   | `String`        | The name of the location.                                                                                                                                                                         |
| `description`            | `String`        | A detailed description of the location.                                                                                                                                                           |
| `parentId`               | `String` (ULID) | The ULID of the parent location.                                                                                                                                                                  |
| `type`                   | `String`        | The type of the location (e.g., ENTERPRISE, COMPANY, SITE, AREA, LINE, CELL_GROUP, CELL, UNIT).                                                                                                   |
| `processType`            | `String`        | The process type for the location (e.g., STORAGE, CONTINUOUS, BATCH, DISCRETE, NONE).                                                                                                             |
| `sortOrder`              | `Integer`       | Determines the display order of the location.                                                                                                                                                     |
| `allowNegativeInventory` | `Boolean`       | Allows inventory to go negative at this location.                                                                                                                                                 |
| `storageCapacity`        | `Double`        | Maximum storage capacity allowed at the location.                                                                                                                                                 |
| `storageCapacityUnitId`  | `String` (ULID) | The ULID for the storage capacity unit to be used as the default unit of measure for this location. See [unit_of_measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure). |
| `lotStorageStrategy`     | `String`        | Defines the lot storage strategy (e.g, ALLOW_MULTIPLE, ALLOW_SINGLE_OR_THROW, MERGE_INTO_PREVIOUS, MERGE_INTO_NEW, NO_STORAGE).                                                                   |
| `lotUseStrategy`         | `String`        | Defines the lot usage strategy, such as FIFO or FEFO.                                                                                                                                             |
| `path`                   | `String`        | Path of the location within the hierarchy.                                                                                                                                                        |
| `id`                     | `String` (ULID) | The ULID of the location.                                                                                                                                                                         |
| `notes`                  | `String`        | Notes related to the location.                                                                                                                                                                    |
| `enabled`                | `Boolean`       | Indicates if the location is active and enabled.                                                                                                                                                  |
| `spare1`                 | `String`        | Additional field for user-defined context.                                                                                                                                                        |
| `spare2`                 | `String`        | Additional field for user-defined context.                                                                                                                                                        |
| `spare3`                 | `String`        | Additional field for user-defined context.                                                                                                                                                        |

## Code Examples

```python
# Retrieve all direct children of a location
childLocations = system.mes.location.getChildren('DairyCo/Plant1')

# Output the number of child locations
print("Found {0} child locations".format(len(childLocations)))

# Loop through each child location and print its name and path
for location in childLocations:
    print("Name: {0}, Path: {1}".format(location['name'], location['path']))
```
