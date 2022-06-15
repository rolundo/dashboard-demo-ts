import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'

SyntaxHighlighter.registerLanguage('jsx', jsx)

type Props = {
  codeString: string
}

export default function Highlighter({ codeString }: Props) {
  return (
    <div style={{ marginBottom: '3em' }}>
      <SyntaxHighlighter language='jsx' style={atomDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  )
}
