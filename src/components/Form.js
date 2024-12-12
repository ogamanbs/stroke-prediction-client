import React, { useState, useEffect, useRef } from 'react'

export default function Form({setResult, resetForm, setResetForm}) {
    const formRef = useRef();

    const [formData, setFormData] = useState({
        gender: "",
        age: "",
        hypertension: "",
        heart_disease: "",
        ever_married: "",
        work_type: "",
        Residence_type: "",
        avg_glucose_level: "",
        bmi: "",
        smoking_status: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const response = await fetch("http://localhost:5001/predict", {
        const response = await fetch("https://stroke-prediction-server-production.up.railway.app/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        });
        const result = await response.json();
        setResult(result.stroke);
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scrolling effect
        });
    };

    useEffect(() => {
        if(resetForm === true) {
            formRef.current.reset();
            setResetForm(false);
        }
    }, [resetForm, setResetForm]);

    return (
        <form ref={formRef} className="h-full w-auto flex flex-col gap-5" onSubmit={handleSubmit}>
          {/* Gender */}
            <div className="flex flex-col gap-2">
                <h1 className="text-xl text-zinc-300 font-light">Gender:</h1>
                <div className="rounded-lg border border-zinc-700 px-4 py-1 text-base">
                    <select className="w-full text-zinc-100 bg-transparent outline-none" name="gender" onChange={handleChange} required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            {/* Age */}
            <div className="flex flex-col gap-2">
                <h1 className="text-xl text-zinc-300 font-light">Age:</h1>
                <input
                    type="number"
                    name="age"
                    onChange={handleChange}
                    placeholder="Age"
                    required
                    className="px-5 py-1 bg-transparent border border-zinc-700 rounded-lg outline-none"
                />
            </div>

            {/* Hypertension */}
            <div className="flex flex-col gap-2">
                <h1 className="text-xl text-zinc-300 font-light">Hypertension:</h1>
                <div className="rounded-lg border border-zinc-700 px-4 py-1 text-base">
                    <select className="w-full text-zinc-100 bg-transparent outline-none" name="hypertension" onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select>
                </div>
            </div>

            {/* Heart Disease */}
            <div className="flex flex-col gap-2">
                <h1 className="text-xl text-zinc-300 font-light">Heart Disease:</h1>
                <div className="rounded-lg border border-zinc-700 px-4 py-1 text-base">
                    <select className="w-full text-zinc-100 bg-transparent outline-none" name="heart_disease" onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                    </select>
                </div>
            </div>

            {/* Ever Married */}
            <div className="flex flex-col gap-2">
                <h1 className="text-xl text-zinc-300 font-light">Ever Married:</h1>
                <div className="rounded-lg border border-zinc-700 px-4 py-1 text-base">
                    <select className="w-full text-zinc-100 bg-transparent outline-none" name="ever_married" onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                    </select>
                </div>
            </div>

            {/* Work Type */}
            <div className="flex flex-col gap-2">
                <h1 className="text-xl text-zinc-300 font-light">Work Type:</h1>
                <div className="rounded-lg border border-zinc-700 px-4 py-1 text-base">
                    <select className="w-full text-zinc-100 bg-transparent outline-none" name="work_type" onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="Private">Private</option>
                        <option value="Self-employed">Self-employed</option>
                        <option value="Govt_job">Govt_job</option>
                        <option value="Children">Student</option>
                        <option value="Never_worked">Unemployed</option>
                    </select>
                </div>
            </div>

            {/* Residence Type */}
            <div className="flex flex-col gap-2">
                <h1 className="text-xl text-zinc-300 font-light">Residence Type:</h1>
                <div className="rounded-lg border border-zinc-700 px-4 py-1 text-base">
                    <select className="w-full text-zinc-100 bg-transparent outline-none" name="Residence_type" onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="Urban">Urban</option>
                        <option value="Rural">Rural</option>
                    </select>
                </div>
            </div>

            {/* Average Glucose Level */}
            <div className="flex flex-col gap-2">
                <h1 className="text-xl text-zinc-300 font-light">Avg Glucose Level:</h1>
                <input
                    type="number"
                    name="avg_glucose_level"
                    onChange={handleChange}
                    placeholder="Average Glucose Level"
                    step="0.01"
                    required
                    className="px-5 py-1 bg-transparent border border-zinc-700 rounded-lg outline-none"
                />
            </div>

            {/* BMI */}
            <div className="flex flex-col gap-2">
                <h1 className="text-xl text-zinc-300 font-light">BMI:</h1>
                <input
                    type="number"
                    name="bmi"
                    onChange={handleChange}
                    placeholder="BMI"
                    step="0.1"
                    required
                    className="px-5 py-1 bg-transparent border border-zinc-700 rounded-lg outline-none"
                />
            </div>

            {/* Smoking Status */}
            <div className="flex flex-col gap-2">
                <h1 className="text-xl text-zinc-300 font-light">Smoking Status:</h1>
                <div className="rounded-lg border border-zinc-700 px-4 py-1 text-base">
                    <select className="w-full text-zinc-100 bg-transparent outline-none" name="smoking_status" onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="formerly smoked">Formerly Smoked</option>
                        <option value="never smoked">Never Smoked</option>
                        <option value="smokes">Regular Smoker</option>
                    </select>
                </div>
            </div>

            {/* Submit Button */}
            <div className="mt-5 flex justify-center">
                <button type="submit" className="px-5 py-2 bg-blue-500 rounded-lg font-bold">Predict Stroke</button>
            </div>
        </form>
    )
}
