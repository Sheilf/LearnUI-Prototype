var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
HIGH priority in order:
//Easy: Fix "Go Back" problem
//refactor the vars to be a lot more scope friendly.
//add a small and functional submit button
//create color themes: relaxed blue and  friendly yellow
//remove ontype hints -> make them onClick, make them more responsive and less cluttered.
//when seriously refactoring, take care of clutter and make UI more focused and concise.
//Place Student Question Critique where Hints are, remove hints once answer is submitted.

LOW priority:
//remove on hover tree, make it onClick
//create trade/send & create-question when your server side skills improve
//on wrong answer, suggest something based on color progress

*/

var submitButton = {
  transition: '0.5s all ease-in-out',
  border: '1px solid cyan'
};

var ChallengeBlocks = {
  visibility: 'hidden',
  opacity: 0,

  transition: '1.5s all ease-in-out'

};
var multiCounter = 0;
var EliBomb = {
  visibility: 'hidden',
  opacity: 0

};

var HintTest = {
  transition: '0.75s all ease-in-out'
};
var HintOneChange = {

  opacity: 0.33

};
var HintTwoChange = {

  opacity: 0.33

};
var HintThreeChange = {

  opacity: 0.33

};
var HintOneSpace = {
  opacity: 0,
  visibility: 'hidden',
  width: 185,
  height: 185,
  marginLeft: '40%'

};
var HintTwoSpace = {
  opacity: 0,
  visibility: 'hidden',
  width: 185,
  height: 185,
  marginLeft: '40%'

};
var HintThreeSpace = {
  opacity: 0,
  visibility: 'hidden',
  width: 185,
  height: 185,
  marginLeft: '40%'

};
var NextQuestion = {

  visibility: 'hidden',
  opacity: 0
};
var ModuleCloser = {
  opacity: 0,
  visibility: 'hidden'
};
var FormSpace = {
  border: '0px solid black'
};
var ReaderSpace = {
  opacity: 0,
  visibility: 'hidden'
};
var GroupWorkSpace = {
  opacity: 0,
  visibility: 'hidden'
};
var LectureSpace = {
  opacity: 0,
  visibility: 'hidden'

};
var NoteStyle = {
  transition: '.75s all ease-in-out',
  position: 'absolute',
  top: '10%',
  backgroundColor: '#C79000', //gold color
  opacity: 0,
  visibility: 'hidden'
};

var Reader = function (_React$Component) {
  _inherits(Reader, _React$Component);

  //noteForQuestion is a prop passed down from masterclass state.
  function Reader(props) {
    _classCallCheck(this, Reader);

    var _this = _possibleConstructorReturn(this, (Reader.__proto__ || Object.getPrototypeOf(Reader)).call(this, props));

    _this.state = {
      noteForQuestion: _this.props.onQuestion,
      noteIsOpened: false,
      noteType: 'no-note'
      //on Click ->toggle noteIsOpened state to render  Note OR null. Based on the highlighted text's ID, render a Note with noteType = "note-color"
    };_this.openNote = _this.openNote.bind(_this);
    return _this;
  }

  _createClass(Reader, [{
    key: 'openNote',
    value: function openNote(event) {
      if (event.target.id === "gold-note") {
        this.setState({
          noteIsOpened: true,
          noteType: "GOLD"
        });

        NoteStyle.visibility = 'visible';
        NoteStyle.opacity = 1;
      } else {
        this.setState({
          noteIsOpened: false
        });

        NoteStyle.visibility = 'visible';
        NoteStyle.opacity = 0;
      }
    }
  }, {
    key: 'render',
    value: function render() {

      if (this.props.onQuestion === "ONE") {} else if (this.props.onQuestion === "TWO") {

        var ReaderContent = React.createElement(
          'p',
          null,
          'Content for Reader q 2'
        );
      }
      return React.createElement(
        'section',
        { onClick: this.openNote },
        React.createElement(
          'div',
          null,
          React.createElement(
            'h2',
            null,
            ' Notes On Question ',
            this.props.onQuestion,
            ' '
          ),
          React.createElement(
            'h3',
            null,
            ' In Classroom: ',
            this.props.classRoom,
            ' '
          ),
          React.createElement(
            'h4',
            null,
            'We will use color codes and animations here for collectibles. '
          )
        ),
        React.createElement(
          'div',
          null,
          ReaderContent
        ),
        React.createElement(
          'div',
          { id: 'note-container', style: NoteStyle },
          this.state.noteIsOpened ? React.createElement(Note, { noteForQuestion: this.state.noteForQuestion, noteType: this.state.noteType }) : null
        )
      );
    }
  }]);

  return Reader;
}(React.Component);

