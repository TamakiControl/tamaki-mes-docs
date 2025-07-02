---
title: "validateQueryRequest"
description: "Validates a query request."
sidebar_position: 5
---

# system.mes.query.validateQueryRequest

## Description

Validates the specified parameters for a [Query Request](./new-query-request) record and returns any validation errors.
This only checks if the query request object can be saved based on the attributes given.

## Syntax

```python
system.mes.query.validateQueryRequest(**queryRequest)
```

## Parameters

| Parameter        | Type                      | Description                                                                                                    |
| ---------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `pageSize`       | `Integer`                 | Number of records to return per page. If null, pagination will not be applied.                                |
| `pageIndex`      | `Integer`                 | Index of the page to return. If null, pagination will not be applied.                                         |
| `sortFields`     | `List<String>`            | List of fields to sort by. These should be names as they appear in the entity class.                          |
| `sortDirections` | `List<String>`            | Direction to sort the fields by. Default is ASC.                                                              |
| `filters`        | `List<FilterRequestDTO>`  | List of filters to apply to the query.                                                                        |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new query request object
query_request_data = system.mes.query.newQueryRequest()

filter_request = system.mes.query.newFilterRequest()

# Set basic attributes for the new filter request
filter_request["field"] = "createdDate"
filter_request["condition"] = "between" # comment and uncomment this to make the validation fail.
filter_request["minDateValue"] = "2025-01-01T00:00:00Z"
filter_request["maxDateValue"] = "2026-01-01T00:00:00Z"

# Set basic attributes for the new query request
query_request_data["pageSize"] = 10
query_request_data["pageIndex"] = 0
query_request_data["sortFields"] = ["name"]
query_request_data["sortDirections"] = ["ASC"]
query_request_data["filters"] = [filter_request]

# (You can continue setting other properties as needed here)

# Validate query request parameters
validation_errors = system.mes.query.validateQueryRequest(**query_request_data)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Query request parameters are valid.')
```
