---
sidebar_position: 1
title: "Introduction to Location API"
description: "Overview of functions available in the Location API."
---

# Location API

Welcome to the Location API documentation. This API provides a comprehensive set of functions for managing and interacting with locations within the system. Below is a list of available functions, each with a brief description and a link to its detailed documentation.

## Function List

### [`newLocation`](./new-location)

Generates an empty non-persisted [Locations](../../data-model/location-model/location) object to provide the structure required by the API to save a new record into the database. This method must be combined with the [saveLocation](./save-location) method in order to persist the record. Returns a JSON representation of the newly created location object.

### [`saveLocation`](./save-location)

Creates or updates a [Locations](../../data-model/location-model/location) record in the system based on the provided parameters. Returns a JSON representation of the saved location.

### [`findLocations`](./find-locations)

Retrieves [Locations](../../data-model/location-model/location) records based on the specified pagination, sort, and column constraint parameters. Returns a Query Result object.

### [`getLocation`](./get-location)

Retrieves a [Locations](../../data-model/location-model/location) record by its ID or path. Returns a JSON representation of the location. Returns nothing if no location is found.

### [`getLocationsByPartialPath`](./get-locations-by-partial-path)

Retrieves all [Locations](../../data-model/location-model/location) records with paths that contain the specified partial path. Returns a list of JSON objects representing all locations with paths that include the given partial path.

### [`getLocationsByPropertyValue`](./get-locations-by-property-value)

Retrieves all [Locations](../../data-model/location-model/location) records that have a property value that matches the provided value. Returns a JSON list of all locations that have the specified property value.

### [`getAllLocations`](./get-all-locations)

Retrieves a list of all [Locations](../../data-model/location-model/location) records in the system. Returns a list of JSON objects representing all locations.

### [`getLocationTree`](./get-location-tree)

**No Filter:** Retrieves all [Locations](../../data-model/location-model/location) records as a tree structure.

**With a Filter:** Retrieves all [Locations](../../data-model/location-model/location) records whose names contain a substring that matches the filter. Returns the parent locations even if they don't contain the filter.

Returns a list of JSON objects.

### [`getLocationReferences`](./get-location-references)

Retrieves a list of references to a [Locations](../../data-model/location-model/location) record by its ID or path. Returns a list of JSON objects.

### [`validateLocation`](./validate-location)

Validates the specified parameters for a [Locations](../../data-model/location-model/location) record and returns any validation errors. This only checks if the location object can be saved based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteLocation`](./delete-location)

Deletes a [Locations](../../data-model/location-model/location) record by its ID or path. This cannot delete a location with references to it. If successful, an ApiResponse Object is returned with the success bool set True. If the location that's being deleted has a reference, a JSON object is returned with details about the encountered error.

### [`getLocationGroupReferences`](./get-location-group-references)

Retrieves a list of references to a [Location Groups](../../data-model/location-model/location-group) record by its ID. Returns a list of JSON objects.

### [`deleteLocationGroup`](./delete-location-group)

Deletes a [Location Groups](../../data-model/location-model/location-group) record by its ID. This deletes any references in [Location-Location Groups](../../data-model/location-model/location-location-group). If successful, an ApiResponse Object is returned with the success bool set True.

### [`newProperty`](./new-property)

Generates an empty non-persisted [Location Properties](../../data-model/location-model/location-property) object to provide the structure required by the API to save a new record into the database. This method must be combined with the [saveProperty](./save-property) method in order to persist the record. Returns a JSON representation of the newly created location property object.

### [`saveProperty`](./save-property)

Creates or updates a [Location Properties](../../data-model/location-model/location-property) record in the system based on the provided parameters. Returns a JSON representation of the saved location property.

### [`getPropertyOrCreateNew`](./get-property-or-create-new)

Retrieves a [Location Properties](../../data-model/location-model/location-property) record if an existing location property exists with the specified ID or name. Otherwise, creates a new [Location Properties](../../data-model/location-model/location-property) record with the specified name and attributes. Returns a JSON representation of the location property.

### [`getProperty`](./get-property)

Retrieves a [Location Properties](../../data-model/location-model/location-property) record by its specified ID or name. Returns a JSON representation of the location property. Returns nothing if no location property is found.

### [`getLocationPropertyReferences`](./get-location-property-references)

Retrieves a list of references to a [Location Properties](../../data-model/location-model/location-property) by its ID or name. Returns a list of JSON objects.

### [`validateProperty`](./validate-property)

Validates the specified parameters for a [Location Properties](../../data-model/location-model/location-property) record and returns any validation errors. This only checks if the location property object can be saved based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteProperty`](./delete-property)

Deletes a [Location Properties](../../data-model/location-model/location-property) record by its ID or name. This cannot delete a location property with references to it. If successful, an ApiResponse Object is returned with the success bool set True. If the property that's being deleted has a reference, a JSON object is returned with details about the encountered error.

### [`newPropertyValue`](./new-property-value)

Generates an empty non-persisted [Location Property Values](../../data-model/location-model/location-property-value) object to provide the structure required by the API to save a new record into the database. This method must be combined with the [savePropertyValue](./save-property-value) method in order to persist the record. Returns a JSON representation of the newly created location property value object.

### [`savePropertyValue`](./save-property-value)

Creates or updates a [Location Property Values](../../data-model/location-model/location-property-value) record in the system based on the provided parameters. Returns a JSON representation of the saved location property value.

### [`setPropertyValue`](./set-property-value)

Updates the value of a [Location Property Values](../../data-model/location-model/location-property-value) record given a location ID or path and a property ID or name. Returns a JSON representation of the updated location property value.

### [`getPropertyValueFor`](./get-property-value-for)

Retrieves a [Location Property Values](../../data-model/location-model/location-property-value) record by its location ID or path and by its property ID or name. Returns a JSON representation of the location property value. Returns nothing if no location property value is found.

### [`getPropertyValue`](./get-property-value)

Retrieves a [Location Property Values](../../data-model/location-model/location-property-value) record directly by its ID. Returns a JSON representation of the location property value. Returns nothing if no location property value is found.

### [`getLocationPropertyValueReferences`](./get-location-property-value-references)

Retrieves a list of references to a [Location Property Values](../../data-model/location-model/location-property-value) by its ID. Returns a list of JSON objects.

### [`validatePropertyValue`](./validate-property-value)

Validates the specified parameters for a [Location Property Values](../../data-model/location-model/location-property-value) record and returns any validation errors. This only checks if the location property value object can be saved based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deletePropertyValue`](./delete-property-value)

Deletes a [Location Property Values](../../data-model/location-model/location-property-value) record by its ID. This cannot delete a location property value with references to it. If successful, an ApiResponse Object is returned with the success bool set True.

### [`getChildren`](./get-children)

Retrieves all direct children of a [Locations](../../data-model/location-model/location) record by its ID or path. Returns a list of JSON objects representing the direct child locations of the specified location.

### [`getAllLocationProperties`](./get-all-location-properties)

Retrieves a list of all [Location Properties](../../data-model/location-model/location-property) records in the system. Returns a list of JSON objects representing all location properties.

### [`getLocationPropertyValues`](./get-location-property-values)

Retrieves a list of all [Location Property Values](../../data-model/location-model/location-property-value) records for a given location. Returns a list of JSON objects representing all property values for the specified location.

---

Explore each function’s documentation for detailed usage examples and additional information.