var Note = function (_React$Component2) {
  _inherits(Note, _React$Component2);

  //renders a Note based on Reader states passed into props
  function Note(props) {
    _classCallCheck(this, Note);

    return _possibleConstructorReturn(this, (Note.__proto__ || Object.getPrototypeOf(Note)).call(this, props));
  }

  _createClass(Note, [{
    key: 'render',
    value: function render() {

      return React.createElement(
        'section',
        { id: 'note' },
        React.createElement(
          'div',
          null,
          'Note Type: ',
          this.props.noteType,
          ' is opened for Question: ',
          this.props.noteForQuestion
        ),
        React.createElement(
          'div',
          { id: 'card-image-container' },
          React.createElement(
            'div',
            { id: 'rotate-border' },
            React.createElement(
              'div',
              { id: 'rotate-circle' },
              React.createElement(
                'div',
                { id: 'rotate-line' },
                ' '
              )
            )
          )
        )
      );
    }
  }]);

  return Note;
}(React.Component);

var GroupWork = function (_React$Component3) {
  _inherits(GroupWork, _React$Component3);

  //Needs a lot of work. Just renders text for now.
  function GroupWork(props) {
    _classCallCheck(this, GroupWork);

    return _possibleConstructorReturn(this, (GroupWork.__proto__ || Object.getPrototypeOf(GroupWork)).call(this, props));
  }

  _createClass(GroupWork, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'section',
        null,
        React.createElement(
          'h2',
          null,
          'Forum for question:',
          this.props.onQuestion
        ),
        React.createElement(
          'h3',
          null,
          'In Classroom: ',
          this.props.classRoom,
          ' '
        ),
        React.createElement(
          'section',
          null,
          React.createElement(
            'h4',
            { className: 'user-post' },
            'Post One'
          ),
          React.createElement(
            'div',
            { id: 'dev-note' },
            React.createElement(
              'p',
              null,
              ' read more about this stuff [GET & POST] https://www.w3schools.com/html/html_forms.asp#w3-example'
            ),
            React.createElement(
              'p',
              null,
              ' response to post 1'
            ),
            React.createElement(
              'p',
              null,
              '  response to post 1'
            ),
            React.createElement(
              'p',
              null,
              ' response to post 1'
            )
          )
        )
      );
    }
  }]);

  return GroupWork;
}(React.Component);

var Lecture = function (_React$Component4) {
  _inherits(Lecture, _React$Component4);

  //Renders a video based on question props.
  function Lecture(props) {
    _classCallCheck(this, Lecture);

    return _possibleConstructorReturn(this, (Lecture.__proto__ || Object.getPrototypeOf(Lecture)).call(this, props));
  }

  _createClass(Lecture, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'section',
        { id: 'lecture-stuff' },
        React.createElement(
          'h2',
          null,
          ' Lecture is on Question ',
          this.props.onQuestion,
          ' '
        ),
        React.createElement(
          'h3',
          null,
          ' In classroom: ',
          this.props.classRoom,
          ' '
        ),
        React.createElement(
          'div',
          null,
          React.createElement('iframe', { width: '75%', height: '315', src: 'https://www.youtube.com/embed/9vKqVkMQHKk', frameborder: '0', allowfullscreen: true })
        )
      );
    }
  }]);

  return Lecture;
}(React.Component);

var Hints = function (_React$Component5) {
  _inherits(Hints, _React$Component5);

  function Hints(props) {
    _classCallCheck(this, Hints);

    var _this5 = _possibleConstructorReturn(this, (Hints.__proto__ || Object.getPrototypeOf(Hints)).call(this, props));

    _this5.state = {};
    return _this5;
  }

  _createClass(Hints, [{
    key: 'render',
    value: function render() {
      var hintStack;

      if (this.props.hintNum === "ONE") {
        hintStack = React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            null,
            ' Content for hint 1 '
          )
        );
      } else if (this.props.hintNum === "TWO") {
        hintStack = React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            null,
            ' Content for hint 2 '
          )
        );
      } else if (this.props.hintNum === "THREE") {
        hintStack = React.createElement(
          'div',
          null,
          React.createElement(
            'p',
            null,
            ' Content for hint 3 '
          )
        );
      }

      return React.createElement(
        'section',
        { id: 'hint-test', style: HintTest },
        hintStack
      );
    }
  }]);

  return Hints;
}(React.Component);

