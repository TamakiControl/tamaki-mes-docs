et----
sidebar_position: 51
title: "findOeeStateRecords"
description: "Retrieves OEE state records based on the specified pagination, sort, and column constraint parameters."
---

# system.mes.oee.findOeeStateRecords

## Description

Retrieves [OEE State Records](../../data-model/oee-model/oee-state-record) based on the specified pagination, sort, and column constraint parameters.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.findOeeStateRecords(**queryRequest)
```

## Parameters

Using Python keyword arguments, a [Query Request](../query-script-api/new-query-request) can be passed to the `findOeeStateRecords` function
without specifying each parameter individually. Please refer to the [Query Request](../query-script-api/new-query-request) documentation for a list of parameters.

| Parameter      | Type            | Nullable | Description                                                                                                              |
|----------------|-----------------|----------|--------------------------------------------------------------------------------------------------------------------------|
| `queryRequest` | `Query Request` | False    | A [Query Request](../query-script-api/new-query-request) with the desired pagination, sorting, and filtering parameters. |

## Returns

Returns a Query Result object with the following properties:

| Name            | Type                                                                              | Description                                                                                                      |
|-----------------|-----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| `content`       | `List`&lt;[OeeStateRecord](../../data-model/oee-model/oee-state-record)&gt;       | The list of all records found that meet the specified criteria                                                   |
| `totalPages`    | `Integer`                                                                         | If pagination is used, this is the number of total pages of records in the database for the specified page size. |
| `totalElements` | `Long`                                                                            | If pagination is used, this is the number of records in the database that meet the specified criteria.           |
| `pageSize`      | `Integer`                                                                         | If pagination is used, this is the specified page size.                                                          |
| `pageIndex`     | `Integer`                                                                         | If pagination is used, this is the specified page index.                                                         |
| `hasContent`    | `Boolean`                                                                         | True if any records were found that meet the specified criteria.                                                 |
| `isFirst`       | `Boolean`                                                                         | If pagination is used, this is true if the first page was returned.                                              |
| `isLast`        | `Boolean`                                                                         | If pagination is used, this is true if the last page was returned.                                               |
| `hasNext`       | `Boolean`                                                                         | If pagination is used, this is true if there is a page of content available after this one.                      |
| `hasPrevious`   | `Boolean`                                                                         | If pagination is used, this is true if there is a page of content available before this one.                     |

Each `OeeStateRecordDTO` in `content` has the following properties:

| Name                       | Type                      | Nullable | Description                                                                | Default Value   |
|----------------------------|---------------------------|----------|----------------------------------------------------------------------------|-----------------|
| `id`                       | `String`                  | `True`   | The id of the OEE State Record                                             | `null`          |
| `code`                     | `Integer`                 | `False`  | Integer state number                                                       | `null`          |
| `locationId`               | `String`                  | `False`  | Identifier of the associated location where this state record was recorded | `null`          |
| `locationName`             | `String`                  | `True`   | Name of the associated location                                            | `null`          |
| `locationPath`             | `String`                  | `True`   | Path of the location where this state record was recorded                  | `null`          |
| `name`                     | `String`                  | `False`  | Name of the recorded state                                                 | `null`          |
| `calculationType`          | `OeeStateCalculationType` | `False`  | Specifies how this state contributes to OEE calculations                   | `DOWNTIME`      |
| `color`                    | `String`                  | `False`  | Hex color code representing the state visually                             | `"#000000"`     |
| `status`                   | `Status`                  | `False`  | Status of the OEE state record (e.g., running, faulted, canceled, complete) | `UNKNOWN`      |
| `startDate`                | `Instant`                 | `False`  | Start date and time of the state record                                    | `Instant.now()` |
| `endDate`                  | `Instant`                 | `True`   | End date and time of the state record                                      | `null`          |
| `duration`                 | `Double`                  | `False`  | Duration of the state record in seconds                                    | `0.0`           |
| `availabilityReasonId`     | `String`                  | `True`   | Identifier of the associated availability reason, if applicable            | `null`          |
| `availabilityReason`       | `String`                  | `True`   | Title of the availability reason. (Name - Code) For display purposes only  | `null`          |
| `availabilityReasonPath`   | `String`                  | `True`   | Path to the current availability reason                                    | `null`          |
| `interruptionLocationId`   | `String`                  | `True`   | Location id that caused the blocked/starved state on the machine           | `null`          |
| `interruptionLocationName` | `String`                  | `True`   | Name of the interruption location that caused the blocked/starved state    | `null`          |
| `interruptionLocationPath` | `String`                  | `True`   | Location path that caused the blocked/starved state on the machine         | `null`          |
| `acknowledged`             | `Boolean`                 | `False`  | Boolean indicating whether the state record has been acknowledged          | `false`         |
| `acknowledgedBy`           | `String`                  | `True`   | Acknowledged By. This is the user who acknowledged the state record        | `null`          |
| `acknowledgedDate`         | `Instant`                 | `True`   | Acknowledged Date. This is the date when the state record was acknowledged | `null`          |
| `modeRecordId`             | `String`                  | `True`   | Identifier of the associated mode record                                   | `null`          |
| `rootCauseStateRecordId`   | `String`                  | `True`   | Identifier of the root cause state record, if applicable                   | `null`          |
| `primaryAlarmRecordId`     | `String`                  | `True`   | Identifier of the associated OEE Alarm Record, if applicable               | `null`          |
| `primaryAlarmName`         | `String`                  | `True`   | Primary alarm name, if applicable                                          | `null`          |
| `primaryAlarmDisplayPath`  | `String`                  | `True`   | Primary alarm display path, if applicable                                  | `null`          |
| `primaryAlarmLabel`        | `String`                  | `True`   | Primary alarm display name, if applicable                                  | `null`          |
| `notes`                    | `String`                  | `True`   | Notes associated with the OEE State Record                                 | `null`          |
| `enabled`                  | `boolean`                 | `True`   | Indicates whether the OEE State Record is enabled                          | `true`          |
| `spare1`                   | `String`                  | `True`   | Extra field 1                                                              | `null`          |
| `spare2`                   | `String`                  | `True`   | Extra field 2                                                              | `null`          |
| `spare3`                   | `String`                  | `True`   | Extra field 3                                                              | `null`          |

## Code Examples

Here is an example of how to use a Query Request to retrieve the first ten OEE state records created in 2025, sorted
by start date.

```python
# Generate the object structure for a new query request
queryRequest = system.mes.query.newQueryRequest()

# Set the basic attributes of the query request
queryRequest['pageSize'] = 10
queryRequest['pageIndex'] = 0

queryRequest['sortFields'] = ['startDate']
queryRequest['sortDirections'] = ['Ascending']

# Generate the object structure for a filter for the query request
filterRequest = system.mes.query.newFilterRequest()
filterRequest['field'] = 'startDate'
filterRequest['condition'] = 'between'
filterRequest['minDateValue'] = '2025-01-01T00:00:00Z' # OR system.date.getDate(2025, 0, 1)
filterRequest['maxDateValue'] = '2026-01-01T00:00:00Z' # OR system.date.getDate(2026, 0, 1)

filters = [filterRequest]

queryRequest['filters'] = filters

# Retrieve the OEE state records that match the filter
result = system.mes.oee.findOeeStateRecords(**queryRequest)

# Output the OEE state records that match the filter
print(result)
```

