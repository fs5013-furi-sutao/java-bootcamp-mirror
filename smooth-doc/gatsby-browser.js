import React from 'react'
import { RootWrapper } from './src/components/RootWrapper'
import { PageWrapper } from './src/components/PageWrapper'
import Prism from 'prism-react-renderer/prism';

export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>
}

export const wrapPageElement = ({ element, props }) => {
  return <PageWrapper props={props}>{element}</PageWrapper>
}

(typeof global !== 'undefined' ? global : window).Prism = Prism;
require('prismjs/components/prism-java');