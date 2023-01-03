import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

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

      const OnlyChatSDKComponent = dynamic(
        () =>
          import("../components/OnlyChatSDKComponent").then((mod) => mod.OnlyChatSDKComponent),
        { ssr: false }
      );
      const element = <OnlyChatSDKComponent userIdentifier={someProps.userId} threadId={someProps.threadId} endpointUrl={someProps.endpointUrl} token={someProps.token} displayName={someProps.displayName}/>
      setHtmlElement(element);
      // const ContosoChatContainer = (await (await import('../components/OnlyChatSDKComponent')));
      // const element = <ContosoChatContainer userIdentifier={someProps.userId} threadId={someProps.threadId} endpointUrl={someProps.endpointUrl} token={someProps.token} displayName={someProps.displayName}/>
      // setHtmlElement(element);
    })();
  }, [])
  

  return (
    <>
      {htmlElement}
    </>
  )
}