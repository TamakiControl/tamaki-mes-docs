---
sidebar_position: 1
title: 'Introduction to OEE API'
description: 'Overview of functions available in the OEE API.'
---

# OEE API

Welcome to the OEE API documentation. This API provides a comprehensive set of functions for managing and interacting with OEE (Overall Equipment Effectiveness) within the system. Below is a list of available functions, each with a brief description and a link to its detailed documentation.

## Function List

### OEE Configuration Functions

#### [`newConfig`](./new-config)

Generates an empty non-persisted OEE Configuration object to provide the structure required by the API to save a new record into the database. This method must be combined with the [saveConfig](./save-config) method in order to persist the record. Returns a JSON representation of the newly created OEE configuration object.

#### [`getConfig`](./get-config)

Retrieves an OEE Configuration record by its ID. Returns a JSON representation of the OEE configuration.

#### [`getConfigForLocation`](./get-config-for-location)

Retrieves an OEE Configuration record by its location ID or path. Returns a JSON representation of the OEE configuration.

#### [`saveConfig`](./save-config)

Creates or updates an OEE Configuration record in the system based on the provided parameters. Returns a JSON representation of the saved OEE configuration.

#### [`validateConfig`](./validate-config)

Validates the specified parameters for an OEE Configuration record and returns any validation errors. Returns a JSON object where keys are field names and values are lists of validation violation messages.

#### [`deleteConfig`](./delete-config)

Deletes an OEE Configuration record by its ID. This cannot delete a configuration with references to it. If successful, an ApiResponse Object is returned with the success bool set True.

### OEE Mode Functions

#### [`newOeeMode`](./new-oee-mode)

Generates an empty non-persisted OEE Mode object to provide the structure required by the API to save a new record into the database. This method must be combined with the [saveMode](./save-mode) method in order to persist the record. Returns a JSON representation of the newly created OEE mode object.

#### [`getMode`](./get-mode)

Retrieves an OEE Mode record by its ID. Returns a JSON representation of the OEE mode.

#### [`getAllModesForLocation`](./get-all-modes-for-location)

Retrieves all OEE Mode records for a specific location. Returns a list of JSON objects representing all OEE modes for the given location.

#### [`saveMode`](./save-mode)

Creates or updates an OEE Mode record in the system based on the provided parameters. Returns a JSON representation of the saved OEE mode.

#### [`validateMode`](./validate-mode)

Validates the specified parameters for an OEE Mode record and returns any validation errors. Returns a JSON object where keys are field names and values are lists of validation violation messages.

#### [`deleteMode`](./delete-mode)

Deletes an OEE Mode record by its ID. This cannot delete a mode with references to it. If successful, an ApiResponse Object is returned with the success bool set True.

### OEE State Functions

#### [`newOeeState`](./new-oee-state)

Generates an empty non-persisted OEE State object to provide the structure required by the API to save a new record into the database. This method must be combined with the [saveState](./save-state) method in order to persist the record. Returns a JSON representation of the newly created OEE state object.

#### [`getState`](./get-state)

Retrieves an OEE State record by its ID. Returns a JSON representation of the OEE state.

#### [`getAllStatesForLocation`](./get-all-states-for-location)

Retrieves all OEE State records for a specific location. Returns a list of JSON objects representing all OEE states for the given location.

#### [`saveState`](./save-state)

Creates or updates an OEE State record in the system based on the provided parameters. Returns a JSON representation of the saved OEE state.

#### [`validateState`](./validate-state)

Validates the specified parameters for an OEE State record and returns any validation errors. Returns a JSON object where keys are field names and values are lists of validation violation messages.

#### [`deleteState`](./delete-state)

Deletes an OEE State record by its ID. This cannot delete a state with references to it. If successful, an ApiResponse Object is returned with the success bool set True.

### Downtime Reason Functions

#### [`newDowntimeReason`](./new-downtime-reason)

Generates an empty non-persisted Downtime Reason object to provide the structure required by the API to save a new record into the database. This method must be combined with the [saveDowntimeReason](./save-downtime-reason) method in order to persist the record. Returns a JSON representation of the newly created downtime reason object.

#### [`getDowntimeReason`](./get-downtime-reason)

Retrieves a Downtime Reason record by its ID. Returns a JSON representation of the downtime reason.

#### [`getAllDowntimeReasonCodesByLocation`](./get-all-downtime-reason-codes-by-location)

Retrieves all Downtime Reason records for a specific location. Returns a list of JSON objects representing all downtime reasons for the given location.

#### [`getAllDowntimeReasonCodesByLocationHierarchical`](./get-all-downtime-reason-codes-by-location-hierarchical)

Retrieves all Downtime Reason records for a specific location in hierarchical format. Returns a hierarchical list of JSON objects representing all downtime reasons for the given location.

#### [`getAllDowntimeReasonPathsByLocation`](./get-all-downtime-reason-paths-by-location)

Retrieves all downtime reason paths for a specific location. Returns a list of strings representing the paths.

#### [`saveDowntimeReason`](./save-downtime-reason)

Creates or updates a Downtime Reason record in the system based on the provided parameters. Returns a JSON representation of the saved downtime reason.

#### [`validateDowntimeReason`](./validate-downtime-reason)

Validates the specified parameters for a Downtime Reason record and returns any validation errors. Returns a JSON object where keys are field names and values are lists of validation violation messages.

#### [`deleteDowntimeReason`](./delete-downtime-reason)

