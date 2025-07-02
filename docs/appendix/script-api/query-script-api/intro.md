---
sidebar_position: 1
title: "Introduction to Query API"
description: "Overview of functions available in the Query API."
---

# Query API

Welcome to the Query API documentation. This API provides a comprehensive set of functions for creating and validating query and filter requests used throughout the system. Below is a list of available functions, each with a brief description and a link to its detailed documentation.

## Function List

### [`newFilterRequest`](./new-filter-request)

Generates an empty non-persisted [Filter Request](./new-filter-request) object to provide the structure required by the API
to filter query data. This method is used to create filter conditions that can be applied to `find` methods.
Returns a JSON representation of the newly created filter request object.

### [`newQueryRequest`](./new-query-request)

Generates an empty non-persisted [Query Request](./new-query-request) object to provide the structure required by the API
to define pagination, sorting, and filtering parameters when calling `find` methods.
Returns a JSON representation of the newly created query request object.

### [`validateFilterRequest`](./validate-filter-request)

Validates the specified parameters for a [Filter Request](./new-filter-request) object and returns any validation errors.
This only checks if the filter request object is valid based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.

### [`validateQueryRequest`](./validate-query-request)

Validates the specified parameters for a [Query Request](./new-query-request) object and returns any validation errors.
This only checks if the query request object is valid based on the attributes given. Returns a JSON object where keys are field names and values are lists of validation violation messages.
