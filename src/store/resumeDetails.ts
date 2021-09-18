import { observable, action } from 'mobx'

type detailType = {
    name: String
    score: String
}
type searchType = {
    searchValue: string
}

class DetailStore {
    @observable resumeDetail: detailType = {
        name: '',
        score: '',
    }
    @observable searchDetail: searchType = {
        searchValue:'外包'
    }


    @action setResumeDetail = (detail: detailType) => {
        this.resumeDetail.name = detail.name
        this.resumeDetail.score =detail.score
    }
    @action setSearchDetail = (detail: searchType) => {
        this.searchDetail.searchValue = detail.searchValue
    }
}

export { DetailStore }

export default new DetailStore