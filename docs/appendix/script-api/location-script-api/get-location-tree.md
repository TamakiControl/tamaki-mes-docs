---
sidebar_position: 5
title: "getLocationTree"
description: "Retrieves all locations as a tree."
---

# system.mes.location.getLocationTree

## Method Description

Retrieves all locations organized in a hierarchical tree structure. This function returns a JSON representation of all
locations in a tree format, with each location including its parent and list of children locations, allowing for
recursive traversal.

## Parameters

| Parameter | Type | Description                               |
|-----------|------|-------------------------------------------|
| None      | -    | This method does not take any parameters. |

## Returns

A JSON representation of all locations in a hierarchical tree structure, as `LocationTreeDTO` objects. Each location
includes attributes such as `id`, `name`, `description`, `type`, and `path`, as well as recursive `parent` and
`children` relationships.

## Example Usage

```python
# Retrieve the location tree
location_tree = system.mes.location.getLocationTree()

# Recursive function to print each location and its hierarchy
def print_location_tree(location, level=0):
    indent = "  " * level
    print(f"{indent}- {location['name']} (ID: {location['id']}, Type: {location['type']})")

    # Iterate over each child and recursively print
    for child in location.get('children', []):
        print_location_tree(child, level + 1)

# Print the top-level location tree structure
print("Location Tree:")
print_location_tree(location_tree)
```
