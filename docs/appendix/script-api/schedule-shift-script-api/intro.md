---
sidebar_position: 1
title: "Introduction to Schedule Shift API"
description: "Overview of functions available in the Schedule Shift API."
---

# Schedule Shift API

Welcome to the Schedule Shift API documentation. This API provides functions to manage shift definitions (Schedule
Shifts) and their runtime records, as well as utilities to start/stop shifts and query current status.

## Function List

### [`newShift`](./new-shift)

Creates an empty non-persisted [Schedule Shifts](../../data-model/schedule-shift-model/schedule-shift) object to provide
the structure required by the API to save a new record.

### [`getShift`](./get-shift)

Retrieves a [Schedule Shifts](../../data-model/schedule-shift-model/schedule-shift) record by its ID, or by
`locationIdOrPath` and `name`.

### [`getAllShifts`](./get-all-shifts)

Retrieves all [Schedule Shifts](../../data-model/schedule-shift-model/schedule-shift) records in the system.

### [`getShiftsByLocation`](./get-shifts-by-location)

Retrieves all [Schedule Shifts](../../data-model/schedule-shift-model/schedule-shift) for the specified location.

### [`getCurrentShift`](./get-current-shift)

Gets the current [Schedule Shifts](../../data-model/schedule-shift-model/schedule-shift) at a location, optionally at a
specified timestamp.

### [`saveShift`](./save-shift)

Creates or updates a [Schedule Shifts](../../data-model/schedule-shift-model/schedule-shift) record in the system.

### [`validateShift`](./validate-shift)

Validates a [Schedule Shifts](../../data-model/schedule-shift-model/schedule-shift) record and returns any validation
errors.

### [`deleteShift`](./delete-shift)

Deletes a [Schedule Shifts](../../data-model/schedule-shift-model/schedule-shift) record by its ID.

### [`getShiftReferences`](./get-shift-references)

Retrieves a list of references to a [Schedule Shifts](../../data-model/schedule-shift-model/schedule-shift) record by
its ID.

### [`getShiftStatus`](./get-shift-status)

Retrieves the status of a [Schedule Shifts](../../data-model/schedule-shift-model/schedule-shift), based on its most
recent record.

### [`startShift`](./start-shift)

Starts a shift, either by schedule shift ID or by `locationIdOrPath` and `name`; returns the
created [Schedule Shift Records](../../data-model/schedule-shift-model/schedule-shift-record) object.

### [`stopShift`](./stop-shift)

Stops a shift, either by schedule shift ID or by `locationIdOrPath` and `name`; returns the
updated [Schedule Shift Records](../../data-model/schedule-shift-model/schedule-shift-record) object.

### [`newShiftRecord`](./new-shift-record)

Creates an empty non-persisted [Schedule Shift Records](../../data-model/schedule-shift-model/schedule-shift-record)
object to provide the structure required by the API to save a new record.

### [`getShiftRecord`](./get-shift-record)

Retrieves a [Schedule Shift Records](../../data-model/schedule-shift-model/schedule-shift-record) record by its ID.

### [`getCurrentShiftRecord`](./get-current-shift-record)

Gets the current [Schedule Shift Records](../../data-model/schedule-shift-model/schedule-shift-record) at a location,
optionally at a specified timestamp.

### [`getShiftRecords`](./get-shift-records)

Retrieves all [Schedule Shift Records](../../data-model/schedule-shift-model/schedule-shift-record) for a location
within a time range.

### [`saveShiftRecord`](./save-shift-record)

Creates or updates a [Schedule Shift Records](../../data-model/schedule-shift-model/schedule-shift-record) in the
system.

### [`validateShiftRecord`](./validate-shift-record)

Validates a [Schedule Shift Records](../../data-model/schedule-shift-model/schedule-shift-record) record and returns any
validation errors.

### [`deleteShiftRecord`](./delete-shift-record)

Deletes a [Schedule Shift Records](../../data-model/schedule-shift-model/schedule-shift-record) record by its ID.

### [`getShiftRecordStatus`](./get-shift-record-status)

Retrieves the status of a [Schedule Shift Records](../../data-model/schedule-shift-model/schedule-shift-record).

### [`reloadStateFromDB`](./reload-state-from-db)

Reloads the Schedule Shift state from the database (re-reads trigger expressions).
