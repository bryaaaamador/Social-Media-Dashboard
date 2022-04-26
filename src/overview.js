import React from "react";
import CardSmall from "./card-small.js";
import './overview.css';

const cardSmallList = [
    {
        icon: 'images/icon-facebook.svg',
        pageViews: '87',
        growth: 3,
        id: 1,
    },
    {
        icon: 'images/icon-twitter.svg',
        pageViews: '52',
        growth: 2257,
        id: 2,
    },
    {
        icon: 'images/icon-instagram.svg',
        pageViews: '4562',
        growth: 1375,
        id: 3,
    },
    {
        icon: 'images/icon-youtuve.svg',
        pageViews: '117',
        growth: 303,
        id: 4,
    }    
]

function Overview() {

    

    return (
        <section className="overview">
            <div className="wrapper">
                <h2>Overview - Today</h2>
                <div className="grid">
                    {
                        cardSmallList.map(({icon, pageViews, growth, id}) => (
                            <CardSmall 
                                icon ={icon}
                                pageViews ={pageViews}
                                growth = {growth}
                                key = {id}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Overview;