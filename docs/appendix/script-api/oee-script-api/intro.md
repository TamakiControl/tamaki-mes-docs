---
sidebar_position: 1
title: 'Introduction to OEE API'
description: 'Overview of functions available in the OEE API.'
---

# OEE API

Welcome to the OEE API documentation. This API provides a comprehensive set of functions for managing and interacting with OEE (Overall Equipment Effectiveness) within the system. Below is a list of available functions, each with a brief description and a link to its detailed documentation.

## Function List

### OEE Configuration Functions

### [`newConfig`](./new-config)

Generates an empty non-persisted OEE Configuration object to provide the structure required by the API to save a new record into the database. This method must be combined with the [saveConfig](./save-config) method in order to persist the record. Returns a JSON representation of the newly created OEE configuration object.

### [`getConfig`](./get-config)

Retrieves an OEE Configuration record by its ID. Returns a JSON representation of the OEE configuration.

### [`getConfigForLocation`](./get-config-for-location)

Retrieves an OEE Configuration record by its location ID or path. Returns a JSON representation of the OEE configuration.

### [`saveConfig`](./save-config)

Creates or updates an OEE Configuration record in the system based on the provided parameters. Returns a JSON representation of the saved OEE configuration.

### [`validateConfig`](./validate-config)

Validates the specified parameters for an OEE Configuration record and returns any validation errors. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteConfig`](./delete-config)

Deletes an OEE Configuration record by its ID. This cannot delete a configuration with references to it. If successful, an ApiResponse Object is returned with the success bool set True.

### OEE Mode Functions

### [`newOeeMode`](./new-oee-mode)

Generates an empty non-persisted OEE Mode object to provide the structure required by the API to save a new record into the database. This method must be combined with the [saveMode](./save-mode) method in order to persist the record. Returns a JSON representation of the newly created OEE mode object.

### [`getMode`](./get-mode)

Retrieves an OEE Mode record by its ID. Returns a JSON representation of the OEE mode.

### [`getAllModesForLocation`](./get-all-modes-for-location)

Retrieves all OEE Mode records for a specific location. Returns a list of JSON objects representing all OEE modes for the given location.

### [`saveMode`](./save-mode)

Creates or updates an OEE Mode record in the system based on the provided parameters. Returns a JSON representation of the saved OEE mode.

### [`validateMode`](./validate-mode)

Validates the specified parameters for an OEE Mode record and returns any validation errors. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteMode`](./delete-mode)

Deletes an OEE Mode record by its ID. This cannot delete a mode with references to it. If successful, an ApiResponse Object is returned with the success bool set True.

### OEE State Functions

### [`newOeeState`](./new-oee-state)

Generates an empty non-persisted OEE State object to provide the structure required by the API to save a new record into the database. This method must be combined with the [saveState](./save-state) method in order to persist the record. Returns a JSON representation of the newly created OEE state object.

### [`getState`](./get-state)

Retrieves an OEE State record by its ID. Returns a JSON representation of the OEE state.

### [`getAllStatesForLocation`](./get-all-states-for-location)

Retrieves all OEE State records for a specific location. Returns a list of JSON objects representing all OEE states for the given location.

### [`saveState`](./save-state)

Creates or updates an OEE State record in the system based on the provided parameters. Returns a JSON representation of the saved OEE state.

### [`validateState`](./validate-state)

