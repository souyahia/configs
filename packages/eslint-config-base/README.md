# @souyahia/eslint-config-base

This package provides the base ESlint configuration that I use in my pure JS projects.

# Installation

To install this eslint configuration, simply run the following command :

```
yarn add -D @souyahia/eslint-config-base
```

Until ESlint flat config is implemented (_see the note below_), you will also need to install the required peer
dependencies.

# How to Use

To extend this config, simply place the following snipplet in your `.eslintrc.js` to include the config :

```javascript
module.exports = {
  extends: ['@souyahia/eslint-config-base'],
};
```

# A note reguarding ESlint Flat Configs

Due to the limitations of how ESlint works right now, shared ESlint configurations **need** to specify their
dependencies (such as other configs, plugins etc...) as peer dependencies. This forces developers that want to use my
config to manually download each one of my dependencies. This is obviously very cumbersome and kind of misses the whole
point of a shared config. This is even more true when it comes to monorepos.There are ways of bypassing thislimitation
([@rushstack/eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch) etc...) but they come with their own
limitations and are considered as "patches" rather than actual features.

However, in August 2022, the ESlint team came up with
[a new config system called ESlint Flat Config](https://eslint.org/blog/2022/08/new-config-system-part-1/). This new
config system allows (among other things) for a shared config to declare its dependencies as dev (or regular)
dependencies, and include them in the config file (by importing them as a node package). This is obviously great news
for me, since it basically means all of the issues listed in the previous paragraph will be solved. However, I need to
give time to ESlint configs and plugins packages to adapt to this new config system. For instance, the
typescript-eslint package created [an issue](https://github.com/typescript-eslint/typescript-eslint/issues/5938) on the
08/11 to update their config system.

This means that for now, I need to stick with the old config and its peer dependencies, and keep an eye on the package
updates until the new ESlint config system is mature enough for us to migrate to it.

Some references to read more about this subject :

- https://github.com/eslint/eslint/issues/3458
- https://eslint.org/blog/2022/08/new-config-system-part-1/
- https://eslint.org/blog/2022/08/new-config-system-part-2/
- https://eslint.org/blog/2022/08/new-config-system-part-3/
- https://github.com/eslint/eslint/issues/13481
- https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new
- https://github.com/typescript-eslint/typescript-eslint/issues/5938
