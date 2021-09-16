import { observable, action } from 'mobx'

type detailType = {
    name: String
    score: String
}

class DetailStore {
    @observable resumeDetail: detailType = {
        name: '',
        score: ''
    }

    @action setResumeDetail = (detail: detailType) => {
        this.resumeDetail.name = detail.name
        this.resumeDetail.score =detail.score
    }
}

export { DetailStore }

export default new DetailStore