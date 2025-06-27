---
sidebar_position: 24
title: "validateScrapAllRequest"
description: "Validates a scrap all request based on the provided parameters."
---

# system.mes.inventory.validateScrapAllRequest

Validates a scrap all request based on the provided parameters, checking if the request meets all the requirements to be executed successfully.
This only checks if the request can be performed based on the attributes given.

## Syntax

```python
system.mes.inventory.validateScrapAllRequest(**scrap_all_request)
```

## Parameters

| Parameter                 | Type            | Description                                                                                                                               |
| ------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                    | `String`        | The type of request defined by the LotRecordType Enum. It is internally set to SCRAP and must not be modified.                            |
| `sourceLocationIdOrPath`  | `String`        | The ID or path of the location from which inventory will be scrapped. Required.                                                           |
| `materialIdOrPath`        | `String`        | The ID or path of the material being scrapped. Optional - if omitted, all materials at the location will be scrapped.                     |
| `operationId`             | `String` (ULID) | The ID of the operation scrapping this inventory.                                                                                         |
| `inventoryOperationId`    | `String` (ULID) | The ID of the inventory operation related to this scrap action.                                                                           |
| `productionOrderIdOrName` | `String`        | The ID or name of the production order associated with the scrap.                                                                         |
| `materialReasonCodeId`    | `String` (ULID) | The ID of the material reason code to add additional context.                                                                             |
| `startDate`               | `Instant`       | The start date and time of the scrap. Defaults to the current time if not provided.                                                       |
| `endDate`                 | `Instant`       | The end date and time of the scrap.                                                                                                       |
| `notes`                   | `String`        | Notes related to the scrap request.                                                                                                       |
| `spare1`                  | `String`        | Additional field for user-defined context.                                                                                                |
| `spare2`                  | `String`        | Additional field for user-defined context.                                                                                                |
| `spare3`                  | `String`        | Additional field for user-defined context.                                                                                            |                 |                                                                                                                                           |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages. If the object is empty, there are no validation errors.

## Code Examples

```python
# Generate the object structure for a new scrap all request
new_request = system.mes.inventory.newScrapAllRequest()

# Set basic attributes for the new scrap all request
new_request['materialIdOrPath'] = 'Bottle/Milk'
new_request['sourceLocationIdOrPath'] = 'DairyCo'

# Validate the request before execution
validation_result = system.mes.inventory.validateScrapAllRequest(**new_request)

# Check if there are any validation errors
if len(validation_result) > 0:
    print('Validation errors found:', validation_result)
else:
    print("Request is valid, proceeding with scrap all operation")
```
