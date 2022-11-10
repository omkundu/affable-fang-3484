import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import "../Styles/Filters.css";

// abhi isko side me rakhte ha


const WomenFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategoryFilter = searchParams.getAll("category");
    const [category, setCategory] = useState( initialCategoryFilter || []);
    const initialBrandFilter = searchParams.getAll("Pattern");
    const [Pattern, setPattern] = useState( initialBrandFilter || []);

    const handleFilterCheckbox = (e) => {
        const newCategory = [...category]
  
        if(newCategory.includes(e.target.value)){
            newCategory.splice(newCategory.indexOf(e.target.value), 1)
            setCategory(newCategory)
      
        }
        else{
            newCategory.push(e.target.value)
            setCategory(newCategory)
            console.log("else working")
        }
    }

    const handleBrandFilter = (e) => {
        const newCategory = [...Pattern]
        if(newCategory.includes(e.target.value)){
            newCategory.splice(newCategory.indexOf(e.target.value), 1)
            setPattern(newCategory)
        }
        else{
            newCategory.push(e.target.value)
            setPattern(newCategory)
        }
    }

       useEffect(()=> {
        if(category || Pattern){
            let params = {};
            category && (params.category = category);
            Pattern && (params.Pattern = Pattern);
            setSearchParams(params)
        }
       }, [category,Pattern, setSearchParams])

  return (
    <div className='filter-parent'>
        <div className='categories-parent'>
            <div className='filter-option'>
                <input className='checkbox' checked={category.includes('Tshirt')} value="Tshirt" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> T-shirt </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('Pants')} value="Pants" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Pants  </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('Shorts')} value="Shorts" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Shorts </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('Jacket')} value="Jacket" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Jacket </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('Dresses')} value="Dresses" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Dresses </label>
            </div>
            <div className='filter-option'>
                <input checked={category.includes('Coats')} value="Coats" type="checkbox" onChange={handleFilterCheckbox}/>
                <label> Coats </label>
            </div>
 
        </div>
        <div className='filter-Brand'>
            <p>Pattern</p>
            <div className='brand-box'>
                <div className='filter-option'>
                    <input className='checkbox' checked={Pattern.includes('Checked')} value="Checked" type="checkbox" onChange={handleBrandFilter}/>
                    <label> Checked </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={Pattern.includes('STORM')} value="STORM" type="checkbox" onChange={handleBrandFilter}/>
                    <label> M </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={Pattern.includes('TXOR')} value="TXOR" type="checkbox" onChange={handleBrandFilter}/>
                    <label> L </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={Pattern.includes('apple')} value="apple" type="checkbox" onChange={handleBrandFilter}/>
                    <label> XL </label>
                </div>
                <div className='filter-option'>
                    <input className='checkbox' checked={Pattern.includes('Wingfi')} value="Wingfi" type="checkbox" onChange={handleBrandFilter}/>
                    <label> XXL </label>
                </div>
               
                
            </div>
        </div>
    </div>
  )
}

export default WomenFilter;