import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const DisplayCgpa = () => {
  const [recentList, setRecentList] = useState({});
  const history = useHistory();
  const { studentName } = useParams();

  const handleButtonClick = (e) => {
    console.log('HEllo');
    history.push(`/`);
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('/api/student-list');

      setRecentList(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 className='text-center'>Your CGPA is {recentList[studentName]}</h1>

      <hr />

      <h4>Recent Calculations</h4>
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>CGPA</th>
            </tr>
          </thead>
          <tbody>
            {/* {recentList.map((item, index) => {
              return (
                <tr>
                  <th scope='row'>{index + 1}</th>
                  <td>{item.student_name}</td>
                  <td>{item.cgpa}</td>
                </tr>
              );
            })} */}

            {Object.keys(recentList).map(function (key, index) {
              return (
                <tr>
                  <th scope='row'>{index + 1}</th>
                  <td>{key}</td>
                  <td>{recentList[key]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button className='btn btn-primary' onClick={handleButtonClick}>
        Calculate Again
      </button>
    </div>
  );
};

export default DisplayCgpa;
