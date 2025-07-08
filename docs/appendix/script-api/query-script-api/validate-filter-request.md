---
title: "validateFilterRequest"
description: "Validates a filter request."
sidebar_position: 4
---

# system.mes.query.validateFilterRequest

## Description

Validates the specified parameters for a [Filter Request](./new-filter-request) record and returns any validation errors.
This only checks if the filter request object can be saved based on the attributes given.

## Syntax

```python
system.mes.query.validateFilterRequest(**filterRequest)
```

## Parameters

| Parameter         | Type            | Description                                                                                           |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------|
| `field`           | `String`        | Name of the field to filter by. This should be the name as it appears in the entity class (required). |
| `type`            | `String`        | Type of the field being filtered by. If not provided, the type will be inferred from the value.       |
| `condition`       | `String`        | Condition used to compare the field against the value (required).                                     |
| `stringValue`     | `String`        | String value to compare the database field value against.                                             |
| `numberValue`     | `Double`        | Numerical value to compare the database field value against.                                          |
| `dateValue`       | `Instant`       | Date value to compare the database field value against.                                               |
| `minNumberValue`  | `Double`        | Minimum numerical value for the field. Only used when the condition is BETWEEN.                       |
| `maxNumberValue`  | `Double`        | Maximum numerical value for the field. Only used when the condition is BETWEEN.                       |
| `minDateValue`    | `Instant`       | Minimum date value for the field. Only used when the condition is BETWEEN.                            |
| `maxDateValue`    | `Instant`       | Maximum date value for the field. Only used when the condition is BETWEEN.                            |
| `stringListValue` | `List<String>`  | List of String values to compare the database field value against.                                    |
| `numberListValue` | `List<Double>`  | List of Numerical values to compare the database field value against.                                 |
| `dateListValue`   | `List<Instant>` | List of Date values to compare the database field value against.                                      |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new filter request object
filter_request_data = system.mes.query.newFilterRequest()

# Set basic attributes for the new filter request
filter_request_data["field"] = "createdDate"     
filter_request_data["dateValue"] = "2024-01-01T00:00:00Z"
# Since the condition field is not set, this is not valid
# (You can continue setting other properties as needed here)

# Validate filter request parameters
validation_errors = system.mes.query.validateFilterRequest(**filter_request_data)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Filter request parameters are valid.')
```
