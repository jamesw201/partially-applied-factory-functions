import { describe, it, beforeEach, afterEach } from 'mocha'
import sinon from 'sinon'
import proxyquire from 'proxyquire'
import chai, { expect } from 'chai'

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

const httpGetStub = sinon.stub()

const httpStub = {
    get: httpGetStub
}

const { main } = proxyquire('../src/index.js', {
    'axios': httpStub
})

describe('index.js', () => {
    it('should return a valid Account', async () => {
        const expected = [
            {
                id: '002',
                activated: true
            }
        ]

        httpGetStub.withArgs('/accounts/account_001').resolves({ data: accounts})
        const result = await main()
        expect(result).to.deep.eql(expected)
    })
})