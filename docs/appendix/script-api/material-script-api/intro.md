---
sidebar_position: 1
title: "Introduction to Material API"
description: "Overview of functions available in the Material API."
---

# Material API

Welcome to the Material API documentation. This API provides a comprehensive set of functions for managing and interacting with materials within the system. Below is a list of available functions, each with a brief description and a link to its detailed documentation.

## Function List

### [`newMaterialClass`](./new-material-class)

Generates an empty non-persisted [Material Classes](../../data-model/material-model/material-class) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveMaterialClass](./save-material-class) method in order to persist the record.
Returns a JSON representation of the newly created material class object.

### [`saveMaterialClass`](./save-material-class)

Creates or updates a [Material Classes](../../data-model/material-model/material-class) record in the system based on the provided parameters. Returns a JSON representation of the saved material class.

### [`createMaterialClassesForPath`](./create-material-classes-for-path)

Creates [Material Classes](../../data-model/material-model/material-class) objects for each name in the specified path if they do not already exist, setting their respective parents. No response is returned.

### [`doesMaterialClassExist`](./does-material-class-exist)

Checks if a [Material Classes](../../data-model/material-model/material-class) object with the given ID or path exists. Returns a boolean indicating whether the material class exists.

### [`findMaterialClasses`](./find-material-classes)

Retrieves [Material Classes](../../data-model/material-model/material-class) records based on the specified pagination, sort, and column constraint parameters. Returns a Query Result object.

### [`getMaterialClass`](./get-material-class)

Retrieves a [Material Classes](../../data-model/material-model/material-class) record by its ID or path. Returns a JSON representation of the material class. Returns nothing if no material class is found.

### [`getAllMaterialClasses`](./get-all-material-classes)

Retrieves a list of all [Material Classes](../../data-model/material-model/material-class) records in the system. Returns a list of JSON objects representing all material classes.

### [`getMaterialClassReferences`](./get-material-class-references)

Retrieves a list of references to a [Material Classes](../../data-model/material-model/material-class) record by its ID or path. Returns a list of JSON objects.

### [`validateMaterialClass`](./validate-material-class)

Validates the specified parameters for a [Material Classes](../../data-model/material-model/material-class) record and returns any validation errors.
This only checks if the material class object can be saved based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteMaterialClass`](./delete-material-class)

Deletes a [Material Classes](../../data-model/material-model/material-class) record by its ID or path. This cannot delete a material class with references to it. If successful, no response is returned.

### [`deleteMaterialClassWithReferences`](./delete-material-class-with-references)

Deletes a [Material Classes](../../data-model/material-model/material-class) record by its ID or path. Also deletes immediate references to this material class if possible. If successful, no response is returned.

### [`deleteMaterialClasses`](./delete-material-classes)

Deletes all [Material Classes](../../data-model/material-model/material-class) records by the given IDs or paths. This cannot delete any material classes with references to it. If successful, no response is returned.

### [`deleteMaterialClassesWithReferences`](./delete-material-classes-with-references)

Deletes all [Material Classes](../../data-model/material-model/material-class) records by the given IDs or paths. Also deletes immediate references to the material classes if possible. If successful, no response is returned.

### [`newMaterial`](./new-material)

Generates an empty non-persisted [Materials](../../data-model/material-model/material) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveMaterial](./save-material) method in order to persist the record.
Returns a JSON representation of the newly created material object.

### [`saveMaterial`](./save-material)

Creates or updates a [Materials](../../data-model/material-model/material) record in the system based on the provided parameters. Returns a JSON representation of the saved material.

### [`doesMaterialExist`](./does-material-exist)

Checks if a [Materials](../../data-model/material-model/material) object with the given ID or path exists. Returns a boolean indicating whether the material exists.

### [`findMaterials`](./find-materials)

Retrieves [Materials](../../data-model/material-model/material) records based on the specified pagination, sort, and column constraint parameters. Returns a Query Result object.

### [`getMaterial`](./get-material)

Retrieves a [Materials](../../data-model/material-model/material) record by its ID or path. Returns a JSON representation of the material. Returns nothing if no material is found.

### [`getMaterialByErpId`](./get-material-by-erp-id)

Retrieves a [Materials](../../data-model/material-model/material) record given an erp ID. Returns a JSON representation of the material. Returns nothing if no material is found.

### [`getAllMaterials`](./get-all-materials)

Retrieves a list of all [Materials](../../data-model/material-model/material) records in the system. Returns a list of JSON objects representing all materials.

### [`getMaterialReferences`](./get-material-references)

Retrieves a list of references to a [Materials](../../data-model/material-model/material) record by its ID or path. Returns a list of JSON objects.

### [`validateMaterial`](./validate-material)

Validates the specified parameters for a [Materials](../../data-model/material-model/material) record and returns any validation errors.
This only checks if the material object can be saved based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteMaterial`](./delete-material)

