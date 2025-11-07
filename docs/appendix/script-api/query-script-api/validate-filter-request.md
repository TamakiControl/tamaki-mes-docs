---
title: "validateFilterRequest"
description: "Validates a filter request."
sidebar_position: 4
---

# system.mes.query.validateFilterRequest

## Description

Validates the specified parameters for a [Filter Request](./new-filter-request) record and returns any validation errors.
This only checks if the filter request can be performed based on the attributes given, without actually executing the filter request. Use this function to verify your parameters before executing a filter request operation.

## Syntax

```python
system.mes.query.validateFilterRequest(**filterRequest)
```

## Parameters

| Parameter         | Type            | Nullable | Description                                                                                           |
|-------------------|-----------------|----------|-------------------------------------------------------------------------------------------------------|
| `field`           | `String`        | False    | Name of the field to filter by. This should be the name as it appears in the entity class (required). |
| `type`            | `String`        | True     | Type of the field being filtered by. If not provided, the type will be inferred from the value.       |
| `condition`       | `String`        | False    | Condition used to compare the field against the value (required).                                     |
| `stringValue`     | `String`        | True     | String value to compare the database field value against.                                             |
| `numberValue`     | `Double`        | True     | Numerical value to compare the database field value against.                                          |
| `dateValue`       | `Instant`       | True     | Date value to compare the database field value against.                                               |
| `minNumberValue`  | `Double`        | True     | Minimum numerical value for the field. Only used when the condition is BETWEEN.                       |
| `maxNumberValue`  | `Double`        | True     | Maximum numerical value for the field. Only used when the condition is BETWEEN.                       |
| `minDateValue`    | `Instant`       | True     | Minimum date value for the field. Only used when the condition is BETWEEN.                            |
| `maxDateValue`    | `Instant`       | True     | Maximum date value for the field. Only used when the condition is BETWEEN.                            |
| `stringListValue` | `List<String>`  | True     | List of String values to compare the database field value against.                                    |
| `numberListValue` | `List<Double>`  | True     | List of Numerical values to compare the database field value against.                                 |
| `dateListValue`   | `List<Instant>` | True     | List of Date values to compare the database field value against.                                      |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new filter request object
filterRequestData = system.mes.query.newFilterRequest()

# Set basic attributes for the new filter request
filterRequestData["field"] = "createdDate"     
filterRequestData["dateValue"] = "2024-01-01T00:00:00Z"
# Since the condition field is not set, this is not valid
# (You can continue setting other properties as needed here)

# Validate filter request parameters
validationErrors = system.mes.query.validateFilterRequest(**filterRequestData)

if len(validationErrors) > 0:
    print('Validation errors found:', validationErrors)
else:
    print('Filter request parameters are valid.')
```
