import React from 'react';

const Demo = () => {
  return (
    <main>
      <h2 className="mainTitle">Singly Linked List</h2>
      <h3 className="subTitle">Intro</h3>
      <span className="content">
        The Linked List is a way to store values in memory. It is like an array,
        but with a few minor differences. In an array, all values in memory get
        stored next to each other. In a linked list our data gets stored
        anywhere there is space. The value of our linked list is that we no
        longer need to have big memory blocks available to us. Instead of having
        to find space for our data to fit, we can create values where we have
        any free slot in memory. At any place in memory our values can exist and
        all we have to do is link them (hence the name linked list). This allows
        for more freedom and flexibility in the way we create and store data.
      </span>
      <h3 className="subTitle">Overview</h3>
      <span className="content">
        <h4 className="contentTitle">Key Terms</h4>
        <ol>
          <li className="contentList">
            <span className="bold">Head</span> → The{' '}
            <span className="italic">first element</span> in the linked list
          </li>
          <li className="contentList">
            <span className="bold">Tail</span> → The{' '}
            <span className="italic">last element</span> in the linked list
          </li>
          <li className="contentList">
            <span className="bold">Node</span> → A structure for *storing data*
          </li>
          <li className="contentList">
            <span className="bold">Next</span> → points to the next node in the
            linked list if you are at the end of the linked list the value will
            be *NULL*
          </li>
          <li className="contentList">
            <span className="bold">Orphaned</span> → A node that *no longer has
            reference* to the linked list{' '}
          </li>
        </ol>
        - A linked list has a few different components. The first thing we need
        to go over are Nodes. - A Node is a store of data. In a linked list a
        node contains 2 types of data, a **value** and a **next pointer**. The
        value can be a **string** → "testing", a **number** → 2, or an **array**
        → ["value", "testing"]. - *Our linked list is a series of connected
        (linked) nodes*. The next pointer is a reference to the next node in the
        linked list. **The next node** can take on two different values. It can
        be **NULL**, which means that we are at the end of the linked list. Or
        it can contain a reference to the **NEXT NODE in the linked list**. -
        When we create our first Node and add it to our linked list it becomes
        the **HEAD NODE**. The HEAD NODE ****means it is the Node at the **very
        beginning of the linked list**. - We also keep track of the last element
        in a linked list. We refer to the last element as the **TAIL NODE**.
      </span>
    </main>
  );
};

export default Demo;
