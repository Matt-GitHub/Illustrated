import React from 'react';

const DataStructuresAndAlgo = () => {
  return (
    <>
      {topics.map((topic, id) => {
        return <div key={id}>{topic}</div>;
      })}
    </>
  );
};
export default DataStructuresAndAlgo;

const topics = [
  'Complexity Analysis',
  'Memory',
  'Big O',
  'Logarithms',
  'Linked List',
  'Stack',
  'Queue',
  'Trees',
  'Hash Tables',
  'Graph',
  'Array',
  'String',
  'Heaps',
  'Tries'
];
