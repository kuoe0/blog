# Harmono

Harmono is a responsive jekyll theme.

- Built for jekyll 2.x
- Supports Google analytics and RSS feeds
- Sass based styles
- Browser support: IE 8+, Chrome, Safari and Firefox
- Fluidly responsive

## Contents

- [harmono](#harmono)
- [About Jekyll](#about-jekyll)
- [How to install/run](#how-to-installrun)
- [Options/Usage](#optionsusage)
  - [Header navigation links](#header-navigation-links)
  - [Footer links](#footer-links)
  - [Copyrights/Disclaimer statements](#copyrightsdisclaimer-statements)
- [Screenshots](#screenshots)
- [Feedback/Bugs/Suggestions](#feedbackbugssuggestions)
- [Version history](#version-history)
- [License](#license)

## About jekyll

[Jekyll](http://jekyllrb.com/) is a static site generator, an open-source tool for creating simple yet powerful websites of all shapes and sizes.

## How to install/run

1. [Fork](https://github.com/web-create/harmono/fork) this repository.
2. Clone it: git clone https://github.com/YOUR-USERNAME/harmono.
3. If you're completely new to jekyll, please read more about [Jekyll](http://jekyllrb.com/) and [Github pages](https://help.github.com/articles/using-jekyll-with-pages).
4. Change your directory into cloned repository.
5. Run `bundle install`
6. Edit the _config.yml on root directory. Change `url` property to to
`http://127.0.0.1:4000` since you are going to run on localhost.
7. Run the jekyll server by having: `jekyll serve --baseurl ''` or `rake preview`

Point your browser to [http://localhost:4000](http://localhost:4000).

Note: If you are a windows user please refer to this nice website - http://jekyll-windows.juthilo.com/ by Julian Thilo to configure ruby + jekyll on windows.

## Options/Usage

harmono has some customizable options. All the configuration details are configured in `_config.yml` file under root of the harmono directory.

Feel free to change your `name`, `descriptionn`, `meta_description`, `author details`,
`social media names` and `Google analytics id` accordingly.

```yml
# Harmono theme configuration. Please change accordingly.
harmono:
  # Site name
  name: Harmono
  # Little description about your site
  description: Harmono is free responsive jekyll theme based on harmony.
  # theme color
  basetheme: theme-base-01 # pre defined thmes are darken, blue-water, redish.
  # Google Analytics key, leave blank to ignore
  google_analytics_key: UA-xxxx-x
  # Profile links, leave blank to ignore
  social:
    email: your@email.address
    linkedin: linkedin_name
    github: github_name
    twitter: twitter_name
    facebook: facebook_name
    gplus: gplus_name

  # Toggle disclaimer in footer
  show_disclaimer: true

  # Toggle comment system
  comment: true
  # Comment system provider
  disqus:
    short_name: harmono
```

### Includes

All the partial includes are under `_includes` directory.

#### Header navigation links

Feel free to add/edit links for your header in the file `header-links.html`.

#### Footer links

Customize your footer links by editing `_includes/footer-links.html`

#### Copyrights/Disclaimer statements

All copyright notes are under `_includes/footer.html`. Also note that you
can toggle on/off copyright notes from the front-end by setting up `show_disclaimer`
property in `_config.yml`.

## Features

### Syntax Highlight

Put the following configurations in your `_config.yml`.

```yml
highlighter: rouge
highlight_theme: <theme name>
```

You can find all supported themes in `assets/css/syntax-theme`.

All themes are modified from the following themes:

- [Solarized Light](https://gist.github.com/scotu/1272660)
- [Solarized Dark](https://gist.github.com/nicolashery/5765395)
- [Tomorrow](https://github.com/MozMorris/tomorrow-pygments)
- [Twilight](https://gist.github.com/dansimpson/803005)
- [Darkly](http://sourcey.com/darkly-pygments-css-theme/)

### Screenshots
![Home page screenshot](https://raw.githubusercontent.com/web-create/harmono/master/assets/css/images/harmono-web.jpg "Desktop screen")

![Post page screenshot](https://raw.githubusercontent.com/web-create/harmono/master/assets/css/images/harmono-web-2.jpg "Post page screen-shot")

![Blog archive page screenshot](https://raw.githubusercontent.com/web-create/harmono/master/assets/css/images/harmono-web-3.jpg "Blog archive page screen-shot")

#### Feedback/Bugs/Suggestions

Please submit as an [issue](https://github.com/web-create/harmono/issues/new),
I am happy to response back.

## License

Free / Open sourced under the
[MIT](https://github.com/web-create/harmono/blob/master/LICENSE.md).
