# RNSurvey

RNSurvey is a React Native application that adds JSON-based surveys to Android and iOS applications. This repository contains basic building blocks to create your own survey. RNSurvey can be used as a standalone application, but could also be integrated into an existing native application. 

<p float="left" align="center">
  <img src="https://user-images.githubusercontent.com/4366183/54883867-a1d37300-4e6a-11e9-80c9-09edada4f243.png" alt="" width="250" float="left" align="left" />                  
  <img src="https://user-images.githubusercontent.com/4366183/54883870-a26c0980-4e6a-11e9-80fe-88dc501fdc68.png" alt="" width="250" align="center" float="left" />
  <img src="https://user-images.githubusercontent.com/4366183/54883871-a26c0980-4e6a-11e9-972d-4fde987d6561.png" alt="" width="250" float="right" align="right" />
</p>

## Installation

1. Clone this repository: `git clone https://github.com/sluijs/RNSurvey.git`. 

2. Install the dependencies: `yarn add` or `npm install`. RNSurvey has few dependencies, but needs [ajv](https://github.com/epoberezkin/ajv) and [redux](https://github.com/reduxjs/redux) to function properly.

3. Run `npm start` and `react-native run-ios` or `react-native run-android` to start the application.

## Documentation

RNSurvey lets you create a survey based on a JSON-template. An example template is available [here](src/api/data/questionnaire.json). The user needs to provide a questionnaire identification number and an array of questions. Every question needs to have a `type` attribute that indicates the type of layout RNSurvey needs to draw and which type of IO component it requires. Other attributes are dependent on the type of question as well. Each question needs to have a `title` attribute that is shown in the header.

RNSurvey is based on three containers (components that are connected to the Redux store) internally: _HeaderContainer_, _FooterContainer_, and _QuestionnaireContainer_. Both the HeaderContainer and the FooterContainer are mainly concerned with the navigation within the application. The QuestionnaireContainer contains most of the logic that deals with the actual survey. Its main purpose is to provide the `<QuestionPicker>` component with the right properties.

__QuestionPicker__

The QuestionPicker component was built to switch between different types of layouts. RNSurvey currently only provides the `<BasicQuestion>` layout, which includes a description of the question and an IO element. The QuestionPicker decides which layout it needs to draw based on the `type` attribute of the question.

__BasicQuestion__

The provided `<BasicQuestion>` component renders a description of the question and an _IO_ component. This _IO_ component lets the user interact with the application and supports various types of questions. Depending on the `type` attribute of the question, it renders a `<Numeric>`, a `<Slider>`, a `<SingleChoice>`, or a `<MultipleChoice>` component. 





 
