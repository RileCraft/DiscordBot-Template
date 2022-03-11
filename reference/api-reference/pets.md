# Pets

## Creating a new pet

{% swagger baseUrl="https://api.myapi.com/v1" method="post" path="/pet" summary="Create pet." %}
{% swagger-description %}
Creates a new pet.
{% endswagger-description %}

{% swagger-parameter in="body" name="name" required="true" type="string" %}
The name of the pet
{% endswagger-parameter %}

{% swagger-parameter in="body" name="owner_id" required="false" type="string" %}
The 

`id`

 of the user who owns the pet
{% endswagger-parameter %}

{% swagger-parameter in="body" name="species" required="false" type="string" %}
The species of the pet
{% endswagger-parameter %}

{% swagger-parameter in="body" name="breed" required="false" type="string" %}
The breed of the pet
{% endswagger-parameter %}

{% swagger-response status="200" description="Pet successfully created" %}
```javascript
{
    "name"="Wilson",
    "owner": {
        "id": "sha7891bikojbkreuy",
        "name": "Samuel Passet",
    "species": "Dog",}
    "breed": "Golden Retriever",
}
```
{% endswagger-response %}

{% swagger-response status="401" description="Permission denied" %}

{% endswagger-response %}
{% endswagger %}

{% hint style="info" %}
**Good to know:** This API method was created using the API Method block, it's how you can build out an API method documentation from scratch. Have a play with the block and you'll see you can do some nifty things like add and reorder parameters, document responses, and give your methods detailed descriptions.
{% endhint %}

## Updating a pet

{% swagger src="https://petstore.swagger.io/v2/swagger.json" path="/pet" method="put" %}
[https://petstore.swagger.io/v2/swagger.json](https://petstore.swagger.io/v2/swagger.json)
{% endswagger %}

{% hint style="info" %}
**Good to know:** This API method was auto-generated from an example Swagger file. You'll see that it's not editable – that's because the contents are synced to an URL! Any time the linked file changes, the documentation will change too.
{% endhint %}
