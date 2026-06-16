import {

StyledButton

}

from "./Button.styled";

function Button({

children,

...props

}){

return(

<StyledButton

{...props}

>

{children}

</StyledButton>

)

}

export default Button;