Validates the specified parameters for an OEE State record and returns any validation errors. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteState`](./delete-state)

Deletes an OEE State record by its ID. This cannot delete a state with references to it. If successful, an ApiResponse Object is returned with the success bool set True.

### Downtime Reason Functions

### [`newDowntimeReason`](./new-downtime-reason)

Generates an empty non-persisted Downtime Reason object to provide the structure required by the API to save a new record into the database. This method must be combined with the [saveDowntimeReason](./save-downtime-reason) method in order to persist the record. Returns a JSON representation of the newly created downtime reason object.

### [`getDowntimeReason`](./get-downtime-reason)

Retrieves a Downtime Reason record by its ID. Returns a JSON representation of the downtime reason.

### [`getAllDowntimeReasonCodesByLocation`](./get-all-downtime-reason-codes-by-location)

Retrieves all Downtime Reason records for a specific location. Returns a list of JSON objects representing all downtime reasons for the given location.

### [`getAllDowntimeReasonCodesByLocationHierarchical`](./get-all-downtime-reason-codes-by-location-hierarchical)

Retrieves all Downtime Reason records for a specific location in hierarchical format. Returns a hierarchical list of JSON objects representing all downtime reasons for the given location.

### [`getAllDowntimeReasonPathsByLocation`](./get-all-downtime-reason-paths-by-location)

Retrieves all downtime reason paths for a specific location. Returns a list of strings representing the paths.

### [`saveDowntimeReason`](./save-downtime-reason)

Creates or updates a Downtime Reason record in the system based on the provided parameters. Returns a JSON representation of the saved downtime reason.

### [`validateDowntimeReason`](./validate-downtime-reason)

Validates the specified parameters for a Downtime Reason record and returns any validation errors. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteDowntimeReason`](./delete-downtime-reason)

Deletes a Downtime Reason record by its ID. This cannot delete a downtime reason with references to it. If successful, an ApiResponse Object is returned with the success bool set True.

### Oee Alarm Functions

### [`newOeeAlarm`](./new-oee-alarm)

Creates an empty non-persisted [OEE Alarm](../../data-model/oee-model/oee-alarm) object to provide the structure required by the API to save a new alarm configuration. Returns a JSON object representing the newly created OEE Alarm object.

### [`getOeeAlarm`](./get-oee-alarm)

Retrieves an [OEE Alarm](../../data-model/oee-model/oee-alarm) configuration by its ID. Returns a JSON representation of the OEE Alarm object.

### [`getAllOeeAlarmsForLocation`](./get-all-oee-alarms-for-location)

Retrieves all [OEE Alarm](../../data-model/oee-model/oee-alarm) configurations for a specific location. Returns a list of JSON objects representing all OEE Alarm objects for the location.

### [`saveOeeAlarm`](./save-oee-alarm)

Creates or updates an [OEE Alarm](../../data-model/oee-model/oee-alarm) configuration in the system. Returns a JSON representation of the saved OEE Alarm object.

### [`validateOeeAlarm`](./validate-oee-alarm)

