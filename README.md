# Gen Z Slang Decoder

This project displays a list of popular Gen Z slang terms and their meanings. The content is managed and fetched via Storyblok, a powerful headless CMS, enabling easy content updates without needing to modify the underlying code. The app is statically rendered for efficient performance and easy browsing. React and CSS are used to build the app with a decent and modern look.
![{E48A2DFC-E5DE-4DDB-AE59-330888C159FD}](https://github.com/user-attachments/assets/a7cb4799-69c5-43d3-9ef5-155885c7fb22)


## What is Storyblok?

Storyblok is a headless Content Management System (CMS) that provides a flexible and scalable approach to content management. Unlike traditional CMS platforms, Storyblok allows you to manage content separately from the front-end code, making it easy to update and publish content without involving developers.

In this project, Storyblok is used to manage the list of Gen Z slang words and their definitions. This allows the content to be updated dynamically in the Storyblok interface, while the front-end code remains static and optimized.

## Benefits of Using Storyblok:
- **Content Management**: Editors and content creators can easily add, update, or remove terms and definitions without touching the code.
- **Preview Feature**: Real-time previews allow you to see how content updates will appear on the site before publishing them.
- **Headless Architecture**: Separates the content from the presentation layer, enabling flexible delivery across different platforms (web, mobile, etc.).
- **User-Friendly Interface**: Storyblok provides an intuitive drag-and-drop interface that makes it easy for anyone to manage content.

## Getting Started

This project was bootstrapped with Create React App and integrates Storyblok for managing the content. The content (slang terms and their meanings) is fetched from Storyblok via its API and displayed on the front-end.

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from the official website.

### Install Dependencies

Run the following command to install all required dependencies:

`npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Static Content with Storyblok

The slang words and their meanings are managed through Storyblok. The content is fetched from the Storyblok API and rendered as static content on the front-end. This separation of content management and presentation ensures that the app's structure remains intact while allowing for easy content updates by non-developers.

- **Storyblok Interface**: Content editors can log in to Storyblok to add, edit, or remove slang terms.
- **Dynamic Fetching**: The React app fetches the data dynamically using the Storyblok API and displays the content as a static list.
- **Seamless Updates**: Since the content is decoupled from the code, editors can update the slang terms and their meanings anytime without requiring code changes or redeployments.

