---
sidebar_position: 1
title: "Introduction to Location API"
description: "Overview of functions available in the Location API."
---

# Location API

Welcome to the Location API documentation. This API provides a comprehensive set of functions for managing and
interacting with locations within the system. Below is a list of available functions, each with a brief description and
a link to its detailed documentation.

## Function List

### [`newLocation`](./newLocation.md)

Creates a new location record in the system with attributes like name, type, and parent ID. Returns a JSON
representation of the new Location object.

### [`getLocation`](./getLocation.md)

Retrieves the location with a specified ID or path. This function returns a JSON representation of the location.

### [`getAllLocations`](./getAllLocations.md)

Retrieves a list of all locations in the system. The function returns a JSON array of location objects.

### [`getLocationTree`](./getLocationTree.md)

Retrieves all locations organized in a hierarchical tree structure, allowing for recursive access. Returns a JSON
representation of the tree.

### [`getLocationsByPartialPath`](./getLocationsByPartialPath.md)

Retrieves all locations that have paths containing a specified partial path. Returns a JSON list of matching locations.

### [`getLocationsByPropertyValue`](./getLocationsByPropertyValue.md)

Retrieves all locations that have a specific value for a given property. This function returns a JSON list of all
matching locations.

### [`saveLocation`](./saveLocation.md)

Creates or updates a location based on provided parameters. This function saves the location and returns a JSON
representation of the saved object.

### [`validateLocation`](./validateLocation.md)

Validates a location based on provided parameters. Returns a JSON dictionary where keys are field names and values are
lists of validation violations.

### [`newProperty`](./newProperty.md)

Creates a new location property. Returns a JSON representation of the newly created property.

### [`getProperty`](./getProperty.md)

Retrieves a location property with the specified ID or name. Returns a JSON representation of the property.

### [`saveProperty`](./saveProperty.md)

Creates or updates a location property based on provided parameters. If an ID is provided and corresponds to an existing
property, it updates; otherwise, it creates a new property. Returns a JSON representation of the saved property.

### [`deleteProperty`](./deleteProperty.md)

Deletes a location property by ID, with an option to force deletion if it is referenced by other objects.

### [`newPropertyValue`](./newPropertyValue.md)

Creates a new property value for a location. Returns a JSON representation of the newly created property value.

### [`getPropertyValueFor`](./getPropertyValueFor.md)

Retrieves the value of a specified property for a given location. Returns the value as a JSON object.

### [`validateProperty`](./validateProperty.md)

Validates a location property based on provided parameters. Returns a JSON dictionary with field names as keys and lists
of validation violations as values.

### [`validatePropertyValue`](./validatePropertyValue.md)

Validates a location property value based on provided parameters. Returns a JSON dictionary with field names as keys and
lists of validation violations.

### [`savePropertyValue`](./savePropertyValue.md)

Creates or updates a property value for a location based on provided parameters. If an ID is provided and matches an
existing value, it updates; otherwise, it creates a new value. Returns a JSON representation of the saved property
value.

### [`deletePropertyValue`](./deletePropertyValue.md)

Deletes a property value for a location by ID.

---

Explore each function’s documentation for detailed usage examples and additional information.
