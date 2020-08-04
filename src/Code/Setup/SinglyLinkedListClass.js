import React from 'react';
import '../../prism.css';

const SinglyLinkedListClass = () => {
  return (
    <pre>
      <code className="language-javascript">{`
  class SinglyLinkedList {
      // When we first create our linked list we want it to be empty
      // Our constructor is initalizing all values to equal null
      // The constructor does not take any parameters
      constructor() {
        // The head value will track the first node in our linked list
        // Set the head value to equal null
        this.head = null;
        // The tail value will track the last node in our linked list
        // Set the tail value to equal null
        this.tail = null;
      }
    }
`}</code>
    </pre>
  );
};

export default SinglyLinkedListClass;
