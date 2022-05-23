import data from "../json/data.json";

export const emj = data.valueOf().sort(()=>Math.random()-0.5).slice(0, 120)
