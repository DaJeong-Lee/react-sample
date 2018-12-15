/* eslint-disable max-len */

import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const ContainerExampleFluid = () => (
  <div>
    <Container fluid textAlign='center'>
      <Header as='h2'>How to make React App</Header>
      <pre>
      <p>
        1. 설치
            - node 설치<br/>
            - npm install -g yarn<br/>
            - npm install -g create-react-app<br/>
            - create-react-app name-of-app<br/>
            - cd name-of-app<br/>
      </p>
      <p>
        2. 실행<br/>
            - yarn start<br/>
      </p>
      </pre>
    </Container>
  </div>
);

export default ContainerExampleFluid