Deletes a [Materials](../../data-model/material-model/material) record by its ID or path. This cannot delete a material with references to it. If successful, no response is returned.

### [`deleteMaterialWithReferences`](./delete-material-with-references)

Deletes a [Materials](../../data-model/material-model/material) record by its ID or path. Also deletes immediate references to this material if possible. If successful, no response is returned.

### [`deleteMaterials`](./delete-materials)

Deletes all [Materials](../../data-model/material-model/material) records by the given IDs or paths. This cannot delete any materials with references to it. If successful, no response is returned.

### [`deleteMaterialsWithReferences`](./delete-materials-with-references)

Deletes all [Materials](../../data-model/material-model/material) records by the given IDs or paths. Also deletes immediate references to the materials if possible. If successful, no response is returned.

### [`newProperty`](./new-property)

Generates an empty non-persisted [Material Properties](../../data-model/material-model/material-property) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveProperty](./save-property) method in order to persist the record. Returns a JSON representation of the newly created material property object.

### [`saveProperty`](./save-property)

Creates or updates a [Material Properties](../../data-model/material-model/material-property) record in the system based on the provided parameters. Returns a JSON representation of the saved material property.

### [`getPropertyOrCreateNew`](./get-property-or-create-new)

Retrieves a [Material Properties](../../data-model/material-model/material-property) record if an existing material property exists with the specified ID or name.
Otherwise, creates a new [Material Properties](../../data-model/material-model/material-property) record with the specified name and attributes. Returns a JSON representation of the material property.

### [`getProperty`](./get-property)

Retrieves a [Material Properties](../../data-model/material-model/material-property) record by its specified ID. Returns a JSON representation of the material property.

### [`getPropertiesForMaterialClass`](./get-properties-for-material-class)

Retrieves all [Material Properties](../../data-model/material-model/material-property) records for a given material class. Returns a list of JSON objects representing all material properties for a given material class.

### [`getMaterialPropertyReferences`](./get-material-property-references)

Retrieves a list of references to a [Material Properties](../../data-model/material-model/material-property) by its ID. Returns a list of JSON objects.

### [`validateProperty`](./validate-property)

Validates the specified parameters for a [Material Properties](../../data-model/material-model/material-property) record and returns any validation errors.
This only checks if the material property object can be saved based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteProperty`](./delete-property)

Deletes a [Material Properties](../../data-model/material-model/material-property) record by its ID. This cannot delete a material property with references to it. If successful, no response is returned.

### [`deletePropertyWithReferences`](./delete-property-with-references)

Deletes a [Material Properties](../../data-model/material-model/material-property) record by its ID. Also deletes immediate references to this property if possible. If successful, no response is returned.

### [`newPropertyValue`](./new-property-value)

Generates an empty non-persisted [Material Property Values](../../data-model/material-model/material-property-value) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [savePropertyValue](./save-property-value) method in order to persist the record. Returns a JSON representation of the newly created material property value object.

### [`savePropertyValue`](./save-property-value)

Creates or updates a [Material Property Values](../../data-model/material-model/material-property-value) record in the system based on the provided parameters. Returns a JSON representation of the saved material property value.

### [`setPropertyValue`](./set-property-value)

Updates the value of a [Material Property Values](../../data-model/material-model/material-property-value) record given
a material ID or path and a property ID or name. Returns a JSON representation of the updated material property value.

### [`getPropertyValue`](./get-property-value)

Retrieves a [Material Property Values](../../data-model/material-model/material-property-value) record given its ID. Returns a JSON representation of the material property value. Returns nothing if no material property value is found.

### [`getPropertyValuesForMaterial`](./get-property-values-for-material)

Retrieves all [Material Property Values](../../data-model/material-model/material-property-value)
records by its material ID or path. Returns a JSON representation of the material property value. Returns nothing if no material property value is found.

### [`getValueForMaterialAndProperty`](./get-value-for-material-and-property)

Retrieves a [Material Property Values](../../data-model/material-model/material-property-value) record by its material ID or path and by its property ID or name. Returns a JSON representation of the material property value. Returns nothing if no material property value is found.

### [`getPropertiesAndValuesForMaterial`](./get-properties-and-values-for-material)

<!-- TODO -->

### [`getMaterialPropertyValueReferences`](./get-material-property-value-references)

Retrieves a list of references to a [Material Property Values](../../data-model/material-model/material-property-value) by its ID. Returns a list of JSON objects.

### [`validatePropertyValue`](./validate-property-value)

Validates the specified parameters for a [Material Property Values](../../data-model/material-model/material-property-value) record and returns any validation errors.
This only checks if the material property value object can be saved based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deletePropertyValue`](./delete-property-value)

