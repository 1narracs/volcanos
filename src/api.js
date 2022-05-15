import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const QUERY = {
    id: 1,
    country: 'Japan',
    region: 'Japan, Taiwan, Marianas',
    subregion: 'Honshu',
    last_eruption: '6850 BCE',
    summit: 641,
    elevation: 2103,
    latitude: 34.5000,
    longitude: 131.6000,
    population_5km: 3597,
    population_10km: 9594,
    population_30km: 117805,
    population_100km: 4071152
};

function getVolcanoByQuery(q) {
    console.log(q);
    return QUERY;
}

export function useVolcano(search) {
    return null;
}