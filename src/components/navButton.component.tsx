import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { NavButtonType } from "../types";

export function NavButton(props: NavButtonType): JSX.Element {

    return <TooltipComponent content={props.title} position='BottomCenter'>
        <button onClick={props.onClick} className={styles.container} style={{ color: props.color }}>
            <span style={{ backgroundColor: props.dotColor }} className={styles.dot} />
            {props.icon}
        </button>
    </TooltipComponent>
}

const styles = {
    container: 'relative text-xl rounded-full p-3 hover:bg-light-gray',
    dot: 'absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
}