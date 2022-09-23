import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import AccountInfo from '../../components/AccountInfo/AccountInfo';
import './Messages.css';

const Messages = ({ user }) => {
  return (
    <div className="messages">
      <AccountInfo user={user} />
      <div className="messagesWrapper">
        <h2>Your messages:</h2>
        <div className="messageList">
          {user.messages.map((message, index) => (
            <Accordion key={index + 'message'}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <ul className="messageDetails">
                  <li className="messageDetails-from">From: {message.from}</li>
                  <li className="messageDetails-subject">
                    Subject: {message.topic}
                  </li>
                  <li className="messageDetails-date">{message.date}</li>
                </ul>
              </AccordionSummary>
              <AccordionDetails>{message.content}</AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
