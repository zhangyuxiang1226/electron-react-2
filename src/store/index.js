import { observable, computed, action } from "mobx";

class CounterStore {
    @observable count = 0;
    @observable show = false;
    @computed get tenTimes() {
        return this.count * 10;
    }
    @action.bound
    add = () => {
        this.count += 1;
    }
    constructor(rootStore) {
        this.rootStore = rootStore;
    }
}

// decorate(CounterStore, {
//     count: observable,
//     tenTimes: computed,
// })

class RootStore {
    constructor() {
        this.counterStore = new CounterStore(this);
    }
}

export default new RootStore();