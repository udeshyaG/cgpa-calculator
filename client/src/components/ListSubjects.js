import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ListSubjects = ({ subjectList }) => {
  const [name, setName] = useState('');
  const [subjects, setSubjects] = useState({
    sub1: '',
    sub2: '',
    sub3: '',
    sub4: '',
    sub5: '',
  });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      name: name,
      ...subjects,
    };

    console.log(requestData);

    const { data } = await axios.post('/api/get-cgpa', requestData);

    console.log(data);

    // Router.push('/display-cgpa');

    history.push(`/display-cgpa/${name}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          placeholder='Name'
          onChange={(e) => setName(e.target.value)}
          className='form-control mb-2 mt-4'
        />

        <input
          type='number'
          value={subjects.sub1}
          placeholder={subjectList[0]}
          onChange={(e) => setSubjects({ ...subjects, sub1: e.target.value })}
          className='form-control mb-2'
        />

        <input
          type='number'
          value={subjects.sub2}
          placeholder={subjectList[1]}
          onChange={(e) => setSubjects({ ...subjects, sub2: e.target.value })}
          className='form-control mb-2'
        />

        <input
          type='number'
          value={subjects.sub3}
          placeholder={subjectList[2]}
          onChange={(e) => setSubjects({ ...subjects, sub3: e.target.value })}
          className='form-control mb-2'
        />

        <input
          type='number'
          value={subjects.sub4}
          placeholder={subjectList[3]}
          onChange={(e) => setSubjects({ ...subjects, sub4: e.target.value })}
          className='form-control mb-2'
        />

        <input
          type='number'
          value={subjects.sub5}
          placeholder={subjectList[4]}
          onChange={(e) => setSubjects({ ...subjects, sub5: e.target.value })}
          className='form-control mb-4'
        />

        <button type='submit' className='btn btn-success'>
          Get Cgpa
        </button>
      </form>
    </div>
  );
};

export default ListSubjects;
