---
sidebar_position: 2
title: "newLocation"
description: "Creates a new location in the system."
---

# system.mes.location.newLocation

## Method Description

This function creates a new location record in the system with attributes like name, type, and parent ID, among others.
It returns a JSON representation of the newly created Location object.

## Returns

A JSON representation of the newly created Location object.

## Parameters

None

## Example Usage

```python
# Create a new location instance with no initial arguments
new_location = system.mes.location.newLocation()

# Set basic attributes for the new location
new_location['name'] = 'New Location'
new_location['description'] = 'A new location created via script.'
# (You can continue setting other properties as needed here)

# Save the new location to the system
saved_location = system.mes.location.saveLocation(new_location)

# Print the JSON representation of the saved location
print(saved_location)
