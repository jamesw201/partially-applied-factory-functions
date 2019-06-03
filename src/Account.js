import AccountFilter from './AccountFilter'

function Account(AccountClient) {
    const account = AccountClient('account_001')
    const accountFilter = AccountFilter()

    async function getActiveAccounts() {
        const accounts = await account.get()
        return accountFilter.filter(accounts)
    }

    return Object.freeze({
        getActiveAccounts
    })
}

export default Account
