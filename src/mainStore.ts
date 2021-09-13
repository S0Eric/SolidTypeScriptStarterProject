import { createStore, Store, SetStoreFunction } from "solid-js/store";

// The type of the application state.
type MainStoreStateType = {
  count: number;
  values: number[];
}

// Class that creates application state, exposes it for reading, and provides methods for updating the state.
export class MainStore {
  state: Store<MainStoreStateType>
  private setState: SetStoreFunction<MainStoreStateType>

  constructor() {
    [this.state, this.setState] = createStore<MainStoreStateType>(this.createDefaultStore());
  }

  incrementCount() { this.setState("count", c => c + 1) }
  addToCount(v: number) { this.setState("count", v) }
  setCount(v : number) { this.setState("count", v) }
  reset() { this.setState(this.createDefaultStore()) }
  addValue(v: number) { this.setState("values", values => [...values, v]) }
  removeLastValue() { this.setState("values", values => [...values.slice(0, values.length - 1)]) }

  private createDefaultStore: () => MainStoreStateType = () => ({ count: 0, values: [] })
}
