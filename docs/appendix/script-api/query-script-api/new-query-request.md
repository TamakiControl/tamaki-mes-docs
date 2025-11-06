---
title: "newQueryRequest"
description: "Generates an empty query request object."
sidebar_position: 3
---

# system.mes.query.newQueryRequest

Generates an empty [Query Request](./new-query-request) object to provide the structure required by the API to define 
pagination, sorting, and filtering parameters when calling `find` methods.

See the [Query Request Guide](../../../user-guides/query-request-guide/query-request-guide.md) for more information on 
how to use Query Requests.

## Syntax

```python
system.mes.query.newQueryRequest()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created query request object. The following is a list of keys and default values:

| Key              | Default Value |
|------------------|---------------|
| `pageSize`       | `null`        |
| `pageIndex`      | `null`        |
| `sortFields`     | `null`        |
| `sortDirections` | `null`        |
| `filters`        | `null`        |

## Code Examples

```python
# Generate the object structure for a new query request object with no initial arguments
newQueryRequest = system.mes.query.newQueryRequest()

# Set basic attributes for the new query request
newQueryRequest["pageSize"] = 10
newQueryRequest["pageIndex"] = 0
newQueryRequest["sortFields"] = ["name"]
newQueryRequest["sortDirections"] = ["Ascending"]
# (You can continue setting other properties as needed here)

# Use the query request to find materials
result = system.mes.material.findMaterials(**newQueryRequest)

# Output the JSON representation of the result
print(result)
```