Deletes a [Material Property Values](../../data-model/material-model/material-property-value) record by its ID. This cannot delete a material property value with references to it. If successful, no response is returned.

### [`deletePropertyValueWithReferences`](./delete-property-value-with-references)

Deletes a [Material Property Values](../../data-model/material-model/material-property-value) record by its ID. Also deletes immediate references to this material property value if possible. If successful, no response is returned.

### [`deletePropertyValueFor`](./delete-property-value-for)

Deletes a [Material Property Values](../../data-model/material-model/material-property-value) record given the material path and property name. This cannot delete a material property value with references to it. If successful, no response is returned.

### [`deletePropertyValueWithReferencesFor`](./delete-property-value-with-references-for)

Deletes a [Material Property Values](../../data-model/material-model/material-property-value) record given the material path and property name. Also deletes immediate references to this material property value if possible. If successful, no response is returned.

### [`deletePropertyValues`](./delete-property-values)

Deletes all [Material Property Values](../../data-model/material-model/material-property-value) records by the given IDs. This cannot delete any material property value with references to it. If successful, no response is returned.

### [`deletePropertyValuesWithReferences`](./delete-property-values-with-references)

Deletes all [Material Property Values](../../data-model/material-model/material-property-value) records by the given IDs. Also deletes immediate references to any material property value if possible. If successful, no response is returned.

### [`deletePropertyValuesFor`](./delete-property-values-for)

Deletes all [Material Property Values](../../data-model/material-model/material-property-value) records given the material path and property names. This cannot delete any material property value with references to it. If successful, no response is returned.

### [`deletePropertyValuesWithReferencesFor`](./delete-property-values-with-references-for)

Deletes all [Material Property Values](../../data-model/material-model/material-property-value) records given the material path and property names. Also deletes immediate references to any material property value if possible. If successful, no response is returned.

### [`newMaterialReasonCode`](./new-material-reason-code)

Generates an empty non-persisted [Material Reason Codes](../../data-model/material-model/material-reason-code) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveMaterialReasonCode](./save-material-reason-code) method in order to persist the record. Returns a JSON representation of the newly created material reason code object.

### [`saveMaterialReasonCode`](./save-material-reason-code)

Creates or updates a [Material Reason Codes](../../data-model/material-model/material-reason-code) record in the system based on the provided parameters. Returns a JSON representation of the saved material reason code.

### [`getMaterialReasonCode`](./get-material-reason-code)

Retrieves a [Material Reason Codes](../../data-model/material-model/material-reason-code) record by its ID or reason code. Returns a JSON representation of the material reason code. Returns nothing if no material reason code is found.

### [`getAllMaterialReasonCodes`](./get-all-material-reason-codes)

Retrieves a list of all [Material Reason Codes](../../data-model/material-model/material-reason-code) records in the system. Returns a list of JSON objects representing all material reason codes.

### [`validateMaterialReasonCode`](./validate-material-reason-code)

Validates the specified parameters for a [Material Reason Codes](../../data-model/material-model/material-reason-code) record and returns any validation errors.
This only checks if the material reason code object can be saved based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteMaterialReasonCode`](./delete-material-reason-code)

Deletes a [Material Reason Codes](../../data-model/material-model/material-reason-code) record by its ID. This cannot delete a material reason code with references to it. If successful, no response is returned.

---

Explore each function’s documentation for detailed usage examples and additional information.
