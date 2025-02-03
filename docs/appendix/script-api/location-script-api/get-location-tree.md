---
sidebar_position: 9
title: "getLocationTree"
description: "Retrieves locations as a tree."
---

# system.mes.location.getLocationTree

## Description

**No Filter:** Retrieves all [Locations](../../data-model/location-model/location) records as a tree structure. 

**With a Filter:** Retrieves all [Locations](../../data-model/location-model/location) records whose names contain a substring that matches the filter. 
Returns the parent locations even if they don't contain the filter.

## Syntax
```python
system.mes.location.getLocationTree()
system.mes.location.getLocationTree(filter)
```

## Parameters

**No Filter:**
| Parameter | Type | Description                               |
|-----------|------|-------------------------------------------|
| None      | -    | This method does not take any parameters. |

**With a Filter:**
| Parameter | Type     | Description                                                  |
|-----------|----------|--------------------------------------------------------------|
| `name`    | `String` | The name or substring of a name of the location to retrieve. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name                       | Type                 | Description                                                                                                                      |
|----------------------------|----------------------|----------------------------------------------------------------------------------------------------------------------------------|
| `children`                 | `List<JSON Object>`  | The children of the location. The JSON objects in the list have the same properties as the parent.                               |
| `name`                     | `String`             | The name of the location.                                                                                                        |
| `description`              | `String`             | A detailed description of the location.                                                                                          |
| `parentId`                 | `String`             | The ULID of the parent location.                                                                                                 |
| `type`                     | `String`             | The type of the location (e.g., ENTERPRISE, COMPANY, SITE, AREA, LINE, CELL_GROUP, CELL, UNIT).                                  |
| `processType`              | `String`             | The process type for the location (e.g., STORAGE, CONTINUOUS, BATCH, DISCRETE, NONE).                                            |
| `sortOrder`                | `Integer`            | Determines the display order of the location.                                                                                    |
| `allowNegativeInventory`   | `Boolean`            | Allows inventory to go negative at this location.                                                                                |
| `storageCapacity`          | `Double`             | Maximum storage capacity allowed at the location.                                                                                |
| `storageCapacityUnitId`    | `String`             | The ULID for the storage capacity unit.                                                                                          |
| `lotStorageStrategy`       | `String`             | Defines the lot storage strategy (e.g, ALLOW_MULTIPLE, ALLOW_SINGLE_OR_THROW, MERGE_INTO_PREVIOUS, MERGE_INTO_NEW, NO_STORAGE).  |
| `lotUseStrategy`           | `String`             | Defines the lot usage strategy, such as FIFO or FEFO.                                                                            |
| `path`                     | `String`             | Path of the location within the hierarchy.                                                                                       |
| `id`                       | `String` (ULID)      | The ULID of the location.                                                                                                        |
| `notes`                    | `String`             | Notes related to the location.                                                                                                   |
| `enabled`                  | `Boolean`            | Indicates if the location is active and enabled.                                                                                 |
| `spare1`                   | `String`             | Additional field for user-defined context.                                                                                       |
| `spare2`                   | `String`             | Additional field for user-defined context.                                                                                       |
| `spare3`                   | `String`             | Additional field for user-defined context.                                                                                       |

## Code Examples

```python
# Retrieve all locations with the substring 'Plant' in their name and their parents
location_tree = system.mes.location.getLocationTree('Plant')

# Output the location tree
print(location_tree)
```