Validates the specified parameters for an [OEE Alarm](../../data-model/oee-model/oee-alarm) configuration and returns any validation errors. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteOeeAlarm`](./validate-oee-alarm)

Deletes an [OEE Alarm](../../data-model/oee-model/oee-alarm) configuration by its ID. This cannot delete an alarm with references to it. If successful, an ApiResponse object is returned with the success bool set to True.

### Record Functions

### [`getOeeRecord`](./get-oee-record)

Retrieves a specific [OEE Record](../../data-model/oee-model/oee-record) by its ID. Returns a JSON representation of the OEE Record object.

### [`getAllOeeRecords`](./get-all-oee-records)

Retrieves all OEE records for a specific location within a date range. Returns a list of JSON objects representing OEE records.

### [`getOeeProductionRecordTimeline`](./get-oee-production-record-timeline)

Retrieves production timeline data for OEE records, providing a chronological view of production activities for a specific location within a time range. Returns a list of JSON representations of the OEE Record objects.

### [`getAllOeeModeRecords`](./get-all-oee-mode-records)

Retrieves all OEE mode records for a specific location within a date range. Returns a list of JSON objects representing OEE mode records.

### [`getModeRecordTimeline`](./get-mode-record-timeline)

Retrieves mode record timeline data for a specific location within a date range. Returns a list of JSON representations of OEE Mode Record objects

### [`getStateRecordsFiltered`](./get-state-records-filtered)

Retrieves filtered OEE state records based on various criteria including event types and micro-stop thresholds. Returns a list of JSON representations of OEE State Record objects.

### [`getOeeStateRecordDetailed`](./get-oee-state-record-detailed)

Retrieves detailed information for a specific [OEE State Record](../../data-model/oee-model/oee-state-record) by its ID, including related mode records, alarm records, and other associated data. Returns a JSON representation of an OEE State Record Detailed object.

### [`getModeRecordsFiltered`](./get-mode-records-filtered)

Retrieves all OEE Mode records that match the provided filters such as location, date range, calculation types, codes, statuses, and duration/overrun duration ranges. Returns a list of JSON representations of OEE Mode Record objects.

### [`getDetailedStateRecordsFiltered`](./get-detailed-state-records-filtered)

Retrieves [OEE State Records](../../data-model/oee-model/oee-state-record) with detailed information including related mode records, alarm records, and other associated data. Returns a list of JSON objects representations of OEE State Record Detailed objects.

### [`getDowntimeRecordsFiltered`](./get-downtime-records-filtered)

Retrieves filtered downtime records based on various criteria. Returns a list of JSON representations of OEE State Record objects.

### [`getStateRecordTimeline`](./get-state-record-timeline)

Retrieves state record timeline data for a specific location within a date range. Returns a list of JSON representations of OEE State Record objects.

### [`setDowntimeReasonForStateRecord`](./set-downtime-reason-for-state-record)

Sets a downtime reason for a specific state record, with optional notes and acknowledgment. Returns a JSON representation of the updated state record.

### [`setPrimaryAlarmRecordForStateRecord`](./set-primary-alarm-record-for-state-record)

Manually sets the primary alarm for an [OEE State Record](../../data-model/oee-model/oee-state-record). This allows overriding the automatic primary alarm selection based on the `primary_alarm_resolution_strategy` in the OEE configuration. Returns a JSON representation of the edited `State Record object.

### [`acknowledgeStateRecord`](./acknowledge-state-record)

Acknowledges a specific OEE state record, marking it as reviewed and accepted. Returns a JSON representation of the updated state record.

### [`setDowntimeReasonForStateRecord`](./set-downtime-reason-for-state-record)

Sets a downtime reason for a specific state record, with optional notes and acknowledgment. Returns the updated state record.

### [`splitDowntimeEvent`](./split-downtime-event)

Splits an existing downtime event (an OEE state record) at a specified time. This action modifies the original record, shortening its duration, and creates a new record for the remaining time. Returns a JSON representation of the new state record.

### [`splitOeeStateRecord`](./split-oee-state-record)

Splits an existing OEE state record at a specified time. This action modifies the original record, shortening its duration, and creates a new record for the remaining time. Returns a JSON representation of the new state record.

### [`splitOeeRecord`](./split-oee-record)

Splits an existing OEE record at a specified time. This action modifies the original record, shortening its duration, and creates a new record for the remaining time. Returns a JSON representation of the new record.

### [`splitOeeModeRecord`](./split-oee-mode-record)

Splits an existing OEE Mode record at a specified time. This action modifies the original record, shortening its duration, and creates a new record for the remaining time. Returns a JSON representation of the new record.

### [`updateOeeStateRecordState`](./update-oee-state-record-state)

Updates the state of an existing [OEE State Record](../../data-model/oee-model/oee-state-record.md). Copies the code, name, calculation type, color, from the OEE State to the OEE State Record. Returns a JSON representation of the updated record.

### [`updateOeeModeRecordMode`](./update-oee-mode-record-mode)

Updates the state of an existing [OEE Mode Record](../../data-model/oee-model/oee-mode-record.md). Copies the code, name, calculation type, color, from the OEE State to the OEE State Record. Returns a JSON representation of the updated record.

### [`getStateRecordsGroupedByState`](./get-state-records-grouped-by-state)

Retrieves state records grouped by state type for a specific location and time range. Returns a list of JSON representations of OEE State Records Grouped By State objects.

### [`getOeeStateRecord`](./get-oee-state-record)

