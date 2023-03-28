import Classes from './Button.module.scss';
type ButtonTypes = "primary" | "secondary" ;

interface IState {
    title: string
    onClick?: () => void
    type?: ButtonTypes
    style?: React.CSSProperties
}
function Button(prop: IState) {
    const btnType = ()=>{
        switch (prop.type){
            case 'primary' : return Classes.primary;
            case 'secondary' : return Classes.secondary;
            default : return Classes.primary
        }
    }
    return (
        <button
            className={`${btnType()} ${Classes.Button}`}
            style={prop.style}
            onClick={prop.onClick}
        >
            {prop.title}
        </button>
    )
}

export default Button