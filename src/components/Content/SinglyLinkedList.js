import React from 'react';
import { Route } from 'react-router-dom';
import SinglyLinkedListNav from '../Navigation/SinglyLinkedListNav';
import {
  Intro,
  Overview,
  ArrayVsLinkedList,
  LinkedListStructure,
  NodeClass,
  SinglyLinkedListClass1,
  InsertHead,
  InsertTail,
  InsertMiddle,
  InsertAtIndex
} from './index';
import LinkedListGreeting from './LinkedListGreeting';
import useCourse from '../../Hooks/FetchCourse';
const SinglyLinkedList = () => {
  const queryContent = useCourse();
  return (
    <div className="courseContainer">
      <SinglyLinkedListNav navList={queryContent} />
      <main className="course">
        <Route exact path="/singlyLinkedList">
          <LinkedListGreeting />
        </Route>
        <Route path="/singlyLinkedList/Intro">
          <Intro content={queryContent} />
        </Route>
        <Route path="/singlyLinkedList/Overview">
          <Overview content={queryContent} />
        </Route>
        <Route path="/singlyLinkedList/ArrayVsLinkedList">
          <ArrayVsLinkedList content={queryContent} />
        </Route>
        <Route path="/singlyLinkedList/LinkedListStructure">
          <LinkedListStructure content={queryContent} />
        </Route>
        <Route path="/singlyLinkedList/NodeClass">
          <NodeClass content={queryContent} />
        </Route>
        <Route path="/singlyLinkedList/LinkedListClass">
          <SinglyLinkedListClass1 content={queryContent} />
        </Route>
        <Route path="/singlyLinkedList/InsertHead">
          <InsertHead content={queryContent} />
        </Route>
        <Route path="/singlyLinkedList/InsertTail">
          <InsertTail content={queryContent} />
        </Route>
        <Route path="/singlyLinkedList/InsertMiddle">
          <InsertMiddle content={queryContent} />
        </Route>
        <Route path="/singlyLinkedList/InsertAtIndex">
          <InsertAtIndex content={queryContent} />
        </Route>
      </main>
    </div>
  );
};

export default SinglyLinkedList;
