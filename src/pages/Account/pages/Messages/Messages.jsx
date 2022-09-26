import { DeleteOutline, ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import AccountInfo from '../../components/AccountInfo/AccountInfo';
import './Messages.css';

const Messages = ({ user, setUserState, backendUrl }) => {
  const deleteMessage = async (deleteMessage) => {
    const filteredMessages = user.messages.filter(
      (message) => message._id !== deleteMessage._id
    );
    try {
      const { data } = await axios.put(
        `${backendUrl}/user/update/${user._id}`,
        { messages: filteredMessages },
        { withCredentials: true }
      );
      setUserState(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${backendUrl}/user/getown`, {
          withCredentials: true,
        });
        setUserState(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [backendUrl, setUserState]);

  return (
    <div className="messages">
      {user && (
        <>
          <AccountInfo user={user} />
          <div className="messagesWrapper">
            <h2>Your messages:</h2>
            <div className="messageList">
              {user.messages.map((message, index) => (
                <Accordion key={index + 'message'}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <ul className="messageDetails">
                      <li className="messageDetails-from">
                        From: {message.from}
                      </li>
                      <li className="messageDetails-subject">
                        Subject: {message.topic}
                      </li>
                      <li className="messageDetails-date">{message.date}</li>
                    </ul>
                  </AccordionSummary>
                  <AccordionDetails>
                    {message.content}
                    <div className="deleteIcon">
                      <span onClick={() => deleteMessage(message)}>
                        <DeleteOutline />
                      </span>
                    </div>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Messages;
