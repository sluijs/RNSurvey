//
//  Answers.js [utilities]
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

class Answers {
  static prefill(questions, actions) {
    questions.forEach((q) => {
      // If it is a basic integer, basic float
      if ([1, 2].includes(q.type)) {
        actions.setAnswer(q.question_id, q.default_value);
      }

      // If it is a single choice
      if ([3, 9].includes(q.type)) {
        actions.toggleAnswer(q.question_id, q.default_option);
      }

      // If it is a multiple choice
      if ([4].includes(q.type)) {
        q.default_options.forEach(o => actions.toggleAnswer(q.question_id, o));
      }
    });
  }
}

export default Answers;
