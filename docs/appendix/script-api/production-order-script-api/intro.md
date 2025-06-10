---
sidebar_position: 1
title: "Introduction to Production Order API"
description: "Overview of functions available in the Production Order API."
---

# Production Order API

Welcome to the Production Order API documentation. This API provides a comprehensive set of functions for managing and interacting with production orders within the system. Below is a list of available functions, each with a brief description and a link to its detailed documentation.

## Function List

### [`newProductionOrder`](./new-production-order)

Generates an empty non-persisted [Production Orders](../../data-model/production-order-model/production-order) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveProductionOrder](./save-production-order) method in order to persist the record. Returns a JSON representation of the newly created production order object.

### [`saveProductionOrder`](./save-production-order)

Creates or updates a [Production Orders](../../data-model/production-order-model/production-order) record in the system based on the provided parameters. Returns a JSON representation of the saved production order.

### [`findProductionOrders`](./find-production-orders)

Retrieves [Production Orders](../../data-model/production-order-model/production-order) records based on the specified pagination, sort, and column constraint parameters. Returns a Query Result object.

### [`getProductionOrder`](./get-production-order)

Retrieves a [Production Orders](../../data-model/production-order-model/production-order) record by its ID or name. Returns a JSON representation of the production order.

### [`getProductionOrderByName`](./get-production-order-by-name)

Retrieves a [Production Orders](../../data-model/production-order-model/production-order) record by its name. Returns a JSON representation of the production order.

### [`getAllProductionOrders`](./get-all-production-orders)

Retrieves a list of all [Production Orders](../../data-model/production-order-model/production-order) records in the system. Returns a list of JSON objects representing all production orders.

### [`getProductionOrderReferences`](./get-production-order-references)

Retrieves a list of references to a [Production Orders](../../data-model/production-order-model/production-order) record by its ID. Returns a list of JSON objects.

### [`validateProductionOrder`](./validate-production-order)

Validates the specified parameters for a [Production Orders](../../data-model/production-order-model/production-order) record and returns any validation errors.
This only checks if the production order object can be saved based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteProductionOrder`](./delete-production-order)

Deletes a [Production Orders](../../data-model/production-order-model/production-order) record by its ID.
This cannot delete a production order with references to it. If successful, no response is returned.

### [`newProductionOrderProperty`](./new-production-order-property)

Generates an empty non-persisted [Production Order Properties](../../data-model/production-order-model/production-order-property) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveProductionOrderProperty](./save-production-order-property) method in order to persist the record. Returns a JSON representation of the newly created production order property object.

### [`saveProductionOrderProperty`](./save-production-order-property)

Creates or updates a [Production Order Properties](../../data-model/production-order-model/production-order-property) record in the system based on the provided parameters. Returns a JSON representation of the saved production order property.

### [`getProductionOrderPropertyOrCreateNew`](./get-production-order-property-or-create-new)

Retrieves a [Production Order Properties](../../data-model/production-order-model/production-order-property) record if an existing production order property exists with the specified ID or name.
Otherwise, creates a new [Production Order Properties](../../data-model/production-order-model/production-order-property) record with the specified name and attributes. Returns a JSON representation of the production order property.

### [`getProductionOrderProperty`](./get-production-order-property)

Retrieves a [Production Order Properties](../../data-model/production-order-model/production-order-property) record by its specified ID or name. Returns a JSON representation of the production order property.

### [`getAllProductionOrderProperties`](./get-all-production-order-properties)

Retrieves a list of all [Production Order Properties](../../data-model/production-order-model/production-order-property) records in the system. Returns a list of JSON objects representing all production order properties.

### [`getProductionOrderPropertyReferences`](./get-production-order-property-references)

Retrieves a list of references to a [Production Order Properties](../../data-model/production-order-model/production-order-property) record by its ID. Returns a list of JSON objects.

### [`validateProductionOrderProperty`](./validate-production-order-property)

Validates the specified parameters for a [Production Order Properties](../../data-model/production-order-model/production-order-property) record and returns any validation errors.
This only checks if the production order property object can be saved based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteProductionOrderProperty`](./delete-production-order-property)

