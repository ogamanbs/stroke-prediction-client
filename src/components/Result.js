import React from 'react'

export default function Result({result}) {
    return (
        <>
            {result === 1 && <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold">Final Result</h1>
                <div className="mt-10">
                    <div className="text-4xl flex justify-center">💊 🏥 💉</div>
                    <div className="mt-5">
                        <h1 className="text-xl text-center font-bold text-red-500">Get Diagnosed!</h1>
                        <h1 className="mt-3">You need medical attention!</h1>
                        <h1 className="">You are likely to get a stroke</h1>
                    </div>
                </div>
            </div>}
            {result === 0 && <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold">Final Result</h1>
                <div className="mt-10">
                    <div className="text-4xl flex justify-center">🎉 🥳 🎉</div>
                    <div className="mt-5">
                        <h1 className="text-green-500 text-xl font-bold text-center">Enjoy!</h1>
                        <p className="mt-3">You are safe and will not get a stroke if you will continue your lifestyle like this</p>
                    </div>
                </div>
            </div>}
            {result === -1 && <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold text-zinc-700">Result will be displayed here</h1>
            </div>}
        </>
    );
}
