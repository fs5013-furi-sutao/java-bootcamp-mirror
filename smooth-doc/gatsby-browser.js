import React from 'react'
import { RootWrapper } from './src/components/RootWrapper'
import { PageWrapper } from './src/components/PageWrapper'
import ReactDOM from "react-dom/client";
import Prism from 'prism-react-renderer/prism';

export const replaceHydrateFunction = () => {
  return (element, container) => {
    const root = ReactDOM.createRoot(container)
    root.render(element)
  }
}

export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>
}

export const wrapPageElement = ({ element, props }) => {
  return <PageWrapper props={props}>{element}</PageWrapper>
}

(typeof global !== 'undefined' ? global : window).Prism = Prism;
require('prismjs/components/prism-java');