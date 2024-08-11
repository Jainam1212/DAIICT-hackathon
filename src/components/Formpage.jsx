import React from 'react'
import { useState } from 'react';
import { Form } from './Formcontent';

export const Formpage = () => {
    const [viewComponent, setviewComponent] = useState(true);
  return (
    <>
        <div className="outcontainer">
            <div className="subcontainer">
                <h1>Enter below values to <span className='gradient'>predict</span> your output</h1>
                {viewComponent && <Form setviewComponent={setviewComponent}/>}
            </div>
        </div>
    </>
  );
}
