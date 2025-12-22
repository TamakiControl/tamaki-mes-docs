---
sidebar_position: 1
title: "Introduction to OEE Script API"
description: "Overview of functions available in the OEE Script API."
---

# OEE Script API

Welcome to the OEE Script API documentation. This API provides functions to manage OEE configurations, states, modes, records, and alarms, as well as utilities to query OEE data and manage alarm configurations.

## Function List

### State Records

### [`getStateRecordsFiltered`](./get-state-records-filtered)

Retrieves filtered OEE state records based on specified criteria.

### [`getDetailedStateRecordsFiltered`](./get-detailed-state-records-filtered)

Retrieves state records with detailed information.

### [`getOeeStateRecordDetailed`](./get-oee-state-record-detailed)

Gets detailed state record information for a specific state record.

### [`splitOeeStateRecord`](./split-oee-state-record)

Splits a state record at a specific time.

### OEE Records

### [`getOeeRecord`](./get-oee-record)

Retrieves a specific OEE record by ID.

### [`splitOeeRecord`](./split-oee-record)

Splits an OEE record at a specific time.

### [`getOeeProductionRecordTimeline`](./get-oee-production-record-timeline)

Gets production timeline data.

### Alarm Management

### [`newOeeAlarm`](./new-oee-alarm)

Creates a new OEE alarm configuration.

### [`getOeeAlarm`](./get-oee-alarm)

Retrieves an OEE alarm configuration by ID.

### [`getAllOeeAlarmsForLocation`](./get-all-oee-alarms-for-location)

Gets all alarms configured for a location.

### [`saveOeeAlarm`](./save-oee-alarm)

Saves an OEE alarm configuration.

### [`validateOeeAlarm`](./validate-oee-alarm)

Validates an OEE alarm configuration.

### [`deleteOeeAlarm`](./delete-oee-alarm)

Deletes an OEE alarm configuration.

### [`findAlarmRecordsForStateRecord`](./find-alarm-records-for-state-record)

Finds alarm records associated with a state record.

### [`getOeeAlarmRecord`](./get-oee-alarm-record)

Retrieves a specific alarm record by ID.

### [`setPrimaryAlarmRecordForStateRecord`](./set-primary-alarm-record-for-state-record)

Manually sets the primary alarm for a state record.

### Alarm Import/Export

### [`importOeeAlarmsFromCsv`](./import-oee-alarms-from-csv)

Imports alarm configurations from CSV.

### [`importOeeAlarmsFromJson`](./import-oee-alarms-from-json)

Imports alarm configurations from JSON.

### [`exportOeeAlarmsToJson`](./export-oee-alarms-to-json)

Exports alarm configurations to JSON.

### [`exportOeeAlarmsToCsv`](./export-oee-alarms-to-csv)

Exports alarm configurations to CSV.

### [`getOeeAlarmImportQueueSize`](./get-oee-alarm-import-queue-size)

Gets the current import queue size for alarm imports.

### [`cancelOeeAlarmImportQueue`](./cancel-oee-alarm-import-queue)

Cancels pending alarm imports.

### Permissions

### [`getOeePermissions`](./get-oee-permissions)

Gets all OEE role permissions.

---

Explore each function's documentation for detailed usage examples and parameter information.

