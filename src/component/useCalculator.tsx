import { useState } from "react";

export default function UseCalculator() {
    const [result, setResult] = useState<number>(0);
    const [color, setColor] = useState("black");

    function GetValues () {
        const first = Number((document.getElementById("first") as HTMLInputElement).value);
        const second = Number((document.getElementById("second") as HTMLInputElement).value);
        return { first, second };
    }

    function updateResult(res:number) {
        setResult(res);
        setColor(res < 0 ? "red" : "black");
    }

    function addition () {
        const { first, second } = GetValues();
        updateResult(first + second);
    }

    function subtraction(){
        const { first, second } = GetValues();
        updateResult(first - second);
    }

    function multiply () {
        const { first, second } = GetValues();
        updateResult(first * second);
    }

    function divide() {
        const { first, second } = GetValues();
        updateResult(first / second);
    }

    function power (){
        const { first, second } = GetValues();
        let res = 1;
        for (let i = 0; i < second; i++) {
            res *= first;
        }
        updateResult(res);
    }

    function doClear (){
        (document.getElementById("first") as HTMLInputElement).value = "";
        (document.getElementById("second") as HTMLInputElement).value = "";
        setResult(0);
        setColor("black");
    }

    return { result, color, addition, subtraction, multiply, divide, power, doClear };
};
