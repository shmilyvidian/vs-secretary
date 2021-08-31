import commonStore, { CommonStore } from './commonStore'
import homeStore, { HomeStore } from './homeStore'


type storeTypes = {
    commonStore: CommonStore,
    homeStore: HomeStore,
}

const stores: storeTypes = {
    commonStore,
    homeStore,  
}

export default stores

export {
    homeStore
}