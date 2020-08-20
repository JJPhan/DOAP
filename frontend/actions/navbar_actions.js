export const IS_OPEN = "IS_OPEN";
export const IS_CLOSED = "IS_CLOSED"

export function open_sidebar_action (is_open) {
    return { type: IS_OPEN, is_open }
}

export function close_sidebar_action (is_closed) {
    return { type: IS_CLOSED, is_closed}
}

