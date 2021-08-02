import React, { useState } from 'react';
import CardList from './CardList';

const BatchCards = ({members, numberPerBatch = 16}) => {
    const [batch, setBatch] = useState(1)

    const addToBatch = () => {
        if(members.lenght > batch * numberPerBatch) {
            setBatch(batch + 1);
        }
    }

    return (
        <div className='container'>
          <div className='d-flex flex-wrap justify-content-center'>
            <div className='my-4' style={{ flex: '1 1 100%' }}>
              <h4>Total Members: <span className='badge bg-secondary'>{members.length}</span></h4>
            </div>

            <CardList
              members={members.slice(0, batch * numberPerBatch)}
            />
          </div>
          {members.lenght >= batch * numberPerBatch && (
            <ShowMoreButton action={addToBatch} />
          )} 
        </div>
    )
}

export default BatchCards;

const ShowMoreButton = ({action, disabled}) => {
  return (
    <button type="button" className="btn btn-outline-primary" onClick={action} disabled={disabled}>
      Show More
    </button>
  )
}
