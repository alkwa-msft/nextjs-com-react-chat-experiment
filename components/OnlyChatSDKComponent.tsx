import { ChatClient, ChatMessageReceivedEvent } from '@azure/communication-chat';
import { AzureCommunicationTokenCredential, CommunicationUserIdentifier } from '@azure/communication-common';
import { fromFlatCommunicationIdentifier } from '@azure/communication-react';
import React, { useEffect, useMemo } from 'react';

export type ContainerProps = {
  /** UserIdentifier is of type CommunicationUserIdentifier see below how to construct it from a string input */
  userIdentifier: string;
  token: string;
  displayName: string;
  endpointUrl: string;
  threadId: string;
};

export const OnlyChatSDKComponent = (props: ContainerProps): JSX.Element => {

    const userId = useMemo(
    () => fromFlatCommunicationIdentifier(props.userIdentifier) as CommunicationUserIdentifier,
    [props.userIdentifier]
    );

  useEffect(() => {
    const credential = new AzureCommunicationTokenCredential(props.token);
    const chatClient = new ChatClient(props.endpointUrl, credential);
    chatClient.startRealtimeNotifications();
    chatClient.on("chatMessageReceived", (e: ChatMessageReceivedEvent) => {
        console.log(e.threadId, e.message);
    });
  });
  return <>Hello...</>;
};