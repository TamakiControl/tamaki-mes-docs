---
title: "validateQueryRequest"
description: "Validates a query request."
sidebar_position: 5
---

# system.mes.query.validateQueryRequest

## Description

Validates the specified parameters for a [Query Request](./new-query-request) record and returns any validation errors.
This only checks if the query request can be performed based on the attributes given, without actually executing the query request. Use this function to verify your parameters before executing a query request operation.

## Syntax

```python
system.mes.query.validateQueryRequest(**queryRequest)
```

## Parameters

| Parameter        | Type                     | Nullable | Description                                                                          |
|------------------|--------------------------|----------|--------------------------------------------------------------------------------------|
| `pageSize`       | `Integer`                | True     | Number of records to return per page. If null, pagination will not be applied.       |
| `pageIndex`      | `Integer`                | True     | Index of the page to return. If null, pagination will not be applied.                |
| `sortFields`     | `List<String>`           | True     | List of fields to sort by. These should be names as they appear in the entity class. |
| `sortDirections` | `List<String>`           | True     | Direction to sort the fields by. Default is ASC.                                     |
| `filters`        | `List<FilterRequestDTO>` | True     | List of filters to apply to the query.                                               |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new query request object
queryRequestData = system.mes.query.newQueryRequest()

filterRequest = system.mes.query.newFilterRequest()

# Set basic attributes for the new filter request
filterRequest["field"] = "createdDate"
filterRequest["condition"] = "between" # comment and uncomment this to make the validation fail.
filterRequest["minDateValue"] = "2025-01-01T00:00:00Z"
filterRequest["maxDateValue"] = "2026-01-01T00:00:00Z"

# Set basic attributes for the new query request
queryRequestData["pageSize"] = 10
queryRequestData["pageIndex"] = 0
queryRequestData["sortFields"] = ["name"]
queryRequestData["sortDirections"] = ["ASC"]
queryRequestData["filters"] = [filterRequest]

# (You can continue setting other properties as needed here)

# Validate query request parameters
validationErrors = system.mes.query.validateQueryRequest(**queryRequestData)

if len(validationErrors) > 0:
    print('Validation errors found:', validationErrors)
else:
    print('Query request parameters are valid.')
```
