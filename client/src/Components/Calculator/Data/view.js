import React, {useEffect, useState} from 'react';
import SustainabilityCard from './sustainablityCard';
import {ItemData} from './ItemData' // Your item data goes here


function ViewList() {
    const calculateCategoryScore = (item) => {
        let totalScore = 0;
      
        // Material Category
        totalScore += item.weight_material * calculateMaterialScore(item.material);
      
        // Production Process Category
        totalScore += item.weight_production * calculateProductionScore(item.production);
      
        // Labor Conditions Category
        totalScore += item.weight_labor_conditions * calculateLaborConditionsScore(item.labor_conditions);
      
        // Packaging and Transportation Category
        totalScore += item.weight_packaging_transportation * calculatePackagingScore(item.packaging_transportation);
      
        // End-of-Life Options Category
        totalScore += item.weight_end_of_life * calculateEndOfLifeScore(item.end_of_life);
      
        return totalScore;
    }
    const calculateMaterialScore = (material) => {
        // Define scoring criteria for Material category
        // You can adjust these scores based on your specific criteria
        if (material.includes("Organic")) {
        return 5;
        } else if (material.includes("Recycled")) {
        return 4;
        } else if (material.includes("Conventional")) {
        return 2;
        } else if (material.includes("Animal-based") && material.includes("responsible sourcing")) {
        return 3;
        } else {
        return 0; // Default score if criteria not met
        }
        // 5 total points
    }
    
    const calculateProductionScore = (production) => {
        // Define scoring criteria for Production Process category
        // You can adjust these scores based on your specific criteria
        if (production.includes("Low-impact dyeing") && production.includes("ethical supply chain")) {
        return 5;
        } else if (production.includes("Water and energy-efficient manufacturing") && production.includes("ethical supply chain")) {
        return 4;
        } else if (production.includes("Ethical and transparent supply chain") && !production.includes("harmful chemicals")) {
        return 4;
        } else {
        return 0; // Default score if criteria not met
        }
        // 5 total points 
    }
    
    const calculateLaborConditionsScore = (labor_conditions) => {
        // Define scoring criteria for Labor Conditions category
        // You can adjust these scores based on your specific criteria
        if (labor_conditions.includes("Fair wages") && labor_conditions.includes("safe working conditions")) {
            return 5;
        } else if (labor_conditions.includes("Fair wages") && labor_conditions.includes("safe working conditions") && !labor_conditions.includes("child or forced labor")) {
            return 4;
        } else if (labor_conditions.includes("Fair wages") && labor_conditions.includes("safe working conditions") && !labor_conditions.includes("child or forced labor") && labor_conditions.includes("Ethical treatment")) {
            return 4;
        } else {
        return 0; // Default score if criteria not met
        }
        // 5 total points
    }
    
    const calculatePackagingScore = (packaging_transportation) => {
        // Define scoring criteria for Packaging and Transportation category
        // You can adjust these scores based on your specific criteria
        if (packaging_transportation.includes("Minimal packaging") && packaging_transportation.includes("local sourcing")) {
        return 4;
        } else if (packaging_transportation.includes("Low-impact transportation methods") && packaging_transportation.includes("recycled or recyclable materials") && packaging_transportation.includes("local or sustainable sourcing")) {
        return 4;
        } else {
        return 0; // Default score if criteria not met
        }
        // 4 * 
    }
    
    const calculateEndOfLifeScore = (end_of_life) => {
        // Define scoring criteria for End-of-Life Options category
        // You can adjust these scores based on your specific criteria
        if (end_of_life.includes("Easily recyclable or compostable materials") && end_of_life.includes("responsible disposal or donation") && end_of_life.includes("Durable construction")) {
        return 5;
        } else if (end_of_life.includes("Easily recyclable or compostable materials") && end_of_life.includes("responsible disposal or donation")) {
        return 4;
        } else {
        return 0; // Default score if criteria not met
        }
        // 5
    }
    // Calculate scores and update state
    const [scores, setScores] = useState([]);
    useEffect (()=>{
        const updatedScores = ItemData.map((item) => calculateCategoryScore(item));
        setScores(updatedScores);
    },[])
    function calculatePercentage() {
        const totalScore = scores.reduce((sum, score) => sum + score, 0);
        const maxPossibleScore = ItemData.length * 485; // Assuming each item has max score of 100
        return ((totalScore / maxPossibleScore) * 100).toFixed(2);
    }      
    const handleCalculate = () =>{

    }
  return (
    <div className="container mb-4">
      <h2 className = "m-2">Ecometer Calculation</h2>
      <hr className = "text-muted" />
      {ItemData.map((item, index) => (<>
        <SustainabilityCard key={index} item={item} score = {calculateCategoryScore(item)}/>
        </>
        ))}
      <button className = "btn-success rounded">Calculate Overall</button>
    </div>
  );
}

export default ViewList;
