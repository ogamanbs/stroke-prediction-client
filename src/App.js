import React,{useState} from "react";
import {
  RiResetLeftLine
} from '@remixicon/react';
import Form from "./components/Form";
import Result from "./components/Result";

export default function App() {

  const [result, setResult] = useState(-1);
  const [resetForm, setResetForm] = useState(false);

  const handleClick = () => {
    setResetForm(true);
    setResult(-1);
  }

  return (
    <div className="min-h-screen w-full bg-zinc-900 text-zinc-100 py-10 px-5 md:px-10">
      <div className="flex gap-5 justify-center items-center">
        <h1 className="text-3xl font-bold text-center text-blue-500">Stroke Prediction</h1>
        <button onClick={handleClick} className="bg-blue-500 p-2 rounded-lg"><RiResetLeftLine size={20} /></button>
      </div>
      <div className="w-full h-auto flex items-start mt-10 gap-10 flex-col md:flex-row">
        {(result === 1 || result === 0) && <div className="w-full md:w-1/3 border border-zinc-700 rounded-[20px] p-10">
          <Result result={result} setResult={setResult} />
        </div>}
        {result !== 1 && result !== 0 && <div className="hidden md:block w-full md:w-1/3 border border-zinc-700 rounded-[20px] p-10">
          <Result result={result} setResult={setResult} />
        </div>}
        <div className="h-full w-full sm:w-96 border rounded-[20px] border-zinc-700 p-10">
          <Form setResult={setResult} resetForm={resetForm} setResetForm={setResetForm} />
        </div>
      </div>
    </div>
  );
}