import React from 'react';
import Prism from 'prismjs';
import '../../prism.css';
const InsertTail = () => {
  return (
    <pre>
      <code className="language-javascript">
        {`
class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // Function takes 1 parameter => value
    insertTail(value) {
      // Create a variable => newNode
      // To create our node we must use our Node class
      // Our Node class accepts 1 parameter => value
      // Initialize our newNode by using => new
      let newNode = new Node(value);
      // Determine if the linked list is empty
      // If TRUE *empty*
      if (this.head === null) {
        // Set the head to => newNode
        this.head = newNode;
        // Set the tail to => newNode
        this.tail = newNode;
      } else {
        // If FALSE
        // Point the current tail's next value => newNode
        this.tail.next = newNode;
        // Set the new tail to => newNode
        this.tail = newNode;
      }
    }
  }
`}
      </code>
    </pre>
  );
};

export default InsertTail;
