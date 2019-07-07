import startFetchingAction from './startFetchingAction';
const mockedStore = {
    isFetching: false
}
describe('startFetchingAction', () => {
    it('set isFetching as true', () => {
        const result = startFetchingAction.reducer(mockedStore)
        expect(result.isFetching).toBe(true)
    })
    it('the type is "START_FETCHING"', () => {
        expect(startFetchingAction.type).toEqual("START_FETCHING")
    })
})

