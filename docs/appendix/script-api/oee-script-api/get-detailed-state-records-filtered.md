---
sidebar_position: 3
title: "getDetailedStateRecordsFiltered"
description: "Retrieves state records with detailed information."
---

# system.mes.oee.getDetailedStateRecordsFiltered

## Description

Retrieves [OEE State Records](../../data-model/oee-model/oee-state-record) with detailed information including related mode records, alarm records, and other associated data. This function provides more comprehensive filtering options than `getStateRecordsFiltered`, including microstop threshold filtering and event type filtering.

## Syntax

```python
system.mes.oee.getDetailedStateRecordsFiltered(locationPath, startDate, endDate, microstopThreshold=None, microstopThresholdTimeUnits=None, eventTypes=None, modeCodes=None, downtimeReasonPath=None)
```

## Parameters

| Parameter                     | Type           | Nullable | Description                                                                                                                                  |
| ----------------------------- | -------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `locationPath`                | `String`       | False    | The location path to find state records for.                                                                                                 |
| `startDate`                   | `Date`         | False    | Start date for the search window.                                                                                                            |
| `endDate`                     | `Date`         | False    | End date for the search window.                                                                                                              |
| `microstopThreshold`          | `Integer`      | True     | Threshold value for filtering microstops. Used in conjunction with `microstopThresholdTimeUnits`.                                            |
| `microstopThresholdTimeUnits` | `String`       | True     | Time units for the microstop threshold. Valid values: `SECONDS`, `MINUTES`, `HOURS`. Defaults to `SECONDS` if not specified.                 |
| `eventTypes`                  | `List<String>` | True     | Array of event types to filter by. Valid values depend on `OeeStateCalculationType` enum (e.g., `RUNNING`, `STOPPED`, `BLOCKED`, `STARVED`). |
| `modeCodes`                   | `List<String>` | True     | Array of mode codes to filter by.                                                                                                            |
| `downtimeReasonPath`          | `String`       | True     | Filter by downtime reason path. If not specified or blank, defaults to `%` (matches all).                                                    |

## Returns

Returns a list of JSON objects representing the detailed state records with expanded information, including related entities.

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
    eventTypes=['RUNNING', 'STOPPED']
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
    eventTypes=['STOPPED'],
    microstopThreshold=600,
    microstopThresholdTimeUnits='SECONDS'
)
```
