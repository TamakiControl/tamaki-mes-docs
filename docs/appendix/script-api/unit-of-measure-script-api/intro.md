---
sidebar_position: 1
title: "Introduction to Units of Measure API"
description: "Overview of functions available in the Units of Measure API."
---

# Units of Measure API

Welcome to the Units of Measure API documentation. This API provides a set of functions for managing units of measure and conversions between them. Below is a list of available functions, each with a brief description and a link to its detailed documentation.

## Function List

### [`newUnitOfMeasure`](./new-unit-of-measure)

Generates an empty non-persisted [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveUnitOfMeasure](./save-unit-of-measure) method in order to persist the record. Returns a JSON representation of the newly created unit of measure object.

### [`saveUnitOfMeasure`](./save-unit-of-measure)

Creates or updates a [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) record in the system based on the provided parameters. Returns a JSON representation of the saved unit of measure.

### [`doesUnitOfMeasureExist`](./does-unit-of-measure-exist)

Checks if a [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) object with the given ID or name exists. Returns a boolean indicating whether the unit of measure exists.

### [`findUnitsOfMeasure`](./find-units-of-measure)

Retrieves [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) records based on the specified pagination, sort, and column constraint parameters. Returns a Query Result object.

### [`getUnitOfMeasureOrCreateNew`](./get-unit-of-measure-or-create-new)

Retrieves a [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) record if an existing unit of measure exists with the specified name and symbol.
Otherwise, creates a new [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) record with the specified name and symbol. Returns a JSON representation of the unit of measure property.

### [`getUnitOfMeasure`](./get-unit-of-measure)

Retrieves a [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) record by its ID or name. Returns a JSON representation of the unit of measure. Returns nothing if no unit of measure is found.

### [`getAllUnitsOfMeasure`](./get-all-units-of-measure)

Retrieves a list of all [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) records in the system. Returns a list of JSON objects representing all units of measure.

### [`getUnitOfMeasureReferences`](./get-unit-of-measure-references)

Retrieves a list of references to a [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) record by its ID. Returns a list of JSON objects.

### [`validateUnitOfMeasure`](./validate-unit-of-measure)

Validates the specified parameters for a [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) record and returns any validation errors.
This only checks if the unit of measure object can be saved based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteUnitOfMeasure`](./delete-unit-of-measure)

Deletes a [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) record by its ID.
This cannot delete a unit of measure with references to it. If successful, an ApiResponse Object is returned with the success bool set True.

### [`newUnitOfMeasureConversion`](./new-unit-of-measure-conversion)

Generates an empty non-persisted [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveUnitOfMeasureConversion](./save-unit-of-measure-conversion) method in order to persist the record. Returns a JSON representation of the newly created unit of measure conversion object.

### [`saveUnitOfMeasureConversion`](./save-unit-of-measure-conversion)

Creates or updates a [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) record in the system based on the provided parameters. Returns a JSON representation of the saved unit of measure conversion.

### [`doesConversionExist`](./does-conversion-exist)

Checks if a [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) object with the given parameters exists. Returns a boolean indicating whether the unit of measure conversion exists.

### [`findUnitOfMeasureConversions`](./find-unit-of-measure-conversions)

Retrieves [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) records based on the specified pagination, sort, and column constraint parameters. Returns a Query Result object.

### [`getUnitOfMeasureConversion`](./get-unit-of-measure-conversion)

Retrieves a [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) record by its ID. Returns a JSON representation of the unit of measure conversion assigned to value. Returns value is null if no unit of measure conversion is found.

### [`getAllConversions`](./get-all-conversions)

Retrieves a list of all [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) records in the system. Returns a list of JSON objects representing all unit of measure conversions.

### [`getAllConversionsForMaterial`](./get-all-conversions-for-material)

Retrieves a list of all [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) records in the system for a material. Returns a list of JSON objects representing all unit of measure conversions for a material.

### [`getUnitOfMeasureConversionReferences`](./get-unit-of-measure-conversion-references)

Retrieves a list of references to a [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) record by its ID. Returns a list of JSON objects.

### [`validateUnitOfMeasureConversion`](./validate-unit-of-measure-conversion)

Validates the specified parameters for a [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) record and returns any validation errors.
This only checks if the unit of measure conversion object can be saved based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteUnitOfMeasureConversion`](./delete-unit-of-measure-conversion)

Deletes a [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) record by its ID.
This cannot delete a unit of measure conversion with references to it. If successful, an ApiResponse Object is returned with the success bool set True.

### [`addConversion`](./add-conversion)

Adds a [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) record from one unit of measure to another for the specified material with the specified conversion factor. Returns a JSON representation of the added unit of measure conversion object.

### [`getConversionFor`](./get-conversion-for)

Retrieves a [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) record by the given to and from unit of measure and material ID. Returns a JSON representation of the unit of measure conversion. Returns nothing if no unit of measure conversion is found.

### [`getConversion`](./get-conversion)

Retrieves a [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) record by its ID. Returns a JSON representation of the unit of measure conversion. Returns nothing if no unit of measure conversion is found.

### [`convert`](./convert)

Converts the specified amount from one unit of measure to the other. Returns the amount converted.

---

Explore each function’s documentation for detailed usage examples and additional information.
