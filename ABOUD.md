Application description and design decisions:

1- Language & Framework:

A -Nodejs: Although my experience is more with .NET than with nodejs, I have chosen the nodejs because it seems to integrate much better with heroku and travis-ci. The .NET core does not have official support with heroku, and the third party integrations does not seem rigid and maintained (they have a lot of issues). I also like to enrich my experience in nodejs because it is the best cross-platform framework that works on all servers and even on many IOTs.

B- Express: I used express web server as it is the most used web framework with nodejs, and it is easy to use.

C- No Front-end Framework: As the application is simple, and there is no complex or interactive UI required, I didn’t use any front-end development framework (like react/angular) is needed. All the application pages are generated/rendered at the back-end.


2-Application Structure:

The MVC design pattern is used with API consuming layer that is acting as the back-end for the MVC layer. 

Here are the folders with a brief description:

-src: This is where all back-end is located: javascript, test scripts, ejs views 

-src/API: Expedia API consuming files. The modules in this folder are responsible for preparing the URL based on the user filters, call Expedia API, and parse the response into hotels model.

-src/model: These are the javascript models that will be used render data in ejs views. This is an abstraction layer to isolate Expedia objects schemas from the application models. So, if Expedia changes the response, the back end model will just need a change without going to the ejs views.

-src/resources: This folder contains the user resources, like captions. Although it is used only with validation messages (because of time constraint), but as a concept, it should be applied to all user messages. 

-src/routes: this folder contains the express API route or controller. There is only one, the index.js.

-src/views: This folder contains the views as ejs templates. Although the application has one page,  it is separated into partial ejs views for easy of maintenance. 

-Public: this is the folder that contains the public resources that are referenced from the html files. it only contains the style css file.

no gulp or grunt tasks were needed because the application is very simple, npm scripts are only used. 


3-Application testing

The unit testing with mocha/chai is used to test some javascript modules. For better results, the unit testing coverage should be thorough, and at least one end-to-end test is needed to be applied using supertest as client agent, and a json server to mock the remote API. The time constraint didn’t allow further test coverage


4-User interface:

The application is only one page, it contains the filters on the top and the results are laid down as rows. No ajax calls are used, and no front end javascript is needed. There is only one button that can make a submission to the server, and everything is done from the server side.
The UI is basic, and can be much enhanced.

