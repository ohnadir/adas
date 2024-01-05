'use client'

import { useEffect, useState } from 'react';
import { ICountry, IState, ICity } from 'country-state-city'
import { Country, State, City }  from 'country-state-city';
import AddressInput from "./AddressInput"

const CountryCityArea = () => {
    const [isOpenState, setIsOpenState] = useState(false);
    const [isOpenCity, setIsOpenCity] = useState(false);
    const [isOpenCountry, setIsOpenCountry] = useState(false);

    let countryData = Country.getAllCountries();
    const [stateData, setStateData] = useState<IState[]>();
    const [cityData, setCityData] = useState<ICity[]>();
    
    const [country, setCountry] = useState<ICountry | undefined>(countryData[0]);
    const [state, setState] = useState<IState | undefined>();
    const [city, setCity] = useState<ICity | undefined>();

    useEffect(() => {
        setStateData(State.getStatesOfCountry(country?.isoCode));
    }, [country]);

    useEffect(() => {
        stateData && setState(stateData[0]);
    }, [stateData]);

    useEffect(() => {
        const fetchData = async () => {
            if (country?.isoCode && state?.isoCode) {
                const cities = await City.getCitiesOfState(country.isoCode, state.isoCode);
                setCityData(cities);
            }
        };
    
        fetchData();
    }, [country, state]);

    const handleOpenState = () => {
        setIsOpenState(!isOpenState);
        setIsOpenCity(false);
        setIsOpenCountry(false);
    };

    const handleOpenCity = () => {
        setIsOpenCity(!isOpenCity);
        setIsOpenState(false);
        setIsOpenCountry(false);
    };

    const handleOpenCountry = () => {
        setIsOpenCountry(!isOpenCountry);
        setIsOpenState(false);
        setIsOpenCity(false);
    };

    const handleState = (e:any) => {
        setState(e);
    };

    const handleCity = (e:any) => {
        setCity(e);
    };

    const handleCountry = (e:any) => {
        setCountry(e);
    };
    return (
        <div>
            <AddressInput
                label='State'
                isOpen={isOpenState}
                action={handleOpenState}
                secondaryAction={handleState}
                data={stateData} 
            />

            <AddressInput
                label='City'
                isOpen={isOpenCity}
                action={handleOpenCity}
                secondaryAction={handleCity}
                data={cityData} 
            />

            <AddressInput
                label='Country'
                isOpen={isOpenCountry}
                action={handleOpenCountry}
                secondaryAction={handleCountry}
                data={countryData} 
            />
            
        </div>
    )
}

export default CountryCityArea