---
title: "newQueryRequest"
description: "Generates an empty non-persisted query request object."
sidebar_position: 3
---

# system.mes.query.newQueryRequest

Generates an empty non-persisted [Query Request](./new-query-request) object to provide the structure required by the API
to define pagination, sorting, and filtering parameters when calling `find` methods. This method must be combined with find methods in order to query records.

## Syntax

```python
system.mes.query.newQueryRequest()
```

## Parameters

| Parameter | Type | Description                               |
|-----------|------|-------------------------------------------|
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created query request object. The following is a list of keys and default values:

| Key             | Default Value |
|-----------------|---------------|
| `pageSize`      | `null`        |
| `pageIndex`     | `null`        |
| `sortFields`    | `null`        |
| `sortDirections` | `null`        |
| `filters`       | `null`        |

## Code Examples

```python
# Generate the object structure for a new query request object with no initial arguments
new_query_request = system.mes.query.newQueryRequest()

# Set basic attributes for the new query request
new_query_request["pageSize"] = 10
new_query_request["pageIndex"] = 0
new_query_request["sortFields"] = ["name"]
new_query_request["sortDirections"] = ["Ascending"]
# (You can continue setting other properties as needed here)

# Use the query request to find materials
result = system.mes.material.findMaterials(**new_query_request)

# Output the JSON representation of the result
print(result)
```