var LearnUI = function (_React$Component6) {
  _inherits(LearnUI, _React$Component6);

  function LearnUI(props) {
    _classCallCheck(this, LearnUI);

    var _this6 = _possibleConstructorReturn(this, (LearnUI.__proto__ || Object.getPrototypeOf(LearnUI)).call(this, props));

    _this6.state = {
      isOnQuestion: "ONE",
      readerIsClicked: false,
      groupWorkIsClicked: false,
      lectureIsClicked: false,
      questionHolder: "Placeholder: Question 1",
      userAnswer: '',
      isCorrect: '',
      questionAnswer: "answer is 2",

      hintOneIsActive: false,
      hintOneClickable: false,
      hintTwoIsActive: false,
      hintTwoClickable: false,
      hintThreeIsActive: false,
      hintThreeClickable: false,

      readerFocusActive: false,
      groupworkFocusActive: false,
      lectureFocusActive: false,

      blueCoin: 0,
      greenCoin: 0,
      goldCoin: 0,

      toggleHit: false

      //open hint on click
    };_this6.openHints = _this6.openHints.bind(_this6);
    //open multiple modes -- study mode
    _this6.openFocusMode = _this6.openFocusMode.bind(_this6); //tree symbol

    //open single component - help modes
    _this6.openModule = _this6.openModule.bind(_this6); //open module based on attribute
    _this6.closeModule = _this6.closeModule.bind(_this6);

    //handle hints, changes, & submits on key change. 

    _this6.handleChange = _this6.handleChange.bind(_this6); //do some events to change the inputs value
    _this6.handleSubmit = _this6.handleSubmit.bind(_this6); //enter right or wrong.

    //post correct answer: rate question based on some values
    // continue to next question
    _this6.studentRateQuestion = _this6.studentRateQuestion.bind(_this6); //
    _this6.changeQuestion = _this6.changeQuestion.bind(_this6);

    //next question will be available regardless..
    // this is easy to put in. You'll have a few switches to take care of.

    return _this6;
  }

  _createClass(LearnUI, [{
    key: 'openHints',
    value: function openHints(event) {
      this.setState({
        toggleHit: !this.state.toggleHit
      });

      if (event.target.id === "hint-1") {
        this.setState({
          hintOneClickable: true,
          hintTwoClickable: false,
          hintThreeClickable: false
        });

        HintOneSpace.opacity = 1;
        HintOneSpace.visibility = 'visible';

        HintThreeSpace.opacity = 0;
        HintThreeSpace.visibility = 'hidden';

        HintTwoSpace.opacity = 0;
        HintTwoSpace.visibility = 'hidden';

        HintOneChange.opacity = 0.75;
        HintOneChange.backgroundColor = '#000F89';

        HintTwoChange.opacity = 0.33;
        HintTwoChange.backgroundColor = '';

        HintThreeChange.opacity = 0.33;
        HintThreeChange.backgroundColor = '';

        HintTest.backgroundColor = '#000F89';
      } else if (event.target.id === "hint-2") {
        this.setState({
          hintOneClickable: false,
          hintTwoClickable: true,
          hintThreeClickable: false

        });

        HintOneSpace.opacity = 0;
        HintOneSpace.visibility = 'hidden';

        HintThreeSpace.opacity = 0;
        HintThreeSpace.visibility = 'hidden';

        HintTwoSpace.opacity = 1;
        HintTwoSpace.visibility = 'visible';

        HintTest.backgroundColor = 'seagreen';

        HintOneChange.opacity = 0.33;
        HintOneChange.backgroundColor = '';

        HintTwoChange.opacity = 0.75;
        HintTwoChange.backgroundColor = 'seagreen';

        HintThreeChange.opacity = 0.33;
        HintThreeChange.backgroundColor = '';
      } else if (event.target.id === "hint-3") {
        this.setState({

          hintOneClickable: false,
          hintTwoClickable: false,
          hintThreeClickable: true
        });

        HintOneSpace.opacity = 0;
        HintOneSpace.visibility = 'hidden';

        HintThreeSpace.opacity = 1;
        HintThreeSpace.visibility = 'visible';

        HintTwoSpace.opacity = 0;
        HintTwoSpace.visibility = 'hidden';

        HintTest.backgroundColor = '#C79000';

        HintOneChange.opacity = 0.33;
        HintOneChange.backgroundColor = '';

        HintTwoChange.opacity = 0.33;
        HintTwoChange.backgroundColor = '';

        HintThreeChange.opacity = 0.75;
        HintThreeChange.backgroundColor = '#C79000';
      } else {
        console.log("fuck:");
      }

      console.log(this.state.hintOneIsActive, this.state.hintTwoIsActive, this.state.hintThreeIsActive);
    }
  }, {
    key: 'studentRateQuestion',
    value: function studentRateQuestion(event) {
      alert("Clicking here will do something");
    }
  }, {
    key: 'openFocusMode',
    value: function openFocusMode(event) {
      /* Convert from onHover to onClick */
      /* Make single components open wide 100% on screen when singular */
      var checkboxes = document.getElementsByClassName("checkbox");
      if (event.target.name == "Reader" && event.target.checked) {

        this.setState({
          readerIsClicked: true

        });

        ModuleCloser.backgroundColor = "purple";
        multiCounter++; //
        ReaderSpace.opacity = 1;
        ReaderSpace.visibility = 'visible';
        ReaderSpace.top = '120%';
        ReaderSpace.left = 0;

        if (multiCounter < 3) {
          ReaderSpace.width = "50%";
          GroupWorkSpace.width = '50%';
          GroupWorkSpace.left = '50%';
          LectureSpace.left = '50%';
          LectureSpace.width = '50%';
        } else {
          ReaderSpace.width = "33%";
          ReaderSpace.left = 0;
          GroupWorkSpace.width = "33%";
          GroupWorkSpace.left = '33%';
          LectureSpace.left = '66%';
          LectureSpace.width = "33%";
        }
      } else if (event.target.name == "Reader" && !event.target.checked) {

        this.setState({
          readerIsClicked: false

        });
        multiCounter--; //

        GroupWorkSpace.left = 0;
        GroupWorkSpace.width = '50%';
        LectureSpace.left = "50%";
        LectureSpace.width = "50%";
        ReaderSpace.opacity = 0;
        ReaderSpace.visibility = 'hidden';

        ReaderSpace.width = "";
      } else if (event.target.name == "Groupwork" && event.target.checked) {

        this.setState({
          groupWorkIsClicked: true

        });

        ModuleCloser.backgroundColor = "green";
        multiCounter++; //
        GroupWorkSpace.opacity = 1;
        GroupWorkSpace.visibility = 'visible';

        GroupWorkSpace.top = '115%';

        if (multiCounter < 3) {
          GroupWorkSpace.width = "50%";
          GroupWorkSpace.left = '50%';
          LectureSpace.left = 0;
          ReaderSpace.left = 0;
          ReaderSpace.width = '50%';
          LectureSpace.width = '50%';
        } else {
          ReaderSpace.width = "33%";
          ReaderSpace.left = 0;
          GroupWorkSpace.width = "33%";
          GroupWorkSpace.left = "33%";
          LectureSpace.width = "33%";
          LectureSpace.left = '66%';
        }
      } else if (event.target.name == "Groupwork" && !event.target.checked) {

        this.setState({
          groupworkIsClicked: false

        });
        multiCounter--; //
        GroupWorkSpace.opacity = 0;
        GroupWorkSpace.visibility = 'hidden';
        GroupWorkSpace.width = "";

        ReaderSpace.left = 0;
        LectureSpace.left = '50%';
        ReaderSpace.width = '50%';
        LectureSpace.width = '50%';
      } else if (event.target.name == "Lecture" && event.target.checked) {
        this.setState({
          lectureIsClicked: true

        });
        multiCounter++; //
        ModuleCloser.backgroundColor = "black";

        LectureSpace.opacity = 1;
        LectureSpace.visibility = 'visible';

        LectureSpace.top = '115%';

        if (multiCounter < 3) {
          LectureSpace.width = "50%";
          GroupWorkSpace.width = '50%';
          GroupWorkSpace.left = 0;

          LectureSpace.left = '50%';
        } else {
          ReaderSpace.width = "33%";
          GroupWorkSpace.width = "33%";
          GroupWorkSpace.left = '33%';
          LectureSpace.width = "33%";
          LectureSpace.left = "66%";
        }
      } else if (event.target.name == "Lecture" && !event.target.checked) {

        this.setState({
          lectureIsClicked: false

        });
        multiCounter--; //
        LectureSpace.opacity = 0;
        LectureSpace.visibility = 'hidden';
        LectureSpace.width = "";

        ReaderSpace.left = 0;
        GroupWorkSpace.left = '50%';
        ReaderSpace.width = '50%';
        GroupWorkSpace.width = '50%';
      } else {
        alert("Dog");
      }
    }
  }, {
    key: 'changeQuestion',
    value: function changeQuestion(event) {
      document.getElementById("text").value = "";

      document.getElementById("text").setAttribute("placeholder", "type in 'answer is 2x' ");
      this.setState({
        isOnQuestion: "TWO",
        isCorrect: '',
        userAnswer: '',
        questionContent: '2: What is derivative of x^2',
        questionAnswer: "Answer is 2x"

      });

      HintOneSpace.opacity = 0;
      HintOneSpace.visibility = 'hidden';
      HintTwoSpace.opacity = 0;
      HintTwoSpace.visibility = 'hidden';
      HintThreeSpace.opacity = 0;
      HintThreeSpace.visibility = 'hidden';
      HintOneSpace.visibility = 'hidden';
      FormSpace.border = '1px solid black';
      NextQuestion.visibility = 'hidden';

      ChallengeBlocks.visibility = 'hidden';
      ChallengeBlocks.opacity = 0;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {

      this.setState({
        userAnswer: event.target.value

      });

      if (this.state.isOnQuestion === "ONE") {

        if (event.target.value === "answer") {

          FormSpace.border = '2px solid #000F89';
        } else if (event.target.value === "answer is") {

          FormSpace.border = '3px solid seagreen';
        } else if (event.target.value === "answer is 2") {

          FormSpace.border = '4px solid #C79000';
          submitButton.border = '3px solid cyan';
        }
      } else if (this.state.isOnQuestion === "TWO") {
        this.setState({
          userAnswer: event.target.value,
          isCorrect: ''

        });

        /*
          fade
          Reset Hint Fields 
          Change Module fields
        */
        if (event.target.value === "answer") {
          //
          //add stuff


        }
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {

      if (this.state.isOnQuestion === "ONE") {

        if (this.state.userAnswer === "answer is 2") {
          this.setState({
            isCorrect: "answer is correct",
            blueCoin: 2,
            questionHolder: 'Placeholder: Question 2'
          });

          FormSpace.border = '1px solid green', FormSpace.boxShadow = '';

          ChallengeBlocks.visibility = 'visible';
          ChallengeBlocks.opacity = 1;

          NextQuestion.visibility = 'visible';
          NextQuestion.opacity = 1;
        } else {
          this.setState({
            isCorrect: 'answer is not correct'
          });
        }
      } else if (this.state.isOnQuestion === "TWO") {
        if (this.state.userAnswer === "answer is 2x") {
          this.setState({
            isCorrect: "answer is correct",
            greenCoin: this.state.greenCoin + 3,
            questionHolder: "Placeholder: Question 2"

          });

          FormSpace.border = '1px solid green';

          FormSpace.boxShadow = '';

          NextQuestion.visibility = 'visible';
          NextQuestion.opacity = 1;
        } else {
          this.setState({
            isCorrect: 'answer is not correct'
          });
        }
      }
      event.preventDefault();
    }
  }, {
    key: 'closeModule',
    value: function closeModule(event) {
      this.setState({
        readerIsClicked: false,
        groupWorkIsClicked: false,
        lectureIsClicked: false
      });

      ModuleCloser.opacity = 0;
      ModuleCloser.visibility = 'hidden';
      ReaderSpace.paddingBottom = '0%';
      ReaderSpace.opacity = 0;
      ReaderSpace.visibility = 'hidden';

      GroupWorkSpace.opacity = 0;
      GroupWorkSpace.visibility = 'hidden';
      LectureSpace.opacity = 0;
      LectureSpace.visibility = 'hidden';
    }
  }, {
    key: 'openModule',
    value: function openModule(event) {
      if (event.target.id === "reader-nav") {
        this.setState({
          readerIsClicked: true,
          groupWorkIsClicked: false,
          lectureIsClicked: false
        });

        ModuleCloser.opacity = 1;
        ModuleCloser.visibility = 'visible';

        ReaderSpace.opacity = 1;
        ReaderSpace.visibility = 'visible';
        ReaderSpace.left = '40%';
        ReaderSpace.width = '60%';
        ReaderSpace.top = 55;
        GroupWorkSpace.opacity = 0;
        GroupWorkSpace.visibility = 'hidden';
        GroupWorkSpace.height = '0%';
        GroupWorkSpace.width = '0%';

        LectureSpace.opacity = 0;

        LectureSpace.visibility = 'hidden';
      } else if (event.target.id === "groupwork-nav") {
        this.setState({
          readerIsClicked: false,
          groupWorkIsClicked: true,
          lectureIsClicked: false
        });

        ModuleCloser.opacity = 1;
        ModuleCloser.visibility = 'visible';

        LectureSpace.visibility = 'hidden';
        LectureSpace.opacity = 0;
        ReaderSpace.opacity = 0;
        ReaderSpace.visibility = 'hidden';
        ReaderSpace.paddingBottom = '0%';

        GroupWorkSpace.opacity = 1;
        GroupWorkSpace.visibility = 'visible';
        GroupWorkSpace.height = '75%';
        GroupWorkSpace.width = '60%';
        GroupWorkSpace.top = 55;
        GroupWorkSpace.left = '40%';
      } else if (event.target.id === "lecture-nav") {
        this.setState({
          readerIsClicked: false,
          groupWorkIsClicked: false,
          lectureIsClicked: true
        });

        ModuleCloser.opacity = 1;
        ModuleCloser.visibility = 'visible';

        ReaderSpace.opacity = 0;
        ReaderSpace.visibility = 'hidden';
        ReaderSpace.paddingBottom = '0%';

        GroupWorkSpace.opacity = 0;
        GroupWorkSpace.visibility = 'hidden';
        GroupWorkSpace.height = '0%';
        GroupWorkSpace.width = '0%';

        LectureSpace.opacity = 1;
        LectureSpace.visibility = 'visible';
        LectureSpace.top = 55;
        LectureSpace.width = '60%';
        LectureSpace.left = '40%';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      // {<!--There are hint containers that open the option for single hint
      // but the defgault is combined
      return React.createElement(
        'main',
        { style: MainStyler },
        React.createElement(
          'div',
          { id: 'classroom-welcome' },
          'Welcome to ',
          this.props.classRoom
        ),
        React.createElement(
          'section',
          { id: 'module-closer', style: ModuleCloser, onClick: this.closeModule },
          React.createElement(
            'p',
            null,
            'X'
          )
        ),
        React.createElement(
          'section',
          { id: 'module-container' },
          React.createElement(
            'div',
            { id: 'form-container', className: 'module-spaces', style: FormSpace },
            React.createElement(
              'p',
              null,
              ' ',
              this.state.questionHolder
            ),
            React.createElement(
              'p',
              null,
              this.props.classRoom === "Algebra" ? "First Question for Algebra" : this.props.classRoom === "Geometry" ? "First question for Geometry" : this.props.classRoom === "Calculus" ? "First question for Calculus " : null
            ),
            React.createElement('p', null),
            React.createElement(
              'form',
              { id: 'form-space', onSubmit: this.handleSubmit },
              React.createElement(
                'label',
                null,
                React.createElement('input', { id: 'text', type: 'text', placeholder: 'type in \'answer is 2\'', onChange: this.handleChange })
              ),
              React.createElement(
                'button',
                { id: 'submit-answer', style: submitButton },
                '^'
              )
            ),
            React.createElement(
              'p',
              null,
              this.state.isCorrect
            ),
            React.createElement(
              'section',
              { style: NextQuestion, id: 'next-question', onClick: this.changeQuestion },
              'Next Question'
            ),
            React.createElement(
              'section',
              { id: 'challenge-meter', onClick: this.studentRateQuestion, style: ChallengeBlocks },
              React.createElement(
                'span',
                { id: 'challenge-degree-0', className: 'challenge-types' },
                'Good question!'
              ),
              React.createElement(
                'span',
                { id: 'challenge-degree-1', className: 'challenge-types' },
                'Learned a lot'
              ),
              React.createElement('br', null),
              React.createElement(
                'span',
                { id: 'challenge-degree-2', className: 'challenge-types' },
                'Frustrating question'
              ),
              React.createElement(
                'span',
                { id: 'challenge-degree-3', className: 'challenge-types' },
                'Didn\'t know enough'
              )
            )
          ),
          React.createElement(
            'div',
            { id: 'reader-container', className: 'module-spaces', style: ReaderSpace },
            this.state.readerIsClicked ? React.createElement(Reader, { onQuestion: this.state.isOnQuestion, classRoom: this.props.classRoom }) : null
          ),
          React.createElement(
            'div',
            { id: 'groupwork-container', className: 'module-spaces', style: GroupWorkSpace },
            this.state.groupWorkIsClicked ? React.createElement(GroupWork, { onQuestion: this.state.isOnQuestion, classRoom: this.props.classRoom }) : null
          ),
          React.createElement(
            'div',
            { id: 'lecture-container', className: 'module-spaces', style: LectureSpace },
            this.state.lectureIsClicked ? React.createElement(Lecture, { onQuestion: this.state.isOnQuestion, classRoom: this.props.classRoom }) : null
          )
        ),
        React.createElement(
          'section',
          { id: 'hint-containers' },
          React.createElement(
            'div',
            { id: 'hint-1-container', className: 'module-spaces', style: HintOneSpace },
            this.state.hintOneClickable ? React.createElement(Hints, { onQuestion: this.state.isOnQuestion, hintNum: 'ONE' }) : null
          ),
          React.createElement(
            'div',
            { id: 'hint-2-container', className: 'module-spaces', style: HintTwoSpace },
            this.state.hintTwoClickable ? React.createElement(Hints, { onQuestion: this.state.isOnQuestion, hintNum: 'TWO' }) : null
          ),
          React.createElement(
            'div',
            { id: 'hint-3-container', className: 'module-spaces', style: HintThreeSpace },
            this.state.hintThreeClickable ? React.createElement(Hints, { onQuestion: this.state.isOnQuestion, hintNum: 'THREE' }) : null
          )
        ),
        React.createElement(
          'div',
          { id: 'hint-navigation', onClick: this.openHints },
          React.createElement(
            'div',
            { className: 'hint-x', id: 'hint-1', style: HintOneChange },
            'Hint 1'
          ),
          React.createElement(
            'div',
            { className: 'hint-x', id: 'hint-2', style: HintTwoChange },
            'Hint 2'
          ),
          React.createElement(
            'div',
            { className: 'hint-x', id: 'hint-3', style: HintThreeChange },
            'Hint 3'
          )
        ),
        React.createElement(
          'nav',
          { id: 'module-navigation', onClick: this.openModule },
          React.createElement(
            'div',
            { className: 'navigators', id: 'reader-nav', title: 'reader-container' },
            ' Reader'
          ),
          React.createElement(
            'div',
            { className: 'navigators', id: 'groupwork-nav' },
            ' Groupwork'
          ),
          React.createElement(
            'div',
            { className: 'navigators', id: 'lecture-nav' },
            ' Lecture'
          ),
          React.createElement(
            'div',
            { id: 'focus-mode-component' },
            React.createElement('img', { id: 'tree-logo', src: 'http://res.cloudinary.com/eduprojectsil/image/upload/v1511074662/Logomakr_2XPFER_v0eflm.png' }),
            React.createElement(
              'div',
              { id: 'hover-options' },
              'open multiple modes',
              React.createElement(
                'form',
                null,
                React.createElement('input', { className: 'checkbox', type: 'checkbox', name: 'Reader', onClick: this.openFocusMode }),
                'Reader',
                React.createElement('br', null),
                React.createElement('input', { className: 'checkbox', type: 'checkbox', name: 'Groupwork', onClick: this.openFocusMode }),
                'Groupwork',
                React.createElement('br', null),
                React.createElement('input', { className: 'checkbox', type: 'checkbox', name: 'Lecture', onClick: this.openFocusMode }),
                'Lecture'
              )
            ),
            React.createElement(
              'div',
              null,
              React.createElement(
                'div',
                { style: EliBomb },
                'Eli bomb bombombombomb'
              )
            )
          )
        ),
        React.createElement(
          'section',
          { id: 'coin-container' },
          React.createElement(
            'p',
            null,
            ' Coins '
          ),
          React.createElement(
            'div',
            { id: 'coin-1-blue', className: 'coin' },
            this.state.blueCoin,
            ' '
          ),
          React.createElement(
            'div',
            { id: 'coin-2-green', className: 'coin' },
            this.state.greenCoin
          ),
          React.createElement(
            'div',
            { id: 'coin-3-gold', className: 'coin' },
            this.state.goldCoin
          )
        )
      );
    }
  }]);

  return LearnUI;
}(React.Component);

var MainStyler = {
  transition: '1s all ease-in-out'
};
ReactDOM.render(React.createElement(LearnUI, null), document.getElementById("app"));

/*
var EnterRoomAlgebra = {
  transition: '1s all ease-in-out',
  opacity: 0,
  visibility: 'hidden'
}
var DeadClass = {
  transition: '1.25s all ease-in-out',
  visibility: 'visible',
  opacity: 1


}
var EnterRoomGeometry = {
  transition: '1s all ease-in-out',
  opacity: 0,
  visibility: 'hidden'
}
var EnterRoomCalculus = {
  transition: '1s all ease-in-out',
  opacity: 0,
  visibility: 'hidden'
}
var ControllerStyle ={
  transition: '1s all ease-in-out',
  opacity: 0,
  visibility: 'hidden'

}

class Course extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      algebraIsPressed: false,
      geometryIsPressed: false,
      calculusIsPressed: false,
      user_controller: 'home'
    }

    this.courseSelected = this.courseSelected.bind(this);

    this.controllerClicked = this.controllerClicked.bind(this);
  }

  controllerClicked(event){
    this.setState({
      user_controller: 'home',

    })
    MainStyler.opacity = 0;
    MainStyler.visibility  = 'hidden';

    DeadClass.opacity = 1;
    DeadClass.visibility = 'visible';
  }

  courseSelected(event){

    ControllerStyle.opacity = 1;
    ControllerStyle.visibility = 'visible';

    if(event.target.id==="algebra" || event.target.id==="algebra-image"){
      this.setState({
        algebraIsPressed: true,
        geometryIsPressed: false,
        calculusIsPressed: false,
        user_controller: "Go back"
      })
      DeadClass.opacity = 0;
      DeadClass.visibility = 'hidden';
      EnterRoomAlgebra.opacity = 1;
      EnterRoomAlgebra.visibility= 'visible';

      EnterRoomGeometry.opacity = 0;
      EnterRoomGeometry.visibility = 'hidden';

      EnterRoomCalculus.opacity = 0;
      EnterRoomCalculus.visibility = 'hidden';
    }else if(event.target.id==="geometry" || event.target.id==="geometry-image"){
      this.setState({
        algebraIsPressed: false,
        geometryIsPressed: true,
        calculusIsPressed: false,
        user_controller: "Go back"
      })
      DeadClass.opacity = 0;
      DeadClass.visibility = 'hidden';
      EnterRoomAlgebra.opacity = 0;
      EnterRoomAlgebra.visibility= 'hidden';

      EnterRoomGeometry.opacity = 1;
      EnterRoomGeometry.visibility = 'visible';

      EnterRoomCalculus.opacity = 0;
      EnterRoomCalculus.visibility = 'hidden';

    }else if(event.target.id==="calculus" || event.target.id==="calculus-image"){
      this.setState({
        algebraIsPressed: false,
        geometryIsPressed: false,
        calculusIsPressed: true,
        user_controller: "Go back"
      })
      DeadClass.opacity = 0;
      DeadClass.visibility = 'hidden';
      EnterRoomAlgebra.opacity = 0;
      EnterRoomAlgebra.visibility= 'hidden';

      EnterRoomGeometry.opacity = 0;
      EnterRoomGeometry.visibility = 'hidden';

      EnterRoomCalculus.opacity =1;
      EnterRoomCalculus.visibility = 'visible';

    }

  }

  render(){
    return(
      <section> 


       
        <div>
          <div style={EnterRoomAlgebra}>
            {this.state.algebraIsPressed ? <LearnUI classRoom="Algebra" /> : null}
          </div>
          <div style={EnterRoomGeometry}>
            {this.state.geometryIsPressed ? <LearnUI classRoom = "Geometry" /> : null}
          </div>

          <div>
            {this.state.calculusIsPressed ? <LearnUI classRoom = "Calculus" /> : null}
          </div>
        </div>

        <div onClick={this.courseSelected}  style={DeadClass}>


          <div className = "enter-classroom" id="algebra">
            Algebra

            <img className="classroom-images" id="algebra-image" src="https://res.cloudinary.com/eduprojectsil/image/upload/v1489028899/algebra1_gh6jus.png" />
          </div>

          <div className="enter-classroom" id="geometry">
            Geometry

            <img id="geometry-image" className="classroom-images" src="https://res.cloudinary.com/eduprojectsil/image/upload/v1489028899/geometry_hhhlum.png" />
          </div>


          <div className="enter-classroom" id="calculus">
            Calculus
            <img id="calculus-image" className="classroom-images" src="https://res.cloudinary.com/eduprojectsil/image/upload/v1489028899/precalc_gcp1fi.png" />
          </div>
        </div>
      </section>

    )
  }


}







*/

/*
When you learn how to server-side stuff do:
and model those components

share questions component is a system where students can draw and design their own
questions for other students to solve for particular bonuses

Coinbag component is to make the coinset a little out of the way and not showing all the time.
in a nutshell, if a student wants to check and do stuff with coins they'll go to the coinbag component. For now the coinpouch is on screen just for testing purposes 


          <div id="share-questions-component"> 
            CreateQ&Share Component 
          </div>
          
          <div id="coin-bag-component"> 
            Coin Pouch
          </div>





*/

/* COURSE NAV





*/

/*SIN ANIM


var xspacing = 16;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 100.0; // Height of wave
var period = 500.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave

function setup() {
  createCanvas(600, 300);
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  background(0,9,73);
  calcWave();
  renderWave();
}

function calcWave() {
  // Increment theta (try different values for 
  // 'angular velocity' here)
  theta += 0.005;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {
  noStroke();
  fill(255);
  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, height/2+yvalues[x], 5, 5);

  }
}





*/