Retrieves a specific OEE state record by its ID. Returns a JSON representation of the state record.

### [`getOeeModeRecord`](./get-oee-mode-record)

Retrieves a specific OEE mode record by its ID. Returns a JSON representation of the mode record.

### [`getModeRecordsGroupedByMode`](./get-mode-records-grouped-by-mode)

Retrieves mode records grouped by mode type for a specific location and time range. Returns a list of JSON representations of OEE Mode Records Grouped By Mode objects.

### [`getAggregatedModeRecordsWithStatesBreakdown`](./get-aggregated-mode-records-with-states-breakdown)

Retrieves aggregated OEE mode records with states breakdown for a specific location and time range. Returns a list of JSON representations of OEE Chart Segment objects.

### [`pruneOeeRecords`](./prune-oee-records)

Prunes OEE records for a given location that are older than the prune date.

### [`findAlarmRecordsForStateRecord`](./find-alarm-records-for-state-record)

Finds alarm records associated with a specific state record. Returns a list of JSON representations of alarm records.

### [`getOeeAlarmRecord`](./get-oee-alarm-record)

Retrieves an [OEE Alarm Record](../../data-model/oee-model/oee-alarm-record) by its ID. Returns a JSON representation of the OEE Alarm Record object.

### [`setOeeRecordNotesAndSpares`](./set-oee-record-notes-and-spares)

Sets comment fields (notes, spare1, spare2, spare3) for an [OEE Record](../../data-model/oee-model/oee-record). Returns a JSON representation of the edited OEE Record

### [`setOeeModeRecordNotesAndSpares`](./set-oee-mode-record-notes-and-spares)

Sets comment fields (notes, spare1, spare2, spare3) for an [OEE Mode Record](../../data-model/oee-model/oee-record). Returns a JSON representation of the edited OEE Mode Record

### Calculation/Utility Functions

### [`calculateOee`](./calculate-oee)

Calculates OEE metrics for a specific location within a date range. Returns a JSON object containing calculated OEE metrics.

### [`calculateOeeByTimeInterval`](./calculate-oee-by-time-interval)

Calculates OEE metrics broken down by time intervals for a specific location. Returns a list of JSON objects representing OEE results for each time interval.

### [`getDowntimeStatistics`](./get-downtime-statistics)

Calculates downtime statistics for a specific location within a date range. Returns a JSON object containing comprehensive downtime statistics.

### [`getDowntimeByReason`](./get-downtime-by-reason)

Retrieves downtime data grouped by reason for a specific location. Returns a list of JSON objects containing downtime data categorized by reason.

### [`getTopDowntimeByDuration`](./get-top-downtime-by-duration)

Retrieves the top downtime events by duration for a specific location. Returns a list of JSON objects representing downtime data, ordered by duration.

### [`getTopDowntimeByCount`](./get-top-downtime-by-count)

Retrieves the top downtime reasons ranked by the number of occurrences for a specified location and time range. Returns a list of JSON objects downtime reasons.

### [`getTopInterruptionLocationsByDuration`](./get-top-interruption-locations-by-duration)

Retrieves the top interruption locations, ranked by their total accumulated downtime duration, for a specified parent location and time range. Returns a list of JSON objects containing interruption location and other related data.

### [`getTopInterruptionLocationsByCount`](./get-top-interruption-locations-by-count)

Retrieves the top interruption locations, ranked by the number of downtime occurrences, for a specified parent location and time range. Returns a list of JSON objects containing interruption location and other related data.

### [`flushOeeDataStateToDB`](./flush-oee-data-state-to-db)

Flushes the in-memory OEE data state to the database. This is a system management function that ensures data is persisted.

### [`resetOeeDataStateFromDB`](./reset-oee-data-state-from-db)

Resets the OEE data state from the database.

### [`getOeePermissions`](./get-oee-permissions)

Retrieves a list of all available OEE permissions in the system. Returns a list of strings of permission types.

### Import/Export Functions

#### Import Functions

