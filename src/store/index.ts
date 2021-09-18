import commonStore, { CommonStore } from './commonStore'
import homeStore, { HomeStore } from './homeStore'
import detailStore, { DetailStore } from './resumeDetails'


type storeTypes = {
    commonStore: CommonStore,
    homeStore: HomeStore,
    detailStore:  DetailStore
}

const stores: storeTypes = {
    commonStore,
    homeStore,
    detailStore
}

export default stores

export {
    homeStore,
    detailStore
}