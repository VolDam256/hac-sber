import {useDispatch, useSelector} from "react-redux";
import {add, minus, selectCounter} from "../../store/Counter";
import {FC} from "react";


const Test: FC = () => {
    const selectedCounter = useSelector(selectCounter)
    console.log(selectedCounter)
    const dispatch = useDispatch()

    // https://codesandbox.io/p/sandbox/dnd-kit-demo-cx5lo0?file=%2Fsrc%2Fcomponents%2FDraggable%2Fdraggable-svg.tsx%3A1%2C1-47%2C1

    return (
        <div>
            <div>{selectedCounter.count || 100}</div>
            <button onClick={() => dispatch(add())}>+</button>
            <button onClick={() => dispatch(minus())}>-</button>
        </div>
    );
}

export default Test