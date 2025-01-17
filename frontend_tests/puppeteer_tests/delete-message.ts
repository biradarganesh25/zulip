import type {Page} from "puppeteer";

import common from "../puppeteer_lib/common";

async function click_delete_and_return_last_msg_id(page: Page): Promise<string | undefined> {
    return await page.evaluate(() => {
        const msg = $("#zhome .message_row").last();
        msg.find(".info").trigger("click");
        $(".delete_message").trigger("click");
        return msg.attr("id");
    });
}

async function delete_message_test(page: Page): Promise<void> {
    await common.log_in(page);
    await page.click(".top_left_all_messages");
    await page.waitForSelector("#zhome .message_row", {visible: true});
    const messages_quantitiy = await page.evaluate(() => $("#zhome .message_row").length);
    const last_message_id = await click_delete_and_return_last_msg_id(page);

    await page.waitForSelector("#confirm_dialog_modal", {visible: true});
    await page.click(".confirm_dialog_yes_button");
    await page.waitForSelector("#confirm_dialog_spinner .loading_indicator_spinner", {
        visible: true,
    });
    await page.waitForSelector(".confirm_dialog_yes_button", {hidden: true});

    await page.waitForFunction(
        (expected_length: number) => $("#zhome .message_row").length === expected_length,
        {},
        messages_quantitiy - 1,
    );

    await page.waitForSelector(`#${CSS.escape(last_message_id!)}`, {hidden: true});
    await page.waitForSelector("#confirm_dialog_spinner .loading_indicator_spinner", {
        hidden: true,
    });
}

common.run_test(delete_message_test);
