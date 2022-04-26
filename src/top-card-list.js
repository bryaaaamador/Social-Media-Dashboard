import React from 'react';
import './top-card-list.css';
import Card from './card';

const cardListData = [
  {
      username: '@BrianAmador',
      id: 1,
      followers: 1483,
      todayFollower: 12,
      icon: 'images/icon-facebook.svg',
      name: 'facebook',
  },
  {
      username: '@BrianAmador',
      id: 2,
      followers: '28k',
      todayFollower: 20,
      icon: 'images/icon-twitter.svg',
      name: 'twitter',
  },
  {
      username: '@BrianAmador',
      id: 3,
      followers: '6k',
      todayFollower: 30,
      icon: 'images/icon-instagram.svg',
      name: 'instagram',
  },
  {
      username: '@BrianAmador',
      id: 4,
      followers: '12k',
      todayFollower: -50,
      icon: 'images/icon-youtube.svg',
      name: 'youtube',
  },
];

function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {
            cardListData.map((cardData) => <Card key={cardData.id} {...cardData}/>)
          }
        </div>
      </div>
    </section>
  )
}

export default TopCardList;