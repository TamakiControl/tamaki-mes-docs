---
sidebar_position: 38
title: 'getAllQualityReasonCodesByLocationHierarchical'
description: 'Retrieves all quality reason codes for a specific location, organized as a hierarchical tree structure.'
---

# system.mes.oee.getAllQualityReasonCodesByLocationHierarchical

## Description

Retrieves all OEE Quality Reasons for a specific location, organized as a hierarchical tree structure. This method
returns quality reasons with their parent-child relationships intact, allowing for easy navigation of the reason
hierarchy.

## Permissions

This method requires `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getAllQualityReasonCodesByLocationHierarchical(locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                                 |
|--------------------|----------|----------|-----------------------------------------------------------------------------|
| `locationIdOrPath` | `String` | True     | The ID or path of the location. If null, returns reasons for all locations. |

## Returns

A list of JSON objects representing root-level `OeeQualityReasonHierarchicalDTO` objects, each containing nested
children.

| Name           | Type                                   | Nullable | Description                                                                                    | Default Value |
|----------------|----------------------------------------|----------|------------------------------------------------------------------------------------------------|---------------|
| `id`           | `String`                               | `True`   | The id of the Quality Reason                                                                   | `null`        |
| `locationId`   | `String`                               | `True`   | Identifier of the associated location (inherited from OeeQualityReasonDTO)                     | `null`        |
| `locationPath` | `String`                               | `True`   | Path of the associated location (inherited from OeeQualityReasonDTO)                           | `null`        |
| `parentId`     | `String`                               | `True`   | Identifier of the parent quality reason (inherited from OeeQualityReasonDTO)                   | `null`        |
| `code`         | `Integer`                              | `False`  | Unique fault code associated with this quality reason (inherited from OeeQualityReasonDTO)     | `0`           |
| `name`         | `String`                               | `False`  | Name of the quality reason (inherited from OeeQualityReasonDTO)                                | `null`        |
| `description`  | `String`                               | `True`   | Description of the quality reason (inherited from OeeQualityReasonDTO)                         | `null`        |
| `path`         | `String`                               | `True`   | Path representation of the quality reason (inherited from OeeQualityReasonDTO)                 | `null`        |
| `children`     | `List<OeeQualityReasonHierarchicalDTO>` | `True`  | List of child quality reasons                                                                  | `null`        |
| `notes`        | `String`                               | `True`   | Notes associated with the Quality Reason                                                       | `null`        |
| `enabled`      | `boolean`                              | `True`   | Indicates whether the Quality Reason is enabled                                                | `true`        |
| `spare1`       | `String`                               | `True`   | Extra field                                                                                    | `null`        |
| `spare2`       | `String`                               | `True`   | Extra field                                                                                    | `null`        |
| `spare3`       | `String`                               | `True`   | Extra field                                                                                    | `null`        |

## Code Examples

```python
# Get hierarchical quality reasons for a specific location
location = "Site/Area/Line 1"
hierarchy = system.mes.oee.getAllQualityReasonCodesByLocationHierarchical(location)

def print_hierarchy(reasons, indent=0):
    for reason in reasons:
        print "  " * indent + reason['name']
        if reason['children']:
            print_hierarchy(reason['children'], indent + 1)

print_hierarchy(hierarchy)
```

