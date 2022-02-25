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

export const H2WithContentId: HeadingComponent = ({ level, children }) => {
  children = React.Children.toArray(children)
  var text = children.reduce(flatten, "")
  var slug = text.toLowerCase().replace(/\W/g, "-")

  return React.createElement("h" + level, { id: slug }, children)
}

const flatten: (text: any, child: any) => any = (text, child) => {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)
}
