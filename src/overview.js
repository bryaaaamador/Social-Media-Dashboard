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
                    


                    {/*<div className="card-small">
                        <p className="card-small-views">Likes</p>
                        <p className="card-small-icon">
                            <img src="images/icon-facebook.svg" alt="" />
                        </p>
                        <p className="card-small-number">52</p>
                        <p className="card-small-percentage is-danger">
                            <span>
                                <img src="images/icon-down.svg" alt="" />
                                2%
                            </span>
                        </p>
                    </div>
                    <div className="card-small">
                        <p className="card-small-views">Likes</p>
                        <p className="card-small-icon">
                            <img src="images/icon-instagram.svg" alt="" />
                        </p>
                        <p className="card-small-number">5462</p>
                        <p className="card-small-percentage">
                            <span>
                                <img src="images/icon-up.svg" alt="" />
                                2257%
                            </span>
                        </p>
                    </div>
                    <div className="card-small">
                        <p className="card-small-views">Profile Views</p>
                        <p className="card-small-icon">
                            <img src="images/icon-instagram.svg" alt="" />
                        </p>
                        <p className="card-small-number">52k</p>
                        <p className="card-small-percentage">
                            <span>
                                <img src="images/icon-up.svg" alt="" />
                                1375%
                            </span>
                        </p>
                    </div>
                    <div className="card-small">
                        <p className="card-small-views">Retweets</p>
                        <p className="card-small-icon">
                            <img src="images/icon-twitter.svg" alt="" />
                        </p>
                        <p className="card-small-number">117</p>
                        <p className="card-small-percentage">
                            <span>
                                <img src="images/icon-up.svg" alt="" />
                                303%
                            </span>
                        </p>
                    </div>
                    <div className="card-small">
                        <p className="card-small-views">Likes</p>
                        <p className="card-small-icon">
                            <img src="images/icon-twitter.svg" alt="" />
                        </p>
                        <p className="card-small-number">507</p>
                        <p className="card-small-percentage">
                            <span>
                                <img src="images/icon-up.svg" alt="" />
                                553%
                            </span>
                        </p>
                    </div>
                    <div className="card-small">
                        <p className="card-small-views">Likes</p>
                        <p className="card-small-icon">
                            <img src="images/icon-youtube.svg" alt="" />
                        </p>
                        <p className="card-small-number">107</p>
                        <p className="card-small-percentage is-danger">
                            <span>
                                <img src="images/icon-down.svg" alt="" />
                                19%
                            </span>
                        </p>
                    </div>
                    <div className="card-small">
                        <p className="card-small-views">Total Views</p>
                        <p className="card-small-icon">
                            <img src="images/icon-youtube.svg" alt="" />
                        </p>
                        <p className="card-small-number">1407</p>
                        <p className="card-small-percentage is-danger">
                            <span>
                                <img src="images/icon-down.svg" alt="" />
                                12%
                            </span>
                        </p>
    </div>*/}
                </div>
            </div>
        </section>
    )
}

export default Overview;