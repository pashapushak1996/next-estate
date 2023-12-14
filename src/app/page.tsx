"use client";

import {useState} from "react";

import Select from "@/app/components/select/Select";
import {SelectOption} from "@/app/components/select/select.types";

export default function Home() {
  const [selectedOption,setSelectedOption] = useState<SelectOption | null>(null);

  const options = [{value: 1, label: 'Option ONE'},
    {value: 2, label: 'Option TWO'},
    {value: 3, label: 'Option THREE'},
    {value: 4, label: 'Option FOUR'}];


  return (
    <main>
      <Select options={options} onChange={(option)=>{
        setSelectedOption(option);
      }}/>
    </main>
  )
}
