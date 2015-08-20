var generator = require('yeoman-generator');

function uncapitalize(text) {
  if (!text || typeof text !== 'string') {
    return null;
  }

  return text.charAt(0).toLowerCase() + text.slice(1);
}


module.exports = generator.Base.extend({
  askModuleName: function() {
    var done = this.async();
    this.prompt({
      type    : 'input',
      name    : 'name',
      message : 'What will be your component name? (use capital letter)'
    }, function (answers) {
        this.componentName = answers.name;
        this.lowComponentName = uncapitalize(this.componentName);
        done();
      }.bind(this));
  },

  writing: function() {
    this.fs.copyTpl(
      this.templatePath('view/App.jsx'),
      this.destinationPath(this.lowComponentName + '/' + this.componentName + '.jsx'),
      {
        componentName: this.componentName,
        lowComponentName: this.lowComponentName
      }
    );
    this.fs.copy(
        this.templatePath('*.*'),
        this.destinationPath(this.lowComponentName)
    );
  },

  done: function() {
    this.log.ok(
      'Initial structure for component ' + this.componentName + ' is ready.');
  }
});
