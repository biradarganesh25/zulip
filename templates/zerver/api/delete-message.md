{generate_api_title(/messages/{message_id}:delete)}

{generate_api_description(/messages/{message_id}:delete)}

[delete-completely]: /help/edit-or-delete-a-message#delete-a-message-completely

## Usage examples

{start_tabs}
{tab|python}

{generate_code_example(python)|/messages/{message_id}:delete|example(admin_config=True)}

{tab|curl}

{generate_code_example(curl)|/messages/{message_id}:delete|example}

{end_tabs}

## Parameters

{generate_api_arguments_table|zulip.yaml|/messages/{message_id}:delete}

## Response

#### Example response

{generate_code_example|/messages/{message_id}:delete|fixture(200)}

{generate_code_example|/messages/{message_id}:delete|fixture(400)}
