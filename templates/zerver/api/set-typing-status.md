{generate_api_title(/typing:post)}

{generate_api_description(/typing:post)}

## Usage examples

{start_tabs}
{tab|python}

{generate_code_example(python)|/typing:post|example}

{tab|js}

More examples and documentation can be found [here](https://github.com/zulip/zulip-js).

{generate_code_example(javascript)|/typing:post|example}

{tab|curl}

{generate_code_example(curl, exclude=["topic"])|/typing:post|example}

{end_tabs}

## Parameters

{generate_api_arguments_table|zulip.yaml|/typing:post}

## Response

#### Example response

{generate_code_example|/typing:post|fixture(200)}

{generate_code_example|/typing:post|fixture(400)}
