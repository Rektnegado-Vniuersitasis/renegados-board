import React from 'react';
import Card from './Card';

const CardList = ({members}) => {
    return (
      <>
       { members.map((user, i) => (<Card key={i} user={user} />)) }
      </>
    )
}

export default CardList;
