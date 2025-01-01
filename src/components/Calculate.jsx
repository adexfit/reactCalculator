import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import BigEval from "bigeval";

const Calculate = () => {
  let ourEval = new BigEval();
  const [outPut, setOutPut] = useState("0");
  // const [num1, setNum1] = useState("");
  // const [num2, setNum2] = useState("");
  const [resultIni, setResultIni] = useState("0");

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
    outPut == "0" ? setOutPut(one) : setOutPut((prev) => (prev = prev + one));
  };
  const putTwo = () => {
    outPut == "0" ? setOutPut(two) : setOutPut((prev) => (prev = prev + two));
  };
  const putThree = () => {
    outPut == "0"
      ? setOutPut(three)
      : setOutPut((prev) => (prev = prev + three));
  };
  const putFour = () => {
    outPut == "0" ? setOutPut(four) : setOutPut((prev) => (prev = prev + four));
  };
  const putFive = () => {
    outPut == "0" ? setOutPut(five) : setOutPut((prev) => (prev = prev + five));
  };
  const putSix = () => {
    outPut == "0" ? setOutPut(six) : setOutPut((prev) => (prev = prev + six));
  };
  const putSeven = () => {
    outPut == "0"
      ? setOutPut(seven)
      : setOutPut((prev) => (prev = prev + seven));
  };
  const putEight = () => {
    outPut == "0"
      ? setOutPut(eight)
      : setOutPut((prev) => (prev = prev + eight));
  };
  const putNine = () => {
    outPut == "0" ? setOutPut(nine) : setOutPut((prev) => (prev = prev + nine));
  };
  const putDot = () => {
    let lastLetter = outPut.charAt(outPut.length - 1);
    if (lastLetter == ".") {
      return;
    } else {
      setOutPut((prev) => (prev = prev + dot));
    }
  };

  const clearInput = () => {
    setOutPut("0");
    // setResultIni("");
  };

  //x.replace(/(?<=^|[^0-9])0+/g,""); //regex to remove leading zeros
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
    if (lastLetter == "+") {
      return;
    } else {
      setOutPut((prev) => (prev = prev + "+"));
    }
  };
  const multiplySymb = () => {
    let lastLetter = outPut.charAt(outPut.length - 1);
    if (lastLetter == "*") {
      return;
    } else {
      setOutPut((prev) => (prev = prev + "*"));
    }
  };
  const divideSymb = () => {
    let lastLetter = outPut.charAt(outPut.length - 1);
    if (lastLetter == "/") {
      return;
    } else {
      setOutPut((prev) => (prev = prev + "/"));
    }
  };
  const subSymb = () => {
    let lastLetter = outPut.charAt(outPut.length - 1);
    if (lastLetter == "-") {
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
    const regex = /(\.+\d+\.)/; //regex to allow only one dot within numbers
    if (regex.test(outPut)) {
      setOutPut((pre) => {
        return (pre = pre.replace(/.$/, "")); //regex to replace the last character with an empty string
      });
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
      setOutPut("Invalid input");
    } else {
      try {
        let myregex = /[\*|\+|\/]+/; //only use last operator if multiple exist

        if (myregex.test(outPut)) {
          let troubleOperator = outPut.match(myregex);

          let correctedExpression = outPut.replace(
            troubleOperator[0],
            troubleOperator[0].charAt(troubleOperator[0].length - 1)
          );
          setOutPut(`${ourEval.exec(correctedExpression)}`);
        } else {
          setOutPut(`${ourEval.exec(outPut)}`);
        }
        // setOutPut(`${ourEval.exec(outPut)}`);
      } catch (e) {
        console.log(e);
        setOutPut("Input is not valid");
      }
    }
  };

  return (
    <>
      <div className="body_card">
        <div id="display" className="result">
          {outPut}
        </div>
        <div className="num_card">
          <div className="itemAC" id="clear" onClick={clearInput}>
            AC
          </div>
          <div className="block" onClick={deleteOne}>
            <FontAwesomeIcon icon={faBackward} />
          </div>
          <div className="block" id="multiply" onClick={multiplySymb}>
            x
          </div>

          <div className="block" id="seven" onClick={putSeven}>
            {seven}
          </div>
          <div className="block" id="eight" onClick={putEight}>
            {eight}
          </div>
          <div className="block" id="nine" onClick={putNine}>
            {nine}
          </div>
          <div className="block" id="subtract" onClick={subSymb}>
            -
          </div>

          <div className="block" id="four" onClick={putFour}>
            {four}
          </div>
          <div className="block" id="five" onClick={putFive}>
            {five}
          </div>
          <div className="block" id="six" onClick={putSix}>
            {six}
          </div>
          <div className="block" id="add" onClick={addSymb}>
            +
          </div>

          <div className="block" id="one" onClick={putOne}>
            {one}
          </div>
          <div className="block" id="two" onClick={putTwo}>
            {two}
          </div>
          <div className="block" id="three" onClick={putThree}>
            {three}
          </div>
          <div className="item0" onClick={putZero} id="zero">
            {zero}
          </div>
          <div className="block" id="decimal" onClick={putDot}>
            .
          </div>
          <div className="block" id="divide" onClick={divideSymb}>
            /
          </div>

          <div className="item_equal_sign" id="equals" onClick={showResult}>
            =
          </div>
        </div>
      </div>
      <br />
      <div className="author">--by Adeboye Elisha</div>
    </>
  );
};

export default Calculate;
