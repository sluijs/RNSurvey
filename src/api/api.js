//
//  api.js
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

// Third-party
import Ajv from 'ajv';

// Data
import schema from './schemas/questionnaire.schema.json';
import data from './data/questionnaire.json';

class API {
  /**
   * Fetches a questionnaire. This method can be easily extended to load a
   * remotely hosted questionnaire.
   * @return {Object} An object containing a questionnaire, with a pre-specified
   * schema.
   */
  static fetchQuestionnaire() {
    return data;
  }

  /**
   * Fetches a JSON schema to validate the questionnaire with.
   * @return {object} A JSON schema to validate a questionnaire with.
   */
  static fetchSchema() {
    return schema;
  }

  /**
   * Validate a questionnaire by means of a JSON schema.
   * @param  {Object} d   An object containing a JSON questionnaire.
   * @param  {Object} s   An object containing the JSON schema.
   * @return {Bool}       A boolean that indicates the validation status.
   */
  static validate(d, s) {
    const ajv = new Ajv({ useDefaults: true });
    const valid = ajv.validate(s, d);
    if (!valid) {
      if (__DEV__) {
        console.log(ajv.errors);
      }
      return false;
    }
    return true;
  }

  /**
   * Submit the answers from the questionnaire to a remote server, or something
   * else.
   * @param  {Object} answers The answers property from the Redux store.
   */
  static submitAnswers(answers) {
    console.log(answers);
  }
}

export default API;
