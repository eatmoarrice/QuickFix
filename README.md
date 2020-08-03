# QuickFix - A GitHub Issues Project

This React project attempts to recreate Github Issues (the pages where GitHub users can post and discuss issues/fixes of a repository) using [GitHub API v3](https://docs.github.com/en/rest/reference/issues).

This project was completed in 3 days.

## Getting Started

A live demo of this project can be seen [here](https://quickfix-issues.netlify.app/).

###Prerequisites

Install the following dependencies:

```npm install react-bootstrap bootstrap react-markdown react-emoji-render react-syntax-highlighter dotenv moment parse-link-header```

You also need a server for GitHub Login. Run the included `server.js` whenever you want to run the app locally.

Add your own GitHub Client ID and Secret Key to the `.env` file:

```
REACT_APP_CLIENT_ID={Your CI}
REACT_APP_SECRET_KEY={Your SL}
```

## Features
* User is forced to log in with GitHub.
* User can type in an `:owner` and `:repo` and the website will list the issues. If such a repository is not found, error 404 will show.
* Pagination is included.
* User can see more details by clicking on an issue in the list.
* User can create a new issue, or comment on an existing issue (do note that GitHub API takes a while to update, so please wait 3-5 minutes if you don't see the changes right away).
* Comments are Markdown friendly and formatted with react-syntax-highlighter.

## Problems
* Tables can overflow.
* Reactions are static (i.e. haven't been done).
