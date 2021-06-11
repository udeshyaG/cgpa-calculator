import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListSubjects from '../components/ListSubjects';

const Home = () => {
  const semList = [1, 2, 3];

  const [myDept, setMyDept] = useState('Computer Science');
  const [mySem, setMySem] = useState(1);

  const [deptList, setDeptList] = useState([]);
  const [subjectList, setSubjectList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('My Dept = ', myDept);
    console.log('My sem = ', mySem);

    const { data } = await axios.get(
      `/api/subjects?dept=${myDept}&sem=${mySem}`
    );

    let subjectListTemp = [];
    for (let i = 1; i <= 5; i++) {
      subjectListTemp.push(data[0][`sub${i}`]);
    }

    setSubjectList(subjectListTemp);
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('/api/departments');

      let deptListTemp = [];
      data.forEach((elem) => {
        deptListTemp.push(elem.dept_name);
      });

      setDeptList(deptListTemp);
    }
    fetchData();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='text-muted small mb-1'>Select Department: </div>
        <select
          value={myDept}
          onChange={(e) => setMyDept(e.target.value)}
          className='form-select mb-4'
        >
          {deptList.map((dept) => {
            return (
              <option value={dept} key={dept}>
                {dept}
              </option>
            );
          })}
        </select>

        <div className='text-muted small mb-1'>Select Semester: </div>
        <select
          value={mySem}
          onChange={(e) => setMySem(e.target.value)}
          className='form-select mb-3'
        >
          {semList.map((sem) => {
            return (
              <option value={sem} key={sem}>
                {sem}
              </option>
            );
          })}
        </select>

        <button type='submit' className='btn btn-primary'>
          Next &rarr;
        </button>
      </form>

      {subjectList.length > 0 && <ListSubjects subjectList={subjectList} />}
    </div>
  );
};

export default Home;
