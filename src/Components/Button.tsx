import { ReactNode } from "react";

function Button({children}: {children: ReactNode}) {
    return ( 
        <>
            <a href="mailto:esengalidanial@gmail.com" title="email">
                <button className="interactive-button">
                    {children}
                </button>
            </a>
        </>
     );
}

export default Button;