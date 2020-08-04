import React from 'react';
import '../../prism.css';
const nodeClass = () => {
  return (
    <pre>
      <code className="language-javascript">{`
      // The Node class allows us to input a value
      // We also create two pointers
      // The first pointer will tell us the NEXT node in the linked list
      // The second pointer will tell us the PREVIOUS node in the linked list
      // The reason this is useful is that we can now insert and delete in O(1) constant time
      
      class Node {
        // The constructor Initializes our node class
        // We provide 1 parameter (value) => The value we pass into our node
        constructor(value) {
          // Assign the value
          this.value = value;
          // Set the default next to equal null
          this.next = null;
        }
      }
      `}</code>
    </pre>
  );
};

export default nodeClass;
