// eslint-disable-next-line no-undef
module.exports = function (plop) {
  plop.setWelcomeMessage("Select Generators");
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "./templates/components/index.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/styles.ts",
        templateFile: "./templates/components/styles.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/stories.tsx",
        templateFile: "./templates/components/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/types.d.ts",
        templateFile: "templates/components/types.d.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/test.tsx",
        templateFile: "templates/components/test.tsx.hbs",
      },
    ],
  });
  plop.setGenerator("page", {
    description: "Create a Page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your page name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/pages/{{pascalCase name}}/index.tsx",
        templateFile: "templates/pages/index.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/pages/{{pascalCase name}}/styles.ts",
        templateFile: "templates/pages/styles.ts.hbs",
      },
    ],
  });
};
