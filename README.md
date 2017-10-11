# Acme_Explosives

Acme Explosives

## Setup

These commands are a helpful quick start. You may choose to ignore them completely and create your own directory structure. If you choose to use this recommendation, just copy the commands below and paste. It doesn't matter what directory you are currently in.

mkdir -p ~/workspace/exercises/mjd/acme-explosives && cd $_
Requirements

You are going to be creating several JSON files that will be describing all of the explosive products that you sell. You need to use Promises to handle the order of the asynchronous operations needed to load the data.

## Product Categories

Choose at least two, but as many of you like, categories for your products. Give each one an integer unique id.


## Product Types

Create a JSON file describing types for each category of your products. For each type, add a key/value pair that creates a relationship to the corresponding category. Create at least 3 types for each category.


## Product Details

Create a JSON file describing each product you offer. Add a key/value pair that creates a relationship to the appropriate product type. Add at least 3 products for each type.


## User interface

Create a simple user interface for your product catalog where a user can select a category from a dropdown. When a category is selected, you must use Promises to read, first, from the categories.json to load that array of objects, then load types.json, then products.json.

Once all data is loaded, you need to display the products in a Bootstrap grid. Each product must display the string name of its product type, and product category. Not the integer id value.