import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import "./textbox.scss";

export const TextBox = ({ content, max, min, opened }) => {
  const [maxRows, setMaxRows] = useState(max);
  const [gradient, setGradient] = useState("");
  const [isOpened, changeOpened] = useState(opened);
  const [toggleButton, setToggleButton] = useState(false);

  const calc = (height) => {
    // calcula as linhas, se ela for maior igual a 15,
    const lineHeight = 20; // esse valor está definido também no CSS
    const numberOfLines = Math.floor(height / lineHeight);
    setGradient("gradient");
    if (numberOfLines > min) {
      // aplica o toggle na textarea
      setToggleButton(true);
      // e remove a classe que coloca o efeito gradient
      setGradient("");
    }
  };

  // quando ocorre o click, dependendo do estado do botao
  const onClick = () => {
    const numberLines = toggleButton ? min : max;
    // controla a altura da textarea, pra que ela inicie sempre fechada
    changeOpened(true);
    // é feita a troca de tamanho do maxHeight
    setMaxRows(numberLines);
    if (toggleButton) {
      // também é adicionada a classe do efeito gradient
      setGradient("gradient");
    }
    // atualiza o estado do botão
    setToggleButton(!toggleButton);
  };

  // quando clica no componente deve expandir
  const onClickOnTextArea = () => {
    return !toggleButton ? onClick() : null;
  };

  const props = {
    defaultValue: content,
    minRows: min,
    maxRows: isOpened ? maxRows : min,
    onClick: onClickOnTextArea,
    onChange: calc,
    onHeightChange: (height) => calc(height)
  };

  return (
    <div className={`container ${gradient}`}>
      <TextareaAutosize {...props} />

      <button onClick={onClick}>
        {toggleButton ? "See less" : "See more"}
      </button>
    </div>
  );
};
