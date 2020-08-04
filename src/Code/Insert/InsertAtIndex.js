import React, { useEffect } from 'react';
import Prism from 'prismjs';
import '../../prism.css';

Prism.highlightAll();
const InsertAtIndex = () => {
  return (
    <pre>
      <code className="language-javascript">{`
class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // Insert Index takes 2 parameters -> A value and an index
    // The value is what we pass in for the new node value
    // The index is the place in the linked list we want to replace
    // Then we point our new node towards the replaced node
    insertIndex(value, index) {
      // Create a variable => newNode
      // To create our node we must use our Node class
      // Our Node class accepts 1 parameter => value
      // Initialize our newNode by using => new
      let newNode = new Node(value);
      // Determine if the linked list is empty
      // If TRUE we cannot insert any value at an index
      // Create an error
      if (this.head === null) {
        console.log('Linked List is Empty');
        return;
      }
      // We have determined that the linked list is not empty
      // We can do an insert head function here if you have access to it
      // Or we can just do it manually
      if (index === 0) {
        // Store the current head as a temp variable
        // Reassign the head node to equal => newNode
        // Set the new head's next value => old head (temp)
        let temp = this.head;
        this.head = newNode;
        this.head.next = temp;
      } else {
        // We need to go through the linked list until
        // Either we find the index or we hit the end of the linked list
        // Track the current head to start traversing the linked list
        // Track the previous node -> used for insertion later
        // Track the current index so we know how many nodes we have touched
        let current = this.head;
        let previous = null;
        let currentIndex = 0;
        // We want to traverse the linked list until we find the index
        while (currentIndex !== index) {
          // If the next element in the linked list is null
          // That means we are at the end of the linked list
          // Which tells us that the index we are searching for
          // Is greater than the length of the linked list
          // Return an error
          if (current.next === null) {
            console.log('index does not exist');
            return;
          }
          // Keep searching for the index
          // Our previous node will be the old current
          // Current becomes the next node in the list
          // Increment our index tracker
          previous = current;
          current = current.next;
          currentIndex++;
        }
        // Here we have found the index in our linked list
        // Now we have to insert a new node at that index
        // Current represents the index we were looking for
        // Previous is the node before current
        // Set Previous's next value to equal the new node
        // Now we have to connect the rest of the linked list
        // Point the next value of our new node to the current node
        previous.next = newNode;
        newNode.next = current;
      }
    }
  }
`}</code>
    </pre>
  );
};

export default InsertAtIndex;
