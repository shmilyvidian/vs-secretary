
import { observable, action, computed, toJS } from 'mobx'

type UserTypes = {
    nickname: String
    sex: number | undefined
    modalIndex: number
    delNoticeFN:Function|null
    checkNoticeFN:Function|null
    closeAddContentFN:Function|null

}

class HomeStore {
    @observable userInfo: UserTypes = {
        nickname: '',
        sex: undefined,
        modalIndex: 0,
        delNoticeFN:null,
        checkNoticeFN:null,
        closeAddContentFN:null,
    }
    @observable recordData: UserTypes = {
        nickname: '',
        sex: undefined,
        modalIndex: 0,
        delNoticeFN:null,
        checkNoticeFN:null,
        closeAddContentFN:null,
    }

    @action setChoices = (index:number) => {
        this.userInfo.sex = index
    }
    @action sign(){
        console.log('sign')
    }
    @action setModalIndex = (index:number) => {
        this.userInfo.modalIndex = index
    }
    @action setDelNoticeFN = (fn:Function)=>{
        this.userInfo.delNoticeFN =fn
    }
    @action setCloseAddContentFN = (fn: Function) => {
        this.userInfo.closeAddContentFN = fn
    }
    @action setCheckNoticeFN = (fn:Function)=>{
        this.userInfo.checkNoticeFN =fn
    }


    @computed get isDoneSign () {
        return Object.values(this.userInfo).every(o=>(o || o === 0))
    }
}

export { HomeStore }

export default new HomeStore