import React, {useState,useEffect} from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { getAllCategories } from '../api';
import CategoryList from '../components/CategoryList';
import {Loader} from '../components/Loader';
import Search from '../components/Search';

const Home = () => {
    const [catalog, setCatalog] = useState([])
    const [filteredCatalog, setFilterdCatalog] = useState([])
    
    const {pathname, search} = useLocation()
    const {push} = useHistory()
    console.log(search);
    const handleSearch = (str) => {
        setFilterdCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))
        push({
            pathname,
            search:`?search=${str}`
        })
    }

    useEffect(()=>{
        getAllCategories().then(data => {
            setCatalog(data.categories)
            setFilterdCatalog( search ? 
                data.categories.filter(item => 
                    item.strCategory
                        .toLowerCase()
                        .includes(search.split("=")[1].toLocaleLowerCase())
                ) : data.categories
            )
        })
    },[search])
    return (
        <>
            
            <Search cb={handleSearch}/>
            {!catalog.length ? (
                <Loader/>
            ):(
                <CategoryList catalog={filteredCatalog}/>
            )}
        </>
    );
};


export default Home;