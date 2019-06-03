import { describe, it, beforeEach, afterEach } from 'mocha'
import sinon from 'sinon'
import chai, { expect } from 'chai'
import axios from 'axios'
import { main } from '../src/index'

const accounts = [
    {
      id: '001',
      activated: false
    },
    {
      id: '002',
      activated: true
    },
    {
      id: '003',
      activated: false
    }
]

describe('index.js', () => {
    let sandbox
    let axiosGetStub

    beforeEach(() => {
        sandbox = sinon.createSandbox()
        axiosGetStub = sandbox.stub()
        axios.get = axiosGetStub
    })

    afterEach(() => {
        sandbox.restore()
    })

    it('should return a valid Account', async () => {
        const expected = [
            {
                id: '002',
                activated: true
            }
        ]

        axiosGetStub.withArgs('/accounts/account_001').resolves({ data: accounts})
        const result = await main()
        expect(result).to.deep.eql(expected)
    })
})