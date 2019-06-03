
function AccountFilter() {
    function filter(accounts) {
        return accounts.filter(account => account.activated === true)
    }

    return Object.freeze({
        filter
    })
}

export default AccountFilter
