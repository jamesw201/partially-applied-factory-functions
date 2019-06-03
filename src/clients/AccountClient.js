import * as R from 'ramda'

function AccountClient(httpClient, accountId) {
    async function get() {
        const result = await httpClient.get(`/accounts/${accountId}`)
        return result.data
    }

    return Object.freeze({
        get
    })
}

export default R.curry(AccountClient)
