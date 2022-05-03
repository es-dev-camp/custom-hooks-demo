import CategoryFrame from "../CategoryFrame";

import Memo from "./Memo";
import Reducer from "./Reducer";
import ReducerContext from "./ReducerContext";
import StateContext from "./StateContext";
import Default from "./Default";
import GetSet from "./GetSet";
import GetSetState from "./GetSetState";
import Latest from "./Latest";
import Previous from "./Previous";
import PreviousDistinct from "./PreviousDistinct";
import Observable from "./Observable";
import RafState from "./RafState";
import SetState from "./SetState";
import StateList from "./StateList";
import Toggle from "./Toggle";
import BooleanDemo from "./Boolean";
import Counter from "./Counter";
import NumberDemo from "./Number";
import ListDemo from "./List";
import MapDemo from "./Map";
import SetDemo from "./Set";
import QueueDemo from "./Queue";
import StateValidator from "./StateValidator";
import StateWithHistory from "./StateWithHistory";
import MultiStateValidator from "./MultiStateValidator";
import MediatedState from "./MediatedState";
import FirstMountState from "./FirstMountState";
import RendersCount from "./RendersCount";
import GlobalState from "./GlobalState";
import Methods from "./Methods";

const Category = (): JSX.Element => (
  <CategoryFrame
    title="State"
    contents={[
      { name: "createMemo", body: Memo },
      { name: "createReducer", body: Reducer },
      { name: "createReducerContext", body: ReducerContext },
      { name: "createStateContext", body: StateContext },
      { name: "useDefault", body: Default },
      { name: "useGetSet", body: GetSet },
      { name: "useGetSetState", body: GetSetState },
      { name: "useLatest", body: Latest },
      { name: "usePrevious", body: Previous },
      { name: "usePreviousDistinct", body: PreviousDistinct },
      { name: "useObservable", body: Observable },
      { name: "useRafState", body: RafState },
      { name: "useSetState", body: SetState },
      { name: "useStateList", body: StateList },
      { name: "useToggle", body: Toggle },
      { name: "useToggle", body: BooleanDemo },
      { name: "useCounter", body: Counter },
      { name: "useCounter", body: NumberDemo },
      { name: "useList", body: ListDemo },
      { name: "useMap", body: MapDemo },
      { name: "useSet", body: SetDemo },
      { name: "useQueue", body: QueueDemo },
      { name: "useStateValidator", body: StateValidator },
      { name: "useStateWithHistory", body: StateWithHistory },
      { name: "useMultiStateValidator", body: MultiStateValidator },
      { name: "useMediatedState", body: MediatedState },
      { name: "useFirstMountState", body: FirstMountState },
      { name: "useRendersCount", body: RendersCount },
      { name: "createGlobalState", body: GlobalState },
      { name: "useMethods", body: Methods },
    ]}
  />
);

export default Category;
