const knex = require('../src/utils/knex')

let subject = null

describe('Connection', () => {
    describe('DB connection', () => {
        beforeEach(() => {
            subject = async () => {
                await knex.raw('select 1')
            }
        })

        afterAll(() => knex.destroy())

        it('connects successfuly', async () => {
            expect.hasAssertions()
            await expect(subject()).resolves.toEqual()
        })
    })
})
