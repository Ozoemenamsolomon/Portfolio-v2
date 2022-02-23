import React from "react"
import {
  CodeComponent,
  HeadingComponent,
} from "react-markdown/src/ast-to-react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism"

export const SyntaxHiglightedCode: CodeComponent = ({
  node,
  inline,
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)/.exec(className || "")
  return !inline && match ? (
    // @ts-ignore
    <SyntaxHighlighter
      children={String(children).replace(/\n$/, "")}
      style={darcula}
      language={match[1]}
      PreTag="div"
      {...props}
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  )
}

export const H2WithContentId: HeadingComponent = ({
  level,
  children,
  ...props
}) => {
  const contentAsId = children[0]?.toString().toLowerCase().replace(/ /g, "-")
  return (
    <h2 id={contentAsId} {...props}>
      {children}
    </h2>
  )
}
