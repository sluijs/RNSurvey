# RNSurvey

RNSurvey is a React Native application that adds JSON-based surveys to Android and iOS applications. This repository contains basic building blocks to create your own survey. RNSurvey can be used as a standalone application, but could also be integrated into an existing native application. 

<p float="left" align="center">
  <img src="https://user-images.githubusercontent.com/4366183/54883867-a1d37300-4e6a-11e9-80c9-09edada4f243.png" alt="" width="200" float="left" align="left" />                  
  <img src="https://user-images.githubusercontent.com/4366183/54883870-a26c0980-4e6a-11e9-80fe-88dc501fdc68.png" alt="" width="200" align="center" float="left" />
  <img src="https://user-images.githubusercontent.com/4366183/54883871-a26c0980-4e6a-11e9-972d-4fde987d6561.png" alt="" width="200" float="right" align="right" />
</p>

## Installation

1. Clone this repository: `git clone https://github.com/sluijs/RNSurvey.git`. 

2. Install the dependencies: `yarn add` or `npm install`. RNSurvey has few dependencies, but needs __[ajv](https://github.com/epoberezkin/ajv)__ and __[redux](https://github.com/reduxjs/redux)__ to function properly.

3. Run `npm start` and `react-native run-ios` or `react-native run-android` to start the application.

## Documentation
This is a quick overview to kickstart your RNSurvey.

### Creating a survey
RNSurvey enables you to create a survey based on a JSON-template. This JSON-template needs to be created in accordance with its __[schema](/src/api/schemas/questionnaire.schema.json)__. Validation failure of the provided JSON-template will result in a fatal error.

The JSON-template must have a `data` property, which in turn, should have a property named `questionnaire`. The questionnaire property has two obligatory children: `questionnaire_id` and `questions`. `questions` is an array of question specifications. 

You could create a survey with one slider question like this:

```json
{
  "data": {
    "questionnaire": {
      "questionnaire_id": 1,
      "questions": [
        {
          "question_id": 1,
          "type": 1,
          "title": "Numeric slider",
          "description": "This is an obligatory slider, with a minimum value of 30, default value of 120 and a maximum value of 220.",
          "obligatory": true,
          "min_value": 30,
          "default_value": 120,
          "max_value": 220
        }
      ]
    }
  }
}     
```
An example covering all available question types can be found __[here](src/api/data/questionnaire.json)__. 

The `type` attribute of a question indicates which layout and _IO_ component RNSurvey will draw. RNSurvey uses the [`<QuestionPicker>`](src/components/Questions/Picker/Picker.js) component internally to choose a layout for the question. This repository contains one simple layout: [`<BasicQuestion>`](src/components/Questions/Basic/Basic.js), but you could easily add your own question layouts in this manner. `<BasicQuestion>` is responsible to draw the right _IO_ component to enable the user to interact with the survey. A couple of _IO_ components are currently included: 

* __`Numeric slider`__: Slide between a minimum value and a maximum value. You can set a default value to start with. The according question type is 1.

* __`Numeric input`__: Lets the user type an integer between a minimum and a maximum value. You can set a placeholder and a default value. Its question type is 5.

* __`Single choice`__: Users can pick a single item from a list of options. You can set an option that is selected by default. The corresponding question type is 2.

* __`Multiple choice`__: Users can select multiple items from a list of options. Options that are selected by default can be set. The corresponding question type is 4.

### Extending RNSurvey

RNSurvey is based on three containers (components that are connected to the Redux store) internally: _HeaderContainer_, _FooterContainer_, and _QuestionnaireContainer_. Both the HeaderContainer and the FooterContainer are mainly concerned with navigation. The QuestionnaireContainer contains most of the logic that deals with the actual survey. Its main purpose is to provide the `<QuestionPicker>` component with the right props. 

__Creating a question layout__

If you want to create a new question layout (e.g. an alternative to `<BasicQuestion>`), make sure to add it to the `<QuestionPicker>` component. This component can then decide which layout to draw based on the `type` property of the question.

__Creating an _IO_ component__

RNSurvey is flexible such that it easily allows for new _IO_ components. If you create a new _IO_ component, make sure to give it a unique _type_ property. Once created, you should make sure that your question layout (e.g. `<BasicQuestion>`) knows when to render this _IO_ component.

__Downloading and submitting questionnaires__

If you do not want to include the JSON-template for the survey in the RNSurvey component, you have two options: fetch it from a remote server, or passing it to RNSurvey via its props. If you want to fetch it from a remote server, I'd recommend to use __[Redux Thunk](https://github.com/reduxjs/redux-thunk)__. You can find a tutorial on how to pass information between native and React Native components __[here](https://facebook.github.io/react-native/docs/communication-ios)__. 

## Licensing
[GPLv3](LICENSE)

## Contact
* Author: Rogier van der Sluijs
* Email: r.vander[GITHUB_USERNAME]@icloud.com.
