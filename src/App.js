import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [text, setText] = useState([]);
  const [text2, setText2] = useState([]);
  // const [image, setImage] = useState(["boy_01"]);
  // const [name, setName] = useState(["boy01"]);

  const [card, setCard] = useState([]);

  const onChageForm = (event) => {
    const NewText = event.target.value;
    setText(NewText);
  };

  const onChageForm2 = (event) => {
    const NewText = event.target.value;
    setText2(NewText);
  };

  const onClickButton = () => {
    const NewCardObject = { image: text2, name: text };
    const NewCard = [...card, NewCardObject];
    setCard(NewCard);

    const NewText = "";
    setText(NewText);
    setText2(NewText);
  };

  return (
    <div className="base">
      <div className="input-area">
        <input
          id="inputName"
          type="text"
          placeholder="名前"
          onChange={onChageForm}
          value={text}
        />
        <input
          id="inputImage"
          type="text"
          placeholder="画像"
          onChange={onChageForm2}
          value={text2}
        />
        <button className="output-button" onClick={() => onClickButton()}>
          生成
        </button>
      </div>

      <div className="output-area">
        {card.map((Card) => {
          return (
            <div className="person">
              <img src={`images/${Card.image}.png`} alt={Card.name} />
              <p>{Card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
