import { css } from "styled-components"

export const markdownStyle = css`
  @media print {
    *,
    *:before,
    *:after {
      background: transparent !important;
      color: var(--text-colour) !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }
    a,
    a:visited {
      text-decoration: underline;
    }
    a[href]:after {
      content: " (" attr(href) ")";
    }
    abbr[title]:after {
      content: " (" attr(title) ")";
    }
    a[href^="#"]:after,
    a[href^="javascript:"]:after {
      content: "";
    }
    pre,
    blockquote {
      border: 1px solid var(--light-blue);
      page-break-inside: avoid;
    }
    thead {
      display: table-header-group;
    }
    tr,
    img {
      page-break-inside: avoid;
    }
    img {
      max-width: 100% !important;
    }
    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }
    h2,
    h3 {
      page-break-after: avoid;
    }
  }
  pre,
  code {
    font-family: Menlo, Monaco, "Courier New", monospace;
  }
  pre {
    padding: 0.5rem;
    line-height: 1.25;
    overflow-x: auto;
  }
  a,
  a:visited {
    color: var(--light-blue);
  }
  a:hover,
  a:focus,
  a:active {
    color: var(--light-blue);
  }
  .modest-no-decoration {
    text-decoration: none;
  }
  html {
    font-size: 12px;
  }
  @media screen and (min-width: 32rem) and (max-width: 48rem) {
    html {
      font-size: 15px;
    }
  }
  @media screen and (min-width: 48rem) {
    html {
      font-size: 16px;
    }
  }
  body {
    line-height: 1.85;
  }
  p,
  .modest-p {
    font-size: 1rem;
    margin-bottom: 1.3rem;
    margin-top: 0.2rem;
  }
  h1,
  .modest-h1,
  h2,
  .modest-h2,
  h3,
  .modest-h3,
  h4,
  .modest-h4 {
    margin: 1.414rem 0 0.5rem;
    font-weight: inherit;
    line-height: 1.42;
  }
  h1,
  .modest-h1 {
    margin-top: 0;
    font-size: 3.998rem;
  }
  h2,
  .modest-h2 {
    font-size: 2.827rem;
  }
  h3,
  .modest-h3 {
    font-size: 1.999rem;
  }
  h4,
  .modest-h4 {
    font-size: 1.414rem;
  }
  h5,
  .modest-h5 {
    font-size: 1.121rem;
  }
  h6,
  .modest-h6 {
    font-size: 0.88rem;
  }
  small,
  .modest-small {
    font-size: 0.707em;
  }
  /* https://github.com/mrmrs/fluidity */
  img,
  canvas,
  iframe,
  video,
  svg,
  select,
  textarea {
    max-width: 100%;
  }
  html {
    font-size: 18px;
    max-width: 100%;
  }
  body {
    font-weight: 300;
    margin: 0 auto;
    max-width: 48rem;
    line-height: 1.45;
    padding: 0.25rem;
  }

  h1,
  h2,
  h3 {
    border-bottom: 2px solid var(--text-colour);
    margin-bottom: 0.1rem;
    font-weight: bolder;
  }
  blockquote {
    border-left: 8px solid var(--text-colour);
    padding: 1rem;
  }
`
