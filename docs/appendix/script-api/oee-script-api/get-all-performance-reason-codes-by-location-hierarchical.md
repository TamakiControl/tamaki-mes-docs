---
sidebar_position: 30
title: 'getAllPerformanceReasonCodesByLocationHierarchical'
description: 'Retrieves all performance reason codes for a specific location, organized as a hierarchical tree structure.'
---

# system.mes.oee.getAllPerformanceReasonCodesByLocationHierarchical

## Description

Retrieves all OEE Performance Reasons for a specific location, organized as a hierarchical tree structure. This method
returns performance reasons with their parent-child relationships intact, allowing for easy navigation of the reason
hierarchy.

## Permissions

This method requires `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getAllPerformanceReasonCodesByLocationHierarchical(locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                                 |
|--------------------|----------|----------|-----------------------------------------------------------------------------|
| `locationIdOrPath` | `String` | True     | The ID or path of the location. If null, returns reasons for all locations. |

## Returns

A list of JSON objects representing root-level `OeePerformanceReasonHierarchicalDTO` objects, each containing nested
children.

| Name           | Type                                        | Nullable | Description                                                                                         | Default Value |
|----------------|---------------------------------------------|----------|-----------------------------------------------------------------------------------------------------|---------------|
| `id`           | `String`                                    | `True`   | The id of the Performance Reason                                                                    | `null`        |
| `locationId`   | `String`                                    | `True`   | Identifier of the associated location (inherited from OeePerformanceReasonDTO)                      | `null`        |
| `locationPath` | `String`                                    | `True`   | Path of the associated location (inherited from OeePerformanceReasonDTO)                            | `null`        |
| `parentId`     | `String`                                    | `True`   | Identifier of the parent performance reason (inherited from OeePerformanceReasonDTO)                | `null`        |
| `code`         | `Integer`                                   | `False`  | Unique fault code associated with this performance reason (inherited from OeePerformanceReasonDTO)  | `0`           |
| `name`         | `String`                                    | `False`  | Name of the performance reason (inherited from OeePerformanceReasonDTO)                             | `null`        |
| `description`  | `String`                                    | `True`   | Description of the performance reason (inherited from OeePerformanceReasonDTO)                      | `null`        |
| `path`         | `String`                                    | `True`   | Path representation of the performance reason (inherited from OeePerformanceReasonDTO)              | `null`        |
| `children`     | `List<OeePerformanceReasonHierarchicalDTO>` | `True`   | List of child performance reasons                                                                   | `null`        |
| `notes`        | `String`                                    | `True`   | Notes associated with the Performance Reason                                                        | `null`        |
| `enabled`      | `boolean`                                   | `True`   | Indicates whether the Performance Reason is enabled                                                 | `true`        |
| `spare1`       | `String`                                    | `True`   | Extra field                                                                                         | `null`        |
| `spare2`       | `String`                                    | `True`   | Extra field                                                                                         | `null`        |
| `spare3`       | `String`                                    | `True`   | Extra field                                                                                         | `null`        |

## Code Examples

```python
# Get hierarchical performance reasons for a specific location
location = "Site/Area/Line 1"
hierarchy = system.mes.oee.getAllPerformanceReasonCodesByLocationHierarchical(location)

def print_hierarchy(reasons, indent=0):
    for reason in reasons:
        print "  " * indent + reason['name']
        if reason['children']:
            print_hierarchy(reason['children'], indent + 1)

print_hierarchy(hierarchy)
```