Deletes a [Production Order Properties](../../data-model/production-order-model/production-order-property) record by its ID.
This cannot delete a production order property with references to it. If successful, no response is returned.

### [`newProductionOrderPropertyValue`](./new-production-order-property-value)

Generates an empty non-persisted [Production Order Property Values](../../data-model/production-order-model/production-order-property-value) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveProductionOrderPropertyValue](./save-production-order-property-value) method in order to persist the record. Returns a JSON representation of the newly created production order property value object.

### [`saveProductionOrderPropertyValue`](./save-production-order-property-value)

Creates or updates a [Production Order Property Values](../../data-model/production-order-model/production-order-property-value) record in the system based on the provided parameters. Returns a JSON representation of the saved production order property value.

### [`setPropertyValue`](./set-property-value)

Updates the value of a [Production Order Property Values](../../data-model/production-order-model/production-order-property-value) record given
a production order ID and a property ID or name. Returns a JSON representation of the updated production order property value.

### [`setPropertyValues`](./set-property-values)

<!-- TODO -->

### [`getProductionOrderPropertyValue`](./get-production-order-property-value)

Retrieves a [Production Order Property Values](../../data-model/production-order-model/production-order-property-value) record by its specified ID. Returns a JSON representation of the production order property value.

### [`getProductionOrderPropertyValuesForOrder`](./get-production-order-property-values-for-order)

Retrieves a list of [Production Order Property Values](../../data-model/production-order-model/production-order-property-value) records associated with a production order ID. Returns a list of JSON objects representing all production order property values associated with the given production order.

### [`getProductionOrderPropertyValueFor`](./get-production-order-property-value-for)

Retrieves a [Production Order Property Values](../../data-model/production-order-model/production-order-property-value) record given
a production order ID and a property ID or name. Returns a JSON representation of the production order property value.

### [`validateProductionOrderPropertyValue`](./validate-production-order-property-value)

Validates the specified parameters for a [Production Order Property Values](../../data-model/production-order-model/production-order-property-value) record and returns any validation errors.
This only checks if the production order property value object can be saved based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteProductionOrderPropertyValue`](./delete-production-order-property-value)

Deletes a [Production Order Property Values](../../data-model/production-order-model/production-order-property-value) record by its ID.
This cannot delete a production order property value with references to it. If successful, no response is returned.

### [`newBillOfMaterials`](./new-bill-of-materials)

Generates an empty non-persisted [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveBillOfMaterials](./save-bill-of-materials) method in order to persist the record. Returns a JSON representation of the newly created bill of materials object.

### [`saveBillOfMaterials`](./save-bill-of-materials)

Creates or updates a [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) record in the system based on the provided parameters. Returns a JSON representation of the saved bill of materials.

### [`getBillOfMaterials`](./get-bill-of-materials)

Retrieves a [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) record by its ID. Returns a JSON representation of the bill of materials.

### [`getBillOfMaterialsForOrder`](./get-bill-of-materials-for-order)

Retrieves the [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) record associated with a production order ID. Returns a JSON representation of the bill of materials associated with the given production order.

### [`getBillOfMaterialsFor`](./get-bill-of-materials-for)

Retrieves the [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) record associated with a production order ID and a material ID or path. Returns a JSON representation of the bill of materials associated with the given production order and material.

### [`getBillOfMaterialsReferences`](./get-bill-of-materials-references)

Retrieves a list of references to a [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) record by its ID. Returns a list of JSON objects.

### [`validateBillOfMaterials`](./validate-bill-of-materials)

Validates the specified parameters for a [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) record and returns any validation errors.
This only checks if the bill of materials object can be saved based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`deleteBillOfMaterials`](./delete-bill-of-materials)

Deletes a [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) record by its ID.
This cannot delete a bill of materials with references to it. If successful, no response is returned.

### [`deleteAllBillOfMaterialsForOrder`](./delete-all-bill-of-materials-for-order)

Deletes all [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) records associated with a production order ID.
This cannot delete any bill of materials with references to it. If successful, no response is returned.

---

Explore each function’s documentation for detailed usage examples and additional information.
