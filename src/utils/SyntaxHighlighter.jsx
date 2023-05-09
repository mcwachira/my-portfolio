import React from 'react'
//import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwlLight'
import styled from 'styled-components'


const CodeBlockContainer = styled.div`
position: relative;
margin-top: 48px;
margin-bottom: 60px;
transition: all 200ms ease-in 0s;


`
const PreBlock = styled.pre`
font-family:Arial, Helvetica, sans-serif;
font-size: 18px;
  outline-offset: 2px;
  overflow-x: auto;
  margin-left: -32px;
  margin-right: -32px;
  padding: 32px;
  min-height: 50px;
  border: 1px solid rgba(230, 230, 230, 1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  max-width: calc(100% + 64px);
`

const LanguageTitleContainer = styled.div`
border-top-left-radius: .25rem;
border-top-right-radius: .25rem;
border-width: 1px 1px 0px;
border-color: rgba(230, 230, 230, 1);
background-color: rgba(231,231,235);

padding:.75rem 1.25rem;
margin-left: -32px;
margin-right: -32px;
 font-family: Arial, Helvetica, sans-serif;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
  color: hsl(220deg, 23%, 5%);
  text-align: right;


`

const SyntaxHighlighter = ({children}) => {
// console.log(children)
    //access the code in our mdx files 
    const code = children.props.children;
    const language = children.props.className?.replace("language-", "").trim();
    return(
        <Highlight {...defaultProps} 
        code={code} 
        theme={theme}
        language={language}
        >

            {({
                className,
                style,
                tokens,
                getLineProps,
            getTokenProps
            }) => (
                <CodeBlockContainer>
                {language &&(
                    <LanguageTitleContainer>
                        {language.toUpperCase()}
                    </LanguageTitleContainer>
                )}
                {/* {console.log(language)} */}
                    <PreBlock className={className} style={{ ...style }}>
                        {tokens.slice(0, -1).map((line, i) => (
                            //getLineprops and getToken props for styling
                            <div{...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span{...getTokenProps({ token, key })} />
                                ))}

                            </div>
                        ))}
                    </PreBlock>

                </CodeBlockContainer>

                    
            )}
        </Highlight>



    )
}

export default SyntaxHighlighter