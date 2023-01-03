import { useEffect, useState } from 'react'

export default function Home() {
  const [htmlElement, setHtmlElement] = useState<JSX.Element | undefined>(undefined)
  useEffect(() => {
    (async() => {
      let someProps = {
        userId: '<user id as a string>',
        token: "<access token>",
        displayName: "<your name>",
        endpointUrl: '<endpoint url>>',
        threadId: "<thread id>",
      };
      const ContosoChatContainer = (await import('../ContosoChatContainer')).ContosoChatContainer;
      const element = <ContosoChatContainer userIdentifier={someProps.userId} threadId={someProps.threadId} endpointUrl={someProps.endpointUrl} token={someProps.token} displayName={someProps.displayName}/>
      setHtmlElement(element);
    })();
  }, [])
  

  return (
    <>
      {htmlElement}
    </>
  )
}