import axios from 'axios'
import sourceMapSupport from 'source-map-support'
import Account from './Account'
import AccountClient from './clients/AccountClient'
sourceMapSupport.install()

// pass in side-effect dependencies here
const accountClient = AccountClient(axios)
const account = Account(accountClient)

function main() {
    return account.getActiveAccounts()
}

export {main}