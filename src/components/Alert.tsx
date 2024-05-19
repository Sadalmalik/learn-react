import { ReactNode, useState } from "react";
import { CSSTransition } from "react-transition-group";

interface Props {
  children: ReactNode;
}

function Alert({ children }: Props) {
  const [visible, setVisible] = useState(true);

  const clickHandler = () => {
    setVisible(!visible);
  };

  /* {
  "alert alert-primary alert-dismissible " +
  (visible ? "my-visible" : "my-hidden")
}]
//*/

  return (
    <CSSTransition in={visible === true} timeout={2500} className="my-element">
      <div>
        {children}
        <button
          type="button"
          className="btn-sclose"
          data-dismiss="alert"
          onClick={clickHandler}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </CSSTransition>
  );
}

export default Alert;
