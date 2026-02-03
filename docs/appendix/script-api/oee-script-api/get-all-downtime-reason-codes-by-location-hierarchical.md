---
sidebar_position: 34
title: 'getAllDowntimeReasonCodesByLocationHierarchical'
description: 'Retrieves all downtime reason codes for a specific location, organized as a hierarchical tree structure.'
---

# system.mes.oee.getAllDowntimeReasonCodesByLocationHierarchical

## Description

Retrieves all OEE Downtime Reasons for a specific location, organized as a hierarchical tree structure. This method returns downtime reasons with their parent-child relationships intact, allowing for easy navigation of the reason hierarchy.

## Permissions

This method requires `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getAllDowntimeReasonCodesByLocationHierarchical(locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                                 |
| ------------------ | -------- | -------- |-----------------------------------------------------------------------------|
| `locationIdOrPath` | `String` | True     | The ID or path of the location. If null, returns reasons for all locations. |

## Returns

A list of JSON objects representing root-level `OeeDowntimeReasonHierarchicalDTO` objects, each containing nested children.

| Name           | Type                                     | Nullable | Description                                                                                  | Default Value |
| -------------- | ---------------------------------------- | -------- | -------------------------------------------------------------------------------------------- | ------------- |
| `id`           | `String`                                 | `True`   | The id of the Downtime Reason                                                                | `null`        |
| `locationId`   | `String`                                 | `True`   | Identifier of the associated location (inherited from OeeDowntimeReasonDTO)                  | `null`        |
| `locationPath` | `String`                                 | `True`   | Path of the associated location (inherited from OeeDowntimeReasonDTO)                        | `null`        |
| `parentId`     | `String`                                 | `True`   | Identifier of the parent downtime reason (inherited from OeeDowntimeReasonDTO)               | `null`        |
| `code`         | `Integer`                                | `False`  | Unique fault code associated with this downtime reason (inherited from OeeDowntimeReasonDTO) | `0`           |
| `name`         | `String`                                 | `False`  | Name of the downtime reason (inherited from OeeDowntimeReasonDTO)                            | `null`        |
| `description`  | `String`                                 | `True`   | Description of the downtime reason (inherited from OeeDowntimeReasonDTO)                     | `null`        |
| `path`         | `String`                                 | `True`   | Path representation of the downtime reason (inherited from OeeDowntimeReasonDTO)             | `null`        |
| `children`     | `List<OeeDowntimeReasonHierarchicalDTO>` | `True`   | List of child downtime reasons                                                               | `null`        |
| `notes`        | `String`                                 | `True`   | Notes associated with the Downtime Reason                                                    | `null`        |
| `enabled`      | `boolean`                                | `True`   | Indicates whether the Downtime Reason is enabled                                             | `true`        |
| `spare1`       | `String`                                 | `True`   | Extra field                                                                                  | `null`        |
| `spare2`       | `String`                                 | `True`   | Extra field                                                                                  | `null`        |
| `spare3`       | `String`                                 | `True`   | Extra field                                                                                  | `null`        |

## Code Examples

```python
# Get hierarchical downtime reasons for a specific location
location = "Site/Area/Line 1"
hierarchy = system.mes.oee.getAllDowntimeReasonCodesByLocationHierarchical(location)

def print_hierarchy(reasons, indent=0):
    for reason in reasons:
        print "  " * indent + reason['name']
        if reason['children']:
            print_hierarchy(reason['children'], indent + 1)

print_hierarchy(hierarchy)
```
