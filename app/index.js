var generator = require('yeoman-generator');
var _ = require('lodash');
var path = require('path');

function uncapitalize(text) {
  if (!text || typeof text !== 'string') {
    return null;
  }

  return text.charAt(0).toLowerCase() + text.slice(1);
}


module.exports = generator.Base.extend({
  askModuleName: function() {
    var done = this.async();
    var prompts = [{
      type: 'input',
      name: 'appName',
      message: 'What will be your component name? (use capital letter)',
      default: 'App'
    }, {
      type: 'list',
      name: 'type',
      message: 'Component type',
      choices: [{
        value: 'dump',
        name: 'Dump'
      }, {
        value: 'smart',
        name: 'Smart'
      }]
    }];

    this.prompt(prompts, function (props) {
      this.componentName = props.appName;
      this.camelComponentName = _.camelCase(this.componentName);
      this.kebabComponentName = _.kebabCase(this.componentName);
      this.componentType = props.type;
      done();
    }.bind(this));
  },

  writing: function() {
    switch (this.componentType) {
      case 'dump':
        this.sourceRoot(path.join(path.dirname(this.resolved), 'templates/dump'));
        this.fs.copyTpl(
          this.templatePath('stylesheet/b-app.scss'),
          this.destinationPath(this.camelComponentName + '/b-' + this.kebabComponentName + '.scss'),
          {
            kebabComponentName: this.kebabComponentName
          }
        );
        break;
      case 'smart':
        this.sourceRoot(path.join(path.dirname(this.resolved), 'templates/smart'));
        break;
      default:
        break;
    }
    this.fs.copyTpl(
      this.templatePath('view/App.jsx'),
      this.destinationPath(this.camelComponentName + '/' + this.componentName + '.jsx'),
      {
        componentName: this.componentName,
        camelComponentName: this.camelComponentName,
        kebabComponentName: this.kebabComponentName
      }
    );
    this.fs.copy(
        this.templatePath('*.*'),
        this.destinationPath(this.camelComponentName)
    );
  },

  done: function() {
    this.log.ok(
      'Initial structure for component ' + this.componentName + ' is ready.');
  }
});
