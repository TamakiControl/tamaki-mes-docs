---
sidebar_position: 14
title: "deletePropertyValue"
description: "Deletes a specified location property value."
---

# deletePropertyValue

Deletes a specified location property value by its ID.

## Method Description

This function removes a property value associated with a location based on the provided ID. It is used to delete
property values that are no longer needed or relevant.

## Parameters

| Parameter | Type   | Description                                            |
|-----------|--------|--------------------------------------------------------|
| `id`      | String | The ULID of the location property value to be deleted. |

## Example Usage

```python
def removeTemperatureValue(property_value_id):
    try:
        # Attempt to delete the specified property value
        system.mes.location.deletePropertyValue(property_value_id)
        print(f"Property value with ID '{property_value_id}' successfully deleted.")
    except Exception as e:
        print(f"Failed to delete property value with ID '{property_value_id}': {str(e)}")
```