---
title: "newFilterRequest"
description: "Generates an empty filter request object."
sidebar_position: 2
---

# system.mes.query.newFilterRequest

Generates an empty [Filter Request](./new-filter-request) object to provide the structure required by the API
to filter query data. A Filter Request is used as a part of a [Query Request](./new-query-request) to filter records retrieved when calling a 
`find` method. It is analogous to the `WHERE` clause in an SQL query.

See the [Filter Request Guide](../../../user-guides/query-request-guide/filter-request-guide.md) for more information on 
how to use Filter Requests.

## Syntax

```python
system.mes.query.newFilterRequest()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created filter request object. The following is a list of keys and default values:

| Key               | Default Value |
|-------------------|---------------|
| `field`           | `null`        |
| `type`            | `null`        |
| `condition`       | `null`        |
| `stringValue`     | `null`        |
| `numberValue`     | `null`        |
| `dateValue`       | `null`        |
| `minNumberValue`  | `null`        |
| `maxNumberValue`  | `null`        |
| `minDateValue`    | `null`        |
| `maxDateValue`    | `null`        |
| `stringListValue` | `null`        |
| `numberListValue` | `null`        |
| `dateListValue`   | `null`        |

## Code Examples

```python
# Generate the object structure for a new filter request object with no initial arguments
new_filter_request = system.mes.query.newFilterRequest()

# Set basic attributes for the new filter request
new_filter_request["field"] = "createdDate"
new_filter_request["condition"] = "between"
new_filter_request["minDateValue"] = "2025-01-01T00:00:00Z"
new_filter_request["maxDateValue"] = "2026-01-01T00:00:00Z"
# (You can continue setting other properties as needed here)

# Use the filter request in a query
queryRequest = system.mes.query.newQueryRequest()
queryRequest["filters"] = [new_filter_request]
result = system.mes.material.findMaterials(**queryRequest)

# Output the JSON representation of the result
print(result)
```
