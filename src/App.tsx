import '@patternfly/react-core/dist/styles/base.css';
import React, { useState, useLayoutEffect, useRef } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import { DropdownItem } from '@patternfly/react-core';
import { AddCircleOIcon } from '@patternfly/react-icons'
import { Layout } from './layout';
import 'photo';
import 'like';
import 'query';
import './App.css';

const App: React.FC = () => {
  const userDropdownItems = [
    <DropdownItem key="1" component="span">
      <Link to="/">Photos</Link>
    </DropdownItem>,
    <DropdownItem key="2" component="span">
      <Link to="/addPhoto">Add</Link>
    </DropdownItem>
  ];

  const [photoId, setPhotoId] = useState<number>(-1);
  const ref = useRef<any>(null);
  const photoIdChange = (customEvent: CustomEvent) =>
    setPhotoId(customEvent.detail);
  useLayoutEffect(() => {
    const { current } = ref;
    current.addEventListener('photoId', photoIdChange);
    return () => current.removeEventListener('photoId', photoIdChange);
  }, [ref]);

  return (
    <Layout userDropdownItems={userDropdownItems}>
      <Switch>
        <Route path="/addPhoto">
          <photo-add></photo-add>
        </Route>
        <Route path="/">
          <photo-carousel ref={ref}></photo-carousel>
          <div className="add">
            <like-button id={photoId}></like-button>
            <Link to="/addPhoto">
              <AddCircleOIcon size="xl" />
            </Link>
          </div>
          <query-list></query-list>
        </Route>
      </Switch>

    </Layout>
  );
}

export default App;
