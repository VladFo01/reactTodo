import React from 'react';
import {Form} from '../components/Form';
import {Notes} from '../components/Notes';

const Home = () => {
  const notes = new Array(3)
                .fill('')
                .map((k, i) => {return {id: i, title: `Note ${i + 1}`, completed: false}})

  return (
    <>
      <Form />

      <Notes notes={notes} />
    </>
  )
}

export default Home;