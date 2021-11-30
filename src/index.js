import React from "react";
import ReactDOM from "react-dom";

import JobsList from "./components/jobslist";
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const messages = {
  'es': localeEsMessages,
  'en': localeEnMessages
};

const language = 'es';


ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <JobsList />
  </IntlProvider>, document.getElementById("root")
);
