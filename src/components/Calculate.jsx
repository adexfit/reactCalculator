import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const Calculate = () => {
  const [outPut, setOutPut] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const zero = "0";
  const one = "1";
  const two = "2";
  const three = "3";
  const four = "4";
  const five = "5";
  const six = "6";
  const seven = "7";
  const eight = "8";
  const nine = "9";

  const clearInput = () => {
    setOutPut("");
  };

  const putZero = () => {
    outPut == "" ? setOutPut(zero) : setOutPut((prev) => (prev = prev + zero));
  };

  const putOne = () => {
    outPut == "" ? setOutPut(one) : setOutPut((prev) => (prev = prev + one));
  };
  const putTwo = () => {
    outPut == "" ? setOutPut(two) : setOutPut((prev) => (prev = prev + two));
  };
  const putThree = () => {
    outPut == ""
      ? setOutPut(three)
      : setOutPut((prev) => (prev = prev + three));
  };
  const putFour = () => {
    outPut == "" ? setOutPut(four) : setOutPut((prev) => (prev = prev + four));
  };
  const putFive = () => {
    outPut == "" ? setOutPut(five) : setOutPut((prev) => (prev = prev + five));
  };
  const putSix = () => {
    outPut == "" ? setOutPut(six) : setOutPut((prev) => (prev = prev + six));
  };
  const putSeven = () => {
    outPut == ""
      ? setOutPut(seven)
      : setOutPut((prev) => (prev = prev + seven));
  };
  const putEight = () => {
    outPut == ""
      ? setOutPut(eight)
      : setOutPut((prev) => (prev = prev + eight));
  };
  const putNine = () => {
    outPut == "" ? setOutPut(nine) : setOutPut((prev) => (prev = prev + nine));
  };
  const putDot = () => {};

  const addSymb = () => {
    if (
      outPut.charAt(outPut.length - 1) == "" ||
      outPut.charAt(outPut.length - 1) == "+" ||
      outPut.charAt(outPut.length - 1) == "-" ||
      outPut.charAt(outPut.length - 1) == "*" ||
      outPut.charAt(outPut.length - 1) == "/"
    ) {
      return;
    } else {
      setNum1(outPut);
      setOutPut((prev) => (prev = prev + "+"));
    }
  };
  const multiplySymb = () => {
    if (
      outPut.charAt(outPut.length - 1) == "" ||
      outPut.charAt(outPut.length - 1) == "*" ||
      outPut.charAt(outPut.length - 1) == "-" ||
      outPut.charAt(outPut.length - 1) == "+" ||
      outPut.charAt(outPut.length - 1) == "/"
    ) {
      return;
    } else {
      setNum1(outPut);
      setOutPut((prev) => (prev = prev + "*"));
    }
  };
  const divideSymb = () => {
    if (
      outPut.charAt(outPut.length - 1) == "" ||
      outPut.charAt(outPut.length - 1) == "/" ||
      outPut.charAt(outPut.length - 1) == "-" ||
      outPut.charAt(outPut.length - 1) == "*" ||
      outPut.charAt(outPut.length - 1) == "+"
    ) {
      return;
    } else {
      setNum1(outPut);
      setOutPut((prev) => (prev = prev + "/"));
    }
  };
  const subSymb = () => {
    if (
      outPut.charAt(outPut.length - 1) == "-" ||
      outPut.charAt(outPut.length - 1) == "/" ||
      outPut.charAt(outPut.length - 1) == "*" ||
      outPut.charAt(outPut.length - 1) == "+"
    ) {
      return;
    } else {
      setNum1(outPut);
      setOutPut((prev) => (prev = prev + "-"));
    }
  };

  const deleteOne = () => {
    let unwanted = outPut.charAt(outPut.length - 1);
    console.log(unwanted);
    setOutPut((prev) => {
      return (prev = prev.split(unwanted).join(""));
    });
  };

  return (
    <div className="body_card">
      <div id="result">{outPut}</div>
      <div className="pre_result">{outPut}</div>

      <div className="num_card">
        <div id="itemAC" onClick={clearInput}>
          AC
        </div>
        <div className="block" onClick={divideSymb}>
          /
        </div>
        <div className="block" onClick={multiplySymb}>
          x
        </div>

        <div className="block" onClick={putSeven}>
          {seven}
        </div>
        <div className="block" onClick={putEight}>
          {eight}
        </div>
        <div className="block" onClick={putNine}>
          {nine}
        </div>
        <div className="block" onClick={subSymb}>
          -
        </div>

        <div className="block" onClick={putFour}>
          {four}
        </div>
        <div className="block" onClick={putFive}>
          {five}
        </div>
        <div className="block" onClick={putSix}>
          {six}
        </div>
        <div className="block" onClick={addSymb}>
          +
        </div>

        <div className="block" onClick={putOne}>
          {one}
        </div>
        <div className="block" onClick={putTwo}>
          {two}
        </div>
        <div className="block" onClick={putThree}>
          {three}
        </div>
        <div className="block">.</div>
        <div id="item0" onClick={putZero}>
          0
        </div>
        <div className="block" onClick={deleteOne}>
          <FontAwesomeIcon icon={faBackward} />
        </div>

        <div id="item_equal_sign">=</div>
      </div>
    </div>
  );
};

export default Calculate;