- [`importOeeConfigurationsFromCsv`](./import-oee-configurations-from-csv) - Imports OEE configurations from CSV format
- [`importOeeConfigurationsFromJson`](./import-oee-configurations-from-json) - Imports OEE configurations from JSON format
- [`importOeeModesFromCsv`](./import-oee-modes-from-csv) - Imports OEE modes from CSV format
- [`importOeeModesFromJson`](./import-oee-modes-from-json) - Imports OEE modes from JSON format
- [`importOeeStatesFromCsv`](./import-oee-states-from-csv) - Imports OEE states from CSV format
- [`importOeeStatesFromJson`](./import-oee-states-from-json) - Imports OEE states from JSON format
- [`importDowntimeReasonsFromCsv`](./import-downtime-reasons-from-csv) - Imports downtime reasons from CSV format
- [`importDowntimeReasonsFromJson`](./import-downtime-reasons-from-json) - Imports downtime reasons from JSON format
- [`importOeeAlarmsFromCsv`](./import-oee-alarms-from-csv) - Imports OEE alarms from CSV format
- [`importOeeAlarmsFromJson`](./import-oee-alarms-from-json) - Imports OEE alarms from JSON format

#### Export Functions

- [`exportOeeConfigurationsToJson`](./export-oee-configurations-to-json) - Exports OEE configurations to JSON format
- [`exportOeeConfigurationsToCsv`](./export-oee-configurations-to-csv) - Exports OEE configurations to CSV format
- [`exportOeeModesToJson`](./export-oee-modes-to-json) - Exports OEE modes to JSON format
- [`exportOeeModesToCsv`](./export-oee-modes-to-csv) - Exports OEE modes to CSV format
- [`exportOeeStatesToJson`](./export-oee-states-to-json) - Exports OEE states to JSON format
- [`exportOeeStatesToCsv`](./export-oee-states-to-csv) - Exports OEE states to CSV format
- [`exportDowntimeReasonsAsJson`](./export-downtime-reasons-as-json) - Exports downtime reasons to JSON format
- [`exportDowntimeReasonsAsCsv`](./export-downtime-reasons-as-csv) - Exports downtime reasons to CSV format
- [`exportOeeAlarmsToJson`](./export-oee-alarms-to-json) - Exports OEE alarms to JSON format
- [`exportOeeAlarmsToCSV`](./export-oee-alarms-to-csv) - Exports OEE alarms to CSV format

#### Queue Functions

- [`getOeeConfigurationImportQueueSize`](./get-oee-configuration-import-queue-size) - Returns the current size of the OEE configuration import queue
- [`getOeeModeImportQueueSize`](./get-oee-mode-import-queue-size) - Returns the current size of the OEE mode import queue
- [`getOeeStateImportQueueSize`](./get-oee-state-import-queue-size) - Returns the current size of the OEE state import queue
- [`getDowntimeReasonImportQueueSize`](./get-downtime-reason-import-queue-size) - Returns the current size of the downtime reason import queue
- [`getOeeAlarmImportQueueSize`](./get-oee-alarm-import-queue-size) - Returns the current size of the OEE alarm queue
- [`cancelOeeConfigurationImportQueue`](./cancel-oee-configuration-import-queue) - Cancels the current OEE configuration import queue. Returns the number of canceled items.
- [`cancelOeeModeImportQueue`](./cancel-oee-mode-import-queue) - Cancels the current OEE mode import queue. Returns the number of canceled items.
- [`cancelOeeStateImportQueue`](./cancel-oee-state-import-queue) - Cancels the current OEE state import queue. Returns the number of canceled items.
- [`cancelDowntimeReasonImportQueue`](./cancel-downtime-reason-import-queue) - Cancels the current downtime reason import queue. Returns the number of canceled items.
- [`cancelOeeAlarmImportQueue`](./cancel-oee-alarm-import-queue) - Cancels the current OEE alarm import queue. Returns the number of canceled items.

---

Explore each function's documentation for detailed usage examples and additional information.
