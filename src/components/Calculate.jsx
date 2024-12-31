import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const Calculate = () => {
  const [outPut, setOutPut] = useState("");
  // const [num1, setNum1] = useState("");
  // const [num2, setNum2] = useState("");
  const [resultIni, setResultIni] = useState("");

  useEffect(() => {
    checkInput();
  }, [outPut]);

  const zero = "0";
  const one = "1";
  const two = "2";
  const three = "3";
  const four = "4";
  const five = "5";
  const six = "6";
  const seven = "7";
  const eight = "8";
  const dot = ".";
  const nine = "9";

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
  const putDot = () => {
    let lastLetter = outPut.charAt(outPut.length - 1);
    if (lastLetter == "" || lastLetter == ".") {
      return;
    } else {
      setOutPut((prev) => (prev = prev + dot));
    }
  };

  const clearInput = () => {
    setOutPut("");
    setResultIni("");
  };

  //x.replace(/(?<=^|[^0-9])0+/g,"");
  const putZero = () => {
    let lastLetter = outPut.charAt(outPut.length - 1);
    let secondlastLetter = outPut.charAt(outPut.length - 1);
    if (outPut.length == 1 && lastLetter == "0") {
      return;
    } else {
      return setOutPut((prev) => (prev = prev + zero));
    }
  };
  const addSymb = () => {
    let lastLetter = outPut.charAt(outPut.length - 1);
    if (
      lastLetter == "" ||
      lastLetter == "+" ||
      lastLetter == "-" ||
      lastLetter == "*" ||
      lastLetter == "/"
    ) {
      return;
    } else {
      setOutPut((prev) => (prev = prev + "+"));
    }
  };
  const multiplySymb = () => {
    let lastLetter = outPut.charAt(outPut.length - 1);
    if (
      lastLetter == "" ||
      lastLetter == "*" ||
      lastLetter == "-" ||
      lastLetter == "+" ||
      lastLetter == "/"
    ) {
      return;
    } else {
      setOutPut((prev) => (prev = prev + "*"));
    }
  };
  const divideSymb = () => {
    let lastLetter = outPut.charAt(outPut.length - 1);
    if (
      lastLetter == "" ||
      lastLetter == "/" ||
      lastLetter == "-" ||
      lastLetter == "*" ||
      lastLetter == "+"
    ) {
      return;
    } else {
      setOutPut((prev) => (prev = prev + "/"));
    }
  };
  const subSymb = () => {
    let lastLetter = outPut.charAt(outPut.length - 1);
    if (
      lastLetter == "-" ||
      lastLetter == "/" ||
      lastLetter == "*" ||
      lastLetter == "+"
    ) {
      return;
    } else {
      setOutPut((prev) => (prev = prev + "-"));
    }
  };

  const deleteOne = () => {
    setOutPut((prev) => {
      return (prev = prev.replace(/.$/, ""));
    });
  };

  const checkInput = () => {
    if (outPut == "") {
      setResultIni("");
    }
  };

  const showResult = () => {
    let lastLetter = outPut.charAt(outPut.length - 1);
    if (
      lastLetter == "+" ||
      lastLetter == "-" ||
      lastLetter == "/" ||
      lastLetter == "*"
    ) {
      setResultIni("Invalid input");
    } else {
      try {
        setResultIni(eval(outPut.replace(/(?<=^|[^0-9])0+/g, ""))); //regex to remove leading zeros anywhere in string
      } catch (e) {
        console.log(e);
        setResultIni("Invalid input");
      }
    }
  };

  return (
    <div className="body_card">
      <div id="result">{outPut}</div>
      <div className="pre_result">{resultIni}</div>

      <div className="num_card">
        <div id="itemAC" onClick={clearInput}>
          AC
        </div>
        <div className="block" onClick={deleteOne}>
          <FontAwesomeIcon icon={faBackward} />
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
        <div id="item0" onClick={putZero}>
          0
        </div>
        <div className="block" onClick={putDot}>
          .
        </div>
        <div className="block" onClick={divideSymb}>
          /
        </div>

        <div id="item_equal_sign" onClick={showResult}>
          =
        </div>
      </div>
    </div>
  );
};

export default Calculate;
