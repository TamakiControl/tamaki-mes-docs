---
sidebar_position: 3
title: "getDetailedStateRecordsFiltered"
description: "Retrieves state records with detailed information."
---

# system.mes.oee.getDetailedStateRecordsFiltered

## Description

Retrieves [OEE State Records](../../data-model/oee-model/oee-state-record) with detailed information including related mode records, alarm records, and other associated data. This function provides more comprehensive filtering options than `getStateRecordsFiltered`, including microstop threshold filtering and event type filtering.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getDetailedStateRecordsFiltered(locationPath, startDate, endDate, microstopThreshold=None, microstopThresholdTimeUnits=None, eventTypes=None, modeCodes=None, downtimeReasonPath=None)
```

## Parameters

| Parameter                     | Type       | Nullable | Description                                                                                                                                  |
| ----------------------------- |------------| -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `locationPath`                | `String`   | False    | The location path to find state records for.                                                                                                 |
| `startDate`                   | `Date`     | False    | Start date for the search window.                                                                                                            |
| `endDate`                     | `Date`     | False    | End date for the search window.                                                                                                              |
| `microstopThreshold`          | `Integer`  | True     | Threshold value for filtering microstops. Used in conjunction with `microstopThresholdTimeUnits`.                                            |
| `microstopThresholdTimeUnits` | `String`   | True     | Time units for the microstop threshold. Valid values: `SECONDS`, `MINUTES`, `HOURS`. Defaults to `SECONDS` if not specified.                 |
| `eventTypes`                  | `String[]` | True     | Array of event types to filter by. Valid values depend on `OeeStateCalculationType` enum (e.g., `RUNNING`, `STOPPED`, `BLOCKED`, `STARVED`). |
| `modeCodes`                   | `String[]` | True     | Array of mode codes to filter by.                                                                                                            |
| `downtimeReasonPath`          | `String`   | True     | Filter by downtime reason path. If not specified or blank, defaults to `%` (matches all).                                                    |

## Returns

Returns a list of JSON objects representations of `OeeStateRecordDetailedDTO` objects with expanded information, including related entities.

Each object has the following properties:

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
| `status`                   | `Status`                  | `False`  | Status of the OEE record (e.g., running, faulted, canceled, complete)      | `UNKNOWN`       |
| `startDate`                | `Instant`                 | `False`  | Start date and time of the state record                                    | `Instant.now()` |
| `endDate`                  | `Instant`                 | `True`   | End date and time of the state record                                      | `null`          |
| `duration`                 | `Double`                  | `False`  | Duration of the state record in seconds                                    | `0.0`           |
| `downtimeReasonId`         | `String`                  | `True`   | Identifier of the associated downtime reason, if applicable                | `null`          |
| `downtimeReason`           | `String`                  | `True`   | Title of the downtime reason. (Name - Code) For display purposes only      | `null`          |
| `downtimeReasonPath`       | `String`                  | `True`   | Path to the current downtime reason                                        | `null`          |
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
| `oeeRecords`               | `Set<OeeRecordDTO>`       | `True`   | List of associated OEE records that reference this state record            | `null`          |
| `oeeModeRecord`            | `OeeModeRecordDTO`        | `True`   | OEE Mode Record associated with this state record                          | `null`          |
| `rootCauseStateRecord`     | `OeeStateRecordDTO`       | `True`   | Root Cause State Record                                                    | `null`          |
| `notes`                    | `String`                  | `True`   | Notes associated with the OEE State Record                                 | `null`          |
| `enabled`                  | `boolean`                 | `True`   | Indicates whether the OEE State Record is enabled                          | `true`          |
| `spare1`                   | `String`                  | `True`   | Extra field 1                                                              | `null`          |
| `spare2`                   | `String`                  | `True`   | Extra field 2                                                              | `null`          |
| `spare3`                   | `String`                  | `True`   | Extra field 3                                                              | `null`          |

## Code Examples

```python
# Get detailed state records with basic filters
start_date = system.time.now()
end_date = system.time.addHours(system.time.now(), -6)

detailed_records = system.mes.oee.getDetailedStateRecordsFiltered(
    'DairyCo/Plant1/Line1',
    start_date,
    end_date
)

# Filter by downtime reason path
detailed_records = system.mes.oee.getDetailedStateRecordsFiltered(
    'DairyCo/Plant1/Line1',
    start_date,
    end_date,
    downtimeReasonPath='Equipment Failure'
)

# Filter by mode codes
detailed_records = system.mes.oee.getDetailedStateRecordsFiltered(
    'DairyCo/Plant1/Line1',
    start_date,
    end_date,
    modeCodes=['1', '2', '3']
)

# Filter by event types
detailed_records = system.mes.oee.getDetailedStateRecordsFiltered(
    'DairyCo/Plant1/Line1',
    start_date,
    end_date,
    eventTypes=['RUNNING', 'IDLE']
)

# Filter microstops with threshold
detailed_records = system.mes.oee.getDetailedStateRecordsFiltered(
    'DairyCo/Plant1/Line1',
    start_date,
    end_date,
    microstopThreshold=300,
    microstopThresholdTimeUnits='SECONDS'
)

# Combine multiple filters
detailed_records = system.mes.oee.getDetailedStateRecordsFiltered(
    'DairyCo/Plant1/Line1',
    start_date,
    end_date,
    downtimeReasonPath='Maintenance',
    modeCodes=['1', '2'],
    eventTypes=['IDLE'],
    microstopThreshold=600,
    microstopThresholdTimeUnits='SECONDS'
)
```
