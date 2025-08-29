---
sidebar_position: 1
title: "Introduction to Shift Script API"
description: "Overview of functions available in the Shift Script API."
---

# Shift Script API

Welcome to the Shift Script API documentation. This API provides functions to manage shift definitions (Shifts) and their runtime records, as well as utilities to start/stop shifts and query current status.

## Function List

### [`newShift`](./new-shift)

Creates an empty non-persisted [Shifts](../../data-model/shift-model/shift) object to provide the structure required by the API to save a new record.

### [`getShift`](./get-shift)

Retrieves a [Shifts](../../data-model/shift-model/shift) record by its ID, or by `locationIdOrPath` and `name`.

### [`getAllShifts`](./get-all-shifts)

Retrieves all [Shifts](../../data-model/shift-model/shift) records in the system.

### [`getShiftsByLocation`](./get-shifts-by-location)

Retrieves all [Shifts](../../data-model/shift-model/shift) for the specified location.

### [`getCurrentShift`](./get-current-shift)

Gets the current [Shifts](../../data-model/shift-model/shift) at a location, optionally at a specified timestamp.

### [`saveShift`](./save-shift)

Creates or updates a [Shifts](../../data-model/shift-model/shift) record in the system.

### [`validateShift`](./validate-shift)

Validates a [Shifts](../../data-model/shift-model/shift) record and returns any validation errors.

### [`deleteShift`](./delete-shift)

Deletes a [Shifts](../../data-model/shift-model/shift) record by its ID.

### [`getShiftReferences`](./get-shift-references)

Retrieves a list of references to a [Shifts](../../data-model/shift-model/shift) record by its ID.

### [`getShiftStatus`](./get-shift-status)

Retrieves the status of a [Shifts](../../data-model/shift-model/shift), based on its most recent record.

### [`startShift`](./start-shift)

Starts a shift, either by shift ID or by `locationIdOrPath` and `name`; returns the created [Shift Records](../../data-model/shift-model/shift-record) object.

### [`stopShift`](./stop-shift)

Stops a shift, either by shift ID or by `locationIdOrPath` and `name`; returns the updated [Shift Records](../../data-model/shift-model/shift-record) object.

### [`newShiftRecord`](./new-shift-record)

Creates an empty non-persisted [Shift Records](../../data-model/shift-model/shift-record) object to provide the structure required by the API to save a new record.

### [`getShiftRecord`](./get-shift-record)

Retrieves a [Shift Records](../../data-model/shift-model/shift-record) record by its ID.

### [`getCurrentShiftRecord`](./get-current-shift-record)

Gets the current [Shift Records](../../data-model/shift-model/shift-record) at a location, optionally at a specified timestamp.

### [`getShiftRecords`](./get-shift-records)

Retrieves all [Shift Records](../../data-model/shift-model/shift-record) for a location within a time range.

### [`saveShiftRecord`](./save-shift-record)

Creates or updates a [Shift Records](../../data-model/shift-model/shift-record) in the system.

### [`validateShiftRecord`](./validate-shift-record)

Validates a [Shift Records](../../data-model/shift-model/shift-record) record and returns any validation errors.

### [`deleteShiftRecord`](./delete-shift-record)

Deletes a [Shift Records](../../data-model/shift-model/shift-record) record by its ID.

### [`getShiftRecordStatus`](./get-shift-record-status)

Retrieves the status of a [Shift Records](../../data-model/shift-model/shift-record).

### [`reloadStateFromDB`](./reload-state-from-db)

Reloads the Shift state from the database (re-reads trigger expressions).
