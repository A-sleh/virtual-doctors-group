import { useState } from "react"
import FilterInput from "@/components/ui/inputs/FilterInput"
import Selector from "@/components/ui/inputs/Selector"
import AnimateUpEffect from "@/lib/Animation/AnimateUpEffect"

export default function Filters() {

    const [price,setPrice] = useState(10)
    
    return (
        <AnimateUpEffect className="hover:h-fit hover:overflow-visible rounded-box lg:w-1/3 space-y-5 py-3 lg:py-8 h-[8%] overflow-hidden lg:h-fit">
            <h1 className="flex justify-between text-xl font-bold items-center">
                Filters
                <span className="font-normal text-sm text-primary">Clear All</span>
            </h1>
            <FilterInput label="Location" >
                <input type="text" placeholder="write the location" className="text-primary outline-none p-2"/>
            </FilterInput>
            <div className="flex flex-col">
                <label htmlFor="" className="font-medium text-lg flex justify-between items-center mb-3" >Max price
                    <span className="font-bold text-primary">{price == 0 ? 'Free':  `${price}$` }</span> 
                </label>
                <input type="range"  min="0" max="1000" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
            </div>
            <FilterInput label="Available" >
                <Selector options={['at morning','after noon']} overWriteStyle="border-none text-primary"/>
            </FilterInput>
            <FilterInput label="Gender" >
                <Selector options={['all','male','female']} overWriteStyle="border-none text-primary"/>
            </FilterInput>
            <FilterInput label="Experuabse" >
                <Selector options={['1','2','4']} units={[' +years',' +years',' +years']} overWriteStyle="border-none text-primary"/>
            </FilterInput>

        </AnimateUpEffect>
    )
}