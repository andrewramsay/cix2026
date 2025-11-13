# CIX2026 website

This site is built on [jekyll-theme-conference](https://github.com/DigitaleGesellschaft/jekyll-theme-conference).

## Editing

Page content can be found in `<directory>/index.md`, and the main page is `./index.md`.

`_layouts` and `_includes` contain overrides for the corresponding files in the original theme. 

The theme defines sets of objects (talks, rooms, speakers etc) in YAML files which can be found under the `_<object>` directories. `_data/program.yml` is also used to generate the "Program" calendar-style view.

`_config.yml` contains overall site settings.
