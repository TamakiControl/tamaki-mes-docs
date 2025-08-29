---
sidebar_position: 1
title: "Introduction to Dashboard API"
description: "Overview of functions available in the Dashboard API."
---

# Dashboard API

Welcome to the Dashboard API documentation. This API provides a comprehensive set of functions for managing dashboards, reusable widgets, parameter types, and bulk import/export of widgets. Below is a list of available functions, each with a brief description and a link to its detailed documentation.

## Function List

### [`newParameterType`](./new-parameter-type)

Generates an empty non-persisted Dashboard Widget Parameter Type to provide the structure required by the API to save a new record into the database. This method must be combined with the [saveParameterType](./save-parameter-type) method in order to persist the record. Returns a JSON representation of the newly created parameter type object.

### [`getParameterType`](./get-parameter-type)

Retrieves a Dashboard Widget Parameter Type by its ID. Returns a JSON representation of the parameter type.

### [`getParameterTypeByName`](./get-parameter-type-by-name)

Retrieves a Dashboard Widget Parameter Type by its unique name. Returns a JSON representation of the parameter type.

### [`getParameterTypes`](./get-parameter-types)

Retrieves a list of all Dashboard Widget Parameter Types. Returns a list of JSON objects representing parameter types.

### [`saveParameterType`](./save-parameter-type)

Creates or updates a Dashboard Widget Parameter Type in the system based on the provided parameters. Returns a JSON representation of the saved parameter type.

### [`validateParameterType`](./validate-parameter-type)

Validates the specified parameters for a Dashboard Widget Parameter Type and returns any validation errors. This only checks if the object can be saved based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteParameterType`](./delete-parameter-type)

Deletes a Dashboard Widget Parameter Type by its ID. If successful, an ApiResponse Object is returned with the success bool set True.

### [`newWidget`](./new-widget)

Generates an empty non-persisted Dashboard Widget to provide the structure required by the API to save a new record into the database. This method must be combined with the [saveWidget](./save-widget) method in order to persist the record. Returns a JSON representation of the newly created widget object.

### [`getWidget`](./get-widget)

Retrieves a Dashboard Widget by its ID. Returns a JSON representation of the widget.

### [`getWidgetByName`](./get-widget-by-name)

Retrieves a Dashboard Widget by its unique name. Returns a JSON representation of the widget.

### [`getWidgets`](./get-widgets)

Retrieves a list of all Dashboard Widgets. Returns a list of JSON objects representing widgets.

### [`getAllWidgetNames`](./get-all-widget-names)

Retrieves the names of all registered Dashboard Widgets. Returns a list of Strings.

### [`saveWidget`](./save-widget)

Creates or updates a Dashboard Widget in the system based on the provided parameters. Returns a JSON representation of the saved widget.

### [`saveWidgetAndParameters`](./save-widget-and-parameters)

Saves a Dashboard Widget and its parameters in one call. Parameters provided are saved or updated; any existing parameters not in the list are removed. Returns a JSON representation of the saved widget.

### [`validateWidget`](./validate-widget)

Validates the specified parameters for a Dashboard Widget and returns any validation errors. This only checks if the object can be saved based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`saveWidgets`](./save-widgets)

Saves a list of Dashboard Widgets in bulk (useful for gateway startup). Returns a list of JSON objects representing the saved widgets.

### [`deleteWidget`](./delete-widget)

Deletes a Dashboard Widget by its ID. If successful, an ApiResponse Object is returned with the success bool set True.

### [`getWidgetParameters`](./get-widget-parameters)

Retrieves all parameters for a specific Dashboard Widget. Returns a list of JSON objects representing widget parameters.

### [`newWidgetParameter`](./new-widget-parameter)

Generates an empty non-persisted Dashboard Widget Parameter to provide the structure required by the API to save a new record into the database. This method must be combined with the [saveWidgetParameter](./save-widget-parameter) method in order to persist the record. Returns a JSON representation of the newly created widget parameter object.

### [`getWidgetParameter`](./get-widget-parameter)

Retrieves a Dashboard Widget Parameter by its ID. Returns a JSON representation of the widget parameter.

### [`saveWidgetParameter`](./save-widget-parameter)

Creates or updates a Dashboard Widget Parameter in the system based on the provided parameters. Returns a JSON representation of the saved widget parameter.

### [`validateWidgetParameter`](./validate-widget-parameter)

Validates the specified parameters for a Dashboard Widget Parameter and returns any validation errors. This only checks if the object can be saved based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteWidgetParameter`](./delete-widget-parameter)

Deletes a Dashboard Widget Parameter by its ID. If successful, an ApiResponse Object is returned with the success bool set True.

### [`newDashboard`](./new-dashboard)

Generates an empty non-persisted Dashboard to provide the structure required by the API to save a new record into the database. This method must be combined with the [saveDashboard](./save-dashboard) method in order to persist the record. Returns a JSON representation of the newly created dashboard object.

### [`getDashboard`](./get-dashboard)

Retrieves a Dashboard by its ID. Returns a JSON representation of the dashboard.

### [`getDashboardByUrl`](./get-dashboard-by-url)

Retrieves a Dashboard by its URL for the current authenticated user (public dashboards are also considered). Returns a JSON representation of the dashboard.

### [`getDashboardsForCurrentUser`](./get-dashboards-for-current-user)

Retrieves all dashboards owned by the current authenticated user, plus all public dashboards. Returns a list of JSON objects representing dashboards.

### [`saveDashboard`](./save-dashboard)

Creates or updates a Dashboard in the system based on the provided parameters. Returns a JSON representation of the saved dashboard.

### [`validateDashboard`](./validate-dashboard)

Validates the specified parameters for a Dashboard and returns any validation errors. This only checks if the object can be saved based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteDashboard`](./delete-dashboard)

Deletes a Dashboard by its ID. If successful, an ApiResponse Object is returned with the success bool set True.

### [`isUrlUnique`](./is-url-unique)

Checks whether a dashboard URL is unique for a given username (and not used by any public dashboard), with an optional `excludeId` for updates. Returns a boolean.

### [`exportWidgetsAsJson`](./export-widgets-as-json)

Exports Dashboard Widgets as raw bytes in JSON format (UTF-8 encoded). Use without parameters to export all widgets or pass a list of IDs or names to export only selected widgets.

### [`exportWidgetsAsCsv`](./export-widgets-as-csv)

Exports Dashboard Widgets as raw bytes in CSV format (UTF-8 encoded). Use without parameters to export all widgets or pass a list of IDs or names to export only selected widgets.

### [`importFromCsv`](./import-from-csv)

Imports Dashboard Widgets from a CSV file provided as raw bytes. Returns an ApiResponse with outcome details.

### [`importFromJson`](./import-from-json)

Imports Dashboard Widgets from a JSON file provided as raw bytes. Returns an ApiResponse with outcome details.
