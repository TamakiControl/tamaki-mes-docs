---
sidebar_position: 2
title: "getStateRecordsFiltered"
description: "Retrieves filtered OEE state records based on specified criteria."
---

# system.mes.oee.getStateRecordsFiltered

## Description

Retrieves filtered [OEE State Records](../../data-model/oee-model/oee-state-record) based on specified criteria including location, time range, downtime reason path, event types, mode codes, and microstop threshold filtering.

## Syntax

```python
system.mes.oee.getStateRecordsFiltered(locationPath, startDate, endDate, downtimeReasonPath=None, eventTypes=None, microstopThreshold=None, microstopThresholdTimeUnits=None, modeCodes=None)
```

## Parameters

| Parameter                     | Type           | Nullable | Description                                                                                                                                  |
| ----------------------------- | -------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `locationPath`                | `String`       | False    | The location path to find state records for.                                                                                                 |
| `startDate`                   | `Date`         | False    | Start date for the search window.                                                                                                            |
| `endDate`                     | `Date`         | False    | End date for the search window.                                                                                                              |
| `downtimeReasonPath`          | `String`       | True     | Filter by downtime reason path. If not specified or blank, defaults to `%` (matches all).                                                    |
| `eventTypes`                  | `List<String>` | True     | Array of event types to filter by. Valid values depend on `OeeStateCalculationType` enum (e.g., `RUNNING`, `STOPPED`, `BLOCKED`, `STARVED`). |
| `microstopThreshold`          | `Integer`      | True     | Threshold value for filtering microstops. Used in conjunction with `microstopThresholdTimeUnits`.                                            |
| `microstopThresholdTimeUnits` | `String`       | True     | Time units for the microstop threshold. Valid values: `SECONDS`, `MINUTES`, `HOURS`. Defaults to `SECONDS` if not specified.                 |
| `modeCodes`                   | `List<String>` | True     | Array of mode codes to filter by.                                                                                                            |

## Returns

Returns a list of JSON objects representing the filtered state records.

## Code Examples

```python
# Get all state records for a location in a time range
start_date = system.time.now()
end_date = system.time.addHours(system.time.now(), -6)

records = system.mes.oee.getStateRecordsFiltered(
    'DairyCo/Plant1/Line1',
    start_date,
    end_date
)

# Filter by downtime reason path
records = system.mes.oee.getStateRecordsFiltered(
    'DairyCo/Plant1/Line1',
    start_date,
    end_date,
    downtimeReasonPath='Maintenance'
)

# Filter by mode codes
records = system.mes.oee.getStateRecordsFiltered(
    'DairyCo/Plant1/Line1',
    start_date,
    end_date,
    modeCodes=['1', '2', '3']
)

# Filter by event types
records = system.mes.oee.getStateRecordsFiltered(
    'DairyCo/Plant1/Line1',
    start_date,
    end_date,
    eventTypes=['RUNNING', 'STOPPED']
)

# Filter microstops with threshold
records = system.mes.oee.getStateRecordsFiltered(
    'DairyCo/Plant1/Line1',
    start_date,
    end_date,
    microstopThreshold=300,
    microstopThresholdTimeUnits='SECONDS'
)

# Combine multiple filters
records = system.mes.oee.getStateRecordsFiltered(
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
