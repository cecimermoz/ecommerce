import React, {useEffect, useState} from 'react';
import logo from '../../img/logo.png';
import { NavContainer, NavLogo, CategoryLink } from "./style";
import { Link } from "react-router-dom";
import CardWidget from "./CartWidget";
import { getFirestore } from "../../firebase";

const NavBar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        const db = getFirestore();
        const categories = db.collection('categories');
        categories.get()
        .then((q)=>{
            q.size === 0 && console.log('No results for CATEGORIES')
            setCategories(q.docs.map( doc => doc.data() ))
        })
        .catch(er => console.log(er))

    },[]);

    return(
        <>
        { categories?.length > 0 && 
            <NavContainer>
                <Link to={'/'}><NavLogo src={logo} /></Link>
                {categories.map((cate, i) => (
                    <CategoryLink key={`${cate.name}${i}`} to={`/category/${cate.name}`}>{cate.name}</CategoryLink>
                ))}
                <CardWidget />
            </NavContainer>
        }
        </>
    )
}

export default NavBar;