Deletes a Downtime Reason record by its ID. This cannot delete a downtime reason with references to it. If successful, an ApiResponse Object is returned with the success bool set True.

### Record Retrieval Functions

#### [`getAllOeeRecords`](./get-all-oee-records)

Retrieves all OEE records for a specific location within a date range. Returns a list of JSON objects representing OEE records.

#### [`getAllOeeModeRecords`](./get-all-oee-mode-records)

Retrieves all OEE mode records for a specific location within a date range. Returns a list of JSON objects representing OEE mode records.

#### [`getModeRecordTimeline`](./get-mode-record-timeline)

Retrieves mode record timeline data for a specific location within a date range. Returns timeline data for mode records.

#### [`getStateRecordsFiltered`](./get-state-records-filtered)

Retrieves filtered OEE state records based on various criteria including event types and microstop thresholds. Returns a list of filtered state records.

#### [`getDowntimeRecordsFiltered`](./get-downtime-records-filtered)

Retrieves filtered downtime records based on various criteria. Returns a list of filtered downtime records.

#### [`getStateRecordTimeline`](./get-state-record-timeline)

Retrieves state record timeline data for a specific location within a date range. Returns timeline data for state records.

### Downtime Actions

#### [`setDowntimeReasonForStateRecord`](./set-downtime-reason-for-state-record)

Sets a downtime reason for a specific state record, with optional notes and acknowledgment. Returns the updated state record.

#### [`acknowledgeStateRecord`](./acknowledge-state-record)

Acknowledges a specific state record. Returns the updated state record.

#### [`splitDowntimeEvent`](./split-downtime-event)

Splits a downtime event at a specified date. No return value.

### Calculation Functions

#### [`calculateOee`](./calculate-oee)

Calculates OEE metrics for a specific location within a date range. Returns calculated OEE data.

#### [`calculateOeeByTimeInterval`](./calculate-oee-by-time-interval)

Calculates OEE metrics broken down by time intervals for a specific location. Returns time-interval-based OEE calculations.

#### [`getDowntimeStatistics`](./get-downtime-statistics)

Calculates downtime statistics for a specific location within a date range. Returns downtime statistical data.

#### [`getDowntimeByReason`](./get-downtime-by-reason)

Retrieves downtime data grouped by reason for a specific location. Returns downtime data categorized by reason.

#### [`getStateRecordsGroupedByState`](./get-state-records-grouped-by-state)

Retrieves state records grouped by state type for a specific location. Returns state records organized by state.

#### [`getTopDowntimeByDuration`](./get-top-downtime-by-duration)

Retrieves the top downtime events by duration for a specific location. Returns the longest downtime events.

#### [`getTopDowntimeByCount`](./get-top-downtime-by-count)

Retrieves the top downtime events by occurrence count for a specific location. Returns the most frequent downtime events.

#### [`getModeRecordsGroupedByMode`](./get-mode-records-grouped-by-mode)

Retrieves mode records grouped by mode type for a specific location. Returns mode records organized by mode.

#### [`getTopInterruptionLocationsByDuration`](./get-top-interruption-locations-by-duration)

Retrieves the top interruption locations by duration for a specific location.

#### [`getTopInterruptionLocationsByCount`](./get-top-interruption-locations-by-count)

Retrieves the top interruption locations by count for a specific location.

#### [`getAggregatedModeRecordsWithStatesBreakdown`](./get-aggregated-mode-records-with-states-breakdown)

Retrieves aggregated OEE mode records with states breakdown for a specific location and time range.

### Utility Functions

#### [`getOeeStateRecord`](./get-oee-state-record)

Retrieves a specific OEE state record by its ID. Returns a JSON representation of the state record.

#### [`getOeeModeRecord`](./get-oee-mode-record)

Retrieves a specific OEE mode record by its ID. Returns a JSON representation of the mode record.

#### [`findAlarmsForStateRecord`](./find-alarms-for-state-record)

Finds alarms associated with a specific state record. Returns a list of alarm records.

#### [`pruneOeeRecords`](./prune-oee-records)

Prunes OEE records for a given location that are older than the prune date.

#### [`flushOeeDataStateToDB`](./flush-oee-data-state-to-db)

Flushes the OEE data state to the database.

#### [`resetOeeDataStateFromDB`](./reset-oee-data-state-from-db)

Resets the OEE data state from the database.

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

#### Export Functions

- [`exportOeeConfigurationsToJson`](./export-oee-configurations-to-json) - Exports OEE configurations to JSON format
- [`exportOeeConfigurationsToCsv`](./export-oee-configurations-to-csv) - Exports OEE configurations to CSV format
- [`exportOeeModesToJson`](./export-oee-modes-to-json) - Exports OEE modes to JSON format
- [`exportOeeModesToCsv`](./export-oee-modes-to-csv) - Exports OEE modes to CSV format
- [`exportOeeStatesToJson`](./export-oee-states-to-json) - Exports OEE states to JSON format
- [`exportOeeStatesToCsv`](./export-oee-states-to-csv) - Exports OEE states to CSV format
- [`exportDowntimeReasonsAsJson`](./export-downtime-reasons-as-json) - Exports downtime reasons to JSON format
- [`exportDowntimeReasonsAsCsv`](./export-downtime-reasons-as-csv) - Exports downtime reasons to CSV format

### Permission Functions

#### [`getOeePermissions`](./get-oee-permissions)

Retrieves a list of all available OEE permissions in the system. Returns a list of permission strings.

---

Explore each function's documentation for detailed usage examples and additional information.
